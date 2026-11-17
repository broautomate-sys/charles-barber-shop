
/* Home / logo: always slide the page back up to the hero (works with or without the smooth-scroll library) */
(()=>{const ease=t=>1-Math.pow(1-t,4);let raf=0;
function toTop(){const y0=window.scrollY;cancelAnimationFrame(raf);window.__noPlay=true;const H=document.getElementById('home');if(H)H.classList.remove('play');if(y0<2){window.__noPlay=false;if(window.__heroReplay)window.__heroReplay();return}let fired=false;const L=window.__lenis;try{if(L&&L.scrollTo)L.scrollTo(window.scrollY,{immediate:true,force:true})}catch(e){}
const dur=Math.min(900,350+y0/6),t0=performance.now();const step=n=>{const k=Math.min(1,(n-t0)/dur);window.scrollTo(0,y0*(1-ease(k)));if(k>=.6&&!fired){fired=true;window.__noPlay=false;if(window.__heroReplay)window.__heroReplay()}if(k<1)raf=requestAnimationFrame(step)};raf=requestAnimationFrame(step)}
document.addEventListener('click',e=>{const a=e.target.closest&&e.target.closest('a[href="#home"]');if(!a)return;const m=document.querySelector('main');if(m&&m.hidden)return;e.preventDefault();e.stopPropagation();e.stopImmediatePropagation();const nv=document.getElementById('nav'),bg=document.getElementById('bg');if(nv)nv.classList.remove('open');if(bg)bg.setAttribute('aria-expanded','false');toTop();try{history.replaceState(null,'','#home')}catch(_){}},true);
const stop=()=>{cancelAnimationFrame(raf);if(window.__noPlay){window.__noPlay=false;if(window.__heroReplay)window.__heroReplay()}};addEventListener('wheel',stop,{passive:true});addEventListener('touchstart',stop,{passive:true});
})();
