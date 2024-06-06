import { Box, Typography } from "@mui/material";

function About() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        justifyContent: "center",
        alignItems: "center",
        maxWidth: "1000px",
        margin: "auto",
        display: "flex",
        flexDirection: "column",
        gap: "5px",
      }}
    >
      <Typography sx={{ color: "red" }} variant="h3">
        About
      </Typography>
      <Typography variant="h6" sx={{ textAlign: "center", margin: "10px" }}>
        This is a website where you can find the cute litte stress relievers who
        will bring happiness and warmth to your lifeDogs, often referred to as
        "man's best friend," are domesticated mammals known for their loyalty,
        companionship, and diverse roles in human society. They belong to the
        Canidae family, which also includes wolves, foxes, and other similar
        animals. Dogs come in a variety of breeds, each with its own unique
        characteristics, sizes, and temperaments.
      </Typography>
    </Box>
  );
}

export default About;
