import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Login from "./pages/Login";
import { GlobalStyle } from "./globalStyle/GlobalStyles";
import { lightTheme, darkTheme } from "./globalStyle/theme";
import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import Info from './pages/Info/Info'
import Favourite from "./pages/Favourite/Favourite";

function App() {
  const [isChangedTheme, setIsChangedTheme] = useState("");

  const setColor = (color) => localStorage.setItem("Color", color);

  const themeToggler = (e) => {
    setColor(e.target.value);
    setIsChangedTheme(localStorage.getItem("Color"));

    localStorage.getItem("color");
  };

  useEffect(() => {
    setIsChangedTheme(localStorage.getItem("Color"));
  }, []);

  const theme = (isChangedTheme === 'light')? lightTheme: darkTheme;
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
      <select onChange={themeToggler} defaultValue={localStorage.getItem('Color')}>
        <option>light</option>
        <option>dark</option>
      </select>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/info/:id" element={<Info />} />
        <Route path="/login" element={<Login />} />
        <Route path="/favourite" element={<Favourite />} />

      </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
