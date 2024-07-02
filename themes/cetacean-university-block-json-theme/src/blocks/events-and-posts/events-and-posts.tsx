import { registerBlockType } from "@wordpress/blocks";

import { CetaceanUniversityBlocks } from "@classes/CetaceanUniversityBlocks";

import { EditComponent } from "./edit";

registerBlockType(CetaceanUniversityBlocks.EventsAndPosts, {
    title: "Events and Posts",
    icon: "calendar-alt",
    category: CetaceanUniversityBlocks.BlockCategory,
    attributes: {},
    edit: EditComponent
});