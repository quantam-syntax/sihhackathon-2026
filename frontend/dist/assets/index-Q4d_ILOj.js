(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))t(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&t(o)}).observe(document,{childList:!0,subtree:!0});function a(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function t(s){if(s.ep)return;s.ep=!0;const n=a(s);fetch(s.href,n)}})();class D{constructor(){this.routes=[],this.currentRoute=null,this._onHashChange=this._onHashChange.bind(this)}on(i,a){const t=this._patternToRegex(i),s=this._extractParamNames(i);return this.routes.push({pattern:i,regex:t,paramNames:s,handler:a}),this}start(){window.addEventListener("hashchange",this._onHashChange),this._onHashChange()}stop(){window.removeEventListener("hashchange",this._onHashChange)}navigate(i){window.location.hash="#"+i}getCurrentPath(){return window.location.hash.slice(1)||"/"}_onHashChange(){const i=this.getCurrentPath();for(const a of this.routes){const t=i.match(a.regex);if(t){const s={};a.paramNames.forEach((n,o)=>{s[n]=t[o+1]}),this.currentRoute={pattern:a.pattern,params:s,path:i},a.handler(s);return}}this.navigate("/login/officer")}_patternToRegex(i){const a=i.replace(/:[a-zA-Z]+/g,"([^/]+)").replace(/\//g,"\\/");return new RegExp("^"+a+"$")}_extractParamNames(i){return(i.match(/:([a-zA-Z]+)/g)||[]).map(t=>t.slice(1))}}const R={officer:{title:"Field Inspection",subtitle:"Scan products. Enforce compliance.",badge:"Field Inspector Portal",badgeIcon:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>',visualTitle:"Inspect Anywhere,<br>Anytime",visualSubtitle:"Mobile-first compliance scanning for field inspectors. Capture labels, detect violations, generate reports — even offline.",visualGraphic:N(),gradientFrom:"hsl(215, 65%, 25%)",gradientTo:"hsl(200, 70%, 18%)",accentColor:"hsl(200, 80%, 60%)",defaultUser:"rajesh.kumar"},supervisor:{title:"Enforcement Operations",subtitle:"Monitor teams. Review inspections.",badge:"Supervisor Portal",badgeIcon:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',visualTitle:"Command Your<br>Enforcement Network",visualSubtitle:"Track field officers, review inspections, monitor compliance rates, and manage enforcement across your jurisdiction.",visualGraphic:H(),gradientFrom:"hsl(230, 50%, 22%)",gradientTo:"hsl(245, 45%, 18%)",accentColor:"hsl(250, 70%, 65%)",defaultUser:"priya.menon"},analyst:{title:"Market Intelligence",subtitle:"Analyze trends. Drive enforcement.",badge:"Regulatory Analyst Portal",badgeIcon:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>',visualTitle:"Intelligence-Driven<br>Enforcement",visualSubtitle:"Regional compliance analytics, violation trends, and strategic insights for consumer protection policy.",visualGraphic:V(),gradientFrom:"hsl(170, 45%, 18%)",gradientTo:"hsl(195, 50%, 15%)",accentColor:"hsl(170, 60%, 55%)",defaultUser:"arun.nair"}};function N(){return`
    <div class="login-visual__graphic">
      <div class="login-visual__floating-card" style="animation-delay:0s">
        <div class="login-visual__card-dot" style="background:hsl(152,55%,48%)"></div>
        <div class="login-visual__card-line" style="width:70%"></div>
        <div class="login-visual__card-line" style="width:50%"></div>
      </div>
      <div class="login-visual__floating-card login-visual__floating-card--offset" style="animation-delay:1s">
        <div class="login-visual__card-dot" style="background:hsl(0,72%,55%)"></div>
        <div class="login-visual__card-line" style="width:60%"></div>
        <div class="login-visual__card-line" style="width:80%"></div>
      </div>
      <div class="login-visual__scan-ring">
        <svg viewBox="0 0 120 120" width="120" height="120">
          <circle cx="60" cy="60" r="50" fill="none" stroke="rgba(255,255,255,0.08)" stroke-width="2"/>
          <circle cx="60" cy="60" r="50" fill="none" stroke="rgba(255,255,255,0.3)" stroke-width="2" stroke-dasharray="80 240" class="login-visual__ring-spin"/>
          <circle cx="60" cy="60" r="35" fill="none" stroke="rgba(255,255,255,0.06)" stroke-width="1.5"/>
          <path d="M50 45 L50 40 L55 40 M70 40 L75 40 L75 45 M75 75 L75 80 L70 80 M55 80 L50 80 L50 75" fill="none" stroke="rgba(255,255,255,0.5)" stroke-width="2" stroke-linecap="round"/>
        </svg>
      </div>
    </div>
  `}function H(){return`
    <div class="login-visual__graphic">
      <div class="login-visual__network">
        <svg viewBox="0 0 200 160" width="200" height="160">
          <line x1="100" y1="40" x2="50" y2="100" stroke="rgba(255,255,255,0.12)" stroke-width="1.5"/>
          <line x1="100" y1="40" x2="150" y2="100" stroke="rgba(255,255,255,0.12)" stroke-width="1.5"/>
          <line x1="100" y1="40" x2="100" y2="110" stroke="rgba(255,255,255,0.12)" stroke-width="1.5"/>
          <line x1="50" y1="100" x2="150" y2="100" stroke="rgba(255,255,255,0.06)" stroke-width="1" stroke-dasharray="4 4"/>
          <circle cx="100" cy="40" r="18" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.25)" stroke-width="1.5" class="login-visual__node-pulse"/>
          <circle cx="50" cy="100" r="12" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.2)" stroke-width="1.5"/>
          <circle cx="100" cy="110" r="12" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.2)" stroke-width="1.5"/>
          <circle cx="150" cy="100" r="12" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.2)" stroke-width="1.5"/>
          <text x="100" y="44" text-anchor="middle" fill="rgba(255,255,255,0.6)" font-size="12" font-weight="600">S</text>
          <text x="50" y="104" text-anchor="middle" fill="rgba(255,255,255,0.4)" font-size="9">F1</text>
          <text x="100" y="114" text-anchor="middle" fill="rgba(255,255,255,0.4)" font-size="9">F2</text>
          <text x="150" y="104" text-anchor="middle" fill="rgba(255,255,255,0.4)" font-size="9">F3</text>
        </svg>
      </div>
    </div>
  `}function V(){return`
    <div class="login-visual__graphic">
      <div class="login-visual__chart-anim">
        <svg viewBox="0 0 200 120" width="200" height="120">
          <line x1="20" y1="100" x2="180" y2="100" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>
          <line x1="20" y1="100" x2="20" y2="10" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>
          <polyline points="20,80 50,65 80,70 110,45 140,50 170,25" fill="none" stroke="rgba(255,255,255,0.3)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="login-visual__line-draw"/>
          <polyline points="20,80 50,65 80,70 110,45 140,50 170,25 170,100 20,100" fill="url(#areaGrad)" opacity="0.15" class="login-visual__area-fill"/>
          <defs><linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="white"/><stop offset="100%" stop-color="white" stop-opacity="0"/></linearGradient></defs>
          ${[{x:20,y:80},{x:50,y:65},{x:80,y:70},{x:110,y:45},{x:140,y:50},{x:170,y:25}].map((e,i)=>`
            <circle cx="${e.x}" cy="${e.y}" r="3" fill="rgba(255,255,255,0.5)" class="login-visual__data-dot" style="animation-delay:${i*.15}s"/>
          `).join("")}
        </svg>
      </div>
    </div>
  `}function G(){return`
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <rect width="40" height="40" rx="10" fill="url(#logoGrad)"/>
      <path d="M11 28V14L17 22L23 14V28" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M26 18L30 14L34 18" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" opacity="0.6"/>
      <defs>
        <linearGradient id="logoGrad" x1="0" y1="0" x2="40" y2="40">
          <stop offset="0%" stop-color="hsl(215, 65%, 50%)"/>
          <stop offset="100%" stop-color="hsl(215, 70%, 35%)"/>
        </linearGradient>
      </defs>
    </svg>
  `}function U(e,i){const a=R[e]||R.officer;return`
    <div class="login-page" style="--login-gradient-from:${a.gradientFrom};--login-gradient-to:${a.gradientTo};--login-accent:${a.accentColor}">
      <div class="login-page__bg">
        <div class="login-page__orb login-page__orb--1"></div>
        <div class="login-page__orb login-page__orb--2"></div>
        <div class="login-page__grid-pattern"></div>
      </div>

      <div class="login-page__visual">
        <div class="login-page__visual-content">
          ${a.visualGraphic}
          <h1 class="login-page__visual-title">${a.visualTitle}</h1>
          <p class="login-page__visual-subtitle">${a.visualSubtitle}</p>
          <div class="login-page__visual-features">
            <div class="login-page__feature">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
              AI-powered analysis
            </div>
            <div class="login-page__feature">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
              Rule-based compliance
            </div>
            <div class="login-page__feature">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
              Offline-capable
            </div>
          </div>
        </div>
      </div>

      <div class="login-page__panel">
        <div class="login-card">
          <div class="login-card__brand">
            <div class="login-card__logo">${G()}</div>
            <div class="login-card__app-name">MetraScan</div>
            <div class="login-card__app-subtitle">AI-Powered Legal Metrology Inspection</div>
            <div class="login-card__role-badge">${a.badgeIcon} ${a.badge}</div>
          </div>

          <form class="login-card__form" id="login-form">
            <div id="login-error"></div>

            <div class="input-group">
              <label class="input-group__label" for="login-userid">Official ID / Username</label>
              <div class="input-group__input-wrap">
                <svg class="input-group__icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                <input class="input-group__input input-group__input--icon" type="text" id="login-userid"
                  placeholder="e.g. ${a.defaultUser}" autocomplete="username" required />
              </div>
            </div>

            <div class="input-group">
              <label class="input-group__label" for="login-password">Password / PIN</label>
              <div class="input-group__input-wrap">
                <svg class="input-group__icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                <input class="input-group__input input-group__input--icon" type="password" id="login-password"
                  placeholder="Enter your password" autocomplete="current-password" required />
              </div>
              <div style="display:flex;justify-content:space-between;align-items:center;margin-top:var(--space-sm)">
                <label class="login-card__remember">
                  <input type="checkbox" id="login-remember" /> Remember this device
                </label>
                <span class="login-card__forgot" tabindex="0">Forgot?</span>
              </div>
            </div>

            <button type="submit" class="btn btn--primary btn--large btn--full login-card__submit" id="login-submit">
              <span>Sign In</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </button>
          </form>

          <div class="login-card__divider"><span>Switch Portal</span></div>

          <div class="login-card__role-switcher">
            ${e!=="officer"?`<a href="#/login/officer" class="login-card__role-link">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
              Field Officer
            </a>`:""}
            ${e!=="supervisor"?`<a href="#/login/supervisor" class="login-card__role-link">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              Supervisor
            </a>`:""}
            ${e!=="analyst"?`<a href="#/login/analyst" class="login-card__role-link">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>
              Analyst
            </a>`:""}
          </div>

          <div class="login-card__footer">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="opacity:0.4"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            Ministry of Consumer Affairs, Govt. of India
          </div>
        </div>
      </div>
    </div>
  `}function K(e,i){const a=document.getElementById("login-form");a&&a.addEventListener("submit",t=>{if(t.preventDefault(),!document.getElementById("login-userid").value.trim()){X("Please enter your Official ID.");return}const n=document.getElementById("login-submit");n.querySelector("span").textContent="Signing in…",n.disabled=!0,n.classList.add("login-card__submit--loading"),setTimeout(()=>{i(e)},800)})}function X(e){const i=document.getElementById("login-error");i&&(i.innerHTML=`<div class="login-card__error">
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>
    ${e}
  </div>`,setTimeout(()=>{i.innerHTML=""},4e3))}const z={image_id:"img_0001",product_category:"packaged_food",compliance_status:"non_compliant",violations:[{field:"expiry_date",rule_reference:"Rule 6(1)(f), LMPC Rules 2011",severity:"major",description:"Best-before/expiry date missing on label"},{field:"manufacturer_address",rule_reference:"Rule 6(1)(a), LMPC Rules 2011",severity:"major",description:"Manufacturer address missing"}],compliant_fields:["mrp","net_quantity","manufacturer_name","consumer_care_contact","country_of_origin"],checked_at:"2026-09-01T18:30:00Z"},q={image_id:"img_0002",product_category:"cosmetics",compliance_status:"compliant",violations:[],compliant_fields:["mrp","net_quantity","manufacturer_name","manufacturer_address","expiry_date","consumer_care_contact","country_of_origin"],checked_at:"2026-09-01T19:00:00Z"},C={officer:{id:"OFF-2024-0047",name:"Rajesh Kumar",designation:"Field Inspector",jurisdiction:"Thiruvananthapuram South",department:"Dept. of Legal Metrology, Kerala",avatar:"RK",phone:"+91 94XXX XXXXX"},supervisor:{name:"Priya Menon",jurisdiction:"Thiruvananthapuram District",avatar:"PM"},analyst:{name:"Dr. Arun Nair",jurisdiction:"Kerala State",avatar:"AN"}},Z=[{id:"STR-001",name:"Shree Krishna Supermarket",location:"MG Road, Trivandrum",inspections:24,violations:8,compliance:67},{id:"STR-002",name:"Lulu Hypermarket",location:"Edapally, Kochi",inspections:42,violations:5,compliance:88},{id:"STR-003",name:"Margin Free Market",location:"Palayam, Trivandrum",inspections:18,violations:12,compliance:33},{id:"STR-004",name:"Reliance Fresh",location:"Kowdiar, Trivandrum",inspections:31,violations:3,compliance:90},{id:"STR-005",name:"Big Bazaar",location:"Technopark, Trivandrum",inspections:27,violations:9,compliance:67},{id:"STR-006",name:"Namdhari's Fresh",location:"Kazhakootam, Trivandrum",inspections:15,violations:2,compliance:87}],f=[{id:"OFF-001",name:"Rajesh Kumar",status:"active",inspections:47,violations:18,lastActive:"2 min ago"},{id:"OFF-002",name:"Anitha Pillai",status:"active",inspections:38,violations:12,lastActive:"15 min ago"},{id:"OFF-003",name:"Suresh Babu",status:"offline",inspections:29,violations:8,lastActive:"2 hrs ago"},{id:"OFF-004",name:"Lakshmi Devi",status:"active",inspections:52,violations:22,lastActive:"5 min ago"},{id:"OFF-005",name:"Vijay Mohan",status:"syncing",inspections:19,violations:6,lastActive:"30 min ago"}];function Q(){const e=["Shree Krishna Supermarket","Lulu Hypermarket","Margin Free Market","Reliance Fresh","Big Bazaar","Namdhari's Fresh"],i=["MG Road, Trivandrum","Edapally, Kochi","Palayam, Trivandrum","Kowdiar, Trivandrum","Technopark, Trivandrum","Kazhakootam, Trivandrum"],a=["Rajesh Kumar","Anitha Pillai","Suresh Babu","Lakshmi Devi","Vijay Mohan"],t=["ABC Foods Wheat Flour 500g","Clean Home Floor Cleaner 500ml","Dairy Fresh Butter 100g","Sunrise Premium Basmati Rice 1kg","Lux Body Wash 250ml","LG 32in TV"],s=["packaged_food","household","packaged_food","packaged_food","cosmetics","electronics"],n=["expiry_date","manufacturer_address","unit_sale_price","net_quantity","consumer_care_contact","manufacturing_date"],o=[{id:"INS-2026-0147",date:"2026-09-01T18:30:00Z",store:"Shree Krishna Supermarket",location:"MG Road, Trivandrum",product:"ABC Foods Wheat Flour 500g",category:"packaged_food",officer:"Rajesh Kumar",status:"non_compliant",violations:2,violatedFields:["expiry_date","manufacturer_address"],report:z},{id:"INS-2026-0146",date:"2026-09-01T17:15:00Z",store:"Lulu Hypermarket",location:"Edapally, Kochi",product:"Fresh Glow Face Cream 50ml",category:"cosmetics",officer:"Rajesh Kumar",status:"compliant",violations:0,violatedFields:[],report:q}],h=new Date("2026-09-01T18:30:00Z");for(let g=2;g<250;g++){const _=Math.floor(Math.random()*e.length),$=Math.floor(Math.random()*t.length),I=new Date(h.getTime()-Math.random()*7*24*60*60*1e3);let d="compliant";g<95?d="non_compliant":g>=95&&g<110&&(d="needs_review");let u=0,p=[];d==="non_compliant"&&(u=Math.floor(Math.random()*3)+1,p=[...n].sort(()=>.5-Math.random()).slice(0,u)),o.push({id:`INS-2026-${String(1e3+g).slice(1)}`,date:I.toISOString(),store:e[_],location:i[_],product:t[$],category:s[$],officer:a[Math.floor(Math.random()*a.length)],status:d,violations:u,violatedFields:p})}return o.sort((g,_)=>new Date(_.date)-new Date(g.date))}const b=Q(),r=b.reduce((e,i)=>{e.total_scans++,e[i.status]++,i.status==="non_compliant"&&(e.violations_by_category[i.category]=(e.violations_by_category[i.category]||0)+1,i.violatedFields.forEach(t=>{e.violations_by_field[t]=(e.violations_by_field[t]||0)+1}));const a=i.date.split("T")[0];return e.trend_map[a]||(e.trend_map[a]={date:a,scans:0,violations:0}),e.trend_map[a].scans++,i.status==="non_compliant"&&e.trend_map[a].violations++,e},{total_scans:0,compliant:0,non_compliant:0,needs_review:0,violations_by_field:{},violations_by_category:{},trend_map:{}});r.trend_over_time=Object.values(r.trend_map).sort((e,i)=>e.date.localeCompare(i.date));delete r.trend_map;const M=[{name:"Thiruvananthapuram",inspections:145,violations:52,compliance:64,risk:"high"},{name:"Kochi",inspections:120,violations:28,compliance:77,risk:"medium"},{name:"Kozhikode",inspections:85,violations:15,compliance:82,risk:"low"},{name:"Thrissur",inspections:68,violations:22,compliance:68,risk:"medium"},{name:"Kollam",inspections:42,violations:18,compliance:57,risk:"high"},{name:"Kannur",inspections:55,violations:8,compliance:85,risk:"low"}],B=[{type:"Missing Expiry Date",count:40,percentage:31,trend:"up"},{type:"No Manufacturer Address",count:25,percentage:19,trend:"stable"},{type:"Missing Unit Sale Price",count:18,percentage:14,trend:"down"},{type:"Incorrect Net Quantity",count:12,percentage:9,trend:"up"},{type:"No Consumer Care Info",count:8,percentage:6,trend:"stable"},{type:"Missing Manufacturing Date",count:5,percentage:4,trend:"down"}],P={mrp:"MRP",net_quantity:"Net Quantity",manufacturer_name:"Manufacturer Name",manufacturer_address:"Manufacturer Address",expiry_date:"Expiry Date",manufacturing_date:"Manufacturing Date",consumer_care_contact:"Consumer Care Contact",unit_sale_price:"Unit Sale Price",country_of_origin:"Country of Origin"},W={compliant:"COMPLIANT",non_compliant:"NON-COMPLIANT",needs_review:"NEEDS REVIEW"},Y={major:"Major Violation",minor:"Minor Violation",info:"Information"},A={packaged_food:"Packaged Food",cosmetics:"Cosmetics",electronics:"Electronics",household:"Household Goods"};function O(e){return P[e]?P[e]:e.split("_").map(i=>i.charAt(0).toUpperCase()+i.slice(1)).join(" ")}function J(e){return W[e]||e.toUpperCase().replace(/_/g,"-")}function ee(e){return Y[e]||e.charAt(0).toUpperCase()+e.slice(1)}function F(e){return A[e]?A[e]:e.split("_").map(i=>i.charAt(0).toUpperCase()+i.slice(1)).join(" ")}function y(e){if(!e)return"—";try{const i=new Date(e);return isNaN(i.getTime())?"—":i.toLocaleString("en-IN",{month:"short",day:"numeric",year:"numeric",hour:"numeric",minute:"2-digit",hour12:!0})}catch{return"—"}}function ae(e){return e===0?"No issues found":e===1?"1 issue found":`${e} issues found`}const ie=["image/jpeg","image/png","image/webp","image/heif","image/heic"],te=[".jpg",".jpeg",".png",".webp",".heif",".heic"],se=10*1024*1024;function ne(e){if(!e)return{valid:!1,error:"Please select or take a photo first."};const i=ie.includes(e.type),a=e.name.toLowerCase(),t=te.some(s=>a.endsWith(s));return!i&&!t?{valid:!1,error:"Please select a JPG, PNG, or HEIF image."}:e.size>se?{valid:!1,error:"This image is too large (max 10 MB). Please try a smaller photo."}:{valid:!0,error:null}}const v=C.officer;function k(e){return`
    <div class="field-page">
      <header class="field-header">
        <div class="field-header__logo">M</div>
        <div class="field-header__title">MetraScan</div>
        <div class="field-header__actions">
          <div class="sync-status sync-status--online">
            <span class="status-dot status-dot--online"></span>
            Online
          </div>
          <div class="avatar" title="${v.name}">${v.avatar}</div>
        </div>
      </header>
      <div class="field-content" id="field-view"></div>
      <nav class="field-nav">
        <a href="#/officer/dashboard" class="field-nav__item ${e==="dashboard"?"field-nav__item--active":""}">
          <span class="field-nav__icon">🏠</span> Home
        </a>
        <a href="#/officer/inspect" class="field-nav__item ${e==="inspect"?"field-nav__item--active":""}">
          <span class="field-nav__icon">📷</span> Inspect
        </a>
        <a href="#/officer/history" class="field-nav__item ${e==="history"?"field-nav__item--active":""}">
          <span class="field-nav__icon">📋</span> History
        </a>
        <a href="#/officer/profile" class="field-nav__item ${e==="profile"?"field-nav__item--active":""}">
          <span class="field-nav__icon">👤</span> Profile
        </a>
      </nav>
    </div>
  `}function oe(){const e=b.slice(0,3),i=b.filter(a=>a.officer===v.name);return`
    <div class="fade-in">
      <div class="welcome-section">
        <h1 class="welcome-section__greeting">Good evening, ${v.name.split(" ")[0]}</h1>
        <p class="welcome-section__subtitle">${v.designation} · ${v.jurisdiction}</p>
      </div>

      <button class="new-inspection-cta" onclick="location.hash='#/officer/inspect'">
        <div class="new-inspection-cta__icon">📷</div>
        <div class="new-inspection-cta__text">
          <div class="new-inspection-cta__title">+ New Inspection</div>
          <div class="new-inspection-cta__subtitle">Capture a product label to check compliance</div>
        </div>
        <div class="new-inspection-cta__arrow">→</div>
      </button>

      <div class="dashboard-grid dashboard-grid--kpis" style="margin-bottom:var(--space-xl);grid-template-columns:repeat(2,1fr)">
        <div class="kpi-card fade-in stagger-1">
          <div class="kpi-card__icon" style="background:var(--color-primary-bg);color:var(--color-primary)">📋</div>
          <div class="kpi-card__label">Today's Scans</div>
          <div class="kpi-card__value">${i.length}</div>
        </div>
        <div class="kpi-card fade-in stagger-2">
          <div class="kpi-card__icon" style="background:var(--color-danger-bg);color:var(--color-danger)">⚠️</div>
          <div class="kpi-card__label">Violations Found</div>
          <div class="kpi-card__value">${i.reduce((a,t)=>a+t.violations,0)}</div>
        </div>
      </div>

      <div class="section-title">Recent Inspections</div>
      <div style="display:flex;flex-direction:column;gap:var(--space-sm)">
        ${e.map(a=>`
          <div class="inspection-card fade-in" onclick="location.hash='#/officer/result/${a.id}'">
            <div class="inspection-card__status-bar inspection-card__status-bar--${a.status==="compliant"?"pass":"fail"}"></div>
            <div class="inspection-card__body">
              <div class="inspection-card__title">${a.product}</div>
              <div class="inspection-card__meta">
                <span>${a.store}</span>
                <span>·</span>
                <span>${y(a.date)}</span>
              </div>
            </div>
            <span class="badge badge--${a.status==="compliant"?"success":"danger"}" style="align-self:center">
              ${a.status==="compliant"?"✓ Pass":`✕ ${a.violations} issue${a.violations!==1?"s":""}`}
            </span>
          </div>
        `).join("")}
      </div>
    </div>
  `}function re(){return`
    <div class="fade-in">
      <div style="margin-bottom:var(--space-lg)">
        <h1 class="upload-heading">New Inspection</h1>
        <p class="upload-description">Capture or upload a product label photo to check Legal Metrology compliance.</p>
        <div style="display:flex;gap:var(--space-md);margin-bottom:var(--space-md)">
          <div class="card" style="flex:1;text-align:center;padding:var(--space-md)">
            <div style="font-size:var(--font-size-xs);color:var(--color-text-muted)">Case ID</div>
            <div style="font-size:var(--font-size-sm);font-weight:600;font-family:var(--font-mono)">INS-2026-0148</div>
          </div>
          <div class="card" style="flex:1;text-align:center;padding:var(--space-md)">
            <div style="font-size:var(--font-size-xs);color:var(--color-text-muted)">Date</div>
            <div style="font-size:var(--font-size-sm);font-weight:600">${new Date().toLocaleDateString("en-IN",{day:"numeric",month:"short",year:"numeric"})}</div>
          </div>
        </div>
      </div>

      <div id="upload-error" aria-live="polite"></div>

      <div id="upload-state-idle">
        <div class="upload-actions">
          <label class="upload-btn upload-btn--primary" id="btn-camera-new">
            <span class="upload-btn__icon">📷</span>
            <span class="upload-btn__text">Take Photo</span>
            <input type="file" id="input-camera-new" accept="image/*" capture="environment" class="sr-only" />
          </label>
          <label class="upload-btn upload-btn--secondary" id="btn-gallery-new">
            <span class="upload-btn__icon">🖼️</span>
            <span class="upload-btn__text">Choose from Gallery</span>
            <input type="file" id="input-gallery-new" accept="image/jpeg,image/png,image/webp" class="sr-only" />
          </label>
        </div>

        <div class="tips-card">
          <h2 class="tips-card__title">Tips for a good scan</h2>
          <ul class="tips-card__list">
            <li class="tips-card__item"><span class="tips-card__bullet">📐</span> Keep the entire label visible in frame</li>
            <li class="tips-card__item"><span class="tips-card__bullet">💡</span> Use good lighting — avoid shadows</li>
            <li class="tips-card__item"><span class="tips-card__bullet">🔍</span> Hold the camera steady to avoid blur</li>
            <li class="tips-card__item"><span class="tips-card__bullet">📏</span> Place a coin beside the product as size reference</li>
          </ul>
        </div>
      </div>

      <div id="upload-state-preview" hidden>
        <div class="preview-card">
          <div class="preview-card__image-wrap">
            <img id="preview-img" class="preview-card__image" src="" alt="Selected product label" />
          </div>
          <div class="preview-card__info">
            <span class="preview-card__status"><span aria-hidden="true">✓</span> Image ready</span>
            <span id="preview-fname" class="preview-card__filename"></span>
          </div>
        </div>
        <div class="preview-actions">
          <button type="button" id="btn-change" class="btn btn--outline">Change Image</button>
          <button type="button" id="btn-scan-now" class="btn btn--primary btn--large">🔍 Scan Label</button>
        </div>
      </div>

      <div id="upload-state-processing" hidden>
        <div class="processing-card">
          <h2 class="processing-card__title">Analyzing label…</h2>
          <p class="processing-card__subtitle">Please wait while we check compliance</p>
          <ol class="processing-steps" id="proc-steps">
            <li class="processing-step processing-step--pending" data-step="upload">
              <span class="processing-step__indicator"></span>
              <span class="processing-step__label">Image uploaded</span>
            </li>
            <li class="processing-step processing-step--pending" data-step="enhance">
              <span class="processing-step__indicator"></span>
              <span class="processing-step__label">Image enhanced</span>
            </li>
            <li class="processing-step processing-step--pending" data-step="ocr">
              <span class="processing-step__indicator"></span>
              <span class="processing-step__label">Reading package text</span>
            </li>
            <li class="processing-step processing-step--pending" data-step="check">
              <span class="processing-step__indicator"></span>
              <span class="processing-step__label">Checking legal requirements</span>
            </li>
            <li class="processing-step processing-step--pending" data-step="report">
              <span class="processing-step__indicator"></span>
              <span class="processing-step__label">Preparing compliance result</span>
            </li>
          </ol>
        </div>
      </div>
    </div>
  `}function le(e){let i=null;const a=document.getElementById("input-camera-new"),t=document.getElementById("input-gallery-new"),s=document.getElementById("upload-state-idle"),n=document.getElementById("upload-state-preview"),o=document.getElementById("upload-state-processing"),h=document.getElementById("btn-change"),g=document.getElementById("btn-scan-now"),_=document.getElementById("preview-img"),$=document.getElementById("preview-fname");if(!a)return;function I(d){var E;const u=(E=d.target.files)==null?void 0:E[0];if(!u)return;const{valid:p,error:L}=ne(u);if(!p){de(L),d.target.value="";return}i=u,_.src=URL.createObjectURL(u),$.textContent=u.name,s.hidden=!0,n.hidden=!1}a.addEventListener("change",I),t.addEventListener("change",I),h.addEventListener("click",()=>{i=null,_.src&&URL.revokeObjectURL(_.src),_.src="",n.hidden=!0,s.hidden=!1,a.value="",t.value=""}),g.addEventListener("click",async()=>{if(!i)return;n.hidden=!0,o.hidden=!1;const d=document.querySelectorAll("#proc-steps .processing-step"),u=[500,700,900,700,500];for(let p=0;p<d.length;p++)p>0&&(d[p-1].classList.remove("processing-step--active"),d[p-1].classList.add("processing-step--done")),d[p].classList.remove("processing-step--pending"),d[p].classList.add("processing-step--active"),await new Promise(L=>setTimeout(L,u[p]));d[d.length-1].classList.remove("processing-step--active"),d[d.length-1].classList.add("processing-step--done"),await new Promise(p=>setTimeout(p,400)),sessionStorage.setItem("scanResult",JSON.stringify(z)),e("INS-2026-0148")})}function de(e){const i=document.getElementById("upload-error");i&&(i.innerHTML=`<div class="error-message fade-in"><span class="error-message__icon">⚠️</span><span>${e}</span></div>`,setTimeout(()=>{i.innerHTML=""},5e3))}function ce(e){var n;const i=sessionStorage.getItem("scanResult"),a=i?JSON.parse(i):z,t=a.compliance_status==="compliant";return`
    <div class="fade-in">
      <div style="margin-bottom:var(--space-base)">
        <button class="btn btn--ghost btn--small" onclick="location.hash='#/officer/dashboard'">← Back to Dashboard</button>
      </div>

      <section class="compliance-header compliance-header--${t?"pass":"fail"}">
        <div class="compliance-header__icon">${t?"✅":"❌"}</div>
        <h1 class="compliance-header__status">${J(a.compliance_status)}</h1>
        <p class="compliance-header__count">${ae(a.violations.length)}</p>
        <span class="compliance-header__category">${F(a.product_category)}</span>
      </section>

      ${a.violations.length>0?`
        <section class="violations-section">
          <h2 class="section-title">Violations</h2>
          <div class="violations-list">
            ${a.violations.map(o=>`
              <article class="violation-card">
                <div class="violation-card__header">
                  <span class="violation-card__icon">❌</span>
                  <h3 class="violation-card__field">${O(o.field)}</h3>
                </div>
                <p class="violation-card__description">${o.description}</p>
                <div class="violation-card__footer">
                  <span class="violation-card__severity violation-card__severity--${o.severity||"major"}">${ee(o.severity)}</span>
                  <span class="violation-card__rule">${o.rule_reference}</span>
                </div>
              </article>
            `).join("")}
          </div>
        </section>
      `:""}

      ${((n=a.compliant_fields)==null?void 0:n.length)>0?`
        <section class="compliant-section">
          <details class="compliant-details" open>
            <summary class="compliant-summary">
              <h2 class="section-title section-title--inline">Compliant Fields</h2>
              <span class="compliant-count">${a.compliant_fields.length} passed</span>
            </summary>
            <ul class="compliant-list">
              ${a.compliant_fields.map(o=>`
                <li class="compliant-item">
                  <span class="compliant-item__icon">✓</span>
                  <span class="compliant-item__label">${O(o)}</span>
                </li>
              `).join("")}
            </ul>
          </details>
        </section>
      `:""}

      <section class="metadata-section">
        <h2 class="section-title">Scan Details</h2>
        <dl class="metadata-list">
          <div class="metadata-item">
            <dt class="metadata-item__label">Inspection ID</dt>
            <dd class="metadata-item__value" style="font-family:var(--font-mono)">${e||a.image_id}</dd>
          </div>
          <div class="metadata-item">
            <dt class="metadata-item__label">Category</dt>
            <dd class="metadata-item__value">${F(a.product_category)}</dd>
          </div>
          <div class="metadata-item">
            <dt class="metadata-item__label">Checked</dt>
            <dd class="metadata-item__value">${y(a.checked_at)}</dd>
          </div>
          <div class="metadata-item">
            <dt class="metadata-item__label">Officer</dt>
            <dd class="metadata-item__value">${v.name}</dd>
          </div>
        </dl>
      </section>

      <div class="report-actions">
        <button class="btn btn--primary btn--large btn--full" id="btn-export-pdf">📄 Export PDF Report</button>
        <button class="btn btn--outline btn--full" onclick="location.hash='#/officer/inspect'">📷 New Inspection</button>
      </div>
    </div>
  `}function pe(){const e=document.getElementById("btn-export-pdf");e&&e.addEventListener("click",()=>{e.textContent="⏳ Generating…",e.disabled=!0,setTimeout(()=>{e.textContent="✓ PDF Downloaded",ue("Inspection report exported as PDF","success"),setTimeout(()=>{e.textContent="📄 Export PDF Report",e.disabled=!1},2e3)},1500)})}function ve(){return`
    <div class="fade-in">
      <h1 style="font-size:var(--font-size-xl);margin-bottom:var(--space-lg)">Inspection History</h1>
      <div style="display:flex;flex-direction:column;gap:var(--space-sm)">
        ${b.map(e=>`
          <div class="inspection-card" onclick="location.hash='#/officer/result/${e.id}'">
            <div class="inspection-card__status-bar inspection-card__status-bar--${e.status==="compliant"?"pass":"fail"}"></div>
            <div class="inspection-card__body">
              <div class="inspection-card__title">${e.product}</div>
              <div class="inspection-card__meta">
                <span>${e.store}</span> · <span>${y(e.date)}</span>
              </div>
            </div>
            <span class="badge badge--${e.status==="compliant"?"success":"danger"}" style="align-self:center">
              ${e.status==="compliant"?"✓ Pass":`✕ ${e.violations}`}
            </span>
          </div>
        `).join("")}
      </div>
    </div>
  `}function ge(){return`
    <div class="fade-in">
      <div style="text-align:center;margin-bottom:var(--space-2xl)">
        <div class="avatar avatar--lg" style="margin:0 auto var(--space-md);width:64px;height:64px;font-size:var(--font-size-xl)">${v.avatar}</div>
        <h1 style="font-size:var(--font-size-xl)">${v.name}</h1>
        <p style="color:var(--color-text-muted);font-size:var(--font-size-sm)">${v.designation}</p>
        <div class="badge badge--info" style="margin-top:var(--space-sm)">${v.id}</div>
      </div>
      <div class="card" style="margin-bottom:var(--space-md)">
        <dl class="metadata-list" style="border:none">
          <div class="metadata-item"><dt class="metadata-item__label">Department</dt><dd class="metadata-item__value">${v.department}</dd></div>
          <div class="metadata-item"><dt class="metadata-item__label">Jurisdiction</dt><dd class="metadata-item__value">${v.jurisdiction}</dd></div>
          <div class="metadata-item"><dt class="metadata-item__label">Phone</dt><dd class="metadata-item__value">${v.phone}</dd></div>
        </dl>
      </div>
      <button class="btn btn--outline btn--full" onclick="location.hash='#/login/officer'" style="margin-top:var(--space-lg)">Sign Out</button>
    </div>
  `}function ue(e,i="info"){const a=document.getElementById("toast-container");if(!a)return;const t=document.createElement("div");t.className=`toast toast--${i}`,t.textContent=e,a.appendChild(t),setTimeout(()=>{t.remove()},3500)}const S=C.supervisor;function w(e){return`
    <div class="app-shell">
      <aside class="app-sidebar" id="app-sidebar">
        <div class="app-sidebar__brand">
          <div class="app-sidebar__logo">M</div>
          <div>
            <div class="app-sidebar__name">MetraScan</div>
            <div class="app-sidebar__role">Supervisor Portal</div>
          </div>
        </div>

        <nav class="app-sidebar__nav">
          <div class="app-sidebar__section-label">Operations</div>
          <a href="#/supervisor/dashboard" class="sidebar-link ${e==="dashboard"?"sidebar-link--active":""}">
            <span class="sidebar-link__icon">📊</span> Overview
          </a>
          <a href="#/supervisor/inspections" class="sidebar-link ${e==="inspections"?"sidebar-link--active":""}">
            <span class="sidebar-link__icon">📋</span> Inspections
            <span class="sidebar-link__badge">3</span>
          </a>
          <a href="#/supervisor/officer-tracking" class="sidebar-link ${e==="officers"?"sidebar-link--active":""}">
            <span class="sidebar-link__icon">👥</span> Field Officers
          </a>
          <a href="#/supervisor/stores" class="sidebar-link ${e==="stores"?"sidebar-link--active":""}">
            <span class="sidebar-link__icon">🏪</span> Store History
          </a>
          
          <div class="app-sidebar__section-label">Settings</div>
          <a href="#/supervisor/reports" class="sidebar-link ${e==="reports"?"sidebar-link--active":""}">
            <span class="sidebar-link__icon">📄</span> Export Reports
          </a>
        </nav>

        <div class="app-sidebar__footer">
          <div class="sidebar-user" onclick="location.hash='#/login/supervisor'">
            <div class="sidebar-user__avatar">${S.avatar}</div>
            <div class="sidebar-user__info">
              <div class="sidebar-user__name">${S.name}</div>
              <div class="sidebar-user__role">Sign Out</div>
            </div>
          </div>
        </div>
      </aside>

      <div class="sidebar-overlay" id="sidebar-overlay"></div>

      <main class="app-main">
        <header class="app-topbar">
          <div class="app-topbar__left">
            <button class="app-topbar__menu-btn" id="btn-toggle-sidebar">☰</button>
            <h1 class="app-topbar__title">${me(e)}</h1>
          </div>
          <div class="app-topbar__right">
            <span class="badge badge--neutral">${S.jurisdiction}</span>
          </div>
        </header>
        
        <div class="app-content" id="supervisor-view"></div>
      </main>
    </div>
  `}function me(e){return{dashboard:"Enforcement Operations",inspections:"Recent Inspections",officers:"Field Officer Tracking",stores:"Store History",reports:"Reports"}[e]||"Dashboard"}function _e(){const e=Math.round(r.compliant/r.total_scans*100),i=f.filter(a=>a.status==="active").length;return`
    <div class="fade-in">
      <div class="welcome-section">
        <h1 class="welcome-section__greeting">Enforcement Operations Center</h1>
        <p class="welcome-section__subtitle">${S.jurisdiction} · ${y(new Date().toISOString())}</p>
      </div>

      <div class="dashboard-grid dashboard-grid--kpis" style="margin-bottom:var(--space-2xl)">
        <div class="kpi-card fade-in stagger-1">
          <div class="kpi-card__icon" style="background:var(--color-primary-bg);color:var(--color-primary)">📋</div>
          <div class="kpi-card__label">Total Inspections</div>
          <div class="kpi-card__value">${r.total_scans}</div>
          <div class="kpi-card__trend kpi-card__trend--up">↑ 12% this week</div>
        </div>
        <div class="kpi-card fade-in stagger-2">
          <div class="kpi-card__icon" style="background:var(--color-danger-bg);color:var(--color-danger)">⚠️</div>
          <div class="kpi-card__label">Total Violations</div>
          <div class="kpi-card__value">${r.non_compliant}</div>
          <div class="kpi-card__trend kpi-card__trend--down">↓ 4% this week</div>
        </div>
        <div class="kpi-card fade-in stagger-3">
          <div class="kpi-card__icon" style="background:var(--color-success-bg);color:var(--color-success)">✓</div>
          <div class="kpi-card__label">Compliance Rate</div>
          <div class="kpi-card__value">${e}%</div>
          <div class="kpi-card__trend kpi-card__trend--up">↑ 2.5% this week</div>
        </div>
        <div class="kpi-card fade-in stagger-4">
          <div class="kpi-card__icon" style="background:hsla(210, 70%, 50%, 0.12);color:hsl(210, 75%, 50%)">🔍</div>
          <div class="kpi-card__label">Needs Review</div>
          <div class="kpi-card__value">${r.needs_review}</div>
          <div class="kpi-card__trend" style="color:var(--color-text-muted)">Manual check req.</div>
        </div>
        <div class="kpi-card fade-in stagger-5">
          <div class="kpi-card__icon" style="background:var(--color-warning-bg);color:hsl(38,70%,35%)">👥</div>
          <div class="kpi-card__label">Active Officers</div>
          <div class="kpi-card__value">${i} / ${f.length}</div>
          <div class="kpi-card__trend" style="color:var(--color-text-muted)">Currently in field</div>
        </div>
      </div>

      <div class="dashboard-grid dashboard-grid--2col">
        
        <!-- Activity Chart (CSS only visualization) -->
        <div class="chart-card fade-in stagger-5">
          <div class="chart-card__header">
            <h2 class="chart-card__title">Inspection Activity (7 Days)</h2>
          </div>
          <div class="bar-chart">
            ${r.trend_over_time.map(a=>{const t=Math.max(...r.trend_over_time.map(g=>g.scans)),s=a.scans/t*100,n=a.violations/t*100,h=new Date(a.date).toLocaleDateString("en-US",{weekday:"short"});return`
                <div class="bar-chart__bar" title="${a.scans} Scans, ${a.violations} Violations">
                  <div style="font-size:var(--font-size-2xs);margin-bottom:2px;font-weight:bold">${a.scans}</div>
                  <div style="width:100%;height:100%;display:flex;align-items:flex-end;position:relative">
                    <div class="bar-chart__fill bar-chart__fill--primary" style="height:${s}%;position:absolute;bottom:0;width:100%;border-radius:4px"></div>
                    <div class="bar-chart__fill bar-chart__fill--danger" style="height:${n}%;position:absolute;bottom:0;width:100%;border-radius:4px"></div>
                  </div>
                  <div class="bar-chart__label">${h}</div>
                </div>
              `}).join("")}
          </div>
          <div style="display:flex;gap:var(--space-md);justify-content:center;margin-top:var(--space-md);font-size:var(--font-size-xs)">
            <div style="display:flex;align-items:center;gap:4px"><span style="width:10px;height:10px;background:var(--color-primary);border-radius:2px"></span> Total Scans</div>
            <div style="display:flex;align-items:center;gap:4px"><span style="width:10px;height:10px;background:var(--color-danger);border-radius:2px"></span> Violations</div>
          </div>
        </div>

        <!-- Recent Inspections -->
        <div class="chart-card fade-in stagger-6">
          <div class="chart-card__header">
            <h2 class="chart-card__title">Recent Inspections</h2>
            <button class="btn btn--ghost btn--small" onclick="location.hash='#/supervisor/inspections'">View All</button>
          </div>
          <div class="data-table" style="overflow-x:auto">
            <table style="width:100%">
              <thead>
                <tr>
                  <th>Store</th>
                  <th>Officer</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                ${b.slice(0,5).map(a=>`
                  <tr>
                    <td style="font-weight:500">${a.store}</td>
                    <td>${a.officer}</td>
                    <td>
                      <span class="badge badge--${a.status==="compliant"?"success":"danger"}">
                        ${a.status==="compliant"?"Pass":"Fail"}
                      </span>
                    </td>
                  </tr>
                `).join("")}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  `}function he(){return`
    <div class="fade-in">
      <div class="filter-bar" style="margin-bottom:var(--space-lg)">
        <span style="font-size:var(--font-size-sm);font-weight:600;margin-right:var(--space-sm)">Filters:</span>
        <select class="filter-bar__select">
          <option>All Statuses</option>
          <option>Violations Only</option>
          <option>Compliant Only</option>
        </select>
        <select class="filter-bar__select">
          <option>All Officers</option>
          ${f.map(e=>`<option>${e.name}</option>`).join("")}
        </select>
        <select class="filter-bar__select">
          <option>Last 7 Days</option>
          <option>Today</option>
          <option>This Month</option>
        </select>
      </div>

      <div class="card" style="padding:0;overflow:hidden">
        <div style="overflow-x:auto">
          <table class="data-table">
            <thead>
              <tr>
                <th>ID & Date</th>
                <th>Store / Location</th>
                <th>Product</th>
                <th>Officer</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              ${b.map(e=>`
                <tr>
                  <td>
                    <div style="font-family:var(--font-mono);font-weight:600">${e.id}</div>
                    <div style="font-size:var(--font-size-xs);color:var(--color-text-muted)">${y(e.date)}</div>
                  </td>
                  <td>
                    <div style="font-weight:500">${e.store}</div>
                    <div style="font-size:var(--font-size-xs);color:var(--color-text-muted)">${e.location}</div>
                  </td>
                  <td>${e.product}</td>
                  <td>${e.officer}</td>
                  <td>
                    <span class="badge badge--${e.status==="compliant"?"success":"danger"}">
                      ${e.status==="compliant"?"Pass":`${e.violations} Violations`}
                    </span>
                  </td>
                  <td>
                    <button class="btn btn--outline btn--small">View Evidence</button>
                  </td>
                </tr>
              `).join("")}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `}function fe(){return`
    <div class="fade-in">
      <div class="filter-bar" style="margin-bottom:var(--space-lg)">
        <input type="text" class="input-group__input" style="flex:1;min-height:36px;padding:var(--space-xs) var(--space-md)" placeholder="Search store name or location..." />
        <button class="btn btn--primary btn--small">Search</button>
      </div>

      <div class="dashboard-grid dashboard-grid--3col">
        ${Z.map(e=>`
          <div class="card card--interactive">
            <h3 style="margin-bottom:4px;font-size:var(--font-size-lg)">${e.name}</h3>
            <p style="font-size:var(--font-size-xs);color:var(--color-text-muted);margin-bottom:var(--space-md)">${e.location}</p>
            
            <div style="display:flex;justify-content:space-between;margin-bottom:var(--space-sm);padding-bottom:var(--space-sm);border-bottom:1px solid var(--color-border-light)">
              <div style="text-align:center">
                <div style="font-size:var(--font-size-xl);font-weight:700">${e.inspections}</div>
                <div style="font-size:var(--font-size-2xs);color:var(--color-text-muted);text-transform:uppercase">Inspections</div>
              </div>
              <div style="text-align:center">
                <div style="font-size:var(--font-size-xl);font-weight:700;color:var(--color-danger)">${e.violations}</div>
                <div style="font-size:var(--font-size-2xs);color:var(--color-text-muted);text-transform:uppercase">Violations</div>
              </div>
              <div style="text-align:center">
                <div style="font-size:var(--font-size-xl);font-weight:700;color:var(--color-success)">${e.compliance}%</div>
                <div style="font-size:var(--font-size-2xs);color:var(--color-text-muted);text-transform:uppercase">Compliance</div>
              </div>
            </div>
            
            ${e.violations>5?'<div class="badge badge--danger" style="margin-bottom:var(--space-sm)">⚠️ High Risk: Repeat Offender</div>':""}
            
            <button class="btn btn--outline btn--full btn--small">View Full History</button>
          </div>
        `).join("")}
      </div>
    </div>
  `}const T=C.analyst;function x(e){return`
    <div class="app-shell">
      <aside class="app-sidebar" id="app-sidebar">
        <div class="app-sidebar__brand">
          <div class="app-sidebar__logo">M</div>
          <div>
            <div class="app-sidebar__name">MetraScan</div>
            <div class="app-sidebar__role">Market Intelligence</div>
          </div>
        </div>

        <nav class="app-sidebar__nav">
          <div class="app-sidebar__section-label">Intelligence</div>
          <a href="#/analyst/dashboard" class="sidebar-link ${e==="dashboard"?"sidebar-link--active":""}">
            <span class="sidebar-link__icon">📊</span> Overview
          </a>
          <a href="#/analyst/trends" class="sidebar-link ${e==="trends"?"sidebar-link--active":""}">
            <span class="sidebar-link__icon">📈</span> Market Trends
          </a>
          <a href="#/analyst/regions" class="sidebar-link ${e==="regions"?"sidebar-link--active":""}">
            <span class="sidebar-link__icon">🗺️</span> Regional Intelligence
          </a>
          <a href="#/analyst/violations" class="sidebar-link ${e==="violations"?"sidebar-link--active":""}">
            <span class="sidebar-link__icon">⚠️</span> Violation Analysis
          </a>

          <div class="app-sidebar__section-label">Tools</div>
          <a href="#/analyst/ecommerce" class="sidebar-link ${e==="ecommerce"?"sidebar-link--active":""}">
            <span class="sidebar-link__icon">🛒</span> E-Commerce Audit
          </a>
          <a href="#/analyst/reports" class="sidebar-link ${e==="reports"?"sidebar-link--active":""}">
            <span class="sidebar-link__icon">📄</span> Reports
          </a>
        </nav>

        <div class="app-sidebar__footer">
          <div class="sidebar-user" onclick="location.hash='#/login/analyst'">
            <div class="sidebar-user__avatar">${T.avatar}</div>
            <div class="sidebar-user__info">
              <div class="sidebar-user__name">${T.name}</div>
              <div class="sidebar-user__role">Sign Out</div>
            </div>
          </div>
        </div>
      </aside>

      <div class="sidebar-overlay" id="sidebar-overlay"></div>

      <main class="app-main">
        <header class="app-topbar">
          <div class="app-topbar__left">
            <button class="app-topbar__menu-btn" id="btn-toggle-sidebar">☰</button>
            <h1 class="app-topbar__title">${be(e)}</h1>
          </div>
          <div class="app-topbar__right">
            <span class="badge badge--neutral">${T.jurisdiction}</span>
          </div>
        </header>

        <div class="app-content" id="analyst-view"></div>
      </main>
    </div>
  `}function be(e){return{dashboard:"Market Intelligence",trends:"Market Trends",regions:"Regional Intelligence",violations:"Violation Analysis",ecommerce:"E-Commerce Audit",reports:"Reports"}[e]||"Dashboard"}function ye(){const e=Math.round(r.compliant/r.total_scans*100),i=Math.round(r.non_compliant/r.total_scans*100);return`
    <div class="fade-in">
      <div class="welcome-section">
        <h1 class="welcome-section__greeting">Consumer Affairs Intelligence</h1>
        <p class="welcome-section__subtitle">${T.jurisdiction} · ${y(new Date().toISOString())}</p>
      </div>

      <div class="dashboard-grid dashboard-grid--kpis" style="margin-bottom:var(--space-2xl)">
        <div class="kpi-card fade-in stagger-1">
          <div class="kpi-card__icon" style="background:var(--color-primary-bg);color:var(--color-primary)">📋</div>
          <div class="kpi-card__label">Total Inspections</div>
          <div class="kpi-card__value">${r.total_scans}</div>
          <div class="kpi-card__trend kpi-card__trend--up">↑ 18% vs last month</div>
        </div>
        <div class="kpi-card fade-in stagger-2">
          <div class="kpi-card__icon" style="background:var(--color-success-bg);color:var(--color-success)">✓</div>
          <div class="kpi-card__label">Compliance Rate</div>
          <div class="kpi-card__value">${e}%</div>
          <div class="kpi-card__trend kpi-card__trend--up">↑ 3.2% vs last month</div>
        </div>
        <div class="kpi-card fade-in stagger-3">
          <div class="kpi-card__icon" style="background:var(--color-danger-bg);color:var(--color-danger)">⚠️</div>
          <div class="kpi-card__label">Violation Rate</div>
          <div class="kpi-card__value">${i}%</div>
          <div class="kpi-card__trend kpi-card__trend--down">↓ 2.1% vs last month</div>
        </div>
        <div class="kpi-card fade-in stagger-4">
          <div class="kpi-card__icon" style="background:hsla(210, 70%, 50%, 0.12);color:hsl(210, 75%, 50%)">🔍</div>
          <div class="kpi-card__label">Needs Review</div>
          <div class="kpi-card__value">${r.needs_review}</div>
          <div class="kpi-card__trend" style="color:var(--color-text-muted)">Pending verification</div>
        </div>
        <div class="kpi-card fade-in stagger-5">
          <div class="kpi-card__icon" style="background:var(--color-warning-bg);color:hsl(38,70%,35%)">🗺️</div>
          <div class="kpi-card__label">High-Risk Regions</div>
          <div class="kpi-card__value">${M.filter(a=>a.risk==="high").length}</div>
          <div class="kpi-card__trend" style="color:var(--color-text-muted)">of ${M.length} monitored</div>
        </div>
      </div>

      <div class="dashboard-grid dashboard-grid--2col" style="margin-bottom:var(--space-2xl)">

        <!-- Violation Category Breakdown -->
        <div class="chart-card fade-in stagger-5">
          <div class="chart-card__header">
            <h2 class="chart-card__title">Top Violation Types</h2>
          </div>
          <div style="display:flex;flex-direction:column;gap:var(--space-md)">
            ${B.slice(0,5).map(a=>`
              <div>
                <div style="display:flex;justify-content:space-between;margin-bottom:4px">
                  <span style="font-size:var(--font-size-sm);font-weight:500">${a.type}</span>
                  <span style="font-size:var(--font-size-sm);font-weight:700">${a.count}</span>
                </div>
                <div class="progress-bar">
                  <div class="progress-bar__fill progress-bar__fill--danger" style="width:${a.percentage*3}%"></div>
                </div>
              </div>
            `).join("")}
          </div>
        </div>

        <!-- Regional Overview -->
        <div class="chart-card fade-in stagger-6">
          <div class="chart-card__header">
            <h2 class="chart-card__title">Regional Compliance</h2>
            <button class="btn btn--ghost btn--small" onclick="location.hash='#/analyst/regions'">View Map</button>
          </div>
          <div style="display:flex;flex-direction:column;gap:var(--space-sm)">
            ${M.map(a=>`
              <div style="display:flex;align-items:center;gap:var(--space-md);padding:var(--space-sm) 0;border-bottom:1px solid var(--color-border-light)">
                <span class="badge badge--${a.risk==="high"?"danger":a.risk==="medium"?"warning":"success"}" style="min-width:60px;justify-content:center">
                  ${a.risk.toUpperCase()}
                </span>
                <div style="flex:1">
                  <div style="font-size:var(--font-size-sm);font-weight:600">${a.name}</div>
                  <div style="font-size:var(--font-size-xs);color:var(--color-text-muted)">${a.inspections} inspections</div>
                </div>
                <div style="text-align:right">
                  <div style="font-size:var(--font-size-lg);font-weight:700;color:${a.compliance>=75?"var(--color-success)":a.compliance>=60?"hsl(38,70%,35%)":"var(--color-danger)"}">${a.compliance}%</div>
                </div>
              </div>
            `).join("")}
          </div>
        </div>

      </div>

      <!-- Violations by Product Category -->
      <div class="chart-card fade-in" style="margin-bottom:var(--space-2xl)">
        <div class="chart-card__header">
          <h2 class="chart-card__title">Violations by Product Category</h2>
        </div>
        <div class="bar-chart" style="height:200px">
          ${Object.entries(r.violations_by_category).map(([a,t])=>{const s=Math.max(...Object.values(r.violations_by_category)),n=t/s*100,o=a.replace(/_/g," ").replace(/\b\w/g,h=>h.toUpperCase());return`
              <div class="bar-chart__bar">
                <div class="bar-chart__value">${t}</div>
                <div style="width:100%;height:100%;display:flex;align-items:flex-end">
                  <div class="bar-chart__fill bar-chart__fill--primary" style="height:${n}%;width:100%"></div>
                </div>
                <div class="bar-chart__label">${o}</div>
              </div>
            `}).join("")}
        </div>
      </div>
    </div>
  `}function xe(){return`
    <div class="fade-in">
      <div class="filter-bar" style="margin-bottom:var(--space-lg)">
        <select class="filter-bar__select"><option>All Risk Levels</option><option>High Risk</option><option>Medium Risk</option><option>Low Risk</option></select>
        <select class="filter-bar__select"><option>Last 30 Days</option><option>Last 7 Days</option><option>This Quarter</option></select>
      </div>

      <div class="dashboard-grid dashboard-grid--3col">
        ${M.map(e=>`
          <div class="card" style="border-left:4px solid ${e.risk==="high"?"var(--color-danger)":e.risk==="medium"?"var(--color-warning)":"var(--color-success)"}">
            <div style="display:flex;justify-content:space-between;align-items:start;margin-bottom:var(--space-md)">
              <div>
                <h3 style="font-size:var(--font-size-lg)">${e.name}</h3>
                <span class="badge badge--${e.risk==="high"?"danger":e.risk==="medium"?"warning":"success"}" style="margin-top:4px">
                  ${e.risk.toUpperCase()} RISK
                </span>
              </div>
              <div style="text-align:right">
                <div style="font-size:var(--font-size-3xl);font-weight:800;line-height:1;color:${e.compliance>=75?"var(--color-success)":e.compliance>=60?"hsl(38,70%,35%)":"var(--color-danger)"}">${e.compliance}%</div>
                <div style="font-size:var(--font-size-xs);color:var(--color-text-muted)">Compliance</div>
              </div>
            </div>
            <div style="display:flex;gap:var(--space-lg);padding-top:var(--space-md);border-top:1px solid var(--color-border-light)">
              <div><div style="font-size:var(--font-size-lg);font-weight:700">${e.inspections}</div><div style="font-size:var(--font-size-2xs);color:var(--color-text-muted);text-transform:uppercase">Inspections</div></div>
              <div><div style="font-size:var(--font-size-lg);font-weight:700;color:var(--color-danger)">${e.violations}</div><div style="font-size:var(--font-size-2xs);color:var(--color-text-muted);text-transform:uppercase">Violations</div></div>
            </div>
          </div>
        `).join("")}
      </div>
    </div>
  `}function ke(){return`
    <div class="fade-in">
      <div class="dashboard-grid dashboard-grid--2col" style="margin-bottom:var(--space-2xl)">
        <div class="chart-card">
          <div class="chart-card__header">
            <h2 class="chart-card__title">Violation Type Breakdown</h2>
          </div>
          <div style="display:flex;flex-direction:column;gap:var(--space-md)">
            ${B.map(e=>`
              <div style="display:flex;align-items:center;gap:var(--space-md)">
                <div style="flex:1">
                  <div style="display:flex;justify-content:space-between;margin-bottom:4px">
                    <span style="font-size:var(--font-size-sm);font-weight:500">${e.type}</span>
                    <span style="font-size:var(--font-size-xs);color:var(--color-text-muted)">${e.percentage}%</span>
                  </div>
                  <div class="progress-bar">
                    <div class="progress-bar__fill" style="width:${e.percentage*3}%;background:${e.trend==="up"?"var(--color-danger)":e.trend==="down"?"var(--color-success)":"var(--color-primary)"}"></div>
                  </div>
                </div>
                <span style="font-size:var(--font-size-xs);font-weight:600;color:${e.trend==="up"?"var(--color-danger)":e.trend==="down"?"var(--color-success)":"var(--color-text-muted)"}">
                  ${e.trend==="up"?"↑":e.trend==="down"?"↓":"→"}
                </span>
              </div>
            `).join("")}
          </div>
        </div>

        <div class="chart-card">
          <div class="chart-card__header">
            <h2 class="chart-card__title">Violations by Field (Count)</h2>
          </div>
          <div class="bar-chart" style="height:200px">
            ${Object.entries(r.violations_by_field).map(([e,i])=>{const a=Math.max(...Object.values(r.violations_by_field)),t=i/a*100,s=e.replace(/_/g," ").replace(/\b\w/g,n=>n.toUpperCase()).substring(0,10);return`
                <div class="bar-chart__bar">
                  <div class="bar-chart__value">${i}</div>
                  <div style="width:100%;height:100%;display:flex;align-items:flex-end">
                    <div class="bar-chart__fill bar-chart__fill--danger" style="height:${t}%;width:100%"></div>
                  </div>
                  <div class="bar-chart__label" style="font-size:9px">${s}</div>
                </div>
              `}).join("")}
          </div>
        </div>
      </div>
    </div>
  `}function we(){return`
    <div class="fade-in">
      <div class="card" style="max-width:700px;margin-bottom:var(--space-2xl)">
        <h2 style="margin-bottom:var(--space-sm)">Audit a Product Listing</h2>
        <p style="font-size:var(--font-size-sm);color:var(--color-text-secondary);margin-bottom:var(--space-lg)">
          Enter an Amazon or Flipkart product URL to check the listing for Legal Metrology compliance.
        </p>
        <div style="display:flex;gap:var(--space-sm)">
          <input type="url" class="input-group__input" id="ecom-url-input" style="flex:1" placeholder="https://www.amazon.in/dp/B0XXXXXXXX" />
          <button class="btn btn--primary" id="btn-audit-url">Analyze</button>
        </div>
        <p class="input-group__hint" style="margin-top:var(--space-sm)">Supports Amazon.in & Flipkart product URLs</p>
      </div>

      <div id="ecom-result"></div>

      <div class="empty-state" id="ecom-empty">
        <div class="empty-state__icon">🛒</div>
        <h2 class="empty-state__title">No Audit Running</h2>
        <p class="empty-state__description">Paste a product URL above to begin an e-commerce compliance audit.</p>
      </div>
    </div>
  `}function $e(){const e=document.getElementById("btn-audit-url"),i=document.getElementById("ecom-url-input"),a=document.getElementById("ecom-result"),t=document.getElementById("ecom-empty");e&&e.addEventListener("click",()=>{var n;const s=(n=i==null?void 0:i.value)==null?void 0:n.trim();s&&(t.hidden=!0,e.textContent="Analyzing…",e.disabled=!0,a.innerHTML=`
      <div class="processing-card" style="max-width:500px">
        <h2 class="processing-card__title">Analyzing Listing…</h2>
        <p class="processing-card__subtitle">Fetching product data from e-commerce platform</p>
        <ol class="processing-steps">
          <li class="processing-step processing-step--active"><span class="processing-step__indicator"></span><span class="processing-step__label">Fetching listing page</span></li>
          <li class="processing-step processing-step--pending"><span class="processing-step__indicator"></span><span class="processing-step__label">Extracting product images</span></li>
          <li class="processing-step processing-step--pending"><span class="processing-step__indicator"></span><span class="processing-step__label">Running compliance check</span></li>
        </ol>
      </div>
    `,setTimeout(()=>{e.textContent="Analyze",e.disabled=!1,a.innerHTML=`
        <div class="card" style="max-width:700px;border-left:4px solid var(--color-danger)">
          <div style="display:flex;justify-content:space-between;align-items:start;margin-bottom:var(--space-md)">
            <div>
              <h3 style="margin-bottom:4px">Product Listing Audit Result</h3>
              <p style="font-size:var(--font-size-xs);color:var(--color-text-muted);word-break:break-all">${s}</p>
            </div>
            <span class="badge badge--danger">NON-COMPLIANT</span>
          </div>
          <div style="display:flex;flex-direction:column;gap:var(--space-sm)">
            <div class="violation-card">
              <div class="violation-card__header"><span class="violation-card__icon">❌</span><h3 class="violation-card__field">MRP Not Displayed</h3></div>
              <p class="violation-card__description">Product listing does not display MRP (Maximum Retail Price) as required.</p>
              <div class="violation-card__footer">
                <span class="violation-card__severity violation-card__severity--major">Major</span>
                <span class="violation-card__rule">Rule 6(1)(c), LMPC Rules 2011</span>
              </div>
            </div>
            <div class="violation-card">
              <div class="violation-card__header"><span class="violation-card__icon">❌</span><h3 class="violation-card__field">Net Quantity Missing from Images</h3></div>
              <p class="violation-card__description">Product images do not clearly show net quantity declaration.</p>
              <div class="violation-card__footer">
                <span class="violation-card__severity violation-card__severity--minor">Minor</span>
                <span class="violation-card__rule">Rule 6(1)(b), LMPC Rules 2011</span>
              </div>
            </div>
          </div>
          <div style="margin-top:var(--space-lg)">
            <button class="btn btn--outline btn--small">📄 Export Audit Report</button>
          </div>
        </div>
      `},3e3))})}const Ie=document.getElementById("app"),l=new D;function c(e){Ie.innerHTML=e}function m(){const e=document.getElementById("btn-toggle-sidebar"),i=document.getElementById("app-sidebar"),a=document.getElementById("sidebar-overlay");!e||!i||(e.addEventListener("click",()=>{i.classList.toggle("app-sidebar--open"),a==null||a.classList.toggle("sidebar-overlay--visible")}),a==null||a.addEventListener("click",()=>{i.classList.remove("app-sidebar--open"),a.classList.remove("sidebar-overlay--visible")}))}function Le(e){switch(e){case"officer":l.navigate("/officer/dashboard");break;case"supervisor":l.navigate("/supervisor/dashboard");break;case"analyst":l.navigate("/analyst/dashboard");break;default:l.navigate("/login/officer")}}l.on("/login/:role",e=>{const i=e.role||"officer";c(U(i)),K(i,Le)});l.on("/officer/dashboard",()=>{c(k("dashboard")),document.getElementById("field-view").innerHTML=oe()});l.on("/officer/inspect",()=>{c(k("inspect")),document.getElementById("field-view").innerHTML=re(),le(e=>l.navigate(`/officer/result/${e}`))});l.on("/officer/result/:id",e=>{c(k("inspect")),document.getElementById("field-view").innerHTML=ce(e.id),pe()});l.on("/officer/history",()=>{c(k("history")),document.getElementById("field-view").innerHTML=ve()});l.on("/officer/profile",()=>{c(k("profile")),document.getElementById("field-view").innerHTML=ge()});l.on("/supervisor/dashboard",()=>{c(w("dashboard")),document.getElementById("supervisor-view").innerHTML=_e(),m()});l.on("/supervisor/inspections",()=>{c(w("inspections")),document.getElementById("supervisor-view").innerHTML=he(),m()});l.on("/supervisor/stores",()=>{c(w("stores")),document.getElementById("supervisor-view").innerHTML=fe(),m()});l.on("/supervisor/officer-tracking",()=>{c(w("officers")),document.getElementById("supervisor-view").innerHTML=Me(),m()});l.on("/supervisor/reports",()=>{c(w("reports")),document.getElementById("supervisor-view").innerHTML=j("supervisor"),m()});l.on("/analyst/dashboard",()=>{c(x("dashboard")),document.getElementById("analyst-view").innerHTML=ye(),m()});l.on("/analyst/trends",()=>{c(x("trends")),document.getElementById("analyst-view").innerHTML=Se(),m()});l.on("/analyst/regions",()=>{c(x("regions")),document.getElementById("analyst-view").innerHTML=xe(),m()});l.on("/analyst/violations",()=>{c(x("violations")),document.getElementById("analyst-view").innerHTML=ke(),m()});l.on("/analyst/ecommerce",()=>{c(x("ecommerce")),document.getElementById("analyst-view").innerHTML=we(),m(),$e()});l.on("/analyst/reports",()=>{c(x("reports")),document.getElementById("analyst-view").innerHTML=j("analyst"),m()});function Me(){return`
    <div class="fade-in">
      <div class="dashboard-grid dashboard-grid--kpis" style="margin-bottom:var(--space-2xl);grid-template-columns:repeat(3,1fr)">
        <div class="kpi-card">
          <div class="kpi-card__label">Active Now</div>
          <div class="kpi-card__value">${f.filter(e=>e.status==="active").length}</div>
        </div>
        <div class="kpi-card">
          <div class="kpi-card__label">Total Officers</div>
          <div class="kpi-card__value">${f.length}</div>
        </div>
        <div class="kpi-card">
          <div class="kpi-card__label">Pending Sync</div>
          <div class="kpi-card__value">${f.filter(e=>e.status==="syncing").length}</div>
        </div>
      </div>

      <div class="card" style="padding:0;overflow:hidden">
        <table class="data-table">
          <thead>
            <tr><th>Officer</th><th>Status</th><th>Inspections</th><th>Violations</th><th>Last Active</th></tr>
          </thead>
          <tbody>
            ${f.map(e=>`
              <tr>
                <td><div style="display:flex;align-items:center;gap:var(--space-sm)">
                  <div class="avatar" style="width:28px;height:28px;font-size:var(--font-size-2xs)">${e.name.split(" ").map(i=>i[0]).join("")}</div>
                  <span style="font-weight:500">${e.name}</span>
                </div></td>
                <td><span class="sync-status sync-status--${e.status==="active"?"online":e.status==="syncing"?"syncing":"offline"}">
                  <span class="status-dot status-dot--${e.status==="active"?"online":e.status==="syncing"?"syncing":"offline"}"></span>
                  ${e.status.charAt(0).toUpperCase()+e.status.slice(1)}
                </span></td>
                <td>${e.inspections}</td>
                <td style="color:var(--color-danger);font-weight:600">${e.violations}</td>
                <td style="color:var(--color-text-muted)">${e.lastActive}</td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    </div>
  `}function Se(){return`
    <div class="fade-in">
      <div class="chart-card" style="margin-bottom:var(--space-2xl)">
        <div class="chart-card__header">
          <h2 class="chart-card__title">Inspection & Violation Trends (7 Days)</h2>
        </div>
        <div class="bar-chart" style="height:220px">
          ${r.trend_over_time.map(e=>{const i=Math.max(...r.trend_over_time.map(o=>o.scans)),a=e.scans/i*100,t=e.violations/i*100,n=new Date(e.date).toLocaleDateString("en-US",{month:"short",day:"numeric"});return`
              <div class="bar-chart__bar">
                <div class="bar-chart__value">${e.scans}</div>
                <div style="width:100%;height:100%;display:flex;align-items:flex-end;gap:2px">
                  <div class="bar-chart__fill bar-chart__fill--primary" style="height:${a}%;flex:1"></div>
                  <div class="bar-chart__fill bar-chart__fill--danger" style="height:${t}%;flex:1"></div>
                </div>
                <div class="bar-chart__label">${n}</div>
              </div>
            `}).join("")}
        </div>
        <div style="display:flex;gap:var(--space-lg);justify-content:center;margin-top:var(--space-md);font-size:var(--font-size-xs)">
          <div style="display:flex;align-items:center;gap:4px"><span style="width:10px;height:10px;background:var(--color-primary);border-radius:2px;display:inline-block"></span> Inspections</div>
          <div style="display:flex;align-items:center;gap:4px"><span style="width:10px;height:10px;background:var(--color-danger);border-radius:2px;display:inline-block"></span> Violations</div>
        </div>
      </div>

      <div class="dashboard-grid dashboard-grid--2col">
        <div class="chart-card">
          <div class="chart-card__header"><h2 class="chart-card__title">Compliance Rate Over Time</h2></div>
          <div style="display:flex;flex-direction:column;gap:var(--space-sm)">
            ${r.trend_over_time.map(e=>{const i=Math.round((e.scans-e.violations)/e.scans*100);return`
                <div>
                  <div style="display:flex;justify-content:space-between;margin-bottom:4px">
                    <span style="font-size:var(--font-size-sm)">${new Date(e.date).toLocaleDateString("en-US",{month:"short",day:"numeric"})}</span>
                    <span style="font-size:var(--font-size-sm);font-weight:700;color:${i>=70?"var(--color-success)":"var(--color-danger)"}">${i}%</span>
                  </div>
                  <div class="progress-bar">
                    <div class="progress-bar__fill ${i>=70?"progress-bar__fill--success":"progress-bar__fill--danger"}" style="width:${i}%"></div>
                  </div>
                </div>
              `}).join("")}
          </div>
        </div>
        <div class="chart-card">
          <div class="chart-card__header"><h2 class="chart-card__title">Key Observations</h2></div>
          <div style="display:flex;flex-direction:column;gap:var(--space-md)">
            <div class="card" style="background:var(--color-danger-bg);border-color:var(--color-danger-border);padding:var(--space-md)">
              <div style="font-size:var(--font-size-sm);font-weight:600;color:var(--color-danger);margin-bottom:4px">⚠️ Rising Trend</div>
              <div style="font-size:var(--font-size-sm);color:var(--color-text-secondary)">Expiry date violations increased 15% in Thiruvananthapuram district over the last week.</div>
            </div>
            <div class="card" style="background:var(--color-success-bg);border-color:var(--color-success-border);padding:var(--space-md)">
              <div style="font-size:var(--font-size-sm);font-weight:600;color:var(--color-success);margin-bottom:4px">✓ Improving</div>
              <div style="font-size:var(--font-size-sm);color:var(--color-text-secondary)">Manufacturer address compliance improved across Kochi region after recent enforcement drive.</div>
            </div>
            <div class="card" style="background:var(--color-warning-bg);border-color:var(--color-warning-border);padding:var(--space-md)">
              <div style="font-size:var(--font-size-sm);font-weight:600;color:hsl(38,70%,35%);margin-bottom:4px">📌 Attention Needed</div>
              <div style="font-size:var(--font-size-sm);color:var(--color-text-secondary)">3 stores in Kollam flagged as repeat offenders — consider targeted enforcement action.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `}window.downloadFakeReport=e=>{const i=`MetraScan Report: ${e}
Generated on: ${new Date().toLocaleString()}

This is an automated compliance report generated by the SIH26034 MetraScan system.`,a=new Blob([i],{type:"text/plain"}),t=URL.createObjectURL(a),s=document.createElement("a");s.href=t,s.download=e.replace(/[^a-z0-9]/gi,"_").toLowerCase()+".txt",s.click(),URL.revokeObjectURL(t)};function j(e){return`
    <div class="fade-in">
      <div class="card" style="max-width:600px;margin-bottom:var(--space-2xl)">
        <h2 style="margin-bottom:var(--space-md)">Generate Report</h2>
        <div class="input-group" style="margin-bottom:var(--space-md)">
          <label class="input-group__label">Report Type</label>
          <select class="input-group__input" id="report-type-select">
            <option>Compliance Summary Report</option>
            <option>Violation Detail Report</option>
            <option>Regional Analysis Report</option>
            ${e==="supervisor"?"<option>Officer Activity Report</option><option>Store Inspection Report</option>":""}
            ${e==="analyst"?"<option>Market Intelligence Briefing</option><option>Enforcement Recommendation Report</option>":""}
          </select>
        </div>
        <div style="display:flex;gap:var(--space-sm)">
          <div class="input-group" style="flex:1">
            <label class="input-group__label">From</label>
            <input type="date" class="input-group__input" value="2026-08-01" />
          </div>
          <div class="input-group" style="flex:1">
            <label class="input-group__label">To</label>
            <input type="date" class="input-group__input" value="2026-09-01" />
          </div>
        </div>
        <button class="btn btn--primary btn--full" style="margin-top:var(--space-lg)" onclick="const sel=document.getElementById('report-type-select');this.textContent='⏳ Generating…';this.disabled=true;setTimeout(()=>{window.downloadFakeReport(sel.value);this.textContent='✓ Report Ready';setTimeout(()=>{this.textContent='📄 Generate & Export PDF';this.disabled=false},2000)},1500)">
          📄 Generate & Export PDF
        </button>
      </div>

      <div class="section-title">Recent Reports</div>
      <div style="display:flex;flex-direction:column;gap:var(--space-sm)">
        ${[{name:"Monthly Compliance Summary — August 2026",date:"Aug 31, 2026",type:"PDF"},{name:"Violation Trend Analysis — Q3 2026",date:"Aug 28, 2026",type:"PDF"},{name:"Regional Enforcement Brief — Kerala",date:"Aug 15, 2026",type:"PDF"}].map(i=>`
          <div class="card" style="display:flex;align-items:center;gap:var(--space-md);padding:var(--space-md) var(--space-lg)">
            <div style="font-size:1.5rem">📄</div>
            <div style="flex:1">
              <div style="font-weight:600;font-size:var(--font-size-sm)">${i.name}</div>
              <div style="font-size:var(--font-size-xs);color:var(--color-text-muted)">${i.date} · ${i.type}</div>
            </div>
            <button class="btn btn--ghost btn--small" onclick="window.downloadFakeReport('${i.name}')">↓ Download</button>
          </div>
        `).join("")}
      </div>
    </div>
  `}l.start();
