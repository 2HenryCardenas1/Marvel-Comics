const {StyleSheet, Dimensions} = require('react-native');

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
});
export default styles;
