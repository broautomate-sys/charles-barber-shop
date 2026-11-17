
/* Gallery page: show/hide, cards rise into view as they scroll in */
(function(){var gal=document.getElementById('allgal');if(!gal)return;
var main=document.querySelector('main'),svc=document.getElementById('allsvc'),t0=document.title,sp=document.getElementById('all-services');if(sp&&sp.parentNode)sp.parentNode.insertBefore(gal,sp);
function show(on){if(!main)return;if(on){if(svc)svc.classList.add('show');main.hidden=true;gal.classList.add('show','stack');window.scrollTo(0,0);t0=document.title.indexOf('Gallery')===0||document.title.indexOf('Galerie')===0?t0:document.title;document.title=(document.documentElement.lang==='de'?'Galerie':'Gallery')+' | Charles Barber'}else{gal.classList.remove('show','stack');if(svc)svc.classList.remove('show');if(t0)document.title=t0}}
document.addEventListener('click',function(e){var a=e.target&&e.target.closest?e.target.closest('a[href^="#"]'):null;if(!a)return;var h=a.getAttribute('href');
 if(h==='#all-gallery'||h==='#all-services'){e.preventDefault();e.stopImmediatePropagation();show(true);try{history.pushState(null,'',h)}catch(_){}return}
 if(gal.classList.contains('show')&&h!=='#book'&&h!=='#'&&!a.closest('#bkdlg')){show(false)}
},true);
function sync(){if(/^#all-(gallery|services)$/.test(location.hash)){setTimeout(function(){show(true)},0)}else if(gal.classList.contains('show')){show(false)}}
addEventListener('hashchange',sync);
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',function(){if(/^#all-(gallery|services)$/.test(location.hash))show(true)});else if(/^#all-(gallery|services)$/.test(location.hash))setTimeout(function(){show(true)},0);
var cards=[].slice.call(gal.querySelectorAll('.pc.sx'));
cards.forEach(function(c,i){c.style.setProperty('--i',i);c.classList.add('anim')});
if('IntersectionObserver' in window){var io=new IntersectionObserver(function(es){es.forEach(function(e){var c=e.target;if(e.isIntersecting){var i=+c.style.getPropertyValue('--i')||0;c.style.setProperty('--d',(i%5)*.09+'s');c.classList.add('in');setTimeout(function(){c.style.setProperty('--d','0s')},1700)}else if(e.boundingClientRect.height===0||e.boundingClientRect.top>0){c.classList.remove('in')}})},{threshold:.12});cards.forEach(function(c){io.observe(c)})}else{cards.forEach(function(c){c.classList.add('in')})}
})();
