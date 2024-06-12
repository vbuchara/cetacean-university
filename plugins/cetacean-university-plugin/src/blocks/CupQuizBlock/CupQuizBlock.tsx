import '@styles/blocks/cup-quiz-block.scss';

import { useState } from 'react';
import { useUpdateEffect } from 'react-use';
import { v4 as uuid } from 'uuid';
import { lighten } from 'polished';

import {
    TextControl,
    Button
} from "@wordpress/components";
import { 
    type Block, 
    type BlockEditProps, 
    type BlockSaveProps,
    registerBlockType, 
} from "@wordpress/blocks";
import { 
    dispatch,
    select, 
    subscribe,
} from '@wordpress/data';
import { 
    store as blockEditorStore,
    BlockControls,
    AlignmentToolbar
} from '@wordpress/block-editor';
import { 
    store as editorStore 
} from '@wordpress/editor';


import { ReactComponent as QuestionMarkIcon } from '@assets/question-mark.svg';
import { QuizBlockPanel } from '@components/QuizBlockPanel';
import { QuizEditAnswer } from '@components/QuizEditAnswer';
import { QuizSaveAnswer, QuizSaveAnswerRef } from '@components/QuizSaveAnswer';
import { isEqualSet } from '@functions/isEqualSet';
import { ThemeProperties } from '@utils/getThemeProperties';

import type { BlockEditorStore } from '@src/types/BlockEditorStore';
import type { EditorStore } from '@src/types/EditorStore';

export type CupQuizAnswer = {
    id: string,
    answer: string,
    isCorrect: boolean
}

export type CupQuizBlockAttributes = {
    question: string,
    answers: CupQuizAnswer[],
    styles: {
        backgroundColor?: string,
        alignment?: string
    }
}

export type CupQuizBlockType = Block<CupQuizBlockAttributes>;

export type CupQuizEditBlockProps = BlockEditProps<CupQuizBlockAttributes>;

export type CupQuizSaveBlockProps = BlockSaveProps<CupQuizBlockAttributes>;

export class CupQuizBlock {

    public attributes: CupQuizBlockType["attributes"] = {
        question: {
            type: "string"
        },
        answers: {
            type: "array",
            default: [{
                id: uuid(),
                answer: "Answer 1",
                isCorrect: false
            }] satisfies CupQuizBlockAttributes["answers"]
        },
        styles: {
            type: "object",
            default: {
                backgroundColor: ThemeProperties.secondaryColor,
                alignment: "center"
            } satisfies CupQuizBlockAttributes["styles"]
        }
    } as const; 

    public constructor(){
        registerBlockType<CupQuizBlockAttributes>(
            "cetacean-university-plugin/quiz",
            {
                title: "Quiz",
                category: "common",
                description: "A Quiz block that you can use to setup questions for the readers of your posts.",
                icon: <QuestionMarkIcon width={24} height={24} />,
                attributes: this.attributes,
                edit: this.EditComponent,
                example: {
                    attributes: {
                        question: "What is this plugin's name?",
                        answers: [{
                            id: uuid(),
                            answer: "Cetacean University Plugin",
                            isCorrect: true
                        }, {
                            id: uuid(),
                            answer: "Cats Undesired Plugin",
                            isCorrect: false
                        }, {
                            id: uuid(),
                            answer: "Canines Unprepared Plugin",
                            isCorrect: false
                        }, {
                            id: uuid(),
                            answer: "Cobras Unintelligent Plugin",
                            isCorrect: false
                        }],
                        styles: {
                            backgroundColor: ThemeProperties.secondaryColor,
                            alignment: "center"
                        }
                    }
                }
            }
        );
    }

    public initSubscribe(){
        let isLocked = false;
        let isLocking = false;

        async function lockPostUpdate(){
            const editorDispatch = dispatch(editorStore) as unknown as EditorStore;

            isLocking = true;
            await editorDispatch.lockPostSaving("no-right-answer-for-quiz");
            isLocking = false;

            isLocked = true;
        }

        async function unlockPostUpdate(){
            const editorDispatch = dispatch(editorStore) as unknown as EditorStore;

            isLocking = true;
            await editorDispatch.unlockPostSaving("no-right-answer-for-quiz");
            isLocking = false;

            isLocked = false;
        }

        subscribe(async () => {
            if(isLocking) return;
            
            const blockEditorSelectors = select(blockEditorStore) as BlockEditorStore;
            const blocks = blockEditorSelectors.getBlocks();
            const quizBlocks = blocks.filter(
                block => block.name === "cetacean-university-plugin/quiz"
            ) as CupQuizBlockType[];

            const someQuizHasNoRightAnswer = quizBlocks.some(({ attributes }) => {
                const answers = attributes.answers.valueOf() as CupQuizAnswer[];

                return !answers.some(({ isCorrect }) => isCorrect);
            });
            
            if(someQuizHasNoRightAnswer && !isLocked) {
                await lockPostUpdate();
            };

            if(!someQuizHasNoRightAnswer && isLocked){
                await unlockPostUpdate();
            }
        });
    }

    public EditComponent(props: CupQuizEditBlockProps){
        const {
            attributes,
            setAttributes
        } = props;
        const styles = {
            backgroundColor: ThemeProperties.secondaryColor,
            alignment: "center",
            ...attributes.styles
        } satisfies Required<CupQuizBlockAttributes["styles"]>;

        const answersRefMap = new Map<string, HTMLInputElement | null>();

        const [answerIdToFocus, setAnswerIdToFocus] = useState<string | undefined>();

        function addAnswer(){
            if(attributes.answers.length >= 4) return;

            const newAnswerId = uuid();

            setAttributes({
                answers: [...attributes.answers, {
                    answer: `Answer ${attributes.answers.length + 1}`,
                    isCorrect: false,
                    id: newAnswerId
                }]
            });

            setAnswerIdToFocus(newAnswerId);
        }

        useUpdateEffect(() => {
            if(!answerIdToFocus) return;

            answersRefMap.get(answerIdToFocus)?.focus();
        }, [answerIdToFocus]);

        return (
        <div 
            className="cup-quiz-edit-block"
            style={{
                "--background-color": styles.backgroundColor,
                "--border-color": lighten(-0.25)(styles.backgroundColor)
            }}
        >
            <BlockControls>
                <AlignmentToolbar
                    value={styles.alignment}
                    onChange={(value) => setAttributes({ 
                        styles: {...styles, alignment: value } 
                    })}
                />
            </BlockControls>
            <QuizBlockPanel
                {...props}
            />
            <TextControl 
                label="Question:"
                className="cup-quiz-edit-block__input cup-quiz-edit-block__question"
                onChange={(value) => setAttributes({ question: value })}
                value={attributes.question}
                placeholder='Type your question here'
            />
            <p className="cup-quiz-edit-block__group-title">Answers:</p>
            {attributes.answers.map((answer) => {
                return (
                <QuizEditAnswer
                    ref={(ref) => answersRefMap.set(answer.id, ref)}
                    key={answer.id}
                    answer={answer}
                    {...props}
                />
                );
            })}
            <Button 
                variant='primary'
                className='cup-quiz-edit-block__button'
                onClick={addAnswer} 
                disabled={attributes.answers.length >= 4}
            >
                Add Another Answer
            </Button>
        </div>
        );
    }

    public static SaveComponent(props: CupQuizSaveBlockProps){
        const {
            attributes
        } = props;
        const styles = {
            backgroundColor: ThemeProperties.secondaryColor,
            alignment: "center",
            ...attributes.styles
        } satisfies Required<CupQuizBlockAttributes["styles"]>;

        const answersRefMap = new Map<string, QuizSaveAnswerRef | null>();

        const [results, setResults] = useState<string | undefined>();
        const [isDisabledButton, setIsDisabledButton] = useState(false);
        const [
            resultsDivClassesSet, 
            setResultsDivClassesSet
        ] = useState(new Set(["cup-quiz-save-block__result"]));

        function setupResults(
            allCorrectAnswers: Set<string>,
            correctCheckedAnswers: Set<string>,
            wrongCheckedAnswers: Set<string>
        ){
            if(correctCheckedAnswers.size === 0){
                setResults("Sorry, you didn't get any answers right :(");
                setResultsDivClassesSet((resultsDivClasses) => {
                    const newClasses = new Set(resultsDivClasses);
                    newClasses.add("cup-quiz-save-block__result--failure");
                    return newClasses;
                });
                return;
            } 

            if(wrongCheckedAnswers.size > 0){
                setResults(`Sorry, you got ${wrongCheckedAnswers.size} answer(s) wrong.`);
                setResultsDivClassesSet((resultsDivClasses) => {
                    const newClasses = new Set(resultsDivClasses);
                    newClasses.add("cup-quiz-save-block__result--failure");
                    return newClasses;
                });
                return;
            }

            if(
                isEqualSet(correctCheckedAnswers, allCorrectAnswers)
                && wrongCheckedAnswers.size === 0
            ){
                setResults("Congratulations! You got all answers right.");
                setResultsDivClassesSet((resultsDivClasses) => {
                    const newClasses = new Set(resultsDivClasses);
                    newClasses.add("cup-quiz-save-block__result--success");
                    return newClasses;
                });
                return;
            }

            if(correctCheckedAnswers.size > 0){
                setResults(`Congratulations! You got ${correctCheckedAnswers.size} answer(s) right!`);
                setResultsDivClassesSet((resultsDivClasses) => {
                    const newClasses = new Set(resultsDivClasses);
                    newClasses.add("cup-quiz-save-block__result--success");
                    return newClasses;
                });
                return;
            }
        }

        function onQuizSubmit(
            event: React.FormEvent<HTMLFormElement>
        ){
            event.preventDefault();

            const { answers } = attributes;
            const formData = new FormData(event.currentTarget);
            const checkedAnswersSet = new Set(
                formData.getAll("cup-quiz-answer") as string[]
            );
            const allCorrectAnswersSet = new Set(
                answers
                    .filter(({ isCorrect }) => isCorrect)
                    .map(({ id }) => id)
            );
            const correctCheckedAnswersSet = new Set<string>(
                Array.from(checkedAnswersSet)
                    .filter((id) => allCorrectAnswersSet.has(id))
            );
            const wrongCheckedAnswersSet = new Set<string>(
                Array.from(checkedAnswersSet)
                    .filter((id) =>!allCorrectAnswersSet.has(id))
            );
            
            answers.forEach(({
                id,
                isCorrect
            }) => {
                const answerRef = answersRefMap.get(id);
                if(!answerRef) return;

                if(isCorrect) {
                    answerRef.setAnswerAsCorrect();
                } else {
                    answerRef.setAnswerAsWrong();
                }
            });

            setupResults(
                allCorrectAnswersSet,
                correctCheckedAnswersSet,
                wrongCheckedAnswersSet,
            );

            setIsDisabledButton(true);

            answersRefMap.forEach((ref) => {
                ref?.setDisabledAnswer();
            });
        }

        return (
        <form 
            className="cup-quiz-save-block"
            onSubmit={onQuizSubmit}
            style={{
                "--background-color": styles.backgroundColor,
                "--border-color": lighten(-0.25)(styles.backgroundColor),
                "--text-align": styles.alignment
            }}
        >
            <h2 className="cup-quiz-save-block__question">
                {attributes.question}
            </h2>
            {attributes.answers.map((answer) => {
                return (
                <QuizSaveAnswer
                    ref={(ref) => answersRefMap.set(answer.id, ref)}
                    key={answer.id}
                    question={attributes.question}
                    answer={answer}
                />
                );
            })}
            <button
                className='cup-quiz-save-block__submit'
                type="submit"
                disabled={isDisabledButton}
            >
                Submit Answer
            </button>
            {results ? (
            <div className={Array.from(resultsDivClassesSet).join(" ")}>
                <p>{results}</p>
            </div>
            ): ""}
        </form>
        );
    }
}