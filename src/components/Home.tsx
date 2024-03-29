// import React, { Component } from 'react';
 
// import { StyleSheet, Platform, View, Text } from 'react-native';


// export default class Home extends Component{
//       render() {
//         return (
//             <View style={styles.container}>
//                   <Text> Hola</Text>
//             </View>
//         );
//       }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

// ----------------------------------------------

// --------------------------------------------------------------------- Building
import React, { Component } from 'react';
import { Container, Item, Input, Header, 
    Title, Content, Footer, FooterTab, 
    Left, Right, Body, Icon, CardItem, Toast, 
    Spinner, H1, H2, H3, Drawer, Grid, Col, Row , Text, Separator, Button} from 'native-base';
import * as Font from 'expo-font';
import Constants from 'expo-constants';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Platform, View, SafeAreaView } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HeaderApp from './HeaderApp';
import ProductoForm from './Productos/Producto-Form';
import VentasList from './Ventas/Ventas-List';
import ClientesList from './Clientes/Clientes-List';
import TiendaPerfil from './Tienda/Tienda-Perfil';
import ProductosList from './Productos/Productos-List';


interface Props {
  navigation: any
}

class Home extends React.Component <Props>{
  render() {
    return (
      
      <SafeAreaView style={styles.container}>
       
            <Separator />
            <View >
            <Grid>
              <Row>
              <Col style={{ backgroundColor: '#635DB7', height: 200 }}>
              {/* <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details')}
        /> */}
                  <Button full  primary  style={{height:"100%" }}  onPress={() => this.props.navigation.navigate('ProductosList')}>
                    <Icon name='cube'/>
                    <Text >Productos</Text> 
                  
                  </Button></Col>
                <Col style={{ backgroundColor: '#635DB7', height: 200 }}>
                  <Button full  success style={{height:"100%"  }} onPress={() => this.props.navigation.navigate('VentasList')}>
                    <Icon name='cart'/>
                    <Text>Ventas</Text>  
                  </Button></Col>
                  </Row>
                  <Row><Col style={{ backgroundColor: '#635DB7', height: 200 }}>
                  <Button  full  warning style={{height:"100%" }} onPress={() => this.props.navigation.navigate('ClientesList')}>
                    <Icon name='person'/>
                    <Text>Clientes</Text> 
                  </Button></Col>
                  <Col style={{ backgroundColor: '#635DB7', height: 200 }}>
                  <Button  full  light style={{height:"100%" }} onPress={() => this.props.navigation.navigate('TiendaPerfil')}>
                    <Icon name='cog' />
                    <Text>Tienda</Text>  
                  </Button>
                  </Col></Row>
              </Grid>
              </View>
              <Separator />
              </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    // alignItems: 'center',
    justifyContent: 'center',
    // height: "100%",
    //  marginVertical: 16,
     marginHorizontal: 16,
    marginTop: "10%",
    // paddingHorizontal: 10
     
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
 
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  
});


class DetailsScreen extends React.Component <Props>{
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Button
          onPress={() => this.props.navigation.navigate('Details')}
          // onPress={() => this.props.navigation.push('Details')}
        >
           <Text>Details</Text>  
        </Button>
        <Button
        onPress={() => this.props.navigation.navigate('Home')}
          // onPress={() => this.props.navigation.navigate('Home')}
        >
           <Text>Home</Text>  
        </Button>
        <Button
        onPress={() => this.props.navigation.navigate()}
          // onPress={() => this.props.navigation.goBack()}
        >
           <Text>sfsf</Text>  
        </Button>

        {/* <Button
          title="Go to Details... again"
          onPress={() => this.props.navigation.push('Details')}
        />
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        /> */}
      </View>
    );
  }
}

const RootStack = createStackNavigator(
  {
    Home: Home,
    Dell: DetailsScreen,
    ProductosList: ProductosList,
    VentasList: VentasList,
    ClientesList: ClientesList,
    TiendaPerfil: TiendaPerfil,
  },
  {
    initialRouteName: 'Home',
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}