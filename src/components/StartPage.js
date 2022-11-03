import * as React from "react";
import { Avatar, Box, Typography, Button } from "@mui/material";
import profileImg from "../images/profile.svg";
import { useNavigate } from "react-router-dom";
export default function StartPage() {
  let navigate = useNavigate();
  const startQuiz = () =>{
    navigate('/quiz')
  }
  return (
    <Box
      sx={{
        backgroundColor: "#1b7cab",
        height: "auto",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          paddingTop: "100px",
        }}
      >
        <Avatar
          style={{
            position: "relative",
            width: "200px",
            height: "200px",
            borderRadius: "50px",
            color: "#fff",
            fontSize: "34px",
          }}
          src={profileImg}
        >
        </Avatar>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          paddingTop: "30px",
        }}
      >
        <Typography sx={{fontSize: "36px", fontWeight: 400, color: "#fff", textAlign: "center"}}>
            IQ Test
        </Typography>
        
      </Box>
      <Box
       sx={{
        display: "flex",
        justifyContent: "center",
        paddingTop: "30px",
      }}
      >
      <Button
        variant="contained"
        sx={{
            backgroundColor: "#01537A",
            width: "200px",
            height: "50px",
            alignItems: "center",
            color: "#fff",
            "&:hover":{
                borderColor: "#fff",
                backgroundColor: "#1b7cab"
            }
        }}
        onClick={startQuiz}
        >
            Start Test
        </Button>
      </Box>
      <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        padding: "30px",
      }}
      >
          <Typography sx={{color: "#fff"}}>
          Surely many have heard about the intelligence quotient, or IQ. The easiest way to find out your intelligence level is to take an IQ test, 
          which is a modern analogue of the well-known methodology "Raven's Progressive Matrix Scale". It is designed to determine the IQ of adults 
          aged 14 to 65 years, regardless of nationality, religion, and other differences. All questions that you do not answer are considered incorrectly answered. 
          You will be presented with a picture with a cropped area and several parts that fit into this area. Your task is to identify the one and only correct cut out picture. 
          Take an IQ test online, find out your intelligence level, and be sure to share the results with your friends! Let's get started!
          </Typography>
      </Box>
    </Box>
  );
}
