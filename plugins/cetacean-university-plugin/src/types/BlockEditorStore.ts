import { type Block } from "@wordpress/blocks";

export type BlockEditorStoreSelectors = 
    | "countSelectorsByStatus" 
    | "getCachedResolvers" 
    | "getIsResolving" 
    | "getResolutionError" 
    | "getResolutionState" 
    | "hasFinishedResolution" 
    | "hasResolutionFailed" 
    | "hasResolvingSelectors" 
    | "hasStartedResolution" 
    | "isResolving" 
    | "areInnerBlocksControlled" 
    | "canEditBlock" 
    | "canInsertBlockType" 
    | "canInsertBlocks" 
    | "canLockBlockType" 
    | "canMoveBlock" 
    | "canMoveBlocks" 
    | "canRemoveBlock" 
    | "canRemoveBlocks" 
    | "didAutomaticChange" 
    | "getAdjacentBlockClientId" 
    | "getAllowedBlocks" 
    | "getBlock" 
    | "getBlockAttributes" 
    | "getBlockCount" 
    | "getBlockEditingMode" 
    | "getBlockHierarchyRootClientId" 
    | "getBlockIndex" 
    | "getBlockInsertionPoint" 
    | "getBlockListSettings" 
    | "getBlockMode" 
    | "getBlockName" 
    | "getBlockNamesByClientId" 
    | "getBlockOrder" 
    | "getBlockParents" 
    | "getBlockParentsByBlockName" 
    | "getBlockRootClientId" 
    | "getBlockSelectionEnd" 
    | "getBlockSelectionStart" 
    | "getBlockTransformItems" 
    | "getBlocks" 
    | "getBlocksByClientId" 
    | "getBlocksByName" 
    | "getClientIdsOfDescendants" 
    | "getClientIdsWithDescendants" 
    | "getDirectInsertBlock" 
    | "getDraggedBlockClientIds" 
    | "getFirstMultiSelectedBlockClientId" 
    | "getGlobalBlockCount" 
    | "getInserterItems" 
    | "getLastMultiSelectedBlockClientId" 
    | "getLowestCommonAncestorWithSelectedBlock" 
    | "getMultiSelectedBlockClientIds" 
    | "getMultiSelectedBlocks" 
    | "getMultiSelectedBlocksEndClientId" 
    | "getMultiSelectedBlocksStartClientId" 
    | "getNextBlockClientId" 
    | "getPatternsByBlockTypes" 
    | "getPreviousBlockClientId" 
    | "getSelectedBlock" 
    | "getSelectedBlockClientId" 
    | "getSelectedBlockClientIds" 
    | "getSelectedBlockCount" 
    | "getSelectedBlocksInitialCaretPosition" 
    | "getSelectionEnd" 
    | "getSelectionStart" 
    | "getSettings" 
    | "getTemplate" 
    | "getTemplateLock" 
    | "hasBlockMovingClientId" 
    | "hasDraggedInnerBlock" 
    | "hasInserterItems" 
    | "hasMultiSelection" 
    | "hasSelectedBlock" 
    | "hasSelectedInnerBlock" 
    | "isAncestorBeingDragged" 
    | "isAncestorMultiSelected" 
    | "isBlockBeingDragged" 
    | "isBlockHighlighted" 
    | "isBlockInsertionPointVisible" 
    | "isBlockMultiSelected" 
    | "isBlockSelected" 
    | "isBlockValid" 
    | "isBlockVisible" 
    | "isBlockWithinSelection" 
    | "isCaretWithinFormattedText" 
    | "isDraggingBlocks" 
    | "isFirstMultiSelectedBlock" 
    | "isGroupable" 
    | "isLastBlockChangePersistent" 
    | "isMultiSelecting" 
    | "isNavigationMode" 
    | "isSelectionEnabled" 
    | "isTyping" 
    | "isUngroupable" 
    | "isValidTemplate" 
    | "wasBlockJustInserted"

type BlockEditorStoreBase = Record<
    BlockEditorStoreSelectors, 
    (...args: any) => any
>;

export interface BlockEditorStore extends BlockEditorStoreBase {
    getBlocks: () => Block[]
}