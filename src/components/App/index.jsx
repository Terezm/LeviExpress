import React from "react";
import { Footer } from "../Footer";
import { Outlet } from "react-router-dom";
import { Header } from "../Header";

export const App = () => (
  <>
    <Header />
    <Outlet />
    <Footer />
  </>
);
