import * as Yup from 'yup';

export function initialValues() {
  return {
    name: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  };
}

export function validationSchema() {
  return Yup.object({
    name: Yup.string().min(3).max(30).required('Required'),
    lastName: Yup.string().min(3).max(30).required('Required'),
    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string().min(3).required('Required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Required'),
  });
}
