/*!
 * @license Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */(()=>{"use strict";ClassicEditor.create(document.querySelector("#editor"),{toolbar:{items:["heading","|","alignment","outdent","indent","|","bold","italic","underline","strikethrough","subscript","superscript","code","-","codeBlock","blockQuote","link","uploadImage","insertTable","mediaEmbed","|","bulletedList","numberedList","todoList","|","undo","redo","|","sourceEditing"],shouldNotGroupWhenFull:!0},table:{contentToolbar:["tableColumn","tableRow","mergeTableCells","tableProperties","tableCellProperties"]},image:{toolbar:["linkImage","|","imageStyle:block","imageStyle:side","|","imageTextAlternative","toggleImageCaption"]},htmlSupport:{allow:[{name:/.*/,attributes:!0,classes:!0,styles:!0}],disallow:[{attributes:[{key:/^on(.*)/i,value:!0},{key:/.*/,value:/(\b)(on\S+)(\s*)=|javascript:|(<\s*)(\/*)script/i},{key:/.*/,value:/data:(?!image\/(png|jpg|jpeg|gif|webp))/i}]},{name:"script"}]},ui:{viewportOffset:{top:window.getViewportTopOffsetConfig()}}}).then((e=>{window.editor=e,window.attachTourBalloon({target:window.findToolbarItem(e.ui.view.toolbar,(e=>e.label&&"Source"===e.label)),text:"Switch to the source mode to edit the HTML source.",editor:e})})).catch((e=>{console.error(e.stack)}))})();