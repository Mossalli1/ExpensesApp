import * as React from 'react';
import {Button, View, TextInput, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {setExpensesValue} from '../redux/reducers/expenses';

const ExpencesLog = ({navigation}) => {
  const [expences, setExpences] = React.useState('');
  const dispatch = useDispatch();
  const saveOnRedux = async () => {
    // setExpences(amount);
    dispatch(setExpensesValue(expences));
  };

  const getFromRedux = useSelector(state => state.expenses);
  console.log('ExpencesLog', getFromRedux);

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Amount : {getFromRedux.value}</Text>
      <TextInput
        style={{backgroundColor: 'red', width: 200}}
        onChangeText={item => setExpences(item)}
      />
      <Button onPress={() => navigation.goBack()} title="Go back home" />
      <Button onPress={() => saveOnRedux()} title="Save" />
    </View>
  );
};

export default ExpencesLog;
