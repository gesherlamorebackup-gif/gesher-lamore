/* \u0022גשר למורה\u0022: site name at the top and bottom of the page + in-page search (filter + highlight). No cookies, no personal data. */
(function(){
if(window.__gsm)return;window.__gsm=1;
var H=location.hostname;
if(!/^(tanach-mishna-hemed|miktsoot-hub|madaim|fin-ed-9-hub|ulum|tmh-hub|riyadiyat)\.sites\.tab\.bot$/.test(H))return;
var AR=/^(ulum|riyadiyat)\./.test(H);
var NAME='גשר למורה';
var LOGO='<svg xmlns="http://www.w3.org/2000/svg" viewBox="12 60 210 128" width="59" height="36" style="width:59px !important;height:36px !important;max-width:59px !important;max-height:36px !important;min-width:0 !important;flex:0 0 auto !important;display:block !important;position:static !important" aria-hidden="true" focusable="false"><path d="M40,110 H210 V182 H180 A55,55 0 0 0 70,182 H40 Z" fill="#1F3C70"/><path d="M58,66 H186 V102 H58 Z" fill="#F6B21B"/><path d="M58,66 L18,84 L58,102 Z" fill="#F6DDB0" stroke="#1F3C70" stroke-width="0"/><path d="M33,77 L18,84 L33,91 Z" fill="#1F3C70"/><rect x="186" y="66" width="10" height="36" fill="#1F3C70"/><path d="M196,66 H206 A10,10 0 0 1 216,76 V92 A10,10 0 0 1 206,102 H196 Z" fill="#E86A4A"/><line x1="66" y1="84" x2="178" y2="84" stroke="#E39A0C" stroke-width="4" stroke-linecap="round"/></svg>';
var LOGOF='<svg xmlns="http://www.w3.org/2000/svg" viewBox="12 60 210 128" width="30" height="18" style="width:30px !important;height:18px !important;max-width:30px !important;max-height:18px !important;display:inline-block !important;vertical-align:-3px;margin-inline-end:6px;position:static !important" aria-hidden="true" focusable="false"><path d="M40,110 H210 V182 H180 A55,55 0 0 0 70,182 H40 Z" fill="#1F3C70"/><path d="M58,66 H186 V102 H58 Z" fill="#F6B21B"/><path d="M58,66 L18,84 L58,102 Z" fill="#F6DDB0" stroke="#1F3C70" stroke-width="0"/><path d="M33,77 L18,84 L33,91 Z" fill="#1F3C70"/><rect x="186" y="66" width="10" height="36" fill="#1F3C70"/><path d="M196,66 H206 A10,10 0 0 1 216,76 V92 A10,10 0 0 1 206,102 H196 Z" fill="#E86A4A"/><line x1="66" y1="84" x2="178" y2="84" stroke="#E39A0C" stroke-width="4" stroke-linecap="round"/></svg>';
var ICO='https://gesher-lamore.sites.tab.bot/icon.png';
var T=AR?{ph:'ابحث في الصفحة…',ok:'موافق',clr:'مسح البحث',none:'لم يتم العثور على نتائج',found:function(n){return n==1?'نتيجة واحدة':n+' نتائج';},lab:'بحث في الصفحة',foot:NAME}
        :{ph:'חיפוש בעמוד…',ok:'אישור',clr:'ניקוי החיפוש',none:'לא נמצאו תוצאות',found:function(n){return n==1?'נמצאה תוצאה אחת':'נמצאו '+n+' תוצאות';},lab:'חיפוש בעמוד',foot:NAME+' · חומרי לימוד למורים'};
/* ---------- normalisation (niqqud / tashkeel / final letters / geresh) ---------- */
var FIN={'ך':'כ','ם':'מ','ן':'נ','ף':'פ','ץ':'צ','أ':'ا','إ':'ا','آ':'ا','ٱ':'ا','ة':'ه','ى':'ي','ؤ':'و','ئ':'ي'};
function nc(c){ /* one char -> normalised char ('' = drop, ' ' = separator) */
  var k=c.charCodeAt(0);
  if((k>=0x0591&&k<=0x05BD)||k===0x05BF||(k>=0x05C1&&k<=0x05C2)||(k>=0x05C4&&k<=0x05C7)||(k>=0x064B&&k<=0x065F)||k===0x0670||k===0x0640||k===0x200F||k===0x200E||k===0x200D||k===0x200C)return '';
  if(c==="'"||c==='"'||c==='׳'||c==='״'||c==='`'||c==='’'||c==='‘'||c==='\u0022'||c==='\u0022')return '';
  if(FIN[c])return FIN[c];
  var l=c.toLowerCase();
  if(/[0-9a-z\u00e0-\u00ff\u05D0-\u05EA\u0620-\u064A\u0660-\u0669\u0400-\u04ff]/.test(l))return l;
  return ' ';
}
function nmap(s){ /* -> {t: normalised, m: index map into s} */
  var t='',m=[],sp=true;
  for(var i=0;i<s.length;i++){var c=nc(s.charAt(i));if(c==='')continue;
    if(c===' '){if(sp)continue;sp=true;}else sp=false;
    t+=c;m.push(i);}
  return {t:t,m:m};
}
function norm(s){return nmap(String(s||'')).t;}
/* ---------- styles ---------- */
function lum(rgb){var m=/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?/.exec(rgb||'');if(!m)return null;if(m[4]!==undefined&&+m[4]<0.5)return null;
  return {r:+m[1],g:+m[2],b:+m[3],l:(0.2126*m[1]+0.7152*m[2]+0.0722*m[3])/255};}
function accent(){
  try{var v=getComputedStyle(document.documentElement).getPropertyValue('--c1').trim();if(/^#[0-9a-f]{3,8}$/i.test(v))return v;}catch(e){}
  var cands=[],q=document.querySelector('header .k,header h1,.th-hero .th-k,h1,header');
  try{var hd=document.querySelector('header');if(hd)cands.push(getComputedStyle(hd).backgroundColor);}catch(e){}
  try{if(q)cands.push(getComputedStyle(q).color);}catch(e){}
  try{var a=document.querySelector('main a,a');if(a)cands.push(getComputedStyle(a).color);}catch(e){}
  for(var i=0;i<cands.length;i++){var x=lum(cands[i]);if(x&&x.l<0.55&&!(Math.abs(x.r-x.g)<12&&Math.abs(x.g-x.b)<12&&x.l<0.25))return 'rgb('+x.r+','+x.g+','+x.b+')';}
  return '#1F3A5F';
}
function css(ac){
  if(document.getElementById('gs-css'))return;
  var s=document.createElement('style');s.id='gs-css';
  s.textContent=
  '#gs-brand{display:flex!important;max-height:64px;overflow:hidden;width:auto;height:auto;margin:0;float:none;align-items:center;justify-content:center;gap:10px;background:#fff;color:#1F3C70;border-bottom:3px solid #F6B21B;font-family:inherit;font-weight:800;font-size:21px;line-height:1.2;padding:6px 12px;letter-spacing:.2px;position:relative;z-index:5;box-sizing:border-box}'+
  '#gs-brand svg{height:36px;width:auto;flex:0 0 auto;display:block}#gs-brand .gs-bn{display:block}'+
  '#gs-foot svg{height:18px;width:auto;display:inline-block;vertical-align:-3px;margin-inline-end:6px}'+
  '#gs-bar{box-sizing:border-box;max-width:880px;margin:12px auto 10px;padding:0 12px;font-family:inherit;direction:rtl;position:relative;z-index:4}'+
  '#gs-bar form{display:flex;align-items:stretch;gap:8px;margin:0}'+
  '#gs-bar .gs-w{position:relative;flex:1 1 auto;min-width:0;display:flex}'+
  '#gs-bar input{box-sizing:border-box;width:100%;min-width:0;font:inherit;font-size:16px;line-height:1.3;padding:10px 14px 10px 38px;border:2px solid '+ac+';border-radius:12px;background:#fff;color:#1d2433;outline:none;-webkit-appearance:none;appearance:none;margin:0}'+
  '#gs-bar input:focus{box-shadow:0 0 0 3px rgba(0,0,0,.08)}'+
  '#gs-bar .gs-x{position:absolute;left:6px;top:50%;transform:translateY(-50%);border:0;background:transparent;color:#555;font-size:17px;line-height:1;cursor:pointer;padding:6px 7px;border-radius:8px;display:none}'+
  '#gs-bar .gs-x:hover{background:rgba(0,0,0,.07)}#gs-bar.gs-has .gs-x{display:block}'+
  '#gs-bar .gs-ok{flex:0 0 auto;font:inherit;font-size:16px;font-weight:700;padding:10px 18px;border:0;border-radius:12px;background:'+ac+';color:#fff;cursor:pointer;margin:0}'+
  '#gs-bar .gs-ok:hover{filter:brightness(1.1)}'+
  '#gs-bar .gs-msg{font-size:14px;margin:6px 4px 0;color:#444;min-height:0}#gs-bar .gs-msg:empty{display:none}#gs-bar .gs-msg.gs-no{color:#b42318;font-weight:700}'+
  'form.gs-hf{display:flex!important;align-items:center;gap:8px}form.gs-hf input{flex:1 1 auto;min-width:0}'+
  'form.gs-hf .gs-hok{flex:0 0 auto;font:inherit;font-size:16px;font-weight:700;padding:10px 18px;border:0;border-radius:12px;background:'+ac+';color:#fff;cursor:pointer;margin:0}'+
  'form.gs-hf .gs-hx{display:none;flex:0 0 auto;border:0;background:transparent;color:#555;font-size:18px;line-height:1;cursor:pointer;padding:6px 8px;border-radius:8px;margin:0}form.gs-hf.gs-has .gs-hx{display:block}'+
  'form.gs-hf input::-webkit-search-cancel-button{display:none}'+
  '#rq .hp,.hp{position:absolute!important;left:auto!important;right:auto!important;top:auto!important;width:1px!important;height:1px!important;overflow:hidden!important;clip:rect(0 0 0 0)!important;clip-path:inset(50%)!important;white-space:nowrap!important}'+
  '.gs-hide{display:none!important}.gs-force{display:block!important}'+
  'mark.gs-mk{background:#ffe58a;color:inherit;padding:0 1px;border-radius:3px}'+
  '#mone-line{display:none!important}.gs-fx{display:none!important}.gs-fkeep{display:inline-block;margin:2px 8px;font-size:13px}.gs-fcopy{font-size:11px;opacity:.6;margin:2px auto 0;text-align:center}'+
  '#gs-foot{display:block;font-weight:800;font-size:15px;margin:2px auto 4px;text-align:center;color:inherit}'+
  'footer#gs-footer{text-align:center;padding:14px 10px 10px;border-top:1px solid rgba(0,0,0,.08);margin-top:16px;font-family:inherit}'+
  '@media (max-width:560px){#gs-brand{font-size:19px;padding:5px 10px}#gs-brand svg{height:32px}#gs-bar{padding:0 10px;margin:10px auto 8px}#gs-bar .gs-ok{padding:10px 14px}}'+
  '@media print{#gs-bar{display:none!important}}';
  (document.head||document.documentElement).appendChild(s);
}
/* ---------- placement ---------- */
function tidyFoot(f,fl){try{
  var KEEP=/(זכויות היוצרים[^·<]*)/;
  var ns=[].slice.call(f.childNodes);
  for(var i=0;i<ns.length;i++){var n=ns[i];
    if(n===fl)continue;
    if(n.nodeType===3){var t=n.nodeValue||'';if(!t.trim())continue;
      var m=t.match(KEEP),sp=document.createElement('span');sp.className='gs-fx';sp.textContent=t;f.insertBefore(sp,n);f.removeChild(n);
      if(m){var k=document.createElement('div');k.className='gs-fcopy';k.textContent=m[1].replace(/[;\s]+$/,'');f.insertBefore(k,sp.nextSibling);}
      continue;}
    if(n.nodeType!==1)continue;
    var tg=n.tagName;
    if(tg==='SCRIPT'||tg==='STYLE'||n.id==='mone-line'||n.id==='bk-req')continue;
    if(tg==='A'||(n.querySelector&&n.querySelector('a,button,form,input,select,textarea'))){n.classList.add('gs-fkeep');continue;}
    n.classList.add('gs-fx');}
}catch(e){}}
var bar,inp,msg;
function place(){
  if(document.getElementById('gs-brand'))return;
  var ac=accent();css(ac);
  var b=document.body;
  /* favicon */
  try{var ls=document.querySelectorAll('link[rel~="icon"],link[rel="apple-touch-icon"]');for(var q=0;q<ls.length;q++)ls[q].parentNode.removeChild(ls[q]);
    var hd=document.head||document.documentElement,lk=document.createElement('link');lk.rel='icon';lk.type='image/png';lk.href=ICO;hd.appendChild(lk);
    var la=document.createElement('link');la.rel='apple-touch-icon';la.href=ICO;hd.appendChild(la);}catch(e){}
  /* top: brand line */
  var br=document.createElement('div');br.id='gs-brand';br.setAttribute('dir','rtl');br.setAttribute('lang','he');
  br.innerHTML=LOGO+'<span class="gs-bn">'+NAME+'</span>';
  var first=b.firstElementChild,skip=(first&&/(^|\s)skip(\s|$)/.test(first.className||''))?first:null;
  if(skip)b.insertBefore(br,skip.nextSibling);else b.insertBefore(br,b.firstChild);
  /* bottom: brand line in the last footer */
  var fs=document.getElementsByTagName('footer'),f=null;
  for(var i=fs.length-1;i>=0;i--){if(!fs[i].closest('nav,aside,[role=dialog]')){f=fs[i];break;}}
  var fl=document.createElement('div');fl.id='gs-foot';fl.setAttribute('lang','he');fl.setAttribute('dir','rtl');fl.innerHTML=LOGOF+'<span>'+T.foot+'</span>';
  if(f)f.insertBefore(fl,f.firstChild);
  /* teacher 27.10 \u0022את זה להוריד בכל האתר\u0022: the per-site subtitle/tagline in the footer and the visible visitor count go; links (נגישות, חזרה) stay; the count keeps counting */
  if(f&&f.id!=='gs-footer')tidyFoot(f,fl);
  else{f=document.createElement('footer');f.id='gs-footer';f.setAttribute('dir','rtl');f.appendChild(fl);b.appendChild(f);}
  /* pages whose hero already has the catalogue search: give that box the \u0022אישור\u0022 and ✕ buttons instead of a second box */
  var hq=document.getElementById('th-q');
  if(hq&&hq.form&&hq.getClientRects().length){heroBtns(hq);return;}
  /* search bar under the page header */
  bar=document.createElement('div');bar.id='gs-bar';bar.setAttribute('dir','rtl');bar.setAttribute('lang',AR?'ar':'he');
  bar.innerHTML='<form role="search" autocomplete="off"><div class="gs-w"><input type="text" enterkeyhint="search" aria-label="'+T.lab+'" placeholder="'+T.ph+'"><button type="button" class="gs-x" aria-label="'+T.clr+'" title="'+T.clr+'">✕</button></div><button type="submit" class="gs-ok">'+T.ok+'</button></form><div class="gs-msg" aria-live="polite"></div>';
  var hdr=null,hs=document.querySelectorAll('header.top,header.hero,header.uh,.th-hero,header');
  for(var j=0;j<hs.length;j++){var h=hs[j];if(h.closest('nav,aside,footer,[role=dialog],#gs-bar')||h.id==='gs-brand')continue;if(h.getClientRects().length===0)continue;hdr=h;break;}
  if(hdr){var nx=hdr.nextElementSibling;if(nx&&/(^|\s)crumbs(\s|$)/.test(nx.className||''))hdr=nx;hdr.parentNode.insertBefore(bar,hdr.nextSibling);}
  else{var mn=document.querySelector('main');if(mn)mn.insertBefore(bar,mn.firstChild);else br.parentNode.insertBefore(bar,br.nextSibling);}
  inp=bar.querySelector('input');msg=bar.querySelector('.gs-msg');
  bar.querySelector('form').addEventListener('submit',function(e){e.preventDefault();run(inp.value);try{inp.blur();}catch(x){}});
  bar.querySelector('.gs-x').addEventListener('click',function(){inp.value='';reset();bar.classList.remove('gs-has');try{inp.focus();}catch(x){}});
  inp.addEventListener('input',function(){if(inp.value)bar.classList.add('gs-has');else{bar.classList.remove('gs-has');if(active)reset();}});
  inp.addEventListener('keydown',function(e){if(e.key==='Escape'){inp.value='';reset();bar.classList.remove('gs-has');}});
}
function heroBtns(hq){
  var f=hq.form;if(f.querySelector('.gs-hok'))return;
  var ok=document.createElement('button');ok.type='submit';ok.className='gs-hok';ok.textContent=T.ok;
  var x=document.createElement('button');x.type='button';x.className='gs-hx';x.textContent='✕';x.setAttribute('aria-label',T.clr);x.title=T.clr;
  f.appendChild(x);f.appendChild(ok);f.classList.add('gs-hf');
  function fire(){try{hq.dispatchEvent(new Event('input',{bubbles:true}));hq.dispatchEvent(new Event('change',{bubbles:true}));hq.dispatchEvent(new KeyboardEvent('keyup',{key:'Enter',bubbles:true}));}catch(e){}}
  function upd(){if(hq.value)f.classList.add('gs-has');else f.classList.remove('gs-has');}
  f.addEventListener('submit',function(e){e.preventDefault();fire();try{hq.blur();}catch(z){}});
  x.addEventListener('click',function(){hq.value='';fire();upd();try{hq.focus();}catch(z){}});
  hq.addEventListener('input',upd);upd();
}
/* ---------- search ---------- */
var EXC='nav,aside,header,footer,script,style,noscript,template,[role=dialog],#vw,#fx-modal,.crumbs,#gs-bar,#gs-brand,#bk-req,#mone-line,.xs-strip,.xs-wrap,.tnv-panel,.tnv-burger,.skip,.pv-ov,#lvlnav';
var UNIT='li,tr,.item,.mcard,.card,.tile,.row,.mrow,.qt,.lv-card,.kz-row,dd';
var GRP='details,section,.book,.blk,.tpanel,.lvp,.lv-sec,.grid,.tiles,.list,ul,ol,table,tbody,dl';
var active=false,hid=[],forced=[],opened=[],marks=0;
function root(){return document.querySelector('main')||document.body;}
function excluded(el){return !!(el.closest&&el.closest(EXC));}
function linksIn(el){return el.querySelectorAll('a[href]').length;}
function collect(scope,out,depth){
  var c=scope.querySelectorAll(UNIT),list=[];
  for(var i=0;i<c.length;i++){var el=c[i];if(excluded(el))continue;
    var p=el.parentElement,inner=false;
    while(p&&p!==scope){if(p.matches&&p.matches(UNIT)&&!excluded(p)){inner=true;break;}p=p.parentElement;}
    if(!inner)list.push(el);}
  for(var k=0;k<list.length;k++){var u=list[k];
    if(depth<4&&linksIn(u)>15&&u.querySelector(UNIT)){var before=out.length;collect(u,out,depth+1);if(out.length>before)continue;}
    out.push(u);}
}
function units(){
  var r=root(),out=[];collect(r,out,0);
  if(out.length<3){out=[];var a=r.querySelectorAll('a[href]');for(var i=0;i<a.length;i++)if(!excluded(a[i]))out.push(a[i]);}
  return out;
}
var RX={};
function rxOf(w){if(!RX[w])RX[w]=new RegExp('(^| )([והבלמשכדلبفوك]|ال)?'+w.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')+'(?= |$)','g');return RX[w];}
function finds(nt,w){var out=[],ix,from=0;
  if(w.length>2){while((ix=nt.indexOf(w,from))>=0){out.push([ix,ix+w.length]);from=ix+w.length;}return out;}
  var re=rxOf(w),m;re.lastIndex=0;
  while((m=re.exec(nt))){var s=m.index+m[1].length+(m[2]?m[2].length:0);out.push([s,s+w.length]);if(re.lastIndex===m.index)re.lastIndex++;}
  return out;}
function has(nt,w){if(w.length>2)return nt.indexOf(w)>=0;var re=rxOf(w);re.lastIndex=0;return re.test(nt);}
function matchAll(nt,ws){for(var i=0;i<ws.length;i++)if(!has(nt,ws[i]))return false;return true;}
function lvl(h){var m=/^H([1-6])$/.exec(h.tagName);return m?+m[1]:(h.tagName==='SUMMARY'?7:8);}
function scopeOf(h0){
  if(h0.tagName==='SUMMARY')return [h0.parentElement];
  var rt=root(),hl=(h0.textContent||'').length,h=h0;
  /* a heading wrapped in a small header block: use the block */
  while(h.parentElement&&h.parentElement!==rt&&!h.parentElement.matches('main,body')&&(h.parentElement.textContent||'').length<=hl+150)h=h.parentElement;
  var p=h.parentElement;
  if(p&&p!==rt&&p.firstElementChild===h&&!p.matches('main,body'))return [p];
  var out=[],n=h.nextElementSibling,L=lvl(h0);
  while(n){if(/^H[1-6]$/.test(n.tagName)&&lvl(n)<=L)break;out.push(n);n=n.nextElementSibling;}
  return out;
}
function hide(el){if(!el.classList.contains('gs-hide')){el.classList.add('gs-hide');hid.push(el);}}
function shown(el){var e=el;while(e&&e!==document.body){if(e.classList&&e.classList.contains('gs-hide'))return false;e=e.parentElement;}return true;}
function reset(){
  active=false;
  for(var i=0;i<hid.length;i++)hid[i].classList.remove('gs-hide');
  for(i=0;i<forced.length;i++)forced[i].classList.remove('gs-force');
  for(i=0;i<opened.length;i++)opened[i].open=false;
  hid=[];forced=[];opened=[];
  var ms=document.querySelectorAll('mark.gs-mk'),ps=[];
  for(i=0;i<ms.length;i++){var m=ms[i],p=m.parentNode;if(!p)continue;p.replaceChild(document.createTextNode(m.textContent),m);if(ps.indexOf(p)<0)ps.push(p);}
  for(i=0;i<ps.length;i++)try{ps[i].normalize();}catch(e){}
  if(msg){msg.textContent='';msg.className='gs-msg';}
}
function highlight(el,ws){
  var tw=document.createTreeWalker(el,NodeFilter.SHOW_TEXT,{acceptNode:function(n){var p=n.parentElement;if(!p||/^(SCRIPT|STYLE|MARK|TEXTAREA|OPTION)$/.test(p.tagName)||!n.nodeValue.trim())return NodeFilter.FILTER_REJECT;return NodeFilter.FILTER_ACCEPT;}});
  var nodes=[],n;while((n=tw.nextNode()))nodes.push(n);
  for(var i=0;i<nodes.length&&marks<1500;i++){
    var tn=nodes[i],s=tn.nodeValue,mp=nmap(s),rs=[];
    for(var w=0;w<ws.length;w++){var fs=finds(mp.t,ws[w]);for(var f=0;f<fs.length;f++){var a=mp.m[fs[f][0]],b=mp.m[fs[f][1]-1]+1;
        while(b<s.length&&nc(s.charAt(b))==='')b++;rs.push([a,b]);}}
    if(!rs.length)continue;
    rs.sort(function(x,y){return x[0]-y[0];});var mg=[];
    for(var r=0;r<rs.length;r++){if(mg.length&&rs[r][0]<=mg[mg.length-1][1])mg[mg.length-1][1]=Math.max(mg[mg.length-1][1],rs[r][1]);else mg.push(rs[r].slice());}
    var fr=document.createDocumentFragment(),pos=0;
    for(r=0;r<mg.length;r++){if(mg[r][0]>pos)fr.appendChild(document.createTextNode(s.slice(pos,mg[r][0])));
      var mk=document.createElement('mark');mk.className='gs-mk';mk.textContent=s.slice(mg[r][0],mg[r][1]);fr.appendChild(mk);marks++;pos=mg[r][1];}
    if(pos<s.length)fr.appendChild(document.createTextNode(s.slice(pos)));
    tn.parentNode.replaceChild(fr,tn);
  }
}
function reveal(el){
  var e=el;
  while(e&&e!==document.body){
    if(e.tagName==='DETAILS'&&!e.open){e.open=true;opened.push(e);}
    e=e.parentElement;
  }
  if(el.getClientRects().length)return;
  e=el;
  while(e&&e!==document.body){
    if(!e.classList.contains('gs-hide')){var d='';try{d=getComputedStyle(e).display;}catch(x){}
      if(d==='none'&&!excluded(e)){e.classList.add('gs-force');forced.push(e);}}
    e=e.parentElement;
  }
}
function run(q){
  reset();
  var ws=norm(q).split(' ').filter(function(w){return w;});
  if(!ws.length){bar.classList.remove('gs-has');return;}
  active=true;marks=0;
  var r=root(),us=units(),show=[],hmatch=[];
  /* topic headings that match show their whole topic */
  var hs=r.querySelectorAll('h2,h3,h4,h5,summary,.bh');
  var inH=[];
  for(var i=0;i<hs.length;i++){var h=hs[i];if(excluded(h))continue;if(matchAll(norm(h.textContent),ws)){hmatch.push(h);var sc=scopeOf(h);for(var k=0;k<sc.length;k++)inH.push(sc[k]);}}
  function underH(u){for(var k=0;k<inH.length;k++)if(inH[k]===u||inH[k].contains(u))return true;return false;}
  var keep=[];
  for(i=0;i<us.length;i++){var u=us[i];var ok=matchAll(norm(u.textContent),ws);if(ok)show.push(u);if(ok||underH(u))keep.push(u);else hide(u);}
  /* matches outside the rows (tables of contents, titles, plain links) */
  function inUnit(e){for(var k=0;k<us.length;k++)if(us[k]===e||us[k].contains(e))return true;return false;}
  var tw=document.createTreeWalker(r,NodeFilter.SHOW_TEXT),tn,loose=[];
  while((tn=tw.nextNode())){var pe=tn.parentElement;if(!pe||/^(SCRIPT|STYLE|NOSCRIPT|TEMPLATE)$/.test(pe.tagName))continue;
    if(!has(nmap(tn.nodeValue).t,ws[0]))continue;if(excluded(pe)||inUnit(pe)||underH(pe))continue;
    var el=pe,d=0;while(el&&el!==r&&!matchAll(norm(el.textContent),ws)&&d<3){el=el.parentElement;d++;}
    if(!el||el===r||!matchAll(norm(el.textContent),ws)||el.contains(bar))continue;
    var dup=false;for(var k4=0;k4<loose.length;k4++){if(loose[k4].contains(el)){dup=true;break;}if(el.contains(loose[k4])){loose.splice(k4,1);k4--;}}
    if(!dup)loose.push(el);}
  for(i=0;i<loose.length;i++){keep.push(loose[i]);show.push(loose[i]);}
  /* hide groups with nothing left in them */
  var anc=[];
  for(i=0;i<us.length;i++){if(keep.indexOf(us[i])>=0)continue;var p=us[i].parentElement;
    while(p&&p!==r&&p!==document.body){if(anc.indexOf(p)<0)anc.push(p);p=p.parentElement;}}
  for(i=0;i<anc.length;i++){var g=anc[i];if(g.contains(bar)||excluded(g))continue;
    var any=false;for(var k2=0;k2<keep.length;k2++)if(g.contains(keep[k2])){any=true;break;}
    if(!any){for(var k3=0;k3<hmatch.length;k3++)if(g.contains(hmatch[k3])){any=true;break;}}
    if(!any)hide(g);}
  /* orphan headings */
  for(i=0;i<hs.length;i++){var h2=hs[i];if(excluded(h2)||h2.tagName==='SUMMARY'||!shown(h2)||hmatch.indexOf(h2)>=0)continue;
    var sc2=scopeOf(h2);if(sc2.length===1&&sc2[0].contains(h2))continue;
    var vis=false,cnt=0;for(var s2=0;s2<sc2.length;s2++){if(sc2[s2].contains(bar)){vis=true;break;}cnt++;if(shown(sc2[s2])&&(sc2[s2].querySelector('mark.gs-mk,a[href]')||sc2[s2].textContent.trim())){
      /* a sibling still visible only counts if it holds a kept unit or is not a unit container */
      var hasU=false,hasK=false;for(var z=0;z<us.length;z++){if(sc2[s2].contains(us[z])){hasU=true;if(keep.indexOf(us[z])>=0){hasK=true;break;}}}
      if(!hasU||hasK){vis=true;break;}}}
    if(cnt&&!vis)hide(h2);}
  for(i=0;i<keep.length;i++)reveal(keep[i]);
  for(i=0;i<hmatch.length;i++){reveal(hmatch[i]);highlight(hmatch[i],ws);}
  for(i=0;i<show.length;i++)highlight(show[i],ws);
  var n=show.length;
  if(!n&&!hmatch.length){msg.textContent=T.none;msg.className='gs-msg gs-no';}
  else{msg.textContent=T.found(n||hmatch.length);msg.className='gs-msg';}
  var fm=document.querySelector('main mark.gs-mk')||document.querySelector('mark.gs-mk');
  if(fm)try{var y=fm.getBoundingClientRect().top+window.pageYOffset-120;window.scrollTo({top:Math.max(0,y),behavior:'smooth'});}catch(e){}
}
window.gesherSearch=function(q){if(!bar)place();inp.value=q||'';if(q)bar.classList.add('gs-has');run(q||'');return {found:document.querySelectorAll('mark.gs-mk').length,msg:msg.textContent};};
window.gesherReset=function(){if(inp)inp.value='';reset();};
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',place);else place();
})();
/*ezr-rights-loader*/(function(){try{var h=location.hostname,p=location.pathname;if((/^tmh-hub\./.test(h)&&/\/historia-ezrahut\/ezrahut\/e16\//.test(p))||(/^tanach-mishna-hemed\./.test(h)&&/^\/ezrahut(\/|$)/.test(p))){if(document.getElementById("ezr-inj"))return;var s=document.createElement("script");s.id="ezr-inj";s.defer=true;s.src="https://tmh-dl-ezrahut-rights.sites.tab.bot/inj.js?v=8b61a41f";(document.head||document.documentElement).appendChild(s);}}catch(e){}})();
/*ezr-democ-loader*/(function(){try{var h=location.hostname,p=location.pathname;if(/^tanach-mishna-hemed\./.test(h)&&/^\/ezrahut(\/|$)/.test(p)){if(document.getElementById("ezr-democ-inj"))return;var s=document.createElement("script");s.id="ezr-democ-inj";s.defer=true;s.src="https://tmh-dl-ezrahut-democ.sites.tab.bot/inj.js?v=a44d6b5e";(document.head||document.documentElement).appendChild(s);}}catch(e){}})();
/*sci-games-loader*/(function(){try{var h=location.hostname,p=location.pathname;if(/^miktsoot-hub\./.test(h)&&/^\/biologia\/?$/.test(p)){if(document.getElementById("sci-games-inj"))return;var s=document.createElement("script");s.id="sci-games-inj";s.defer=true;s.src="https://miktsoot-games-index.sites.tab.bot/inj-bio.js?v=bff9d722";(document.head||document.documentElement).appendChild(s);}}catch(e){}})();
/*gesher-unify-loader*/(function(){try{if(document.getElementById("gs-unify"))return;var s=document.createElement("script");s.id="gs-unify";s.src="https://gesher-lamore.sites.tab.bot/u.js?v=d0e91d2b";(document.head||document.documentElement).appendChild(s);}catch(e){}})();

/* curriculum rows (cur2.js on tochnit-misrad) for riyadiyat + ulum, which do not get the cur2 loader from c.js – Nov 2 2026, worker fa30f140 */
(function(){try{if(window.__cur2g||!/^(riyadiyat|ulum)\.sites\.tab\.bot$/.test(location.hostname))return;window.__cur2g=1;var s=document.createElement('script');s.src='https://tochnit-misrad.sites.tab.bot/cur2.js';s.async=true;(document.head||document.documentElement).appendChild(s);}catch(e){}})();
/*tsvia-loader*/(function(){try{var h=location.hostname;if(/^(miktsoot-hub|riyadiyat|madaim|ulum|jughrafia|tanach-mishna-hemed)\./.test(h)&&!document.getElementById('tsv-load')){var s=document.createElement('script');s.id='tsv-load';s.src='https://dapei-tsvia.sites.tab.bot/inj.js?v=c6583c3f';s.defer=true;(document.head||document.documentElement).appendChild(s);}}catch(e){}})();
/*kricha-loader*/(function(){try{var h=location.hostname;if(/^(miktsoot-hub|riyadiyat|madaim|ulum|jughrafia|tanach-mishna-hemed|fin-ed-9-hub)\./.test(h)&&!document.getElementById('krc-load')){var s=document.createElement('script');s.id='krc-load';s.src='https://krichot-gesher.sites.tab.bot/kinj.js?v=b27efab5';s.defer=true;(document.head||document.documentElement).appendChild(s);}}catch(e){}})();
/*moevod-loader*/(function(){try{var h=location.hostname;if(/^(hinuch-taavurati-10|jughrafia|madaim|miktsoot-hub|riyadiyat|tanach-mishna-hemed|ulum)\./.test(h)&&!document.getElementById('mvd-load')){var s=document.createElement('script');s.id='mvd-load';s.src='https://gesher-vod-moe.sites.tab.bot/inj.js?v=b4772b8a';s.defer=true;(document.head||document.documentElement).appendChild(s);}}catch(e){}})();
/*ezr-mechvan-loader*/(function(){try{var h=location.hostname,p=location.pathname;if(/^tanach-mishna-hemed\./.test(h)&&/^\/ezrahut(\/|$)/.test(p)){if(document.getElementById("ezr-mechvan-inj"))return;var s=document.createElement("script");s.id="ezr-mechvan-inj";s.defer=true;s.src="https://tmh-dl-ezrahut-mechvan-g9.sites.tab.bot/inj.js?v=f3d206d7";(document.head||document.documentElement).appendChild(s);}}catch(e){}})();
