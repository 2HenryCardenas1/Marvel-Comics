import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: 320,
    justifyContent: 'space-between',
    marginHorizontal: 30,
    backgroundColor: '#D9D9D9',
    borderRadius: 5,
  },

  imageContainer: {
    height: 200,
    width: '100%',
    justifyContent: 'center',

    alignItems: 'center',
  },
  image: {
    height: 200,
    width: 200,
    resizeMode: 'contain',
    zIndex: 1,
  },

  imageBackground: {
    height: 200,
    width: '100%',
    position: 'absolute',
    top: 0,
    opacity: 0.5,
  },
  bottomContainer: {
    width: 120,
    borderRadius: 10,
  },
  titleContainer: {
    padding: 10,
    justifyContent: 'center',
    alignContent: 'center',
    marginHorizontal: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#000',
  },
});

export {styles};
