import { useState } from 'react';
import { useUpdateEffect } from 'react-use';
import { __ } from '@wordpress/i18n';
import type { BlockEditProps } from '@wordpress/blocks';
import { 
	useBlockProps, 
	BlockControls, 
	AlignmentToolbar 
} from '@wordpress/block-editor';
import { Button, TextControl } from '@wordpress/components';
import { lighten } from 'polished';
import { v4 as uuid } from 'uuid';

import { WordpressColorsPresets } from '@classes/WordpressColorsPresets';

import { QuizInspectorControls } from './components/quiz-inspector-controls';
import { QuizEditAnswer } from './components/quiz-edit-answer';

import type { InteractiveQuizAttributesType } from '.';

export type InteractiveQuizEditProps = BlockEditProps<InteractiveQuizAttributesType>;

export function EditComponent({ attributes, setAttributes }: InteractiveQuizEditProps) {
	const {
		styles,
	} = attributes;
	const blockProps = useBlockProps();

	const backgroundColor = WordpressColorsPresets.isPresetVariable(styles.backgroundColor)
		? WordpressColorsPresets.getColorFromVar(styles.backgroundColor)
		: styles.backgroundColor;

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
	<div {...blockProps} >
		<BlockControls>
			<AlignmentToolbar
				value={styles.alignment}
				onChange={(value) => setAttributes({ 
					styles: {...styles, alignment: value } 
				})}
			/>
		</BlockControls>
		<QuizInspectorControls
			attributes={attributes}
			setAttributes={setAttributes}
			backgroundColor={backgroundColor}
		/>
		<div 
			className="interactive-quiz-edit-block"
			style={{
				"--background-color": backgroundColor,
				"--border-color": lighten(-0.25)(backgroundColor)
			}}
		>
			<TextControl 
				label="Question:"
				className="interactive-quiz-edit-block__input interactive-quiz-edit-block__question"
				onChange={(value) => setAttributes({ question: value })}
				value={attributes.question}
				placeholder='Type your question here'
			/>
			<p className="interactive-quiz-edit-block__group-title">Answers:</p>
			{attributes.answers.map((answer) => {
				return (
				<QuizEditAnswer
					ref={(ref) => answersRefMap.set(answer.id, ref)}
					key={answer.id}
					answer={answer}
					attributes={attributes}
					setAttributes={setAttributes}
				/>
				);
			})}
			<Button 
				variant='primary'
				className='interactive-quiz-edit-block__button'
				onClick={addAnswer} 
				disabled={attributes.answers.length >= 4}
			>
				Add Another Answer
			</Button>
		</div>
	</div>
	);
}
