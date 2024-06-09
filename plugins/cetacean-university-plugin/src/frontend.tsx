import { createRoot } from 'react-dom/client';

import { 
    CupQuizBlock, 
    CupQuizBlockAttributes 
} from './blocks/CupQuizBlock';

const cupQuizBlocks = document.querySelectorAll('.cup-quiz-save-block-root');

cupQuizBlocks.forEach((div) => {
    const preData = div.querySelector("pre");
    
    if(!preData) return;
    
    const quizAttributes: CupQuizBlockAttributes = JSON.parse(preData.innerHTML);
    const reactRoot = createRoot(div);

    reactRoot.render(
        <CupQuizBlock.SaveComponent 
            className='cup-quiz-save-block' 
            attributes={quizAttributes}
        />
    );
    div.classList.remove('cup-quiz-save-block-root');
});
