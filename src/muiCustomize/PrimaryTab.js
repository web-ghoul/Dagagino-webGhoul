"use client";
import { Tab, styled } from "@mui/material";

export const PrimaryTab = styled(Tab)(({ theme }) => ({
  color: theme.palette.dark,
  padding: "20px",
  fontSize: "18px",
  fontFamily: "Cairo",
  border: "2px solid",
  minHeight: "auto",
  minWidth: "auto",
  borderColor: theme.palette.primary.main,
  "&:hover": {
    backgroundColor: theme.palette.white,
    color: theme.palette.primary.main,
  },
  [theme.breakpoints.down("lg")]: {
    padding: "15px 20px",
    fontSize: "17px",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "15px",
    padding: "10px 15px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "14px",
  },
  [theme.breakpoints.down("sx")]: {
    padding: "10px",
    fontSize: "12px",
  },
}));
