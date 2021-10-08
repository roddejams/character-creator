import React from 'react';

import CharacterEditor from './components/CharacterEditor';
import Footer from './components/Footer';
import PerspectiveBar from './components/PerspectiveBar';

function App() {
  return (
    <>
      <PerspectiveBar />
      <CharacterEditor />
      <Footer />
    </>
  );
}

export default App;
