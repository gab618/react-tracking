import React from 'react';

// import { Container } from './styles';

function TrackingForm({ submitHandler }) {
  return (
    <>
      <form onSubmit={submitHandler}>
        <div className="form-group">
          <input type="text" name="tracking" className="form-control" />
        </div>
        <button type="submit" value="track" className="btn btn-primary">
          Track
        </button>
      </form>
    </>
  );
}

export default TrackingForm;
