import { 
  Check, CreditCard, Calendar, Shield, Camera, 
  Clock, TrendingUp, ArrowUpRight
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { currentCustomer } from '../../data/mockData'

const CustomerPlan = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900">My Plan</h2>
        <p className="text-sm text-gray-500 mt-1">View your current plan details and usage</p>
      </div>

      {/* Plan Card */}
      <div className="bg-gradient-to-br from-secondary-900 to-primary-900 rounded-2xl p-6 sm:p-8 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
        <div className="relative z-10">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
            <div>
              <p className="text-sm text-primary-200 mb-1">Current Plan</p>
              <h3 className="text-3xl font-bold">{currentCustomer.plan} Plan</h3>
            </div>
            <div className="text-right">
              <p className="text-3xl font-bold">{currentCustomer.monthlyBill}</p>
              <p className="text-sm text-white/60">per month</p>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <Camera className="w-5 h-5 text-primary-300 mb-2" />
              <p className="text-2xl font-bold">{currentCustomer.cameras}</p>
              <p className="text-xs text-white/60">Cameras</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <Clock className="w-5 h-5 text-primary-300 mb-2" />
              <p className="text-2xl font-bold">12h</p>
              <p className="text-xs text-white/60">Daily Monitoring</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <Shield className="w-5 h-5 text-primary-300 mb-2" />
              <p className="text-2xl font-bold">99.9%</p>
              <p className="text-xs text-white/60">Uptime</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <TrendingUp className="w-5 h-5 text-primary-300 mb-2" />
              <p className="text-2xl font-bold">{currentCustomer.alertsThisMonth}</p>
              <p className="text-xs text-white/60">Alerts/Month</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Features Included */}
        <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
          <div className="px-6 py-5 border-b border-gray-100">
            <h3 className="text-lg font-semibold text-gray-900">Features Included</h3>
          </div>
          <div className="p-6">
            <ul className="space-y-4">
              {currentCustomer.planFeatures.map((feature, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-50 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-3.5 h-3.5 text-green-600" />
                  </div>
                  <span className="text-sm text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Plan Details */}
        <div className="space-y-6">
          {/* Billing Info */}
          <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
            <div className="px-6 py-5 border-b border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900">Billing Information</h3>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex items-center justify-between py-3 border-b border-gray-50">
                <div className="flex items-center space-x-3">
                  <CreditCard className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-600">Monthly Bill</span>
                </div>
                <span className="text-sm font-semibold text-gray-900">{currentCustomer.monthlyBill}</span>
              </div>
              <div className="flex items-center justify-between py-3 border-b border-gray-50">
                <div className="flex items-center space-x-3">
                  <Calendar className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-600">Next Billing Date</span>
                </div>
                <span className="text-sm font-semibold text-gray-900">{currentCustomer.nextBillingDate}</span>
              </div>
              <div className="flex items-center justify-between py-3 border-b border-gray-50">
                <div className="flex items-center space-x-3">
                  <Calendar className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-600">Contract End</span>
                </div>
                <span className="text-sm font-semibold text-gray-900">{currentCustomer.contractEnd}</span>
              </div>
              <div className="flex items-center justify-between py-3">
                <div className="flex items-center space-x-3">
                  <Calendar className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-600">Member Since</span>
                </div>
                <span className="text-sm font-semibold text-gray-900">{currentCustomer.joinedDate}</span>
              </div>
            </div>
          </div>

          {/* Upgrade CTA */}
          <div className="bg-primary-50 border border-primary-100 rounded-2xl p-6 text-center">
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Need More Coverage?</h4>
            <p className="text-sm text-gray-600 mb-4">
              Upgrade to Custom plan for unlimited cameras and 24/7 monitoring.
            </p>
            <Link
              to="/plans"
              className="inline-flex items-center px-6 py-2.5 bg-primary-900 text-white rounded-xl text-sm font-medium hover:bg-primary-700 transition-colors shadow-lg shadow-primary-900/20"
            >
              View Upgrade Options
              <ArrowUpRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CustomerPlan
