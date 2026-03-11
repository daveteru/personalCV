import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router";
import { HeroUIProvider } from "@heroui/react";
import "./index.css";
import Home from "./Home";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HashRouter>
      <HeroUIProvider>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </HeroUIProvider>
    </HashRouter>
  </StrictMode>,
);