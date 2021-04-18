import React, { useEffect } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home';

const App = () => {
  useEffect(() => {
    console.log(import.meta.env.SNOWPACK_PUBLIC_DB);
  }, []);

  return (
    <BrowserRouter>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={() => <div>About Page</div>} />
    </BrowserRouter>
  );
};

export default App;
