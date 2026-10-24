import React, { useState } from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
  View,
  Pressable,
  useWindowDimensions,
} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import { createStyles } from './style';
import BottomNavigation from '../../components/BottomNavigation';

type UserRole = 'Aluno' | 'Professor';

export default function EditProfile() {
  const { width } = useWindowDimensions();
  const styles = createStyles(width);

  const [name, setName] = useState('Maria Oliveira');
  const [email, setEmail] = useState('maria.oliveira@email.com');
  const [school, setSchool] = useState('Escola Estadual Modelo');
  const [phone, setPhone] = useState('');
  const [role, setRole] = useState<UserRole>('Aluno');

  const [savedData, setSavedData] = useState({
    name: 'Maria Oliveira',
    email: 'maria.oliveira@email.com',
    school: 'Escola Estadual Modelo',
    phone: '',
    role: 'Aluno' as UserRole,
  });

  const handleSave = () => {
    if (!name.trim() || !email.trim() || !school.trim()) {
      Alert.alert(
        'Campos obrigatórios',
        'Preencha o nome, o e-mail e a escola.'
      );
      return;
    }

    const normalizedEmail = email.trim();

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalizedEmail)) {
      Alert.alert('E-mail inválido', 'Informe um endereço de e-mail válido.');
      return;
    }

    const updatedData = {
      name: name.trim(),
      email: normalizedEmail,
      school: school.trim(),
      phone: phone.trim(),
      role,
    };

    setSavedData(updatedData);
    setName(updatedData.name);
    setEmail(updatedData.email);
    setSchool(updatedData.school);
    setPhone(updatedData.phone);

    Alert.alert(
      'Alterações salvas',
      'Os dados foram atualizados nesta tela de demonstração.'
    );
  };

  const handleCancel = () => {
    setName(savedData.name);
    setEmail(savedData.email);
    setSchool(savedData.school);
    setPhone(savedData.phone);
    setRole(savedData.role);
  };

  const initials = name
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
    .toUpperCase();

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        style={styles.page}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps='handled'
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.container}>
            {/* Cabeçalho */}
            <View style={styles.header}>
              <View style={styles.headerTextContainer}>
                <Text style={styles.eyebrow}>EDUACESSA</Text>
                <Text style={styles.pageTitle}>Editar perfil</Text>
                <Text style={styles.subtitle}>
                  Mantenha seus dados atualizados.
                </Text>
              </View>

              <View style={styles.headerIcon}>
                <Text style={styles.headerIconText}>✎</Text>
              </View>
            </View>

            {/* Identificação */}
            <View style={styles.identityCard}>
              <View style={styles.avatar}>
                <Text style={styles.avatarText}>{initials || 'U'}</Text>
              </View>

              <View style={styles.identityInfo}>
                <Text style={styles.identityTitle}>Informações pessoais</Text>
                <Text style={styles.identityDescription}>
                  Edite os dados vinculados à sua conta.
                </Text>
              </View>
            </View>

            {/* Formulário */}
            <View style={styles.formCard}>
              <Text style={styles.sectionTitle}>Dados do usuário</Text>
              <Text style={styles.sectionDescription}>
                Os campos marcados com * são obrigatórios.
              </Text>

              <View style={styles.fieldGroup}>
                <Text style={styles.label}>Nome completo *</Text>
                <TextInput
                  style={styles.input}
                  value={name}
                  onChangeText={setName}
                  placeholder='Digite seu nome completo'
                  placeholderTextColor='#9AA4B6'
                  autoCapitalize='words'
                  autoCorrect={false}
                  returnKeyType='next'
                  accessibilityLabel='Nome completo'
                />
              </View>

              <View style={styles.fieldGroup}>
                <Text style={styles.label}>E-mail *</Text>
                <TextInput
                  style={styles.input}
                  value={email}
                  onChangeText={setEmail}
                  placeholder='seuemail@exemplo.com'
                  placeholderTextColor='#9AA4B6'
                  keyboardType='email-address'
                  autoCapitalize='none'
                  autoCorrect={false}
                  returnKeyType='next'
                  accessibilityLabel='E-mail'
                />
              </View>

              <View style={styles.fieldGroup}>
                <Text style={styles.label}>Escola ou instituição *</Text>
                <TextInput
                  style={styles.input}
                  value={school}
                  onChangeText={setSchool}
                  placeholder='Nome da sua instituição'
                  placeholderTextColor='#9AA4B6'
                  autoCapitalize='words'
                  returnKeyType='next'
                  accessibilityLabel='Escola ou instituição'
                />
              </View>

              <View style={styles.fieldGroup}>
                <Text style={styles.label}>Telefone (opcional)</Text>
                <TextInput
                  style={styles.input}
                  value={phone}
                  onChangeText={setPhone}
                  placeholder='(92) 99999-9999'
                  placeholderTextColor='#9AA4B6'
                  keyboardType='phone-pad'
                  returnKeyType='done'
                  accessibilityLabel='Telefone'
                />
              </View>

              <View style={styles.fieldGroup}>
                <Text style={styles.label}>Tipo de usuário *</Text>
                <Text style={styles.helperText}>
                  Selecione seu perfil na plataforma.
                </Text>

                <View style={styles.roleOptions}>
                  {(['Aluno', 'Professor'] as UserRole[]).map((item) => {
                    const selected = role === item;

                    return (
                      <Pressable
                        key={item}
                        onPress={() => setRole(item)}
                        accessibilityRole='radio'
                        accessibilityState={{ selected }}
                        style={[
                          styles.roleOption,
                          selected && styles.roleOptionSelected,
                        ]}
                      >
                        <View
                          style={[
                            styles.radioOuter,
                            selected && styles.radioOuterSelected,
                          ]}
                        >
                          {selected && <View style={styles.radioInner} />}
                        </View>

                        <Text
                          style={[
                            styles.roleText,
                            selected && styles.roleTextSelected,
                          ]}
                        >
                          {item}
                        </Text>
                      </Pressable>
                    );
                  })}
                </View>
              </View>

              {/* Botões */}
              <View style={styles.buttonsContainer}>
                <Pressable
                  onPress={handleCancel}
                  accessibilityRole='button'
                  style={({ pressed }) => [
                    styles.cancelButton,
                    pressed && styles.buttonPressed,
                  ]}
                >
                  <Text style={styles.cancelButtonText}>Cancelar</Text>
                </Pressable>

                <Pressable
                  onPress={handleSave}
                  accessibilityRole='button'
                  style={({ pressed }) => [
                    styles.saveButton,
                    pressed && styles.buttonPressed,
                  ]}
                >
                  <Text style={styles.saveButtonText}>Salvar alterações</Text>
                </Pressable>
              </View>

              <Text style={styles.note}>
                As alterações são demonstrativas e ainda não são enviadas para
                um servidor.
              </Text>
            </View>

            <Text style={styles.footerText}>
              EduAcessa · Educação para todos
            </Text>
          </View>
        </ScrollView>

        {/* Barra inferior compartilhada */}
        <BottomNavigation activeTab='perfil' />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
