import React from "react";

function StepSeven({ formData, currentStep }) {
  const renderCheckboxValue = (value) => {
    return value ? "true" : "false";
  };

  return (
    <>
      <div className="progress">
        <div
          className="progress-bar bg-success"
          role="progressbar"
          style={{ width: "100%" }}
          aria-valuenow="100"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          100%
        </div>
      </div>
      <div>
        <h3>JOB COMPLETED</h3>
        <p>An auto-email has been sent to advise the client.</p>
        <p>Email content:</p>
        <p>
          Dear Client, Your tax return has been successfully lodged. Thank you
          for choosing our services.
        </p>
        <p>Best regards, Your Tax Services Team</p>
        <h4>Data entered:</h4>
        <ul>
          {Object.entries(formData).map(([key, value]) => (
            <li key={key}>
              <strong>{key}:</strong>{" "}
              {typeof value === "boolean" ? renderCheckboxValue(value) : value}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default StepSeven;
