import {useNavigation} from '@react-navigation/native';
import {Button, Text} from '@rneui/themed';
import {useFormik} from 'formik';
import React from 'react';
import {Image, View} from 'react-native';
import styles from './styles';

import {Divider, Input} from '@rneui/themed';
import {ScrollView} from 'react-native';
import {initialValues, validationSchema} from './components/LoginFormData';
const LoginScreen = () => {
  const navigation = useNavigation();

  const formik = useFormik({
    initialValues: initialValues(),
    onSubmit: values => console.log(values),
    validationSchema: validationSchema(),
  });

  return (
    <ScrollView style={styles.container}>
      <View style={styles.containerImage}>
        <Image
          source={require('../../../assets/homeImages/Marvel_Logo.png')}
          style={styles.image}
        />
      </View>

      <View
        style={{
          marginHorizontal: 25,
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
              style={{width: '70%'}}
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
              Password
            </Text>
            <Divider
              color="white"
              width={1}
              style={{width: '70%'}}
              insetType="left"
              orientation="horizontal"
            />
          </View>

          <Input
            placeholder="Password"
            onChangeText={formik.handleChange('password')}
            value={formik.values.password}
            error={formik.errors.password}
            touched={formik.touched.password}
            inputStyle={{color: 'black'}}
            labelStyle={{color: 'white', fontWeight: 'bold', fontSize: 20}}
            inputContainerStyle={styles.inputContainerStyle}
            secureTextEntry={true}
          />
        </View>

        <View
          style={{
            marginHorizontal: 10,
          }}>
          <Button
            title={'Login to your account'}
            onPress={formik.handleSubmit}
            containerStyle={styles.containerButtom(formik.isValid)}
            buttonStyle={styles.button(formik.isValid)}
            titleStyle={styles.textButton(formik.isValid)}
          />

          <Text
            style={{
              color: 'white',
              marginTop: 10,
            }}>
            You don´t have account?{' '}
            <Text
              style={{
                color: 'white',
                fontWeight: 'bold',
                fontSize: 16,
                textDecorationLine: 'underline',
              }}
              onPress={() => navigation.navigate('Register')}>
              Register
            </Text>
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default LoginScreen;
