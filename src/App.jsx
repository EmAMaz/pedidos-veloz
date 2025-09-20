import { Route, Routes } from "react-router-dom";
import { Public } from "./components/Public";
import { Login } from "./auth/login";
import { ThemeProvider } from "./context/themeContext";
import { PanelAdmin } from "./components/PanelAdmin";
import { ProtectedRoutes } from "./components/ProtectedRoutes";
import { UserTokenProvider } from "./context/userTokenContext";
import { ProductForm } from "./components/FormAddProduct";
import { NotFound } from "./components/pages/404";

function App() {
  return (
    <ThemeProvider themeValue="ligth">
      <UserTokenProvider
        userTokenValue={localStorage.getItem("tokenUser") || ""}
      >
        <Routes>
          <Route path="/" element={<Public />} />
          <Route path="ingresar" element={<Login />} />
          <Route path="intranet/panel-admin" element={<ProtectedRoutes><PanelAdmin /></ProtectedRoutes>} />
          <Route path="intranet/panel-admin/add-product" element={<ProtectedRoutes><ProductForm /></ProtectedRoutes>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </UserTokenProvider>
    </ThemeProvider>
  );
}

export default App;
