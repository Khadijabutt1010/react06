import React from 'react';

const DetailsSection = () => {
  return (
    <div>
      <div>
        <label>Male </label><input type="radio" name="gender" />
        <label> Female </label><input type="radio" name="gender" />
        <label> Other </label><input type="radio" name="gender" />
      </div>
      <div>
        <label>Email: </label>
        <input type="email" placeholder="your email" style={{ marginRight: '10px' }} />
        <label>Password: </label>
        <input type="password" placeholder="your password" />
      </div>
      <div >
        <label>Birthday: </label>
        <select><option>Month</option></select>
        <select><option>Day</option></select>
        <select><option>Year</option></select>
      </div>
    </div>
  );
};

export default DetailsSection;