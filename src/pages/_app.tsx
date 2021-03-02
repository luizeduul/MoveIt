import { useState } from 'react';
import { ChallengesProvider } from '../Contexts/ChallengesContext';
import '../styles/global.css';

function MyApp({ Component, pageProps }) {
  return (
    <ChallengesProvider>
      <Component {...pageProps} />
    </ChallengesProvider>
  );
}

export default MyApp;
