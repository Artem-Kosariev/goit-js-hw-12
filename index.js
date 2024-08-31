import{a as L,i as u,S as w}from"./assets/vendor-BqXYO31Q.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const y of r.addedNodes)y.tagName==="LINK"&&y.rel==="modulepreload"&&s(y)}).observe(document,{childList:!0,subtree:!0});function c(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=c(e);fetch(e.href,r)}})();async function m(a,t){return(await L.get("https://pixabay.com/api/",{params:{key:"45587687-18c2674304307818951f0e796",q:`${a.trim()}`,image_type:"photo",per_page:15,page:t,safesearch:!0,orientation:"horizontal"}})).data}function f(a){const t=document.querySelector(".gallery"),c=a.map(s=>`<li class="gallery-item">
            <a class="gallery-link" href="${s.largeImageURL}" download=false>
                <img src="${s.webformatURL}" alt="${s.tags}" class="gallery-img" width=360  onclick="return false" data-source="${s.largeImageURL}">
                <ul class="description">
                    <li>
                    <p>Likes</p>
                    <p class="description-value">${s.likes}</p>
                    </li>
                    <li>
                    <p>Views</p>
                    <p class="description-value">${s.views}</p>
                    </li>
                    <li>
                    <p>Comments</p>
                    <p class="description-value">${s.comments}</p>
                    </li>
                    <li>
                    <p>Downloads</p>
                    <p class="description-value">${s.downloads}</p>
                    </li>
                </ul>
            </a>
            </li>
            `).join("");t.insertAdjacentHTML("beforeend",c)}const g=document.querySelector(".form"),b=document.querySelector('input[name="query"]'),q=document.querySelector(".gallery"),i=document.querySelector(".loader"),o=document.querySelector(".show-more");u.settings({messageColor:"#fafafb",position:"bottomRight",backgroundColor:"#ef4040",iconColor:"#fafafb",close:!1});let h=new w(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250}),d="",n=1,l,p;const v=15,S=async a=>{if(a.preventDefault(),d=b.value.trim(),d===""){u.show({message:"Please enter a search query."});return}q.innerHTML="",n=1,i.classList.remove("visually-hidden"),o.classList.add("visually-hidden");try{if(l=await m(d,n),p=Math.ceil(l.total/v),l.hits.length===0){u.show({message:"Sorry, there are no images matching your search query. Please try again!"}),i.classList.add("visually-hidden");return}p<=1?o.classList.add("visually-hidden"):o.classList.remove("visually-hidden"),f(l.hits),h.refresh()}catch(t){console.log(t)}finally{i.classList.add("visually-hidden"),g.reset()}},P=async()=>{n+=1;try{o.classList.add("visually-hidden"),i.classList.remove("visually-hidden"),l=await m(d,n),f(l.hits),h.refresh();const t=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:t*2,behavior:"smooth"}),l.total<=Math.ceil(n*v)?(o.classList.add("visually-hidden"),u.show({message:"We're sorry, but you've reached the end of search results."})):o.classList.remove("visually-hidden")}catch(a){console.log(a)}finally{i.classList.add("visually-hidden")}};g.addEventListener("submit",S);o.addEventListener("click",P);
//# sourceMappingURL=index.js.map
