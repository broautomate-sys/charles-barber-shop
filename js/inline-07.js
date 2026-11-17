
(function(){var cb=document.getElementById('cb');if(!cb)return;var K='cbs-consent';
function get(){try{return localStorage.getItem(K)}catch(e){return null}}
function set(v){try{localStorage.setItem(K,v)}catch(e){}}
function show(){cb.hidden=false;requestAnimationFrame(function(){requestAnimationFrame(function(){cb.classList.add('show')})})}
function hide(){cb.classList.remove('show');setTimeout(function(){cb.hidden=true},600)}
cb.querySelector('.cb-yes').addEventListener('click',function(){set('yes');if(window.cbsFonts)window.cbsFonts();hide()});
cb.querySelector('.cb-no').addEventListener('click',function(){set('no');[].forEach.call(document.querySelectorAll('link[data-cbs="fonts"]'),function(l){l.parentNode.removeChild(l)});hide()});
document.addEventListener('click',function(e){var o=e.target.closest&&e.target.closest('.cb-open');if(o){e.preventDefault();show()}});
if(get()===null)setTimeout(show,900);
})();
