import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import AppLayout from "./layout/AppLayout"




function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout/>}>
            <Route path="/" index element={<HomePage/>}/>
            <Route />
            <Route />
            <Route />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
