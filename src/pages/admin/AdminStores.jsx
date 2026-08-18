import React, { useState, useMemo } from 'react'
import { Search, Plus, Store, Camera, ShieldCheck, Edit2, MapPin, Users } from 'lucide-react'
import { stores, clients, employees } from '../../data/mockData'
import { useIncidents } from '../../context/IncidentContext'

const AdminStores = () => {
  const { getCamerasByStore, getRegulationsByStore } = useIncidents()
  const [searchTerm, setSearchTerm] = useState('')

  const getEmployeesByStore = (storeId) => employees.filter(e => e.assignedStoreId === storeId)

  const filteredStores = useMemo(() => {
    return stores.filter(store => 
      store.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      store.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
      store.id.toLowerCase().includes(searchTerm.toLowerCase())
    )
  }, [searchTerm])

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Store Management</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Manage physical locations, cameras, and store-specific rules</p>
        </div>
        <button className="btn-primary">
          <Plus className="w-4 h-4 mr-2" />
          Add Store
        </button>
      </div>

      <div className="card p-4 sm:p-6 mb-6">
        <div className="relative w-full max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search stores by name, ID, or location..."
            className="input-field pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
        {filteredStores.map(store => {
          const client = clients.find(c => c.id === store.clientId)
          const cameras = getCamerasByStore(store.id)
          const regulations = getRegulationsByStore(store.id)
          
          return (
            <div key={store.id} className="card p-5 sm:p-6 hover:-translate-y-1 transition-transform group">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-primary-50 dark:bg-primary-900/20 flex items-center justify-center text-primary-900 dark:text-primary-400">
                    <Store className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white">{store.name}</h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{store.id}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <button className="p-2 text-gray-400 hover:text-primary-900 dark:hover:text-primary-400 transition-colors bg-gray-50 dark:bg-secondary-900 rounded-lg">
                    <Edit2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="space-y-3 mb-5">
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                  <Users className="w-4 h-4 mr-2 text-gray-400" />
                  Client: {client?.name || 'Unknown'}
                </div>
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                  <MapPin className="w-4 h-4 mr-2 text-gray-400" />
                  {store.address}
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2 border-t border-gray-100 dark:border-secondary-700 pt-4">
                <div className="text-center p-2 rounded-lg bg-gray-50 dark:bg-secondary-900/50">
                  <Camera className="w-4 h-4 mx-auto mb-1 text-primary-900" />
                  <p className="text-xs font-medium text-gray-900 dark:text-white">{cameras.length}</p>
                  <p className="text-[10px] text-gray-500">Cameras</p>
                </div>
                <div className="text-center p-2 rounded-lg bg-gray-50 dark:bg-secondary-900/50">
                  <ShieldCheck className="w-4 h-4 mx-auto mb-1 text-green-600" />
                  <p className="text-xs font-medium text-gray-900 dark:text-white">{regulations.length}</p>
                  <p className="text-[10px] text-gray-500">Rules</p>
                </div>
                <div className="text-center p-2 rounded-lg bg-gray-50 dark:bg-secondary-900/50 cursor-pointer hover:bg-gray-100 dark:hover:bg-secondary-800 transition-colors">
                  <span className="text-xs font-bold text-primary-900 dark:text-primary-400 mt-2 block">Manage</span>
                  <p className="text-[10px] text-gray-500">View Details</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default AdminStores
