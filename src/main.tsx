import { createRoot } from "react-dom/client";
import "./index.css";
import { AppRoutes } from "./router/routes.tsx";

createRoot(document.getElementById("root")!).render(<AppRoutes />);
