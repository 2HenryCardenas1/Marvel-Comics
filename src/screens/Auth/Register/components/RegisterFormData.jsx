import * as Yup from 'yup';

export function initialValues() {
  return {
    name: '',
    lastName: '',
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
  };
}

export function initialCodeValues(username) {
  return {
    username: username,
    code: '',
  };
}

export function validationCodeSchema() {
  return Yup.object({
    username: Yup.string().min(3).max(30).required('Required'),
    code: Yup.string().min(6).max(8).required('Required'),
  });
}

export function validationSchema() {
  return Yup.object({
    name: Yup.string().min(3).max(30).required('Required'),
    lastName: Yup.string().min(3).max(30).required('Required'),
    email: Yup.string().email('Invalid email address').required('Required'),
    username: Yup.string().min(3).max(30).required('Required'),
    password: Yup.string().min(3).required('Required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Required'),
  });
}
