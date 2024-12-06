import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { app } from "./app";
import { ReactQueryProvider } from "./app/_components/provider/react-query";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ReactQueryProvider>
      <Suspense>
        <RouterProvider router={app} />
      </Suspense>
    </ReactQueryProvider>
  </StrictMode>,
);
