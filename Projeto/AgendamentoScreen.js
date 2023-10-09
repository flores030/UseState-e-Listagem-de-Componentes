import React, { useState } from 'react';
import { View, TextInput, Button, Alert, StyleSheet } from 'react-native';

const AgendamentoScreen = ({ navigation }) => {
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [endereco, setEndereco] = useState('');
  const [valorConsulta, setValorConsulta] = useState('');

  const handleAgendarConsulta = () => {
    if (!nome || !cpf || !dataNascimento || !endereco || !valorConsulta) {
      Alert.alert('Por favor, preencha todos os campos.');
      return;
    }

    const consultaInfo = {
      nome,
      cpf,
      dataNascimento,
      endereco,
      valorConsulta,
    };

    console.log(consultaInfo);

    navigation.navigate('ConsultasAgendadas', { novaConsulta: consultaInfo });
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nome Completo"
        value={nome}
        onChangeText={(text) => setNome(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="CPF"
        value={cpf}
        onChangeText={(text) => setCpf(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Data de Nascimento"
        value={dataNascimento}
        onChangeText={(text) => setDataNascimento(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Endereço"
        value={endereco}
        onChangeText={(text) => setEndereco(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Valor da Consulta"
        value={valorConsulta}
        onChangeText={(text) => setValorConsulta(text)}
      />
      <Button title="Agendar Consulta" onPress={handleAgendarConsulta} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
});

export default AgendamentoScreen;
