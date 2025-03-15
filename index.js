import{S as u,i as d}from"./assets/vendor-Dg3uDB0e.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&t(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();function f(o){return fetch(`https://pixabay.com/api/?key=49301647-30570283b511de5f9e60954e8&q=${o}&image_type=photo`).then(t=>t.json()).then(t=>t.hits).catch(t=>(console.error("Помилка запиту:",t),[]))}const p=document.querySelector(".gallery");let m=new u(".gallery a",{captionsData:"alt",captionDelay:250});function h(o){p.innerHTML=o.map(({webformatURL:i,largeImageURL:n,tags:t,likes:e,views:r,comments:s,downloads:l})=>`
        <li class="gallery-item">
            <a href="${n}">
                <img src="${i}" alt="${t}" loading="lazy" />
            </a>
            <div class="info">
                <p>❤️ ${e} Likes</p>
                <p>👁️ ${r} Views</p>
                <p>💬 ${s} Comments</p>
                <p>⬇️ ${l} Downloads</p>
            </div>
        </li>
    `).join(""),m.refresh()}function y(){document.querySelector(".loader").classList.add("visible")}function c(){document.querySelector(".loader").classList.remove("visible")}function a(o){d.error({title:"Error",message:o,position:"topRight"})}document.querySelector(".form").addEventListener("submit",o=>{o.preventDefault();const i=o.target.elements["search-text"].value.trim();if(!i){a("Please enter a search term!");return}y(),f(i).then(n=>{if(c(),n.length===0){a("Sorry, there are no images matching your search query. Please try again!");return}h(n)}).catch(n=>{c(),console.error("Помилка отримання даних:",n)})});
//# sourceMappingURL=index.js.map
