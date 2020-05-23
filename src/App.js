import React from 'react';
import style from './App.module.css';
import Header from './components/Header/Header';
import {Route} from 'react-router-dom';
import Favorite from './components/Favorite/Favorite';
import About from './components/About/About';
import FilmsContainer from './components/Films/FilmsContainer';
import CompaniesContainer from './components/Companies/CompaniesContainer';

class App extends React.Component { 

  render(){
    return(
      <div className={style.appWrapper}>
          <Header />
          <div className={style.appWrapperContent}>
              <Route path="/films" render={() => <FilmsContainer />} />
              <Route path="/favorite" render={() => <Favorite />} />
              <Route path="/companies" render={() => <CompaniesContainer />} />
              <Route path="/about" render={() => <About />} />
          </div>
      </div>
    )
  } 
}

export default App;
