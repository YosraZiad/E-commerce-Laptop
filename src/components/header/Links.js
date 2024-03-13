import {
  Typography,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Paper,
  useTheme,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { KeyboardArrowRightOutlined } from "@mui/icons-material";
const Links = ({ title }) => {
  const theme = useTheme();
  return (
    <div>
      <Box
        // className="border"
        sx={{
          ":hover .show-when-hover": { display: "block" },
          ":hover": { cursor: "pointer" },
          position: "relative",
          display: "flex",
          alignItems: "center",
          color: theme.palette.text.secondary,
        }}
      >
        <Typography variant="body1">{title}</Typography>
        <ExpandMoreIcon sx={{ fontSize: "16px", ml: 1 }} />

        <Box
          className="show-when-hover"
          sx={{
            position: "absolute",
            top: "100%",
            minWidth: "170px",
            transform: "translateX(-50%)",
            left: "50%",
            display: "none",
            zIndex: 2,
          }}
        >
          <Paper sx={{ mt: 2 }}>
            <nav aria-label="secondary mailbox folders">
              <List sx={{ color: theme.palette.text.secondary }}>
                <ListItem disablePadding>
                  <ListItemButton
                    sx={{
                      display: "flex",
                      p: 0,
                      px: 1.5,
                    }}
                  >
                    <ListItemText
                      sx={{
                        ".MuiTypography-root": {
                          fontSize: "15px",
                          fontWeight: 300,
                        },
                      }}
                      primary="Dashboard"
                    />
                    <Box flexGrow={1} />
                  </ListItemButton>
                </ListItem>
                <ListItem
                  sx={{
                    ":hover .sub-link": { display: "block" },
                    position: "relative",
                  }}
                  disablePadding
                >
                  <ListItemButton
                    sx={{
                      display: "flex",
                      p: 0,
                      px: 1.5,
                    }}
                  >
                    <ListItemText
                      sx={{
                        ".MuiTypography-root": {
                          fontSize: "15px",
                          fontWeight: 300,
                        },
                      }}
                      primary="products"
                    />
                    <Box flexGrow={1} />
                    <KeyboardArrowRightOutlined fontSize="small" />
                  </ListItemButton>
                  <Box
                    className=" sub-link"
                    sx={{
                      display: "none",
                      position: "absolute",
                      top: 0,
                      left: "100%",
                    }}
                  >
                    <Paper sx={{ ml: 1, minWidth: 150 }}>
                      <nav aria-label="secondary mailbox folders">
                        <List sx={{ color: theme.palette.text.secondary }}>
                          <ListItem disablePadding>
                            <ListItemButton
                              sx={{
                                display: "flex",
                                p: 0,
                                px: 1.5,
                              }}
                            >
                              <ListItemText
                                sx={{
                                  ".MuiTypography-root": {
                                    fontSize: "15px",
                                    fontWeight: 300,
                                  },
                                }}
                                primary="Add Product"
                              />
                              <Box flexGrow={1} />
                            </ListItemButton>
                          </ListItem>
                          <ListItem disablePadding>
                            <ListItemButton
                              sx={{
                                display: "flex",
                                p: 0,
                                px: 1.5,
                              }}
                            >
                              <ListItemText
                                sx={{
                                  ".MuiTypography-root": {
                                    fontSize: "15px",
                                    fontWeight: 300,
                                  },
                                }}
                                primary="edit Product"
                              />
                              <Box flexGrow={1} />
                            </ListItemButton>
                          </ListItem>
                        </List>
                      </nav>
                    </Paper>
                  </Box>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton
                    sx={{
                      display: "flex",
                      p: 0,
                      px: 1.5,
                    }}
                  >
                    <ListItemText
                      sx={{
                        ".MuiTypography-root": {
                          fontSize: "15px",
                          fontWeight: 300,
                        },
                      }}
                      primary="orders"
                    />
                    <Box flexGrow={1} />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton
                    sx={{
                      display: "flex",
                      p: 0,
                      px: 1.5,
                    }}
                  >
                    <ListItemText
                      sx={{
                        ".MuiTypography-root": {
                          fontSize: "15px",
                          fontWeight: 300,
                        },
                      }}
                      primary="profile"
                    />
                    <Box flexGrow={1} />
                  </ListItemButton>
                </ListItem>
              </List>
            </nav>
          </Paper>
        </Box>
      </Box>
    </div>
  );
};

export default Links;
