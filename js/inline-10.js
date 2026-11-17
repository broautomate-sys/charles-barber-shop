
(()=>{const d=document.getElementById('bkdlg');if(!d||typeof d.showModal!=='function')return;
const WA='4915221675527',TEL='+4962143659447',HR={0:null,1:[10,20],2:[10,20],3:[10,20],4:[10,20],5:[10,20],6:[10,20]};
const DE=()=>document.documentElement.lang==='de',t=(a,b)=>DE()?b:a,$=id=>document.getElementById(id),L=i=>DE()?1:0;
const SV=[["Haircuts","Haarschnitte","Tailored cuts, clean lines","Maßgeschneidert, saubere Linien",1],["Fade / Skin fade","Fade / Skin Fade","Seamless blends","Fließende Übergänge",1],["Beard trim & shape","Bart trimmen & formen","Defined lines","Klare Konturen",0],["Hair + beard","Haare + Bart","The full groom","Die komplette Pflege",1],["Shaving","Rasur","Close and careful","Gründlich und sorgfältig",0],["Styling","Styling","Finished your way","Nach Ihrem Geschmack",1],["Hair braiding","Haarflechten","Braided styles for men","Flechtfrisuren für Männer",0],["Ladies' hair braiding","Flechtfrisuren für Damen","Braided styles for women","Flechtfrisuren für Frauen",0]];
const ST=[["Low fade","Low Fade"],["Mid fade","Mid Fade"],["High fade","High Fade"],["Skin / bald fade","Skin / Bald Fade"],["Buzz cut","Buzz Cut"],["Scissor cut","Scherenschnitt"],["Afro / curls","Afro / Locken"],["Line-up & design","Line-up & Design"],["Not sure yet","Noch unsicher"]];
const TT=[["Choose your service","Leistung wählen"],["Pick a date & time","Datum & Uhrzeit wählen"],["Your details","Ihre Angaben"],["Review & send","Prüfen & senden"],["Almost done","Fast geschafft"]];
const DY=[['Sun','Mon','Tue','Wed','Thu','Fri','Sat'],['So','Mo','Di','Mi','Do','Fr','Sa']],MO=[['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],['Jan','Feb','Mär','Apr','Mai','Jun','Jul','Aug','Sep','Okt','Nov','Dez']];
const S={s:1,sv:-1,st:-1,gn:'',pick:null,date:'',time:'',name:'',phone:'',note:'',ref:'',resch:false};
const PICKS=[{en:'Hairline Shape-Up',de:'Haaransatz-Konturen',svc:'Haircuts',v:'n4',pos:'center'},{en:'French Crop',de:'French Crop',svc:'Haircuts',v:'n13',pos:'center'},{en:'Flat Top',de:'Flat Top',svc:'Haircuts',v:'n9',pos:'center'},{en:'Scissor Cut',de:'Scherenschnitt',svc:'Haircuts',v:'n14',pos:'center'},{en:'Natural Waves',de:'Natürliche Wellen',svc:'Styling',v:'n19',pos:'center'},{en:'Beard Shape & Sculpt',de:'Bart formen & modellieren',svc:'Beard trim & shape',v:'n2',pos:'center'},{en:'Hot Towel Shave',de:'Heißtuch-Rasur',svc:'Shaving',v:'n10',pos:'center'},{en:'Afro Taper',de:'Afro Taper',svc:'Haircuts',v:'i8',pos:'center 28%'},
{en:'Temple Fades',de:'Temple Fades',svc:'Fade / Skin fade',v:'n12',pos:'center'},
{en:'Fade with Design',de:'Fade mit Design',svc:'Fade / Skin fade',v:'i3',pos:'center'},
{en:'Long Men\'s Haircut',de:'Herrenschnitt für Langhaar',svc:'Haircuts',v:'n15',pos:'center'},
{en:'Curly Top',de:'Lockiges Deckhaar',svc:'Styling',v:'i10',pos:'center'},
{en:'Beard Line-Up',de:'Bart-Konturen',svc:'Beard trim & shape',v:'n18',pos:'center'},
{en:'Beard Fade',de:'Bart-Fade',svc:'Beard trim & shape',v:'i9',pos:'center'},
{en:'Hair & Beard Package',de:'Haar- & Bart-Paket',svc:'Hair + beard',v:'n8',pos:'center'},
{en:'Box Braids for Men',de:'Box Braids für Männer',svc:'Hair braiding',v:'i6',pos:'center'},
{en:'Textured Fade',de:'Texturierter Fade',svc:'Fade / Skin fade',v:'i1',pos:'center 30%'},
{en:'Taper & Full Beard',de:'Taper & Vollbart',svc:'Hair + beard',v:'i4',pos:'center 45%'},
{en:'Beard Trim',de:'Bart trimmen',svc:'Beard trim & shape',v:'n6',pos:'center'},
{en:'Hot Lather Shave',de:'Rasur mit Heißschaum',svc:'Shaving',v:'n7',pos:'center'},
{en:'Kids\' Haircut',de:'Kinderhaarschnitt',svc:'Haircuts',v:'n5',pos:'center'},
{en:'Dreads & Beard',de:'Dreads & Bart',svc:'Hair + beard',v:'n1',pos:'center'},
{en:'Cornrows',de:'Cornrows',svc:'Hair braiding',v:'i5',pos:'center 35%'},
{en:'Scalp Care',de:'Kopfhautpflege',svc:'Styling',v:'n16',pos:'center'}];
const REF=()=>{if(!S.ref)S.ref=Math.random().toString(36).slice(2,6).toUpperCase();return S.ref};
function waNum(s){var d=String(s).replace(/[^\d+]/g,'');if(d.charAt(0)==='+')d=d.slice(1);else if(d.indexOf('00')===0)d=d.slice(2);else if(d.charAt(0)==='0')d='49'+d.slice(1);else if(/^1[5-7]\d{8,9}$/.test(d))d='49'+d;d=d.replace(/\D/g,'');return d.length>=9&&d.length<=15?d:''}
function reply(kind){var R=REF(),de=DE(),MAPL='https://www.google.com/maps/search/?api=1&query=Charles+Barber+Shop+T3+23+68161+Mannheim',who=S.name.split(' ')[0],sv=sn(S.sv)+(sty()?' – '+sty():'')+(S.gn?' · '+gnName(S.gn):''),dt=fmt(S.date)+' · '+S.time+(de?' Uhr':'');
 if(kind==='ok')return de?("*CHARLES BARBER SHOP*\n*TERMIN BESTÄTIGT*  #"+R+"\n\n"+sv+"\n"+dt+"\nT3 23, 68161 Mannheim\n\nBis bald, "+who+"!\n\nRoute (Google Maps):\n"+MAPL):("*CHARLES BARBER SHOP*\n*APPOINTMENT CONFIRMED*  #"+R+"\n\n"+sv+"\n"+dt+"\nT3 23, 68161 Mannheim\n\nSee you soon, "+who+"!\n\nDirections (Google Maps):\n"+MAPL);
 return de?("*CHARLES BARBER SHOP*\n*NEUER TERMIN NÖTIG*  #"+R+"\n\nLeider ist "+dt+" nicht verfügbar.\nBitte antworten Sie mit einer anderen Zeit, die Ihnen passt. Wir helfen Ihnen gerne weiter.\nCharles Barber Shop."):("*CHARLES BARBER SHOP*\n*NEW TIME NEEDED*  #"+R+"\n\nSorry, "+dt+" is not available.\nPlease reply with another time that suits you. We're here to help.\nCharles Barber Shop.")}
const waLink=()=>'https://wa.me/'+WA+'?text='+encodeURIComponent(msg());
function sumHtml(){const r=(a,b)=>'<div><span>'+a+'</span><b>'+b+'</b></div>';return '<div class="sum">'+r(t('Service','Leistung'),E(sn(S.sv)))+(sty()?r(t('Style','Stil'),E(sty())):'')+r(t('Date','Datum'),fmt(S.date))+r(t('Time','Uhrzeit'),S.time)+r('Name',E(S.name))+r(t('Phone','Telefon'),E(S.phone))+'</div>'}
function sentHtml(){return '<div class="sent"><div class="ok" aria-hidden="true">&#10003;</div><b>'+(S.resch?t('New time sent to WhatsApp','Neuer Termin in WhatsApp bereit'):t('Request ready in WhatsApp','Anfrage in WhatsApp bereit'))+'</b><p>'+t('Press Send in WhatsApp. Charles will reply there to confirm your time.','Tippen Sie in WhatsApp auf Senden. Charles antwortet dort, um Ihren Termin zu bestätigen.')+'</p>'+sumHtml()+'<p class="bkn">'+t('Reference','Referenz')+' #'+REF()+' &middot; '+t('Status: waiting for confirmation','Status: wartet auf Bestätigung')+'</p><a class="wa2" target="_blank" rel="noopener" href="'+waLink()+'">'+t('Open WhatsApp again','WhatsApp erneut öffnen')+'</a></div>'}
const sty=()=>S.pick?(DE()?S.pick.de:S.pick.en):(S.st>=0?stn(S.st):'');
const GN=[['male','Male','Herren'],['female','Female','Damen'],['kids','Kids','Kinder']];
Object.defineProperty(S,'gn',{get:function(){return S.sv===7?'female':(S.sv>=0?'male':'')},set:function(){}});
function gnName(k){var g=GN.find(function(x){return x[0]===k});return g?(DE()?g[2]:g[1]):''}
function genHtml(){return '<div class="bkl">'+t('Who is it for?','Für wen?')+'</div><div class="chips2">'+GN.map(function(g){return '<button type="button" class="chp'+(S.gn===g[0]?' on':'')+'" data-gn="'+g[0]+'" aria-pressed="'+(S.gn===g[0])+'">'+(DE()?g[2]:g[1])+'</button>'}).join('')+'</div>'}
function pickHtml(){if(S.pick){var p=S.pick;return '<div class="pick">'+(p.v?'<div class="pkt" style="background-image:var(--'+p.v+');background-position:'+(p.pos||'center')+'"></div>':'')+'<div class="pkn"><small>'+t('Your choice','Ihre Wahl')+'</small><b>'+E(DE()?p.de:p.en)+'</b></div><button type="button" class="pkx" data-pk="clear">'+t('Change','Ändern')+'</button></div><div class="bkl">'+t('Service','Leistung')+'</div>'}
return '<div class="bkl">'+t('Popular styles','Beliebte Stile')+'</div><div class="strip">'+PICKS.map(function(p,i){return '<button type="button" class="sc" data-pk="'+i+'" style="background-image:var(--'+p.v+');background-position:'+p.pos+'"><span>'+E(DE()?p.de:p.en)+'</span></button>'}).join('')+'</div><div class="bkl">'+t('Or choose a service','Oder Leistung wählen')+'</div>'}
const E=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const hm=m=>String(Math.floor(m/60)).padStart(2,'0')+':'+String(m%60).padStart(2,'0');
function ber(){try{const f=new Intl.DateTimeFormat('en-GB',{timeZone:'Europe/Berlin',year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',hourCycle:'h23'}).formatToParts(new Date()),g=x=>+f.find(y=>y.type===x).value;return{y:g('year'),m:g('month'),d:g('day'),min:g('hour')*60+g('minute')}}catch(e){const n=new Date();return{y:n.getFullYear(),m:n.getMonth()+1,d:n.getDate(),min:n.getHours()*60+n.getMinutes()}}}
function days(){const b=ber(),a=[];for(let i=0;i<61;i++){const x=new Date(Date.UTC(b.y,b.m-1,b.d+i));a.push({iso:x.toISOString().slice(0,10),w:x.getUTCDay(),d:x.getUTCDate(),mi:x.getUTCMonth(),today:i===0})}return a}
function slots(day){const h=HR[day.w];if(!h)return[];const b=ber(),o=[];for(let m=h[0]*60;m<h[1]*60;m+=30)o.push({t:hm(m),off:day.today&&m<b.min+30});return o}
const fmt=iso=>{const x=new Date(iso+'T00:00:00Z'),l=L();return l?DY[1][x.getUTCDay()]+' '+x.getUTCDate()+'. '+MO[1][x.getUTCMonth()]+' '+x.getUTCFullYear():DY[0][x.getUTCDay()]+' '+x.getUTCDate()+' '+MO[0][x.getUTCMonth()]+' '+x.getUTCFullYear()};
const sn=i=>SV[i][L()],stn=i=>ST[i][L()],styleable=()=>S.sv>=0&&!!SV[S.sv][4];
function msg(){var n=waNum(S.phone),ok=n?'https://wa.me/'+n+'?text='+encodeURIComponent(reply('ok')):'',rs=n?'https://wa.me/'+n+'?text='+encodeURIComponent(reply('re')):'',LN='------------------------------',R=REF(),de=DE();
 var top=(de?(S.resch?"Hallo Charles Barber Shop!\nIch möchte meinen Termin ÄNDERN.":"Hallo Charles Barber Shop!\nIch möchte gerne einen Termin buchen."):(S.resch?"Hello Charles Barber Shop!\nI'd like to reschedule my appointment.":"Hello Charles Barber Shop!\nI'd like to book an appointment."))+"\n\n*"+(de?"TERMINANFRAGE":"BOOKING REQUEST")+"  #"+R+"*\n"+LN+"\n";
 var det=de?("Leistung: "+sn(S.sv)+(sty()?"\nStil: "+sty():"")+(S.gn?"\nKategorie: "+gnName(S.gn):"")+"\nDatum: "+fmt(S.date)+"\nUhrzeit: "+S.time+"\nName: "+S.name+"\nTelefon: "+S.phone+(S.note?"\nNotiz: "+S.note:"")):("Service: "+sn(S.sv)+(sty()?"\nStyle: "+sty():"")+(S.gn?"\nGender: "+gnName(S.gn):"")+"\nDate: "+fmt(S.date)+"\nTime: "+S.time+"\nName: "+S.name+"\nPhone: "+S.phone+(S.note?"\nNote: "+S.note:""));
 var btn=n?("\n*"+(de?"Für Charles – zum Antworten tippen":"For Charles – tap to reply")+"*\n\n```[ "+(de?"BESTÄTIGEN":"CONFIRM")+" ]```\n"+ok+"\n\n```[ "+(de?"TERMIN ÄNDERN":"RESCHEDULE")+" ]```\n"+rs):"";
 return top+det+"\n"+LN+btn}
function body(){
 if(S.s===5)return sentHtml();
 if(S.s===1)return pickHtml()+'<div class="bkg">'+SV.map((v,i)=>'<button type="button" class="op'+(S.sv===i?' on':'')+'" data-sv="'+i+'" aria-pressed="'+(S.sv===i)+'"><b>'+E(v[L()])+'</b><span>'+E(v[L()+2])+'</span></button>').join('')+'</div>'+(styleable()&&!S.pick?'<div class="bkl">'+t('Preferred style','Gewünschter Stil')+' <em>('+t('optional','optional')+')</em></div><div class="chips2">'+ST.map((x,i)=>'<button type="button" class="chp'+(S.st===i?' on':'')+'" data-st="'+i+'" aria-pressed="'+(S.st===i)+'">'+E(x[L()])+'</button>').join('')+'</div>':'');
 if(S.s===2){const ds=days();if(!S.date||!ds.some(x=>x.iso===S.date)){const d0=ds.find(x=>x.w!==0&&slots(x).some(z=>!z.off));if(d0){S.date=d0.iso;S.time=''}}const cur=ds.find(x=>x.iso===S.date),sl=cur?slots(cur):[];return '<div class="bkl">'+t('Date','Datum')+'</div><div class="days">'+ds.map(x=>'<button type="button" class="dy'+(S.date===x.iso?' on':'')+'" data-dt="'+x.iso+'"'+(x.w===0?' disabled':'')+' aria-label="'+fmt(x.iso)+(x.w===0?t(', closed',', geschlossen'):'')+'"><small>'+(x.today?t('Today','Heute'):DY[L()][x.w])+'</small><b>'+x.d+'</b><span>'+(x.w===0?t('Closed','Zu'):MO[L()][x.mi])+'</span></button>').join('')+'</div><div class="bkl">'+t('Time','Uhrzeit')+'</div>'+(cur?(sl.every(s=>s.off)?'<p class="bkn">'+t('No more times today. Please pick another day.','Heute sind keine Zeiten mehr frei. Bitte wählen Sie einen anderen Tag.')+'</p>':'<div class="slots">'+sl.map(s=>'<button type="button" class="tm'+(S.time===s.t?' on':'')+'" data-tm="'+s.t+'"'+(s.off?' disabled':'')+'>'+s.t+'</button>').join('')+'</div>'):'<p class="bkn">'+t('Choose a day to see available times. Open Monday to Saturday, 10:00 – 20:00.','Wählen Sie einen Tag, um freie Zeiten zu sehen. Geöffnet Montag bis Samstag, 10:00 – 20:00 Uhr.')+'</p>');}
 if(S.s===3)return '<label class="fi"><span>'+t('Your name','Ihr Name')+'</span><input id="fn" autocomplete="name" value="'+E(S.name)+'"></label><label class="fi"><span>'+t('Phone number','Telefonnummer')+'</span><input id="fp" type="tel" autocomplete="tel" placeholder="+49 ..." value="'+E(S.phone)+'"></label><label class="fi"><span>'+t('Note','Notiz')+' <em style="text-transform:none;letter-spacing:0;font-weight:400;color:var(--mu)">('+t('optional','optional')+')</em></span><textarea id="fo" placeholder="'+t('Anything Charles should know?','Gibt es etwas, das Charles wissen sollte?')+'">'+E(S.note)+'</textarea></label>';
 const r=(a,b)=>'<div><span>'+a+'</span><b>'+b+'</b></div>';
 return '<div class="sum">'+r(t('Service','Leistung'),E(sn(S.sv)))+(sty()?r(t('Style','Stil'),E(sty())):'')+r(t('Date','Datum'),fmt(S.date))+r(t('Time','Uhrzeit'),S.time)+r('Name',E(S.name))+r(t('Phone','Telefon'),E(S.phone))+(S.note?r(t('Note','Notiz'),E(S.note)):'')+'</div><p class="bkn">'+t('Your request is sent to Charles on WhatsApp and your time is confirmed once he replies. Prices are confirmed in the shop.','Ihre Anfrage wird per WhatsApp an Charles gesendet. Ihr Termin ist bestätigt, sobald er antwortet. Die Preise werden im Salon bestätigt.')+'</p>';}
function foot(){
 if(S.s===5)return '<span></span><div class="r"><button type="button" class="btn p" data-go="close">'+t('Done','Fertig')+'</button></div>';
 return (S.s>1?'<button type="button" class="btn o" data-go="back">'+t('Back','Zurück')+'</button>':'<span></span>')+'<div class="r">'+(S.s<4?'<button type="button" class="btn p" data-go="next">'+t('Continue','Weiter')+'</button>':'<a class="btn o" href="tel:'+TEL+'">'+t('Call to book','Anrufen')+'</a><a class="btn p" id="bkwa" target="_blank" rel="noopener" href="'+waLink()+'">'+t('Send on WhatsApp','Per WhatsApp senden')+'</a>')+'</div>'}
function render(){const sm=d.querySelector('.bkh small');if(sm)sm.textContent=t('BOOK APPOINTMENT','TERMIN BUCHEN');$('bkx').setAttribute('aria-label',t('Close booking','Buchung schließen'));$('bkt').textContent=TT[S.s-1][L()];[...$('bkp').children].forEach((i,k)=>i.classList.toggle('on',k<S.s));$('bkb').innerHTML=body();$('bkf').innerHTML=foot();$('bke').textContent='';$('bke').className='bke';$('bkb').scrollTop=0}
function err(x){$('bke').className='bke';$('bke').textContent=x}
function next(){
 if(S.s===1&&S.sv<0)return err(t('Please choose a service.','Bitte wählen Sie eine Leistung.'));
 if(S.s===2&&(!S.date||!S.time))return err(t('Please choose a date and a time.','Bitte wählen Sie Datum und Uhrzeit.'));
 if(S.s===3){S.name=$('fn').value.trim();S.phone=$('fp').value.trim();S.note=$('fo').value.trim();if(S.name.length<2)return err(t('Please enter your name.','Bitte geben Sie Ihren Namen ein.'));if(S.phone.replace(/\D/g,'').length<6)return err(t('Please enter a valid phone number.','Bitte geben Sie eine gültige Telefonnummer ein.'))}
 S.s++;render()}
function openBk(pre,pk){S.ref='';S.resch=false;S.pick=pk||null;if(pk){var i0=SV.findIndex(function(v){return v[0]===pk.svc});if(i0>=0){S.sv=i0;S.st=-1}}if(pre){const k=String(pre).toLowerCase(),i=SV.findIndex(v=>v[0].toLowerCase()===k||v[1].toLowerCase()===k);if(i>=0){S.sv=i;if(!SV[i][4])S.st=-1}}S.s=1;render();document.documentElement.style.overflow='hidden';d.showModal()}
window.__book=function(pk){openBk(null,pk)};
d.addEventListener('close',()=>{document.documentElement.style.overflow=''});
addEventListener('langchange',()=>{if(d.open){if(S.s===3){const a=$('fn'),b=$('fp'),c=$('fo');if(a){S.name=a.value.trim();S.phone=b.value.trim();S.note=c.value.trim()}}render()}});
d.addEventListener('click',e=>{if(e.target===d){d.close();return}const x=e.target.closest('button,a');if(!x||!d.contains(x))return;
 if(x.id==='bkx')d.close();
 else if(x.dataset.sv!==undefined){S.sv=+x.dataset.sv;if(!SV[S.sv][4])S.st=-1;render()}
 else if(x.dataset.gn!==undefined){S.gn=x.dataset.gn;render()}
 else if(x.dataset.st!==undefined){S.st=S.st===+x.dataset.st?-1:+x.dataset.st;render()}
 else if(x.dataset.dt){if(S.date!==x.dataset.dt){S.date=x.dataset.dt;S.time=''}render()}
 else if(x.dataset.tm){S.time=x.dataset.tm;render()}
 else if(x.dataset.pk!==undefined){if(x.dataset.pk==='clear'){S.pick=null}else{var pp=PICKS[+x.dataset.pk];S.pick=pp;var i1=SV.findIndex(function(v){return v[0]===pp.svc});if(i1>=0){S.sv=i1;S.st=-1}}render()}
 else if(x.dataset.go==='next')next();
 else if(x.dataset.go==='back'){if(S.s===3){S.name=$('fn').value.trim();S.phone=$('fp').value.trim();S.note=$('fo').value.trim()}S.s--;render()}
 else if(x.id==='bkwa'){setTimeout(function(){S.s=5;render()},450)}
 else if(x.dataset.go==='resch'){S.resch=(S.s===5);S.date='';S.time='';S.s=2;render()}
 else if(x.dataset.go==='close'){d.close()}});
document.addEventListener('click',e=>{const a=e.target.closest&&e.target.closest('a[href="#book"]');if(!a||d.contains(a))return;e.preventDefault();e.stopPropagation();e.stopImmediatePropagation();openBk(a.classList.contains('card')?a.getAttribute('aria-label'):null)},true);
})();
