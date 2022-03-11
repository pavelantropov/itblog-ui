import Box from "@mui/material/Box";
import { Outlet } from "react-router-dom";
import TopBar from "./TopBar";

export default function Layout() {
  return (
    <>
      <TopBar />
      <Box sx={{ width: "100%", maxWidth: 1000, ml: "3vw", mt: "30px" }}>
        <Outlet />
      </Box>
    </>
  );
}
