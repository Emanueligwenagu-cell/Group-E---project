function toggleMobileMenu(){
  document.getElementById('mobile-menu').classList.toggle('open');
}
function closeMobileMenu(){
  document.getElementById('mobile-menu').classList.remove('open');
}
function toggleProfileDropdown(){
  const dd=document.getElementById('profile-dropdown');
  dd.style.display=dd.style.display==='none'?'block':'none';
}
function closeDropdown(){
  const dd=document.getElementById('profile-dropdown');
  if(dd) dd.style.display='none';
}

function refreshCurrentPage(){
  renderPage(state.currentPage);
}

/* ═══════════════════════════════════════
   CLICK OUTSIDE – close dropdown
═══════════════════════════════════════ */
document.addEventListener('click',function(e){
  const wrap=document.querySelector('.profile-wrap');
  if(wrap&&!wrap.contains(e.target)) closeDropdown();
});

