// Carte mentale Tunic — rendu, mode Modifier, brouillon local et export de data.js.
(function(){
  'use strict';
  var NS='http://www.w3.org/2000/svg';
  var KEY='tunic-carte-brouillon-v1';
  var COLORS=[['blue','Bleu'],['gold','Or'],['red','Rouge'],['yellow','Jaune'],['green','Vert'],['violet','Violet'],['slate','Ardoise']];
  var STAT={ok:'fait',open:'en cours',no:'non trouvé'};

  var published=JSON.stringify(window.CARTE);
  var state=JSON.parse(published);
  var editing=false, message='';
  var app=document.getElementById('app');

  // Brouillon local : les modifications faites dans ce navigateur sont gardées jusqu'à l'export.
  try{
    var saved=localStorage.getItem(KEY);
    if(saved && saved!==published){ state=JSON.parse(saved); message='Brouillon local chargé : il contient des modifications pas encore publiées.'; }
  }catch(_){}

  function esc(s){return String(s==null?'':s).replace(/[&<>"]/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]})}
  function ce(){return editing?' contenteditable="true" spellcheck="false"':''}
  function dirty(){return JSON.stringify(state)!==published}
  function persist(){
    try{ if(dirty()) localStorage.setItem(KEY,JSON.stringify(state)); else localStorage.removeItem(KEY); }catch(_){}
  }

  function itemHTML(it){
    var h='';
    if(it.k) h+='<span class="key" style="background:var(--'+esc(it.k)+')"></span>';
    if(it.h!=null) h+='<span class="hn"'+ce()+' data-f="h" data-ph="H?">'+esc(it.h)+'</span>';
    h+='<span class="n"'+ce()+' data-f="n" data-ph="Nouvel élément">'+esc(it.n)+'</span>';
    if(editing){
      h+='<select class="st" data-f="s" aria-label="État">'+[['','— état'],['ok','fait'],['open','en cours'],['no','non trouvé']].map(function(o){return '<option value="'+o[0]+'"'+((it.s||'')===o[0]?' selected':'')+'>'+o[1]+'</option>'}).join('')+'</select>';
      if(it.s) h+='<span class="chip '+esc(it.s)+'"'+ce()+' data-f="l" data-ph="libellé">'+esc(it.l)+'</span>';
      h+='<span class="tools"><button type="button" data-a="sub-add" title="Ajouter un sous-élément">+ sous</button><button type="button" data-a="up" aria-label="Monter">↑</button><button type="button" data-a="down" aria-label="Descendre">↓</button><button type="button" data-a="item-del" class="del" aria-label="Supprimer l\'élément">×</button></span>';
    } else if(it.s){
      h+='<span class="chip '+esc(it.s)+'">'+esc(it.l||STAT[it.s])+'</span>';
    }
    if(it.d||editing) h+='<span class="d"'+ce()+' data-f="d" data-ph="Ajouter une précision">'+esc(it.d)+'</span>';
    if(it.sub&&it.sub.length){
      h+='<ul>'+it.sub.map(function(t,j){
        return '<li data-j="'+j+'"><span'+ce()+' data-f="sub" data-ph="Sous-élément">'+esc(t)+'</span>'+(editing?'<button type="button" class="sub-del del" data-a="sub-del" aria-label="Supprimer">×</button>':'')+'</li>';
      }).join('')+'</ul>';
    }
    return h;
  }

  function branchHTML(b,bi){
    var h='<section class="branch'+(b.plain?' plain':'')+'" style="--c:var(--'+esc(b.c)+')" data-b="'+bi+'">';
    h+='<h2><span'+ce()+' data-f="bn" data-ph="Nom de la branche">'+esc(b.name)+'</span></h2>';
    if(editing){
      h+='<div class="btools"><select class="bsel" data-f="bc" aria-label="Couleur">'+COLORS.map(function(c){return '<option value="'+c[0]+'"'+(b.c===c[0]?' selected':'')+'>'+c[1]+'</option>'}).join('')+'</select>'
        +'<button type="button" data-a="side">'+(b.side==='left'?'Passer à droite':'Passer à gauche')+'</button>'
        +'<button type="button" data-a="bup" aria-label="Monter la branche">↑</button><button type="button" data-a="bdown" aria-label="Descendre la branche">↓</button>'
        +'<button type="button" data-a="b-del" class="del">Supprimer</button></div>';
    }
    h+='<ul>'+b.items.map(function(it,ii){return '<li data-i="'+ii+'">'+itemHTML(it)+'</li>'}).join('')+'</ul>';
    if(editing) h+='<button type="button" class="add" data-a="item-add">+ Ajouter un élément</button>';
    return h+'</section>';
  }

  function render(){
    var left='',right='';
    state.branches.forEach(function(b,bi){ if(b.side==='left') left+=branchHTML(b,bi); else right+=branchHTML(b,bi); });
    var h='<div class="wrap'+(editing?' editing':'')+'">';
    h+='<a class="back" href="../">← Accueil</a>';
    h+='<header><div class="ht"><h1'+ce()+' data-f="title" data-ph="Titre">'+esc(state.title)+'</h1><p'+ce()+' data-f="subtitle" data-ph="Sous-titre">'+esc(state.subtitle)+'</p></div>';
    h+='<div class="hbar"><div class="legend"><span class="chip ok">fait</span><span class="chip open">en cours</span><span class="chip no">non trouvé</span></div>';
    h+='<button type="button" class="btn'+(editing?' primary':'')+'" data-a="edit">'+(editing?'Terminer':'Modifier')+'</button>';
    h+='</div></header>';
    h+='<div id="msg" role="status" aria-live="polite">'+esc(message)+'</div>';
    if(editing) h+='<p class="notice">Tes modifications sont gardées dans ce navigateur. Pour les mettre en ligne, télécharge data.js et remplace le fichier tunic/data.js du dépôt.</p>';
    h+='<div class="map" id="map"><svg class="links" id="links" aria-hidden="true"></svg>';
    h+='<div class="side" data-side="left">'+left+'</div>';
    h+='<div class="core" id="core"><div class="t"'+ce()+' data-f="ct" data-ph="Titre">'+esc(state.core.t)+'</div><div class="s"'+ce()+' data-f="cs" data-ph="Note">'+esc(state.core.s)+'</div></div>';
    h+='<div class="side" data-side="right">'+right+'</div></div>';
    if(editing) h+='<div class="addb"><button type="button" class="add" data-a="b-add">+ Ajouter une branche</button></div>';
    h+='</div>';
    app.innerHTML=h;
    renderBar();
    app.querySelectorAll('.branch').forEach(function(sec){
      sec.addEventListener('mouseenter',function(){var p=document.querySelector('#links [data-b="'+sec.dataset.b+'"]');if(p)p.classList.add('hot')});
      sec.addEventListener('mouseleave',function(){var p=document.querySelector('#links [data-b="'+sec.dataset.b+'"]');if(p)p.classList.remove('hot')});
    });
    draw();
  }

  function draw(){
    var svg=document.getElementById('links'),map=document.getElementById('map'),core=document.getElementById('core');
    if(!svg)return; svg.innerHTML='';
    if(getComputedStyle(svg).display==='none')return;
    var m=map.getBoundingClientRect(), c=core.getBoundingClientRect(), cy=c.top+c.height/2-m.top;
    map.querySelectorAll('.branch').forEach(function(b){
      var left=b.parentNode.dataset.side==='left';
      var hd=b.querySelector('h2').getBoundingClientRect(), r=b.getBoundingClientRect();
      var sx=(left?c.left:c.right)-m.left, ex=(left?r.right:r.left)-m.left, ey=hd.top+hd.height/2-m.top, mx=(sx+ex)/2;
      var p=document.createElementNS(NS,'path');
      p.setAttribute('d','M'+sx+','+cy+' C'+mx+','+cy+' '+mx+','+ey+' '+ex+','+ey);
      p.style.stroke=getComputedStyle(b).getPropertyValue('--c');
      p.setAttribute('data-b',b.dataset.b);
      svg.appendChild(p);
    });
  }

  var bar=document.createElement('div');
  bar.className='savebar'; bar.hidden=true;
  document.body.appendChild(bar);
  function renderBar(){
    var d=dirty();
    bar.hidden=!d;
    if(d) bar.innerHTML='<span>Modifications pas encore publiées</span><button type="button" class="btn" data-a="revert">Revenir à la version publiée</button><button type="button" class="btn primary" data-a="export">Télécharger data.js</button>';
  }
  function refreshBar(){ if(bar.hidden===dirty()) renderBar(); }
  function swap(a,i,j){var t=a[i];a[i]=a[j];a[j]=t}
  function moveBranch(bi,dir){
    var side=state.branches[bi].side, j=bi+dir;
    while(j>=0&&j<state.branches.length&&state.branches[j].side!==side) j+=dir;
    if(j>=0&&j<state.branches.length) swap(state.branches,bi,j);
  }
  function focusLast(sel){var els=app.querySelectorAll(sel);var el=els[els.length-1];if(el)el.focus()}

  function exportData(){
    var txt='// Contenu de la carte mentale. Modifie ce fichier (ou exporte-le depuis le mode Modifier du site).\nwindow.CARTE = '+JSON.stringify(state,null,2)+';\n';
    var url=URL.createObjectURL(new Blob([txt],{type:'text/javascript;charset=utf-8'}));
    var a=document.createElement('a'); a.href=url; a.download='data.js';
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(function(){URL.revokeObjectURL(url)},1000);
    setMsg('data.js téléchargé. Remplace tunic/data.js dans ton dépôt puis fais un commit : la page publiée se mettra à jour.');
  }

  function onClick(e){
    var btn=e.target.closest('[data-a]'); if(!btn) return;
    var a=btn.dataset.a, sec=btn.closest('[data-b]'), bi=sec?+sec.dataset.b:-1, b=state.branches[bi];
    var li=btn.closest('li[data-i]'), ii=li?+li.dataset.i:-1, after=null;
    switch(a){
      case 'edit': editing=!editing; message=''; break;
      case 'item-add': b.items.push({n:''}); after='[data-b="'+bi+'"] li[data-i] > .n'; break;
      case 'item-del': b.items.splice(ii,1); break;
      case 'up': if(ii>0) swap(b.items,ii,ii-1); break;
      case 'down': if(ii<b.items.length-1) swap(b.items,ii,ii+1); break;
      case 'sub-add': (b.items[ii].sub=b.items[ii].sub||[]).push(''); after='[data-b="'+bi+'"] li[data-i="'+ii+'"] li span'; break;
      case 'sub-del': b.items[ii].sub.splice(+btn.closest('li[data-j]').dataset.j,1); if(!b.items[ii].sub.length) delete b.items[ii].sub; break;
      case 'side': b.side=b.side==='left'?'right':'left'; break;
      case 'bup': moveBranch(bi,-1); break;
      case 'bdown': moveBranch(bi,1); break;
      case 'b-del':
        if(!btn.dataset.armed){btn.dataset.armed='1';btn.textContent='Confirmer la suppression';setTimeout(function(){if(btn.isConnected){delete btn.dataset.armed;btn.textContent='Supprimer'}},4000);return}
        state.branches.splice(bi,1); break;
      case 'b-add':
        var nl=state.branches.filter(function(x){return x.side==='left'}).length;
        state.branches.push({id:'b'+Date.now(),name:'',c:'slate',side:nl<=state.branches.length-nl?'left':'right',items:[]});
        after='b-add'; break;
      case 'revert':
        if(!btn.dataset.armed){btn.dataset.armed='1';btn.textContent='Confirmer : effacer le brouillon';setTimeout(function(){if(btn.isConnected){delete btn.dataset.armed;btn.textContent='Revenir à la version publiée'}},4000);return}
        state=JSON.parse(published); message='Brouillon effacé : tu vois la version publiée.'; break;
      case 'export': exportData(); return;
    }
    persist();
    render();
    if(after==='b-add'){var last=app.querySelector('.branch[data-b="'+(state.branches.length-1)+'"] h2 span');if(last)last.focus()}
    else if(after) focusLast(after);
  }
  app.addEventListener('click',onClick);
  bar.addEventListener('click',onClick);

  app.addEventListener('input',function(e){
    var t=e.target, f=t.dataset&&t.dataset.f; if(!f) return;
    var v=t.tagName==='SELECT'?t.value:t.textContent.replace(/\s+/g,' ');
    if(t.tagName!=='SELECT'&&t.textContent===''&&t.innerHTML!=='') t.innerHTML='';
    var sec=t.closest('[data-b]'), b=sec?state.branches[+sec.dataset.b]:null;
    var li=t.closest('li[data-i]'), it=(b&&li)?b.items[+li.dataset.i]:null;
    switch(f){
      case 'title': state.title=v; break;
      case 'subtitle': state.subtitle=v; break;
      case 'ct': state.core.t=v; break;
      case 'cs': state.core.s=v; break;
      case 'bn': b.name=v; break;
      case 'bc': b.c=v; persist(); render(); return;
      case 's': if(v){it.s=v; if(!it.l) it.l=STAT[v]} else {delete it.s; delete it.l} persist(); render(); return;
      case 'sub': it.sub[+t.closest('li[data-j]').dataset.j]=v; break;
      default: it[f]=v;
    }
    persist(); refreshBar(); draw();
  });

  app.addEventListener('keydown',function(e){
    if(e.key==='Enter'&&e.target.isContentEditable){e.preventDefault();e.target.blur()}
  });
  app.addEventListener('paste',function(e){
    if(!e.target.closest('[contenteditable]'))return;
    e.preventDefault();
    var text=(e.clipboardData||window.clipboardData).getData('text').replace(/\s+/g,' ');
    document.execCommand('insertText',false,text);
  });

  function setMsg(t){message=t;var el=document.getElementById('msg');if(el)el.textContent=t}

  render();
  if(typeof ResizeObserver!=='undefined') new ResizeObserver(draw).observe(app);
  window.addEventListener('load',draw);
  if(document.fonts&&document.fonts.ready) document.fonts.ready.then(draw);
  try{matchMedia('(prefers-color-scheme: dark)').addEventListener('change',draw)}catch(_){}
})();
