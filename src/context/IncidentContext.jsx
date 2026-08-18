import { createContext, useContext, useReducer } from 'react'
import { initialIncidents, initialNotifications, clients, stores, cameras, employees, regulations } from '../data/mockData'

const IncidentContext = createContext()

const incidentReducer = (state, action) => {
  switch (action.type) {
    case 'CREATE_INCIDENT': {
      const newIncident = {
        ...action.payload,
        id: `INC-${String(state.incidents.length + 1).padStart(3, '0')}`,
        status: 'internal_review',
        customerFeedback: [],
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        timeline: [
          {
            action: 'Incident Created',
            by: action.payload.createdByName || 'Employee',
            date: new Date().toISOString(),
            note: 'Incident reported during live monitoring',
          },
          {
            action: 'Submitted for Internal Review',
            by: action.payload.createdByName || 'Employee',
            date: new Date().toISOString(),
            note: 'Submitted with evidence files',
          },
        ],
      }
      return { ...state, incidents: [...state.incidents, newIncident] }
    }

    case 'APPROVE_INCIDENT': {
      const incidents = state.incidents.map((inc) => {
        if (inc.id === action.payload.incidentId) {
          return {
            ...inc,
            status: 'approved',
            internalReviewNotes: action.payload.notes || inc.internalReviewNotes,
            internalReviewBy: action.payload.reviewedBy || 'EMP-001',
            internalReviewDate: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
            timeline: [
              ...inc.timeline,
              {
                action: 'Internal Review Approved',
                by: action.payload.reviewerName || 'Sarah Connor',
                date: new Date().toISOString(),
                note: action.payload.notes || 'Approved after internal review',
              },
            ],
          }
        }
        return inc
      })
      return { ...state, incidents }
    }

    case 'SEND_TO_CUSTOMER': {
      const incidents = state.incidents.map((inc) => {
        if (inc.id === action.payload.incidentId) {
          return {
            ...inc,
            status: 'sent_to_customer',
            updatedAt: new Date().toISOString(),
            timeline: [
              ...inc.timeline,
              {
                action: 'Sent to Customer Portal',
                by: action.payload.sentByName || 'Sarah Connor',
                date: new Date().toISOString(),
                note: 'Customer notified via portal and email',
              },
            ],
          }
        }
        return inc
      })
      // Create notification for the customer
      const incident = state.incidents.find((i) => i.id === action.payload.incidentId)
      const newNotification = {
        id: `NTF-${String(state.notifications.length + 1).padStart(3, '0')}`,
        incidentId: action.payload.incidentId,
        title: `New Incident Report: ${incident?.title || 'Incident'}`,
        message: 'A new incident has been reported at your location. Please review and acknowledge.',
        type: 'incident',
        clientId: incident?.clientId,
        read: false,
        createdAt: new Date().toISOString(),
      }
      return {
        ...state,
        incidents,
        notifications: [newNotification, ...state.notifications],
        toastMessage: `Incident "${incident?.title}" sent to customer portal!`,
      }
    }

    case 'ACKNOWLEDGE_INCIDENT': {
      const incidents = state.incidents.map((inc) => {
        if (inc.id === action.payload.incidentId) {
          return {
            ...inc,
            status: 'acknowledged',
            updatedAt: new Date().toISOString(),
            timeline: [
              ...inc.timeline,
              {
                action: 'Customer Acknowledged',
                by: action.payload.acknowledgedBy || 'Customer',
                date: new Date().toISOString(),
                note: 'Customer has reviewed and acknowledged the incident',
              },
            ],
          }
        }
        return inc
      })
      return { ...state, incidents }
    }

    case 'ADD_FEEDBACK': {
      const incidents = state.incidents.map((inc) => {
        if (inc.id === action.payload.incidentId) {
          const newFeedback = {
            by: action.payload.by || 'Customer',
            date: new Date().toISOString(),
            message: action.payload.message,
          }
          return {
            ...inc,
            status: action.payload.newStatus || inc.status,
            customerFeedback: [...inc.customerFeedback, newFeedback],
            updatedAt: new Date().toISOString(),
            timeline: [
              ...inc.timeline,
              {
                action: 'Customer Feedback Added',
                by: action.payload.by || 'Customer',
                date: new Date().toISOString(),
                note: action.payload.message.substring(0, 80) + (action.payload.message.length > 80 ? '...' : ''),
              },
            ],
          }
        }
        return inc
      })
      return { ...state, incidents }
    }

    case 'RESOLVE_INCIDENT': {
      const incidents = state.incidents.map((inc) => {
        if (inc.id === action.payload.incidentId) {
          return {
            ...inc,
            status: 'resolved',
            updatedAt: new Date().toISOString(),
            timeline: [
              ...inc.timeline,
              {
                action: 'Incident Resolved',
                by: action.payload.resolvedBy || 'Employee',
                date: new Date().toISOString(),
                note: action.payload.note || 'Incident closed after customer confirmation',
              },
            ],
          }
        }
        return inc
      })
      return { ...state, incidents }
    }

    case 'MARK_NOTIFICATION_READ': {
      const notifications = state.notifications.map((n) =>
        n.id === action.payload.notificationId ? { ...n, read: true } : n
      )
      return { ...state, notifications }
    }

    case 'DISMISS_TOAST': {
      return { ...state, toastMessage: null }
    }

    default:
      return state
  }
}

const initialState = {
  incidents: initialIncidents,
  notifications: initialNotifications,
  toastMessage: null,
}

export const IncidentProvider = ({ children }) => {
  const [state, dispatch] = useReducer(incidentReducer, initialState)

  // Helper functions
  const getClientIncidents = (clientId) =>
    state.incidents.filter((i) => i.clientId === clientId)

  const getClientNotifications = (clientId) =>
    state.notifications.filter((n) => n.clientId === clientId)

  const getUnreadNotificationCount = (clientId) =>
    state.notifications.filter((n) => n.clientId === clientId && !n.read).length

  const getIncidentById = (id) => state.incidents.find((i) => i.id === id)

  const getStoresByClient = (clientId) => stores.filter((s) => s.clientId === clientId)

  const getCamerasByStore = (storeId) => cameras.filter((c) => c.storeId === storeId)

  const getCamerasByClient = (clientId) => cameras.filter((c) => c.clientId === clientId)

  const getRegulationsByStore = (storeId) => regulations.filter((r) => r.storeId === storeId)

  const getEmployeesByClient = (clientId) =>
    employees.filter((e) => e.assignedClientId === clientId || e.assignedClientId === null)

  const getClientById = (clientId) => clients.find((c) => c.id === clientId)

  const getStoreById = (storeId) => stores.find((s) => s.id === storeId)

  const getCameraById = (cameraId) => cameras.find((c) => c.id === cameraId)

  const getRegulationById = (regId) => regulations.find((r) => r.id === regId)

  const getEmployeeById = (empId) => employees.find((e) => e.id === empId)

  const getIncidentsByStatus = (status) => state.incidents.filter((i) => i.status === status)

  const value = {
    ...state,
    dispatch,
    getClientIncidents,
    getClientNotifications,
    getUnreadNotificationCount,
    getIncidentById,
    getStoresByClient,
    getCamerasByStore,
    getCamerasByClient,
    getRegulationsByStore,
    getEmployeesByClient,
    getClientById,
    getStoreById,
    getCameraById,
    getRegulationById,
    getEmployeeById,
    getIncidentsByStatus,
  }

  return <IncidentContext.Provider value={value}>{children}</IncidentContext.Provider>
}

export const useIncidents = () => {
  const context = useContext(IncidentContext)
  if (!context) {
    throw new Error('useIncidents must be used within an IncidentProvider')
  }
  return context
}
