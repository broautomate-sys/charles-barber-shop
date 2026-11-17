
/* Opening-hours status: standalone, runs right here so it works even if another script on the page fails */
(function(){var c=document.querySelector('.oh');if(!c)return;
var HR={0:null,1:[10,20],2:[10,20],3:[10,20],4:[10,20],5:[10,20],6:[10,20]},DN=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],P=function(x){return(x<10?'0':'')+x+':00'};
function now(){try{var f=new Intl.DateTimeFormat('en-GB',{timeZone:'Europe/Berlin',weekday:'short',hour:'2-digit',minute:'2-digit',hourCycle:'h23'}).formatToParts(new Date()),g={};f.forEach(function(p){g[p.type]=p.value});return{d:{Sun:0,Mon:1,Tue:2,Wed:3,Thu:4,Fri:5,Sat:6}[g.weekday],m:+g.hour*60+ +g.minute}}catch(e){var n=new Date();return{d:n.getDay(),m:n.getHours()*60+n.getMinutes()}}}
function upd(){var t=now(),h=HR[t.d],open=!!h&&t.m>=h[0]*60&&t.m<h[1]*60,msg;
if(open){var left=h[1]*60-t.m;msg=left<=60?'Open now \u00b7 closes in '+left+' min':'Open now \u00b7 until '+P(h[1])}
else if(h&&t.m<h[0]*60){msg='Closed \u00b7 opens today at '+P(h[0])}
else{var nd=t.d,k=0;do{nd=(nd+1)%7;k++}while(!HR[nd]);msg='Closed \u00b7 opens '+(k===1?'tomorrow':DN[nd])+' at '+P(HR[nd][0])}
var tr=window.__tr||function(s){return s};c.classList.toggle('open',open);c.classList.toggle('closed',!open);
var st=c.querySelector('.stt'),sb=c.querySelector('.sub2');if(st)st.textContent=tr(open?'Open now':'Closed');if(sb)sb.textContent=tr(msg);
var li=c.querySelectorAll('li');for(var i=0;i<li.length;i++)li[i].classList.toggle('today',+li[i].getAttribute('data-d')===t.d)}
upd();setInterval(upd,20000);window.addEventListener('langchange',upd);document.addEventListener('DOMContentLoaded',upd);window.addEventListener('load',upd)})();
