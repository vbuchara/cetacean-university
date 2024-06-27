import { 
    useMemo,
    useState 
} from "react";
import { type BlockEditProps } from "@wordpress/blocks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons/faHome";

import { PostBannerBlock, type PostBannerBlockPropsRender } from "@blocks/post-banner/components/block";
import { EditorAnchor } from "@components/editor-anchor";

import { CampusBannerInspectorControls } from "./components/controls";

import type { BannerCampusInfo } from "./campus-banner";

export type CampusBannerEditComponentProps = BlockEditProps<{}>;

export function EditComponent(props: CampusBannerEditComponentProps){
    const defaultBannerImage = CetaceanUniversityCampusBannerData.theme_path + "/images/ocean.jpg";
    const defaultCampus = {
        title: "{Campus Title}",
        subtitle: "{Campus Subtitle}",
        bannerImageId: 0,
    } as const satisfies BannerCampusInfo;

    const [campusInfoPreview, setCampusInfoPreview] = useState<BannerCampusInfo | undefined>();

    const campus: BannerCampusInfo = {
        ...defaultCampus,
        ...campusInfoPreview
    };

    const Metabox = useMemo<PostBannerBlockPropsRender>(() => {
        return ({ classNames }) => {
            return (
            <div className={classNames}>
                <p>
                    <EditorAnchor 
                        className="metabox__blog-home-link" 
                        href={CetaceanUniversityCampusBannerData.campuses_archive_link}
                    >
                        <FontAwesomeIcon
                            icon={faHome}
                            height="1rem"
                            width="1rem"
                        />
                        All Campuses
                    </EditorAnchor>
                    <span className="metabox__main">
                        {campus.title}
                    </span>
                </p>
            </div>
            );
        };
    }, [campus.title]);

    return (
    <>
        <CampusBannerInspectorControls
            campusInfoPreview={campusInfoPreview}
            setCampusInfoPreview={setCampusInfoPreview}
        />
        <PostBannerBlock
            defaultBannerImage={defaultBannerImage}
            post={campus}
            renderMetabox={Metabox}
        />
    </>
    );
}