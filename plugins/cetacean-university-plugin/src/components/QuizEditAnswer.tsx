import { 
    forwardRef 
} from 'react';

import {
    Flex,
    FlexBlock,
    FlexItem,
    TextControl,
    Button,
    Icon
} from '@wordpress/components';

import type { 
    CupQuizAnswer, 
    CupQuizEditBlockProps 
} from "../blocks/CupQuizBlock";

export interface QuizEditAnswerProps extends CupQuizEditBlockProps {
    answer: CupQuizAnswer;
};

function QuizEditAnswerComponent({
    answer,
    attributes,
    setAttributes
}: QuizEditAnswerProps, ref: React.LegacyRef<HTMLInputElement>){

    function toggleIsCorrect(){
        setAttributes({
            answers: attributes.answers.map(({ id: order, ...thisAnswer }) => {
                return order === answer.id ? {
                    ...answer,
                    isCorrect: !answer.isCorrect
                } : { id: order, ...thisAnswer };
            })
        });
    }

    function deleteAnswer(){
        if(attributes.answers.length === 1) return;

        setAttributes({
            answers: attributes.answers.filter(({ id: order }) => order !== answer.id)
        });
    }

    return (
    <Flex
        className='cup-quiz-edit-block__answer'
        align='center'
    >
        <FlexBlock>
            <TextControl
                className='cup-quiz-edit-block__input'
                onChange={(value) => setAttributes({
                    answers: attributes.answers.map(({ id, ...thisAnswer }) => {
                        return id === answer.id ? {
                            id: answer.id,
                            answer: value,
                            isCorrect: answer.isCorrect
                        } : { id, ...thisAnswer };
                    })
                })}
                value={answer.answer}
                ref={ref}
            />
        </FlexBlock>
        <FlexItem>
            <Button 
                className="cup-quiz-edit-block__icon-button"
                title={`Mark as ${answer.isCorrect ? 'incorrect' : 'correct'}`}
                onClick={toggleIsCorrect}
            >
                <Icon 
                    icon={answer.isCorrect ? "star-filled" : "star-empty"}
                />
            </Button>
        </FlexItem>
        <FlexItem>
            <Button 
                className="cup-quiz-edit-block__icon-button cup-quiz-edit-block__delete"
                title='Delete Answer'
                onClick={deleteAnswer}
                disabled={attributes.answers.length === 1}
            >
                <Icon 
                    icon="trash"
                />
            </Button>
        </FlexItem>
    </Flex>
    );
}

export const QuizEditAnswer = forwardRef(QuizEditAnswerComponent);