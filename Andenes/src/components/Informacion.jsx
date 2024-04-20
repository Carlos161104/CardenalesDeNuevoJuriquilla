import React, { useEffect, useState } from 'react'
import {
    View,
    StyleSheet,
    Text,
    TextInput,
    Pressable,
    TouchableOpacity, 
    Image
  } from 'react-native';

const Informacion = ({setIdentificado}) => {
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handlePressImage = () => {
    setIsPasswordVisible(true);
    setTimeout(() => {
      setIsPasswordVisible(false);
    }, 2000); // Cambia la visibilidad después de 2 segundos
  };
  
  return (
    <View style={styles.Padre}>
      <Text style={styles.titulo}>Inicio de sesion</Text>

      <View style={styles.campo}>
          <Text style={styles.preguntas}>Correo: </Text>
          <TextInput
            style={styles.input}
            placeholder='Ejemplo@gmail.com'
            placeholderTextColor={'#666'}
          />
      </View>
      <View style={styles.campo}>
        <Text style={styles.preguntas}>Contraseña: </Text>
        <View style={styles.inputcontraseña}>
          <TextInput
            style={styles.contraseña}
            placeholder='Introduce tu contraseña'
            placeholderTextColor={'#666'}
            secureTextEntry={!isPasswordVisible} // Oculta la contraseña a menos que isPasswordVisible sea true
            value={password}
            onChangeText={setPassword}
          />
          <Pressable onPress={handlePressImage} style={styles.presscontra}>
            <Image
              style={styles.imagen}
              source={require('../img/Ojo.png')}
            />
          </Pressable>
        </View>
      </View>
      <Pressable
      onPress={() => setIdentificado(false)}
      style={styles.btnEnviar}>
        <Text style={styles.btnEnviarText}>Ingresar</Text>
      </Pressable>

    </View>
  )
}
const styles = StyleSheet.create({
  Padre: {
    backgroundColor: '#15303B',
    flex: 1
  },
  titulo: {
    marginTop: 40,
    textAlign: 'center',
    fontSize: 30,
    color: '#FFFFFF', 
    fontWeight: '300'
  },
   campo: {
    marginTop: 10,
    marginHorizontal: 30,
    paddingBottom: 10
  },
  preguntas: {
    color: '#FFF',
    fontSize: 20,
    marginBottom: 10,
    marginTop: 15,
    fontWeight: '600'
  },
  input: {
    backgroundColor: '#FFF',
    padding: 10,
    borderRadius: 10,
    color:'#171717'
  },
  contraseña: {
    backgroundColor: '#FFF',
    padding: 10,
    borderRadius: 10,
    color:'#171717',
    flex: 1
  },
  inputcontraseña: {
    backgroundColor: '#FFF',
    padding: 10,
    borderRadius: 10,
    color:'#171717',
    flexDirection: 'row',
    justifyContent: 'space-between'

  },
  btnEnviar: {
    marginTop: 50,
    marginHorizontal: 30,
    backgroundColor: '#4FA348',
    padding: 15,
    borderRadius: 50
  },
  btnEnviarText: {
    fontSize: 20,
    textAlign: 'center',
    color: '#FFF',
    textTransform: 'uppercase',
    fontWeight: '700'
  },
  btnRegistro: {
    padding: 20,
    marginTop: 10
  },
  brnRegistroTxt:{
    color: '#4C7E93',
    textAlign: 'center'
  },
  imagen: {
    height: 45,
    width: 45
  }
})

export default Informacion
