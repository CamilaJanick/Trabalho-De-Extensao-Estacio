import React, { useState } from 'react';
import { SafeAreaView, Text, Button, FlatList, View, StyleSheet, Alert } from 'react-native';
import * as Linking from 'expo-linking';

const App = () => {
  // Lista de lembretes de saúde
  const [reminders, setReminders] = useState([
    { id: '1', title: 'Tomar remédio às 8h' },
    { id: '2', title: 'Caminhada às 17h' },
    { id: '3', title: 'Consulta médica dia 10' }
  ]);

  // Função para adicionar um novo lembrete
  const addReminder = () => {
    const newReminder = { id: (reminders.length + 1).toString(), title: 'Novo lembrete de saúde' };
    setReminders([...reminders, newReminder]);
    Alert.alert('Lembrete Adicionado!', 'Um novo lembrete foi adicionado.');
  };

  // Função para abrir o Google Assistente
  const openAssistant = () => {
    Alert.alert('Abrir Assistente Virtual', 'Abrindo Google Assistente...');
    Linking.openURL('googleassistant://');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Meus Lembretes de Saúde</Text>
      <FlatList
        data={reminders}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.reminderItem}>
            <Text style={styles.reminderText}>{item.title}</Text>
          </View>
        )}
      />
      <Button title="Adicionar Lembrete" onPress={addReminder} />
      <Button title="Abrir Google Assistente" onPress={openAssistant} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  reminderItem: {
    backgroundColor: '#ffffff',
    padding: 15,
    marginVertical: 8,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  reminderText: {
    fontSize: 18,
  },
});

export default App;