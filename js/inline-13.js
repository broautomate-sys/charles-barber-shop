
/* Slide "Precision. Style. Character." in from the left each time the hero appears. Adds motion only; changes no text or styles.
   Used when the device has reduce-motion on (the normal CSS slide already runs otherwise). */
(()=>{const hero=document.getElementById('home');if(!hero||!hero.animate)return;
const slide=()=>{if(!matchMedia('(prefers-reduced-motion:reduce)').matches)return;hero.querySelectorAll('h1 span b').forEach((el,i)=>{el.animate([{opacity:0,transform:'translateX(-110px)',filter:'blur(8px)'},{opacity:1,transform:'none',filter:'none'}],{duration:1700,delay:350+i*500,easing:'cubic-bezier(.16,1,.3,1)',fill:'backwards'})})};
new MutationObserver(rs=>{if(hero.classList.contains('play')&&rs.some(r=>!(r.oldValue||'').split(' ').includes('play')))slide()}).observe(hero,{attributes:true,attributeFilter:['class'],attributeOldValue:true});
if(hero.classList.contains('play'))slide();
})();
