import React,{ useEffect } from 'react';
import {Center,Box, Text} from 'native-base';
import TableUser from '../components/tableUser';
import {connect} from 'react-redux';
import { getAll, getBy } from '../redux/actions/user';

const AdminHome = ({navigation, getAll, dataUser, getBy}) =>{
    useEffect(()=>{
        getAll();
    },[]);
    return (<>
        <Center w="100%">
                <Text bold>Table User</Text>
            <Box safeArea p="2"   w="100%">
                <TableUser getBy={getBy} navigation={navigation} data={dataUser}/>
            </Box>
        </Center>
        </>
    );
};
const mapStateToProps = (state, ownProps) => {
    return {
        dataUser : state.user.dataUser,
    };
};
export default connect(mapStateToProps,{getAll, getBy})(AdminHome);
