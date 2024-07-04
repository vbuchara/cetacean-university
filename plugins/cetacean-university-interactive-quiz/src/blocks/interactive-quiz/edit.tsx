import { useEffect, useState } from 'react';
import { useEffectOnce, useUpdateEffect } from 'react-use';
import { __ } from '@wordpress/i18n';
import type { BlockEditProps } from '@wordpress/blocks';
import { 
	useBlockProps, 
	BlockControls, 
	AlignmentToolbar 
} from '@wordpress/block-editor';
import { Button, TextControl } from '@wordpress/components';
import { useDispatch, useSelect } from '@wordpress/data';
import { lighten } from 'polished';
import { v4 as uuid } from 'uuid';

import { WordpressColorsPresets } from '@classes/WordpressColorsPresets';
import quizStore from '@src/store/quiz';

import { QuizInspectorControls } from './components/quiz-inspector-controls';
import { QuizEditAnswer } from './components/quiz-edit-answer';

import type { InteractiveQuizAttributesType } from '.';

export type InteractiveQuizEditProps = BlockEditProps<InteractiveQuizAttributesType>;

export function EditComponent({ attributes, setAttributes }: InteractiveQuizEditProps) {
	const {
		styles,
	} = attributes;
	const blockProps = useBlockProps();

	const answersRefMap = new Map<string, HTMLInputElement | null>();

	const defaultBackgroundColor = WordpressColorsPresets.getColorFromVar(WordpressColorsPresets.Secondary);
	const backgroundColor = styles.backgroundColor ? styles.backgroundColor : defaultBackgroundColor;
	const borderColor = styles.borderColor ? styles.borderColor : lighten(-0.25, defaultBackgroundColor);

	const answersIdDependency = attributes.answers.reduce((result, { id }) => result + id, "");

	const [answerIdToFocus, setAnswerIdToFocus] = useState<string | undefined>();

	const { getRegisteredAnswersIds } = useSelect((select) => select(quizStore), [answersIdDependency]);
	const { 
		addRegisteredAnswerId, 
		registerAnswersIdsSet,
		removeRegisteredAnswerId
	} = useDispatch(quizStore);

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

		addRegisteredAnswerId(newAnswerId);
	}

	useEffect(() => {
		if(attributes.styles.backgroundColor) return;

		setAttributes({ 
			styles: {
                ...styles,
                backgroundColor: defaultBackgroundColor,
                borderColor: lighten(-0.25, defaultBackgroundColor)
            }
		});
	}, [attributes.styles.backgroundColor, attributes.styles.borderColor]);

	useEffectOnce(() => {
		const registeredAnswersIds = getRegisteredAnswersIds();
		
		const newAnswers = attributes.answers.map((answer) => {
			if(!registeredAnswersIds.has(answer.id)){
				registeredAnswersIds.add(answer.id);
				return answer;
			};

			const newId = uuid();
			registeredAnswersIds.add(newId);

			return {
				...answer,
				id: newId
			}
		});

		setAttributes({
			answers: newAnswers
		});
		
		registerAnswersIdsSet(registeredAnswersIds);

		return () => {
			newAnswers.forEach(({ id })=> removeRegisteredAnswerId(id))
		}
	});

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
				"--border-color": borderColor
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
