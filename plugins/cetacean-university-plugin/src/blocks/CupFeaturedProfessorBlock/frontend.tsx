import { createRoot } from 'react-dom/client';

import { 
    CupFeaturedProfessorBlock, 
    type CupFeaturedProfessorBlockAttributes
} from './CupFeaturedProfessorBlock';

const cupFeaturedProfessorBlocks = document.querySelectorAll(
    '.cup-featured-professor-save-block-root'
);

cupFeaturedProfessorBlocks.forEach((div) => {
    const preData = div.querySelector("pre");
    
    if(!preData) return;
    
    const featuredProfessorAttrs: CupFeaturedProfessorBlockAttributes = 
        JSON.parse(preData.innerHTML);
    const reactRoot = createRoot(div);

    reactRoot.render(
        <CupFeaturedProfessorBlock.SaveComponent 
            className='cup-featured-professor-save-block' 
            attributes={featuredProfessorAttrs}
        />
    );
    div.classList.remove('cup-featured-professor-save-block-root');
});