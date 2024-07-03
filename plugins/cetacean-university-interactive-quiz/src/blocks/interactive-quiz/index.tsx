import './style.scss';
import './editor.scss';

import { registerBlockType } from '@wordpress/blocks';
import { v4 as uuid } from 'uuid';

import { ReactComponent as QuestionMarkIcon } from '@assets/question-mark.svg';
import { WordpressColorsPresets } from '@classes/WordpressColorsPresets';

import { EditComponent } from './edit';

export type InteractiveQuizAnswer = {
    id: string,
    answer: string,
    isCorrect: boolean
}

export type InteractiveQuizAttributesType = {
    question: string,
    answers: InteractiveQuizAnswer[],
    styles: {
        backgroundColor: string,
        alignment?: string
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
                backgroundColor: WordpressColorsPresets.Secondary,
                alignment: "center"
            } satisfies InteractiveQuizAttributesType["styles"]
        }
	}
} );
