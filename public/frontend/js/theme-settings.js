!function(){var e,t,a,o,n,s,d,r,i,l,m,c,u,g,b=document.querySelector(".sidebar").innerHTML,y=localStorage.getItem("language");function f(e){var t;document.getElementById("header-lang-img")&&("en"==e?document.getElementById("header-lang-img").src="assets/images/flags/us.svg":"sp"==e?document.getElementById("header-lang-img").src="assets/images/flags/spain.svg":"gr"==e?document.getElementById("header-lang-img").src="assets/images/flags/germany.svg":"it"==e?document.getElementById("header-lang-img").src="assets/images/flags/italy.svg":"ru"==e?document.getElementById("header-lang-img").src="assets/images/flags/russia.svg":"ch"==e?document.getElementById("header-lang-img").src="assets/images/flags/china.svg":"fr"==e&&(document.getElementById("header-lang-img").src="assets/images/flags/french.svg"),localStorage.setItem("language",e),null==(y=localStorage.getItem("language"))&&f("en"),(t=new XMLHttpRequest).open("GET","assets/lang/"+y+".json"),t.onreadystatechange=function(){var e;4===this.readyState&&200===this.status&&(e=JSON.parse(this.responseText),Object.keys(e).forEach((function(t){var a=document.querySelectorAll("[data-key='"+t+"']");Array.from(a).forEach((function(a){a.textContent=e[t]}))})))},t.send())}function p(){var e;document.querySelectorAll(".navbar-nav .collapse")&&(e=document.querySelectorAll(".navbar-nav .collapse"),Array.from(e).forEach((function(e){var t=new bootstrap.Collapse(e,{toggle:!1});e.addEventListener("show.bs.collapse",(function(a){var o;a.stopPropagation(),(a=e.parentElement.closest(".collapse"))?(o=a.querySelectorAll(".collapse"),Array.from(o).forEach((function(e){(e=bootstrap.Collapse.getInstance(e))!==t&&e.hide()}))):(o=function(e){for(var t=[],a=e.parentNode.firstChild;a;)1===a.nodeType&&a!==e&&t.push(a),a=a.nextSibling;return t}(e.parentElement),Array.from(o).forEach((function(e){2<e.childNodes.length&&e.firstElementChild.setAttribute("aria-expanded","false"),e=e.querySelectorAll("*[id]"),Array.from(e).forEach((function(e){e.classList.remove("show"),2<e.childNodes.length&&(e=e.querySelectorAll("ul li a"),Array.from(e).forEach((function(e){e.hasAttribute("aria-expanded")&&e.setAttribute("aria-expanded","false")})))}))})))})),e.addEventListener("hide.bs.collapse",(function(t){t.stopPropagation(),t=e.querySelectorAll(".collapse"),Array.from(t).forEach((function(e){(childCollapseInstance=bootstrap.Collapse.getInstance(e)).hide()}))}))})))}function E(){var e,t,a=document.documentElement.getAttribute("data-layout"),o=sessionStorage.getItem("defaultAttribute");(o=JSON.parse(o))&&("twocolumn"==a||"twocolumn"==o["data-layout"])&&(document.querySelector(".sidebar").innerHTML=b,(e=document.createElement("ul")).innerHTML='<a href="#" class="logo"><img src="assets/img/logo.png" alt="User Image" height="22"></a>',Array.from(document.getElementById("navbar-nav").querySelectorAll(".menu-link")).forEach((function(t){e.className="twocolumn-iconview";var a=document.createElement("li"),o=t;Array.from(o.querySelectorAll("span")).forEach((function(e){e.classList.add("d-none")})),t.parentElement.classList.contains("twocolumn-item-show")&&t.classList.add("active"),a.appendChild(o),e.appendChild(a),o.classList.contains("nav-link")&&o.classList.replace("nav-link","nav-icon"),o.classList.remove("collapsed","menu-link")})),(o=(o="/"==location.pathname?"index.html":location.pathname.substring(1)).substring(o.lastIndexOf("/")+1))&&(!(o=document.getElementById("navbar-nav").querySelector('[href="'+o+'"]'))||(t=o.closest(".collapse.menu-dropdown"))&&(t.classList.add("show"),t.parentElement.children[0].classList.add("active"),t.parentElement.children[0].setAttribute("aria-expanded","true"),t.parentElement.closest(".collapse.menu-dropdown")&&(t.parentElement.closest(".collapse").classList.add("show"),t.parentElement.closest(".collapse").previousElementSibling&&t.parentElement.closest(".collapse").previousElementSibling.classList.add("active"),t.parentElement.parentElement.parentElement.parentElement.closest(".collapse.menu-dropdown")&&(t.parentElement.parentElement.parentElement.parentElement.closest(".collapse").classList.add("show"),t.parentElement.parentElement.parentElement.parentElement.closest(".collapse").previousElementSibling&&t.parentElement.parentElement.parentElement.parentElement.closest(".collapse").previousElementSibling.classList.add("active"))))))}function h(e){if(e){var t=e.offsetTop,a=e.offsetLeft,o=e.offsetWidth,n=e.offsetHeight;if(e.offsetParent)for(;e.offsetParent;)t+=(e=e.offsetParent).offsetTop,a+=e.offsetLeft;return t>=window.pageYOffset&&a>=window.pageXOffset&&t+n<=window.pageYOffset+window.innerHeight&&a+o<=window.pageXOffset+window.innerWidth}}function v(){var e=document.documentElement.clientWidth;e<1025&&767<e?(document.body.classList.remove("twocolumn-panel"),"twocolumn"==sessionStorage.getItem("data-layout")&&(document.documentElement.setAttribute("data-layout","twocolumn"),document.getElementById("customizer-layout03")&&document.getElementById("customizer-layout03").click(),E(),w(),p()),"vertical"==sessionStorage.getItem("data-layout")&&document.documentElement.setAttribute("data-sidebar-size","sm"),document.querySelector(".hamburger-icon")&&document.querySelector(".hamburger-icon").classList.add("open")):1025<=e?(document.body.classList.remove("twocolumn-panel"),"twocolumn"==sessionStorage.getItem("data-layout")&&(document.documentElement.setAttribute("data-layout","twocolumn"),document.getElementById("customizer-layout03")&&document.getElementById("customizer-layout03").click(),E(),w(),p()),"vertical"==sessionStorage.getItem("data-layout")&&document.documentElement.setAttribute("data-sidebar-size",sessionStorage.getItem("data-sidebar-size")),document.querySelector(".hamburger-icon")&&document.querySelector(".hamburger-icon").classList.remove("open")):e<=767&&(document.body.classList.remove("vertical-sidebar-enable"),document.body.classList.add("twocolumn-panel"),"twocolumn"==sessionStorage.getItem("data-layout")&&(document.documentElement.setAttribute("data-layout","vertical"),p()),"horizontal"!=sessionStorage.getItem("data-layout")&&document.documentElement.setAttribute("data-sidebar-size","lg"),document.querySelector(".hamburger-icon")&&document.querySelector(".hamburger-icon").classList.add("open")),e=document.querySelectorAll("#navbar-nav > li.nav-item"),Array.from(e).forEach((function(e){e.addEventListener("click",S.bind(this),!1),e.addEventListener("mouseover",S.bind(this),!1)}))}function S(e){if(e.target&&e.target.matches("a.nav-link span"))if(0==h(e.target.parentElement.nextElementSibling)){e.target.parentElement.nextElementSibling.classList.add("dropdown-custom-right"),e.target.parentElement.parentElement.parentElement.parentElement.classList.add("dropdown-custom-right");var t=e.target.parentElement.nextElementSibling;Array.from(t.querySelectorAll(".menu-dropdown")).forEach((function(e){e.classList.add("dropdown-custom-right")}))}else if(1==h(e.target.parentElement.nextElementSibling)&&1848<=window.innerWidth)for(var a=document.getElementsByClassName("dropdown-custom-right");0<a.length;)a[0].classList.remove("dropdown-custom-right");if(e.target&&e.target.matches("a.nav-link"))if(0==h(e.target.nextElementSibling))e.target.nextElementSibling.classList.add("dropdown-custom-right"),e.target.parentElement.parentElement.parentElement.classList.add("dropdown-custom-right"),t=e.target.nextElementSibling,Array.from(t.querySelectorAll(".menu-dropdown")).forEach((function(e){e.classList.add("dropdown-custom-right")}));else if(1==h(e.target.nextElementSibling)&&1848<=window.innerWidth)for(a=document.getElementsByClassName("dropdown-custom-right");0<a.length;)a[0].classList.remove("dropdown-custom-right")}function w(){var e,t,a="/"==location.pathname?"index.html":location.pathname.substring(1);(a=a.substring(a.lastIndexOf("/")+1))&&("twocolumn-panel"==document.body.className&&document.getElementById("two-column-menu").querySelector('[href="'+a+'"]').classList.add("active"),(e=document.getElementById("navbar-nav").querySelector('[href="'+a+'"]'))?(e.classList.add("active"),t=(t=e.closest(".collapse.menu-dropdown"))&&t.parentElement.closest(".collapse.menu-dropdown")?(t.classList.add("show"),t.parentElement.children[0].classList.add("active"),t.parentElement.closest(".collapse.menu-dropdown").parentElement.classList.add("twocolumn-item-show"),t.parentElement.parentElement.parentElement.parentElement.closest(".collapse.menu-dropdown")&&(a=t.parentElement.parentElement.parentElement.parentElement.closest(".collapse.menu-dropdown").getAttribute("id"),t.parentElement.parentElement.parentElement.parentElement.closest(".collapse.menu-dropdown").parentElement.classList.add("twocolumn-item-show"),t.parentElement.closest(".collapse.menu-dropdown").parentElement.classList.remove("twocolumn-item-show"),document.getElementById("two-column-menu").querySelector('[href="#'+a+'"]')&&document.getElementById("two-column-menu").querySelector('[href="#'+a+'"]').classList.add("active")),t.parentElement.closest(".collapse.menu-dropdown").getAttribute("id")):(e.closest(".collapse.menu-dropdown").parentElement.classList.add("twocolumn-item-show"),t.getAttribute("id")),document.getElementById("two-column-menu").querySelector('[href="#'+t+'"]')&&document.getElementById("two-column-menu").querySelector('[href="#'+t+'"]').classList.add("active")):document.body.classList.add("twocolumn-panel"))}function h(e){if(e){var t=e.offsetTop,a=e.offsetLeft,o=e.offsetWidth,n=e.offsetHeight;if(e.offsetParent)for(;e.offsetParent;)t+=(e=e.offsetParent).offsetTop,a+=e.offsetLeft;return t>=window.pageYOffset&&a>=window.pageXOffset&&t+n<=window.pageYOffset+window.innerHeight&&a+o<=window.pageXOffset+window.innerWidth}}function I(e){if(e==e){switch(e["data-layout"]){case"vertical":A("data-layout","vertical"),sessionStorage.setItem("data-layout","vertical"),document.documentElement.setAttribute("data-layout","vertical"),p();break;case"horizontal":A("data-layout","horizontal"),sessionStorage.setItem("data-layout","horizontal"),document.documentElement.setAttribute("data-layout","horizontal");break;case"twocolumn":A("data-layout","twocolumn"),sessionStorage.setItem("data-layout","twocolumn"),document.documentElement.setAttribute("data-layout","twocolumn");break;default:"vertical"==sessionStorage.getItem("data-layout")&&sessionStorage.getItem("data-layout")?(A("data-layout","vertical"),sessionStorage.setItem("data-layout","vertical"),document.documentElement.setAttribute("data-layout","vertical"),p()):"horizontal"==sessionStorage.getItem("data-layout")?(A("data-layout","horizontal"),sessionStorage.setItem("data-layout","horizontal"),document.documentElement.setAttribute("data-layout","horizontal")):"twocolumn"==sessionStorage.getItem("data-layout")&&(A("data-layout","twocolumn"),sessionStorage.setItem("data-layout","twocolumn"),document.documentElement.setAttribute("data-layout","twocolumn"))}switch(e["data-topbar"]){case"light":A("data-topbar","light"),sessionStorage.setItem("data-topbar","light"),document.documentElement.setAttribute("data-topbar","light");break;case"dark":A("data-topbar","dark"),sessionStorage.setItem("data-topbar","dark"),document.documentElement.setAttribute("data-topbar","dark");break;default:"dark"==sessionStorage.getItem("data-topbar")?(A("data-topbar","dark"),sessionStorage.setItem("data-topbar","dark"),document.documentElement.setAttribute("data-topbar","dark")):(A("data-topbar","light"),sessionStorage.setItem("data-topbar","light"),document.documentElement.setAttribute("data-topbar","light"))}switch(e["data-layout-style"]){case"default":A("data-layout-style","default"),sessionStorage.setItem("data-layout-style","default"),document.documentElement.setAttribute("data-layout-style","default");break;case"detached":A("data-layout-style","detached"),sessionStorage.setItem("data-layout-style","detached"),document.documentElement.setAttribute("data-layout-style","detached");break;default:"detached"==sessionStorage.getItem("data-layout-style")?(A("data-layout-style","detached"),sessionStorage.setItem("data-layout-style","detached"),document.documentElement.setAttribute("data-layout-style","detached")):(A("data-layout-style","default"),sessionStorage.setItem("data-layout-style","default"),document.documentElement.setAttribute("data-layout-style","default"))}switch(e["data-sidebar-size"]){case"lg":A("data-sidebar-size","lg"),document.documentElement.setAttribute("data-sidebar-size","lg"),sessionStorage.setItem("data-sidebar-size","lg");break;case"sm":A("data-sidebar-size","sm"),document.documentElement.setAttribute("data-sidebar-size","sm"),sessionStorage.setItem("data-sidebar-size","sm");break;case"md":A("data-sidebar-size","md"),document.documentElement.setAttribute("data-sidebar-size","md"),sessionStorage.setItem("data-sidebar-size","md");break;case"sm-hover":A("data-sidebar-size","sm-hover"),document.documentElement.setAttribute("data-sidebar-size","sm-hover"),sessionStorage.setItem("data-sidebar-size","sm-hover");break;default:"sm"==sessionStorage.getItem("data-sidebar-size")?(document.documentElement.setAttribute("data-sidebar-size","sm"),A("data-sidebar-size","sm"),sessionStorage.setItem("data-sidebar-size","sm")):"md"==sessionStorage.getItem("data-sidebar-size")?(document.documentElement.setAttribute("data-sidebar-size","md"),A("data-sidebar-size","md"),sessionStorage.setItem("data-sidebar-size","md")):"sm-hover"==sessionStorage.getItem("data-sidebar-size")?(document.documentElement.setAttribute("data-sidebar-size","sm-hover"),A("data-sidebar-size","sm-hover"),sessionStorage.setItem("data-sidebar-size","sm-hover")):(document.documentElement.setAttribute("data-sidebar-size","lg"),A("data-sidebar-size","lg"),sessionStorage.setItem("data-sidebar-size","lg"))}switch(e["data-layout-mode"]){case"light":A("data-layout-mode","light"),document.documentElement.setAttribute("data-layout-mode","light"),sessionStorage.setItem("data-layout-mode","light");break;case"dark":A("data-layout-mode","dark"),document.documentElement.setAttribute("data-layout-mode","dark"),sessionStorage.setItem("data-layout-mode","dark");break;case"blue":A("data-layout-mode","blue"),document.documentElement.setAttribute("data-layout-mode","blue"),sessionStorage.setItem("data-layout-mode","blue");break;case"marron":A("data-layout-mode","maroon"),document.documentElement.setAttribute("data-layout-mode","maroon"),sessionStorage.setItem("data-layout-mode","maroon");break;case"purple":A("data-layout-mode","purple"),document.documentElement.setAttribute("data-layout-mode","purple"),sessionStorage.setItem("data-layout-mode","purple");break;default:sessionStorage.getItem("data-layout-mode")&&"dark"==sessionStorage.getItem("data-layout-mode")?(sessionStorage.setItem("data-layout-mode","dark"),document.documentElement.setAttribute("data-layout-mode","dark"),A("data-layout-mode","dark")):(sessionStorage.setItem("data-layout-mode","orange"),document.documentElement.setAttribute("data-layout-mode","orange"),A("data-layout-mode","orange"))}switch(e["data-layout-width"]){case"fluid":A("data-layout-width","fluid"),document.documentElement.setAttribute("data-layout-width","fluid"),sessionStorage.setItem("data-layout-width","fluid");break;case"boxed":A("data-layout-width","boxed"),document.documentElement.setAttribute("data-layout-width","boxed"),sessionStorage.setItem("data-layout-width","boxed");break;default:"boxed"==sessionStorage.getItem("data-layout-width")?(sessionStorage.setItem("data-layout-width","boxed"),document.documentElement.setAttribute("data-layout-width","boxed"),A("data-layout-width","boxed")):(sessionStorage.setItem("data-layout-width","fluid"),document.documentElement.setAttribute("data-layout-width","fluid"),A("data-layout-width","fluid"))}switch(e["data-sidebar"]){case"light":A("data-sidebar","light"),sessionStorage.setItem("data-sidebar","light"),document.documentElement.setAttribute("data-sidebar","light");break;case"dark":A("data-sidebar","dark"),sessionStorage.setItem("data-sidebar","dark"),document.documentElement.setAttribute("data-sidebar","dark");break;case"gradient":A("data-sidebar","gradient"),sessionStorage.setItem("data-sidebar","gradient"),document.documentElement.setAttribute("data-sidebar","gradient");break;case"gradient-2":A("data-sidebar","gradient-2"),sessionStorage.setItem("data-sidebar","gradient-2"),document.documentElement.setAttribute("data-sidebar","gradient-2");break;case"gradient-3":A("data-sidebar","gradient-3"),sessionStorage.setItem("data-sidebar","gradient-3"),document.documentElement.setAttribute("data-sidebar","gradient-3");break;case"gradient-4":A("data-sidebar","gradient-4"),sessionStorage.setItem("data-sidebar","gradient-4"),document.documentElement.setAttribute("data-sidebar","gradient-4");break;default:sessionStorage.getItem("data-sidebar")&&"light"==sessionStorage.getItem("data-sidebar")?(sessionStorage.setItem("data-sidebar","light"),A("data-sidebar","light"),document.documentElement.setAttribute("data-sidebar","light")):"dark"==sessionStorage.getItem("data-sidebar")?(sessionStorage.setItem("data-sidebar","dark"),A("data-sidebar","dark"),document.documentElement.setAttribute("data-sidebar","dark")):"gradient"==sessionStorage.getItem("data-sidebar")?(sessionStorage.setItem("data-sidebar","gradient"),A("data-sidebar","gradient"),document.documentElement.setAttribute("data-sidebar","gradient")):"gradient-2"==sessionStorage.getItem("data-sidebar")?(sessionStorage.setItem("data-sidebar","gradient-2"),A("data-sidebar","gradient-2"),document.documentElement.setAttribute("data-sidebar","gradient-2")):"gradient-3"==sessionStorage.getItem("data-sidebar")?(sessionStorage.setItem("data-sidebar","gradient-3"),A("data-sidebar","gradient-3"),document.documentElement.setAttribute("data-sidebar","gradient-3")):"gradient-4"==sessionStorage.getItem("data-sidebar")&&(sessionStorage.setItem("data-sidebar","gradient-4"),A("data-sidebar","gradient-4"),document.documentElement.setAttribute("data-sidebar","gradient-4"))}switch(e["data-sidebar-image"]){case"none":A("data-sidebar-image","none"),sessionStorage.setItem("data-sidebar-image","none"),document.documentElement.setAttribute("data-sidebar-image","none");break;case"img-1":A("data-sidebar-image","img-1"),sessionStorage.setItem("data-sidebar-image","img-1"),document.documentElement.setAttribute("data-sidebar-image","img-1");break;case"img-2":A("data-sidebar-image","img-2"),sessionStorage.setItem("data-sidebar-image","img-2"),document.documentElement.setAttribute("data-sidebar-image","img-2");break;case"img-3":A("data-sidebar-image","img-3"),sessionStorage.setItem("data-sidebar-image","img-3"),document.documentElement.setAttribute("data-sidebar-image","img-3");break;case"img-4":A("data-sidebar-image","img-4"),sessionStorage.setItem("data-sidebar-image","img-4"),document.documentElement.setAttribute("data-sidebar-image","img-4");break;default:sessionStorage.getItem("data-sidebar-image")&&"none"==sessionStorage.getItem("data-sidebar-image")?(sessionStorage.setItem("data-sidebar-image","none"),A("data-sidebar-image","none"),document.documentElement.setAttribute("data-sidebar-image","none")):"img-1"==sessionStorage.getItem("data-sidebar-image")?(sessionStorage.setItem("data-sidebar-image","img-1"),A("data-sidebar-image","img-1"),document.documentElement.setAttribute("data-sidebar-image","img-2")):"img-2"==sessionStorage.getItem("data-sidebar-image")?(sessionStorage.setItem("data-sidebar-image","img-2"),A("data-sidebar-image","img-2"),document.documentElement.setAttribute("data-sidebar-image","img-2")):"img-3"==sessionStorage.getItem("data-sidebar-image")?(sessionStorage.setItem("data-sidebar-image","img-3"),A("data-sidebar-image","img-3"),document.documentElement.setAttribute("data-sidebar-image","img-3")):"img-4"==sessionStorage.getItem("data-sidebar-image")&&(sessionStorage.setItem("data-sidebar-image","img-4"),A("data-sidebar-image","img-4"),document.documentElement.setAttribute("data-sidebar-image","img-4"))}switch(e["data-layout-position"]){case"fixed":A("data-layout-position","fixed"),sessionStorage.setItem("data-layout-position","fixed"),document.documentElement.setAttribute("data-layout-position","fixed");break;case"scrollable":A("data-layout-position","scrollable"),sessionStorage.setItem("data-layout-position","scrollable"),document.documentElement.setAttribute("data-layout-position","scrollable");break;default:sessionStorage.getItem("data-layout-position")&&"scrollable"==sessionStorage.getItem("data-layout-position")?(A("data-layout-position","scrollable"),sessionStorage.setItem("data-layout-position","scrollable"),document.documentElement.setAttribute("data-layout-position","scrollable")):(A("data-layout-position","fixed"),sessionStorage.setItem("data-layout-position","fixed"),document.documentElement.setAttribute("data-layout-position","fixed"))}}}function A(e,t){Array.from(document.querySelectorAll("input[name="+e+"]")).forEach((function(a){t==a.value?a.checked=!0:a.checked=!1,a.addEventListener("change",(function(){document.documentElement.setAttribute(e,a.value),sessionStorage.setItem(e,a.value),"data-layout-width"==e&&"boxed"==a.value?(document.documentElement.setAttribute("data-sidebar-size","sm-hover"),sessionStorage.setItem("data-sidebar-size","sm-hover"),document.getElementById("sidebar-size-small-hover").checked=!0):"data-layout-width"==e&&"fluid"==a.value&&(document.documentElement.setAttribute("data-sidebar-size","lg"),sessionStorage.setItem("data-sidebar-size","lg"),document.getElementById("sidebar-size-default").checked=!0)}))})),Array.from(document.querySelectorAll("#collapseBgGradient .form-check input")).forEach((function(e){var t=document.getElementById("collapseBgGradient");1==e.checked&&new bootstrap.Collapse(t,{toggle:!1}).show(),document.querySelector("[data-bs-target='#collapseBgGradient']").addEventListener("click",(function(e){document.getElementById("sidebar-color-gradient").click()}))})),Array.from(document.querySelectorAll("[name='data-sidebar']")).forEach((function(e){var t=document.querySelector("[data-bs-target='#collapseBgGradient']");document.querySelector("#collapseBgGradient .form-check input:checked")?t&&t.classList.add("active"):t&&t.classList.remove("active"),e.addEventListener("change",(function(){document.querySelector("#collapseBgGradient .form-check input:checked")?t&&t.classList.add("active"):t&&t.classList.remove("active")}))}))}function L(e,t,a,o){var n=document.getElementById(a);o.setAttribute(e,t),n&&document.getElementById(a).click()}function k(){document.webkitIsFullScreen||document.mozFullScreen||document.msFullscreenElement||document.body.classList.remove("fullscreen-enable")}function B(){var e=0;Array.from(document.getElementsByClassName("cart-item-price")).forEach((function(t){e+=parseFloat(t.innerHTML)})),document.getElementById("cart-item-total")&&(document.getElementById("cart-item-total").innerHTML="$"+e.toFixed(2))}sessionStorage.getItem("defaultAttribute")?((o={})["data-layout"]=sessionStorage.getItem("data-layout"),o["data-sidebar-size"]=sessionStorage.getItem("data-sidebar-size"),o["data-layout-mode"]=sessionStorage.getItem("data-layout-mode"),o["data-layout-width"]=sessionStorage.getItem("data-layout-width"),o["data-sidebar"]=sessionStorage.getItem("data-sidebar"),o["data-layout-position"]=sessionStorage.getItem("data-layout-position"),o["data-layout-style"]=sessionStorage.getItem("data-layout-style"),o["data-topbar"]=sessionStorage.getItem("data-topbar"),I(o)):(u=document.documentElement.attributes,o={},Array.from(u).forEach((function(e){var t;e&&e.nodeName&&"undefined"!=e.nodeName&&(o[t=e.nodeName]=e.nodeValue,sessionStorage.setItem(t,e.nodeValue))})),sessionStorage.setItem("defaultAttribute",JSON.stringify(o)),I(o),(u=document.querySelector('.btn[data-bs-target="#theme-settings-offcanvas"]'))&&u.click()),E(),n=document.getElementById("search-close-options"),s=document.getElementById("search-dropdown"),(d=document.getElementById("search-options"))&&(d.addEventListener("focus",(function(){0<d.value.length?(s.classList.add("show"),n.classList.remove("d-none")):(s.classList.remove("show"),n.classList.add("d-none"))})),d.addEventListener("keyup",(function(e){var t,a;0<d.value.length?(s.classList.add("show"),n.classList.remove("d-none"),t=d.value.toLowerCase(),a=document.getElementsByClassName("notify-item"),Array.from(a).forEach((function(e){var a=e.getElementsByTagName("span")?e.getElementsByTagName("span")[0].innerText.toLowerCase():"";a&&(e.style.display=a.includes(t)?"block":"none")}))):(s.classList.remove("show"),n.classList.add("d-none"))})),n.addEventListener("click",(function(){d.value="",s.classList.remove("show"),n.classList.add("d-none")})),document.body.addEventListener("click",(function(e){"search-options"!==e.target.getAttribute("id")&&(s.classList.remove("show"),n.classList.add("d-none"))}))),r=document.getElementById("search-close-options"),i=document.getElementById("search-dropdown-reponsive"),l=document.getElementById("search-options-reponsive"),r&&i&&l&&(l.addEventListener("focus",(function(){0<l.value.length?(i.classList.add("show"),r.classList.remove("d-none")):(i.classList.remove("show"),r.classList.add("d-none"))})),l.addEventListener("keyup",(function(){0<l.value.length?(i.classList.add("show"),r.classList.remove("d-none")):(i.classList.remove("show"),r.classList.add("d-none"))})),r.addEventListener("click",(function(){l.value="",i.classList.remove("show"),r.classList.add("d-none")})),document.body.addEventListener("click",(function(e){"search-options"!==e.target.getAttribute("id")&&(i.classList.remove("show"),r.classList.add("d-none"))}))),(u=document.querySelector('[data-bs-toggle="fullscreen"]'))&&u.addEventListener("click",(function(e){e.preventDefault(),document.body.classList.toggle("fullscreen-enable"),document.fullscreenElement||document.mozFullScreenElement||document.webkitFullscreenElement?document.cancelFullScreen?document.cancelFullScreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitCancelFullScreen&&document.webkitCancelFullScreen():document.documentElement.requestFullscreen?document.documentElement.requestFullscreen():document.documentElement.mozRequestFullScreen?document.documentElement.mozRequestFullScreen():document.documentElement.webkitRequestFullscreen&&document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT)})),document.addEventListener("fullscreenchange",k),document.addEventListener("webkitfullscreenchange",k),document.addEventListener("mozfullscreenchange",k),m=document.getElementsByTagName("HTML")[0],(u=document.querySelectorAll(".light-dark-mode"))&&u.length&&u[0].addEventListener("click",(function(e){m.hasAttribute("data-layout-mode")&&"dark"==m.getAttribute("data-layout-mode")?L("data-layout-mode","orange","layout-mode-orange",m):L("data-layout-mode","dark","layout-mode-dark",m)})),document.addEventListener("DOMContentLoaded",(function(){var e=document.getElementsByClassName("code-switcher");Array.from(e).forEach((function(e){e.addEventListener("change",(function(){var t=(a=e.closest(".card")).querySelector(".live-preview"),a=a.querySelector(".code-view");e.checked?(t.classList.add("d-none"),a.classList.remove("d-none")):(t.classList.remove("d-none"),a.classList.add("d-none"))}))}))})),window.addEventListener("resize",v),v(),document.addEventListener("scroll",(function(){var e;(e=document.getElementById("page-topbar"))&&(50<=document.body.scrollTop||50<=document.documentElement.scrollTop?e.classList.add("topbar-shadow"):e.classList.remove("topbar-shadow"))})),document.getElementById("topnav-hamburger-icon")&&document.getElementById("topnav-hamburger-icon").addEventListener("click",(function(){var e=document.documentElement.clientWidth;767<e&&document.querySelector(".hamburger-icon").classList.toggle("open"),"horizontal"===document.documentElement.getAttribute("data-layout")&&(document.body.classList.contains("menu")?document.body.classList.remove("menu"):document.body.classList.add("menu")),"vertical"===document.documentElement.getAttribute("data-layout")&&(e<1025&&767<e?(document.body.classList.remove("vertical-sidebar-enable"),"sm"==document.documentElement.getAttribute("data-sidebar-size")?document.documentElement.setAttribute("data-sidebar-size",""):document.documentElement.setAttribute("data-sidebar-size","sm")):1025<e?(document.body.classList.remove("vertical-sidebar-enable"),"lg"==document.documentElement.getAttribute("data-sidebar-size")?document.documentElement.setAttribute("data-sidebar-size","sm"):document.documentElement.setAttribute("data-sidebar-size","lg")):e<=767&&(document.body.classList.add("vertical-sidebar-enable"),document.documentElement.setAttribute("data-sidebar-size","lg"))),"twocolumn"==document.documentElement.getAttribute("data-layout")&&(document.body.classList.contains("twocolumn-panel")?document.body.classList.remove("twocolumn-panel"):document.body.classList.add("twocolumn-panel"))})),t=sessionStorage.getItem("defaultAttribute"),e=JSON.parse(t),t=document.documentElement.clientWidth,"twocolumn"==e["data-layout"]&&t<767&&Array.from(document.getElementById("two-column-menu").querySelectorAll("li")).forEach((function(e){e.addEventListener("click",(function(e){document.body.classList.remove("twocolumn-panel")}))})),function(){var e=document.querySelectorAll(".counter-value");function t(e){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}e&&Array.from(e).forEach((function(e){!function a(){var o=+e.getAttribute("data-target"),n=+e.innerText,s=o/250;s<1&&(s=1),n<o?(e.innerText=(n+s).toFixed(0),setTimeout(a,1)):e.innerText=t(o),t(e.innerText)}()}))}(),document.getElementsByClassName("dropdown-item-cart")&&(c=document.querySelectorAll(".dropdown-item-cart").length,Array.from(document.querySelectorAll("#page-topbar .dropdown-menu-cart .remove-item-btn")).forEach((function(e){e.addEventListener("click",(function(e){c--,this.closest(".dropdown-item-cart").remove(),Array.from(document.getElementsByClassName("cartitem-badge")).forEach((function(e){e.innerHTML=c})),B(),document.getElementById("empty-cart")&&(document.getElementById("empty-cart").style.display=0==c?"block":"none"),document.getElementById("checkout-elem")&&(document.getElementById("checkout-elem").style.display=0==c?"none":"block")}))})),Array.from(document.getElementsByClassName("cartitem-badge")).forEach((function(e){e.innerHTML=c})),document.getElementById("empty-cart")&&(document.getElementById("empty-cart").style.display="none"),document.getElementById("checkout-elem")&&(document.getElementById("checkout-elem").style.display="block"),B()),document.getElementsByClassName("notification-check")&&Array.from(document.querySelectorAll(".notification-check input")).forEach((function(e){e.addEventListener("click",(function(e){e.target.closest(".notification-item").classList.toggle("active")}))})),[].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]')).map((function(e){return new bootstrap.Tooltip(e)})),[].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]')).map((function(e){return new bootstrap.Popover(e)})),document.getElementById("reset-layout")&&document.getElementById("reset-layout").addEventListener("click",(function(){sessionStorage.clear(),window.location.reload()})),u=document.querySelectorAll("[data-toast]"),Array.from(u).forEach((function(e){e.addEventListener("click",(function(){var t={},a=e.attributes;a["data-toast-text"]&&(t.text=a["data-toast-text"].value.toString()),a["data-toast-gravity"]&&(t.gravity=a["data-toast-gravity"].value.toString()),a["data-toast-position"]&&(t.position=a["data-toast-position"].value.toString()),a["data-toast-className"]&&(t.className=a["data-toast-className"].value.toString()),a["data-toast-duration"]&&(t.duration=a["data-toast-duration"].value.toString()),a["data-toast-close"]&&(t.close=a["data-toast-close"].value.toString()),a["data-toast-style"]&&(t.style=a["data-toast-style"].value.toString()),a["data-toast-offset"]&&(t.offset=a["data-toast-offset"]),Toastify({newWindow:!0,text:t.text,gravity:t.gravity,position:t.position,className:"bg-"+t.className,stopOnFocus:!0,offset:{x:t.offset?50:0,y:t.offset?10:0},duration:t.duration,close:"close"==t.close,style:"style"==t.style?{background:"linear-gradient(to right, #0AB39C, #405189)"}:""}).showToast()}))})),u=document.querySelectorAll("[data-choices]"),Array.from(u).forEach((function(e){var t={},a=e.attributes;a["data-choices-groups"]&&(t.placeholderValue="This is a placeholder set in the config"),a["data-choices-search-false"]&&(t.searchEnabled=!1),a["data-choices-search-true"]&&(t.searchEnabled=!0),a["data-choices-removeItem"]&&(t.removeItemButton=!0),a["data-choices-sorting-false"]&&(t.shouldSort=!1),a["data-choices-sorting-true"]&&(t.shouldSort=!0),a["data-choices-multiple-remove"]&&(t.removeItemButton=!0),a["data-choices-limit"]&&(t.maxItemCount=a["data-choices-limit"].value.toString()),a["data-choices-limit"]&&(t.maxItemCount=a["data-choices-limit"].value.toString()),a["data-choices-editItem-true"]&&(t.maxItemCount=!0),a["data-choices-editItem-false"]&&(t.maxItemCount=!1),a["data-choices-text-unique-true"]&&(t.duplicateItemsAllowed=!1),a["data-choices-text-disabled-true"]&&(t.addItems=!1),a["data-choices-text-disabled-true"]?new Choices(e,t).disable():new Choices(e,t)})),u=document.querySelectorAll("[data-provider]"),Array.from(u).forEach((function(e){var t,a,o;"flatpickr"==e.getAttribute("data-provider")?(o={},(t=e.attributes)["data-date-format"]&&(o.dateFormat=t["data-date-format"].value.toString()),t["data-enable-time"]&&(o.enableTime=!0,o.dateFormat=t["data-date-format"].value.toString()+" H:i"),t["data-altFormat"]&&(o.altInput=!0,o.altFormat=t["data-altFormat"].value.toString()),t["data-minDate"]&&(o.minDate=t["data-minDate"].value.toString(),o.dateFormat=t["data-date-format"].value.toString()),t["data-maxDate"]&&(o.maxDate=t["data-maxDate"].value.toString(),o.dateFormat=t["data-date-format"].value.toString()),t["data-deafult-date"]&&(o.defaultDate=t["data-deafult-date"].value.toString(),o.dateFormat=t["data-date-format"].value.toString()),t["data-multiple-date"]&&(o.mode="multiple",o.dateFormat=t["data-date-format"].value.toString()),t["data-range-date"]&&(o.mode="range",o.dateFormat=t["data-date-format"].value.toString()),t["data-inline-date"]&&(o.inline=!0,o.defaultDate=t["data-deafult-date"].value.toString(),o.dateFormat=t["data-date-format"].value.toString()),t["data-disable-date"]&&((a=[]).push(t["data-disable-date"].value),o.disable=a.toString().split(",")),flatpickr(e,o)):"timepickr"==e.getAttribute("data-provider")&&(a={},(o=e.attributes)["data-time-basic"]&&(a.enableTime=!0,a.noCalendar=!0,a.dateFormat="H:i"),o["data-time-hrs"]&&(a.enableTime=!0,a.noCalendar=!0,a.dateFormat="H:i",a.time_24hr=!0),o["data-min-time"]&&(a.enableTime=!0,a.noCalendar=!0,a.dateFormat="H:i",a.minTime=o["data-min-time"].value.toString()),o["data-max-time"]&&(a.enableTime=!0,a.noCalendar=!0,a.dateFormat="H:i",a.minTime=o["data-max-time"].value.toString()),o["data-default-time"]&&(a.enableTime=!0,a.noCalendar=!0,a.dateFormat="H:i",a.defaultDate=o["data-default-time"].value.toString()),o["data-time-inline"]&&(a.enableTime=!0,a.noCalendar=!0,a.defaultDate=o["data-time-inline"].value.toString(),a.inline=!0),flatpickr(e,a))})),Array.from(document.querySelectorAll('.dropdown-menu a[data-bs-toggle="tab"]')).forEach((function(e){e.addEventListener("click",(function(e){e.stopPropagation(),bootstrap.Tab.getInstance(e.target).show()}))})),f(null===y?"en":y),(a=document.getElementsByClassName("language"))&&Array.from(a).forEach((function(e){e.addEventListener("click",(function(t){f(e.getAttribute("data-lang"))}))})),p(),setTimeout((function(){var e,t,a=document.getElementById("navbar-nav");a&&300<(e=(a=a.querySelector(".nav-item .active"))?a.offsetTop:0)&&(t=document.getElementsByClassName("app-menu")?document.getElementsByClassName("app-menu")[0]:"")&&t.querySelector(".simplebar-content-wrapper")&&setTimeout((function(){t.querySelector(".simplebar-content-wrapper").scrollTop=330==e?e+85:e}),0)}),250),window.addEventListener("resize",(function(){g&&clearTimeout(g),g=setTimeout(undefined,2e3)}))}();