// StepThree.js
import React from "react";

function StepThree({ onPrev, onNext, onFormDataChange, currentStep }) {
  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      accountantComments: event.target.accountantComments.value,
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
          aria-valuenow="30"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          <div className="progress-bar" style={{ width: "30%" }}>
            30%
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="accountantComments">Accountant Comments</label>
          <textarea
            className="form-control mt-3 mb-3"
            id="accountantComments"
            rows="3"
          ></textarea>
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

export default StepThree;
