import React from 'react';
import { lazy } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';



const Cast = lazy(() => import('../components/Cast/Cast'));

const App = () => {
  return (  
    <Routes>
<Route path='cast' element={<Cast/>}/>

    </Routes>
  );
}
 
export default App;
