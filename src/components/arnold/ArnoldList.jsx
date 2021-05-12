import React from 'react';
import { ArnoldCharacter } from './ArnoldCharacter';

export function ArnoldList({characters}) {

    return (
        <div style={{display: 'flex', flexWrap: 'wrap'}}>
            {characters.map((char) => (
                <div key={char._id} style={{width: '200px'}} >
                    <ArnoldCharacter 
                        id = {char._id}
                        name = {char.name}
                        image = {char.image}
                    />
                </div>
            ))}
        </div>
    )
}
