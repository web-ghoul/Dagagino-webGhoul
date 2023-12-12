"use client";
import { Box, styled } from "@mui/material";

export const SecondaryBox = styled(Box)(({ theme }) => ({
    paddingTop: "25px",
    paddingBottom: "25px",
    [theme.breakpoints.down("lg")]: {
        paddingTop: "20px",
        paddingBottom: "20px",
    },
    [theme.breakpoints.down("md")]: {
        paddingTop: "15px",
        paddingBottom: "15px",
    },
    [theme.breakpoints.down("sm")]: {
        paddingTop: "10px",
        paddingBottom: "10px",
    },
    [theme.breakpoints.down("sx")]: {
        paddingTop: "5px",
        paddingBottom: "5px",
    },
}));
