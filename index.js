import{a as l,S as u,i as d}from"./assets/vendor-DUzvakyU.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const f="49301647-30570283b511de5f9e60954e8",m="https://pixabay.com/api/";async function p(o){try{const r=await l.get(m,{params:{key:f,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}});return console.log(r.data),r.data.hits}catch(r){return console.error("Error fetching images:",r),[]}}const y=document.querySelector(".gallery");let g=new u(".gallery a",{captionsData:"alt",captionDelay:250});function h(o){y.innerHTML=o.map(({webformatURL:r,largeImageURL:i,tags:a,likes:e,views:t,comments:s,downloads:c})=>`
        <li class="gallery-item">
            <a href="${i}">
                <img src="${r}" alt="${a}" loading="lazy" />
            </a>
            <div class="info">
                <p>❤️ ${e} Likes</p>
                <p>👁️ ${t} Views</p>
                <p>💬 ${s} Comments</p>
                <p>⬇️ ${c} Downloads</p>
            </div>
        </li>
    `).join(""),g.refresh()}function L(){document.querySelector(".loader").classList.add("visible")}function b(){document.querySelector(".loader").classList.remove("visible")}function n(o){d.error({title:"Error",message:o,position:"topRight"})}document.querySelector(".form").addEventListener("submit",async o=>{o.preventDefault();const r=o.target.elements["search-text"].value.trim();if(!r){n("Please enter a search term!");return}L();const i=await p(r);b(),i.length===0?n("Sorry, there are no images matching your search query. Please try again!"):h(i)});
//# sourceMappingURL=index.js.map
