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
  fontFamily:"Cairo",
  "&:hover": {
    backgroundColor: theme.palette.white,
    color: theme.palette.primary.main,
  },
  [theme.breakpoints.down("lg")]: {
    padding: "5px 14px",
    fontSize: "17px",
  },
  [theme.breakpoints.down("md")]: {
    padding: "4px 12px",
  },
  [theme.breakpoints.down("sm")]: {
    padding: "3px 10px",
    fontSize: "14px",
  },
  [theme.breakpoints.down("sx")]: {
    padding: "2px 8px",
  },
}));
