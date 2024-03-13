import { ArrowForwardIosOutlined } from "@mui/icons-material";
import { Box, Container, Stack, Typography, Link, Button } from "@mui/material";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./slider.css";
import { useTheme } from "@emotion/react";
import IconSection from "./IconSection";

const mySlider = [
  {
    text: "HP",
    link: "../images/banner-15.jpg",
  },
  {
    text: "DELL",
    link: "../images/banner-255.jpg",
  },
];
const Hero = () => {
  const theme = useTheme();
  return (
    <Container>
      <Box sx={{ mt: 2.5, display: "flex", alignItems: "center", gap: 2 }}>
        <Swiper
          loop={true}
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {mySlider.map((item) => {
            return (
              <SwiperSlide key={item.link} className="parent-slider">
                <img src={item.link} alt="" />
                <Box
                  sx={{
                    [theme.breakpoints.up("sm")]: {
                      position: "absolute",
                      left: "10%",
                      textAlign: "left",
                    },
                    [theme.breakpoints.down("sm")]: {
                      pt: 4,
                      pb: 6,
                    },
                  }}
                >
                  <Typography sx={{ color: "#222" }} variant="h5">
                    LIFESTYLE COLLETION
                  </Typography>
                  <Typography
                    variant="h4"
                    sx={{ color: "#222", fontWeight: 400, my: 1 }}
                  >
                    {item.text}
                  </Typography>
                  <Stack
                    sx={{ justifyContent: { xs: "center", sm: "left" } }}
                    direction={"row"}
                    alignItems={"center"}
                  >
                    <Typography sx={{ color: "#333", mr: 1 }} variant="h5">
                      SALE UP TO
                    </Typography>
                    <Typography variant="h5" sx={{ color: "#D23F57" }}>
                      30% OFF
                    </Typography>
                  </Stack>
                  <Typography
                    variant="body1"
                    sx={{ color: "#000", fontWeight: 300, my: 1 }}
                  >
                    Get Free Shipping on orders over $99.00
                  </Typography>
                  <Button
                  variant="contained"
                    sx={{
                      px: 5,
                      py: 1,
                      mt: 2,
                    
                      boxShadow: "0px 4px 16px rgba(43,52,69,0.1)",
                      color: "#fff",
                      borderRadius: "1px",
                      "&:hover": {
                        bgcolor: "#151515",
                        boxShadow: "0px 4px 16px rgba(43,52,69,0.1)",
                      },
                    }}
                  
                  >
                    shop now
                  </Button>
                </Box>
              </SwiperSlide>
            );
          })}
        </Swiper>

        <Box sx={{ display: { xs: "none", md: "block", minWidth: "26.6%" } }}>
          <Box sx={{ position: "relative" }}>
            <img width={"100%"} src="../images/banner-16.jpg" alt="" />
            <Stack
              sx={{
                position: "absolute",
                top: "50%",
                transform: "translateY(-50%)",
                left: 31,
              }}
            >
              <Typography
                variant="caption"
                sx={{ color: "#283445", fontSize: "18px" }}
              >
                NEW ARRIVALs
              </Typography>
              <Typography
                variant="h6"
                sx={{ color: "#283445", fontSize: "16px", mt: 1 }}
              >
                SUMMER
              </Typography>
              <Typography
                variant="h6"
                sx={{ color: "#283445", fontSize: "16px", mt: 1 }}
              >
                SALE 20% OFF
              </Typography>
              <Link
                sx={{
                  color: "#2B3445",
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                  transition: "0.2s",
                  "&:hover": {
                    color: "#D23F57",
                  },
                }}
                href="#"
                underline="none"
              >
                shop now
                <ArrowForwardIosOutlined sx={{ fontSize: "13px" }} />
              </Link>
            </Stack>
          </Box>
          <Box sx={{ position: "relative" }}>
            <img width={"100%"} src="../images/banner-166.jpg" alt="" />
            <Stack
              sx={{
                position: "absolute",
                top: "50%",
                transform: "translateY(-50%)",
                left: 31,
              }}
            >
              <Typography
                variant="caption"
                sx={{ color: "#283445", fontSize: "18px" }}
              >
                GAMING 4K
              </Typography>
              <Typography
                variant="h6"
                sx={{ color: "#283445", fontSize: "16px", mt: 1 }}
              >
                DESKTOPS &
              </Typography>
              <Typography
                variant="h6"
                sx={{ color: "#283445", fontSize: "16px", mt: 1 }}
              >
                LAPTOPS
              </Typography>
              <Link
                sx={{
                  color: "#2B3445",
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                  transition: "0.2s",
                  "&:hover": {
                    color: "#D23F57",
                  },
                }}
                href="#"
                underline="none"
              >
                shop now
                <ArrowForwardIosOutlined sx={{ fontSize: "13px" }} />
              </Link>
            </Stack>
          </Box>
        </Box>
      </Box>
      <IconSection />
    </Container>
  );
};

export default Hero;
