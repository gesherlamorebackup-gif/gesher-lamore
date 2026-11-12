/* \u0022גשר למורה\u0022 – one site: one sticky header + one menu (all subjects) + one home. Data = single source for the menu and for https://gesher-lamore.sites.tab.bot/ */
(function(){
if(window.__gsu)return;window.__gsu=1;
var D={"S":[{"id":"tanach","ic":"📖","l":"תנ\"ך – חמ\"ד","u":"https://tanach-mishna-hemed.sites.tab.bot/tanach/","st":"yct","g":"kodesh","m":[["tanach-mishna-hemed","/tanach/"]],"sub":[["כיתה ה' – מאגר שאלות במדבר","https://maagar-bamidbar-5.sites.tab.bot/"],["כיתה ו' – מיצ\"ב","https://meitzav-hemed.sites.tab.bot/"],["תיכון – משחקי בגרות (תנ\"ך, משנה, תלמוד)","https://tmh-bagrut-games.sites.tab.bot/"],["קומיקס – תורה, נביאים, כתובים","https://tmh-komiks.sites.tab.bot/"],["פרשת שבוע – קומיקס","https://tmh-parasha.sites.tab.bot/"]]},{"id":"tanach-mam","ic":"📗","l":"תנ\"ך – ממלכתי","u":"https://tanach-mishna-hemed.sites.tab.bot/tanach-mamlachti/","st":"yct","g":"kodesh","m":[["tanach-mishna-hemed","/tanach-mamlachti/"]],"sub":[["קומיקס – תורה, נביאים, כתובים","https://tmh-komiks.sites.tab.bot/"],["כיתה ו' – מיצ\"ב","https://meitzav-mamlachti.sites.tab.bot/"]]},{"id":"tmh-hub","ic":"🏛️","l":"מרכז לימוד תנ\"ך – ממלכתי","u":"https://tmh-hub.sites.tab.bot/","st":"yct","g":"kodesh","m":[["tmh-hub","/"]],"sub":[]},{"id":"mishna","ic":"📜","l":"משנה","u":"https://tanach-mishna-hemed.sites.tab.bot/mishna/","st":"yct","g":"kodesh","m":[["tanach-mishna-hemed","/mishna/"]],"sub":[["כיתה ה' – ראש השנה","https://mishna-rosh-hashana-5.sites.tab.bot/"]]},{"id":"halacha","ic":"✡️","l":"הלכה","u":"https://tanach-mishna-hemed.sites.tab.bot/halacha/","st":"yc","g":"kodesh","m":[["tanach-mishna-hemed","/halacha/"]],"sub":[["כיתה ה' – מאגר שאלות","https://maagar-halacha-5.sites.tab.bot/"]]},{"id":"talmud","ic":"🕍","l":"תלמוד – חמ\"ד","u":"https://tanach-mishna-hemed.sites.tab.bot/talmud/","st":"ct","g":"kodesh","m":[["tanach-mishna-hemed","/talmud/"]],"sub":[]},{"id":"machshava","ic":"💡","l":"מחשבת ישראל","u":"https://tanach-mishna-hemed.sites.tab.bot/machshava/","st":"t","g":"kodesh","m":[["tanach-mishna-hemed","/machshava/"]],"sub":[]},{"id":"komiks","ic":"💬","l":"קומיקס – תורה, נביאים, כתובים","u":"https://tmh-komiks.sites.tab.bot/","st":"yct","g":"kodesh","m":[["tmh-komiks","/"]],"sub":[]},{"id":"tarbut","ic":"🕯️","l":"תרבות יהודית-ישראלית/מורשת – ממלכתי","u":"https://miktsoot-hub.sites.tab.bot/tarbut-yehudit/","st":"yc","g":"kodesh","m":[["miktsoot-hub","/tarbut-yehudit/"],["miktsoot-hub","/hagim/"]],"sub":[],"su":{"y":"https://miktsoot-hub.sites.tab.bot/tarbut-yehudit/#g3","c":"https://miktsoot-hub.sites.tab.bot/tarbut-yehudit/#g7"}},{"id":"lashon","ic":"🔤","l":"לשון ועברית","u":"https://miktsoot-hub.sites.tab.bot/lashon/","st":"yct","g":"lang","m":[["miktsoot-hub","/lashon/"]],"sub":[]},{"id":"sifrut-mam","ic":"📚","l":"ספרות – ממלכתי","u":"https://miktsoot-hub.sites.tab.bot/sifrut-mamlachti/","st":"ct","g":"lang","m":[["miktsoot-hub","/sifrut-mamlachti/"]],"sub":[]},{"id":"sifrut-hemed","ic":"📚","l":"ספרות – חמ\"ד","u":"https://miktsoot-hub.sites.tab.bot/sifrut-hemed/","st":"ct","g":"lang","m":[["miktsoot-hub","/sifrut-hemed/"]],"sub":[]},{"id":"sifrut-haredi","ic":"📚","l":"ספרות – חרדי","u":"https://miktsoot-hub.sites.tab.bot/sifrut-haredi/","st":"ct","g":"lang","m":[["miktsoot-hub","/sifrut-haredi/"]],"sub":[]},{"id":"english","ic":"🇬🇧","l":"אנגלית – English","u":"https://miktsoot-hub.sites.tab.bot/english/","st":"yct","g":"lang","m":[["miktsoot-hub","/english/"]],"sub":[]},{"id":"arabic-he","ic":"✍️","l":"ערבית לדוברי עברית","u":"https://madaim.sites.tab.bot/arabic/","st":"c","g":"lang","m":[["madaim","/arabic/"],["miktsoot-hub","/arabic-he/"]],"sub":[["כיתות ז'–ח' + סרטוני אותיות","https://madaim.sites.tab.bot/arabic/"],["כיתה ט' – ספר לימוד","https://miktsoot-hub.sites.tab.bot/arabic-he/"]]},{"id":"arabic","ic":"🌙","l":"العربيّة – ערבית כשפת אם","u":"https://miktsoot-hub.sites.tab.bot/arabic/","st":"y","g":"lang","m":[["miktsoot-hub","/arabic/"]],"sub":[]},{"id":"math","ic":"✖️","l":"מתמטיקה","u":"https://miktsoot-hub.sites.tab.bot/math/","st":"yct","g":"sci","m":[["miktsoot-hub","/math/"]],"sub":[]},{"id":"madaim","ic":"🔬","l":"מדע וטכנולוגיה","u":"https://madaim.sites.tab.bot/","st":"yc","g":"sci","m":[["madaim","/"]],"sub":[["יסודי","https://madaim.sites.tab.bot/yesodi/"],["חטיבת ביניים","https://madaim.sites.tab.bot/chativa/"],["מפת כל החומרים","https://madaim.sites.tab.bot/sitemap/"]]},{"id":"madatech","ic":"🧪","l":"מדע וטכנולוגיה לכול (מוט\"ל)","u":"https://miktsoot-hub.sites.tab.bot/mada-tech/","st":"t","g":"sci","m":[["miktsoot-hub","/mada-tech/"]],"sub":[]},{"id":"fizika","ic":"⚛️","l":"פיזיקה","u":"https://miktsoot-hub.sites.tab.bot/fizika/","st":"t","g":"sci","m":[["miktsoot-hub","/fizika/"]],"sub":[]},{"id":"chimia","ic":"⚗️","l":"כימיה","u":"https://miktsoot-hub.sites.tab.bot/chimia/","st":"t","g":"sci","m":[["miktsoot-hub","/chimia/"]],"sub":[]},{"id":"biologia","ic":"🧬","l":"ביולוגיה","u":"https://miktsoot-hub.sites.tab.bot/biologia/","st":"t","g":"sci","m":[["miktsoot-hub","/biologia/"]],"sub":[]},{"id":"electronika","ic":"🔌","l":"אלקטרוניקה","u":"https://miktsoot-hub.sites.tab.bot/electronika/","st":"t","g":"sci","m":[["miktsoot-hub","/electronika/"]],"sub":[]},{"id":"riyadiyat","ic":"➗","l":"الرياضيّات – מתמטיקה בערבית","u":"https://riyadiyat.sites.tab.bot/","st":"yc","g":"sci","m":[["riyadiyat","/"]],"sub":[]},{"id":"ulum","ic":"🔭","l":"العلوم – מדעים בערבית","u":"https://ulum.sites.tab.bot/","st":"y","g":"sci","m":[["ulum","/"]],"sub":[]},{"id":"historia","ic":"🏛️","l":"היסטוריה – ממלכתי","u":"https://tanach-mishna-hemed.sites.tab.bot/historia/","st":"t","g":"soc","m":[["tanach-mishna-hemed","/historia/"]],"sub":[]},{"id":"historia-hemed","ic":"🏛️","l":"היסטוריה – חמ\"ד","u":"https://tanach-mishna-hemed.sites.tab.bot/historia-hemed/","st":"ct","g":"soc","m":[["tanach-mishna-hemed","/historia-hemed/"]],"sub":[]},{"id":"historia-haredi","ic":"🏛️","l":"היסטוריה – חרדי","u":"https://tanach-mishna-hemed.sites.tab.bot/historia-haredi/","st":"yct","g":"soc","m":[["tanach-mishna-hemed","/historia-haredi/"]],"sub":[]},{"id":"ezrahut","ic":"⚖️","l":"אזרחות","u":"https://tanach-mishna-hemed.sites.tab.bot/ezrahut/","st":"ct","g":"soc","m":[["tanach-mishna-hemed","/ezrahut/"]],"sub":[]},{"id":"moledet","ic":"🏡","l":"מולדת, חברה ואזרחות","u":"https://miktsoot-hub.sites.tab.bot/moledet/","st":"y","g":"soc","m":[["miktsoot-hub","/moledet/"]],"sub":[]},{"id":"geo","ic":"🌍","l":"גאוגרפיה","u":"https://miktsoot-hub.sites.tab.bot/geo/","st":"yct","g":"soc","m":[["miktsoot-hub","/geo/"]],"sub":[]},{"id":"jughrafia","ic":"🗺️","l":"الجغرافيا – גאוגרפיה בערבית","u":"https://jughrafia.sites.tab.bot/","st":"yc","g":"soc","m":[["jughrafia","/"]],"sub":[]},{"id":"nihul","ic":"📊","l":"מדעי הניהול","u":"https://miktsoot-hub.sites.tab.bot/nihul/","st":"t","g":"soc","m":[["miktsoot-hub","/nihul/"]],"sub":[]},{"id":"socio","ic":"👥","l":"סוציולוגיה","u":"https://miktsoot-hub.sites.tab.bot/sociologia/","st":"t","g":"soc","m":[["miktsoot-hub","/sociologia/"]],"sub":[]},{"id":"psych","ic":"🧠","l":"פסיכולוגיה","u":"https://miktsoot-hub.sites.tab.bot/psychologia/","st":"t","g":"soc","m":[["miktsoot-hub","/psychologia/"]],"sub":[]},{"id":"kishurim","ic":"🤝","l":"כישורי חיים","u":"https://miktsoot-hub.sites.tab.bot/kishurim/","st":"y","g":"life","m":[["miktsoot-hub","/kishurim/"]],"sub":[]},{"id":"finance","ic":"💰","l":"חינוך פיננסי","u":"https://fin-ed-9-hub.sites.tab.bot/","st":"yct","g":"life","m":[["fin-ed-9-hub","/"]],"sub":[["מפת כל החומרים","https://fin-ed-9-hub.sites.tab.bot/sitemap/"]]},{"id":"taavura","ic":"🚦","l":"חינוך תעבורתי","u":"https://hinuch-taavurati-10.sites.tab.bot/","st":"t","g":"life","m":[["hinuch-taavurati-10","/"]],"sub":[]},{"id":"hora-metakenet","ic":"🧩","l":"הוראה מתקנת","u":"https://miktsoot-hub.sites.tab.bot/hora-metakenet/","st":"yc","g":"life","m":[["miktsoot-hub","/hora-metakenet/"]],"sub":[]},{"id":"gan","ic":"🧸","l":"גן ילדים","u":"https://miktsoot-hub.sites.tab.bot/gan/","st":"y","g":"life","m":[["miktsoot-hub","/gan/"]],"sub":[]},{"id":"astrat","ic":"🎯","l":"אסטרטגיות למידה","u":"https://miktsoot-hub.sites.tab.bot/astrategiot-lemida/","st":"c","g":"life","m":[["miktsoot-hub","/astrategiot-lemida/"]],"sub":[]},{"id":"mishpatim","ic":"⚖️","l":"משפטים","u":"https://miktsoot-hub.sites.tab.bot/mishpatim/","st":"t","g":"soc","m":[["miktsoot-hub","/mishpatim/"]],"sub":[]},{"id":"geo-haredi","ic":"🌍","l":"גיאוגרפיה – חרדי","u":"https://miktsoot-hub.sites.tab.bot/geo/hr7/","st":"c","g":"soc","m":[["miktsoot-hub","/geo/hr"]],"sub":[]},{"id":"sifrut-druzit","ic":"📖","l":"الأدب الدرزي","la":"ar","u":"https://miktsoot-hub.sites.tab.bot/sifrut-druzit/","st":"ct","g":"lang","m":[["miktsoot-hub","/sifrut-druzit/"]],"sub":[]},{"id":"tikshoret","ic":"📡","l":"תקשורת – תיכון","u":"https://miktsoot-hub.sites.tab.bot/tikshoret/","st":"t","g":"soc","m":[["miktsoot-hub","/tikshoret"]],"sub":[]},{"id":"shelach","ic":"🧭","l":"של\"ח וידיעת הארץ","u":"https://miktsoot-hub.sites.tab.bot/shelach/","st":"c","g":"soc","m":[["miktsoot-hub","/shelach"]],"sub":[]},{"id":"cs","ic":"💻","l":"מדעי המחשב","u":"https://miktsoot-hub.sites.tab.bot/mada-hamachshev/","st":"t","g":"sci","m":[["miktsoot-hub","/mada-hamachshev/"]],"sub":[]}],"X":[{"ic":"🆕","l":"חדש באתר","u":"https://tanach-mishna-hemed.sites.tab.bot/chadash/"},{"ic":"🔎","l":"חיפוש בכל האתר","u":"https://gesher-lamore.sites.tab.bot/"},{"ic":"🎮","l":"משחקים לכל המקצועות","u":"https://miktsoot-games-index.sites.tab.bot/"},{"ic":"✉️","l":"בקשת חומר חדש","u":"https://bakasha-chomer.sites.tab.bot/"}],"G":[["kodesh","📖 תורה ויהדות"],["lang","🔤 שפות וספרות"],["sci","🔬 מתמטיקה ומדעים"],["soc","🌍 היסטוריה, חברה וגאוגרפיה"],["life","🤝 כישורי חיים, פיננסי ותעבורה"]],"home":"https://gesher-lamore.sites.tab.bot/"};
window.GESHER=D;
var HOME=D.home||'https://gesher-lamore.sites.tab.bot/';
var HN=location.hostname.replace(/\.sites\.tab\.bot$/,''),P=location.pathname||'/';
var IS_HOME=(HN==='gesher-lamore'||HN==='gesher-lamore-v2');var AT_HOME=IS_HOME||(location.origin+P)===HOME;/*gesher-desktop*/try{var GSD={'tanach-mishna-hemed':1,'miktsoot-hub':1,'madaim':1,'fin-ed-9-hub':1,'riyadiyat':1,'hinuch-taavurati-10':2};if(!IS_HOME&&GSD[HN]&&!document.getElementById('gs-dcss')){var de=document.documentElement;de.classList.add('gsd');if(GSD[HN]===2)de.classList.add('gsd-side');var dl=document.createElement('link');dl.id='gs-dcss';dl.rel='stylesheet';dl.href='https://gesher-lamore.sites.tab.bot/d.css?v=f668c171';document.head.appendChild(dl);}}catch(e){}
var STG={g:'גן',y:'יסודי',c:'חטיבת ביניים',t:'תיכון'};var SMART='https://miktsoot-search.sites.tab.bot/';
var GR=['','א׳','ב׳','ג׳','ד׳','ה׳','ו׳','ז׳','ח׳','ט׳','י׳','י״א','י״ב'];
function esc(s){return String(s).replace(/[&<>"]/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c];});}
function lb(s){return s.la?'<span lang="'+s.la+'" dir="rtl" style="font-family:&quot;Noto Sans Arabic&quot;,&quot;Noto Kufi Arabic&quot;,Rubik,system-ui,sans-serif!important">'+esc(s.l)+'</span>':esc(s.l);}
(function(){if(D.S.some(function(s){return s.la;})&&!document.getElementById('gs-arf')){var l=document.createElement('link');l.id='gs-arf';l.rel='stylesheet';l.href='https://fonts.googleapis.com/css2?family=Noto+Sans+Arabic:wght@400;600;700;800&display=swap';(document.head||document.documentElement).appendChild(l);}})();
/* current subject: longest matching (host, path prefix) */
var CUR=null,best=-1;
D.S.forEach(function(s){s.m.forEach(function(m){if(m[0]===HN&&P.indexOf(m[1])===0&&m[1].length>best){best=m[1].length;CUR=s;}});});
var SECT={'tanach-mishna-hemed':'קודש, היסטוריה ואזרחות','miktsoot-hub':'שפות, מתמטיקה ומדעי החברה','madaim':'מדעים','fin-ed-9-hub':'חינוך פיננסי'};
/* ---------- css ---------- */
var css=''+
'.tnv-bar,.tnv-burger,.mnav-btn,.fxn-b{display:none!important}'+/*navfix-u*/'#tnv-panel,.tnv-panel,.tnv-ov,.mnav-pn,.mnav-ov,.fxn-p,.fxn-ov,.fxn-o,nav.rnav{display:none!important}'+'body.tnv-on,body.mnav-on,body.fxn-on{padding-right:0!important}'+
'#gs-brand{position:sticky!important;top:0!important;z-index:2147482000!important;max-height:none!important;overflow:visible!important;padding:6px 58px!important;min-height:48px}'+
'#gs-brand a.gs-bh{display:flex;align-items:center;gap:10px;color:#1F3C70!important;text-decoration:none!important}'+
'#gs-mb{position:absolute;right:8px;top:50%;transform:translateY(-50%);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:1px;width:46px;height:42px;border:0;border-radius:10px;background:#1F3C70;color:#fff;font:700 20px/1 system-ui,sans-serif;cursor:pointer;padding:0;margin:0}'+
'#gs-mb small{font-size:10px;font-weight:700;line-height:1}'+
'#gs-hm{position:absolute;left:8px;top:50%;transform:translateY(-50%);width:42px;height:42px;border-radius:10px;background:#FFF3D6;display:flex;align-items:center;justify-content:center;font-size:21px;text-decoration:none!important}'+
'#gs-ov{position:fixed;inset:0;background:rgba(10,20,40,.45);z-index:2147483000;display:none}'+
'#gs-dr{position:fixed;top:0;right:0;bottom:0;width:min(92vw,400px);background:#fff;z-index:2147483001;transform:translateX(105%);transition:transform .2s ease;display:flex;flex-direction:column;direction:rtl;font-family:"Noto Sans Hebrew",system-ui,sans-serif;color:#1d2433;box-shadow:-6px 0 24px rgba(0,0,0,.2);text-align:right}'+
'html.gs-open #gs-dr{transform:none}html.gs-open #gs-ov{display:block}html.gs-open,html.gs-open body{overflow:hidden!important}'+
'#gs-dr .gd-h{display:flex;align-items:center;gap:10px;padding:10px 12px;border-bottom:3px solid #F6B21B;font-weight:800;font-size:19px;color:#1F3C70}'+
'#gs-dr .gd-h svg{width:52px!important;height:32px!important;max-width:52px!important}#gs-dr .gd-h span{flex:1}'+
'#gs-dr .gd-x{border:0;background:#eef1f6;border-radius:10px;width:40px;height:40px;font-size:18px;cursor:pointer;color:#1F3C70}'+
'#gs-dr .gd-s{overflow-y:auto;-webkit-overflow-scrolling:touch;padding:8px 12px 30px;flex:1}'+
'#gs-dr a{color:#1F3C70;text-decoration:none}'+
'#gs-dr .gd-top{display:flex;flex-wrap:wrap;gap:6px;margin:4px 0 8px}'+
'#gs-dr .gd-top a{flex:1 1 auto;background:#1F3C70;color:#fff!important;border-radius:10px;padding:9px 10px;font-weight:700;font-size:15px;text-align:center}'+
'#gs-dr .gd-top a.gd-st{background:#FFF3D6;color:#1F3C70!important}'+
'#gs-dr .gd-g{margin:10px 0 2px;font-weight:800;font-size:15px;color:#7a5200;border-bottom:1px solid #f0e2c0;padding-bottom:3px}'+
'#gs-dr .gd-l{display:grid;grid-template-columns:1fr 1fr;gap:5px}'+
'#gs-dr .gd-l a{display:block;background:#f4f6fa;border-radius:9px;padding:8px 8px;font-size:14px;line-height:1.25;font-weight:600}'+
'#gs-dr .gd-l a.gd-cur{background:#1F3C70;color:#fff}'+
'#gs-dr .gd-in{grid-column:1/-1;background:#fffaf0;border:1px solid #f3dfb2;border-radius:10px;padding:6px 8px;margin:2px 0 4px}'+
'#gs-dr .gd-in>b{display:block;font-size:14px;margin:2px 0 4px;color:#7a5200}'+
'#gs-dr .gd-in a{display:block;padding:5px 4px;font-size:14px;background:none;border-radius:6px}'+
'#gs-dr .gd-in ul{list-style:none;margin:0;padding:0 10px 0 0}#gs-dr .gd-in li{margin:0}'+
'#gs-dr .gd-in details>summary{cursor:pointer;padding:5px 2px;font-weight:600;font-size:14px;color:#1F3C70}'+
'#gs-dr .gd-in .tnv-ic,#gs-dr .gd-in span{display:inline}'+
'#gs-dr .gd-in summary{display:list-item;padding:3px 2px;cursor:pointer}#gs-dr .gd-in summary>a{display:inline;padding:3px 2px}#gs-dr .gd-in ul ul{border-right:2px solid #f3dfb2;margin-right:4px}#gs-dr .gd-in .tnv-cur,#gs-dr .gd-in .tnv-here{font-weight:800}'+

'#gs-dr .gd-x2 a{display:block;padding:7px 4px;font-size:14px;border-bottom:1px solid #eef1f6}'+
'#gs-strip{box-sizing:border-box;max-width:880px;margin:10px auto;padding:12px 14px;border-radius:14px;background:linear-gradient(90deg,#1F3C70,#2d5aa8);color:#fff;direction:rtl;font-family:inherit;display:flex;flex-wrap:wrap;align-items:center;gap:8px}'+
'#gs-strip b{flex:1 1 100%;font-size:17px}#gs-strip a{color:#1F3C70!important;background:#FFF3D6;border-radius:10px;padding:8px 12px;font-weight:700;text-decoration:none!important;font-size:15px}'+
'@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+Hebrew:wght@400;600;700;800&display=swap");'+
'body,body :where(h1,h2,h3,h4,h5,h6,p,li,a,button,input,select,textarea,summary,td,th,label,small,b,strong,.th-k,.th-h):not(.katex):not(.katex *):not(mjx-container *){font-family:"Noto Sans Hebrew","Noto Sans Arabic","Heebo","Rubik",system-ui,sans-serif!important}'+
'#gs-brand{flex-wrap:wrap;row-gap:0}#gs-brand .gs-cr{flex:1 1 100%;text-align:center;font-size:12px;font-weight:600;color:#5b6475;line-height:1.3;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;margin-top:1px}'+
'#gs-brand .gs-cr a{color:#1F3C70!important;text-decoration:none!important}'+
'#gs-sr{position:absolute;left:8px;top:50%;transform:translateY(-50%);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:1px;width:60px;height:42px;border-radius:10px;border:0;background:#F6B21B;color:#1F3C70!important;font:700 18px/1 system-ui,sans-serif;cursor:pointer;padding:0;text-decoration:none!important}#gs-sr small{font-size:10px;font-weight:800;line-height:1;white-space:nowrap}'+'#gs-brand #gs-hm{left:74px}#gs-brand{padding-left:120px!important;padding-right:60px!important}#gs-dr .gd-top a.gd-sm{background:#F6B21B;color:#1F3C70!important}'+
'#gs-tt{position:fixed;left:12px;bottom:16px;z-index:2147481000;width:46px;height:46px;border-radius:50%;border:0;background:#1F3C70;color:#fff;font-size:22px;box-shadow:0 3px 10px rgba(0,0,0,.25);cursor:pointer;opacity:0;pointer-events:none;transition:opacity .2s}'+
'#gs-tt.on{opacity:.92;pointer-events:auto}'+
'#gs-strip details{flex:1 1 100%;background:rgba(255,255,255,.1);border-radius:10px;padding:4px 8px}#gs-strip summary{cursor:pointer;font-weight:800;padding:6px 2px}'+
'#gs-strip .gc{display:flex;flex-wrap:wrap;gap:6px;padding:4px 0 8px}#gs-strip .gc a{font-size:14px;padding:7px 10px}'+
'@media print{#gs-mb,#gs-hm,#gs-sr,#gs-tt,#gs-dr,#gs-ov,#gs-strip{display:none!important}}';
function addCss(){if(document.getElementById('gsu-css'))return;var s=document.createElement('style');s.id='gsu-css';s.textContent=css;(document.head||document.documentElement).appendChild(s);}
addCss();
/* ---------- title ---------- */
function title(){
  if(IS_HOME)return;
  var t='גשר למורה';
  if(/\/sitemap\/?$/.test(P)&&SECT[HN])t+=' – מפה מפורטת: '+SECT[HN];
  else if(CUR){t+=' – '+CUR.l;var g=/\/g(\d{1,2})\/?/.exec(P);if(g&&GR[+g[1]])t+=' – כיתה '+GR[+g[1]];}
  else if(SECT[HN])t+=' – '+SECT[HN];
  if(document.title!==t)document.title=t;
}
/* ---------- wording: one site ---------- */
var REP=[[/כל המקצועות באתרים שלנו/g,'כל המקצועות בגשר למורה'],[/אתרים נוספים/g,'מקצועות נוספים בגשר למורה'],[/דף הבית של האתר/g,'דף הבית – גשר למורה'],
 [/אתר המקצועות/g,'גשר למורה'],[/אתר מדעים/g,'גשר למורה – מדעים'],[/באתר הזה/g,'במקצוע הזה']];
var NAMEMAP={'תנ"ך, משנה והלכה – חמ"ד':'גשר למורה · תנ"ך, משנה, הלכה והיסטוריה','מקצועות – חומרי לימוד':'גשר למורה · כל המקצועות','מדעים – חומרי לימוד':'גשר למורה · מדעים','מדעים':null};
var OLDROOTS=['https://tanach-mishna-hemed.sites.tab.bot/','https://miktsoot-hub.sites.tab.bot/'];
function words(root){
  try{
  var w=document.createTreeWalker(root||document.body,NodeFilter.SHOW_TEXT,null),n,ch=[];
  while((n=w.nextNode())){var v=n.nodeValue;if(!v||v.length<4)continue;var p=n.parentNode;if(!p||p.closest&&p.closest('#gs-dr,#gs-brand,script,style,textarea,input'))continue;
    var nv=v;for(var i=0;i<REP.length;i++)nv=nv.replace(REP[i][0],REP[i][1]);
    var tt=nv.trim();if(NAMEMAP[tt]&&p.closest&&p.closest('header,.th-hero,.hero,.th-k'))nv=nv.replace(tt,NAMEMAP[tt]);
    if(nv!==v)ch.push([n,nv]);}
  ch.forEach(function(c){c[0].nodeValue=c[1];});
  /* \u0022דף הבית\u0022 links and links to the old catalogue roots → the one home */
  var as=(root||document.body).querySelectorAll('a[href]');
  for(var k=0;k<as.length;k++){var a=as[k];if(a.closest('#gs-dr'))continue;var tx=(a.textContent||'').trim(),h=a.href.split('#')[0];
    if(/דף הבית|לדף הבית|الصفحة الرئيسيّة|الصفحة الرئيسية/.test(tx)&&/\.sites\.tab\.bot\/$/.test(h)){a.href=HOME;continue;}
    if(OLDROOTS.indexOf(h)>=0&&a.closest('nav,.crumbs,.bc,.breadcrumb,header,footer')&&!a.closest('#tnv-panel,.mnav-pn,.fxn-p')){a.href=HOME;var t2=tx.replace(/\s*›\s*$/,'');if(NAMEMAP[t2]!==undefined||/^מקצועות$|^כל המקצועות$|^המקצועות$/.test(t2)){for(var q=0;q<a.childNodes.length;q++){var cn=a.childNodes[q];if(cn.nodeType===3&&cn.nodeValue.trim()){cn.nodeValue=cn.nodeValue.replace(t2,'גשר למורה');break;}}}}
    if(/\/sitemap\/?$/.test(a.pathname||'')&&SECT[(a.hostname||'').replace(/\.sites\.tab\.bot$/,'')]&&/מפת האתר/.test(tx)){for(var q2=0;q2<a.childNodes.length;q2++){var c2=a.childNodes[q2];if(c2.nodeType===3&&/מפת האתר/.test(c2.nodeValue)){c2.nodeValue=c2.nodeValue.replace(/מפת האתר( – הכול בעמוד אחד)?/,'מפה מפורטת – '+SECT[a.hostname.replace(/\.sites\.tab\.bot$/,'')]);}}}
  }
  }catch(e){}
}
/* ---------- the menu ---------- */
var LOGO='<svg xmlns="http://www.w3.org/2000/svg" viewBox="12 60 210 128" width="52" height="32" aria-hidden="true" focusable="false"><path d="M40,110 H210 V182 H180 A55,55 0 0 0 70,182 H40 Z" fill="#1F3C70"/><path d="M58,66 H186 V102 H58 Z" fill="#F6B21B"/><path d="M58,66 L18,84 L58,102 Z" fill="#F6DDB0"/><path d="M33,77 L18,84 L33,91 Z" fill="#1F3C70"/><rect x="186" y="66" width="10" height="36" fill="#1F3C70"/><path d="M196,66 H206 A10,10 0 0 1 216,76 V92 A10,10 0 0 1 206,102 H196 Z" fill="#E86A4A"/><line x1="66" y1="84" x2="178" y2="84" stroke="#E39A0C" stroke-width="4" stroke-linecap="round"/></svg>';
var dr=null,ov=null;
function inner(){ /* the current subject's own tree (kept from the old per-section menu, nothing dropped) */
  var box=document.createElement('div');box.className='gd-in';
  var src=document.querySelector('#tnv-panel ul.tnv-l0'),cnt=0;
  if(src){var c=src.cloneNode(true);
    if(CUR){var li=null,lis=c.querySelectorAll(':scope>li');for(var i=0;i<lis.length;i++){var a=lis[i].querySelector('a[href]');if(a){try{var u=new URL(a.getAttribute('href'),location.href);if(u.hostname===location.hostname&&CUR.m.some(function(m){return m[0]===HN&&u.pathname===m[1];})){li=lis[i];break;}}catch(e){}}}
      if(li){var ul=document.createElement('ul');var cl=li.cloneNode(true);var d=cl.querySelector('details');if(d)d.open=true;ul.appendChild(cl);c=ul;}}
    box.appendChild(c);cnt=c.querySelectorAll('a[href]').length;}
  var fx=document.querySelectorAll('.fxn-p .fxn-s > a.fxn-a');
  if(!src&&fx.length){for(var j=0;j<fx.length;j++){var h=fx[j].href;if(new URL(h).hostname!==location.hostname)continue;var e=fx[j].cloneNode(true);e.className='';box.appendChild(e);cnt++;}}
  var rn=document.querySelectorAll('nav.rnav a[href]');
  if(!src&&!fx.length&&rn.length){for(var r=0;r<rn.length;r++){var e2=rn[r].cloneNode(true);e2.className='';box.appendChild(e2);cnt++;}}
  box.querySelectorAll('[id]').forEach(function(x){x.removeAttribute('id');});
  box.querySelectorAll('a[href]').forEach(function(a){if(/דף הבית/.test(a.textContent)&&/\.sites\.tab\.bot\/$/.test(a.href))a.href=HOME;});
  if(!cnt)return null;
  var b=document.createElement('b');b.textContent='📑 בתוך '+(CUR?CUR.l:'המקצוע')+' – כיתות ופרקים';box.insertBefore(b,box.firstChild);
  return box;
}
function build(){
  if(dr)return;
  ov=document.createElement('div');ov.id='gs-ov';ov.onclick=close;
  dr=document.createElement('nav');dr.id='gs-dr';dr.setAttribute('aria-label','תפריט גשר למורה');dr.setAttribute('lang','he');
  var h='<div class="gd-h">'+LOGO+'<span>גשר למורה</span><button class="gd-x" type="button" aria-label="סגירה">✕</button></div><div class="gd-s">';
  h+='<div class="gd-top"><a href="'+HOME+'">🏠 דף הבית – כל המקצועות</a><a class="gd-sm" href="'+SMART+'">🔍 חיפוש חכם</a></div>';
  if(/gesher-lamore/.test(HOME)){h+='<div class="gd-top">';['g','y','c','t'].forEach(function(k){h+='<a class="gd-st" href="'+HOME+'#'+k+'">'+STG[k]+'</a>';});h+='</div>';}
  D.G.forEach(function(g){h+='<div class="gd-g">'+esc(g[1])+'</div><div class="gd-l">';
    D.S.forEach(function(s){if(s.g!==g[0])return;var cur=(CUR&&CUR.id===s.id);
      h+='<a href="'+s.u+'"'+(cur?' class="gd-cur" aria-current="page"':'')+'>'+s.ic+' '+lb(s)+'</a>';
    });
    h+='</div>';});
  h+='<div class="gd-g">➕ כללי</div><div class="gd-x2">';
  D.X.forEach(function(x){h+='<a href="'+x.u+'">'+x.ic+' '+esc(x.l)+'</a>';});
  h+='</div></div>';
  dr.innerHTML=h;
  /* each subject with sub-pages shows them; the current subject also shows its own tree (kept from the old section menu) */
  [].slice.call(dr.querySelectorAll('.gd-slot')).forEach(function(slot){slot.parentNode.removeChild(slot);});
  D.S.forEach(function(s){var cur=(CUR&&CUR.id===s.id);if(!cur&&!s.sub.length)return;
    var a=[].slice.call(dr.querySelectorAll('.gd-l>a')).filter(function(x){return x.getAttribute('href')===s.u;})[0];if(!a)return;
    var box=cur?inner():null;if(!box&&s.sub.length){box=document.createElement('div');box.className='gd-in';}
    if(!box)return;
    for(var i=s.sub.length-1;i>=0;i--){var e=document.createElement('a');e.href=s.sub[i][1];e.textContent='▸ '+s.sub[i][0];var b0=box.querySelector('b');box.insertBefore(e,b0?b0.nextSibling:box.firstChild);}
    a.parentNode.insertBefore(box,a.nextSibling);});
  dr.querySelector('.gd-x').onclick=close;
  document.body.appendChild(ov);document.body.appendChild(dr);
  document.addEventListener('keydown',function(e){if(e.key==='Escape')close();});
}
function open(){build();document.documentElement.classList.add('gs-open');var c=dr.querySelector('.gd-cur');if(c)try{c.scrollIntoView({block:'center'});}catch(e){}}
function close(){document.documentElement.classList.remove('gs-open');}
window.gesherMenu={open:open,close:close};
/* a tap on any old ☰ / side-menu trigger opens the new menu */
document.addEventListener('click',function(e){var t=e.target&&e.target.closest&&e.target.closest('.tnv-burger,.tnv-bmap,.mnav-btn,.fxn-b,[data-open-nav],a[href="#tnv-panel"]');if(!t||t.closest('#gs-dr,#gs-brand'))return;e.preventDefault();e.stopPropagation();try{document.documentElement.classList.remove('tnv-open','mnav-open');document.body.classList.remove('tnv-open','mnav-open');}catch(x){}open();},true);
/* ---------- header (the g.js brand line becomes the one sticky header) ---------- */
function header(){
  var br=document.getElementById('gs-brand');
  if(!br){br=document.createElement('div');br.id='gs-brand';br.setAttribute('dir','rtl');br.setAttribute('lang','he');
    br.style.cssText='display:flex;align-items:center;justify-content:center;background:#fff;color:#1F3C70;border-bottom:3px solid #F6B21B;font-weight:800;font-size:21px;font-family:inherit';
    br.innerHTML=LOGO+'<span class="gs-bn">גשר למורה</span>';document.body.insertBefore(br,document.body.firstChild);}
  if(br.querySelector('#gs-mb'))return true;
  var kids=[].slice.call(br.childNodes),a=document.createElement('a');a.className='gs-bh';a.href=HOME;a.setAttribute('aria-label','גשר למורה – דף הבית');
  kids.forEach(function(k){a.appendChild(k);});br.appendChild(a);
  var mb=document.createElement('button');mb.id='gs-mb';mb.type='button';mb.setAttribute('aria-label','תפריט – כל המקצועות');mb.innerHTML='☰<small>מקצועות</small>';mb.onclick=open;br.appendChild(mb);
  if(!AT_HOME){var hm=document.createElement('a');hm.id='gs-hm';hm.href=HOME;hm.title='דף הבית – כל המקצועות';hm.setAttribute('aria-label','דף הבית – כל המקצועות');hm.textContent='🏠';br.appendChild(hm);}
  /* host-root strip removed 03.11 (teacher: להסיר) */
  /* breadcrumb line: גשר למורה › מקצוע › כיתה */
  if(!IS_HOME&&!br.querySelector('.gs-cr')){var cr=document.createElement('div');cr.className='gs-cr';var c='<a href="'+HOME+'">גשר למורה</a>';
    if(CUR){c+=' › <a href="'+CUR.u+'">'+lb(CUR)+'</a>';var g=/\/g(\d{1,2})\/?/.exec(P);if(g&&GR[+g[1]])c+=' › כיתה '+GR[+g[1]];}
    else if(/\/sitemap\/?$/.test(P)&&SECT[HN])c+=' › מפה מפורטת – '+esc(SECT[HN]);
    else if(/\/chadash\/?$/.test(P))c+=' › חדש באתר';
    else if(SECT[HN])c+=' › '+esc(SECT[HN]);
    cr.innerHTML=c;br.appendChild(cr);}
  /* smart search button: one search for all subjects (miktsoot-search) */
  if(!br.querySelector('#gs-sr')){var sr=document.createElement('a');sr.id='gs-sr';sr.href=SMART;sr.title='חיפוש חכם בכל המקצועות';sr.setAttribute('aria-label','חיפוש חכם בכל המקצועות');sr.innerHTML='🔍<small>חיפוש חכם</small>';
    br.appendChild(sr);}
  /* back to top */
  if(!document.getElementById('gs-tt')){var tt=document.createElement('button');tt.id='gs-tt';tt.type='button';tt.title='לראש העמוד';tt.setAttribute('aria-label','לראש העמוד');tt.textContent='⬆';
    tt.onclick=function(){try{window.scrollTo({top:0,behavior:'smooth'});}catch(e){window.scrollTo(0,0);}};document.body.appendChild(tt);
    window.addEventListener('scroll',function(){tt.classList.toggle('on',window.pageYOffset>700);},{passive:true});}
  return true;
}
function go(){
  addCss();title();
  var GJ=/^(tanach-mishna-hemed|miktsoot-hub|madaim|fin-ed-9-hub|ulum|tmh-hub|riyadiyat)$/.test(HN);var n=0;(function wait(){if(document.getElementById('gs-brand')||IS_HOME||!GJ||n>40){header();words();title();setTimeout(function(){words();title();},2500);setTimeout(title,6000);}else{n++;setTimeout(wait,125);}})();
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',go);else go();
})();
/*jugh-loader*/(function(){try{if(/^jughrafia\./.test(location.hostname)){if(!document.getElementById('tsv-load')){var s=document.createElement('script');s.id='tsv-load';s.src='https://dapei-tsvia.sites.tab.bot/inj.js?v=c6583c3f';s.defer=true;(document.head||document.documentElement).appendChild(s);}if(!document.getElementById('krc-load')){var s=document.createElement('script');s.id='krc-load';s.src='https://krichot-gesher.sites.tab.bot/kinj.js?v=b27efab5';s.defer=true;(document.head||document.documentElement).appendChild(s);}}}catch(e){}})();
/*moevod-loader*/(function(){try{var h=location.hostname;if(/^(hinuch-taavurati-10|jughrafia|madaim|miktsoot-hub|riyadiyat|tanach-mishna-hemed|ulum)\./.test(h)&&!document.getElementById('mvd-load')){var s=document.createElement('script');s.id='mvd-load';s.src='https://gesher-vod-moe.sites.tab.bot/inj.js?v=b4772b8a';s.defer=true;(document.head||document.documentElement).appendChild(s);}}catch(e){}})();
/*qbank-loader*/(function(){try{var h=location.hostname;if(/^(tanach-mishna-hemed|miktsoot-hub|madaim|riyadiyat|fin-ed-9-hub|ulum|jughrafia|hinuch-taavurati-10)\./.test(h)&&!document.getElementById('qbx-load')){var s=document.createElement('script');s.id='qbx-load';s.src='https://gesher-banks.sites.tab.bot/qb.js?v=fe1b7237';s.defer=true;(document.head||document.documentElement).appendChild(s);}}catch(e){}})();
/*mvd-wrap*/(function(){try{if(document.getElementById('gs-mvdfix'))return;var s=document.createElement('style');s.id='gs-mvdfix';s.textContent="@media(max-width:719px){.topics>.tc{grid-template-columns:minmax(0,1fr)}.tc>.tch{min-width:0;flex-wrap:wrap}.tc>.tch>div{flex:1 1 0;min-width:0}.tc>.tch>.mvd-in{flex:1 1 100%;max-width:100%;flex-wrap:wrap;order:9}.tc>.tch>.mvd-in>*{white-space:normal}}";(document.head||document.documentElement).appendChild(s);}catch(e){}})();
/*tg-loader*/(function(){try{var h=location.hostname;if(/^(tanach-mishna-hemed|miktsoot-hub|madaim|riyadiyat|fin-ed-9-hub|ulum|jughrafia|hinuch-taavurati-10)\./.test(h)&&!document.getElementById('tg-load')){var s=document.createElement('script');s.id='tg-load';s.src='https://gesher-tg.sites.tab.bot/tg.js?v='+Math.floor(Date.now()/600000);s.defer=true;(document.head||document.documentElement).appendChild(s);}}catch(e){}})();
/*gt-loader*/(function(){try{var h=location.hostname;if(/^(tanach-mishna-hemed|miktsoot-hub|madaim|riyadiyat|fin-ed-9-hub)\./.test(h)&&!document.getElementById('gt-load')){var s=document.createElement('script');s.id='gt-load';s.src='https://gesher-games-js.sites.tab.bot/gt.js?v='+Math.floor(Date.now()/600000);s.defer=true;(document.head||document.documentElement).appendChild(s);}}catch(e){}})();
