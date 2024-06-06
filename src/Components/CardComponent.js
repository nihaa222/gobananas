import { Box, Card, Typography } from "@mui/material";

function CardComponent({ data, search, height }) {
  const filteredData = data.filter(
    (item) =>
      item.breeds[0].name.toLowerCase().includes(search.trim().toLowerCase()) &&
      (height ? item.height > 0 && item.height < height : true)
    // Check if height is defined and filter accordingly
  );

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          gap: "20px",
          flexDirection: "column",
        }}
      >
        <Box
          p={2}
          sx={{
            width: "100%",
            backgroundColor: "white",
            position: "fixed",
            top: { xs: "180px", sm: "60px" },
            borderBottom: "red solid 2px",
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Dog's List
          </Typography>
        </Box>
        <Box
          sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
        >
          {filteredData.length > 0 ? (
            filteredData.map((item, index) => (
              <Box key={index} width="230px" p={4}>
                <Card p={5}>
                  <img
                    style={{
                      width: "100%",
                      height: "200px",
                      objectFit: "cover",
                    }}
                    alt="dog"
                    src={item.url}
                  />
                  <p style={{ padding: "4px", textAlign: "center" }}>
                    {item.breeds[0].name}
                  </p>
                </Card>
              </Box>
            ))
          ) : (
            <Typography sx={{ marginTop: "200px" }} variant="body1">
              No results found
            </Typography>
          )}
        </Box>
      </Box>
    </div>
  );
}

export default CardComponent;
