"use client";
import { styled } from "@mui/material";
import { PrimaryLoadingButton } from "./PrimaryLoadingButton";

export const SecondaryLoadingButton = styled(PrimaryLoadingButton)(({ theme }) => ({
  backgroundColor: theme.palette.white,
  color: theme.palette.primary.main,
  "& svg":{
    color: theme.palette.primary.main
  },
  "&:hover": {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.white,
  },
}));
