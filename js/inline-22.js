
/* All services: cards with several photos of one client slide sideways */
(function(){var root=document.querySelector('.svp');if(!root)return;
var rm=window.matchMedia&&matchMedia('(prefers-reduced-motion:reduce)').matches;
[].forEach.call(root.querySelectorAll('.pc.ms'),function(c){var t=c.querySelector('.psl'),dots=c.querySelectorAll('.pdt i'),n=dots.length,cur=0,last=0,vis=false,hov=false;
function mark(i){cur=i;c.dataset.cur=i;[].forEach.call(dots,function(d,k){d.classList.toggle('on',k===i)})}
function go(i){i=(i+n)%n;t.scrollTo({left:i*t.clientWidth,behavior:rm?'auto':'smooth'});mark(i)}
var raf=0;t.addEventListener('scroll',function(){cancelAnimationFrame(raf);raf=requestAnimationFrame(function(){var i=Math.round(t.scrollLeft/(t.clientWidth||1));if(i!==cur&&i>=0&&i<n)mark(i)})},{passive:true});
c.querySelector('.pnp').addEventListener('click',function(e){e.stopPropagation();last=Date.now();go(cur-1)});
c.querySelector('.pnf').addEventListener('click',function(e){e.stopPropagation();last=Date.now();go(cur+1)});
['touchstart','pointerdown','wheel'].forEach(function(ev){t.addEventListener(ev,function(){last=Date.now()},{passive:true})});
c.addEventListener('mouseenter',function(){hov=true});c.addEventListener('mouseleave',function(){hov=false});
c.addEventListener('keydown',function(e){if(e.key==='ArrowRight'){last=Date.now();go(cur+1)}else if(e.key==='ArrowLeft'){last=Date.now();go(cur-1)}});
if('IntersectionObserver' in window)new IntersectionObserver(function(es){vis=es[0].isIntersecting},{threshold:.6}).observe(c);
if(!rm)setInterval(function(){if(vis&&!hov&&!document.hidden&&Date.now()-last>7000)go(cur+1)},4200+Math.random()*900);
mark(0)})})();
