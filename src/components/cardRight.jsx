import React from "react";

import { Stack } from "@mui/material";

import BasicCard from "./utility/card";
import {
  TargetArrowIcon,
  ColourBacketIcon,
  CashBankNoteIcon,
} from "../assets/icon";

export default function CardRight() {
  return (
    <Stack spacing={2}>
      <BasicCard
        Icon={<TargetArrowIcon width="70px" height="70px" />}
        Title="New Comments"
        Num="127"
      />
      <BasicCard
        Icon={<ColourBacketIcon width="70px" height="70px" />}
        Title="Daily Sales"
        Num="127"
      />
      <BasicCard
        Icon={<CashBankNoteIcon width="70px" height="70px" />}
        Title="New Users"
        Num="127"
      />
    </Stack>
  );
}
