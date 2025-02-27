import { Outlet } from "react-router-dom";
import AppHeader from "../components/AppHeader";

function AppLayout () {
    return (
        <>
        <AppHeader />
        <Outlet/>
        <h1>Footer</h1>
        </>
    )
}

export default AppLayout;