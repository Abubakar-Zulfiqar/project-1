import React from "react";

function StepOne({ onNext, onFormDataChange, currentStep }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      engagementLetterSigned: event.target.engagementLetterSigned.checked,
    };

    onFormDataChange(data);
    onNext();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div
          className="progress"
          role="progressbar"
          aria-label="Basic example"
          aria-valuenow="10"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          <div className="progress-bar" style={{ width: "10%" }}>
            10%
          </div>
        </div>
        <div className="form-group">
          <label>
            <input
              type="checkbox"
              id="engagementLetterSigned"
              name="engagementLetterSigned"
              className="mt-3 mb-3"
            />{" "}
            I agree to the engagement letter
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Next
        </button>
      </form>
    </>
  );
}

export default StepOne;
