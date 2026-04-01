import React from 'react';

const NameSection = () => {
  return (
    <div >
      <label>First Name: </label>
      <input type="text" placeholder="John" style={{ marginRight: '10px' }} />
      <label>Last Name: </label>
      <input type="text" placeholder="Smith" />
    </div>
  );
};

export default NameSection;