/*!
 * @license Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */!function(e){var t={};function n(a){if(t[a])return t[a].exports;var s=t[a]={i:a,l:!1,exports:{}};return e[a].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)n.d(a,s,function(t){return e[t]}.bind(null,s));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=892)}({892:function(e,t){const n=[{id:"user-1",name:"Joe Doe",avatar:"https://randomuser.me/api/portraits/thumb/men/26.jpg"},{id:"user-2",name:"Ella Harper",avatar:"https://randomuser.me/api/portraits/thumb/women/65.jpg"}];const a=document.getElementById("tc-adapter-console");let s=0;function i(e,t){const n=document.createElement("div"),i=document.createElement("div"),o=(new Date).getTime();return a.classList.add("updated"),n.className="tc-adapter-console__action",n.textContent=e,i.className="tc-adapter-console__data",i.textContent=JSON.stringify(t),s<o-500&&(a.innerHTML=""),a.appendChild(n),a.appendChild(i),setTimeout(()=>{a.classList.remove("updated")},500),s=o,Promise.resolve(t)}const o=new EditorWatchdog(ClassicEditor);window.watchdog=o,o.setCreator((e,t)=>ClassicEditor.create(e,t).then(e=>(e.execute("trackChanges"),e))),o.create(document.querySelector(".tc-adapter .editor"),{initialData:'<h2>\n\t\tBilingual Personality Disorder\n\t</h2>\n\t<p>\n\t\tThis may be the first time you hear about this\n\t\t<suggestion-start name="insertion:suggestion-1:user-2"></suggestion-start>\n\t\tmade-up<suggestion-end name="insertion:suggestion-1:user-2"></suggestion-end>\n\t\tdisorder but it actually is not that far from truth.\n\t\tAs recent studies show, the language you speak has more effects on you than you realize.\n\t\tAccording to the studies, the language a person speaks affects their cognition,\n\t\t<suggestion-start name="deletion:suggestion-2:user-1"></suggestion-start>\n\t\tfeelings, <suggestion-end name="deletion:suggestion-2:user-1"></suggestion-end>\n\t\tbehavior, emotions and hence <strong>their personality</strong>.\n\t</p>\n\t<figure class="image image-style-side">\n\t\t<img src="../../../assets/img/collaboration-demo-img.jpg"\n\t\t\tsrcset="../../../assets/img/collaboration-demo-img.jpg, ../../../assets/img/collaboration-demo-img_2x.jpg 2x">\n\t\t<figcaption>\n\t\t\tOne language, one person.\n\t\t</figcaption>\n\t</figure>\n\t<p>\n\t\tThis shouldn’t come as a surprise\n\t\t<a href="https://en.wikipedia.org/wiki/Lateralization_of_brain_function">since we already know</a>\n\t\tthat different regions of the brain become more active depending on the activity.\n\t\tThe structure, information and especially\n\t\t<suggestion-start name="formatInline:886cqig6g8rf:suggestion-3:user-1"></suggestion-start>\n\t\tthe culture of languages<suggestion-end name="formatInline:886cqig6g8rf:suggestion-3:user-1"></suggestion-end>\n\t\tvaries substantially\n\t\tand the language a person speaks is an essential element of daily life.\n\t</p>',plugins:["Essentials","Paragraph","Bold","Italic","Heading","Link","Image","ImageToolbar","ImageCaption","ImageStyle","TrackChanges",class{constructor(e){this.editor=e}init(){const e=this.editor.plugins.get("Users"),t=this.editor.plugins.get("TrackChanges");for(const t of n)e.addUser(t);e.defineMe("user-1"),t.adapter={getSuggestion:e=>new Promise(t=>{switch(e){case"suggestion-1":t({id:"suggestion-1",type:"insertion",authorId:"user-2",createdAt:new Date(2019,1,13,11,20,48),data:null,attributes:{}});break;case"suggestion-2":t({id:"suggestion-2",type:"deletion",authorId:"user-1",createdAt:new Date(2019,1,14,12,7,20),data:null,attributes:{}});break;case"suggestion-3":t({id:"suggestion-3",type:"formatInline:886cqig6g8rf",authorId:"user-1",createdAt:new Date(2019,2,8,10,2,7),data:{commandName:"bold",commandParams:[{forceValue:!0}]},attributes:{}})}}),addSuggestion:e=>(i("addSuggestion()",e),Promise.resolve({createdAt:new Date})),updateSuggestion:(e,t)=>(i("updateSuggestion()",{id:e,suggestionData:t}),Promise.resolve())}}}],toolbar:["heading","|","bold","italic","link","|","trackChanges"],licenseKey:"HHaL0FAbbm8uppI8l9oD1DMpVGJ+ERXw5hrAH0Jgn8V6QCX1Zns+3gFY1ms/Vswu1J6fIVEehYo=",sidebar:{container:document.querySelector(".tc-adapter .sidebar")},image:{toolbar:["imageStyle:inline","imageStyle:block","imageStyle:side","|","toggleImageCaption","imageTextAlternative"]},ui:{viewportOffset:{top:window.getViewportTopOffsetConfig()}}})}});