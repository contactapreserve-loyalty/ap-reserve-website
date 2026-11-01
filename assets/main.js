(()=>{
  const menuButton=document.querySelector('.mobile-toggle');
  const mobileNav=document.getElementById('mobile-nav');
  if(menuButton&&mobileNav){
    const close=()=>{menuButton.setAttribute('aria-expanded','false');menuButton.setAttribute('aria-label','Open navigation');mobileNav.hidden=true;};
    menuButton.addEventListener('click',()=>{const open=menuButton.getAttribute('aria-expanded')==='true';menuButton.setAttribute('aria-expanded',String(!open));menuButton.setAttribute('aria-label',open?'Open navigation':'Close navigation');mobileNav.hidden=open;});
    mobileNav.addEventListener('click',e=>{if(e.target.closest('a'))close();});
    document.addEventListener('keydown',e=>{if(e.key==='Escape')close();});
    document.addEventListener('click',e=>{if(!mobileNav.hidden&&!mobileNav.contains(e.target)&&!menuButton.contains(e.target))close();});
  }
  const year=document.getElementById('year');if(year)year.textContent=String(new Date().getFullYear());
  const tabs=[...document.querySelectorAll('[data-legal-tab]')];
  const panels=[...document.querySelectorAll('[data-legal-panel]')];
  if(tabs.length){
    const setTab=(name,scroll)=>{
      const chosen=name==='terms'?'terms':'privacy';
      tabs.forEach(tab=>{const active=tab.dataset.legalTab===chosen;tab.setAttribute('aria-selected',String(active));tab.tabIndex=active?0:-1;});
      panels.forEach(panel=>{panel.hidden=panel.dataset.legalPanel!==chosen;panel.classList.toggle('is-active',!panel.hidden);});
      if(scroll)document.querySelector('.legal-switch')?.scrollIntoView({block:'start'});
    };
    tabs.forEach((tab,i)=>{
      tab.addEventListener('click',()=>{const name=tab.dataset.legalTab;history.replaceState(null,'','#'+name);setTab(name,false);});
      tab.addEventListener('keydown',e=>{if(e.key==='ArrowRight'||e.key==='ArrowLeft'){e.preventDefault();const next=tabs[(i+(e.key==='ArrowRight'?1:-1)+tabs.length)%tabs.length];next.focus();next.click();}});
    });
    const routeHash=()=>{const hash=decodeURIComponent(location.hash.slice(1));setTab(hash==='terms'||hash.startsWith('terms-')?'terms':'privacy',false);if(hash.includes('-'))requestAnimationFrame(()=>document.getElementById(hash)?.scrollIntoView());};
    window.addEventListener('hashchange',routeHash);routeHash();
  }
  const toc=[...document.querySelectorAll('.toc-link')];
  if('IntersectionObserver' in window && toc.length){
    const headings=[...document.querySelectorAll('.policy-prose h2')];
    const watcher=new IntersectionObserver(entries=>{for(const entry of entries){if(entry.isIntersecting){toc.forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+entry.target.id));}}},{rootMargin:'-12% 0px -76% 0px',threshold:0});
    headings.forEach(h=>watcher.observe(h));
  }
})();
