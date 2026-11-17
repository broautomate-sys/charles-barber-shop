
/* All services: pictures rise into place as they come into view (and again each time a section or tab is opened) */
(function(){var root=document.querySelector('.svp');if(!root||!('IntersectionObserver' in window))return;
var cards=[].slice.call(root.querySelectorAll('.pc.sx'));
[].forEach.call(root.querySelectorAll('.pgrid'),function(g){[].forEach.call(g.querySelectorAll('.pc.sx'),function(c,i){c.style.setProperty('--i',i)})});
cards.forEach(function(c){c.classList.add('anim')});
var io=new IntersectionObserver(function(es){es.forEach(function(e){var c=e.target;
 if(e.isIntersecting){var i=+c.style.getPropertyValue('--i')||0;c.style.setProperty('--d',(i%5)*0.09+'s');c.classList.add('in');setTimeout(function(){c.style.setProperty('--d','0s')},1700)}
 else if(e.boundingClientRect.height===0||e.boundingClientRect.top>0){c.classList.remove('in')}})},{threshold:.12});
cards.forEach(function(c){io.observe(c)});
})();
