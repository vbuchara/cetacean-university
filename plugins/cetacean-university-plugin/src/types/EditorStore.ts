export type EditorStoreDispatchers = 
    | "failResolution" 
    | "failResolutions" 
    | "finishResolution" 
    | "finishResolutions" 
    | "invalidateResolution" 
    | "invalidateResolutionForStore" 
    | "invalidateResolutionForStoreSelector" 
    | "startResolution" 
    | "startResolutions" 
    | "autosave" 
    | "clearSelectedBlock" 
    | "createUndoLevel" 
    | "disablePublishSidebar" 
    | "editPost" 
    | "enablePublishSidebar" 
    | "enterFormattedText" 
    | "exitFormattedText" 
    | "hideInsertionPoint" 
    | "insertBlock" 
    | "insertBlocks" 
    | "insertDefaultBlock" 
    | "lockPostAutosaving" 
    | "lockPostSaving" 
    | "mergeBlocks" 
    | "moveBlockToPosition" 
    | "moveBlocksDown" 
    | "moveBlocksUp" 
    | "multiSelect" 
    | "receiveBlocks" 
    | "redo" 
    | "refreshPost" 
    | "removeBlock" 
    | "removeBlocks" 
    | "removeEditorPanel" 
    | "replaceBlock" 
    | "replaceBlocks" 
    | "resetBlocks" 
    | "resetEditorBlocks" 
    | "resetPost" 
    | "savePost" 
    | "selectBlock" 
    | "setDeviceType" 
    | "setEditedPost" 
    | "setIsInserterOpened" 
    | "setIsListViewOpened" 
    | "setRenderingMode" 
    | "setTemplateValidity" 
    | "setupEditor" 
    | "setupEditorState" 
    | "showInsertionPoint" 
    | "startMultiSelect" 
    | "startTyping" 
    | "stopMultiSelect" 
    | "stopTyping" 
    | "synchronizeTemplate" 
    | "toggleBlockMode" 
    | "toggleEditorPanelEnabled" 
    | "toggleEditorPanelOpened" 
    | "toggleSelection" 
    | "trashPost" 
    | "undo" 
    | "unlockPostAutosaving" 
    | "unlockPostSaving" 
    | "updateBlock" 
    | "updateBlockAttributes" 
    | "updateBlockListSettings" 
    | "updateEditorSettings" 
    | "updatePost" 
    | "updatePostLock"
;

type EditorStoreBase = Record<
    EditorStoreDispatchers, (...args: any) => Promise<any>
>;

export interface EditorStore extends EditorStoreBase {
    lockPostSaving: (cause: string) => Promise<void>,
};