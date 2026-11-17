
(function(){var b=document.getElementById('brand');if(!b)return;
var rm=matchMedia('(prefers-reduced-motion:reduce)').matches;
if('IntersectionObserver' in window&&!rm){b.classList.add('arm');var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){b.classList.add('in');io.disconnect()}})},{threshold:.25});io.observe(b)}
if(rm||!matchMedia('(hover:hover)').matches)return;
var cx=30,cy=12,tx=30,ty=12,raf=0;
function ap(){b.style.setProperty('--mx',cx.toFixed(1)+'%');b.style.setProperty('--my',cy.toFixed(1)+'%');b.style.setProperty('--ex',(.8+(50-cx)/50*.55).toFixed(2));b.style.setProperty('--ey',(1+(40-cy)/60*.25).toFixed(2))}
function tick(){cx+=(tx-cx)*.08;cy+=(ty-cy)*.08;ap();if(Math.abs(tx-cx)>.1||Math.abs(ty-cy)>.1)raf=requestAnimationFrame(tick);else raf=0}
b.addEventListener('pointermove',function(e){var r=b.getBoundingClientRect();tx=(e.clientX-r.left)/r.width*100;ty=(e.clientY-r.top)/r.height*100;if(!raf)raf=requestAnimationFrame(tick)});
ap()})();
