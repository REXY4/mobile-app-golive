/* eslint-disable react/no-unstable-nested-components */


// face-man-profile
import {createStackNavigator} from '@react-navigation/stack';
import {connect} from 'react-redux';
import LoginScreen from '../screens/login.screen';
import RegisterScreen from '../screens/Register.screen';
import AdminHome from '../screens/AdminHome';
import UserHome from '../screens/UserHome';
import DetailUser from '../screens/DetailUser';
import EditScreen from '../screens/EditScreen';
import { TouchableOpacity } from 'react-native';
import { Image, Text} from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { getByEdit} from '../redux/actions/user';
import { logout } from '../redux/actions/auth';



const Stack = createStackNavigator();


function Route({roles, isLogin, user,getByEdit, logout}) {
  let navigation = useNavigation();
if (isLogin){
    if (roles === 'admin'){
      return (
        <>
        <Stack.Navigator>
        <Stack.Screen name="Home" component={AdminHome} options={{
          title : 'Go Live',
          headerTitleAlign : 'center',
          headerTintColor : '#F5F5F5',
          headerStyle : {
            backgroundColor : '#5D3891',
          },
          headerLeft: () => (
            <TouchableOpacity
            onPress={()=>logout(navigation)}
            style={{ marginLeft : 20}}>
              <Text bold color="white">Log out</Text>
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity
            onPress={()=>getByEdit(user.id, navigation)}
            style={{ marginRight : 20}}>
              <Image source={require('../assets/profile.png')} width={35} height={35}/>
            </TouchableOpacity>
          ),
         }}/>
         <Stack.Screen name="DetailUser" component={DetailUser} options={{
          title : 'Detail User',
          headerTitleAlign : 'center',
         }}/>
          <Stack.Screen name="EditScreen" component={EditScreen} options={{
          title : 'Edit User',
          headerTitleAlign : 'center',
         }}/>
          {/* <Stack.Screen name="MainApp" component={MainApp} options={{ headerShown: false }}/> */}
        </Stack.Navigator>
      </>
      );
    }
    return (
      <Stack.Navigator>
      <Stack.Screen name="Home" component={UserHome} options={{
          title : 'Go Live',
          headerTitleAlign : 'center',
          headerTintColor : '#F5F5F5',
          headerStyle : {
            backgroundColor : '#5D3891',
          },
          headerLeft: () => (
            <TouchableOpacity
            onPress={()=>logout(navigation)}
            style={{ marginLeft : 20}}>
              <Text bold color="white">Log out</Text>
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity
            onPress={()=>getByEdit(user.id, navigation)}
            style={{ marginRight : 20}}>
              <Image source={require('../assets/profile.png')} width={35} height={35}/>
            </TouchableOpacity>
          ),
         }}/>
          <Stack.Screen name="DetailUser" component={DetailUser} options={{
          title : 'Detail User',
          headerTitleAlign : 'center',
         }}/>
          <Stack.Screen name="EditScreen" component={EditScreen} options={{
          title : 'Edit User',
          headerTitleAlign : 'center',
         }}/>
      </Stack.Navigator>
    );
}
  return (
    <Stack.Navigator>
      <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

const mapStateToProps = (state) => {
  return {
    roles: state.auth.role,
    isLogin : state.auth.isLogin,
    user : state.auth.users,
  };
};

export default connect(mapStateToProps,{getByEdit,logout})(Route);
