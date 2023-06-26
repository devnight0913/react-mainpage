import React from "react";

import Header from "../components/header";
import { Box, Grid } from "@mui/material";

import "../assets/css/mainpage.css";
import SideBar from "../components/sideBar";
import CardMid from "../components/cardMid";
import CardRight from "../components/cardRight";
export default function MainPage() {
  return (
    <Box className="main-page">
      <Grid container spacing={2}>
        <Grid item xs={12} lg={12} md={12} sm={12} xl={12}>
          <Header></Header>
        </Grid>
        <Grid item xs={0.4}>
          <SideBar></SideBar>
        </Grid>
        <Grid item xs={11.6} sm={11.6} md={11.6} lg={7.8} xl={7.8}>
          <CardMid></CardMid>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={3.8} xl={3.8}>
          <CardRight />
        </Grid>
      </Grid>
    </Box>
  );
}
