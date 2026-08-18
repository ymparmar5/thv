import { Routes, Route, useLocation } from 'react-router-dom'
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
import AdminReportIncident from './pages/admin/AdminReportIncident.jsx'
import AdminIncidents from './pages/admin/AdminIncidents.jsx'
import AdminIncidentDetail from './pages/admin/AdminIncidentDetail.jsx'
import CustomerDashboard from './pages/customer/CustomerDashboard.jsx'
import CustomerUpdates from './pages/customer/CustomerUpdates.jsx'
import CustomerFootage from './pages/customer/CustomerFootage.jsx'
import CustomerPlan from './pages/customer/CustomerPlan.jsx'
import CustomerIncidents from './pages/customer/CustomerIncidents.jsx'
import CustomerIncidentDetail from './pages/customer/CustomerIncidentDetail.jsx'
import AdminStores from './pages/admin/AdminStores.jsx'
import CustomerStores from './pages/customer/CustomerStores.jsx'
import ScrollToTop from './components/utils/ScrollToTop.jsx'
import { ThemeProvider } from './context/ThemeContext.jsx'
import { IncidentProvider } from './context/IncidentContext.jsx'
import { useEffect, useState, useRef } from 'react'
import Loader from './components/utils/Loader.jsx'
import { AnimatePresence } from 'framer-motion'
import PageWrapper from './components/layout/PageWrapper.jsx'

function App() {

  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const isInitialLoad = useRef(true);

  useEffect(() => {
    if (isInitialLoad.current) {
      const timer = setTimeout(() => {
        setLoading(false);
        isInitialLoad.current = false;
      }, 2500); // 2.5s for initial load
      return () => clearTimeout(timer);
    } else {
      setLoading(true);
      const timer = setTimeout(() => {
        setLoading(false);
      }, 500); // 0.5s for route change
      return () => clearTimeout(timer);
    }
  }, [location.pathname]);

  if (loading) {
    return <Loader />;
  }

  return (
    <ThemeProvider>
      <IncidentProvider>
        <ScrollToTop />
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            {/* Public Routes with public header/footer */}
            <Route path="/" element={
              <div className="flex flex-col min-h-screen">
                <Header />
                <main className="flex-grow">
                  <PageWrapper><Home /></PageWrapper>
                </main>
                <Footer />
              </div>
            } />
            
            <Route path="/about" element={
              <div className="flex flex-col min-h-screen">
                <Header />
                <main className="flex-grow">
                  <PageWrapper><About /></PageWrapper>
                </main>
                <Footer />
              </div>
            } />

            <Route path="/services" element={
              <div className="flex flex-col min-h-screen">
                <Header />
                <main className="flex-grow">
                  <PageWrapper><Services /></PageWrapper>
                </main>
                <Footer />
              </div>
            } />

            <Route path="/plans" element={
              <div className="flex flex-col min-h-screen">
                <Header />
                <main className="flex-grow">
                  <PageWrapper><Plans /></PageWrapper>
                </main>
                <Footer />
              </div>
            } />

            <Route path="/contact" element={
              <div className="flex flex-col min-h-screen">
                <Header />
                <main className="flex-grow">
                  <PageWrapper><Contact /></PageWrapper>
                </main>
                <Footer />
              </div>
            } />

            <Route path="/terms" element={
              <div className="flex flex-col min-h-screen">
                <Header />
                <main className="flex-grow">
                  <PageWrapper><Terms /></PageWrapper>
                </main>
                <Footer />
              </div>
            } />

            <Route path="/privacy" element={
              <div className="flex flex-col min-h-screen">
                <Header />
                <main className="flex-grow">
                  <PageWrapper><Privacy /></PageWrapper>
                </main>
                <Footer />
              </div>
            } />

            {/* Admin Panel — own layout, no public header/footer */}
            <Route path="/admin" element={<PageWrapper><AdminLayout /></PageWrapper>}>
              <Route index element={<AdminDashboard />} />
              <Route path="clients" element={<AdminClients />} />
              <Route path="stores" element={<AdminStores />} />
              <Route path="updates" element={<AdminUpdates />} />
              <Route path="footage" element={<AdminFootage />} />
              <Route path="roles" element={<AdminRoles />} />
              <Route path="report-incident" element={<AdminReportIncident />} />
              <Route path="incidents" element={<AdminIncidents />} />
              <Route path="incidents/:id" element={<AdminIncidentDetail />} />
              <Route path="settings" element={<AdminDashboard />} />
            </Route>

            {/* Customer Panel — own layout, no public header/footer */}
            <Route path="/customer" element={<CustomerLayout />}>
              <Route index element={<CustomerDashboard />} />
              <Route path="stores" element={<CustomerStores />} />
              <Route path="updates" element={<CustomerUpdates />} />
              <Route path="footage" element={<CustomerFootage />} />
              <Route path="plan" element={<CustomerPlan />} />
              <Route path="incidents" element={<CustomerIncidents />} />
              <Route path="incidents/:id" element={<CustomerIncidentDetail />} />
            </Route>
          </Routes>
        </AnimatePresence>
      </IncidentProvider>
    </ThemeProvider>
  )
}

export default App