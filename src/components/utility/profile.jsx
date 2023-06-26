import React from "react";

import { Paper, Typography, Avatar, Grid } from "@mui/material";

import "../../assets/css/cardMid.css";
import {
  GenderFemailIcon,
  GenderMaleIcon,
  TrashIcon,
  UserEditIcon,
} from "../../assets/icon";
const Profile = (props) => {
  return (
    <Paper className="profile">
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
      >
        <Grid item xs={2.6} sm={1.6} md={1} lg={0.7} xl={0.7}>
          <Typography color="white" fontSize="1rem" ml={1.5}>
            # {props.No}
          </Typography>
        </Grid>
        <Grid item xs={2.5} sm={1.5} md={1} lg={0.8} xl={0.6}>
          <Avatar
            alt="Avatar"
            src={props.avatarImg}
            style={{ width: "5vh", height: "5vh" }}
          ></Avatar>
        </Grid>
        <Grid item xs={3} sm={2.5} md={1.9} lg={1.9} xl={1.9}>
          <Typography color="white" fontSize="1rem">
            {props.userName}
          </Typography>
        </Grid>
        <Grid item xs={3.5} sm={2.5} md={1.5} lg={1.5} xl={1.5}>
          <Typography color="white" fontSize="1rem">
            {props.userID}
          </Typography>
        </Grid>
        <Grid item xs={2.5} sm={1.5} md={0.5} lg={0.5} xl={0.5}>
          {props.gender === "male" ? <GenderMaleIcon /> : <GenderFemailIcon />}
        </Grid>
        <Grid item xs={3} sm={2} md={1.2} lg={1.2} xl={1.2}>
          <Typography color="white" fontSize="1rem">
            {props.userAge}
          </Typography>
        </Grid>
        <Grid item xs={3} sm={3} md={2} lg={2.3} xl={2.7}>
          <Typography color="white" fontSize="1rem">
            {props.userCity}
          </Typography>
        </Grid>
        <Grid item xs={1.7} sm={2.5} md={1.7} lg={1.7} xl={1.7}>
          <Typography color="white" fontSize="1rem">
            {props.loginDate}
          </Typography>
        </Grid>
        <Grid item xs={4} sm={3} md={1} lg={1} xl={1}>
          <UserEditIcon />
          <TrashIcon />
        </Grid>
      </Grid>
    </Paper>
  );
};
export default Profile;
