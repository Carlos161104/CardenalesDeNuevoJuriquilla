import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Pressable,
  FlatList,
  Alert,
  Modal
} from 'react-native';

import Formulario from './src/components/Formulario';
import Paciente from './src/components/Paciente';
import InfoPacientes from './src/components/InfoPacientes';
import Informacion from './src/components/Informacion';


const App = () => {

  const [modalVisible, setModalVisible ] = useState(false);
  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({});
  const [modaPaciente, setModalPaciente] = useState(false);
  const [identificado, setIdentificado] = useState(true);

  const pacienteEditar = id => {
    const pacienteEditar = pacientes.filter(paciente => paciente.id === id )
    setPaciente(pacienteEditar[0])
  }

  const pacienteEliminar = id => {
    Alert.alert(
      'Deseas ELIMINAR esta consulta?',
      'Se eliminara permanentemente... ',
      [
        {text: 'Cancelar'},
        {text: 'Eliminar', onPress: () => {
          const pacientesActualizados = pacientes.filter(
            pacientesSatate => pacientesSatate.id !== id
          )

          setPacientes(pacientesActualizados)
        }}
      ]
    )
  }
  
  return (
    <View style={styles.conteiner}>
      <Modal
        visible={identificado}
        animationType='slide'
      >
        <Informacion 
          setIdentificado={setIdentificado}/>
      </Modal>
      <Text style={styles.titulo}>Consultar {''}
        <Text style={styles.tituloBold}>Informacion</Text>
      </Text>
      
      <Pressable
        onPressIn={() => setModalVisible(!modalVisible)}
        style={styles.btnNuevacita}>
        <Text style={styles.btnTextoNuevacita}>Nuevo arrivo</Text>
      </Pressable>

      {pacientes.length === 0 ? 
        <Text style={styles.noPacientes}>No hay ninguna consulta</Text>: 
        <FlatList
        style={styles.listado}
          data={pacientes}
          keyExtractor={(item) => item.id}
          renderItem={({item}) => {
            return(
                <Paciente 
                  item={item}
                  setModalVisible={setModalVisible}
                  setPaciente={setPaciente}
                  modalVisible={modalVisible}
                  pacienteEditar={pacienteEditar}
                  pacienteEliminar={pacienteEliminar}
                  setModalPaciente={setModalPaciente}
                />
            )
          }}
/>
      }
      {modalVisible && (
        <Formulario
        modalVisible = {modalVisible}
        setModalVisible={setModalVisible}
        pacientes={pacientes}
        setPacientes={setPacientes}
        paciente={paciente}
        setPaciente={setPaciente}
      />
      )}
      

      <Modal
        visible={modaPaciente}
        animationType='slide'
      > 
        <InfoPacientes 
          paciente={paciente}
          setModalPaciente={setModalPaciente}
          setPaciente={setPaciente}
        />
      </Modal>
    </View> 
  );
}

const styles = StyleSheet.create({
  conteiner: {
    backgroundColor: '#15303B',
    flex: 1,
    paddingTop: 30
  },
  titulo: {
    textAlign: 'center',
    fontSize: 30,
    color: '#FFFFFF', 
    fontWeight: '300'
  },
  tituloBold :{
    fontWeight: '900',
    color: '#FFFFFF'
  },
  btnNuevacita:{
    marginVertical: 30,
    backgroundColor: '#234B5C',
    marginHorizontal:30,
    padding: 20,
    borderRadius: 50,
    borderWidth: 1
  },
  btnTextoNuevacita: {
    color: '#FFF',
    textAlign: 'center',
    fontSize: 15,
    fontWeight: '900',
    textTransform: 'uppercase'
  },
  noPacientes: {
    marginTop: 40,
    color: '#4C7E93',
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '600'
  },
  listado: {
    marginTop: 50,
    marginHorizontal: 30
  }
});

export default App;
