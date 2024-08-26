"use client";

import { TLUiComponents, Tldraw } from 'tldraw'
import 'tldraw/tldraw.css'

// The type here is include only to ensure this example contains all possible ui components,
const components: Required<TLUiComponents> = {
	
	ActionsMenu: null,
	HelpMenu: null,
	ZoomMenu: null,
	MainMenu: null,
	Minimap: null,
	StylePanel: null,
	PageMenu: null,
	NavigationPanel: null,
	Toolbar: null,
	KeyboardShortcutsDialog: null,
	QuickActions: null,
	HelperButtons: null,
	DebugPanel: null,
	DebugMenu: null,
	SharePanel: null,
	MenuPanel: null,
	TopPanel: null,
	CursorChatBubble: null,
}

export default function UiComponentsHiddenExample() {
	return (
		<div className="tldraw__editor">
			<Tldraw persistenceKey='default' components={components} />
		</div>
	)
}