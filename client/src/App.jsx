
import Login from './components/Login'
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom'
import Home from './components/Homepage'
import About from './components/About'
import ProductRoutees from './Routes/ProductRoutees';
import AdminRoutes from './Routes/AdminRoutes';
import { Toaster } from 'react-hot-toast';
import Faqs from './components/Faqs';
function App() {


  const user = { user: { role: "admin" } };

  console.log(user?.user?.role);

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path="/homepage" element={<Home />} />
          <Route path="/faq" element={<Faqs />} />
          <Route path="/chat" element={<iframe src="/chat.html" width="100%" height="500px" />} />
        </Routes>
      </Router>

    </>
  )
}

export default App
