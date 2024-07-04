<?php 
	/**
	 * @var array{} $attributes
	 * @var string $content
	 * @var WP_Block $block
	 */
	$context = wp_interactivity_data_wp_context([]);

	wp_interactivity_state("cetacean-university-interactive-quiz", [
		"quizzesCompleted" => 0
	]);
?>
<div 
	data-wp-interactive="cetacean-university-interactive-quiz"
	class="solved-quizzes-counter"
	<?= $context ?>
>
	<p class="solved-quizzes-counter__counter">
		Solved Quizzes Counter: <span data-wp-text="state.quizzesCompleted"></span>
	</p>
</div>