import { Routes, Route } from "react-router"
import LandingPages from "./pages/LandingPages"
import Login from "./pages/Login"
import DashboardExample from "./pages/DashboardExample"
import Register from "./pages/Register"
import Tools from "./pages/Tools"

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPages />} />
        <Route path="/tools" element={<Tools />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard-example" element={<DashboardExample />} />
        <Route path="/dashboard-example/:tab" element={<DashboardExample />} />
      </Routes>
    </>
  )
}
