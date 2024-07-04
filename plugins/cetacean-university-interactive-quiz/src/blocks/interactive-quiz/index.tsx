import './style.scss';
import './editor.scss';

import { registerBlockType } from '@wordpress/blocks';
import { dispatch } from '@wordpress/data';
import { v4 as uuid } from 'uuid';

import { ReactComponent as QuestionMarkIcon } from '@assets/question-mark.svg';
import quizStore from '@src/store/quiz';

import { EditComponent } from './edit';

export type InteractiveQuizAnswer = {
    readonly id: string,
    readonly answer: string,
    readonly isCorrect: boolean
}

export type InteractiveQuizAttributesType = {
    question: string,
    answers: InteractiveQuizAnswer[],
    styles: {
        backgroundColor?: string,
        borderColor?: string,
        alignment?: string,
    }
};

const { default: metadata } = (await import('./block.json')) as BlockJsonDefault<InteractiveQuizAttributesType>;

registerBlockType<InteractiveQuizAttributesType>(metadata.name, {
	...metadata,
	edit: EditComponent,
	icon: () => <QuestionMarkIcon width={24} height={24} />,
	attributes: {
		question: {
            type: "string"
        },
        answers: {
            type: "array",
            default: [{
                id: uuid(),
                answer: "Answer 1",
                isCorrect: false
            }] satisfies InteractiveQuizAttributesType["answers"]
        },
        styles: {
            type: "object",
            default: {
                alignment: "center"
            } satisfies InteractiveQuizAttributesType["styles"]
        }
	}
} );

dispatch(quizStore).clearRegisteredAnswersIds();
