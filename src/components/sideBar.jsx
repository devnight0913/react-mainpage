import React from "react";

import { Box, IconButton, Paper, Stack } from "@mui/material";
import {
  AppIcon,
  UsersIcon,
  ArrorIcon,
  UserBoltIcon,
  WalletIcon,
  BacketIcon,
  LifebuoytIcon,
  UserCodeIcon,
  BellIcon,
  AdvertisementIcon,
  ChatPieIcon,
  AdjustmentIcon,
  LogOutIcon,
} from "../assets/icon";

import "../assets/css/sidebar.css";
export default function SideBar() {
  return (
    <Box>
      <Paper className="side-bar">
        <Stack
          justifyContent="flex-start"
          alignItems="center"
          spacing={1}
          style={{ paddingTop: "3vh", paddingBottom: "4vh" }}
        >
          <IconButton aria-label="App">
            <AppIcon />
          </IconButton>
          <IconButton aria-label="Users">
            <UsersIcon />
          </IconButton>
          <IconButton aria-label="Arror">
            <ArrorIcon />
          </IconButton>
          <IconButton aria-label="UserBolt">
            <UserBoltIcon />
          </IconButton>
          <IconButton aria-label="Wallet">
            <WalletIcon />
          </IconButton>
          <IconButton aria-label="Backet">
            <BacketIcon />
          </IconButton>
          <IconButton aria-label="Lifebuoy">
            <LifebuoytIcon />
          </IconButton>
          <IconButton aria-label="UserCode">
            <UserCodeIcon />
          </IconButton>
          <IconButton aria-label="Bell">
            <BellIcon />
          </IconButton>
          <IconButton aria-label="Advertisement">
            <AdvertisementIcon />
          </IconButton>
          <IconButton aria-label="Chatpie">
            <ChatPieIcon />
          </IconButton>
          <IconButton aria-label="Adjustment">
            <AdjustmentIcon />
          </IconButton>
          <IconButton aria-label="Logout" style={{marginTop:"7.5vh"}}>
            <LogOutIcon />
          </IconButton>
        </Stack>
      </Paper>
    </Box>
  );
}
