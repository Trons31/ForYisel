import React, { useState } from 'react'
import { Layout } from '../components/Layouts'
import conffeti from 'canvas-confetti';
import { Avatar, Box, Button, Card, CardContent, CardHeader, Divider, Typography } from '@mui/material';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { CitaYise } from '../components/cita';
import { NextPage } from 'next';



const citaPage:NextPage = () => {

    const [Message1, setMessage1] = useState(false);

    const [Message2, setMessage2] = useState(true);


    const heandleClick2 = () =>{
        setMessage1(true)
        setMessage2(false)
     var colors = ['#bb0000', '#ffffff'];

     conffeti({
         zIndex: 999,
         particleCount: 100,
         spread: 160,
         angle: -100,
         origin: {
           x: 1,
           y: 0,
         },colors : colors
       })

       conffeti({
         zIndex: 999,
         particleCount: 100,
         spread: 160,
         angle: -100,
         origin: {
           x: 0,
           y: 0,
         },colors : colors
       })
 }

  return (
     <Layout>
        
        


     </Layout>
  )
}

export default citaPage