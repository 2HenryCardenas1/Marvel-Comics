import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 600,
    resizeMode: 'contain',
  },

  containerDetails: {
    marginHorizontal: 25,
    marginBottom: 40,
  },
  containerTitle: {
    marginHorizontal: 25,
    marginVertical: 10,
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  date: {
    color: '#5c5c5c',
    fontSize: 18,
    marginVertical: 10,
  },
});

export default styles;
