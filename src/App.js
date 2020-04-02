import React from 'react'
import Contact from './components/Contact'

function App() {
  return (
    <div className="App">
      <Contact 
      name = 'Jean-Claude Tabouret'
      avatar = 'https://randomuser.me/api/portraits/men/85.jpg'
      online 
      /><Contact 
      name = 'Jean-Michel Chaise'
      avatar = 'https://randomuser.me/api/portraits/men/64.jpg'
      offline 
      /><Contact 
      name = 'Jean-Bernard Canapé'
      avatar = 'https://randomuser.me/api/portraits/men/63.jpg'
      online 
      />
    </div>
  );
}

export default App;
