import {Box, Text} from 'native-base';
import {StyleSheet} from 'react-native';

const DetailUserComponent = ({name, value} ) =>{
    console.log('name', name);
    return (
        <Box  style={styles.rowContainer} >
        <Box style={styles.rowDataWrapper} >
            <Text>{name} :</Text>
        </Box>
        <Box style={styles.rowDataWrapper} >
            <Text>{value}</Text>
        </Box>
        </Box>
    );
};

export default DetailUserComponent;


const styles = StyleSheet.create({
    rowContainer: {
      flexDirection: 'row',
      // justifyContent : 'space-between',
      backgroundColor: '#f0f0f0',
      padding: 3,
      textAlign : 'start',
      marginLeft :10,
      marginTop : 10,
    },
    rowDataContainer: {
      flex: 1,
    },
    rowData: {
      fontSize: 12,
      // borderWidth : 1,
      // backgroundColor : 'blue',
    },
    rowDataWrapper : {
      // borderWidth: 1,
      //  backgroundColor: '#000',
      flexDirection : 'row',
      width: '50%',
    },
});
