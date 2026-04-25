import{a as u,S as f,i}from"./assets/vendor-Do60_h77.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&c(o)}).observe(document,{childList:!0,subtree:!0});function t(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function c(e){if(e.ep)return;e.ep=!0;const a=t(e);fetch(e.href,a)}})();const p="55463829-87ababc408fcd8cb97ff0a765";async function d(s,r=1){return(await u.get("https://pixabay.com/api/",{params:{key:p,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:40,page:r}})).data}const n=document.querySelector(".gallery");document.querySelector(".loader");let l=new f(".gallery a",{captionsData:"alt",captionDelay:250});function m(s){if(!n)return;const r=s.map(t=>`
        <li class="gallery-item">
        <a class="item-link" href="${t.largeImageURL}">
            <img class="gallery-image" src="${t.webformatURL}" alt="${t.tags}" />
        </a>
        <div class="img-info-wrapper">
            <p class="img-info">Likes: <span class="info-accent">${t.likes}</span></p>
            <p class="img-info">Views: <span class="info-accent">${t.views}</span></p>
            <p class="img-info">Comments: <span class="info-accent">${t.comments}</span></p>
            <p class="img-info">Downloads: <span class="info-accent">${t.downloads}</span></p>
        </div>
        </li>
    `).join("");n.insertAdjacentHTML("beforeend",r),typeof l<"u"&&l.refresh()}function y(){n.innerHTML=""}function g(){document.querySelector(".loader").classList.add("active")}function h(){document.querySelector(".loader").classList.remove("active")}function L(s){return new Promise(r=>setTimeout(r,s))}const w=document.querySelector(".form");w.addEventListener("submit",async s=>{s.preventDefault();const r=s.target.elements["search-text"].value.trim();if(!r){i.warning({title:"Caution",message:"Please enter a search query!",position:"topRight"});return}y(),g();try{const t=await d(r);if(await L(500),t.hits.length===0){i.error({title:"No Results",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}m(t.hits)}catch{i.error({title:"Error",message:"Failed to fetch images. Please try again later.",position:"topRight"})}finally{h()}});
//# sourceMappingURL=index.js.map
