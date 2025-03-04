import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import SearchAppBar from "./components/SearchAppBar";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid2";
import TourCard from "./components/TourCard";
import cities from "./data.json";
import { Typography } from "@mui/material";

function App() {
  return (
    <div className="App">
      <SearchAppBar />

      <Container sx={{ marginY: 5 }}>
        
          {
            cities.map((city) => (
            <>
              <Typography
                variant="h4"
                component="h2"
                marginTop={5}
                marginBottom={3}
              >
                Top {city.name} Tours    
              </Typography>

              <Grid container size={4} spacing={2}>
                  {city.tours.map( (tour, index) => (
                    <Grid item size={3} spacing={5}>
                      <TourCard tour={tour} key={index} />
                    </Grid>
                  ))}
              </Grid>
            </>
          ))
          }
      
      </Container>
    </div>
  );
}

export default App;
