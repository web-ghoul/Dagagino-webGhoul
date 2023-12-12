"use client";
import { Tab, styled } from "@mui/material";

export const PrimaryTab = styled(Tab)(({ theme }) => ({
  color: theme.palette.dark,
  padding: "4px 14px",
  fontSize: "18px",
  fontFamily:"Cairo",
  border:"2px solid",
  borderColor:theme.palette.primary.main,
  "&:hover": {
    backgroundColor: theme.palette.white,
    color: theme.palette.primary.main,
  },
  [theme.breakpoints.down("lg")]: {
    padding: "5px 12px",
    borderRadius: "3px",
    fontSize: "17px",
  },
  [theme.breakpoints.down("md")]: {
    padding: "6px 10px",
  },
  [theme.breakpoints.down("sm")]: {
    padding: "4px 9px",
    borderRadius: "2px",
    fontSize: "14px",
  },
  [theme.breakpoints.down("sx")]: {
    padding: "2px 8px",
  },
}));
