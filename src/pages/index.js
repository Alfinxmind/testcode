import {Box} from '@mui/material';
import React from 'react';
import Header from '../components/Header'
import StartPage from '../components/StartPage'
export default function Index() {
    return (
       <Box container="true">
           <Header />
           <StartPage />
       </Box>
    )
}

