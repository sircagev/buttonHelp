// LoginScreen.js

import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Image } from 'react-native';

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Aquí puedes implementar la lógica de inicio de sesión
    console.log('Login button pressed!');
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <View style={styles.container}>
        <Image
            source={require('')}
        />
      <TextInput
        style={styles.input}
        placeholder="Username"
        onChangeText={(text) => setUsername(text)}
        value={username}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
        value={password}
      />
      <Button color='#841584' title="Login" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  input: {
    height: 45,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 16,
    paddingLeft: 8,
    width: '85%',
  },
  button: {
    color: '#841584',
  }
});

export default LoginScreen;
