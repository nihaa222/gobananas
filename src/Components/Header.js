import {
  AppBar,
  Button,
  Drawer,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";

import HeaderLink from "./HeaderLink";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
function Header() {
  const location = useLocation();
  const pathname = location.pathname;
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  return (
    <>
      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <Stack alignItems="center" spacing={2} width="250px" p={2}>
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
      </Drawer>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "white",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <Toolbar>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Typography variant="h6" sx={{ color: "red", fontWeight: "bold" }}>
              Dog
            </Typography>
          </Link>
        </Toolbar>
        <Stack direction="row">
          <IconButton>
            <SearchIcon />
          </IconButton>
          <IconButton
            sx={{ display: { xs: "inline", sm: "none" } }}
            onClick={() => setIsDrawerOpen(true)}
          >
            <MenuIcon />
          </IconButton>

          <HeaderLink />
        </Stack>
      </AppBar>
    </>
  );
}

export default Header;
