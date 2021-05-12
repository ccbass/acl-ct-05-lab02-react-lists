import React from 'react';
import { Link } from 'react-router-dom'


export function ArnoldCharacter({id, name, image}) {

    return (
        <div>
            <img src={image} style={{height: '100px'}} />
            <h3>{name}</h3>
            <h4>
                {id && <Link to={`/${id}`}>Detail Page</Link>}
            </h4>
        </div>
    )
}
