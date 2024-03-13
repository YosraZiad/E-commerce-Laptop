import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "../../theme";
import HeaderTop from "../header/HeaderTop";
import HeaderNavv from "../header/HeaderNavv";
import HeaderBottom from "../header/HeaderBottom";
import SwitchControl from "../formControl/SwitchControl";

const Navbar = () => {
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
        <SwitchControl />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default Navbar;
