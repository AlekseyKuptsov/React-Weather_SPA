import React from 'react';
import {BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Layout from './components/layout/Layout';
import MainPage from './components/mainPage/MainPage';
import CitiesList from './components/citiesList/CitiesList';
import './App.css';
import Spinner from './components/spinner/Spinner';
import ErrorMessage from './components/errorMessage/ErrorMessage';

const App = () => {

  return (
    <Router>
        <div className="App">
          <Suspense fallback={<Spinner/>}>
            <Routes>
              <Route path='/' element={<Layout/>}>
                <Route index element={<MainPage/>}/>
                <Route path=':city' element={<MainPage/>}/>
                <Route path='citylist/:request' element={<CitiesList/>}/>   
                <Route path='*' element={<ErrorMessage/>}/>
              </Route>
            </Routes>
          </Suspense>
      </div>
    </Router>
  );
}

export default App;
