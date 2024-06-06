import { Button, Stack } from "@mui/material";
import { Link, useLocation } from "react-router-dom";

function HeaderLink() {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <Stack
      direction="row"
      alignItems="center"
      spacing={2}
      sx={{ display: { xs: "none", sm: "flex" } }}
    >
      <Link to="/">
        <Button style={{ color: pathname === "/" ? "pink" : "red" }}>
          Home
        </Button>
      </Link>
      <Link to="/about">
        <Button style={{ color: pathname === "/about" ? "pink" : "red" }}>
          About
        </Button>
      </Link>
      <Link to="/search">
        <Button style={{ color: pathname === "/search" ? "pink" : "red" }}>
          Search
        </Button>
      </Link>
    </Stack>
  );
}

export default HeaderLink;
