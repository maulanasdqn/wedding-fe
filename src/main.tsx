import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { app } from "./app";
import "./styles/global.css";
import { ReactQueryProvider } from "./app/_components/provider/react-query";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ReactQueryProvider>
      <RouterProvider router={app} />
    </ReactQueryProvider>
  </StrictMode>,
);
