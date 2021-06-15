import React, { useState, useReducer, dispatch } from "react";
import { useAlertReducer } from "./AlertProvider";

function AlertExample(props) {
  const [values, setValues] = useState({
    text: "",
    link: "",
    timeLimit: 10,
    alertType: "",
    alertTitle: "",
  });

  const [, dispatch] = useAlertReducer();

  const handleInputChange = (event) => {
    event.persist();
    setValues((inputs) => ({
      ...inputs,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    if (event) {
      event.preventDefault();
      const id = new Date().getTime();
      dispatch({
        type: "add",
        data: {
          ...values,
          id: id,
        },
      });
      setTimeout(function () {
        dispatch({ type: "remove", id: id });
      }, values.timeLimit * 1000);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Text</label>
        <input
          type="text"
          name="text"
          onChange={handleInputChange}
          value={values.text}
        />
      </div>
      <div>
        <label>Link</label>
        <input
          type="text"
          name="link"
          onChange={handleInputChange}
          value={values.link}
        />
      </div>
      <div>
        <label>Title</label>
        <input
          type="text"
          name="alertTitle"
          onChange={handleInputChange}
          value={values.alertTitle}
        />
      </div>
      <div>
        <label>Time Limit</label>
        <input
          type="text"
          name="timeLimit"
          onChange={handleInputChange}
          value={values.timeLimit}
        />
      </div>
      <div>
        <label>Alert Type</label>
        <input
          type="text"
          name="alertType"
          onChange={handleInputChange}
          value={values.alertType}
          required
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default AlertExample;
