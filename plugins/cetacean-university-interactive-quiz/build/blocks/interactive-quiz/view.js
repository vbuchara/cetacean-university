import*as e from"@wordpress/interactivity";var t={d:(e,s)=>{for(var r in s)t.o(s,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:s[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};const s=(r={getContext:()=>e.getContext,store:()=>e.store,useEffect:()=>e.useEffect},o={},t.d(o,r),o);var r,o;const{state:a}=(0,s.store)("cetacean-university-interactive-quiz",{state:{quizzesCompleted:0},actions:{onInputAnswerCheck:e=>{const{answer:t}=(0,s.getContext)(),r=e.target;t.isChecked=r.checked,t.showIcon=r.checked},onQuizSubmit:e=>{e.preventDefault();const t=(0,s.getContext)(),r=e.target,o=new FormData(r).getAll("interactive-quiz-answer"),i=new Set(o),n=t.answers.filter((({isCorrect:e})=>e)).map((({id:e})=>e)),c=new Set(n),u=Array.from(i).filter((e=>c.has(e))),d=new Set(u),l=Array.from(i).filter((e=>!c.has(e))),h=new Set(l);return 0===d.size?(t.resultMessage="Sorry, you didn't get any answers right :(",t.hasFailed=!0,t.hasBeenSubmitted=!0,void a.quizzesCompleted++):h.size>0?(t.resultMessage=`Sorry, you got ${h.size} answer(s) wrong.`,t.hasFailed=!0,t.hasBeenSubmitted=!0,void a.quizzesCompleted++):(w=c,(g=d).size===w.size&&[...g].every((e=>w.has(e)))&&0==h.size?(t.resultMessage="Congratulations! You got all answers right.",t.hasSucceeded=!0,t.hasBeenSubmitted=!0,void a.quizzesCompleted++):d.size>0?(t.resultMessage=`Congratulations! You got ${d.size} answer(s) right!`,t.hasSucceeded=!0,t.hasBeenSubmitted=!0,void a.quizzesCompleted++):void 0);var g,w}},callbacks:{reactToFormSubmit:()=>{const{answer:e,hasBeenSubmitted:t}=(0,s.getContext)();(0,s.useEffect)((()=>{t&&(e.isDisabled=!0,e.wasCorrect=e.isCorrect,e.wasWrong=!e.isCorrect,e.showIcon=!0,e.showCheckIcon=e.wasCorrect)}),[t,e.isChecked,e.isCorrect])}}});