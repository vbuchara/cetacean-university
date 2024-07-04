
import type { BlockEditProps } from '@wordpress/blocks';
import { 
	useBlockProps, 
} from '@wordpress/block-editor';


import type { SolvedQuizzesCounterAttributesType } from '.';

export type SolvedQuizzesCounterEditProps = BlockEditProps<SolvedQuizzesCounterAttributesType>;

export function EditComponent({ attributes, setAttributes }: SolvedQuizzesCounterEditProps) {
	const {} = attributes;
	const blockProps = useBlockProps();

	return (
	<div {...blockProps} >
		<div className='solved-quizzes-counter'>
			<p className="solved-quizzes-counter__counter">
				Solved Quizzes Counter:{" "}
				<span>{"{Number goes here}"}</span> 
			</p>
		</div>
	</div>
	);
}
