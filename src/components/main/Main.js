import {
  Box,
  Container,
  useTheme,
  Stack,
  Typography,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";

import React, { useState } from "react";

import storeItems from "../data/storeItems.json";
import StoreItem from "./StoreItem";

const Main = () => {
  // @ts-ignore
  const [alignment, setAlignment] = useState("left");

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  const theme = useTheme();

  //add cart

  return (
    <Container sx={{ py: 9 }}>
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexWrap={"wrap"}
        gap={3}
      >
        <Box>
          <Typography sx={{ color: theme.palette.textlogo.main }} variant="h6">
            Selected Products
          </Typography>
          <Typography
            // @ts-ignore
            sx={{ color: theme.palette.textlogo.main }}
            fontWeight={300}
            variant="body1"
          >
            All our new arrivals in a exclusive brand selection
          </Typography>
        </Box>
        <ToggleButtonGroup
          color="error"
          value="ll"
          exclusive
          onChange={handleAlignment}
          aria-label="text alignment"
          sx={{
            ".Mui-selected": {
              border: "1px solid rgba(233, 69, 96, 0.5) !important",
              color: "#e94560",
              backgroundColor: "initial",
            },
          }}
        >
          <ToggleButton
            className="myButton"
            // @ts-ignore
            sx={{ color: theme.palette.textlogo.main }}
            value="uuu"
            aria-label="left aligned"
          >
            All Products
          </ToggleButton>
          <ToggleButton
            className="myButton"
            // @ts-ignore
            sx={{ mx: "16px !important", color: theme.palette.textlogo.main }}
            value="center"
            aria-label="centered"
          >
            HP category
          </ToggleButton>
          <ToggleButton
            className="myButton"
            // @ts-ignore
            sx={{ color: theme.palette.textlogo.main }}
            value="<right>"
            aria-label="right aligned"
          >
            DELL category
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>
      <Stack
        direction={"row"}
        flexWrap={"wrap"}
        justifyContent={"space-between"}
        >
        {storeItems.map((item) => {
          return (
          <Box sx={{width:"350px" ,}}
      
       key={item.id}>
              <StoreItem {...item} />
            </Box>
          );
        })}
      </Stack>
    </Container>
  );
};

export default Main;
