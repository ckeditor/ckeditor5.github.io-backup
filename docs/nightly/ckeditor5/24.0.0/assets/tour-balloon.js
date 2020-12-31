/**
 * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* global console, window, document */

/**
 * Attaches a tour balloon with a description to any DOM node element.
 *
 * **Tip**: Use the global `findToolbarItem()` method to easily pick toolbar items.
 *
 * Examples:
 *
 *		// Using a comparison callback to search for an item.
 *		window.attachTourBalloon( {
 *			target: window.findToolbarItem( editor.ui.view.toolbar, item => item.label && item.label === 'Insert HTML' ),
 *			text: 'Tour text to help users discover the feature.'
 *		} );
 *
 *		// Using a toolbar item index.
 *		window.attachTourBalloon( {
 *			target: window.findToolbarItem( editor.ui.view.toolbar, 5 ),
 *			text: 'Tour text to help users discover the feature.'
 *		} );
 *
 *		// Specifying options of tippy.js, e.g. to customize the placement of the balloon.
 *		// See https://atomiks.github.io/tippyjs/v6/all-props/ for all options.
 *		window.attachTourBalloon( {
 *			target: window.findToolbarItem( editor.ui.view.toolbar, 5 ),
 *			text: 'Tour text to help users discover the feature.',
 *			tippyOptions: {
 *				placement: 'bottom-start'
 *			}
 *		} );
 *
 * @param {Object} options Balloon options.
 * @param {HTMLElement} options.target A DOM node the balloon will point to.
 * @param {String} options.text The description to be shown in the tooltip.
 * @param {Object} [options.tippyOptions] Additional [configuration of tippy.js](https://atomiks.github.io/tippyjs/v6/all-props/).
 */
window.attachTourBalloon = function( { target, text, tippyOptions } ) {
	if ( !target ) {
		console.warn( '[attachTourBalloon] The target DOM node for the feature tour balloon does not exist.', { text } );

		return;
	}

	const content = `
		<div class="tippy-content__message">${ text }</div>
		<button class="ck ck-button tippy-content__close-button ck-off" title="Close"></button>
	`;

	// eslint-disable-next-line no-undef
	const tooltip = tippy( target, {
		content,
		theme: 'light-border',
		placement: 'bottom',
		trigger: 'manual',
		hideOnClick: false,
		allowHTML: true,
		maxWidth: 280,
		showOnCreate: true,
		interactive: true,
		touch: 'hold',
		zIndex: 1,
		appendTo: () => document.body,
		...tippyOptions
	} );

	// eslint-disable-next-line no-undef
	const closeButton = tooltip.popper.querySelector( '.tippy-content__close-button' );

	closeButton.addEventListener( 'click', () => {
		tooltip.hide();
	} );

	target.addEventListener( 'click', () => {
		tooltip.hide();
	} );
};

/**
 * Searches for a toolbar item and returns the first one matching the criteria.
 *
 * You can search for toolbar items using a comparison callback:
 *
 *		window.findToolbarItem( editor.ui.view.toolbar, item => item.label && item.label.startsWith( 'Insert HTML' ) );
 *
 * Or you pick toolbar items by their index:
 *
 *		window.findToolbarItem( editor.ui.view.toolbar, 3 );
 *
 * @param {module:ui/toolbar/toolbarview~ToolbarView} toolbarView Toolbar instance.
 * @param {Number|Function} indexOrCallback Index of a toolbar item or a callback passed to `ViewCollection#find`.
 * @returns {HTMLElement|undefined} HTML element or undefined
 */
window.findToolbarItem = function( toolbarView, indexOrCallback ) {
	const items = toolbarView.items;
	let item;

	if ( typeof indexOrCallback === 'function' ) {
		item = items.find( indexOrCallback );
	} else {
		item = items.get( indexOrCallback );
	}

	return item ? item.element : undefined;
};
