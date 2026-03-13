import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import Start from "./components/Start.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Start />
  </StrictMode>,
);
