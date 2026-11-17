
(function(){var lv=document.getElementById('legal');if(!lv)return;
var main=document.querySelector('main'),svc=document.getElementById('allsvc'),t0=document.title,
T={'#impressum':['lg-impressum','Impressum | Charles Barber Shop'],'#datenschutz':['lg-datenschutz','Datenschutzerklärung | Charles Barber Shop']};
function show(h){var d=T[h];if(!d||!main)return;if(!lv.classList.contains('show'))t0=document.title;var gal=document.getElementById('allgal');if(svc)svc.classList.remove('show');if(gal)gal.classList.remove('show','stack');main.hidden=true;lv.classList.add('show');[].forEach.call(lv.querySelectorAll('.lgl'),function(b){b.hidden=b.id!==d[0]});window.scrollTo(0,0);document.title=d[1]}
function hide(){lv.classList.remove('show');document.title=t0}
document.addEventListener('click',function(e){var a=e.target&&e.target.closest?e.target.closest('a[href^="#"]'):null;if(!a)return;var h=a.getAttribute('href');
 if(T[h]){e.preventDefault();e.stopImmediatePropagation();show(h);try{history.pushState(null,'',h)}catch(_){}return}
 if(lv.classList.contains('show')&&h!=='#book'&&h!=='#'&&!a.closest('#bkdlg'))hide()},true);
function sync(){var h=location.hash;if(T[h])setTimeout(function(){show(h)},0);else if(lv.classList.contains('show'))hide()}
addEventListener('hashchange',sync);
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',function(){if(T[location.hash])show(location.hash)});else if(T[location.hash])setTimeout(function(){show(location.hash)},0);
})();
