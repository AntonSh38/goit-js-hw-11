import{S as f,i}from"./assets/vendor-5ObWk2rO.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();function d(o){const t="https://pixabay.com",n="52236673-dfbbe0e7dd19cbeb92e7645c8",s="/api/",e=new URLSearchParams({key:n,q:o,image_type:"photo",orientation:"horizontal",safesearch:"true"});return fetch(`${t}${s}?${e}`).then(r=>{if(!r.ok)throw new Error(r.status);return r.json().then(a=>a.hits)})}const m=new f(".gallery a",{captionsData:"alt",captionDelay:250}),p=document.querySelector(".gallery"),l=document.querySelector(".loader");function y(o){return o.map(({webformatURL:t,largeImageURL:n,tags:s,likes:e,views:r,comments:a,downloads:u})=>`<li class="gallery-item">
        <a class="gallery-link" href="${n}">
          <img
            class="gallery-image"
            src="${t}"
            alt="${s}"
          />
          <div class="info">
            <div class="info-item">
              <span class="info-label">Likes</span>
              <span class="info-value">${e}</span>
            </div>
            <div class="info-item">
              <span class="info-label">Views</span>
              <span class="info-value">${r}</span>
            </div>
            <div class="info-item">
              <span class="info-label">Comments</span>
              <span class="info-value">${a}</span>
            </div>
            <div class="info-item">
              <span class="info-label">Downloads</span>
              <span class="info-value">${u}</span>
            </div>
          </div>
        </a>
      </li>`).join("")}function h(){p.innerHTML=""}function g(){l.classList.remove("is-hidden")}function v(){l.classList.add("is-hidden")}const L=document.querySelector(".gallery"),c=document.querySelector(".form");c.addEventListener("submit",b);function b(o){o.preventDefault(),h(),g();const t=o.currentTarget.elements["search-text"].value.trim();d(t).then(n=>{const s=n;if(s.length===0){i.error({title:"Error",message:"❌ Sorry, there are no images matching your search query. Please try again!"});return}L.innerHTML=y(s),m.refresh()}).catch(n=>{i.error({title:"Error",message:"Something went wrong. Please try again later."})}).finally(()=>{v(),c.reset()})}
//# sourceMappingURL=index.js.map
