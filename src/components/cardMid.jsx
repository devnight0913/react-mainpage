import React from "react";

import { Grid, Paper, Stack } from "@mui/material";
import BasicCard from "./utility/card";

import {
  UserPlusIcon,
  UserBoltIcon,
  UserCheckIcon,
  ColourUsersIcon,
} from "../assets/icon";
import Profile from "./utility/profile";
import AvatarImg from "../assets/avatar/1.jpg";

import "../assets/css/cardMid.css";

export default function CardMid() {
  return (
    <Grid container direction="row" spacing={2}>
      <Grid item xs={4} lg={4} md={4} sm={4} xl={4}>
        <BasicCard
          Icon={<UserPlusIcon width="70px" height="70px" />}
          Title="New Users"
          Num="127"
        ></BasicCard>
      </Grid>
      <Grid item xs={4} lg={4} md={4} sm={4} xl={4}>
        <BasicCard
          Icon={<UserBoltIcon width="70px" height="70px" />}
          Title="New Editors"
          Num="127"
        ></BasicCard>
      </Grid>
      <Grid item xs={4} lg={4} md={4} sm={4} xl={4}>
        <BasicCard
          Icon={<UserCheckIcon width="70px" height="70px" />}
          Title="New Subscribers"
          Num="127"
        ></BasicCard>
      </Grid>
      <Grid item xs={12} lg={12} md={12} sm={12} xl={12}>
        <Paper className="profile-container">
          <Stack direction="column" spacing={2} className="profile-bottom">
            <ColourUsersIcon
              width="50px"
              height="50px"
              className="users-icon"
            />
            <Profile
              No="0001"
              avatarImg={AvatarImg}
              userName="John Doe"
              userID="johndoe"
              gender="male"
              userAge="25-34"
              userCity="Ankara"
              loginDate="15-06.2023 - 16:37"
            ></Profile>
            <Profile
              No="0002"
              avatarImg={AvatarImg}
              userName="John Doe"
              userID="johndoe"
              gender="female"
              userAge="25-34"
              userCity="Istanbul"
              loginDate="15-06.2023 - 16:37"
            ></Profile>
            <Profile
              No="0003"
              avatarImg={AvatarImg}
              userName="John Doe"
              userID="johndoe"
              gender="male"
              userAge="25-34"
              userCity="Izmir"
              loginDate="15-06.2023 - 16:37"
            ></Profile>
            <Profile
              No="0004"
              avatarImg={AvatarImg}
              userName="John Doe"
              userID="johndoe"
              gender="female"
              userAge="25-34"
              userCity="Bursa"
              loginDate="15-06.2023 - 16:37"
            ></Profile>
          </Stack>
        </Paper>
      </Grid>
    </Grid>
  );
}
