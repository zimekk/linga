"use strict";(self.webpackChunk_dev_web=self.webpackChunk_dev_web||[]).push([[31],{31:(e,n,a)=>{a.r(n),a.d(n,{default:()=>g});var t=a(784),l=a(192),r=a(452),o=a(870);const c="pl-PL",s={"#article":{"en-US":"# Header\n\nParagraph\nParagraph\n\nParagraph\nParagraph","pl-PL":"# Nagłówek\n\nParagraf\nParagraf\n\nParagraf\nParagraf"},"#lang":{"en-US":"Choose language","pl-PL":"Wybierz język"},"#linga":{"en-US":"Linga","pl-PL":"Linga"},"#photos":{"en-US":"You have {numPhotos, plural,\n      =0 {no photos.}\n      =1 {one photo.}\n      other {# photos.}\n    }","pl-PL":"{numPhotos, plural,\n          =0 {Nie masz zdjęć.}\n          one {Masz jedno zdjęcie.}\n          few {Masz # zdjęcia.}\n          many {Masz # zdjęć.}\n          other {Masz # zdjęcia.}\n        }"}},u=(e,n,a)=>new r.ZP(e,a).format(n),h=(e,n,a)=>s[e]&&s[e][n]||((e,n,a)=>(s[e]||(s[e]={}),s[e][n]||(Object.assign(s[e],{[n]:a}),console.log(Object.fromEntries(Object.entries(s).sort()))),s[e][n]))(e,n,a),p=({children:e,component:n="div",id:a,locales:l=c})=>t.createElement(n,{dangerouslySetInnerHTML:{__html:(0,o.TU)(u(h(a,l,e),l))}}),i=e=>{const[n,a=c]=decodeURI(e.hash).match(/^#(.+)/)||[];return a},m=({children:e})=>t.createElement("div",{"data-text":e.props.children},e),g=()=>{const[e,n]=(0,t.useState)(i(l.Z.location)),[a,r]=(0,t.useState)(2),o=((e=c)=>(n,a,t)=>u(h(t,e,n),a,e))(e);return(0,t.useEffect)((()=>l.Z.listen((({location:e,action:a,...t})=>n(i(e)))))),t.createElement("section",null,t.createElement("h1",null,t.createElement(m,null,t.createElement(p,{id:"#linga",locales:e},"Linga"))),t.createElement("nav",null,t.createElement("span",null,o("Wybierz język",null,"#lang"))," ",["pl-PL","en-US"].reduce(((e,n)=>e.concat(e.length?[null]:[],[n])),[]).map(((e,n)=>e?t.createElement("a",{href:`#${e}`,key:e},e):" | "))),t.createElement(m,null,t.createElement(p,{component:"article",id:"#article",locales:e},"# Nagłówek\n\nParagraf\nParagraf\n\nParagraf\nParagraf")),t.createElement("label",null,t.createElement("span",null,"numPhotos"),t.createElement("select",{value:a,onChange:e=>r(e.target.value)},[0,1,2,5,10,20,21,22,100,101,102].map(((e,n)=>t.createElement("option",{key:n,value:e},e))))),t.createElement("p",null,o("You have {numPhotos, plural,\n      =0 {no photos.}\n      =1 {one photo.}\n      other {# photos.}\n    }",{numPhotos:a},"#photos")),t.createElement("pre",null,JSON.stringify({locales:e,numPhotos:a},null,2)))}}}]);