import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    Modal,
    TextInput,
    Pressable,
    Image
  } from 'react-native';

const Login = () => {
    const [nombre, setNombre] = useState('');
    const [contraseña, setContraseña] = useState('');
    const [esVisible, setEsVisible] = useState(false);
    
    const mostrarContraseña = () => {
    setEsVisible(true);
    setTimeout(() => {
      setEsVisible(false);
    }, 2200); 
  };

  return (
    <SafeAreaView
    style={styles.contenedor}>
      <NavigationContainer> 
          <StackActions.Navigator initialRouteName='Login'>
            <Stack.Screen name='Login' component={menu}/>
              
          </StackActions.Navigator> 
      </NavigationContainer> 
      <Text style={styles.titulo}>Inicio de sesión</Text>

      <View>
          <TextInput 
            style={styles.imputs}
            placeholder='Nombre de usuario'
            value={nombre}
            onChangeText={setNombre}
            placeholderTextColor='#4C7E93'
            />
            <View style={styles.imputs}>
                <TextInput 
                style={styles.contraseña}
                placeholder='Contraseña'
                value={contraseña}
                onChangeText={setContraseña}
                placeholderTextColor='#4C7E93'
                secureTextEntry={!esVisible}
                />
                <Pressable
                  onPress={mostrarContraseña}>
                  <Image 
                    style={styles.imagen}
                    source={require('../img/Ojo.png')}/>
                </Pressable>
            </View>

            <Pressable
              style={styles.entrar}
            >
              <Text style={styles.entrarTxt}>Entrar</Text>
            </Pressable>

            <Pressable
              style={styles.registro}
            >
              <Text
              style={styles.registroTxt}>Click aqui para registrarte</Text>
            </Pressable>

            <View style={styles.contendorVacio}>
              <Text></Text>
            </View>
            
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: '#15303B',
    flex: 1
  },
  titulo: {
    textAlign: 'center',
    fontSize: 35,
    fontWeight: 'bold',
    paddingTop: 40,
    marginTop: 20,
    color: '#FFFFFF'
  },
  imputs:{
    backgroundColor: '#234B5C',
    marginHorizontal: 50,
    textAlign: 'center',
    color: '#B5B2B2',
    marginTop: 40,
    height: 60,
    fontSize: 20,
    textTransform: 'uppercase',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

  },
  contraseña:{
    flex: 1, 
    backgroundColor: '#234B5C',
    fontSize: 20,
    height: 60,
    color: '#B5B2B2',
    textTransform: 'uppercase',
    textAlign: 'center'
  },
  imagen: {
    height: 60,
    width: 60
  },
  entrar:{
    backgroundColor: '#4FA348',
    marginHorizontal: 40,
    marginTop: 50,
    height: 70,
    justifyContent: 'center'
  },
  entrarTxt: {
    textAlign: 'center',
    fontSize: 30
  },
  registro:{
    marginHorizontal: 40,
    marginTop: 15
  },
  registroTxt: {
    textAlign: 'center',
    color: '#4C7E93'
  },
  contendorVacio:{
    backgroundColor: '#294855',
    marginTop: 250,
    height: 100,
  }
});

export default Login;

