import { Fragment, useMemo, useRef, memo, useEffect, useCallback } from "react";
import { 
    AdvancedMarker,
    InfoWindow,
    Map as GoogleMap,
    Pin,
    useMap
} from "@vis.gl/react-google-maps";
import type { CampusPost } from "wordpress-types";

import { getTitle } from "@utils/getTitle";
import { CampusMarker, CampusMarkerRef } from "./campus-marker";

export type CampusMapProps = {
    campuses: CampusPost[]
};

export const mapId = "CAMPUS_MAP_ID";

function CampusMapComponent({
    campuses
}: CampusMapProps){
    const campusMap = useMap();

    useEffect(() => {
        if(!campusMap || campuses.length === 0) return;
        const newBounds = new google.maps.LatLngBounds();

        campuses.forEach(({ acf: { map_location } }) => {
            const newLatLang = new google.maps.LatLng(
                map_location.lat,
                map_location.lng
            );

            newBounds.extend(newLatLang);
        });

        if(campuses.length === 1){
            campusMap.setCenter(newBounds.getCenter());
            campusMap.setZoom(16);
            return;
        }

        campusMap.fitBounds(newBounds);
    }, [campusMap, campuses.length]);

    return (
    <>
        {(campuses || []).map((campus) => (
        <CampusMarker 
            campus={campus}
            key={campus.id} 
        />
        ))}
    </>
    );
}

function GoogleMapWrapper(props: CampusMapProps){
    return (
    <GoogleMap
        mapId={mapId}
        className="acf-map"
        mapTypeId={google.maps.MapTypeId.ROADMAP}
        defaultZoom={0}
        defaultCenter={{ lat: 0, lng: 0 }}
    >
        <CampusMapComponent
            {...props}
        />
    </GoogleMap>
    );
}

export const CampusMap = memo(GoogleMapWrapper, (prevProps, nextProps) => {
    const { campuses: prevCampuses } = prevProps;
    const { campuses: nextCampuses } = nextProps;

    function reduceCampusInfo(reduce: string, campus: CampusPost){
        const { acf: { map_location } } = campus;

        return reduce + campus.id + map_location.lat + map_location.lng + map_location.address;
    }

    const prevCampusesReduced = prevCampuses.reduce(reduceCampusInfo, "");
    const nextCampusesReduced = nextCampuses.reduce(reduceCampusInfo, "");

    return prevCampusesReduced === nextCampusesReduced;
});