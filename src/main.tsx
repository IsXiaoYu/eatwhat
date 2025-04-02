import { BrowserRouter, Routes, Route } from "react-router";
import { createRoot } from "react-dom/client";
import Entry from "./pages/entry/index.tsx";
import "./index.less";
import { ConfigProvider } from "antd";
import Recommend from "./pages/recommend/index.tsx";
import Menu from "./pages/menu/index.tsx";
import My from "./pages/my/index.tsx";
import About from "./pages/about/index.tsx";
import DishDetail from "./pages/menu/dish/index.tsx";
createRoot(document.getElementById("root")!).render(
  <ConfigProvider
    theme={{
      token: {
        colorPrimary: "#1677ff", // 全局主色
      },
    }}
  >
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Entry />}>
          <Route index element={<Recommend />} />
          <Route path="menu" element={<Menu />} />
          <Route path="/menu/dish/:dishId" element={<DishDetail />} />
          <Route path="my" element={<My />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </ConfigProvider>
);
