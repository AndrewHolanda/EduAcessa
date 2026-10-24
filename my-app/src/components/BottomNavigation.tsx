import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const COLORS = {
  blue: '#1E56B2',
  white: '#FFFFFF',
  muted: '#94A3B8',
  border: '#E8EDF3',
};

export type TabKey = 'inicio' | 'aulas' | 'monitores' | 'atividades' | 'perfil';

type BottomNavigationProps = {
  activeTab: TabKey;
  onTabPress?: (tab: TabKey) => void;
};

const tabs: {
  key: TabKey;
  label: string;
  icon: keyof typeof Ionicons.glyphMap;
}[] = [
  { key: 'inicio', label: 'Início', icon: 'home-outline' },
  { key: 'aulas', label: 'Aulas', icon: 'book-outline' },
  { key: 'monitores', label: 'Monitores', icon: 'people-outline' },
  {
    key: 'atividades',
    label: 'Atividades',
    icon: 'clipboard-outline',
  },
  { key: 'perfil', label: 'Perfil', icon: 'person-outline' },
];

export default function BottomNavigation({
  activeTab,
  onTabPress,
}: BottomNavigationProps) {
  return (
    <View style={styles.bottomNav}>
      {tabs.map((tab) => {
        const selected = activeTab === tab.key;

        return (
          <TouchableOpacity
            key={tab.key}
            style={styles.navItem}
            onPress={() => onTabPress?.(tab.key)}
            accessibilityRole='button'
            accessibilityLabel={tab.label}
            accessibilityState={{ selected }}
          >
            <Ionicons
              name={tab.icon}
              size={22}
              color={selected ? COLORS.blue : COLORS.muted}
            />

            <Text
              style={[styles.navLabel, selected && styles.navLabelSelected]}
            >
              {tab.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  bottomNav: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: COLORS.white,
    borderTopWidth: 1,
    borderTopColor: COLORS.border,
    paddingTop: 9,
    paddingBottom: 7,
    paddingHorizontal: 4,
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
    minHeight: 44,
  },
  navLabel: {
    color: COLORS.muted,
    fontSize: 9,
    fontWeight: '600',
  },
  navLabelSelected: {
    color: COLORS.blue,
    fontWeight: '800',
  },
});
