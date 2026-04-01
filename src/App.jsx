import React from 'react';
import RegistrationHeader from './components/RegistrationHeader';
import NameSection from './components/NameSection';
import DetailsSection from './components/DetailsSection';
import SubmitSection from './components/SubmitSection';

function App() {
  return (
    <div>
      <RegistrationHeader />
      <NameSection />
      <DetailsSection />
      <SubmitSection />
    </div>
  );
}

export default App;