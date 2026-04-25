import{a as u,S as d,i as c}from"./assets/vendor-Do60_h77.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&l(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const m="55463829-87ababc408fcd8cb97ff0a765";async function g(s,a=1){return(await u.get("https://pixabay.com/api/",{params:{key:m,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:40,page:a}})).data}const o=document.querySelector(".gallery"),i=document.querySelector(".loader");let f=new d(".gallery a",{captionsData:"alt",captionDelay:250});function y(s){if(!o)return;const a=s.map(t=>`
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
    `).join("");o.insertAdjacentHTML("beforeend",a),typeof f<"u"&&f.refresh()}function h(){o&&(o.innerHTML="")}function L(){i&&i.classList.add("active")}function b(){i&&i.classList.remove("active")}const p=document.querySelector(".form");p&&p.addEventListener("submit",async s=>{s.preventDefault();const a=s.target.elements["search-text"].value.trim();if(!a){c.warning({title:"Caution",message:"Please enter a search query!",position:"topRight"});return}h(),L();try{const t=await g(a);if(t.hits.length===0){c.error({title:"No Results",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}y(t.hits)}catch{c.error({title:"Error",message:"Failed to fetch images. Please try again later.",position:"topRight"})}finally{b()}});
//# sourceMappingURL=index.js.map
