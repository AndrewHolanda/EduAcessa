import React from 'react';
import { ScrollView, Text, View, useWindowDimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createStyles } from './style';
import BottomNavigation from '../../components/BottomNavigation';

export default function Profile() {
  const { width } = useWindowDimensions();
  const styles = createStyles(width);

  // Dados demonstrativos. Depois poderão vir do usuário autenticado.
  const user = {
    name: 'Maria Oliveira',
    email: 'maria.oliveira@email.com',
    school: 'Escola Estadual Modelo',
    role: 'Aluna',
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.page}>
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.container}>
            {/* Cabeçalho */}
            <View style={styles.header}>
              <View>
                <Text style={styles.headerEyebrow}>EDUACESSA</Text>
                <Text style={styles.pageTitle}>Meu perfil</Text>
                <Text style={styles.subtitle}>
                  Gerencie suas informações pessoais.
                </Text>
              </View>

              <View style={styles.headerIcon}>
                <Text style={styles.headerIconText}>EU</Text>
              </View>
            </View>

            {/* Cartão de identificação */}
            <View style={styles.profileCard}>
              <View style={styles.profileTop}>
                <View style={styles.avatar}>
                  <Text style={styles.avatarText}>
                    {user.name
                      .split(' ')
                      .slice(0, 2)
                      .map((part) => part[0])
                      .join('')
                      .toUpperCase()}
                  </Text>
                </View>

                <View style={styles.profileIdentity}>
                  <Text style={styles.profileName}>{user.name}</Text>
                  <Text style={styles.profileEmail}>{user.email}</Text>

                  <View style={styles.roleBadge}>
                    <Text style={styles.roleBadgeText}>{user.role}</Text>
                  </View>
                </View>
              </View>

              <View style={styles.profileDivider} />

              <View style={styles.schoolRow}>
                <View style={styles.schoolIcon}>
                  <Text style={styles.schoolIconText}>E</Text>
                </View>

                <View style={styles.schoolInfo}>
                  <Text style={styles.fieldLabel}>Instituição de ensino</Text>
                  <Text style={styles.schoolName}>{user.school}</Text>
                </View>
              </View>
            </View>

            {/* Informações pessoais */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Informações pessoais</Text>
              <Text style={styles.sectionDescription}>
                Confira os dados vinculados à sua conta.
              </Text>

              <View style={styles.infoCard}>
                <View style={styles.infoRow}>
                  <View style={styles.infoIcon}>
                    <Text style={styles.infoIconText}>N</Text>
                  </View>

                  <View style={styles.infoContent}>
                    <Text style={styles.fieldLabel}>Nome completo</Text>
                    <Text style={styles.fieldValue}>{user.name}</Text>
                  </View>
                </View>

                <View style={styles.infoDivider} />

                <View style={styles.infoRow}>
                  <View style={styles.infoIcon}>
                    <Text style={styles.infoIconText}>@</Text>
                  </View>

                  <View style={styles.infoContent}>
                    <Text style={styles.fieldLabel}>E-mail</Text>
                    <Text style={styles.fieldValue}>{user.email}</Text>
                  </View>
                </View>

                <View style={styles.infoDivider} />

                <View style={styles.infoRow}>
                  <View style={styles.infoIcon}>
                    <Text style={styles.infoIconText}>E</Text>
                  </View>

                  <View style={styles.infoContent}>
                    <Text style={styles.fieldLabel}>Escola</Text>
                    <Text style={styles.fieldValue}>{user.school}</Text>
                  </View>
                </View>

                <View style={styles.infoDivider} />

                <View style={styles.infoRow}>
                  <View style={styles.infoIcon}>
                    <Text style={styles.infoIconText}>U</Text>
                  </View>

                  <View style={styles.infoContent}>
                    <Text style={styles.fieldLabel}>Tipo de usuário</Text>
                    <Text style={styles.fieldValue}>{user.role}</Text>
                  </View>
                </View>
              </View>
            </View>

            {/* Opções da conta */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Minha conta</Text>

              <View style={styles.actionsCard}>
                <View style={styles.actionRow}>
                  <View style={styles.actionIcon}>
                    <Text style={styles.actionIconText}>✎</Text>
                  </View>

                  <View style={styles.actionContent}>
                    <Text style={styles.actionTitle}>Editar perfil</Text>
                    <Text style={styles.actionDescription}>
                      Atualize seus dados pessoais.
                    </Text>
                  </View>

                  <Text style={styles.actionArrow}>›</Text>
                </View>

                <View style={styles.infoDivider} />

                <View style={styles.actionRow}>
                  <View style={styles.actionIcon}>
                    <Text style={styles.actionIconText}>⚙</Text>
                  </View>

                  <View style={styles.actionContent}>
                    <Text style={styles.actionTitle}>Configurações</Text>
                    <Text style={styles.actionDescription}>
                      Preferências e opções da conta.
                    </Text>
                  </View>

                  <Text style={styles.actionArrow}>›</Text>
                </View>
              </View>
            </View>

            <Text style={styles.footerText}>
              EduAcessa · Educação para todos
            </Text>
          </View>
        </ScrollView>

        {/* Barra de navegação compartilhada */}
        <BottomNavigation activeTab='perfil' />
      </View>
    </SafeAreaView>
  );
}
