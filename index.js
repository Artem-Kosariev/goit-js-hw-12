import{a as h,i as u,S as v}from"./assets/vendor-BqXYO31Q.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const p of r.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&t(p)}).observe(document,{childList:!0,subtree:!0});function c(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(e){if(e.ep)return;e.ep=!0;const r=c(e);fetch(e.href,r)}})();async function y(o,s){return(await h.get("https://pixabay.com/api/",{params:{key:"45587687-18c2674304307818951f0e796",q:`${o.trim()}`,image_type:"photo",per_page:15,page:s,safesearch:!0,orientation:"horizontal"}})).data}function m(o){const s=document.querySelector(".gallery"),c=o.map(t=>`<li class="gallery-item">
            <a class="gallery-link" href="${t.largeImageURL}" download=false>
                <img src="${t.webformatURL}" alt="${t.tags}" class="gallery-img" width=360  onclick="return false" data-source="${t.largeImageURL}">
                <ul class="description">
                    <li>
                    <p>Likes</p>
                    <p class="description-value">${t.likes}</p>
                    </li>
                    <li>
                    <p>Views</p>
                    <p class="description-value">${t.views}</p>
                    </li>
                    <li>
                    <p>Comments</p>
                    <p class="description-value">${t.comments}</p>
                    </li>
                    <li>
                    <p>Downloads</p>
                    <p class="description-value">${t.downloads}</p>
                    </li>
                </ul>
            </a>
            </li>
            `).join("");s.insertAdjacentHTML("beforeend",c)}const f=document.querySelector(".form"),L=document.querySelector('input[name="query"]'),w=document.querySelector(".gallery"),i=document.querySelector(".loader"),l=document.querySelector(".show-more");u.settings({messageColor:"#fafafb",position:"bottomRight",backgroundColor:"#ef4040",iconColor:"#fafafb",close:!1});let g=new v(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250}),d="",n=1,a;const b=15,q=async o=>{if(o.preventDefault(),d=L.value.trim(),d===""){u.show({message:"Please enter a search query."});return}w.innerHTML="",n=1,i.classList.remove("visually-hidden");try{if(a=await y(d,n),a.hits.length===0){u.show({message:"Sorry, there are no images matching your search query. Please try again!"}),i.classList.add("visually-hidden");return}a.hits.length<=15?l.classList.add("visually-hidden"):l.classList.remove("visually-hidden"),m(a.hits),g.refresh()}catch(s){console.log(s)}finally{i.classList.add("visually-hidden"),f.reset()}},S=async()=>{n+=1;try{l.classList.add("visually-hidden"),i.classList.remove("visually-hidden"),a=await y(d,n),m(a.hits),g.refresh();const s=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:s*2,behavior:"smooth"}),a.total<=Math.ceil(n*b)?(l.classList.add("visually-hidden"),u.show({message:"We're sorry, but you've reached the end of search results."})):l.classList.remove("visually-hidden")}catch(o){console.log(o)}finally{i.classList.add("visually-hidden")}};f.addEventListener("submit",q);l.addEventListener("click",S);
//# sourceMappingURL=index.js.map
