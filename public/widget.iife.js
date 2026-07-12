var LibreChatWidget=(function(x){"use strict";const U=`
  :host, .lc-widget {
    all: initial;
    font-family: system-ui, -apple-system, 'Segoe UI', sans-serif;
    font-size: 16px;
    line-height: 1.5;
  }
  .lc-bubble {
    position: fixed;
    bottom: 16px;
    right: 16px;
    width: 56px;
    height: 56px;
    border-radius: 999px;
    background: #10a37f;
    color: #fff;
    border: none;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.25);
    cursor: pointer;
    font-size: 24px;
    z-index: 2147483000;
  }
  .lc-panel {
    position: fixed;
    bottom: 16px;
    right: 16px;
    width: min(92vw, 360px);
    max-height: min(80vh, 560px);
    display: flex;
    flex-direction: column;
    background: #fff;
    border-radius: 16px;
    box-shadow: 0 4px 24px rgba(0, 0, 0, 0.3);
    overflow: hidden;
    z-index: 2147483000;
  }
  .lc-panel[hidden] {
    display: none;
  }
  .lc-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 16px;
    background: #10a37f;
    color: #fff;
    font-weight: 600;
  }
  .lc-close {
    background: none;
    border: none;
    color: #fff;
    font-size: 20px;
    cursor: pointer;
    padding: 4px 8px;
  }
  .lc-messages {
    flex: 1;
    overflow-y: auto;
    padding: 12px 16px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    min-height: 120px;
  }
  .lc-msg {
    max-width: 85%;
    padding: 10px 14px;
    border-radius: 12px;
    font-size: 16px;
    word-break: break-word;
  }
  .lc-starters {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  .lc-starter {
    text-align: left;
    font-size: 15px;
    padding: 10px 14px;
    border-radius: 12px;
    border: 1px solid #10a37f;
    background: #fff;
    color: #10a37f;
    cursor: pointer;
  }
  .lc-msg-user {
    align-self: flex-end;
    background: #10a37f;
    color: #fff;
  }
  .lc-msg-bot {
    align-self: flex-start;
    background: #f1f1f1;
    color: #111;
  }
  .lc-msg-bot p {
    margin: 0 0 8px;
  }
  .lc-register-link {
    display: inline-block;
    padding: 8px 14px;
    border-radius: 10px;
    background: #10a37f;
    color: #fff;
    text-decoration: none;
    font-size: 14px;
  }
  .lc-consent {
    flex: 1;
    overflow-y: auto;
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .lc-consent[hidden] {
    display: none;
  }
  .lc-consent-title {
    font-weight: 600;
    font-size: 16px;
    margin: 0;
  }
  .lc-consent-body {
    font-size: 14px;
    color: #444;
    margin: 0;
  }
  .lc-consent-link {
    font-size: 13px;
    color: #10a37f;
  }
  .lc-consent-status {
    font-size: 13px;
    color: #b91c1c;
    margin: 0;
  }
  .lc-consent-status[hidden] {
    display: none;
  }
  .lc-consent-actions {
    display: flex;
    gap: 8px;
    margin-top: auto;
  }
  .lc-decline {
    flex: 1;
    font-size: 14px;
    padding: 10px 12px;
    border-radius: 10px;
    border: 1px solid #ccc;
    background: #fff;
    color: #111;
    cursor: pointer;
  }
  .lc-agree {
    flex: 1;
    font-size: 14px;
    padding: 10px 12px;
    border-radius: 10px;
    border: none;
    background: #10a37f;
    color: #fff;
    cursor: pointer;
  }
  .lc-agree:disabled,
  .lc-decline:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
  .lc-chat {
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 0;
  }
  .lc-chat[hidden] {
    display: none;
  }
  .lc-rating {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px 12px;
    border-top: 1px solid #e5e5e5;
    font-size: 13px;
    color: #444;
  }
  .lc-rating[hidden] {
    display: none;
  }
  .lc-rate-up,
  .lc-rate-down {
    background: none;
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 4px 8px;
    font-size: 16px;
    cursor: pointer;
  }
  .lc-rate-up:disabled,
  .lc-rate-down:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
  .lc-rate-up:focus-visible,
  .lc-rate-down:focus-visible {
    outline: 2px solid #4a90d9;
    outline-offset: 2px;
  }
  .lc-form {
    display: flex;
    gap: 8px;
    padding: 12px;
    border-top: 1px solid #e5e5e5;
  }
  .lc-input {
    flex: 1;
    font-size: 16px;
    padding: 10px 12px;
    border-radius: 10px;
    border: 1px solid #ccc;
  }
  .lc-send {
    font-size: 16px;
    padding: 10px 16px;
    border-radius: 10px;
    border: none;
    background: #10a37f;
    color: #fff;
    cursor: pointer;
  }
  .lc-send:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`,S="librechat_tii_guest_id",k="librechat_tii_consent_",E="librechat_tii_rating_",C={th:{placeholder:"พิมพ์คำถามของคุณ...",send:"ส่ง",bubbleLabel:"เปิดแชท",closeLabel:"ปิด",genericError:"ขออภัย เกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้ง",notConfigured:"บริการแชทยังไม่พร้อมใช้งานในขณะนี้",consentTitle:"ความยินยอมในการใช้ข้อมูลส่วนบุคคล",consentBody:"เราเก็บข้อความสนทนาของคุณเพื่อตอบคำถามเกี่ยวกับ TII เท่านั้น ข้อมูลจะถูกเก็บไว้ชั่วคราวและอาจถูกส่งไปประมวลผลโดยผู้ให้บริการโมเดล AI ในต่างประเทศ",consentPolicyLink:"อ่านนโยบายความเป็นส่วนตัว",consentAgree:"ยอมรับและเริ่มแชท",consentDecline:"ไม่ยอมรับ",consentDeclined:"คุณต้องยอมรับเงื่อนไขก่อนจึงจะแชทได้",consentError:"ไม่สามารถบันทึกความยินยอมได้ กรุณาลองใหม่อีกครั้ง",rateLabel:"พอใจกับการสนทนานี้ไหม?",rateUpLabel:"พอใจ",rateDownLabel:"ไม่พอใจ",rateThanks:"ขอบคุณสำหรับความคิดเห็นของคุณ",rateError:"ไม่สามารถบันทึกคะแนนได้ กรุณาลองใหม่อีกครั้ง",limitReached:"คุณใช้งานฟรีครบโควต้าแล้ว สมัครสมาชิกเพื่อใช้งานเพิ่มเติม",registerCta:"สมัครสมาชิกด้วย LINE"}};function D(){const e=window.localStorage.getItem(S);if(e)return e;const c=crypto.randomUUID();return window.localStorage.setItem(S,c),c}function $(e){try{return window.localStorage.getItem(`${k}${e}`)==="true"}catch{return!1}}function P(e){try{window.localStorage.setItem(`${k}${e}`,"true")}catch{}}function G(e){try{return window.localStorage.getItem(`${E}${e}`)==="true"}catch{return!1}}function j(e){try{window.localStorage.setItem(`${E}${e}`,"true")}catch{}}function L(e,c){return e===503||e===404?c.notConfigured:c.genericError}function T(e,c=document.body){const t=C[e.lang??"th"]??C.th,I=document.createElement("div");c.appendChild(I);const g=I.attachShadow({mode:"open"}),z=document.createElement("style");z.textContent=U,g.appendChild(z);const p=document.createElement("button");p.className="lc-bubble",p.setAttribute("aria-label",t.bubbleLabel),p.textContent="💬",g.appendChild(p);const s=D(),H=e.policyUrl??`${e.apiBase}/privacy-policy`,F=e.registerUrl??`${e.apiBase}/login`,h=$(s),o=document.createElement("div");o.className="lc-panel",o.hidden=!0,o.innerHTML=`
    <div class="lc-header">
      <span>TII</span>
      <button class="lc-close" aria-label="${t.closeLabel}">✕</button>
    </div>
    <div class="lc-consent" ${h?"hidden":""}>
      <p class="lc-consent-title">${t.consentTitle}</p>
      <p class="lc-consent-body">${t.consentBody}</p>
      <a class="lc-consent-link" target="_blank" rel="noopener noreferrer">${t.consentPolicyLink}</a>
      <p class="lc-consent-status" role="status" aria-live="polite" hidden></p>
      <div class="lc-consent-actions">
        <button class="lc-decline" type="button">${t.consentDecline}</button>
        <button class="lc-agree" type="button">${t.consentAgree}</button>
      </div>
    </div>
    <div class="lc-chat" ${h?"":"hidden"}>
      <div class="lc-messages"></div>
      <div class="lc-rating" hidden>
        <span class="lc-rate-text">${t.rateLabel}</span>
        <button class="lc-rate-up" type="button" aria-label="${t.rateUpLabel}">👍</button>
        <button class="lc-rate-down" type="button" aria-label="${t.rateDownLabel}">👎</button>
      </div>
      <form class="lc-form">
        <input class="lc-input" type="text" placeholder="${t.placeholder}" aria-label="${t.placeholder}" />
        <button class="lc-send" type="submit">${t.send}</button>
      </form>
    </div>
  `,g.appendChild(o);const J=o.querySelector(".lc-consent-link");J.href=H;const i=o.querySelector(".lc-messages"),X=o.querySelector(".lc-form"),y=o.querySelector(".lc-input"),B=o.querySelector(".lc-send"),K=o.querySelector(".lc-close"),W=o.querySelector(".lc-consent"),d=o.querySelector(".lc-consent-status"),Y=o.querySelector(".lc-chat"),m=o.querySelector(".lc-agree"),w=o.querySelector(".lc-decline"),Q=o.querySelector(".lc-rating"),v=o.querySelector(".lc-rate-text"),u=o.querySelector(".lc-rate-up"),f=o.querySelector(".lc-rate-down");p.addEventListener("click",()=>{o.hidden=!o.hidden}),K.addEventListener("click",()=>{o.hidden=!0}),w.addEventListener("click",()=>{d.hidden=!1,d.textContent=t.consentDeclined}),m.addEventListener("click",async()=>{m.disabled=!0,w.disabled=!0;try{if(!(await fetch(`${e.apiBase}/api/tii/consent`,{method:"POST",headers:{"Content-Type":"application/json","x-guest-id":s},body:JSON.stringify({})})).ok){d.hidden=!1,d.textContent=t.consentError;return}P(s),W.hidden=!0,Y.hidden=!1,R=A(),y.focus()}catch{d.hidden=!1,d.textContent=t.consentError}finally{m.disabled=!1,w.disabled=!1}});function b(a,n){q();const r=document.createElement("div");r.className=`lc-msg lc-msg-${n}`,r.textContent=a,i.appendChild(r),i.scrollTop=i.scrollHeight,n==="bot"&&!G(s)&&(Q.hidden=!1)}async function _(a){u.disabled=!0,f.disabled=!0;try{const n=await fetch(`${e.apiBase}/api/tii/rating`,{method:"POST",headers:{"Content-Type":"application/json","x-guest-id":s},body:JSON.stringify({rating:a})});if(!n.ok){v.textContent=L(n.status,t),u.disabled=!1,f.disabled=!1;return}j(s),v.textContent=t.rateThanks,u.hidden=!0,f.hidden=!0}catch{v.textContent=t.rateError,u.disabled=!1,f.disabled=!1}}u.addEventListener("click",()=>{_("up")}),f.addEventListener("click",()=>{_("down")});function q(){i.querySelector(".lc-starters")?.remove()}function V(){q();const a=document.createElement("div");a.className="lc-msg lc-msg-bot";const n=document.createElement("p");n.textContent=t.limitReached;const r=document.createElement("a");r.className="lc-register-link",r.href=F,r.target="_blank",r.rel="noopener noreferrer",r.textContent=t.registerCta,a.append(n,r),i.appendChild(a),i.scrollTop=i.scrollHeight}function Z(a){if(a.length===0||i.children.length>0)return;const n=document.createElement("div");n.className="lc-starters";for(const r of a){const l=document.createElement("button");l.type="button",l.className="lc-starter",l.textContent=r,l.addEventListener("click",()=>N(r)),n.appendChild(l)}i.appendChild(n)}async function N(a){const n=a.trim();if(!(!n||!$(s))){B.disabled=!0,await R,b(n,"user");try{const r=await fetch(`${e.apiBase}/api/tii/chat`,{method:"POST",headers:{"Content-Type":"application/json","x-guest-id":s},body:JSON.stringify({message:n})});if(!r.ok){if(r.status===429){V();return}b(L(r.status,t),"bot");return}const l=await r.json();b(l.answer??t.genericError,"bot")}catch{b(t.genericError,"bot")}finally{B.disabled=!1}}}let R=h?A():Promise.resolve();async function A(){try{const a=await fetch(`${e.apiBase}/api/tii/chat`,{headers:{"x-guest-id":s}});if(!a.ok)return;const n=await a.json(),r=Array.isArray(n.history)?n.history:[];for(const O of r)b(O.content,O.role==="user"?"user":"bot");const l=Array.isArray(n.conversationStarters)?n.conversationStarters:[];Z(l)}catch{}}return X.addEventListener("submit",a=>{a.preventDefault();const n=y.value.trim();n&&(y.value="",N(n))}),g}function M(){const e=document.currentScript,c=e?.dataset.apiBase;if(!c){console.error("[librechat-widget] missing data-api-base attribute on script tag");return}const t=e?.dataset.lang??"th";T({apiBase:c,lang:t})}return typeof document<"u"&&document.currentScript&&M(),x.mount=T,Object.defineProperty(x,Symbol.toStringTag,{value:"Module"}),x})({});
