import React from 'react'
import {IBootcampDetails} from './types'
import Card from "../../../components/Card";

const BootcampDetails: React.FC<IBootcampDetails> = (props) => {
    const {id, name, description, slug, careers,   photo, onClick, location} = props;

    return (
        <div>
            <h1>{name}</h1>
            <Card imgSrc={photo && [photo] || ''} 
                title={name || ''}
                description={description}
                location={location?.toLowerCase()}
                horizontal
                bootcamp
                subTitle={slug}
                onClick={onClick}
            />
        </div>
    )
}

export default BootcampDetails
