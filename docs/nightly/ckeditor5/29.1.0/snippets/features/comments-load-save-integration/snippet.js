/*!
 * @license Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */!function(e){var t={};function n(a){if(t[a])return t[a].exports;var o=t[a]={i:a,l:!1,exports:{}};return e[a].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(a,o,function(t){return e[t]}.bind(null,o));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=740)}({740:function(e,t){const n={users:[{id:"user-1",name:"Joe Doe",avatar:"https://randomuser.me/api/portraits/thumb/men/26.jpg"},{id:"user-2",name:"Ella Harper",avatar:"https://randomuser.me/api/portraits/thumb/women/65.jpg"}],userId:"user-1",commentThreads:[{threadId:"thread-1",comments:[{commentId:"comment-1",authorId:"user-1",content:"<p>Are we sure we want to use a made-up disorder name?</p>",createdAt:new Date("09/20/2018 14:21:53"),attributes:{}},{commentId:"comment-2",authorId:"user-2",content:"<p>Why not?</p>",createdAt:new Date("09/21/2018 08:17:01"),attributes:{}}]}]},a={data:'<h2>\n\t\t<comment-start name="thread-1"></comment-start>\n\t\tBilingual Personality Disorder\n\t\t<comment-end name="thread-1"></comment-end>\n\t</h2>\n\t</h2>\n\t<p>\n\t\tThis may be the first time you hear about this made-up disorder but it actually isn’t so far from the truth.\n\t\tAs recent studies show, the language you speak has more effects on you than you realize.\n\t\tAccording to the studies, the language a person speaks affects their cognition,\n\t\tbehavior, emotions and hence <strong>their personality</strong>.\n\t</p>\n\t<figure class="image image-style-side">\n\t\t<img src="../../../assets/img/collaboration-demo-img.jpg" srcset="../../../assets/img/collaboration-demo-img.jpg, ../../../assets/img/collaboration-demo-img_2x.jpg 2x"">\n\t\t<figcaption>\n\t\t\tOne language, one person.\n\t\t</figcaption>\n\t</figure>\n\t<p>\n\t\tThis shouldn’t come as a surprise\n\t\t<a href="https://en.wikipedia.org/wiki/Lateralization_of_brain_function">since we already know</a>\n\t\tthat different regions of the brain become more active depending on the activity.\n\t\tThe structure, information and especially <strong>the culture</strong> of languages varies substantially\n\t\tand the language a person speaks is an essential element of daily life.\n\t</p>',threadsData:n.commentThreads};let o,r=0;const i=document.querySelector("#comments-integration-console"),s=document.querySelector("#comments-integration-save"),d=document.querySelector("#comments-integration-load");s.addEventListener("click",()=>{o&&(a.threadsData=o.plugins.get("CommentsRepository").getCommentThreads({skipNotAttached:!0,skipEmpty:!0}),a.data=o.data.get(),function(e){const t=document.createElement("div"),n=document.createElement("div");r++,i.classList.add("updated"),t.className="comments-integration-console__data",t.textContent=e.data,n.className="comments-integration-console__comments",n.textContent=JSON.stringify(e.threadsData,void 0,2),i.innerHTML="",i.appendChild(n),i.appendChild(t),setTimeout(()=>{0==--r&&i.classList.remove("updated")},500)}(a),d.disabled=!1)}),d.addEventListener("click",()=>{o&&o.setData(a.data)});const m=new EditorWatchdog(ClassicEditor);m.setCreator((e,t)=>window.ClassicEditor.create(e,t).then(e=>(o=e,o))),m.setDestructor(e=>(o=null,e.destroy())),window.watchdog=m,m.create(document.querySelector(".comments-integration .editor"),{initialData:a.data,plugins:["Essentials","Paragraph","Bold","Italic","Heading","Link","Image","ImageToolbar","ImageCaption","ImageStyle","Comments",class{constructor(e){this.editor=e}init(){const e=this.editor.plugins.get("Users"),t=this.editor.plugins.get("CommentsRepository");for(const t of n.users)e.addUser(t);e.defineMe("user-1");for(const e of a.threadsData)t.addCommentThread(e)}}],toolbar:["heading","|","bold","italic","link","|","comment"],licenseKey:"xmqjU3jGV1LDxq87rtfgVb7k0pvduL++xFHeiZgx/u69HDmgJCF9WmnzgK3AbupMNY7rmw2wzws=",sidebar:{container:document.querySelector(".comments-integration .sidebar")},image:{toolbar:["imageStyle:inline","imageStyle:block","imageStyle:side","|","toggleImageCaption","imageTextAlternative","|","comment"]}})}});