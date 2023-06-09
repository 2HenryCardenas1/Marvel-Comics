import {Dimensions, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  containerImage: {
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    marginHorizontal: 25,
    marginBottom: 10,
    borderWidth: 0.1,
    marginVertical: 15,
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: Dimensions.get('window').width - 60,
    height: 200,
    resizeMode: 'contain',
  },
});

export default styles;
