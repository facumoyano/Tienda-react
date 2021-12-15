import { Box, Card, CardContent, Button, Typography } from '@mui/material'
import React from 'react'
import { useState } from 'react';


const ItemCount = () => {
    const [count, setCount] = useState(1);
    
    function sumar () {
        if(count >= 1 && count < 10) {
            setCount(count + 1)
        }
        
    }

    function restar () {
        if(count > 1 && count <= 10) {
            setCount(count - 1)
        }
    }
    console.log(`el valor del contador es ${count}`)

    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            p: 5,
            fontSize: 50
        }}>
            <Card variant="outlined" sx={{
                p: 5
            }}>
                <CardContent>
                    <Button sx={{
                        fontSize: 30
                    }} onClick={ sumar }>
                        +
                    </Button>
                    <Typography variant='p'>
                        {count}
                    </Typography>
                    <Button sx={{
                        fontSize: 30
                    }} onClick={ restar }>
                        -
                    </Button>
                </CardContent>
            </Card>
        </Box>
    )
}

export default ItemCount
