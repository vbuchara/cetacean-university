<?php 
	/**
	 * @var array{
	 * 	question: string,
     *  answers: array<array{id: string, answer: string, isCorrect: boolean}>,
     *  styles: array{
     *      backgroundColor: string,
     *      alignment?: string
     *  }
	 * } $attributes
	 * @var string $content
	 * @var WP_Block $block
	 */
	
	/** @var array{backgroundColor: string, alignment: string} */
	$defaultStyles = [
		'backgroundColor' => '#86c4da',
		'borderColor' => '#358dac',
		'alignment' => 'center',
	];
	$styles = array_merge($defaultStyles, isset($attributes['styles']) ? $attributes['styles'] : []);

	/** 
	 * @var array{
	 * 	id: string, 
	 * 	answer: string, 
	 * 	isCorrect: boolean,
	 * 	isChecked: boolean,
	 * 	inputId: string,
	 * 	isDisabled: boolean
	 * }[] 
	 */
	$answers = array_map(function(array $answer){
		return array_merge($answer, [
			'inputId' => "interactive-quiz-answer-" . $answer["id"],
			'isChecked' => false,
			'isDisabled' => false,
			'showIcon' => false,
			'wasCorrect' => false,
			'wasWrong' => false,
			'showCheckIcon' => true
		]);
	}, isset($attributes['answers']) ? $attributes["answers"] : []);
	
	$context = wp_interactivity_data_wp_context([
		"question" => isset($attributes['question']) ? $attributes['question'] : "",
		"answers" => isset($attributes['answers']) ? $attributes["answers"] : [],
		"hasBeenSubmitted" => false,
		"resultMessage" => "",
		"hasFailed" => false,
		"hasSucceeded" => false,
		"styles" => $styles,
	]);

	$html5 = new Masterminds\HTML5();
	$crossSvgDocument = $html5->load(CU_IQ_PLUGIN_DIR_PATH . "/assets/cross.svg");
	$checkSvgDocument = $html5->load(CU_IQ_PLUGIN_DIR_PATH . "/assets/check.svg");

	/** @var DOMElement */
	$crossSvg = $crossSvgDocument->getElementsByTagName("svg")->item(0);
	/** @var DOMElement */
	$checkSvg = $checkSvgDocument->getElementsByTagName("svg")->item(0);

	$crossSvg->setAttribute("data-wp-bind--hidden", "context.answer.showCheckIcon");
	$checkSvg->setAttribute("data-wp-bind--hidden", "!context.answer.showCheckIcon")
?>
<div 
	data-wp-interactive="cetacean-university-interactive-quiz"
	<?= $context ?>
>
	<form 
		class="interactive-quiz-save-block"
		data-wp-on--submit="actions.onQuizSubmit"
		data-wp-style----background-color="context.styles.backgroundColor"
		data-wp-style----border-color="context.styles.borderColor"
		data-wp-style----text-align="context.styles.alignment"
	>
            <h2 
				class="interactive-quiz-save-block__question"
				data-wp-text="context.question"
			></h2>
			<?php foreach($answers as $answer): ?>
				<?php 
					$answerContext = wp_interactivity_data_wp_context([
						"answer" => $answer
					]); 
				?>
				<label 
					<?= $answerContext ?>
					class="interactive-quiz-save-block__answer"
					data-wp-key="context.answer.id"
					data-wp-bind--for="context.answer.inputId" 

					data-wp-class--interactive-quiz-save-block__answer--checked="context.answer.isChecked"
					data-wp-class--interactive-quiz-save-block__answer--correct="context.answer.wasCorrect"
					data-wp-class--interactive-quiz-save-block__answer--wrong="context.answer.wasWrong"
					data-wp-class--interactive-quiz-save-block__answer--disabled="context.answer.isDisabled"

					data-wp-run--react-to-form-submit="callbacks.reactToFormSubmit"
				>   
					
					<span 
						class="interactive-quiz-save-block__answer-icon"
						data-wp-bind--hidden="!context.answer.showIcon"
					>
						<?= $html5->saveHTML($crossSvg) ?>
						<?= $html5->saveHTML($checkSvg) ?>
					</span>
					<span 
						class="interactive-quiz-save-block__answer-text"
						data-wp-text="context.answer.answer"
					></span>
					<input
						type="checkbox"
						name="interactive-quiz-answer"
						data-wp-on--input="actions.onInputAnswerCheck"
						data-wp-bind--value="context.answer.id"
						data-wp-bind--disabled="context.answer.isDisabled"
						data-wp-bind--id="context.answer.inputId"
					/>
				</label>
			<?php endforeach;?>
            <button
                class='interactive-quiz-save-block__submit'
                type="submit"
				data-wp-bind--disabled="context.hasBeenSubmitted"
            >
                Submit Answer
            </button>
            <div
				class="interactive-quiz-save-block__result"
				data-wp-bind--hidden="!context.hasBeenSubmitted"
				data-wp-class--interactive-quiz-save-block__result--success="context.hasSucceeded"
				data-wp-class--interactive-quiz-save-block__result--failure="context.hasFailed"
			>
                <p
					data-wp-text="context.resultMessage"
				></p>
            </div>
	</form>
</div>