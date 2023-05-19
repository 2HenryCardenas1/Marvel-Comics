import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: 400,
    width: 200,

    backgroundColor: '#fff',
    borderBottomEndRadius: 5,
    borderBottomStartRadius: 5,
    justifyContent: 'space-between',
  },

  imageContainer: {
    height: 200,
    width: 200,
  },
  image: {
    height: 250,
    width: 200,
    resizeMode: 'contain',
    position: 'relative',
    top: 0,
    zIndex: 1,
  },

  imageBackground: {
    height: 250,
    width: 200,
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
    marginTop: 30,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#000',
  },
  date: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    color: '#000',
    marginTop: 5,
  },
});

export {styles};
