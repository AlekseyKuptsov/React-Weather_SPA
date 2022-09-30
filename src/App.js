import React from 'react';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Header from './components/header/Header';
import MainPage from './components/mainPage/MainPage';
import CitiesList from './components/citiesList/CitiesList';
import './App.css';
import Spinner from './components/spinner/Spinner';

const App = () => {

  return (
    <Router>
        <div className="App">
          <Header/>
          <Suspense fallback={<Spinner/>}>
            <Routes>
              <Route path='/' element={<MainPage/>}/>
              <Route path='/citylist' element={<CitiesList/>}/>       
            </Routes>
          </Suspense>
      </div>
    </Router>

  );
}

export default App;
