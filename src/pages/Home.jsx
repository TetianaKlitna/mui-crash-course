import {Fragment} from "react";
import SearchAppBar from "../components/SearchAppBar";
import Container from "@mui/material/Container";
import TourCard from "../components/TourCard";
import Grid from "@mui/material/Grid2";
import cities from "../data.json";
import { Typography } from "@mui/material";

function Home() {
  return (
    <div className="App">
      <Container sx={{ marginY: 5 }}>
        {cities.map((city) => (
          <Fragment key={city.name}>
            <Typography
              variant="h4"
              component="h2"
              marginTop={5}
              marginBottom={3}
            >
              Top {city.name} Tours
            </Typography>

            <Grid container size={4} spacing={2}>
              {city.tours.map(tour => (
                <TourCard tour={tour} key={tour.id} />
              ))}
            </Grid>
          </Fragment>
        ))}
      </Container>
    </div>
  );
}

export default Home;
