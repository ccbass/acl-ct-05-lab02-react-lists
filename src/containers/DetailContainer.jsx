import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { ArnoldCharacter } from '../components/arnold/ArnoldCharacter';

import { fetchHACharById } from '../services/arnoldAPI';

export function DetailContainer() {
    const {id} = useParams()
    const [char, setChar] = useState(null)


    useEffect(async () => {
        const singleCharData = await fetchHACharById(id)
        setChar(singleCharData)

    }, [])

    return (
        <div>
            {!char && <h1>LOADING</h1>}
            {char && 
                <div>
                    <h3>Hey Arnold Character Details Page!</h3>
                    <ArnoldCharacter 
                        name={char.name} 
                        image={char.image} 
                    />
                </div>
            }
        </div>
    )
}

