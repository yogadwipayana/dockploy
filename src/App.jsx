import { Routes, Route } from "react-router"
import LandingPages from "./pages/LandingPages"
import Login from "./pages/Login"
import DashboardExample from "./pages/DashboardExample"
import Register from "./pages/Register"
import Tools from "./pages/Tools"
import Products from "./pages/Products"
import Terms from "./pages/Terms"
import Contact from "./pages/Contact"
import { useClarity } from "@/hooks/useClarity"

export default function App() {
  useClarity();

  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPages />} />
        <Route path="/products" element={<Products />} />
        <Route path="/tools" element={<Tools />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard-example" element={<DashboardExample />} />
        <Route path="/dashboard-example/:tab" element={<DashboardExample />} /> */}
      </Routes>
    </>
  )
}
