import Hero from "../hero/Hero";
import ScrollToTop from "../scroll/ScrollToTop";
import Main from "../main/Main";
import Footer from "../footer/Footer";
import { CssBaseline, ThemeProvider, Box } from "@mui/material";
import { ColorModeContext, useMode } from "../../theme";
import HeaderTop from "../header/HeaderTop";
import HeaderNavv from "../header/HeaderNavv";
import HeaderBottom from "../header/HeaderBottom";

const Page = () => {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider
      // @ts-ignore
      value={colorMode}
    >
      <ThemeProvider
        // @ts-ignore
        theme={theme}
      >
        <CssBaseline />

        <HeaderTop />
        <HeaderNavv />
        <HeaderBottom />

        <Box
          bgcolor={
            // @ts-ignore
            theme.palette.bg.main
          }
        >
          <Hero />
          <Main />
        </Box>

        <Footer />
        <ScrollToTop />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default Page;
