/*!
 * @license Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */ClassicEditor.create(document.querySelector("#snippet-ckfinder-upload-only"),{toolbar:{items:["heading","|","bold","italic","|","undo","redo","|","uploadImage"]},ui:{viewportOffset:{top:window.getViewportTopOffsetConfig()}},ckfinder:{uploadUrl:"https://ckeditor.com/apps/ckfinder/3.5.0/core/connector/php/connector.php?command=QuickUpload&type=Files&responseType=json"}}).then((o=>{window.editor=o,window.attachTourBalloon({target:window.findToolbarItem(o.ui.view.toolbar,(o=>o.buttonView&&o.buttonView.label&&"Insert image"===o.buttonView.label)),text:"Click to insert an image.",editor:o})})).catch((o=>{console.error(o.stack)}));