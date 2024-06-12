import {
    useMemo
} from 'react';
import { useSelect } from '@wordpress/data';
import { store as coreStore } from '@wordpress/core-data';
import type { ProfessorPost, WP_Post } from 'wordpress-types';

import { getExcerpt } from '@utils/getExcerpt';
import { getTitle } from '@utils/getTitle';
import { getThumbnail } from '@src/utils/getThumbnail';

export type FeaturedProfessorProps = {
    professor: ProfessorPost,
};

export function FeaturedProfessor({
    professor
}: FeaturedProfessorProps){
    const {
        acf
    } = professor;

    const programs = useSelect((select) => {
        return select(coreStore).getEntityRecords(
            "postType",
            "program",
            {
                context: "view", 
                include: acf.related_programs || []
            }
        ) as WP_Post[] | null;
    }, [(acf.related_programs || []).length, professor.id]);

    const ProgramsList = useMemo(() => {
        if(!programs) return <></>;

        return (
        <>
        {programs.map((program, index) => (<>
            <a
                key={program.id}
                href={program.link}
            >
                {getTitle(program)}
            </a>
            {index !== programs.length - 1 ? ", " : "."}
        </>))}
        </>
        )
    }, [programs, programs?.length, professor.id]);

    return (
    <div className="cup-featured-professor-block-display">
        <img
            className='cup-featured-professor-block-display__image'
            src={getThumbnail(professor, { size: "professor-portrait" })}
            alt={`Image of ${getTitle(professor)}`}
        />
        <h2
            className='cup-featured-professor-block-display__title'
        >
            {getTitle(professor)}
        </h2>
        <p className='cup-featured-professor-block-display__description'>
            {getExcerpt(professor, { trimWords: 20 })}
        </p>
        {programs?.length === 0 ? "" : (
        <p className="cup-featured-professor-block-display__programs">
            {`${getTitle(professor)} teaches: `}
            {!programs === null ? "Loading..." : (ProgramsList)}
        </p>
        )}
        <a
            className='cup-featured-professor-block-display__link'
            href={professor.link}
        >
            Learn more about {getTitle(professor)}
        </a>
    </div>
    );
}