import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CookiesProvider } from 'react-cookie';


import Appbar from "./component/AppBar/AppBar";
import MainPage from "./component/MainPage/MainPage";
import Login from "./component/Login";
import SignUp from "./component/SignUp";
import ChatGPT from "./component/ChatGPT";
import Forgot from "./component/Forgot";
import Manager from "./component/Manager";

const theme = createTheme({
  palette: {
    primary: {
      main: '#111111',
    },
  },
});

function App() {
  return (
    <CookiesProvider>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Appbar />
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/ChatGPT" element={<ChatGPT />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/forgot" element={<Forgot/>}/>
            <Route path="/Manager" element={<Manager/>}/>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </CookiesProvider>
  );
}

export default App;
