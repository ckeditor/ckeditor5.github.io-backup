/*!
 * @license Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */ClassicEditor.create(document.querySelector("#snippet-ckfinder"),{toolbar:{items:["heading","|","bold","italic","|","undo","redo","|","ckfinder"]},ui:{viewportOffset:{top:window.getViewportTopOffsetConfig()}},ckfinder:{uploadUrl:"https://ckeditor.com/apps/ckfinder/3.5.0/core/connector/php/connector.php?command=QuickUpload&type=Files&responseType=json",options:{height:600,width:800}}}).then((e=>{window.editor=e,window.attachTourBalloon({target:window.findToolbarItem(e.ui.view.toolbar,(e=>e.label&&"Insert image or file"===e.label)),text:"Click to open the file manager.",editor:e})})).catch((e=>{console.error(e.stack)}));