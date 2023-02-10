import React, {useState} from 'react';
import { connect } from 'react-redux';
import {Center, Box, Heading, VStack, FormControl, Input,Button , HStack, Text, Link} from 'native-base';
import { editData, getBy } from '../redux/actions/user';
import { ScrollView } from 'react-native';

const EditScreen = ({navigation, users, editData, getBy }) => {
  const user = users && users;
    const [form, setForm] = useState({
        id : user.id,
        name : user.name,
        email : user.email,
        ktp : user.ktp,
        religion : user.religion,
        noTelp : user.noTelp,
        posision : user.posision,
    });
    const onChange = (name, value) =>{
        setForm({
            ...form,
            [name] : value,
        });
    };
    return (
      <ScrollView>
    <Center w="100%">
        <Box safeArea p="2" w="90%" maxW="290" py="20%">
          <Heading size="lg" color="coolGray.800" _dark={{
          color: 'warmGray.50',
        }} fontWeight="semibold">
            Edit
          </Heading>
          <VStack space={3} mt="5">
          <FormControl>
              <FormControl.Label>KTP</FormControl.Label>
              <Input type="text" placeholder="insert  ktp number" value={form.ktp}  onChangeText={(value)=>onChange('ktp', value)}/>
            </FormControl>
            <FormControl>
              <FormControl.Label>Name</FormControl.Label>
              <Input type="text" placeholder="inser  name" value={form.name}  onChangeText={(value)=>onChange('name', value)}/>
            </FormControl>
            <FormControl>
              <FormControl.Label>email</FormControl.Label>
              <Input value={form.email}  isDisabled type="email"/>
            </FormControl>
            <FormControl>
              <FormControl.Label>Position</FormControl.Label>
              <Input type="text" value={form.posision} placeholder="insert  position" onChangeText={(value)=>onChange('posision', value)} />
            </FormControl>
            <FormControl>
              <FormControl.Label>Religion</FormControl.Label>
              <Input type="text" value={form.religion} placeholder="insert  religion" onChangeText={(value)=>onChange('religion', value)} />
            </FormControl>

            <FormControl>
              <FormControl.Label>Phone</FormControl.Label>
              <Input type="text" value={form.noTelp} placeholder={'insert  phone number'} onChangeText={(value)=>onChange('noTelp', value)} />
            </FormControl>
            <Button mt="2" colorScheme="indigo" onPress={()=>editData(form, navigation, getBy)}>
              Submit
            </Button>
          </VStack>
        </Box>
      </Center>
      </ScrollView>
      );
  };
const mapStateToProps = (state, ownProps) => {
  return {
    users: state.user.detailUser,
  };
};

  export default connect(mapStateToProps,{editData,getBy})(EditScreen);
