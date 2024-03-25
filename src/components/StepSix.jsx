import React from "react";

function StepSix({ onPrev, onNext, onFormDataChange, currentStep }) {
  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      clientSigned: event.target.clientSigned.checked,
    };

    onFormDataChange(data);
    onNext();
  };

  const handleBack = () => {
    onPrev();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div
          className="progress"
          role="progressbar"
          aria-label="Basic example"
          aria-valuenow="60"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          <div className="progress-bar" style={{ width: "60%" }}>
            60%
          </div>
        </div>
        <div className="form-group">
          <label>
            <input
              type="checkbox"
              id="clientSigned"
              name="clientSigned"
              className="mt-3 mb-3"
            />{" "}
            I confirm my signature
          </label>
        </div>
        <div className="button-row">
          {currentStep > 1 && (
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleBack}
            >
              Back
            </button>
          )}
          <button type="submit" className="btn btn-primary">
            Next
          </button>
        </div>
      </form>
    </>
  );
}

export default StepSix;
