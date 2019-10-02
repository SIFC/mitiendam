
import React, { Component, constructor } from 'react';
import Home from './src/components/Home'
import HeaderApp from './src/components/HeaderApp'
import FooterApp from './src/components/FooterApp'
import { Container } from 'native-base';
import { Constants } from 'expo';


 export default class App extends Component {
  static navigationOptions = {
    title : "Home"
  }
  
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Container>
        <HeaderApp></HeaderApp>
        {/* ------------------Home --------------------------*/}
        <Home></Home>
          {/* -----------------------------------------------*/}
        <FooterApp></FooterApp>
      </Container>
    );
}
 
}





