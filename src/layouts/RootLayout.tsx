import { ReactElement } from "react";
import { Header } from "../components";
import { Outlet } from "react-router-dom";
import { ThemeContextProvider } from "../contexts";

export function RootLayout(): ReactElement {
  return (
    <>
      <Header />
      <ThemeContextProvider>
        <main>
          <Outlet />
        </main>
      </ThemeContextProvider>
    </>
  );
}
