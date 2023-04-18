import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyle from './styles/globalStyle';

import { BrowserRouter , RouterProvider} from "react-router-dom";

import Home from './pages/Home'
import User from './pages/User'

const router = BrowserRouter([
  {
    path : "/",
    element: <Home/>,
  },
  {
    path : "/usuarios",
    element: <User/>
  }
])