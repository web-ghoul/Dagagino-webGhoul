"use client";
import { Button, styled } from "@mui/material";

export const SpecialIconButton = styled(Button)(({ theme }) => ({
  boxShadow: "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset",
  backgroundColor: theme.palette.white,
  transition: theme.palette.transition,
  "& svg": {
    fontSize: "30px",
  },
  padding: "0px !important",
  width: "50px",
  height: "50px",
  borderRadius: "50%",
  minWidth: "auto !important",
  "&:hover": {
    cursor: "pointer",
    backgroundColor: theme.palette.main,
    "& svg": {
      color: theme.palette.white,
    }
  },
  "&:focus": {
    backgroundColor: theme.palette.primary.main,
    boxShadow: "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset",
    "& svg": {
      color: theme.palette.white,
    }
  },
  [theme.breakpoints.down("lg")]: {
    width: "45px",
    height: "45px",
    "& svg": {
      fontSize: "28px",
    },
  },
  [theme.breakpoints.down("md")]: {
    width: "40px",
    height: "40px",
    "& svg": {
      fontSize: "25px",
    },
  },
  [theme.breakpoints.down("sm")]: {
    width: "35px",
    height: "35px",
    "& svg": {
      fontSize: "22px",
    },
  },
  [theme.breakpoints.down("sx")]: {
    width: "30px",
    height: "30px",
    "& svg": {
      fontSize: "20px",
    },
  },
}));
