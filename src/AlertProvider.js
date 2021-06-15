import React from "react";

const Alerts = React.createContext();
Alerts.displayName = "Alerts";

export const useAlertReducer = () => React.useContext(Alerts);

export const AlertProvider = ({ children, initialState, reducer }) => {
  const [globalState, dispatch] = React.useReducer(reducer, initialState);

  return (
    <Alerts.Provider value={[globalState, dispatch]}>
      {children}
    </Alerts.Provider>
  );
};
