
import { registerBlockType } from "@wordpress/blocks";
import { EditComponent } from "./edit";

export type UpcomingEventsAttributeType = {
    enablePastEventsLink: boolean
};

const block = (await import("./block.json")).default as BlockJson<UpcomingEventsAttributeType>;

registerBlockType<UpcomingEventsAttributeType>(block.name, {
    ...block,
    icon: "calendar",
    edit: EditComponent,
});