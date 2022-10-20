import {createNativeStackNavigator} from '@react-navigation/native-stack'

import Login from './pages/Login';
import Home from './pages/Home';
import Order from './pages/Order';

const Stack = createNativeStackNavigator();

function Routes() {
 return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login}/>
      <Stack.Screen name="Home" component={Home}/>
      <Stack.Screen name="Order" component={Order}/>
    </Stack.Navigator>
  );
}


export default Routes;