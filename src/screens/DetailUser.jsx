/* eslint-disable react-native/no-inline-styles */
import { Container, Box, Text, Button } from 'native-base';
import { connect } from 'react-redux';
import {StyleSheet} from 'react-native';
import { changeStatus, getAll, getBy, deleteBy } from '../redux/actions/user';
import DetailUserComponent from '../components/DetailUserComponent';
import { useEffect } from 'react';



const DetailUser = ({route, navigation,  user,isInternal, changeStatus,getBy, getAll, deleteBy}) =>{
    return (
        <Container >
            <Box>
                <DetailUserComponent name={'ktp'} value={user ? user.ktp : '-'}/>
                <DetailUserComponent name={'name'} value={user ? user.name : '-'}/>
                <DetailUserComponent name={'position'} value={user ? user.posision : '-'}/>
                <DetailUserComponent name={'religion'} value={user ? user.religion : '-'}/>

                <DetailUserComponent name={'status'} value={user ? user.status : '-'}/>
                {isInternal === 'admin' && (
                user &&
                (
                user.roles[0].name === 'user' ?
                <Box style={styles.rowContainer}>
                <Button style={{
                    width : 100,
                }} colorScheme="primary">
                    <Text color="white" onPress={()=>changeStatus(user, getBy,navigation, getAll)}>{user && user.status}</Text>
                </Button>
                <Button onPress={()=>deleteBy(user && user.id,navigation)} style={{
                    width : 100,
                }} colorScheme="secondary">
                    <Text color="white">Delete</Text>
                </Button>
                </Box>
                :
                null
                ))}
           </Box>
        </Container>
    );
};

const styles = StyleSheet.create({
      rowContainer: {
        marginTop : 20,
        flexDirection: 'row',
        justifyContent : 'space-between',
        backgroundColor: '#f0f0f0',
        padding: 10,
        textAlign : 'start',
        marginVertical: 3,
      },
      buttonEdit : {

      },
});

const mapStateToProps = (state) => {
    return {
        user : state.user ? state.user.detailUser : [],
        isInternal: state.auth.role,
    };
};
export default connect(mapStateToProps,{changeStatus, getBy, getAll, deleteBy})(DetailUser);
