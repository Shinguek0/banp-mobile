// CustomInput.js
import { TextInput, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export const CustomInput = ({ value, onChangeText, placeholder, secureTextEntry, icon, iconSize = 20, iconColor = '#000'}) => {
  return (
    <View style={[styles.container]}>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={'#8D8D9B'}
        secureTextEntry={secureTextEntry}        
        style={styles.input}
      />
      {icon && (
        <Icon
          name={icon}
          size={iconSize}
          color={iconColor}
          style={styles.icon}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: 2,
  },
  input: {
    flex: 1,
    height: 48,
    backgroundColor: '#282828',
    color: 'white',
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  icon: {
    position: 'absolute',    
    right: 10,
    top: 8,
  },
});

export default CustomInput;
