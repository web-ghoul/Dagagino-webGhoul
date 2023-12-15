"use client";
import { Button, styled } from "@mui/material";

export const PrimaryButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.white,
  borderWidth: "2px",
  borderColor: theme.palette.primary.main,
  borderStyle: "solid",
  padding: "6px 16px",
  borderRadius: "30px",
  fontSize: "18px",
  boxShadow: " rgba(0, 0, 0, 0.18) 0px 2px 4px;",
  fontFamily: "Cairo",
  "&:hover": {
    backgroundColor: theme.palette.white,
    color: theme.palette.primary.main,
  },
  [theme.breakpoints.down("lg")]: {
    padding: "6px 14px",
    fontSize: "17px",
  },
  [theme.breakpoints.down("md")]: {
    padding: "6px 12px",
    fontSize: "16px",
  },
  [theme.breakpoints.down("sm")]: {
    padding: "5px 10px",
    fontSize: "15px",
  },
  [theme.breakpoints.down("sx")]: {
    padding: "4px 8px",
    fontSize: "14px",
  },
}));
