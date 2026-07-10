import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import Dashboard from "./pages/Dashboard";
import Cabins from "./pages/Cabins";
import PageNotFound from "./pages/PageNotFound";
import Login from "./pages/Login";
import Account from "./pages/Account";
import Settings from "./pages/Settings";
import Users from "./pages/Users";
import GlobalStyles from "./styles/GlobalStyles";
import { ROUTE_PATHS } from "./constants/routes";
import AppLayout from "./layouts/AppLayout";

const basename = import.meta.env.BASE_URL.replace(/\/$/, "");

export default function App() {
  return (
    <>
      <GlobalStyles />

      <BrowserRouter basename={basename}>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to={ROUTE_PATHS.dashboard.root} />} />
            <Route path={ROUTE_PATHS.dashboard.root} element={<Dashboard />} />
            <Route path={ROUTE_PATHS.cabins.root} element={<Cabins />} />
            <Route path={ROUTE_PATHS.users.root} element={<Users />} />
            <Route path={ROUTE_PATHS.settings.root} element={<Settings />} />
            <Route path={ROUTE_PATHS.account.root} element={<Account />} />
          </Route>

          <Route path={ROUTE_PATHS.login.root} element={<Login />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
