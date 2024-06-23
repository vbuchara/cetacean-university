import Glide from "@glidejs/glide"

class HeroSlider {
	constructor() {
		const sliders = document.querySelectorAll<HTMLDivElement>(".hero-slider");
		if (!sliders) return;

		sliders.forEach((slider) => {
            this.initGlide(slider);
        });
	}

	public initGlide(slider: HTMLDivElement){
		// count how many slides there are
		const slides = slider.querySelectorAll<HTMLElement>(".hero-slider__slide");

		// Generate the HTML for the navigation dots
		const dotHTML = Array.from(slides).reduce<string>((html, _, index) => {
			return html + `<button class="slider__bullet glide__bullet" data-glide-dir="=${index}"></button>`;
		}, "");

		// Add the dots HTML to the DOM
		const glideBullets = slider.querySelector<HTMLElement>(".glide__bullets");
		if (glideBullets) glideBullets.insertAdjacentHTML("beforeend", dotHTML);

		// Actually initialize the glide / slider script
		const glide = new Glide(slider, {
			type: "carousel",
			perView: 1,
			autoplay: 3000
		});

		glide.mount();
	}
}

export default HeroSlider
