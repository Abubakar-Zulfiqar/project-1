import React from "react";

function StepFive({ onPrev, onNext, onFormDataChange, currentStep }) {
  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      completedJobSent: event.target.completedJobSent.checked,
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
          aria-valuenow="50"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          <div className="progress-bar" style={{ width: "50%" }}>
            50%
          </div>
        </div>
        <div className="form-group">
          <label>
            <input
              type="checkbox"
              id="completedJobSent"
              name="completedJobSent"
              className="mt-3 mb-3"
            />{" "}
            Completed Job Sent to Client
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

export default StepFive;
