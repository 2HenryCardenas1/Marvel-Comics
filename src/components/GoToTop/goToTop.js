import {Icon} from '@rneui/themed';
import {View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
export const goToTop = ref => {
  return (
    <View style={{position: 'absolute', bottom: 20, right: 20}}>
      <TouchableOpacity
        onPress={() => ref.current.scrollToOffset({animated: true, offset: 0})}>
        <Icon
          type="material-community"
          name="arrow-up-circle"
          size={30}
          color="#ED1D24"
        />
      </TouchableOpacity>
    </View>
  );
};
