import { Box, Card, CardMedia, Grid } from "@mui/material";
import { useAppSelector } from "../../hooks/reduxHooks";
import { selectImages } from "../../redux/gallery/selectors";
import Fancybox from "../FancyBox/FancyBox";

export const GalleryList = () => {
  const images = useAppSelector(selectImages);

  return (
    <Box p={2}>
      {Boolean(images?.hits?.length) && (
        <Fancybox
          options={{
            Carousel: {
              infinite: false,
            },
          }}
        >
          <Grid container spacing={2}>
            {images?.hits.map((image) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={image.id}>
                <Card sx={{ width: "100%", height: 200 }}>
                  <CardMedia
                    component="img"
                    image={image.webformatURL}
                    alt="image"
                    data-fancybox="gallery"
                    sx={{ width: "100%", height: "100%", objectFit: "cover" }}
                    loading="lazy"
                  />
                </Card>
              </Grid>
            ))}
          </Grid>
        </Fancybox>
      )}
    </Box>
  );
};
