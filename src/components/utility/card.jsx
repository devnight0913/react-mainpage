import React from "react";

import { Box, Paper, Stack, Typography } from "@mui/material";

import { ArrorUpIcon } from "../../assets/icon";

import "../../assets/css/cardMid.css";
const BasicCard = ({ Icon, Title, Num }) => {
  return (
    <Box>
      <Paper className="card">
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={1}
        >
          <Box>{Icon}</Box>
          <Typography color="white" fontSize="1.23vw">
            {Title}
          </Typography>
          <Typography color="white" fontSize="1.23vw">
            {Num}
          </Typography>
        </Stack>
        <Stack
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
        >
          <Typography color="#5BDEAA" fontSize="1.23vw">
            %22
          </Typography>
          <ArrorUpIcon width="1.23vw" alignItems="center" />
          <Typography color="white">last day</Typography>
        </Stack>
      </Paper>
    </Box>
  );
};

export default BasicCard;
