import {Box} from '@mui/material';
import React from 'react';
import Header from '../components/Header';
import QuizPage from '../components/QuizPage';

export default function Quiz() {
    return (
       <Box container="true">
           <Header />
           <QuizPage />
       </Box>
    )
}