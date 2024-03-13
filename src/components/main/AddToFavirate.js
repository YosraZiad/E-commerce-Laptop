import {
  Stack,
  Drawer,
  Typography,
  Box,
  useTheme,
  IconButton,
} from "@mui/material";

import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import React from "react";
import { useShoppingCart } from "../context/ShoppingCartContext";
import CartItem from "./CartItem";

const AddToFavirate = ({ isOpen }) => {
  //display cart
  const { cartItems, closeCart } = useShoppingCart();
  const theme = useTheme();

  return (
    <div>
      <Drawer open={isOpen} onClose={closeCart}>
        <Box
          sx={{
            width: 444,
            mx: "auto",
            m: "20px 10px",
            p: "20px 0",
            backgroundColor: (theme) =>
              theme.palette.mode === "dark" ? "#1A2027" : "#fff",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography sx={{ mx: 0 }}>Favorite</Typography>
            <IconButton
              onClick={closeCart}
              sx={{
                ":hover": {
                  rotate: "180deg",
                  color: "red",
                  transition: "0.3s",
                },
              }}
            >
              <CloseOutlinedIcon sx={{ color: theme.palette.text.primary }} />
            </IconButton>
          </Box>
          <Stack>
            {cartItems.map((item) => {
              return <CartItem key={item.id} {...item} />;
            })}
          </Stack>
        </Box>
      </Drawer>
    </div>
  );
};

export default AddToFavirate;
