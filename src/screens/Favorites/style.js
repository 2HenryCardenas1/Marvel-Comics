import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ED1D24',
    padding: 10,
    borderRadius: 10,
    marginHorizontal: 25,
    marginTop: 50,
  },

  text: {
    color: '#fff',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 20,
    fontWeight: '400',
  },
  bottomContainer: {
    width: 120,
    borderRadius: 10,
    marginTop: 20,
  },

  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },

  imageContainer: {
    top: -50,
    position: 'absolute',
    alignSelf: 'flex-start',
    right: 0,
    transform: [{rotate: '20deg'}],
  },
});

export {styles};
