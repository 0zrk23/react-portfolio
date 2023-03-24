// import { Home, Route } from "@mui/icons-material";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
// import { Home } from "./pages/Home";
// import { About } from "./pages/About";
// import { Contact } from "./pages/Contact";
// import { Portfolio } from "./pages/Portfolio";
import {Home,About,Portfolio,Contact} from "./pages"
import { ThemeProvider } from "@emotion/react";
import { createTheme, CssBaseline } from "@mui/material";




function App() {
  const theme = createTheme({
    palette:{
      primary:{
        main: '#fcfcfc'
      },
      secondary:{
        main: '#354d80'
      },
      color3:{
        main: '#3d6092'
      },
      color4:{
        main: '#4573a5'
      },
      color5: {
        main: '#4e86b8'
      }
    }
  })
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/About" element={<About />}/>
        <Route path="/Portfolio" element={<Portfolio />}/>
        <Route path="/Contact" element={<Contact />}/>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
