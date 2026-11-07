const deviceReduction=matchMedia('(prefers-reduced-motion: reduce)');
const running=new WeakMap();
const visibility=typeof IntersectionObserver==='function'?new IntersectionObserver(entries=>entries.forEach(entry=>{if(!entry.isIntersecting)running.get(entry.target)?.cancel();})):null;
let userReduction=false;

export function motionEnabled(){return !deviceReduction.matches&&!userReduction&&!document.hidden;}

export function setReducedMotion(value){
 userReduction=!!value;
 document.body.classList.toggle('motion-reduced',userReduction||deviceReduction.matches);
 if(!motionEnabled())document.getAnimations().forEach(animation=>animation.cancel());
}

deviceReduction.addEventListener('change',()=>setReducedMotion(userReduction));
document.addEventListener('visibilitychange',()=>{document.body.classList.toggle('page-hidden',document.hidden);if(document.hidden)document.getAnimations().filter(animation=>!('animationName' in animation)).forEach(animation=>animation.cancel());});

const liveDots=new Set();
const liveVisibility=typeof IntersectionObserver==='function'?new IntersectionObserver(entries=>entries.forEach(entry=>{entry.target.toggleAttribute('data-live-visible',entry.isIntersecting);})):null;
export function watchLive(root=document){
 for(const dot of liveDots){if(!dot.isConnected){liveVisibility?.unobserve(dot);liveDots.delete(dot);}}
 root.querySelectorAll('.live-dot,.in-play i').forEach(dot=>{if(liveDots.has(dot))return;liveDots.add(dot);if(liveVisibility)liveVisibility.observe(dot);else dot.setAttribute('data-live-visible','');});
}

export function motion(node,frames,options={}){
 if(!motionEnabled()||!node?.isConnected||typeof node.animate!=='function')return null;
 const box=node.getBoundingClientRect(),dialog=document.querySelector('dialog[open]');
 if(!box.width||!box.height||box.bottom<0||box.top>innerHeight||box.right<0||box.left>innerWidth)return null;
 if(dialog&&!dialog.contains(node))return null;
 running.get(node)?.cancel();
 const animation=node.animate(frames,{duration:160,easing:'ease-out',...options});
 running.set(node,animation);
 visibility?.observe(node);
 animation.finished.catch(()=>{}).then(()=>{if(running.get(node)===animation){running.delete(node);visibility?.unobserve(node);}});
 return animation;
}

export function pop(node){return motion(node,[{transform:'scale(.9)'},{transform:'scale(1.06)',offset:.65},{transform:'scale(1)'}],{duration:180});}
export function reveal(node){return motion(node,[{transform:'translateY(5px)'},{transform:'translateY(0)'}],{duration:180});}
export function greetHubie(node){return motion(node,[{transform:'translateY(0) rotate(0)'},{transform:'translateY(-3px) rotate(-5deg)',offset:.3},{transform:'translateY(-1px) rotate(4deg)',offset:.65},{transform:'translateY(0) rotate(0)'}],{duration:440});}
export function celebrate(node){return motion(node,[{transform:'scale(.93) rotate(-3deg)'},{transform:'scale(1.04) rotate(2deg)',offset:.65},{transform:'scale(1) rotate(0)'}],{duration:320});}

export function slideBetMode(tabs,from,to){
 if(!tabs)return;
 tabs.dataset.mode=to;
 if(!from||from===to)return;
 const position=mode=>mode==='quick'?'translateX(calc(100% + 3px))':'translateX(0)';
 try{motion(tabs,[{transform:position(from)},{transform:position(to)}],{duration:180,pseudoElement:'::before'});}catch{}
}

// Pause campaign motion when the banner leaves the viewport.
const ambientNodes=new Set();
const ambientVisibility=typeof IntersectionObserver==='function'?new IntersectionObserver(entries=>entries.forEach(entry=>entry.target.toggleAttribute('data-ambient-visible',entry.isIntersecting))):null;
export function watchAmbient(root=document){
 for(const node of ambientNodes)if(!node.isConnected){ambientVisibility?.unobserve(node);ambientNodes.delete(node);}
 root.querySelectorAll('[data-ambient]').forEach(node=>{if(ambientNodes.has(node))return;ambientNodes.add(node);if(ambientVisibility)ambientVisibility.observe(node);else node.setAttribute('data-ambient-visible','');});
}
