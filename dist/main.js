"use strict";(self.webpackChunkwebpack_set_up=self.webpackChunkwebpack_set_up||[]).push([[179],{426:(n,e,t)=>{t.d(e,{Z:()=>s});var o=t(81),a=t.n(o),i=t(645),r=t.n(i)()(a());r.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;500;700&display=swap);"]),r.push([n.id,".header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 20px;\n  background-color: #fff;\n  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);\n}\n\n.logo {\n  width: 150px;\n  height: auto;\n  }\n  \n  .nav-bar {\n  display: flex;\n  width: 60%;\n  }\n  \n  .nav-container {\n  display: flex;\n  gap: 30px;\n  text-decoration: none;\n  list-style-type: none;\n  }\n  \n  .nav-items {\n  font-size: 18px;\n  text-decoration: none;\n  font-family: 'Poppins', sans-serif;\n  color: #1a2236;\n  }\n  \n  .search-tv-shows {\n  display: flex;\n  margin: 40px 0;\n  align-items: center;\n  justify-content: center;\n  }\n  \n  input[type=\"search\"] {\n  height: 35px;\n  width: 70%;\n  border-radius: 8px;\n  border: 2px solid black;\n  padding: 5px;\n  font-size: 16px;\n  }\n  \n  .comment-button {\n  display: flex;\n  align-items: center;\n  }\n  \n  main {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  margin-top: 50px;\n  }\n  \n  .link a {\n  color: rgba(206, 205, 205, 0.753);\n  text-decoration: none;\n  }\n  \n  .show_items {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-bottom: 20px;\n  padding: 10px;\n  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.3);\n  }\n  \n  #list-of-shows {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  margin: 0 10%;\n  }\n  \n  .actions_name {\n  gap: 50px;\n  display: flex;\n  align-items: center;\n  font-family: 'Poppins', sans-serif;\n  }\n  \n  .icon {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  }\n  \n  .movie {\n  font-weight: 500;\n  font-size: 18px;\n  margin-top: 10px;\n  }\n  \n  .button {\n  padding: 5px;\n  font-size: 15px;\n  margin-top: 10px;\n  background-color: #1a2236;\n  color: white;\n  border: none;\n  border-radius: 5px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  }\n  \n  .button:hover {\n  background-color: #354c7d;\n  }\n  \n  .foot-item {\n  display: flex;\n  padding: 30px 60px;\n  align-items: center;\n  justify-content: space-between;\n  }\n  \n  .foot-line {\n  border: 1px solid black;\n  margin-top: 20px;\n  }\n\n/*  popup Windows  */\n\n.popIt {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 9999;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  backdrop-filter: blur(5px);\n  background-color: rgba(0, 0, 0, 0.5);\n}\n\n.pop {\n  position: relative;\n  padding: 30px;\n  background-color: white;\n  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);\n  border-radius: 5px;\n  max-width: 600px;\n  max-height: 90%;\n  overflow-y: auto;\n}\n\n.popup_image {\n  margin-bottom: 20px;\n  text-align: center;\n}\n\n.pop_image {\n  max-width: 100%;\n  max-height: 500px;\n  border-radius: 5px;\n}\n\n.close-button {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  font-size: 20px;\n  cursor: pointer;\n}\n\n.instructions {\n  margin-top: 20px;\n  font-weight: bold;\n}\n\n.add-comm {\n  margin-top: 20px;\n  font-weight: bold;\n}\n\n.form {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.form input,\n.form textarea {\n  width: 100%;\n  margin-bottom: 10px;\n  padding: 10px;\n  border-radius: 5px;\n  border: none;\n  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);\n}\n\n.form input:focus,\n.form textarea:focus {\n  outline: none;\n  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);\n}\n\n.submit-btn {\n  margin-top: 20px;\n  padding: 10px;\n  border: none;\n  border-radius: 5px;\n  background-color: #1e90ff;\n  color: white;\n  font-weight: bold;\n  cursor: pointer;\n}\n\n.submit-btn:hover {\n  background-color: #0071c5;\n}\n",""]);const s=r},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,a,i){"string"==typeof n&&(n=[[null,n,void 0]]);var r={};if(o)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(r[c]=!0)}for(var p=0;p<n.length;p++){var d=[].concat(n[p]);o&&r[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),a&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=a):d[4]="".concat(a)),e.push(d))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var i={},r=[],s=0;s<n.length;s++){var c=n[s],p=o.base?c[0]+o.base:c[0],d=i[p]||0,l="".concat(p," ").concat(d);i[p]=d+1;var u=t(l),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)e[u].references++,e[u].updater(m);else{var f=a(m,o);o.byIndex=s,e.splice(s,0,{identifier:l,updater:f,references:1})}r.push(l)}return r}function a(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,a){var i=o(n=n||[],a=a||{});return function(n){n=n||[];for(var r=0;r<i.length;r++){var s=t(i[r]);e[s].references--}for(var c=o(n,a),p=0;p<i.length;p++){var d=t(i[p]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}i=c}}},569:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,a&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},171:(n,e,t)=>{var o=t(379),a=t.n(o),i=t(795),r=t.n(i),s=t(569),c=t.n(s),p=t(565),d=t.n(p),l=t(216),u=t.n(l),m=t(589),f=t.n(m),x=t(426),g={};g.styleTagTransform=f(),g.setAttributes=d(),g.insert=c().bind(null,"head"),g.domAPI=r(),g.insertStyleElement=u(),a()(x.Z,g),x.Z&&x.Z.locals&&x.Z.locals;(async()=>{const n=document.getElementById("list-of-shows"),e=document.querySelector(".popup-comments");n.innerHTML="";const t=await fetch("https://api.tvmaze.com/shows/1/episodes"),o=await t.json();t.ok?(o.forEach((t=>{const o=document.createElement("section");o.classList.add("show_items");const a=document.createElement("div");a.classList.add("show_image");const i=document.createElement("div");i.innerHTML=` <img class="movie_image" src="${t.image.medium}" alt="${t.name}">`;const r=document.createElement("div");r.classList.add("actions_name");const s=document.createElement("p");s.innerHTML=`${t.name}`,s.classList.add("movie");const c=document.createElement("div");c.classList.add("icon");const p=document.createElement("span");p.classList.add("clickable"),document.createElement("i").innerHTML='<i class="fa-solid fa-heart"></i>';const d=document.createElement("p");d.innerText="2 Likes";const l=document.createElement("div");l.classList.add("comment-button");const u=document.createElement("button");u.innerText="Comments",u.classList.add("button"),l.append(u),c.append(p,d),r.append(s,c),a.append(i),o.append(a,r,l),n.append(o),u.addEventListener("click",(()=>{e.innerHTML=`\n        <div class="popIt">\n\n        <div class="pop">\n\n          <span class="close-button">&times;</span>\n\n            <div class="popup_image">\n            <img class="pop_image" src="${t.image.medium}" alt="asdf">\n            </div>\n\n               <p class="pop_meal">Name: ${t.name}</p>\n               <p>Ratings: ${t.rating.average}</p>\n               <p class="instructions">Airdate: ${t.airdate}</p>\n               <p>Runtime: ${t.runtime}</p>\n\n                 <div class="comment_count"></div>\n\n          <button class="view_more">Refresh Comments</button>\n         \n          <div class="pop_comment"></div>\n          <div id="commentList"></div>\n\n          <h3 class="add-comm">Add a comment</h3>\n\n          <div class="inputDiv">\n            <form class="form">\n              <input id="name" type="text" name="user" required placeholder="Your Name"><br>\n              <textarea id="text" type="text" rows="6" name="text" required placeholder="Your insight"></textarea><br>\n              <div>\n                <button class="submit-btn" type="submit">Comment</button>\n              </div>\n            </form>\n           </div>\n\n        </div>\n\n      </div>\n      `,e.style.display="flex",document.body.style.overflow="hidden"}))})),document.querySelector(".close-button").addEventListener("click",(()=>{e.style.display="none",document.body.style.overflow="auto"}))):n.innerText="Server Down"})()}},n=>{n(n.s=171)}]);