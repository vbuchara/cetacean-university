
import { registerBlockType } from "@wordpress/blocks";
import { EditComponent } from "./edit";

import { CetaceanUniversityBlocks } from "@src/classes/CetaceanUniversityBlocks";

export type UpcomingEventsAttributeType = {
    enablePastEventsLink: boolean
};

registerBlockType<UpcomingEventsAttributeType>(CetaceanUniversityBlocks.UpcomingEvents, {
    title: "Upcoming Events",
    category: CetaceanUniversityBlocks.BlockCategory,
    icon: "calendar",
    attributes: {
        enablePastEventsLink: {
            type: "boolean",
            default: true,
        },
    },
    edit: EditComponent,
});