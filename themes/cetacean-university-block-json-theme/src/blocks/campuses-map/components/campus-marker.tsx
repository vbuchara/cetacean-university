import { 
    forwardRef,
    RefCallback,
    RefObject,
    useImperativeHandle,
    useRef,
    useState
} from "react";
import { 
    AdvancedMarker, 
    InfoWindow, 
    Pin 
} from "@vis.gl/react-google-maps";
import type { CampusPost } from "wordpress-types";

import { EditorAnchor } from "@components/editor-anchor";
import { getTitle } from "@utils/getTitle";

import type { CampusMapInfo } from "./campus-map";

export type CampusMakerComponentProps = {
    campus: CampusMapInfo;
    withLink?: boolean;
};

export type CampusMarkerRef = 
    | RefObject<google.maps.marker.AdvancedMarkerElement | null>
    | RefCallback<google.maps.marker.AdvancedMarkerElement>;

function CampusMarkerComponent({
    campus,
    withLink = true
}: CampusMakerComponentProps, ref: CampusMarkerRef){
    const { acf: { map_location }} = campus;

    const markerRef = useRef<google.maps.marker.AdvancedMarkerElement>(null);

    const [isInfoVisible, setIsInfoVisible] = useState(false);

    useImperativeHandle(ref, () => markerRef.current, []);

    function onMarkerClick(){
        setIsInfoVisible(true);
    }

    function onCloseInfo(){
        setIsInfoVisible(false);
    }
    
    return (
    <>
        <AdvancedMarker
            position={new google.maps.LatLng(map_location.lat, map_location.lng)}
            ref={markerRef}
            clickable={true}
            onClick={onMarkerClick}
        >
            <Pin/>
        </AdvancedMarker>
        {!isInfoVisible ? "" : (
        <InfoWindow
            anchor={markerRef.current}
            onClose={onCloseInfo}
        >
            <h3>
                {!withLink ? getTitle(campus) : (
                <EditorAnchor href={campus.link}>
                    {getTitle(campus)}
                </EditorAnchor>
                )}
            </h3>
            { map_location.address }
        </InfoWindow>
        )}
    </>
    );
}

export const CampusMarker = forwardRef(CampusMarkerComponent);