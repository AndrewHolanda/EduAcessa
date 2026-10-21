import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Alert,
  StatusBar as RNStatusBar,
} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './style';

export default function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [mostrarSenha, setMostrarSenha] = useState(false);

  const fazerLogin = () => {
    const emailLimpo = email.trim();

    if (!emailLimpo || !senha) {
      Alert.alert('Atenção', 'Preencha todos os campos.');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailLimpo)) {
      Alert.alert('Atenção', 'Digite um e-mail válido.');
      return;
    }

    // Futuramente conectar ao backend do EduAcessa.
    Alert.alert('EduAcessa', 'Formulário validado!');
  };

  const recuperarSenha = () => {
    Alert.alert('Recuperar senha', 'Funcionalidade em desenvolvimento.');
  };

  const abrirCadastro = () => {
    Alert.alert('Cadastro', 'Funcionalidade em desenvolvimento.');
  };

  return (
    <SafeAreaView style={styles.safeArea} edges={['top', 'bottom']}>
      <RNStatusBar backgroundColor='#F5F8FF' barStyle='dark-content' />

      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        keyboardVerticalOffset={0}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps='handled'
          keyboardDismissMode={
            Platform.OS === 'ios' ? 'interactive' : 'on-drag'
          }
          showsVerticalScrollIndicator={false}
        >
          {/* Cabeçalho */}
          <View style={styles.header}>
            <View style={styles.logo}>
              <Text style={styles.logoText}>E</Text>
            </View>

            <Text style={styles.appName}>
              Edu<Text style={styles.appNameBold}>Acessa</Text>
            </Text>

            <Text style={styles.headerSubtitle}>
              Educação acessível para todos.
            </Text>
          </View>

          {/* Formulário */}
          <View style={styles.formContainer}>
            <Text style={styles.title}>Bem-vindo de volta!</Text>

            <Text style={styles.subtitle}>
              Entre com sua conta para continuar sua jornada.
            </Text>

            <View style={styles.form}>
              <Text style={styles.label}>E-mail</Text>

              <TextInput
                style={styles.input}
                placeholder='seuemail@exemplo.com'
                placeholderTextColor='#94A3B8'
                keyboardType='email-address'
                autoCapitalize='none'
                autoCorrect={false}
                autoComplete='email'
                textContentType='emailAddress'
                returnKeyType='next'
                value={email}
                onChangeText={setEmail}
                accessibilityLabel='E-mail'
              />

              <Text style={styles.label}>Senha</Text>

              <View style={styles.passwordContainer}>
                <TextInput
                  style={styles.passwordInput}
                  placeholder='Digite sua senha'
                  placeholderTextColor='#94A3B8'
                  secureTextEntry={!mostrarSenha}
                  autoCapitalize='none'
                  autoComplete='current-password'
                  textContentType='password'
                  returnKeyType='done'
                  onSubmitEditing={fazerLogin}
                  value={senha}
                  onChangeText={setSenha}
                  accessibilityLabel='Senha'
                />

                <TouchableOpacity
                  style={styles.showPasswordButton}
                  accessibilityRole='button'
                  accessibilityLabel={
                    mostrarSenha ? 'Ocultar senha' : 'Mostrar senha'
                  }
                  onPress={() => setMostrarSenha((atual) => !atual)}
                  activeOpacity={0.7}
                >
                  <Text style={styles.showPassword}>
                    {mostrarSenha ? 'Ocultar' : 'Mostrar'}
                  </Text>
                </TouchableOpacity>
              </View>

              <TouchableOpacity
                style={styles.forgotPassword}
                accessibilityRole='button'
                onPress={recuperarSenha}
                activeOpacity={0.7}
              >
                <Text style={styles.forgotPasswordText}>
                  Esqueceu sua senha?
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.loginButton}
                accessibilityRole='button'
                activeOpacity={0.85}
                onPress={fazerLogin}
              >
                <Text style={styles.loginButtonText}>
                  Entrar na minha conta
                </Text>
              </TouchableOpacity>

              <View style={styles.registerContainer}>
                <Text style={styles.registerText}>
                  Ainda não tem uma conta?{' '}
                </Text>

                <TouchableOpacity
                  accessibilityRole='button'
                  onPress={abrirCadastro}
                  activeOpacity={0.7}
                >
                  <Text style={styles.registerLink}>Cadastre-se</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          {/* Rodapé */}
          <View style={styles.footer}>
            <Text style={styles.footerText}>© 2026 EduAcessa</Text>

            <Text style={styles.footerSubtitle}>
              Tecnologia a serviço da educação
            </Text>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
