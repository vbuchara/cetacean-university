/**
 * WordPress dependencies
 */
import { store, getContext } from '@wordpress/interactivity';

export type ContextType = {
	isOpen: boolean;
};

store('create-block', {
	actions: {
		toggle: () => {
			const context = getContext<ContextType>();
			context.isOpen = ! context.isOpen;
		},
	},
	callbacks: {
		logIsOpen: () => {
			const { isOpen } = getContext<ContextType>();
			// Log the value of `isOpen` each time it changes.
			console.log( `Is open: ${isOpen}` );
		},
	},
});
