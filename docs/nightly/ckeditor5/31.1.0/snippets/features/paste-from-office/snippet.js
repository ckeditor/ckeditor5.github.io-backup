/*!
 * @license Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */(()=>{"use strict";const e={tokenUrl:"https://33333.cke-cs.com/token/dev/ijrDsqFix838Gh3wGO3F77FSW94BwcLXprJ4APSp3XQ26xsUHTi0jcb1hoBt",uploadUrl:"https://33333.cke-cs.com/easyimage/upload/"};ClassicEditor.create(document.querySelector("#snippet-paste-from-office"),{extraPlugins:[ListProperties],toolbar:{items:["heading","|","fontSize","fontFamily","fontColor","fontBackgroundColor","|","bold","italic","underline","strikethrough","-","alignment","|","numberedList","bulletedList","|","outdent","indent","|","link","uploadImage","insertTable","horizontalLine","|","undo","redo"],shouldNotGroupWhenFull:!0},ui:{viewportOffset:{top:window.getViewportTopOffsetConfig()}},image:{toolbar:["imageStyle:inline","imageStyle:wrapText","imageStyle:breakText","|","toggleImageCaption","imageTextAlternative"]},table:{contentToolbar:["tableColumn","tableRow","mergeTableCells","tableProperties","tableCellProperties"]},fontFamily:{supportAllValues:!0},fontSize:{options:[10,12,14,"default",18,20,22],supportAllValues:!0},placeholder:"Paste the content here to test the feature.",cloudServices:e}).then((e=>{window.editor=e,window.preventPasteFromOfficeNotification=!0})).catch((e=>{console.error(e.stack)}))})();