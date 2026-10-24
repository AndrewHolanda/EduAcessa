import React, { useState } from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';

import styles from './style';

type TipoUsuario = 'aluno' | 'professor';

type CampoProps = {
  label: string;
  placeholder: string;
  value: string;
  onChangeText: (value: string) => void;
  secureTextEntry?: boolean;
  keyboardType?: 'default' | 'email-address' | 'phone-pad';
  autoCapitalize?: 'none' | 'sentences' | 'words';
};

function Campo({
  label,
  placeholder,
  value,
  onChangeText,
  secureTextEntry = false,
  keyboardType = 'default',
  autoCapitalize = 'sentences',
}: CampoProps) {
  return (
    <View style={styles.field}>
      <Text style={styles.label}>{label}</Text>

      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor='#8A96A8'
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        autoCapitalize={autoCapitalize}
        autoCorrect={false}
      />
    </View>
  );
}

export default function Register() {
  const { width } = useWindowDimensions();
  const isWide = width >= 700;

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [escola, setEscola] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [telefone, setTelefone] = useState('');
  const [tipoUsuario, setTipoUsuario] = useState<TipoUsuario>('aluno');
  const [anoEscolar, setAnoEscolar] = useState('');
  const [disciplina, setDisciplina] = useState('');
  const [aceitouTermos, setAceitouTermos] = useState(false);

  function cadastrar() {
    if (
      !nome.trim() ||
      !email.trim() ||
      !escola.trim() ||
      !senha ||
      !confirmarSenha
    ) {
      Alert.alert('Atenção', 'Preencha os campos obrigatórios.');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      Alert.alert('E-mail inválido', 'Informe um e-mail válido.');
      return;
    }

    if (senha.length < 8) {
      Alert.alert('Senha inválida', 'Use pelo menos 8 caracteres.');
      return;
    }

    if (senha !== confirmarSenha) {
      Alert.alert('Atenção', 'As senhas não coincidem.');
      return;
    }

    if (tipoUsuario === 'aluno' && !anoEscolar) {
      Alert.alert('Atenção', 'Selecione seu ano escolar.');
      return;
    }

    if (tipoUsuario === 'professor' && !disciplina.trim()) {
      Alert.alert('Atenção', 'Informe a disciplina que leciona.');
      return;
    }

    if (!aceitouTermos) {
      Alert.alert('Atenção', 'Aceite os termos para continuar.');
      return;
    }

    // Integre esta etapa à API de cadastro do EduAcessa.
    Alert.alert(
      'Dados validados',
      'O formulário está válido. Falta integrar o cadastro à API.'
    );
  }

  function alternarUsuario(tipo: TipoUsuario) {
    setTipoUsuario(tipo);
    setAnoEscolar('');
    setDisciplina('');
  }

  return (
    <KeyboardAvoidingView
      style={styles.screen}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView
        contentContainerStyle={[
          styles.scrollContent,
          isWide && styles.scrollContentWide,
        ]}
        keyboardShouldPersistTaps='handled'
        showsVerticalScrollIndicator={false}
      >
        <View style={[styles.card, isWide && styles.cardWide]}>
          <View style={styles.header}>
            <Text style={styles.logo}>
              Edu<Text style={styles.logoAccent}>Acessa</Text>
            </Text>
            <Text style={styles.tagline}>Juntos por mais oportunidades</Text>
          </View>

          <Text style={styles.title}>Criar conta</Text>
          <Text style={styles.subtitle}>
            Preencha seus dados para fazer parte do EduAcessa.
          </Text>

          <View style={isWide ? styles.grid : undefined}>
            <View style={isWide ? styles.column : undefined}>
              <Campo
                label='Nome completo *'
                placeholder='Digite seu nome completo'
                value={nome}
                onChangeText={setNome}
              />

              <Campo
                label='E-mail *'
                placeholder='exemplo@email.com'
                value={email}
                onChangeText={setEmail}
                keyboardType='email-address'
                autoCapitalize='none'
              />

              <Campo
                label='Escola *'
                placeholder='Nome da escola ou instituição'
                value={escola}
                onChangeText={setEscola}
              />

              <Text style={styles.label}>Tipo de usuário *</Text>

              <View style={styles.roleContainer}>
                {(['aluno', 'professor'] as TipoUsuario[]).map((tipo) => {
                  const selecionado = tipoUsuario === tipo;

                  return (
                    <TouchableOpacity
                      key={tipo}
                      style={[
                        styles.roleButton,
                        selecionado && styles.roleSelected,
                      ]}
                      onPress={() => alternarUsuario(tipo)}
                      accessibilityRole='button'
                      accessibilityState={{ selected: selecionado }}
                    >
                      <Text
                        style={[
                          styles.roleText,
                          selecionado && styles.roleTextSelected,
                        ]}
                      >
                        {tipo === 'aluno' ? 'Aluno' : 'Professor'}
                      </Text>
                    </TouchableOpacity>
                  );
                })}
              </View>

              {tipoUsuario === 'aluno' ? (
                <View style={styles.field}>
                  <Text style={styles.label}>Ano escolar *</Text>

                  <View style={styles.yearGrid}>
                    {['6º ano', '7º ano', '8º ano', '9º ano'].map((ano) => {
                      const selecionado = anoEscolar === ano;

                      return (
                        <TouchableOpacity
                          key={ano}
                          style={[
                            styles.yearButton,
                            selecionado && styles.yearSelected,
                          ]}
                          onPress={() => setAnoEscolar(ano)}
                          accessibilityRole='button'
                          accessibilityState={{
                            selected: selecionado,
                          }}
                        >
                          <Text
                            style={[
                              styles.yearText,
                              selecionado && styles.yearTextSelected,
                            ]}
                          >
                            {ano}
                          </Text>
                        </TouchableOpacity>
                      );
                    })}
                  </View>
                </View>
              ) : (
                <Campo
                  label='Disciplina que leciona *'
                  placeholder='Ex.: Matemática'
                  value={disciplina}
                  onChangeText={setDisciplina}
                />
              )}

              <Campo
                label='Telefone (opcional)'
                placeholder='(92) 99999-9999'
                value={telefone}
                onChangeText={setTelefone}
                keyboardType='phone-pad'
              />
            </View>

            <View style={isWide ? styles.column : undefined}>
              <Campo
                label='Senha *'
                placeholder='Mínimo de 8 caracteres'
                value={senha}
                onChangeText={setSenha}
                secureTextEntry
                autoCapitalize='none'
              />

              <Campo
                label='Confirmar senha *'
                placeholder='Digite a senha novamente'
                value={confirmarSenha}
                onChangeText={setConfirmarSenha}
                secureTextEntry
                autoCapitalize='none'
              />
            </View>
          </View>

          <TouchableOpacity
            style={styles.termsRow}
            onPress={() => setAceitouTermos(!aceitouTermos)}
            accessibilityRole='checkbox'
            accessibilityState={{ checked: aceitouTermos }}
          >
            <View
              style={[
                styles.checkbox,
                aceitouTermos && styles.checkboxSelected,
              ]}
            >
              {aceitouTermos && <Text style={styles.checkmark}>✓</Text>}
            </View>

            <Text style={styles.termsText}>
              Li e aceito os Termos de Uso e a Política de Privacidade.
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.submitButton}
            onPress={cadastrar}
            accessibilityRole='button'
          >
            <Text style={styles.submitText}>Criar minha conta</Text>
          </TouchableOpacity>

          <View style={styles.footer}>
            <Text style={styles.footerText}>Já tem uma conta? </Text>

            <TouchableOpacity
              onPress={() =>
                Alert.alert('Login', 'Conecte este botão à sua tela de login.')
              }
            >
              <Text style={styles.loginLink}>Fazer login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
