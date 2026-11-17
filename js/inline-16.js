
(function(){var root=document.querySelector('.svp');if(!root)return;
var tabs=[].slice.call(root.querySelectorAll('.stab')),panels=[].slice.call(root.querySelectorAll('.spanel')),q=root.querySelector('#svq'),none=root.querySelector('.snone');root.classList.add('js');
function pick(id){tabs.forEach(function(t){var on=t.getAttribute('data-t')===id;t.classList.toggle('on',on);t.setAttribute('aria-selected',on?'true':'false')});panels.forEach(function(p){p.classList.toggle('on',p.id==='sp-'+id)})}
function filter(){var v=(q.value||'').trim().toLowerCase(),total=0;root.classList.toggle('searching',!!v);
[].forEach.call(root.querySelectorAll('details.sec'),function(d){var m=0;[].forEach.call(d.querySelectorAll('.sx'),function(it){var ok=!v||it.textContent.toLowerCase().indexOf(v)>-1;it.hidden=!ok;if(ok)m++});total+=m;d.hidden=!!v&&m===0;d.open=v?m>0:true});
if(none)none.hidden=!(v&&total===0)}
tabs.forEach(function(t){t.addEventListener('click',function(){if(q&&q.value){q.value='';filter()}pick(t.getAttribute('data-t'))})});
if(q)q.addEventListener('input',filter);pick('men')})();
