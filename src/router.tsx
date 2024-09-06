import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
// import App from "./App";
import { About, Home } from "./pages";
import { RootLayout } from "./layouts";

export const router = createBrowserRouter(createRoutesFromElements(
  <Route element={<RootLayout />} path="/">
    <Route element={<Home />} index />
    <Route element={<About />} path="about" />
  </Route>
));