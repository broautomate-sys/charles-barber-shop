
(function(){try{
var sec=document.getElementById('mannheim');if(!sec)return;
var zoom=sec.querySelector('.cm-zoom'),sl=[].slice.call(sec.querySelectorAll('.cm-s')),dt=[].slice.call(sec.querySelectorAll('.cm-d'));
var reduce=window.matchMedia&&matchMedia('(prefers-reduced-motion:reduce)').matches;
var vis=false,tick=0,cur=0,timer=null,GAP=6500;
function clamp(x){return x<0?0:x>1?1:x}
function paint(){tick=0;if(reduce||!vis)return;var r=sec.getBoundingClientRect(),vh=window.innerHeight||1;
 var p=clamp((vh-r.top)/(vh+r.height));zoom.style.transform='translate3d(0,0,0) scale('+(1.04+p*.15).toFixed(4)+')'}
function req(){if(!tick)tick=requestAnimationFrame(paint)}
function show(i){cur=(i+sl.length)%sl.length;sl.forEach(function(s,k){s.classList.toggle('on',k===cur)});
 dt.forEach(function(d,k){d.classList.remove('on');d.setAttribute('aria-current',k===cur?'true':'false')});
 void sec.offsetWidth;dt[cur].classList.add('on')}
function stop(){clearInterval(timer);timer=null}
function go(){stop();if(!vis||document.hidden)return;timer=setInterval(function(){show(cur+1)},GAP)}
dt.forEach(function(d,k){d.addEventListener('click',function(){show(k);go()})});
sec.style.setProperty('--cmt',(GAP/1000)+'s');
if('IntersectionObserver' in window){
 new IntersectionObserver(function(es){es.forEach(function(e){vis=e.isIntersecting;if(vis){sec.classList.add('in');req();go()}else stop()})},{threshold:.01}).observe(sec);
}else{vis=true;sec.classList.add('in');go()}
addEventListener('scroll',req,{passive:true});addEventListener('resize',req,{passive:true});
document.addEventListener('visibilitychange',function(){document.hidden?stop():go()});
req();
}catch(e){}})();
