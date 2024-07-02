

import { 
    APIProvider
} from "@vis.gl/react-google-maps";
import { type BlockEditProps } from "@wordpress/blocks";
import { store as coreStore } from "@wordpress/core-data";
import { useSelect } from "@wordpress/data";
import type { CampusPost } from "wordpress-types";

import { CampusMap } from "./components/campus-map";

export type CampusesMapEditComponentProps = BlockEditProps<{}>;

export function EditComponent(props: CampusesMapEditComponentProps){
    const { attributes, setAttributes } = props;

    const campuses = useSelect((select) => {
        return select(coreStore).getEntityRecords(
            "postType",
            "campus",
            {
                per_page: -1,
            }
        ) as CampusPost[] | null;
    }, []);
    
    return (
    <APIProvider
        apiKey={process.env.GOOGLE_MAPS_API_KEY}
        onLoad={() => console.log("Google Maps API Loaded")}
    >
        <div className="container container--narrow page-section">
            <CampusMap
                campuses={campuses || []}
            />
        </div>
    </APIProvider>
    );
}