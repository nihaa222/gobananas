import { Box, Stack, Typography } from "@mui/material";
import { useTheme, useMediaQuery } from "@mui/material";

function Hero() {
  const theme = useTheme();
  const belowSm = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      sx={{
        display: "flex",
        maxWidth: "1400px",
        marginLeft: "auto",
        marginRight: "auto",
        justifyContent: "center",
        gap: belowSm ? "50px" : "100px",
        alignItems: "center",
        marginTop: "100px",
        marginBottom: "100px",
        flexDirection: belowSm ? "column" : "row", // Set column for screens below sm
      }}
    >
      <Box>
        <Typography variant={belowSm ? "h4" : "h3"}>Feeling Better</Typography>
        <Typography variant="h3" sx={{ fontWeight: "bold" }}>
          With Your Little
        </Typography>
        <Typography color="red" variant="h3" sx={{ fontWeight: "bold" }}>
          Friends
        </Typography>
        <Typography variant="h6">Find yourself a cute little puppy</Typography>
      </Box>
      <Box>
        <Stack>
          <img
            src="/compresspuppy.jpg"
            alt="hero"
            style={{
              width: belowSm ? "250px" : "400px",
              height: belowSm ? "250px" : "400px",
            }} // Adjust width and height as needed
          />
        </Stack>
      </Box>
    </Box>
  );
}

export default Hero;
