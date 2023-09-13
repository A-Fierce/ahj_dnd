!function(){"use strict";class e{static createNewCardWidget(e){const t=document.querySelector(`.${e}`);document.querySelector(`.${e} footer`).style.display="none";const n=document.createElement("div");n.className="new-card-widget",t.append(n);const o=document.createElement("textarea");o.className="new-card-text",o.setAttribute("placeholder","Please describe the task..."),o.setAttribute("rows","3");const c=document.createElement("footer");c.className="new-card-widget-footer",n.append(o),n.append(c);const a=document.createElement("button");a.className="add-button",a.textContent="Add card",c.append(a);const s=document.createElement("div");s.classList="widget-footer-block",c.append(s);const l=document.createElement("p");l.classList="card-widget-close",l.textContent="✖";const r=document.createElement("p");r.classList="card-widget-context",r.textContent="⋯",s.append(l),s.append(r)}}class t{static createNewCard(e,t){const n=document.querySelector(`.${e}`),o=document.querySelector(`.${e} footer`),c=document.createElement("p");c.className="card-window moveable",n.append(c),c.textContent=t,c.style.position="relative";const a=document.createElement("div");a.className="card-close",a.textContent="✖",c.append(a),o.before(c),c.addEventListener("mouseenter",(()=>{c.querySelector(".card-close").style.display="block"})),c.addEventListener("mouseleave",(()=>{c.querySelector(".card-close").style.display="none"}))}}class n{static chargePopUp(e){const t=document.createElement("div");t.className="widget-hint";const n=document.createElement("p");n.className="widget-hint-content",n.textContent="Sorry! Not available now. Stay tune!",t.append(n),document.body.appendChild(t);const{top:o,left:c}=e.getBoundingClientRect();o<=t.clientHeight?t.style.top=`${window.scrollY+o+e.clientHeight}px`:t.style.top=window.scrollY+o-t.clientHeight+"px",t.style.left=window.scrollX+c-(t.clientWidth-e.clientWidth)/2+"px",setTimeout((()=>{t.remove()}),1500)}}class o{static setRotation(e,t,n){e.clientX-t.getBoundingClientRect().left>=t.getBoundingClientRect().right-e.clientX?n.classList.add("rotate-left"):n.classList.add("rotate-right")}}new class{constructor(){this.createContentBoard()}createContentBoard(){const e=document.querySelector("body"),t=document.createElement("div");t.className="content-board",e.append(t);const n=document.createElement("main");n.className="task-board",t.append(n);const o=document.createElement("aside");o.className="info-board",t.append(o)}},new class{constructor(){this.createTaskColumns()}createTaskColumns(){const e=document.querySelector(".task-board"),t=document.createElement("section");t.className="to-do column dropable",e.append(t);const n=document.createElement("section");n.className="in-progress column dropable",e.append(n);const o=document.createElement("section");o.className="done column dropable",e.append(o);const c=document.createElement("header");t.append(c);const a=document.createElement("header");n.append(a);const s=document.createElement("header");o.append(s);const l=document.createElement("footer");l.className="footer to-do",t.append(l);const r=document.createElement("p");r.className="add-card-button",l.append(r),r.textContent="✙ Add another card";const d=document.createElement("footer");d.className="footer in-progess",n.append(d);const i=document.createElement("p");i.className="add-card-button",d.append(i),i.textContent="✙ Add another card";const m=document.createElement("footer");m.className="footer done",o.append(m);const u=document.createElement("p");u.className="add-card-button",m.append(u),u.textContent="✙ Add another card";const p=document.createElement("p"),g=document.createElement("div");g.classList="column-header-button",g.textContent="⋯",c.append(p),p.textContent="todo",c.append(g);const E=document.createElement("p"),y=document.createElement("div");y.classList="column-header-button",y.textContent="⋯",a.append(E),E.textContent="in progress",a.append(y);const f=document.createElement("p"),h=document.createElement("div");h.classList="column-header-button",h.textContent="⋯",s.append(f),f.textContent="done",s.append(h)}},new class{constructor(){this.reconstruction(),this.clickEvents(),this.dragEvents()}clickEvents(){document.querySelector(".task-board").addEventListener("click",(o=>{if(o.target.classList.contains("add-card-button")){document.querySelector(".new-card-widget")&&this.closeOldWidget();const t=o.target.closest(".column").className.split(" ");e.createNewCardWidget(t[0])}else if(o.target.classList.contains("card-widget-close"))this.closeOldWidget();else if(o.target.classList.contains("add-button")){const e=o.target.closest(".column").className.split(" "),n=document.querySelector(".new-card-text").value;t.createNewCard(e[0],n),this.closeOldWidget(),this.saveData()}else if(o.target.classList.contains("card-close")){o.target.closest(".card-window").remove(),this.saveData()}else(o.target.classList.contains("column-header-button")||o.target.classList.contains("card-widget-context"))&&n.chargePopUp(o.target)}))}dragEvents(){let e=null,t=null,n=null;const c=document.querySelector(".task-board");c.addEventListener("mousedown",(a=>{if(!a.target.classList.contains("card-window"))return;a.target.ondragstart=function(){return!1},this.removePointerEvents(),e=a.target,t=a.target.cloneNode(!0),n=a.target.cloneNode(!0),n.style.opacity="0";const s=a.clientX-e.getBoundingClientRect().left+c.getBoundingClientRect().left,l=a.clientY-e.getBoundingClientRect().top+c.getBoundingClientRect().top;t.classList.add("dragged"),t.style.pointerEvents="none",t.style.position="absolute",t.style.zIndex="9",t.style.cursor="grabbing",t.classList.add("size-fixed");const r=`${e.offsetHeight}px`,d=`${e.offsetWidth}px`;t.style.setProperty("--element-height",r),t.style.setProperty("--element-width",d),e.classList.add("invisible"),document.body.appendChild(t),t.style.left=a.pageX-s+"px",t.style.top=a.pageY-l+"px",o.setRotation(a,e,t),c.addEventListener("mousemove",(o=>{if(o.preventDefault(),!e)return;t.style.left=o.pageX-s+"px",t.style.top=o.pageY-l+"px";const c=document.elementFromPoint(o.clientX,o.clientY);c.classList.contains("moveable")?(c.closest(".column").insertBefore(n,c),n.addEventListener("mouseleave",(e=>{e.target.remove()}))):"HEADER"===c.tagName?(c.after(n),n.addEventListener("mouseleave",(e=>{e.target.remove()}))):"FOOTER"===c.tagName&&(c.closest(".column").insertBefore(n,c),n.addEventListener("mouseleave",(e=>{e.target.remove()})))})),c.addEventListener("mouseleave",(()=>{e&&(e.classList.remove("invisible"),document.body.removeChild(t),t=null,e=null)}))})),c.addEventListener("mouseup",(o=>{if(!e)return;const c=document.elementFromPoint(o.clientX,o.clientY);let a;const s=c.closest(".dropable");if(c.classList.contains("moveable")){c.getBoundingClientRect().top>=t.getBoundingClientRect().top?s.insertBefore(e,c):c.after(e),a=c.querySelector(".card-close"),a.style.display="none"}else{if(c.classList.contains("moveable"))return;"HEADER"===c.tagName?c.after(e):"FOOTER"===c.tagName?s.insertBefore(e,s.lastChild):"SECTION"===c.tagName&&c.firstChild.after(e)}n&&n.remove(),this.restorePointerEvents(),e.classList.remove("invisible"),document.body.removeChild(t),t=null,e=null,this.saveData()}))}saveData(){localStorage.removeItem("check-list data");const e=document.querySelector(".to-do"),t=document.querySelector(".in-progress"),n=document.querySelector(".done"),o=e.querySelectorAll(".card-window");let c=null;o&&(c=[...o]);const a=t.querySelectorAll(".card-window");let s=null;a&&(s=[...a]);const l=n.querySelectorAll(".card-window");let r=null;l&&(r=[...l]);const d={};c&&c.forEach(((e,t)=>{d[t]=e.innerText}));const i={};s&&s.forEach(((e,t)=>{i[t]=e.innerText}));const m={};r&&r.forEach(((e,t)=>{m[t]=e.innerText}));const u={"to-do":d,"in-progress":i,done:m};localStorage.setItem("check-list data",JSON.stringify(u))}reconstruction(){if(localStorage.getItem("check-list data")){const e=JSON.parse(localStorage.getItem("check-list data"));if(0!==Object.keys(e["to-do"]).length)for(const n in e["to-do"])t.createNewCard("to-do",e["to-do"][n]);if(0!==Object.keys(e["in-progress"]).length)for(const n in e["in-progress"])t.createNewCard("in-progress",e["in-progress"][n]);if(0!==Object.keys(e.done).length)for(const n in e.done)t.createNewCard("done",e.done[n])}}closeOldWidget(){const e=document.querySelector(".new-card-widget");e.closest(".column").querySelector("footer").style.display="block",e.remove()}removePointerEvents(){[...document.querySelectorAll(".column header p")].forEach((e=>{e.style.pointerEvents="none"}));[...document.querySelectorAll(".column header div")].forEach((e=>{e.style.pointerEvents="none"}));[...document.querySelectorAll(".column footer p")].forEach((e=>{e.style.pointerEvents="none"}));[...document.querySelectorAll(".card-close")].forEach((e=>{e.style.pointerEvents="none"}))}restorePointerEvents(){[...document.querySelectorAll(".column header p")].forEach((e=>{e.style.pointerEvents="auto"}));[...document.querySelectorAll(".column header div")].forEach((e=>{e.style.pointerEvents="auto"}));[...document.querySelectorAll(".column footer p")].forEach((e=>{e.style.pointerEvents="auto"}));[...document.querySelectorAll(".card-close")].forEach((e=>{e.style.pointerEvents="auto"}))}},new class{constructor(){this.fillInfoColumn()}fillInfoColumn(){const e=document.querySelector(".info-board"),t=document.createElement("div");t.className="info",e.append(t);const n=document.createElement("h1");n.className="info-header",n.textContent="Welcome!",t.append(n);const o=document.createElement("p");o.className="info-card",o.textContent="Here is our simplified taskmanager.",t.append(o);const c=document.createElement("p");c.className="info-card",c.textContent="Here You can:",t.append(c);const a=document.createElement("ul");a.className="can-do-list",t.append(a);const s=document.createElement("li");s.textContent="Add tasks by creating them into columns accordingly to their status!",a.append(s);const l=document.createElement("li");l.textContent="Remove any task if its time has come.",a.append(l);const r=document.createElement("li");r.textContent="Or you can just take any task and move it to another column if its status has already changed.",a.append(r);const d=document.createElement("p");d.className="info-card",d.textContent="We hope you will stay with us and have fun!",t.append(d)}}}();