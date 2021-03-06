import React from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap'
import NavBar from './components/navbar'
import FirstPage from './components/firstpage'
import SecondPage from './components/secondpage'
import ThirdPage from './components/thirdpage'


function App() {
  return (
    <Container fluid='true' className='main-app' onScroll={() => console.log('je scroll')}> 
      <NavBar />
      <FirstPage />
      <SecondPage id='section1' />
      <ThirdPage />
    </Container>
  );
}

export default App;
