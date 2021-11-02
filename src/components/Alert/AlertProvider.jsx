import React, { useState, useContext } from "react";

const AlertContext = React.createContext()
const AlertContextToggle = React.createContext()
export const useAlert = () => {
  return (useContext(AlertContext))
}

export const useAlertToggle = () => {
  return (useContext(AlertContextToggle))
}

export function AlertProvider ({ children }) {
  const [alert, setAlert] = useState(false)
  
  const toggleAlert = () => {
    setAlert(prev => !prev)
  }

  return (
    <AlertContext.Provider value={alert}>
      <AlertContextToggle.Provider value={toggleAlert}>
        {children}
      </AlertContextToggle.Provider>
    </AlertContext.Provider>
  )
}