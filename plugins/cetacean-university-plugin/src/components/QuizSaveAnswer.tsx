import { 
    useState, 
    forwardRef,
    useRef,
    useImperativeHandle,
    ForwardedRef
} from 'react';

import { ReactComponent as Check } from '../../assets/check.svg';
import { ReactComponent as Cross } from '../../assets/cross.svg';

import { type CupQuizAnswer } from "../blocks/CupQuizBlock";

export type QuizSaveAnswerProps = {
    question: string,
    answer: CupQuizAnswer
};

export type QuizSaveAnswerRef = {
    inputRef: React.RefObject<HTMLInputElement>;
    setAnswerAsCorrect: () => void;
    setAnswerAsWrong: () => void;
    clearAnswerModifiers: () => void;
    setDisabledAnswer: () => void;
};

function QuizSaveAnswerComponent(
    { answer }: QuizSaveAnswerProps, 
    ref: ForwardedRef<QuizSaveAnswerRef>
){
    const answerInputId = `cup-quiz-answer-${answer.id}`;

    const inputRef = useRef<HTMLInputElement>(null);

    const [isDisabledAnswer, setIsDisabledAnswer] = useState(false);
    const [isAnswerWrong, setIsAnswerWrong] = useState(false);
    const [
        answerLabelClasses,
        setAnswerLabelClasses
    ] = useState(new Set(["cup-quiz-save-block__answer"]));

    useImperativeHandle(ref, () => {
        return {
            inputRef: inputRef,
            setAnswerAsCorrect: setAnswerAsCorrect,
            setAnswerAsWrong: setAnswerAsWrong,
            clearAnswerModifiers: clearAnswerModifiers,
            setDisabledAnswer: setDisabledAnswer
        }
    }, [answerLabelClasses.size]);

    function onAnswerInputCheck(
        event: React.FormEvent<HTMLInputElement>
    ){
        const input = event.currentTarget as HTMLInputElement;
        
        if(input.checked) {
            const newClasses = new Set(answerLabelClasses);
            newClasses.add("cup-quiz-save-block__answer--checked");
            setAnswerLabelClasses(newClasses);
        } else {
            const newClasses = new Set(answerLabelClasses);
            newClasses.delete("cup-quiz-save-block__answer--checked");
            setAnswerLabelClasses(newClasses);
        }
    }

    function setAnswerAsCorrect(){
        setAnswerLabelClasses((answerLabelClasses) => {
            const newClasses = new Set(answerLabelClasses);
            newClasses.add("cup-quiz-save-block__answer--correct");
            
            return newClasses;
        });
    }

    function setAnswerAsWrong(){
        setAnswerLabelClasses((answerLabelClasses) => {
            const newClasses = new Set(answerLabelClasses);
            newClasses.add("cup-quiz-save-block__answer--wrong");

            return newClasses;
        });
        setIsAnswerWrong(true);
    }

    function clearAnswerModifiers(){
        setAnswerLabelClasses((answerLabelClasses) => {
            const newClasses = new Set(answerLabelClasses);
            newClasses.delete("cup-quiz-save-block__answer--correct");
            newClasses.delete("cup-quiz-save-block__answer--wrong");
            newClasses.delete("cup-quiz-save-block__answer--disabled");
            
            return newClasses;
        });
    }

    function setDisabledAnswer(){
        setIsDisabledAnswer(true);

        setAnswerLabelClasses((answerLabelClasses) => {
            const newClasses = new Set(answerLabelClasses);
            newClasses.add("cup-quiz-save-block__answer--disabled");

            return newClasses;
        });
    }

    function showAnswerIcon(){
        return (
            answerLabelClasses.has("cup-quiz-save-block__answer--checked")
            || answerLabelClasses.has("cup-quiz-save-block__answer--correct")
            || answerLabelClasses.has("cup-quiz-save-block__answer--wrong")
        );
    }

    return (
    <label 
        htmlFor={answerInputId} 
        className={Array.from(answerLabelClasses).join(" ")}
    >   
        
        {showAnswerIcon()
            ? (
            <span className="cup-quiz-save-block__answer-icon">
                {isAnswerWrong ? (<Cross />) : (<Check />)}
            </span>
            ) : ""
        }
        <span className="cup-quiz-save-block__answer-text">
            {answer.answer}
        </span>
        <input
            ref={inputRef}
            type="checkbox"
            id={answerInputId}
            name="cup-quiz-answer"
            value={answer.id}
            onInput={onAnswerInputCheck}
            disabled={isDisabledAnswer}
        />
    </label>
    );
}

export const QuizSaveAnswer = forwardRef(QuizSaveAnswerComponent);