import React, { useState } from 'react'
import { AddCategoria } from './components/AddCategoria';
import { GiffGrid } from './components/GiffGrid';

export const GifExpertApp = () => {

        // const categorias = ['one punch', 'dragon ball', 'one piece']
        const [categorias, setCategorias] = useState(['one punch']);

        // const handleAdd = () => {
        //     setCategorias( ['Naruto', ...categorias] );
            
        // }

    return (
        <div>
            <h2>GiffExpertApp</h2>
            < AddCategoria setCategorias={ setCategorias }/>
            <hr/>

            <ol>
                {
                    categorias.map( cat => <GiffGrid key= {cat} categoria = {cat}/>)
                }
            </ol>
        </div>
    )
}
