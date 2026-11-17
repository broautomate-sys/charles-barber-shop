
/* ===== EDIT HERE: only confirmed information ===== */
const C={
 bookingUrl:"#book",            // paste your booking link
 hours:"Mon – Sat: 10:00 – 20:00<br>Sunday: Closed", // edit if hours change
 phone:"", email:"",
 social:{instagram:"https://www.instagram.com/charlesbarbashop/",tiktok:"https://www.tiktok.com/@charles.barber.sho",facebook:"https://www.facebook.com/charles.barber.9809/"},
 reviews:[],                    // [{name:"A. M.",text:"..."}] verified only
 services:[
  {n:"Haircuts",d:"Tailored cuts finished with clean, precise lines.",img:"",p:""},
  {n:"Fade / Skin Fade",d:"Seamless blends from skin to length.",img:"",p:""},
  {n:"Beard Trim & Shape",d:"Defined lines and a shape that suits your face.",img:"",p:""},
  {n:"Hair + Beard",d:"The full groom in one appointment.",img:"",p:""},
  {n:"Shaving",d:"A close, careful, professional shave.",img:"",p:""},
  {n:"Styling",d:"Finished and styled for how you wear it.",img:"",p:""}],
 gallery:["","","",""],
 all:[ // add a price as a 3rd item, e.g. ["Haircuts","...","from €15"]
  {t:"Barber services",s:"Cuts and grooming for men.",i:[["Haircuts","Tailored cuts finished with clean, precise lines."],["Fade / Skin fade","Seamless blends from skin to length."],["Beard trim & shape","Defined lines and a shape that suits your face."],["Hair + beard","The full groom in one appointment."],["Shaving","A close, careful, professional shave."],["Styling","Finished and styled for how you wear it."]]},
  {t:"Hair braiding",s:"Braided styles for men and women.",i:[["Hair braiding","Braided styles for men."],["Ladies' hair braiding","Braided styles for women."]]},
  {t:"Hair care products",s:"Available in the shop.",i:[["Hair cream","Hair creams sold in the shop."],["Hair products","A selection of products for everyday hair care."]]}]
};
const $=s=>document.querySelector(s);
const why=[["Precision","Every cut is finished with attention to detail and clean lines.","M4 20 20 4M4 4l6 6m4 4 6 6"],["Personal style","Your haircut should work with your features, hair and personal style.","M12 3a4 4 0 1 0 0 8 4 4 0 0 0 0-8ZM5 21c0-4 3-6 7-6s7 2 7 6"],["Professional craft","Modern men's grooming with attention to technique and detail.","M12 2l3 6 6 1-4.5 4.5L18 20l-6-3-6 3 1.5-6.5L3 9l6-1Z"],["Convenience","Easy booking and a straightforward professional experience.","M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18ZM12 7v5l3 2"]];
['instagram','tiktok','facebook'].forEach((k,i)=>{const a=$('#s'+(i+1));if(C.social[k]){a.href=C.social[k];a.target='_blank';a.rel='noopener'}});
document.querySelectorAll('.btn[href="#book"]').forEach(a=>{if(C.bookingUrl!=='#book')a.href=C.bookingUrl});
const io=new IntersectionObserver(e=>e.forEach(x=>{const t=x.target;if(x.isIntersecting)t.classList.add('in');else if(x.boundingClientRect.top>0)t.classList.remove('in')}),{threshold:.15,rootMargin:'0px 0px -6% 0px'});
const rvs=[...document.querySelectorAll('.rv')];let tk=0;function chk(){tk=0;rvs.forEach(el=>{if(el.classList.contains('in'))return;const r=el.getBoundingClientRect();if(r.width&&r.top<innerHeight*.92&&r.bottom>0)el.classList.add('in')})}addEventListener('scroll',()=>{if(!tk)tk=requestAnimationFrame(chk)},{passive:true});addEventListener('load',chk);setTimeout(chk,300);
document.querySelectorAll('.rv').forEach(el=>{const sib=[...el.parentElement.children].filter(c=>c.classList.contains('rv'));el.style.setProperty('--d',(Math.max(0,sib.indexOf(el))*.12)+'s');io.observe(el)});
const links=[...document.querySelectorAll('nav a')],secs=links.map(a=>document.querySelector(a.hash));
addEventListener('scroll',()=>{if(mainEl.hidden)return;let c=0;secs.forEach((s,i)=>{if(s&&s.getBoundingClientRect().top<200)c=i});links.forEach((a,i)=>a.classList.toggle('on',i===c))},{passive:true});
(function(){const H={1:[10,20],2:[10,20],3:[10,20],4:[10,20],5:[10,20],6:[10,20],0:null},DN=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],pad=x=>String(x).padStart(2,'0')+':00';
function now(){try{const f=new Intl.DateTimeFormat('en-GB',{timeZone:'Europe/Berlin',weekday:'short',hour:'2-digit',minute:'2-digit',hourCycle:'h23'}).formatToParts(new Date()),g=t=>f.find(x=>x.type===t).value;return{d:{Sun:0,Mon:1,Tue:2,Wed:3,Thu:4,Fri:5,Sat:6}[g('weekday')],m:+g('hour')*60+ +g('minute')}}catch(e){const n=new Date();return{d:n.getDay(),m:n.getHours()*60+n.getMinutes()}}}
function upd(){const t=now(),h=H[t.d],open=!!h&&t.m>=h[0]*60&&t.m<h[1]*60,c=document.querySelector('.oh');if(!c)return;c.classList.toggle('open',open);c.classList.toggle('closed',!open);c.querySelectorAll('li').forEach(li=>li.classList.toggle('today',+li.dataset.d===t.d));let msg;
if(open){const left=h[1]*60-t.m;msg=left<=60?'Open now · closes in '+left+' min':'Open now · until '+pad(h[1])}
else if(h&&t.m<h[0]*60){msg='Closed · opens today at '+pad(h[0])}
else{let nd=t.d,k=0;do{nd=(nd+1)%7;k++}while(!H[nd]);msg='Closed · opens '+(k===1?'tomorrow':DN[nd])+' at '+pad(H[nd][0])}
const tr=window.__tr||(s=>s);c.querySelector('.stt').textContent=tr(open?'Open now':'Closed');c.querySelector('.sub2').textContent=tr(msg)}
upd();setInterval(upd,30000);addEventListener('langchange',upd);
const oc=document.querySelector('.oh');if(oc){let t,last=0;addEventListener('scroll',()=>{oc.style.translate='0 '+(-Math.min(scrollY,500)*.14)+'px';const n=Date.now();if(n-last>1400){last=n;oc.classList.add('pop');clearTimeout(t);t=setTimeout(()=>oc.classList.remove('pop'),600)}},{passive:true})}
const dt=document.querySelector('.oh details');if(dt){let tm;dt.addEventListener('toggle',()=>{clearTimeout(tm);if(dt.open)tm=setTimeout(()=>{dt.open=false},5000)})}
})();
const heroBg=document.querySelector('.hero .bg');addEventListener('scroll',()=>{if(heroBg)heroBg.parentElement.style.setProperty('--hp',Math.min(1,scrollY/Math.max(innerHeight,1)).toFixed(3))},{passive:true});
const hero=$('#home');
(()=>{let on=null;const MN=document.querySelector('main');const f=()=>{if(window.__noPlay)return;if(MN.hidden){on=false;hero.classList.remove('play');return}const hh=hero.offsetHeight||innerHeight,v=1-Math.min(Math.max(scrollY,0),hh)/hh;if(v>=.35&&on!==true){on=true;void hero.offsetWidth;hero.classList.add('play')}else if(v<.25&&on!==false){on=false;hero.classList.remove('play')}};window.__heroReplay=()=>{on=true;hero.classList.remove('play');void hero.offsetWidth;hero.classList.add('play')};addEventListener('scroll',f,{passive:true});new MutationObserver(f).observe(MN,{attributes:true,attributeFilter:['hidden']});f()})();
const mainEl=$('main'),allEl=$('#allsvc');
function route(h){h=typeof h==='string'?h:location.hash;const on=h==='#all-services';mainEl.hidden=on;allEl.classList.toggle('show',on);if(on){scrollTo(0,0);links.forEach(a=>a.classList.remove('on'))}else if(h==='#home'){scrollTo(0,0)}else if(h.length>1){const t=document.querySelector(h);if(t)requestAnimationFrame(()=>t.scrollIntoView())}}
addEventListener('hashchange',route);route();
document.addEventListener('click',e=>{const a=e.target.closest('a[href^="#"]');if(!a)return;const h=a.getAttribute('href');if(h==='#all-services'||mainEl.hidden){e.preventDefault();try{if(location.hash!==h)history.pushState(null,'',h)}catch(_){}route(h)}});
/* Lenis smooth scroll (falls back to the built-in version below if the library cannot load) */
if(window.Lenis&&!matchMedia('(prefers-reduced-motion:reduce)').matches){
const lenis=new Lenis({duration:1.2,easing:t=>Math.min(1,1.001-Math.pow(2,-10*t)),smoothWheel:true});window.__lenis=lenis;
function lraf(t){lenis.raf(t);requestAnimationFrame(lraf)}requestAnimationFrame(lraf);
document.addEventListener('click',e=>{const a=e.target.closest('a[href^="#"]');if(!a||e.defaultPrevented)return;const h=a.getAttribute('href');if(mainEl.hidden||h==='#all-services'||h.length<2)return;const t=document.querySelector(h);if(!t)return;e.preventDefault();const tgtY=h==='#home'?0:t.getBoundingClientRect().top+scrollY-96,dur=Math.min(.9,.4+Math.abs(tgtY-scrollY)/8000);lenis.scrollTo(tgtY,{duration:dur,easing:x=>x>=1?1:1-Math.pow(2,-10*x)});try{history.replaceState(null,'',h)}catch(_){}});
}
/* smooth inertial scrolling (mouse wheel / trackpad); touch screens and reduced-motion keep native scrolling */
(()=>{if(window.Lenis||matchMedia('(prefers-reduced-motion:reduce)').matches||matchMedia('(hover:none)').matches)return;
const de=document.documentElement;de.style.scrollBehavior='auto';
let cur=scrollY,tgt=scrollY,raf=0;let EASE=.06;
const clamp=v=>Math.max(0,Math.min(de.scrollHeight-innerHeight,v));
const se=document.scrollingElement||de;function tick(){const d=tgt-cur;if(Math.abs(d)<.4){cur=tgt;se.scrollTop=cur;raf=0;return}cur+=d*EASE;se.scrollTop=cur;raf=requestAnimationFrame(tick)}
function go(v){tgt=clamp(v);if(!raf)raf=requestAnimationFrame(tick)}
addEventListener('wheel',e=>{EASE=.06;if(e.ctrlKey)return;e.preventDefault();if(!raf)cur=tgt=scrollY;go(tgt+(e.deltaMode===1?e.deltaY*32:e.deltaY)*1.1)},{passive:false});
addEventListener('scroll',()=>{if(!raf)cur=tgt=scrollY},{passive:true});
document.addEventListener('click',e=>{const a=e.target.closest('a[href^="#"]');if(!a||e.defaultPrevented)return;const h=a.getAttribute('href');if(mainEl.hidden||h==='#all-services'||h.length<2)return;const t=document.querySelector(h);if(!t)return;e.preventDefault();EASE=.22;if(!raf)cur=tgt=scrollY;go(h==='#home'?0:t.getBoundingClientRect().top+scrollY-96);try{history.replaceState(null,'',h)}catch(_){}});
})();
const n=$('#nav'),b=$('#bg');b.onclick=()=>{const o=n.classList.toggle('open');b.setAttribute('aria-expanded',o)};
links.forEach(a=>a.addEventListener('click',()=>{n.classList.remove('open');b.setAttribute('aria-expanded',false)}));
document.documentElement.classList.add('anim');chk();window.__mainOK=true;
