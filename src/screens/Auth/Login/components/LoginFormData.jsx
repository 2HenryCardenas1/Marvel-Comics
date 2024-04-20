import * as Yup from 'yup';

export function initialValues() {
  return {
    username: '',
    password: '',
  };
}

export function validationSchema() {
  return Yup.object({
    username: Yup.string().min(3).max(15).required('Required'),
    password: Yup.string().min(3).required('Required'),
  });
}
