import { Routes, Route } from 'react-router-dom'
import Header from './components/layout/Header.jsx'
import Footer from './components/layout/Footer.jsx'
import AdminLayout from './components/layout/AdminLayout.jsx'
import CustomerLayout from './components/layout/CustomerLayout.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Services from './pages/Services.jsx'
import Plans from './pages/Plans.jsx'
import Contact from './pages/Contact.jsx'
import Terms from './pages/Terms.jsx'
import Privacy from './pages/Privacy.jsx'
import AdminDashboard from './pages/admin/AdminDashboard.jsx'
import AdminClients from './pages/admin/AdminClients.jsx'
import AdminUpdates from './pages/admin/AdminUpdates.jsx'
import AdminFootage from './pages/admin/AdminFootage.jsx'
import AdminRoles from './pages/admin/AdminRoles.jsx'
import CustomerDashboard from './pages/customer/CustomerDashboard.jsx'
import CustomerUpdates from './pages/customer/CustomerUpdates.jsx'
import CustomerFootage from './pages/customer/CustomerFootage.jsx'
import CustomerPlan from './pages/customer/CustomerPlan.jsx'
import ScrollToTop from './components/utils/ScrollToTop.jsx'
import { ThemeProvider } from './context/ThemeContext.jsx'
import { useEffect, useState } from 'react'
import Loader from './components/utils/Loader.jsx'

function App() {

   const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500); // 2.5s
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <ThemeProvider>
      <ScrollToTop />
      <Routes>
        {/* Admin Panel — own layout, no public header/footer */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="clients" element={<AdminClients />} />
          <Route path="updates" element={<AdminUpdates />} />
          <Route path="footage" element={<AdminFootage />} />
          <Route path="roles" element={<AdminRoles />} />
          <Route path="settings" element={<AdminDashboard />} />
        </Route>

        {/* Customer Panel — own layout, no public header/footer */}
        <Route path="/customer" element={<CustomerLayout />}>
          <Route index element={<CustomerDashboard />} />
          <Route path="updates" element={<CustomerUpdates />} />
          <Route path="footage" element={<CustomerFootage />} />
          <Route path="plan" element={<CustomerPlan />} />
        </Route>

        {/* Public Website — with header and footer */}
        <Route path="*" element={
          <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-secondary-900 transition-colors duration-300">
            <Header />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/plans" element={<Plans />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/privacy" element={<Privacy />} />
              </Routes>
            </main>
            <Footer />
          </div>
        } />
      </Routes>
    </ThemeProvider>
  )
}

export default App