import { CircularProgress } from '@mui/material'
import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = ( ) => {
    const {id} = useParams();
    
    
     const [item, setItem] = useState({})
     const [spinner, setSpinner] = useState(false)

    useEffect( ()=>{
        const getItems = async () => {
            const data = await fetch(`../../productos.json`);
            const prod = await data.json();
            
            const filter = prod.find((product) => product.id == id); 
            setTimeout(() => {
                    
                setItem(filter)
                setSpinner(true)
            }, 3000);
            
        }
        getItems();
    }, [id]);


    return (
        <div  className="spinner">
        {
            spinner ? 
            <ItemDetail item={item} />
            
            
        :
        <CircularProgress/>
        }
        </div>
    )
}

export default ItemDetailContainer
