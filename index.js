import{S as f,i as d}from"./assets/vendor-5ObWk2rO.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();function i(r){const s="https://pixabay.com",o="52236673-dfbbe0e7dd19cbeb92e7645c8",n="/api/",e=new URLSearchParams({key:o,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${s}${n}?${e}`).then(t=>{if(!t.ok)throw new Error(t.status);return t.json().then(a=>a.hits)})}new f(".gallery a",{captionsData:"alt",captionDelay:250});const m=document.querySelector(".gallery"),l=document.querySelector(".loader");function p(r){return r.map(({webformatURL:s,largeImageURL:o,tags:n,likes:e,views:t,comments:a,downloads:u})=>`<li class="gallery-item">
        <a class="gallery-link" href="${o}">
          <img
            class="gallery-image"
            src="${s}"
            alt="${n}"
          />
          <div class="info">
            <div class="info-item">
              <span class="info-label">Likes</span>
              <span class="info-value">${e}</span>
            </div>
            <div class="info-item">
              <span class="info-label">Views</span>
              <span class="info-value">${t}</span>
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
      </li>`).join("")}function y(){m.innerHTML=""}function h(){l.classList.remove("is-hidden")}function g(){l.classList.add("is-hidden")}const v=document.querySelector(".gallery"),c=document.querySelector(".form");c.addEventListener("submit",L);function L(r){r.preventDefault(),y(),h();const s=r.currentTarget.elements["search-text"].value.trim();i(s).then(o=>{const n=o;if(n.length===0){d.error({title:"Error",message:"❌ Sorry, there are no images matching your search query. Please try again!"});return}v.innerHTML=p(n),gallery.refresh()}).catch(o=>{}).finally(()=>{g(),c.reset()})}i("car").then(r=>{console.log(r)}).catch(r=>{console.log(r)});
//# sourceMappingURL=index.js.map
