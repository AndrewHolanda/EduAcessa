import React from 'react';
import {
  ScrollView,
  Text,
  View,
  Pressable,
  useWindowDimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createStyles } from './style';
import BottomNavigation from '../../components/BottomNavigation';

type SettingsItem = {
  icon: string;
  title: string;
  description: string;
  value?: string;
};

const settingsGroups: {
  title: string;
  items: SettingsItem[];
}[] = [
  {
    title: 'PREFERÊNCIAS',
    items: [
      {
        icon: '🔔',
        title: 'Notificações',
        description: 'Avisos sobre aulas, atividades e lembretes.',
        value: '›',
      },
      {
        icon: '♿',
        title: 'Acessibilidade',
        description: 'Ajustes para facilitar o uso do aplicativo.',
        value: '›',
      },
    ],
  },
  {
    title: 'CONTA E SEGURANÇA',
    items: [
      {
        icon: '🔒',
        title: 'Segurança',
        description: 'Opções de proteção e acesso à sua conta.',
        value: '›',
      },
      {
        icon: '📶',
        title: 'Uso offline',
        description: 'Consulte conteúdos disponíveis sem internet.',
        value: '›',
      },
    ],
  },
  {
    title: 'SOBRE',
    items: [
      {
        icon: 'ℹ️',
        title: 'Sobre o EduAcessa',
        description: 'Conheça o projeto e sua proposta educacional.',
        value: '›',
      },
    ],
  },
];

export default function Settings() {
  const { width } = useWindowDimensions();
  const styles = createStyles(width);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.page}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          <View style={styles.header}>
            <Text style={styles.headerEyebrow}>SUA EXPERIÊNCIA</Text>

            <Text style={styles.headerTitle}>Configurações</Text>

            <Text style={styles.headerDescription}>
              Personalize o EduAcessa de acordo com suas necessidades.
            </Text>
          </View>

          <View style={styles.accountCard}>
            <View style={styles.accountIcon}>
              <Text style={styles.accountIconText}>⚙</Text>
            </View>

            <View style={styles.accountText}>
              <Text style={styles.accountTitle}>
                Seu aplicativo, do seu jeito
              </Text>

              <Text style={styles.accountDescription}>
                Gerencie suas preferências e conheça os recursos do EduAcessa.
              </Text>
            </View>
          </View>

          {settingsGroups.map((group) => (
            <View key={group.title} style={styles.group}>
              <Text style={styles.groupTitle}>{group.title}</Text>

              <View style={styles.groupCard}>
                {group.items.map((item, index) => (
                  <Pressable
                    key={item.title}
                    accessibilityRole='button'
                    accessibilityLabel={item.title}
                    style={[
                      styles.settingsItem,
                      index !== group.items.length - 1 &&
                        styles.settingsItemBorder,
                    ]}
                  >
                    <View style={styles.itemIcon}>
                      <Text style={styles.itemIconText}>{item.icon}</Text>
                    </View>

                    <View style={styles.itemContent}>
                      <Text style={styles.itemTitle}>{item.title}</Text>

                      <Text style={styles.itemDescription}>
                        {item.description}
                      </Text>
                    </View>

                    <Text style={styles.itemArrow}>{item.value}</Text>
                  </Pressable>
                ))}
              </View>
            </View>
          ))}

          <View style={styles.footer}>
            <Text style={styles.footerName}>EduAcessa</Text>

            <Text style={styles.footerDescription}>
              Educação e oportunidades para todos.
            </Text>

            <Text style={styles.footerVersion}>Versão 1.0.0</Text>
          </View>
        </ScrollView>

        <BottomNavigation activeTab='perfil' />
      </View>
    </SafeAreaView>
  );
}
