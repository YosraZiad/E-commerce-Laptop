import { useState } from "react";
import { AddShoppingCartOutlined, ExpandMore } from "@mui/icons-material";
import {
  Container,
  IconButton,
  InputBase,
  Stack,
  Typography,
  useTheme,
  Chip,
  Box,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { styled } from "@mui/material/styles";

import FaceIcon from "@mui/icons-material/Face";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { NavLink } from "react-router-dom";
import { useShoppingCart } from "../context/ShoppingCartContext";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  flexGrow: 0.4,
  borderRadius: theme.shape.borderRadius,
  border: "1px solid #777",
  "&:hover": {
    border: "1px solid #333",
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "266px",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "330px",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

const options = ["All Categeries", "Hp", "Dell", "Lenovo"];

const HeaderNavv = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const open = Boolean(anchorEl);
  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const theme = useTheme();
  //open cart

  const { openCart, cartQuantity, cartQuantityFovr } = useShoppingCart();
  const localName = localStorage.getItem("name");

  return (
    <Container sx={{ my: 3, display: "flex", justifyContent: "space-between" }}>
      <Stack sx={{ color: theme.palette.textlogo.main }} alignItems={"center"}>
        <AddShoppingCartOutlined />
        <Typography variant="body2">E-Commerce</Typography>
      </Stack>
      <Search
        sx={{
          display: "flex",
          justifyContent: "space-between",
          borderRadius: "22px",
        }}
      >
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          sx={{ color: theme.palette.textlogo.main }}
          placeholder="Search…"
          inputProps={{ "aria-label": "search" }}
        />
        <div>
          <List
            component="nav"
            aria-label="Device settings"
            sx={{
              bgcolor: theme.palette.myColor.main,
              borderBottomRightRadius: 22,
              borderTopRightRadius: 22,
              p: "0",
            }}
          >
            <ListItem
              id="lock-button"
              aria-haspopup="listbox"
              aria-controls="lock-menu"
              aria-label="when device is locked"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClickListItem}
            >
              <ListItemText
                sx={{
                  width: 90,
                  textAlign: "center",
                  "&:hover": { cursor: "pointer" },
                }}
                secondary={options[selectedIndex]}
              />
              <ExpandMore
                sx={{ fontsize: "16px", color: theme.palette.favColor.main }}
              />
            </ListItem>
          </List>
          <Menu
            id="lock-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "lock-button",
              role: "listbox",
            }}
          >
            {options.map((option, index) => (
              <MenuItem
                sx={{ fontsize: "12px", color: theme.palette.textlogo.main }}
                key={option}
                selected={index === selectedIndex}
                onClick={(event) => handleMenuItemClick(event, index)}
              >
                {option}
              </MenuItem>
            ))}
          </Menu>
        </div>
      </Search>
      <Stack
        direction={"row"}
        alignItems={"center"}
        sx={{ color: theme.palette.textlogo.main, width: 200 }}
      >
        {localName ? (
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <IconButton aria-label="fovr" sx={{ mx: 0.5 }} onClick={openCart}>
              <StyledBadge
                // badgeContent={cartQuantityFovr ? cartQuantityFovr : "0"}
                color="primary"
              >
                <FavoriteIcon />
              </StyledBadge>
            </IconButton>
            <IconButton aria-label="cart" sx={{ mx: 0.5 }}>
              <StyledBadge
                badgeContent={cartQuantity ? cartQuantity : " 0"}
                color="primary"
              >
                <ShoppingCartIcon />
              </StyledBadge>
            </IconButton>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Chip
                sx={{ mt: 0, mx: 1, color: theme.palette.textlogo.main }}
                icon={<FaceIcon />}
                label={localName}
              />
              <Typography
                sx={{ mx: 1, color: theme.palette.textlogo.main, width: 100 }}
                variant="body2"
              >
                Log out
              </Typography>
            </Box>
          </Box>
        ) : (
          <NavLink to="/register">
            <Chip
              sx={{ mt: 0, color: theme.palette.textlogo.main }}
              icon={<FaceIcon />}
              label="register"
            />
          </NavLink>
        )}
      </Stack>
    </Container>
  );
};

export default HeaderNavv;
