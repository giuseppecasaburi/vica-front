import { Outlet } from "react-router-dom";
import AppHeader from "../components/AppHeader";
import AppFooter from "../components/AppFooter";
import ScrollToTop from "../components/ScrollToTop";

function AppLayout() {
    return (
        <>
            <AppHeader />
            <Outlet />
            <ScrollToTop />
            <AppFooter />
        </>
    )
}

export default AppLayout;