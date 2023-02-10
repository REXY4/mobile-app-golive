import {Box, Text} from 'native-base';
import { connect } from 'react-redux';

const UserHome = ({role}) =>{
    console.log(role);
    return (
        <Box>
            <Text>
                Hallo User
            </Text>
        </Box>
    );
};
const mapStateToProps = (state, ownProps) => {
    return {
        role: state.auth.role,
    };
};
export default connect(mapStateToProps)(UserHome);
