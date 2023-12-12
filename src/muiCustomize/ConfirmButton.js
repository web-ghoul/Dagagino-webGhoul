"use client";
import {  styled } from "@mui/material";
import { PrimaryButton } from './PrimaryButton';

export const ConfirmButton = styled(PrimaryButton)(({ theme }) => ({
  backgroundColor: theme.palette.whatsapp,
  color: theme.palette.white,
  borderColor: theme.palette.whatsapp,
  "&:hover": {
    backgroundColor: theme.palette.white,
    color: theme.palette.whatsapp,
  },
}));
