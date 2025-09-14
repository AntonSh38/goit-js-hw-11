import{a as d,S as m,i as o}from"./assets/vendor-CB6h_oUl.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();function p(s){const t="https://pixabay.com",n="52236673-dfbbe0e7dd19cbeb92e7645c8",a="/api/",e={key:n,q:s,image_type:"photo",orientation:"horizontal",safesearch:"true"};return d.get(`${t}${a}`,{params:e}).then(r=>r.data.hits)}const g=new m(".gallery a",{captionsData:"alt",captionDelay:250}),l=document.querySelector(".gallery"),c=document.querySelector(".loader");function y(s){return s.map(({webformatURL:t,largeImageURL:n,tags:a,likes:e,views:r,comments:i,downloads:f})=>`<li class="gallery-item">
        <a class="gallery-link" href="${n}">
          <img
            class="gallery-image"
            src="${t}"
            alt="${a}"
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
              <span class="info-value">${i}</span>
            </div>
            <div class="info-item">
              <span class="info-label">Downloads</span>
              <span class="info-value">${f}</span>
            </div>
          </div>
        </a>
      </li>`).join("")}function h(s){l.innerHTML=y(s),g.refresh()}function v(){l.innerHTML=""}function b(){c.classList.remove("is-hidden")}function L(){c.classList.add("is-hidden")}const u=document.querySelector(".form");u.addEventListener("submit",E);function E(s){s.preventDefault();const t=s.currentTarget.elements["search-text"].value.trim();if(!t){o.warning({title:"Warning",message:"please enter a search query"});return}v(),b(),p(t).then(n=>{const a=n;if(a.length===0){o.error({title:"Error",message:"❌ Sorry, there are no images matching your search query. Please try again!"});return}h(a)}).catch(n=>{console.error("Error fetching images:",n),o.error({title:"Error",message:"Something went wrong. Please try again later."})}).finally(()=>{L(),u.reset()})}
//# sourceMappingURL=index.js.map
