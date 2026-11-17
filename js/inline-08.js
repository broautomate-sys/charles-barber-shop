
/* cbs-nav-early: opens/closes the All services page without changing the address, so it works in any viewer */
(function(){function q(s){return document.querySelector(s)}
function showAll(on){var m=q('main'),a=q('#allsvc');if(!m||!a)return;m.hidden=on;a.classList.toggle('show',on);if(on)window.scrollTo(0,0)}
document.addEventListener('click',function(e){var a=e.target&&e.target.closest?e.target.closest('a[href^="#"]'):null;if(!a)return;var h=a.getAttribute('href'),m=q('main');
 if(h==='#all-services'){e.preventDefault();e.stopImmediatePropagation();showAll(true);return}
 if(h==='#book'||h==='#'||a.closest('#bkdlg'))return;
 if(m&&m.hidden){e.preventDefault();e.stopImmediatePropagation();showAll(false);var t=h.length>1?q(h):null;setTimeout(function(){if(h==='#home'||!t)window.scrollTo(0,0);else t.scrollIntoView()},40);var nv=q('#nav');if(nv)nv.classList.remove('open');return}
 if(!window.__mainOK){var t2=h.length>1?q(h):null;if(t2){e.preventDefault();t2.scrollIntoView({behavior:'smooth'})}}
},true);
function init(){if(location.hash==='#all-services')showAll(true)}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();
