import React, { useEffect, useState } from 'react';
import { fetchAllHAChars } from '../services/arnoldAPI';
import { ArnoldList } from "../components/arnold/ArnoldList.jsx";

export function ListContainer() {
    const [ chars, setChars ] = useState(null)

    useEffect(async () => {
        const charData = await fetchAllHAChars()
        setChars(charData)
    }, [])

    return (
        <div>
            {!chars && <h1>LOADING</h1>}
            {chars && 
                <div>
                    <h3>Hey Arnold Characters Page!</h3>
                    <ArnoldList characters={chars}/>
                </div>
            }
        </div>
    )
}

