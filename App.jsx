/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';

import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  ToastAndroid,
} from 'react-native';

const App = () => {
  const [contador, setContador] = useState(0);
  const muestraTexto = () => {
    let mensaje = '';
    if (contador < 10) {
      mensaje = `Contador: ${contador}`;
      console.log('Suma 1');
    } else {
      mensaje = 'Contador Lleno';
    }
    return mensaje;
  };
  return (
    <View style={estilos.contenedor}>
      <Text style={estilos.texto}>{muestraTexto()}</Text>
      <View style={estilos.contenedorBotones}>
        <View style={estilos.botones}>
          <Button
            title="Suma 1"
            onPress={() => {
              setContador(contador + 1);
              console.log('Sumando 1');
            }}
          />
        </View>
        <View style={estilos.botones}>
          <Button
            title="Resta 1"
            onPress={() => {
              if (contador > 0) {
                setContador(contador - 1);
                console.log('Resta 1');
              }
            }}
          />
        </View>
      </View>
    </View>
  );
};

const estilos = StyleSheet.create({
  texto: {
    alignItems: 'center',
    marginTop: 1,
    marginVertical: 10,
    marginBottom: 10,
    textAlignVertical: 'top',
    textAlign: 'center',
    fontSize: 30,
  },
  contenedor: {
    flex: 1,
    justifyContent: 'top',
    flexDirection: '',
  },
  contenedorBotones: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  botones: {
    margin: 10,
  },
});

export default App;
