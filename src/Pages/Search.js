import { Box, Button, MenuItem, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import CardComponent from "../Components/CardComponent";

function Search() {
  const [data, setdata] = useState([]);
  const [height, setheight] = useState("");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [initialLoad, setInitialLoad] = useState(true);
  const [search, setSearch] = useState("");
  console.log(height);
  console.log(data);

  useEffect(() => {
    const fetchDog = async () => {
      setLoading(true);
      const res = await fetch(
        `https://api.thedogapi.com/v1/images/search?limit=9&api_key=live_kpDnTm16Rv2OHPDDjvlWGNozll34qx2QsKGLbWVO9gbbZ4FA1FG6cEWNVoKAsurV&has_breeds=1&page=${page}`
      );
      const newData = await res.json();
      setdata((prevData) => [...prevData, ...newData]);
      setLoading(false);
      if (initialLoad) {
        setInitialLoad(false);
      }
    };

    fetchDog();
  }, [page, initialLoad]);

  const handleInfiniteScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight
    ) {
      setPage((prev) => prev + 1);
    }
  };

  const handleHeight = (e) => {
    e.preventDefault();
    setheight(e.target.value);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleInfiniteScroll);
    return () => window.removeEventListener("scroll", handleInfiniteScroll);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Update the search state with the input value
    setSearch(e.target.searchTerm.value);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        minHeight: "100vh",
      }}
    >
      {loading && initialLoad ? (
        <Box
          sx={{
            position: "absolute",
            top: 300,
            width: "100%",
            backgroundColor: "rgba(255, 255, 255, 0.5)",
            textAlign: "center",
            padding: "10px 0",
          }}
        >
          <p>Loading...</p>
        </Box>
      ) : (
        <>
          <Box
            sx={{
              padding: "100px 20px 20px",
              backgroundColor: "white",
              width: { xs: "92%", sm: "30%", md: "20%" },
              position: { xs: "fixed", sm: "sticky" },
              top: "10px",
              zIndex: 1,
              maxHeight: "100vh",
              overflow: "hidden",
            }}
          >
            <form
              style={{
                padding: "20px",
                display: "flex",
                flexDirection: "column",
                gap: "20px",
              }}
              // Add onSubmit handler to the form
              onSubmit={(e) => handleSubmit(e)}
            >
              <div style={{ display: "flex", flexDirection: "column" }}>
                {/* Input field with name "searchTerm" */}
                <label htmlFor="searchTerm">Search Term:</label>
                <TextField
                  name="searchTerm"
                  value={search}
                  placeholder="search..."
                  type="text"
                  onChange={(e) => setSearch(e.target.value)} // Add onChange handler to update search state
                />
              </div>
              <TextField
                label="select height"
                select
                value={height}
                onChange={(e) => {
                  handleHeight(e);
                }}
              >
                <MenuItem value="500">"less than 500"</MenuItem>
                <MenuItem value="700">"less than 700"</MenuItem>
                <MenuItem value="900">"less than 900"</MenuItem>
                <MenuItem value="1300">"less than 1300"</MenuItem>
              </TextField>

              <Button
                type="submit"
                sx={{ width: "auto" }}
                variant="contained"
                size="small"
              >
                Submit
              </Button>
            </form>
          </Box>

          <Box
            sx={{
              width: { xs: "100%", sm: "75%", md: "90%" },
              border: { xs: "1px", sm: "2px red solid" },
              overflow: "auto",
              paddingTop: { xs: "250px", sm: "110px" },
            }}
          >
            {/* Pass the search state to CardComponent */}
            <CardComponent search={search} data={data} height={height} />
          </Box>
        </>
      )}
    </Box>
  );
}

export default Search;
