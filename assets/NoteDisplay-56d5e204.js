import{d as c,i as d,a as u,o as n,f as s,E as i,g as r,t as a,_ as m}from"./index-b1513b7d.js";const k=["innerHTML"],v=["textContent"],f=["textContent"],y=c({__name:"NoteDisplay",props:{class:{type:String,required:!1},noteHtml:{type:String,required:!1},note:{type:String,required:!1},placeholder:{type:String,required:!1}},emits:["click"],setup(p){const o=p;return d(u),(e,t)=>e.noteHtml?(n(),s("div",{key:0,class:i(["prose overflow-auto outline-none",o.class]),onClick:t[0]||(t[0]=l=>e.$emit("click")),innerHTML:e.noteHtml},null,10,k)):e.note?(n(),s("div",{key:1,class:i(["prose overflow-auto outline-none",o.class]),onClick:t[1]||(t[1]=l=>e.$emit("click"))},[r("p",{textContent:a(e.note)},null,8,v)],2)):(n(),s("div",{key:2,class:i(["prose overflow-auto outline-none opacity-50 italic",o.class]),onClick:t[2]||(t[2]=l=>e.$emit("click"))},[r("p",{textContent:a(o.placeholder||"No notes.")},null,8,f)],2))}}),g=m(y,[["__file","/home/runner/work/intro-vue-3-workshop-slides/intro-vue-3-workshop-slides/node_modules/@slidev/client/internals/NoteDisplay.vue"]]);export{g as N};
