import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { ScrollView } from 'native-base';


const TableRow = ({ item, navigation, index , getBy}) => {
  console.log(item.status);
  return (
    <View style={styles.rowContainer}>
          <View style={styles.rowDataWrapper}>
          <Text style={styles.rowData}>{index + 1}</Text>
          </View>
        <View style={styles.rowDataWrapper}>
          <Text style={styles.rowData}>{item.name}</Text>
        </View>
        <View style={styles.rowDataWrapper}>
          <Text style={styles.rowData}>{item.posision ?  item.posision : '-'}</Text>
        </View>
        <View style={styles.rowDataWrapper}>
          <Text style={styles.rowData}>{item.status ?  item.status : '-'}</Text>
        </View>
        <View style={styles.rowDataWrapper}>
        <TouchableOpacity style={styles.buttonContainer} onPress={()=>getBy(item.id, navigation)}>
            <Text style={styles.buttonText} >Detail</Text>
        </TouchableOpacity>
        </View>
    </View>
  );
};

const TableUser = ({ data, navigation, getBy }) => {
  const onPress = () => {
    Alert.alert('Button pressed');
  };

  return (
    <View style={styles.tableContainer}>
    <View style={styles.headerContainer}>
      <View style={styles.headerDataWrapper}>
        <Text style={styles.headerData}>No</Text>
      </View>
      <View style={styles.headerDataWrapper}>
        <Text style={styles.headerData}>NAME</Text>
      </View>
      <View style={styles.headerDataWrapper}>
        <Text style={styles.headerData}>POSITION</Text>
      </View>
      <View style={styles.headerDataWrapper}>
        <Text style={styles.headerData}>STATUS</Text>
      </View>
      <View style={styles.headerDataWrapper}>
        <Text style={styles.headerData}>ACTION</Text>
      </View>
    </View>
    <ScrollView  h="80%">
    {data && data.map((item, index) => (
      <TableRow getBy={getBy} navigation={navigation} key={index} item={item} index={index} onPress={onPress} />
    ))}
    </ScrollView>
  </View>
  );
};

const styles = StyleSheet.create({
  tableContainer: {
    backgroundColor: '#fff',
    padding: 10,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#e0e0e0',
  },
  headerDataWrapper: {
    // borderWidth: 1,
    borderColor: '#000',
    width: '20%',
  },
  headerData: {
    fontWeight: 'bold',
    textAlign : 'center',
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent : 'flex-start',
    backgroundColor: '#f0f0f0',
    padding: 10,
    textAlign : 'start',
    marginVertical: 3,
  },
  rowDataContainer: {
    flex: 1,
  },
  rowData: {
    fontSize: 12,
    // borderWidth : 1,
    // backgroundColor : 'blue',
    textAlign : 'center',
  },
  rowDataWrapper : {
    // borderWidth: 1,
    //  backgroundColor: '#000',
    flexDirection : 'row',
    justifyContent : 'center',
    width: '20%',
  },
  buttonContainer: {
    // padding: 10,
  },
  buttonText: {
    color: '#5D3891',
    fontWeight: 'bold',
  },
});

export default TableUser;
