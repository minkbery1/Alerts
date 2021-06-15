function AlertReducer(state, action) {
  switch (action.type) {
    case "add":
      const data = action.data;
      const newAlert = {
        id: data.id,
        text: data.text,
        link: data.link,
        alertType: data.alertType,
        alertTitle: data.alertTitle,
        timeLimit: data.timeLimit,
      };
      return {
        alerts: state.alerts.concat(newAlert),
      };
    case "remove":
      return { alerts: state.alerts.filter((item) => item.id !== action.id) };
    default:
      return state;
  }
}

export default AlertReducer;
