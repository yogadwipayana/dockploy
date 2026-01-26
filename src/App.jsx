import { Routes, Route } from "react-router"
import LandingPages from "./pages/LandingPages"
import Login from "./pages/Login"
import DashboardExample from "./pages/DashboardExample"

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPages />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard-example" element={<DashboardExample />} />
      </Routes>
    </>
  )
}
