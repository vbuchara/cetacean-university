import './style.scss';
import './editor.scss';

import { registerBlockType } from '@wordpress/blocks';

import { ReactComponent as QuestionMarkIcon } from '@assets/question-mark.svg';

import { EditComponent } from './edit';

export type SolvedQuizzesCounterAttributesType = {};

const { default: metadata } = (await import('./block.json')) as BlockJsonDefault<SolvedQuizzesCounterAttributesType>;

registerBlockType<SolvedQuizzesCounterAttributesType>(metadata.name, {
	...metadata,
	edit: EditComponent,
	icon: () => <QuestionMarkIcon width={24} height={24} />,
	attributes: {}
});
