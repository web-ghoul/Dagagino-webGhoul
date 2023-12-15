"use client";
import { Button, styled } from "@mui/material";

export const PrimaryIconButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.white,
  borderWidth: "2px",
  borderColor: theme.palette.primary.main,
  borderStyle: "solid",
  width: "50px !important",
  height: "50px !important",
  borderRadius: "50%",
  boxShadow: " rgba(0, 0, 0, 0.18) 0px 2px 4px;",
  fontFamily: "Cairo",
  padding: "0px !important",
  minWidth: "auto !important",
  "& svg": {
    fontSize: "30px",
  },
  "&:hover": {
    backgroundColor: theme.palette.white,
    color: theme.palette.primary.main,
  },
  [theme.breakpoints.down("lg")]: {
    width: "45px !important",
    height: "45px !important",
    "& svg": {
      fontSize: "28px",
    },
  },
  [theme.breakpoints.down("md")]: {
    width: "40px !important",
    height: "40px !important",
    "& svg": {
      fontSize: "25px",
    },
  },
  [theme.breakpoints.down("sm")]: {
    width: "35px !important",
    height: "35px !important",
    "& svg": {
      fontSize: "20px",
    },
  },
}));
