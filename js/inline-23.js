
/* SEO: unique title + description for the "All services" view */
(function(){var q=function(x){return document.querySelector(x)},sv=q('#allsvc');if(!sv)return;
var T={en:["All Services & Prices | Charles Barber Shop Mannheim","Browse all haircut, fade, beard, shaving, styling and braiding services at Charles Barber in Mannheim. Prices are confirmed in the shop before every service."],
de:["Alle Leistungen & Preise | Charles Barber Shop Mannheim","Alle Leistungen von Charles Barber in Mannheim: Haarschnitte, Fades, Bartpflege, Rasur, Styling und Flechtfrisuren. Preise werden vor jeder Leistung im Shop bestätigt."]};
function sync(){if(!sv.classList.contains('show'))return;var l=document.documentElement.lang==='de'?'de':'en',t=T[l];document.title=t[0];
[['meta[name="description"]',t[1]],['meta[property="og:title"]',t[0]],['meta[name="twitter:title"]',t[0]],['meta[property="og:description"]',t[1]],['meta[name="twitter:description"]',t[1]]].forEach(function(x){var e=q(x[0]);if(e)e.setAttribute('content',x[1])})}
function restore(){if(sv.classList.contains('show'))return;var l=document.documentElement.lang==='de'?'de':'en';var d={en:["Charles Barber Shop Mannheim | Barber & Men's Hairdresser","Charles Barber Shop in Mannheim – professional men's haircuts, modern fade cuts and beard grooming. Visit us at T3 23, 68161 Mannheim."],de:["Charles Barber Shop Mannheim | Barber & Herrenfriseur","Charles Barber Shop in Mannheim – professionelle Herrenhaarschnitte, moderne Fade Cuts und Bartpflege. Besuche uns in T3 23, 68161 Mannheim."]}[l];
document.title=d[0];[['meta[name="description"]',d[1]],['meta[property="og:title"]',d[0]],['meta[name="twitter:title"]',d[0]],['meta[property="og:description"]',d[1]],['meta[name="twitter:description"]',d[1]]].forEach(function(x){var e=q(x[0]);if(e)e.setAttribute('content',x[1])})}
function run(){sv.classList.contains('show')?sync():restore()}
new MutationObserver(run).observe(sv,{attributes:true,attributeFilter:['class']});addEventListener('langchange',run);run()})();
