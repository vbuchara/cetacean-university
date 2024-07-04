/**
 * WordPress dependencies
 */
import { store, getContext, useEffect } from '@wordpress/interactivity';

import { isEqualSet } from '@utils/isEqualSet';

import type { 
	InteractiveQuizAttributesType,
	InteractiveQuizAnswer
} from '.';

export type QuizContextStyles = Required<InteractiveQuizAttributesType["styles"]>;

export interface InteractiveQuizAnswerInContext extends InteractiveQuizAnswer {
	inputId: string;
	isChecked: boolean;
	isDisabled: boolean;
	showIcon: boolean;
	wasCorrect: boolean;
	wasWrong: boolean;
	showCheckIcon: boolean;
}

export type InteractiveQuizContext = {
	question: string,
	answers: InteractiveQuizAnswer[]
	hasBeenSubmitted: boolean,
	resultMessage: string,
	hasFailed: boolean,
	hasSucceeded: boolean,
	styles: QuizContextStyles,
};

export interface InteractiveQuizAnswerContext extends InteractiveQuizContext {
	answer: InteractiveQuizAnswerInContext
}

const { state } = store('cetacean-university-interactive-quiz', {
	state: {
		quizzesCompleted: 0,
	},
	actions: {
		onInputAnswerCheck: (event: InputEvent) => {
			const { answer } = getContext<InteractiveQuizAnswerContext>();

			const input = event.target as HTMLInputElement;

			answer.isChecked = input.checked;
			answer.showIcon = input.checked;
		},
		onQuizSubmit: (event: Event) => {
            event.preventDefault();

            const context = getContext<InteractiveQuizContext>();

			const formElement = event.target as HTMLFormElement;
            const formData = new FormData(formElement);

			const answersData = formData.getAll("interactive-quiz-answer") as string[];
            const checkedAnswersSet = new Set(answersData);

			const allCorrectAnswers =  context.answers.filter(({ isCorrect }) => isCorrect).map(({ id }) => id);
            const allCorrectAnswersSet = new Set(allCorrectAnswers);
			
			const correctCheckedAnswers = Array.from(checkedAnswersSet).filter((id) => allCorrectAnswersSet.has(id));
            const correctCheckedAnswersSet = new Set<string>(correctCheckedAnswers);

			const wrongCheckedAnswers = Array.from(checkedAnswersSet).filter((id) => !allCorrectAnswersSet.has(id));
            const wrongCheckedAnswersSet = new Set<string>(wrongCheckedAnswers);
            
			if(correctCheckedAnswersSet.size === 0){
                context.resultMessage = "Sorry, you didn't get any answers right :(";
                context.hasFailed = true;
				context.hasBeenSubmitted = true;
				
				state.quizzesCompleted++;

                return;
            } 

            if(wrongCheckedAnswersSet.size > 0){
                context.resultMessage = `Sorry, you got ${wrongCheckedAnswersSet.size} answer(s) wrong.`;
                context.hasFailed = true;
				context.hasBeenSubmitted = true;

				state.quizzesCompleted++;

                return;
            }

            if(isEqualSet(correctCheckedAnswersSet, allCorrectAnswersSet) && wrongCheckedAnswersSet.size == 0){
                context.resultMessage = "Congratulations! You got all answers right.";
                context.hasSucceeded = true;
				context.hasBeenSubmitted = true;

				state.quizzesCompleted++;

                return;
            }

            if(correctCheckedAnswersSet.size > 0){
                context.resultMessage = `Congratulations! You got ${correctCheckedAnswersSet.size} answer(s) right!`;
                context.hasSucceeded = true;
				context.hasBeenSubmitted = true;

				state.quizzesCompleted++;
				
                return;
            }
        }
	},
	callbacks: {
		reactToFormSubmit: () => {
			const { answer, hasBeenSubmitted } = getContext<InteractiveQuizAnswerContext>();

			useEffect(() => {
				if(!hasBeenSubmitted) return;

				answer.isDisabled = true;
				answer.wasCorrect = answer.isCorrect;
				answer.wasWrong = !answer.isCorrect;

				answer.showIcon = true;
				answer.showCheckIcon = answer.wasCorrect;
			}, [hasBeenSubmitted, answer.isChecked, answer.isCorrect]);
		}
	},
});
