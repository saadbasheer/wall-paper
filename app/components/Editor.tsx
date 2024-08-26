"use client";

import { TLUiComponents, Tldraw, Editor } from "tldraw";
import "tldraw/tldraw.css";

// Specify only the components you want to hide
const components: Partial<TLUiComponents> = {
  // Toolbar: null,
  // ContextMenu: null,
  ActionsMenu: null,
  HelpMenu: null,
  // ZoomMenu: null,
  // MainMenu: null,
  // Minimap: null,
  // StylePanel: null,
  // PageMenu: null,
  // NavigationPanel: null,
  // KeyboardShortcutsDialog: null,
  // QuickActions: null,
  HelperButtons: null,
  DebugPanel: null,
  DebugMenu: null,
  SharePanel: null,
  // MenuPanel: null,
  // TopPanel: null,
  // CursorChatBubble: null,
};

const handleMount = (editor: any) => {
  editor.updateInstanceState({ isGridMode: true });
  // editor.setUserPreferences({ id: editor.user.id, isDarkMode: true });
};

export default function UiComponentsHiddenExample() {
  return (
    <div className="tldraw__editor">
      <Tldraw
        onMount={handleMount}
        components={components}
      />
    </div>
  );
}
