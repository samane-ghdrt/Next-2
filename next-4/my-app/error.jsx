"use client";
import { Stack, Typography } from "@mui/material";

export default function error({error,reset}) {
  return (

  <Stack justifyContent="center" alignItems="center">
    <Typography mt={10}>{error.message}</Typography>
    <button onClick={() => reset()}>reset</button>
  </Stack>
  )
}
