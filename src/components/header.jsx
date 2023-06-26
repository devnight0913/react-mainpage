import React from "react";

import { Avatar, Box, Button, Paper, Stack } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { AlarmIcon, ThemeIcon } from "../assets/icon";
import AvatarImg from "../assets/avatar/1.jpg"

import "../assets/css/herder.css";
export default function Header() {
  const theme = createTheme({
    palette: {
      notification: {
        main: "#D2DB08",
        contrastText: "#D2DB08",
      },
      admin: {
        main: "#19376D",
        contrastText: "#fff",
      },
    },
  });
  return (
    <Box>
      <Paper className="header">
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="flex-end"
          spacing={3}
          style={{marginRight:"1vw"}}
        >
          <ThemeProvider theme={theme}>
            <Button
              variant="outlined"
              color="notification"
              style={{ fontSize: "10px", textTransform: "none" }}
            >
              Send Notification
            </Button>
            <ThemeIcon></ThemeIcon>
            <AlarmIcon></AlarmIcon>
            <Button
              variant="contained"
              color="admin"
              style={{ fontSize: "10px", textTransform: "none" }}
            >
              Admin Panel
            </Button>
            <Avatar alt="Avatar" src={AvatarImg} style={{width:"6vh", height:"6vh"}}></Avatar>
          </ThemeProvider>
        </Stack>
      </Paper>
    </Box>
  );
}
