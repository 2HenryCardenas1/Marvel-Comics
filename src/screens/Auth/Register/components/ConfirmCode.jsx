import {useNavigation} from '@react-navigation/native';
import {Button, Divider, Input} from '@rneui/themed';
import {Auth} from 'aws-amplify';
import {useFormik} from 'formik';
import React, {useState} from 'react';
import {Alert, Dimensions, StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {initialCodeValues, validationCodeSchema} from './RegisterFormData';

const {width} = Dimensions.get('screen');
const ConfirmCode = props => {
  const {username} = props.route.params;

  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  const userName = username;

  const onConfirmPressed = async data => {
    try {
      const response = await Auth.confirmSignUp(data.username, data.code);
      if (response === 'SUCCESS') {
        navigation.navigate('Login');
      }
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };

  const onResendPressed = async data => {
    try {
      const response = await Auth.resendSignUp(userName);
      Alert.alert('Success', 'Code sent successfully');
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };

  const formik = useFormik({
    initialValues: initialCodeValues(username),
    onSubmit: async values => {
      if (loading) {
        return;
      }
      setLoading(true);
      onConfirmPressed(values);
      setLoading(false);
    },
    validationSchema: validationCodeSchema(),
  });

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          marginHorizontal: 25,
          marginTop: 20,
        }}>
        <View>
          <View
            style={{
              flexDirection: 'row',

              alignItems: 'center',
              marginHorizontal: 10,
            }}>
            <Divider
              color="white"
              width={1}
              style={{width: '5%'}}
              insetType="left"
              orientation="horizontal"
            />
            <Text
              style={{
                fontSize: 16,
                color: 'white',
                marginHorizontal: 5,
                fontWeight: 'bold',
              }}>
              Username
            </Text>
            <Divider
              color="white"
              width={1}
              style={{width: width * 0.7 - 50}}
              insetType="left"
              orientation="horizontal"
            />
          </View>

          <Input
            placeholder="Username"
            onChangeText={formik.handleChange('username')}
            value={formik.values.username}
            error={formik.errors.username}
            touched={formik.touched.username}
            inputStyle={{color: 'black'}}
            labelStyle={{color: 'white', fontWeight: 'bold', fontSize: 20}}
            inputContainerStyle={styles.inputContainerStyle}
            disabled={true}
          />
        </View>
        <View>
          <View
            style={{
              flexDirection: 'row',

              alignItems: 'center',
              marginHorizontal: 10,
            }}>
            <Divider
              color="white"
              width={1}
              style={{width: '5%'}}
              insetType="left"
              orientation="horizontal"
            />
            <Text
              style={{
                fontSize: 16,
                color: 'white',
                marginHorizontal: 5,
                fontWeight: 'bold',
              }}>
              Confirm Code
            </Text>
            <Divider
              color="white"
              width={1}
              style={{width: width * 0.7 - 80}}
              insetType="left"
              orientation="horizontal"
            />
          </View>

          <Input
            placeholder="Confirm Code"
            onChangeText={formik.handleChange('code')}
            value={formik.values.code}
            error={formik.errors.code}
            touched={formik.touched.code}
            inputStyle={{color: 'black'}}
            labelStyle={{color: 'white', fontWeight: 'bold', fontSize: 20}}
            inputContainerStyle={styles.inputContainerStyle}
          />
        </View>

        <View
          style={{
            marginHorizontal: 10,
          }}>
          <Button
            title={loading ? 'Loading...' : 'Confirm'}
            onPress={formik.handleSubmit}
            containerStyle={styles.containerButtom(formik.isValid)}
            buttonStyle={styles.button(formik.isValid)}
            titleStyle={styles.textButton(formik.isValid)}
          />

          <Button
            title={loading ? 'Loading...' : 'Resend code'}
            onPress={() => onResendPressed()}
            containerStyle={styles.contaienrButtomResend}
            buttonStyle={styles.buttomResend}
            titleStyle={styles.textButtonResend}
          />

          <Text
            style={{
              color: 'white',
              fontWeight: 'bold',
              fontSize: 16,
              textDecorationLine: 'underline',
              marginTop: 10,
            }}
            onPress={() => navigation.navigate('Register')}>
            Back to Sign in
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ED1D24',
    height: '100%',
  },
  inputContainerStyle: {
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: 'white',
    height: 50,
    marginTop: 10,
    paddingHorizontal: 10,
  },

  button: isValid => ({
    backgroundColor: isValid ? 'white' : 'transparent',
    borderRadius: 10,
    marginBottom: 1.5,
  }),

  textButton: isValid => ({
    color: isValid ? 'black' : 'white',

    fontSize: 17,
  }),

  containerButtom: isValid => ({
    borderColor: isValid ? 'transparent' : 'white',
    padding: 2,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: isValid ? 'white' : 'transparent',
  }),

  contaienrButtomResend: {
    backgroundColor: 'transparent',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 10,
    padding: 2,
  },

  buttomResend: {
    color: 'white',
    fontWeight: 'bold',
    backgroundColor: 'transparent',
  },

  textButtonResend: {
    color: 'white',
    fontSize: 17,
  },
});

export {ConfirmCode};
