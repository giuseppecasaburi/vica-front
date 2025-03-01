import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import AppLayout from "./layout/AppLayout"
import CollectionPage from "./pages/CollectionPage"
import MobiliPage from "./pages/MobiliPage"
import ContactPage from "./pages/ContactPage"




function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout/>}>
            <Route path="/" index element={<HomePage/>}/>
            <Route path="/collezioni" element={<CollectionPage/>}/>
            <Route path="/mobili" element={<MobiliPage/>} />
            <Route path="/contatti" element={<ContactPage/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
