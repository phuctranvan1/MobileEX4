import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const SignInScreen = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSignIn = () => {
    if (isValidPhoneNumber(phoneNumber)) {
      navigation.navigate('Home');
    } else {
      alert('Số điện thoại không hợp lệ');
    }
  };

  const isValidPhoneNumber = (number) => {
    // Đây là một validtion đơn giản, bạn có thể thay đổi theo yêu cầu cụ thể
    const phoneRegex = /^[0-9]{10}$/;
    return phoneRegex.test(number);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nhập số điện thoại"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        keyboardType="phone-pad"
      />
      <Button title="Đăng nhập" onPress={handleSignIn} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
});

export default SignInScreen;