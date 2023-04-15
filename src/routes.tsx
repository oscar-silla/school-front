import { Route, Routes } from "react-router-dom";
import Home from "./presentation/src/containers/home";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="*" element={<p>not found</p>} />
    </Routes>
  );
};
