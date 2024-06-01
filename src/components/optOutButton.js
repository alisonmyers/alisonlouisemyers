import React from 'react';
import { optOutAnalytics } from '../utils/optOutAnalytics';

const OptOutButton = () => {
  return (
    <button onClick={optOutAnalytics}>
      Opt Out of Google Analytics
    </button>
  );
};

export default OptOutButton;