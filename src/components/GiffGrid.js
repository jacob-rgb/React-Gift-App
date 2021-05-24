import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'

import { GifGriditem } from './GifGriditem';

export const GiffGrid = ( { categoria }) => {


    const {data, loading} = useFetchGifs( categoria );

    return (
        <>
            <h3> { categoria } </h3>

            { loading && <p>Loading</p>}

            <div  className="card-grid">
                { data.map( img => {
                    return <GifGriditem
                                key={img.id}
                                 {...img}
                                 />
                })}
            </div>
        </>
    )
}
