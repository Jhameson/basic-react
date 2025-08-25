import { BrowserRouter, Route, Routes } from "react-router-dom";
import { FetchApi } from "../pages/fetch-api";
import App from "../app/layout";
import { Exercise } from "../app/exercise";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<Exercise />} />
          <Route path="/exercise/1" element={<FetchApi />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
