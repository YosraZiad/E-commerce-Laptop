import {
  Stack,
  Typography,
  IconButton,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Dialog,
  DialogContent,
  DialogActions,
  DialogContentText,

  useTheme,
} from "@mui/material";

import React, { useState } from "react";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FormatCurrency from "./formatCurrency";
import { useShoppingCart } from "../context/ShoppingCartContext";

const StoreItem = ({ id, name, price, imgUrl }) => {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const {
    getItemQuantity,
    increaseCartQuantity,

    increasefavQuantity,
    getItemQuantityFovr,
  } = useShoppingCart();
  const localName = localStorage.getItem("name");
  const quantity = getItemQuantity(id);
  const quantityFavr = getItemQuantityFovr(id);
  const theme = useTheme();

  return (
    <Stack>
      <Card
        sx={{
          maxWidth: 400,
          p:3,
          mt: 6,
          position: "relative",
          ":hover .MuiCardMedia-root ": {
            rotate: "1deg",
            scale: "1.1",
            transition: "0.35s",
            display: "block",
          },
        }}
      >
        <CardMedia sx={{ height: 180 }} image={imgUrl} title="green iguana" />

        <CardContent >
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              sx={{ color: theme.palette.textlogo.main }}
            >
              {name}
            </Typography>

            <Typography
              variant="subtitle1"
              component="p"
              sx={{ color: theme.palette.textlogo.main }}
            >
              {FormatCurrency(price)}
            </Typography>
          </Stack>
        </CardContent>
        {localName ? (
          <CardActions sx={{ justifyContent: "space-between" }}>
            {
              quantity === 0 ? (
                <IconButton
                  onClick={() => increaseCartQuantity(id)}
                  sx={{
                    textTransform: "capitalize",
                    fontSize: "16px",
                    color: theme.palette.textlogo.main,
                  }}
                  size="small"
                >
                  <AddShoppingCartOutlinedIcon
                    sx={{ mr: 1 }}
                    fontSize="small"
                  />
                  add to cart
                </IconButton>
              ) : (
                ""
              )
              // ) : (
              //   <Box
              //     sx={{
              //       display: "flex",
              //       justifyContent: "space-between",
              //       alignItems: "center",
              //     }}
              //   >
              //     <Box
              //       sx={{
              //         display: "flex",
              //         justifyContent: "center",
              //         alignItems: "center",
              //       }}
              //     >
              //       <Button
              //         variant="contained"
              //         onClick={() => decreaseCartQuantity(id)}
              //       >
              //         -
              //       </Button>
              //       <Typography variant="subtitle1" component="p">
              //         {quantity}in cart
              //       </Typography>
              //       <Button
              //         variant="contained"
              //         onClick={() => increaseCartQuantity(id)}
              //       >
              //         +
              //       </Button>
              //     </Box>
              //     <Button variant="contained" onClick={() => removeFromCart(id)}>
              //       Remove
              //     </Button>
              //   </Box>
              // )
            }

            <IconButton
              onClick={handleClickOpen}
              sx={{ textTransform: "capitalize", fontSize: "16px" }}
              size="small"
            >
              buy Now
            </IconButton>
          </CardActions>
        ) : (
          ""
        )}

        {quantityFavr === 0 ? (
          <IconButton
            onClick={() => increasefavQuantity(id)}
            sx={{
              position: "absolute",
              top: 10,
              right: 10,

              color: "primary !important",
            }}
          >
            <FavoriteIcon />
          </IconButton>
        ) : (
          ""
        )}
      </Card>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            payment completed successfully
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <IconButton sx={{ fintSize: "12px" }} onClick={handleClose}>
            OK
          </IconButton>
          <IconButton sx={{ fintSize: "12px" }} onClick={handleClose} autoFocus>
            cancel
          </IconButton>
        </DialogActions>
      </Dialog>
    </Stack>
  );
};

export default StoreItem;
