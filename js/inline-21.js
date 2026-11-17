
(function(){var root=document,zm=document.getElementById('zm');if(!root||!zm)return;
var mq=window.matchMedia('(max-width:700px)'),rmq=window.matchMedia('(prefers-reduced-motion:reduce)'),img=zm.querySelector('.zimg'),cap=zm.querySelector('.zcap'),ct=cap.querySelector('b'),cd=cap.querySelector('.zd'),cc=cap.querySelector('.zct'),
list=[],idx=0,card=null,isOpen=false,busy=false,prevFocus=null,z2=false,zin=img.querySelector('.zin');
function dur(){return rmq.matches?20:780}
function rect(c){var r=c.getBoundingClientRect();return{l:r.left,t:r.top,w:r.width,h:r.height}}
function target(c){var ar=(c.offsetWidth||3)/(c.offsetHeight||4),vw=innerWidth,vh=innerHeight,h=Math.min(vh*.76,vw*.86/ar,780),w=h*ar;return{l:(vw-w)/2,t:Math.max(24,(vh-h)/2-34),w:w,h:h}}
function place(o){img.style.left=o.l+'px';img.style.top=o.t+'px';img.style.width=o.w+'px';img.style.height=o.h+'px'}
function setZ(on){z2=!!on;img.classList.toggle('z2',z2);zm.classList.toggle('z2',z2)}
function pan(e){var r=img.getBoundingClientRect(),x=Math.max(0,Math.min(1,(e.clientX-r.left)/r.width)),y=Math.max(0,Math.min(1,(e.clientY-r.top)/r.height));img.style.setProperty('--ox',(x*100)+'%');img.style.setProperty('--oy',(y*100)+'%')}
function capPos(o){cap.style.top=(o.t+o.h+20)+'px'}
function setImg(e){img.style.setProperty('--pi',e.pi);img.style.setProperty('--pp',e.pp||'center');img.setAttribute('aria-label',e.t);ct.textContent=e.t;cd.textContent=e.d||'';cc.textContent=(idx+1)+' / '+list.length}
function ce(k){var ph=k.querySelector('.ph'),h=k.querySelector('h3'),p=k.querySelector('.t p'),f=k.getAttribute('data-k')==='fade';return{pi:f?'var(--i3x)':(ph&&ph.style.backgroundImage)||'',pp:f?'center':(ph&&ph.style.backgroundPosition)||'center',t:h?h.textContent:'',d:p?p.textContent:''}}
function build(c){var at=0;list=[];var isC=c.classList.contains('card');[].forEach.call((isC?c.closest('.cards'):c.closest('.pgrid')).querySelectorAll(isC?'.card':'.pc.sx'),function(k){if(k.hidden)return;if(isC){if(k===c)at=list.length;var e=ce(k);e.card=k;list.push(e);return}var b=k.querySelector('b'),d=k.querySelector('.d'),t=b?b.textContent:'',ds=d?d.textContent:'',m=k.querySelectorAll('.pbs');
if(m.length){[].forEach.call(m,function(s,j){if(k===c&&j===(+k.dataset.cur||0))at=list.length;list.push({card:k,pi:s.style.getPropertyValue('--pi'),pp:s.style.getPropertyValue('--pp'),t:t,d:(ds?ds+' \u00b7 ':'')+(j+1)+' / '+m.length})})}
else{if(k===c)at=list.length;list.push({card:k,pi:k.style.getPropertyValue('--pi'),pp:k.style.getPropertyValue('--pp'),t:t,d:ds})}});return at}
function openZ(c){if(isOpen||busy)return;busy=true;prevFocus=document.activeElement;idx=build(c);card=list[idx].card;
var r=rect(card),o=target(card),rad=getComputedStyle(card).borderRadius;
zm.classList.toggle('single',list.length<2);setImg(list[idx]);
img.className='zimg';setZ(false);img.style.transition='none';img.style.borderRadius=rad;place(r);capPos(o);
zm.classList.add('on');zm.setAttribute('aria-hidden','false');void img.offsetWidth;
card.classList.add('zh');img.style.transition='';img.style.borderRadius='20px';place(o);zm.classList.add('in');isOpen=true;
setTimeout(function(){busy=false},dur()*.6);try{zm.querySelector('.zx').focus({preventScroll:true})}catch(e){}}
function closeZ(){if(!isOpen||busy)return;busy=true;setZ(false);var c=list[idx].card,r=rect(c),vh=innerHeight,vis=r.t<vh&&r.t+r.h>0&&r.w>0;
zm.classList.remove('in');
if(vis){img.style.borderRadius=getComputedStyle(c).borderRadius;place(r)}else{img.classList.add('fo')}
setTimeout(function(){c.classList.remove('zh');zm.classList.remove('on');zm.setAttribute('aria-hidden','true');img.className='zimg';isOpen=false;busy=false;try{if(prevFocus&&prevFocus.focus)prevFocus.focus({preventScroll:true})}catch(e){}},dur()+40)}
function go(d){if(!isOpen||busy||list.length<2)return;busy=true;setZ(false);var n=(idx+d+list.length)%list.length;
img.style.setProperty('--sx',(-d*28)+'px');img.classList.add('sw');cap.classList.add('sw');
setTimeout(function(){idx=n;var nc=list[idx].card;if(nc!==card){card.classList.remove('zh');card=nc;card.classList.add('zh')}
img.style.transition='none';img.style.setProperty('--sx',(d*28)+'px');var o=target(card);place(o);capPos(o);setImg(list[idx]);void img.offsetWidth;img.style.transition='';
img.classList.remove('sw');cap.classList.remove('sw');setTimeout(function(){busy=false},420)},260)}
root.addEventListener('click',function(e){if(mq.matches||isOpen)return;if(e.target.closest&&e.target.closest('.pnv'))return;var c=e.target.closest?e.target.closest('.pc.sx,#cards .card'):null;if(c&&(c.matches('#cards .card')||(c.closest('.pgrid')&&c.closest('.svp,#allgal'))))openZ(c)});
img.addEventListener('click',function(e){e.stopPropagation();if(busy)return;if(!z2){pan(e);setZ(true)}else{setZ(false)}});img.addEventListener('mousemove',function(e){if(z2)pan(e)});img.addEventListener('touchmove',function(e){if(z2&&e.touches[0])pan(e.touches[0])},{passive:true});zm.addEventListener('click',function(e){if(e.target===zm)closeZ()});
zm.querySelector('.zx').addEventListener('click',function(e){e.stopPropagation();closeZ()});
zm.querySelector('.zp').addEventListener('click',function(e){e.stopPropagation();go(-1)});
zm.querySelector('.zf').addEventListener('click',function(e){e.stopPropagation();go(1)});
zm.addEventListener('wheel',function(e){e.preventDefault()},{passive:false});
document.addEventListener('keydown',function(e){if(!isOpen)return;if(e.key==='Escape'){e.preventDefault();if(z2)setZ(false);else closeZ()}else if(e.key==='ArrowRight'){e.preventDefault();go(1)}else if(e.key==='ArrowLeft'){e.preventDefault();go(-1)}});
window.addEventListener('resize',function(){if(!isOpen)return;if(mq.matches){card.classList.remove('zh');zm.classList.remove('on','in');isOpen=false;busy=false;return}img.style.transition='none';var o=target(card);place(o);capPos(o);void img.offsetWidth;img.style.transition=''});
})();
