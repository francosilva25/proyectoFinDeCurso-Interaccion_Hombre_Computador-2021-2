import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import MediaCard from "./MediaCard";

const mediaCards = [
  {
    image: "/img/vichayito.jpg",
    title: "Vichayito",
    description: "Solo ida, económico",
    description2: "Desde USD 50.49",
    description3: "S/. 201.66",
    description4: "Vuelo directo. Tasas no incluidas",
  },
  {
    image: "/img/mancora.jpg",
    title: "Mancora",
    description: "Solo ida, económico",
    description2: "Desde USD 50.49",
    description3: "S/. 201.66",
    description4: "Vuelo directo. Tasas no incluidas",
  },
  {
    image: "/img/tarapoto.jpg",
    title: "Tarapoto",
    description: "Solo ida, económico",
    description2: "Desde USD 50.49",
    description3: "S/. 201.66",
    description4: "Vuelo directo. Tasas no incluidas",
  },
  {
    image: "/img/caral.jpg",
    title: "Caral",
    description: "Solo ida, económico",
    description2: "Desde USD 50.49",
    description3: "S/. 201.66",
    description4: "Vuelo directo. Tasas no incluidas",
  },
];

const RecomendationNational = () => {
  return (
    <Box p={5}>
      <Grid
        container
        style={{
          backgroundColor: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "1.5em",
        }}
      >
        <Typography
          style={{
            fontFamily: "Roboto",
            fontStyle: "normal",
            fontWeight: "250",
            fontSize: "18px",
            marginRight: "30%"
          }}
        >
          Selección de las mejores ofertas de esta semana. ¡No te pierdas esta
          oportunidad única!
        </Typography>

        <Button
          style={{
            fontFamily: "Roboto",
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "18px",
          }}
        >
          Ver más
        </Button>
      </Grid>
      <Grid container spacing={6} alignContent="center" justifyContent="center">
        {mediaCards.map((mediaCard, i) => {
          return (
            <Grid 
              item xs={2}
            >
              <MediaCard key={i} {...mediaCard} />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default RecomendationNational;
