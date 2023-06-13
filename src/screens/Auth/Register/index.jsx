import {useFormik} from 'formik';
import React, {useState} from 'react';
import {Alert, Dimensions, ScrollView, View} from 'react-native';
import LogoImage from '../../../components/Logo';

import {useNavigation} from '@react-navigation/native';
import {Button, Divider, Input, Text} from '@rneui/themed';
import {Auth} from 'aws-amplify';
import {initialValues, validationSchema} from './components/RegisterFormData';
import styles from './styles';

const {width} = Dimensions.get('screen');

const RegisterScreen = () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: initialValues(),
    onSubmit: async values => {
      const {name, lastName, email, username, password} = values;
      if (loading) {
        return;
      }
      setLoading(true);
      try {
        const response = await Auth.signUp({
          username,
          password,
          attributes: {
            email,
            name,
            family_name: lastName,
            preferred_username: username,
          },
        });
        navigation.navigate('ConfirmCode', {username});
      } catch (error) {
        Alert.alert('Error', error.message);
      }
      setLoading(false);
    },
    validationSchema: validationSchema(),
  });

  return (
    <ScrollView style={styles.container}>
      <LogoImage />
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
              justifyContent: 'space-between',
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
              First Name
            </Text>
            <Divider
              color="white"
              width={1}
              style={{width: width * 0.7 - 55}}
              insetType="left"
              orientation="horizontal"
            />
          </View>

          <Input
            placeholder="First Name"
            onChangeText={formik.handleChange('name')}
            value={formik.values.name}
            error={formik.errors.name}
            errorMessage={formik.errors.name}
            errorStyle={{color: 'white'}}
            touched={formik.touched.name}
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
              justifyContent: 'space-between',
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
              Last Name
            </Text>
            <Divider
              color="white"
              width={1}
              style={{width: width * 0.7 - 55}}
              insetType="left"
              orientation="horizontal"
            />
          </View>

          <Input
            placeholder="Last Name"
            onChangeText={formik.handleChange('lastName')}
            value={formik.values.lastName}
            error={formik.errors.lastName}
            errorMessage={formik.errors.lastName}
            errorStyle={{color: 'white'}}
            touched={formik.touched.lastName}
            inputStyle={{color: 'black'}}
            labelStyle={{color: 'white', fontWeight: 'bold', fontSize: 20}}
            inputContainerStyle={styles.inputContainerStyle}
          />
        </View>

        <View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
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
              Email
            </Text>
            <Divider
              color="white"
              width={1}
              style={{width: width * 0.8 - 55}}
              insetType="left"
              orientation="horizontal"
            />
          </View>

          <Input
            placeholder="Email"
            onChangeText={formik.handleChange('email')}
            value={formik.values.email}
            error={formik.errors.email}
            errorMessage={formik.errors.email}
            errorStyle={{color: 'white'}}
            touched={formik.touched.email}
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
              justifyContent: 'space-between',
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
              style={{width: width * 0.7 - 55}}
              insetType="left"
              orientation="horizontal"
            />
          </View>

          <Input
            placeholder="Username"
            onChangeText={formik.handleChange('username')}
            value={formik.values.username}
            error={formik.errors.username}
            errorMessage={formik.errors.username}
            errorStyle={{color: 'white'}}
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
              justifyContent: 'space-between',
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
              style={{width: width * 0.7 - 50}}
              insetType="left"
              orientation="horizontal"
            />
          </View>

          <Input
            placeholder="Password"
            onChangeText={formik.handleChange('password')}
            value={formik.values.password}
            error={formik.errors.password}
            errorStyle={{color: 'white'}}
            errorMessage={formik.errors.password}
            touched={formik.touched.password}
            inputStyle={{color: 'black'}}
            labelStyle={{color: 'white', fontWeight: 'bold', fontSize: 20}}
            inputContainerStyle={styles.inputContainerStyle}
            secureTextEntry={true}
          />
        </View>

        <View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
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
              Confirm password
            </Text>
            <Divider
              color="white"
              width={1}
              style={{width: width * 0.5 - 26}}
              insetType="left"
              orientation="horizontal"
            />
          </View>

          <Input
            placeholder="Confirm password"
            onChangeText={formik.handleChange('confirmPassword')}
            value={formik.values.confirmPassword}
            error={formik.errors.confirmPassword}
            errorStyle={{color: 'white'}}
            errorMessage={formik.errors.confirmPassword}
            touched={formik.touched.confirmPassword}
            inputStyle={{color: 'black'}}
            labelStyle={{color: 'white', fontWeight: 'bold', fontSize: 20}}
            inputContainerStyle={styles.inputContainerStyle}
            secureTextEntry={true}
          />
        </View>

        <View
          style={{
            marginHorizontal: 10,
            marginBottom: 50,
            alignItems: 'center',
          }}>
          <Button
            title={loading ? 'Loading...' : 'Create account'}
            onPress={formik.handleSubmit}
            containerStyle={styles.containerBottom(formik.isValid)}
            buttonStyle={styles.button(formik.isValid)}
            titleStyle={styles.textButton(formik.isValid)}
          />

          <Text
            style={{
              color: 'white',
              marginTop: 10,
            }}>
            You have account?{' '}
            <Text
              style={{
                color: 'white',
                fontWeight: 'bold',
                fontSize: 16,
                textDecorationLine: 'underline',
              }}
              onPress={() => navigation.navigate('Login')}>
              Login
            </Text>
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default RegisterScreen;
