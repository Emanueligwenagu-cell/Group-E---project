function navigate(page){
  // close mobile menu and dropdown
  closeMobileMenu();
  closeDropdown();
  // Hide all pages
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  document.getElementById(page+'-page').classList.add('active');
  // Update nav active link
  document.querySelectorAll('.nav-link').forEach(l=>{
    l.classList.toggle('active', l.dataset.page===page);
  });
  state.currentPage = page;
  renderPage(page);
  window.scrollTo(0,0);
}

function renderPage(page){
  const el = document.getElementById(page+'-page');
  switch(page){
    case 'home':   el.innerHTML = renderHome(); bindHome(); break;
    case 'browse': el.innerHTML = renderBrowse(); bindBrowse(); break;
    case 'cart':   el.innerHTML = renderCart(); bindCart(); break;
    case 'orders': el.innerHTML = renderOrders(); bindOrders(); break;
    case 'vendor': el.innerHTML = renderVendor(); bindVendor(); break;
    case 'login':  el.innerHTML = renderLogin(); bindLogin(); break;
    case 'game':   el.innerHTML = renderGame(); bindGame(); break;
  }
  updateNavCart();
}

function updateNavCart(){
  const cnt = cartCount();
  const badge = document.getElementById('cart-badge');
  if(badge){
    badge.style.display = cnt>0?'flex':'none';
    badge.textContent = cnt;
  }
}

