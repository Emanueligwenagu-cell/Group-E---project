function renderLogin(){
  const d=state.loginData;
  const r=state.regData;
  return `
  <div class="login-outer" style="min-height:calc(100vh - 64px)">
    <div class="login-panel">
      <div class="login-panel-blur1"></div><div class="login-panel-blur2"></div>
      <div class="login-panel-content">
        <div class="login-panel-logo">🍲</div>
        <div class="login-panel-brand">Ibhotwe</div>
        <div class="login-panel-sub">Your campus food companion</div>
        <ul class="login-panel-features">
          ${[['🏫','Browse vendors across campus'],['🛒','Order with one click'],['📦','Track your order in real-time'],['🎁','Earn loyalty points on every order'],['🎮','Play games while you wait!']].map(f=>`<li class="login-panel-feature"><span>${f[0]}</span><span>${f[1]}</span></li>`).join('')}
        </ul>
      </div>
    </div>
    <div class="login-right">
      <div class="login-card">
        <div class="login-logo-mobile">
          <div class="icon">🍲</div>
          <div class="brand">Ibhotwe</div>
        </div>
        <div class="auth-tabs">
          <button class="auth-tab${state.loginTab==='login'?' active':''}" onclick="setAuthTab('login')">Sign In</button>
          <button class="auth-tab${state.loginTab==='register'?' active':''}" onclick="setAuthTab('register')">Register</button>
        </div>
        ${state.authError?`<div class="auth-error">⚠ ${escHtml(state.authError)}</div>`:''}
        ${state.loginTab==='login'?`
        <div id="login-form">
          <div class="form-group mb-12">
            <label class="label">Student Email</label>
            <div class="input-wrap">
              <span class="icon">✉</span>
              <input class="input has-icon" id="lin-email" type="email" placeholder="student@university.ac.za" value="${escHtml(d.email)}"/>
            </div>
          </div>
          <div class="form-group mb-8">
            <label class="label">Password</label>
            <div class="input-wrap">
              <span class="icon">🔒</span>
              <input class="input has-icon has-icon-r" id="lin-pw" type="${state.showPw?'text':'password'}" placeholder="••••••••" value="${escHtml(d.password)}"/>
              <button class="field-icon-r" onclick="togglePw()">${state.showPw?'🙈':'👁'}</button>
            </div>
          </div>
          <div class="forgot-link"><a href="#">Forgot password?</a></div>
          <button class="btn btn-primary-grad btn-full btn-lg" onclick="doLogin()">Sign In</button>
          <div class="demo-hint">Demo: Any email + password works</div>
        </div>`:`
        <div id="reg-form">
          <div class="form-group mb-12">
            <label class="label">Full Name *</label>
            <div class="input-wrap">
              <span class="icon">👤</span>
              <input class="input has-icon" id="reg-name" type="text" placeholder="Your full name" value="${escHtml(r.name)}"/>
            </div>
          </div>
          <div class="form-group mb-12">
            <label class="label">Student Email *</label>
            <div class="input-wrap">
              <span class="icon">✉</span>
              <input class="input has-icon" id="reg-email" type="email" placeholder="student@university.ac.za" value="${escHtml(r.email)}"/>
            </div>
          </div>
          <div class="form-row mb-12">
            <div class="form-group">
              <label class="label">Student Number</label>
              <input class="input" id="reg-stnum" type="text" placeholder="STU2024..." value="${escHtml(r.studentNumber)}"/>
            </div>
            <div class="form-group">
              <label class="label">Campus</label>
              <select class="select" id="reg-campus">
                ${['Main Campus','Science & Engineering','Medical Campus','Arts & Design','Off-Campus Res'].map(c=>`<option${r.campus===c?' selected':''}>${c}</option>`).join('')}
              </select>
            </div>
          </div>
          <div class="form-group mb-12">
            <label class="label">Password *</label>
            <div class="input-wrap">
              <span class="icon">🔒</span>
              <input class="input has-icon has-icon-r" id="reg-pw" type="${state.showPw?'text':'password'}" placeholder="Create a password" value="${escHtml(r.password)}"/>
              <button class="field-icon-r" onclick="togglePw()">${state.showPw?'🙈':'👁'}</button>
            </div>
          </div>
          <p class="auth-agree">By registering you agree to our Terms and Privacy Policy. New accounts receive 50 free loyalty points! 🎁</p>
          <button class="btn btn-primary-grad btn-full btn-lg" onclick="doRegister()">Create Account</button>
        </div>`}
      </div>
    </div>
  </div>`;
}

function bindLogin(){
  const linEmail=document.getElementById('lin-email');
  if(linEmail) linEmail.addEventListener('keydown',e=>{if(e.key==='Enter') doLogin();});
}
function setAuthTab(t){state.loginTab=t;state.authError='';refreshLogin();}
function togglePw(){state.showPw=!state.showPw;refreshLogin();}
function doLogin(){
  const email=document.getElementById('lin-email')?.value||'';
  const pw=document.getElementById('lin-pw')?.value||'';
  if(!email||!pw){state.authError='Please fill in all fields';refreshLogin();return;}
  state.user={name:'Khulekani Sikhosana',email,campus:'Main Campus',studentNumber:'STU20240012',loyaltyPoints:340};
  state.authError='';
  updateProfileUI();
  navigate('home');
}
function doRegister(){
  const name=document.getElementById('reg-name')?.value||'';
  const email=document.getElementById('reg-email')?.value||'';
  const pw=document.getElementById('reg-pw')?.value||'';
  if(!name||!email||!pw){state.authError='Please fill in all required fields';refreshLogin();return;}
  state.user={
    name,email,campus:document.getElementById('reg-campus')?.value||'Main Campus',
    studentNumber:document.getElementById('reg-stnum')?.value||'STU'+Date.now(),loyaltyPoints:50
  };
  state.authError='';
  updateProfileUI();
  navigate('home');
}
function handleLogout(){
  state.user=null;closeDropdown();
  updateProfileUI();
  navigate('home');
}
function updateProfileUI(){
  const btn=document.getElementById('profile-btn');
  const name=document.getElementById('dd-name');
  const email=document.getElementById('dd-email');
  const pts=document.getElementById('dd-pts');
  if(state.user){
    if(btn) btn.textContent=state.user.name[0].toUpperCase();
    if(name) name.textContent=state.user.name;
    if(email) email.textContent=state.user.email;
    if(pts) pts.textContent=`⭐ ${state.user.loyaltyPoints} loyalty points`;
  } else {
    if(btn) btn.textContent='?';
  }
}
function refreshLogin(){
  const el=document.getElementById('login-page');
  el.innerHTML=renderLogin();bindLogin();
}

