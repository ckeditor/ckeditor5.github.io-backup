/*!
 * @license Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */(()=>{"use strict";const e={tokenUrl:"https://33333.cke-cs.com/token/dev/ijrDsqFix838Gh3wGO3F77FSW94BwcLXprJ4APSp3XQ26xsUHTi0jcb1hoBt",uploadUrl:"https://33333.cke-cs.com/easyimage/upload/"};ClassicEditor.create(document.querySelector("#snippet-special-characters-limited-categories"),{extraPlugins:[SpecialCharactersCurrency,SpecialCharactersMathematical],toolbar:{items:["heading","|","bold","italic","bulletedList","numberedList","|","outdent","indent","|","specialCharacters","link","uploadImage","insertTable","|","undo","redo"]},ui:{viewportOffset:{top:window.getViewportTopOffsetConfig()}},image:{toolbar:["imageStyle:inline","imageStyle:wrapText","imageStyle:breakText","|","toggleImageCaption","imageTextAlternative"]},table:{contentToolbar:["tableColumn","tableRow","mergeTableCells"]},cloudServices:e}).then((e=>{window.editor=e})).catch((e=>{console.error(e.stack)}))})();