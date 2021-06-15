import AlertComponent from "./AlertComponent";
import { useAlertReducer } from "./AlertProvider";

function AlertManager(props) {
  const [state] = useAlertReducer();
  const { alerts } = state;
  return (
    <div className="AlertManager">
      {alerts &&
        alerts.map((alert) => <AlertComponent key={alert.id} {...alert} />)}
    </div>
  );
}

export default AlertManager;
