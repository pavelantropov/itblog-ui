import Box from "@mui/material/Box";
import { Outlet } from "react-router-dom";
import TopBar from "./TopBar";

export default function Layout() {
  return (
    <>
      <Box
        sx={{
          bgcolor: "background.default",
          color: "text.primary",
          width: "100%",
          height: "100%",
          minWidth: "100vw",
          minHeight: "100vh",
        }}
      >
        <TopBar />
        <Box sx={{ width: "100%", maxWidth: 1000, ml: "3vw", mt: "30px" }}>
          <Outlet />
        </Box>
      </Box>
    </>
  );
}
