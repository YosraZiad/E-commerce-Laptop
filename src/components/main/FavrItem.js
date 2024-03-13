import React from "react";
import storeItems from "../data/storeItems.json";
import FormatCurrency from "./formatCurrency";
import { useShoppingCart } from "../context/ShoppingCartContext";

//import cart ui
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

const CartItem = ({ id, quantityFavr }) => {
  const { removeFromCart, increaseCartQuantity, decreaseCartQuantity } =
    useShoppingCart();
  const item = storeItems.find((i) => i.id === id);
  if (item == null) return null;
  return (
    <Paper
      sx={{
        p: 2,
        margin: "20px",
        maxWidth: 500,
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === "dark" ? "#1A2027" : "#fff",
      }}
    >
      <Grid container spacing={2}>
        <Grid item>
          <ButtonBase sx={{ width: 128, height: 128 }}>
            <Img alt="cart-img" src={item.imgUrl} />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
                {item.name}
              </Typography>
              <Typography variant="body2" gutterBottom>
                {quantityFavr > 1 && <div>x{quantityFavr}</div>}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {FormatCurrency(item.price * quantityFavr)}
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                sx={{ cursor: "pointer" }}
                variant="body2"
                onClick={() => removeFromCart(id)}
              >
                Remove
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" component="div">
              {FormatCurrency(item.price)}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default CartItem;
