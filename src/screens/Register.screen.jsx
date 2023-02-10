import React, {useState} from 'react';
import { connect } from 'react-redux';
import {Center, Box, Heading, VStack, FormControl, Input,Button , HStack, Text, Link} from 'native-base';
import { authRegister } from '../redux/actions/auth';

const RegisterScreen = ({navigation, authRegister }) => {
    const [form, setForm] = useState({
        name : null,
        email : null,
        password : null,
    });
    const onChange = (name, value) =>{
        setForm({
            ...form,
            [name] : value,
        });
    };
    return (
    <Center w="100%">
        <Box safeArea p="2" w="90%" maxW="290" py="50%">
          <Heading size="lg" color="coolGray.800" _dark={{
          color: 'warmGray.50',
        }} fontWeight="semibold">
            Go Live
          </Heading>
          <Heading mt="1" color="coolGray.600" _dark={{
          color: 'warmGray.200',
        }} fontWeight="medium" size="xs">
            Sign up to continue!
          </Heading>
          <VStack space={3} mt="5">
            <FormControl>
              <FormControl.Label>Name</FormControl.Label>
              <Input type="text"  onChangeText={(value)=>onChange('name', value)}/>
            </FormControl>
            <FormControl>
              <FormControl.Label>email</FormControl.Label>
              <Input type="email"onChangeText={(value)=>onChange('email', value)} />
            </FormControl>
            <FormControl>
              <FormControl.Label>password</FormControl.Label>
              <Input type="password" onChangeText={(value)=>onChange('password', value)} />
            </FormControl>
            <Button mt="2" colorScheme="indigo" onPress={()=>authRegister(form, navigation)}>
              Sign up
            </Button>
            <HStack mt="6" justifyContent="center">
            <Text fontSize="sm" color="coolGray.600" _dark={{
            color: 'warmGray.200',
          }}>
               Your have account.{' '}
            </Text>
            <Link _text={{
            color: 'indigo.500',
            fontWeight: 'medium',
            fontSize: 'sm',
          }}
          onPress={()=>navigation.navigate('LoginScreen')}
          >
              Sign In
            </Link>
          </HStack>
          </VStack>
        </Box>
      </Center>
      );
  };


  export default connect(null,{authRegister})(RegisterScreen);
