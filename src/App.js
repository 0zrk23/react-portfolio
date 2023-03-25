// import { Home, Route } from "@mui/icons-material";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
// import { Home } from "./pages/Home";
// import { About } from "./pages/About";
// import { Contact } from "./pages/Contact";
// import { Portfolio } from "./pages/Portfolio";
import {Home,About,Contact} from "./pages"
import { ThemeProvider } from "@emotion/react";
import { createTheme, CssBaseline } from "@mui/material";
// import { Home } from "./pages/Home/Home";




function App() {
  const theme = createTheme({
    palette:{
      primary:{
        main: '#fcfcfc'
      },
      secondary:{
        main: '#171C42'
      },
      color3:{
        main: '#273c6d'
      },
      color4:{
        main: '#375c98'
      },
      color5: {
        main: '#477cc3'
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
        <Route path="/Contact" element={<Contact />}/>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
