import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Footer from './components/footer.component';
import ButtonSec from './components/button.component';

function App() {
  return (
    <div>
      {/* body */}
      <ButtonSec/>
      {/* footer */}
      <Footer/>
    </div>
  );
}

export default App;
