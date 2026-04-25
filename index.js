import{a as l,S as f,i as n}from"./assets/vendor-Do60_h77.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function r(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(e){if(e.ep)return;e.ep=!0;const a=r(e);fetch(e.href,a)}})();const u="55463829-87ababc408fcd8cb97ff0a765";async function p(s,t=1){return(await l.get("https://pixabay.com/api/",{params:{key:u,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:40,page:t}})).data}const c=document.querySelector(".gallery");let m=new f(".gallery a",{captionsData:"alt",captionDelay:250});function d(s){const t=s.map(r=>`
        <li class="gallery-item">
        <a class="item-link" href="${r.largeImageURL}">
            <img class="gallery-image" src="${r.webformatURL}" alt="${r.tags}" />
        </a>
        <div class="img-info-wrapper">
            <p class="img-info">Likes: <span class="info-accent">${r.likes}</span></p>
            <p class="img-info">Views: <span class="info-accent">${r.views}</span></p>
            <p class="img-info">Comments: <span class="info-accent">${r.comments}</span></p>
            <p class="img-info">Downloads: <span class="info-accent">${r.downloads}</span></p>
        </div>
        </li>
    `).join("");c.insertAdjacentHTML("beforeend",t),m.refresh()}function y(){c.innerHTML=""}function g(){document.querySelector(".loader").classList.add("active")}function h(){document.querySelector(".loader").classList.remove("active")}function L(s){return new Promise(t=>setTimeout(t,s))}const w=document.querySelector(".form");w.addEventListener("submit",async s=>{s.preventDefault();const t=s.target.elements["search-text"].value.trim();if(!t){n.error({message:"Please enter a search query!"});return}y(),g();try{const r=await p(t);if(await L(500),r.hits.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!"});return}d(r.hits)}catch{n.error({message:"Error fetching images"})}finally{h()}});
//# sourceMappingURL=index.js.map
