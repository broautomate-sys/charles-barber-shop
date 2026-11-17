
/* All services: every section opens by itself with a slide-down as it comes into view; no manual opening needed */
(function(){var root=document.querySelector('.svp');if(!root)return;
var secs=[].slice.call(root.querySelectorAll('details.sec'));
function slide(d,delay){d.style.setProperty('--sd',delay+'s');d.classList.remove('sd');void d.offsetWidth;d.classList.add('sd');
 clearTimeout(d._sdt);d._sdt=setTimeout(function(){d.classList.remove('sd')},900+delay*1000)}
function searching(){return root.classList.contains('searching')}
function openAll(){secs.forEach(function(d){if(!searching())d.open=true})}
openAll();
function seen(d){var r=d.getBoundingClientRect();return r.height>0&&r.top<innerHeight*0.92&&r.bottom>0}
if('IntersectionObserver' in window){
 var io=new IntersectionObserver(function(es){es.forEach(function(e){var d=e.target;
  if(e.isIntersecting){if(!d._pl&&!searching()){d._pl=true;d.open=true;slide(d,0)}}else if(!d.offsetHeight){d._pl=false}})},{rootMargin:'0px 0px -8% 0px',threshold:0.04});
 secs.forEach(function(d){io.observe(d)})}
[].forEach.call(root.querySelectorAll('.stab'),function(t){t.addEventListener('click',function(){
 var q=root.querySelector('#svq');if(q&&q.value)return;
 var p=root.querySelector('#sp-'+t.getAttribute('data-t'));if(!p)return;
 var list=[].slice.call(p.querySelectorAll('details.sec'));
 list.forEach(function(d){d.open=true;d._pl=false});
 setTimeout(function(){var k=0;list.forEach(function(d){if(seen(d)){d._pl=true;slide(d,k*0.16);k++}})},30)})});
secs.forEach(function(d){d.querySelector('summary').addEventListener('click',function(){if(!d.open&&!searching())slide(d,0)})});
})();
