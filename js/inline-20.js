
(function(){var h=document.querySelector('header');if(!h)return;
function f(){h.classList.toggle('top',(window.pageYOffset||document.documentElement.scrollTop||0)<8)}
f();addEventListener('scroll',f,{passive:true});addEventListener('resize',f);addEventListener('load',f);addEventListener('hashchange',function(){setTimeout(f,60)});addEventListener('pageshow',f)})();
