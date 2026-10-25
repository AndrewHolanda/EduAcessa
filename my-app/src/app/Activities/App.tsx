import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import BottomNavigation from '../../components/BottomNavigation';
import { styles, COLORS } from './style';

type ActivityStatus = 'Pendente' | 'Em andamento' | 'Concluída';

type Activity = {
  id: number;
  title: string;
  subject: string;
  description: string;
  status: ActivityStatus;
  progress: number;
  dueDate: string;
  icon: keyof typeof Ionicons.glyphMap;
  iconColor: string;
  iconBackground: string;
};

type FilterKey = 'Todas' | 'Em andamento' | 'Concluídas';

const filters: FilterKey[] = ['Todas', 'Em andamento', 'Concluídas'];

const initialActivities: Activity[] = [
  {
    id: 1,
    title: 'Exercícios de Matemática',
    subject: 'Matemática',
    description:
      'Pratique operações básicas e resolva os exercícios propostos.',
    status: 'Em andamento',
    progress: 45,
    dueDate: 'Prazo: 30 de outubro',
    icon: 'calculator-outline',
    iconColor: '#1E56B2',
    iconBackground: '#E8F0FE',
  },
  {
    id: 2,
    title: 'Interpretação de Texto',
    subject: 'Português',
    description:
      'Leia o texto indicado e responda às questões de interpretação.',
    status: 'Pendente',
    progress: 0,
    dueDate: 'Prazo: 02 de novembro',
    icon: 'book-outline',
    iconColor: '#7C3AED',
    iconBackground: '#F1EAFE',
  },
  {
    id: 3,
    title: 'Sistema Solar',
    subject: 'Ciências',
    description:
      'Revise os planetas e confira seus conhecimentos sobre o espaço.',
    status: 'Concluída',
    progress: 100,
    dueDate: 'Atividade finalizada',
    icon: 'planet-outline',
    iconColor: '#0F766E',
    iconBackground: '#DDF7F0',
  },
];

function getStatusStyle(status: ActivityStatus) {
  switch (status) {
    case 'Em andamento':
      return {
        backgroundColor: '#E8F0FE',
        color: COLORS.blue,
      };
    case 'Concluída':
      return {
        backgroundColor: '#DCFCE7',
        color: '#15803D',
      };
    default:
      return {
        backgroundColor: '#FFF4DB',
        color: '#A16207',
      };
  }
}

export default function ActivitiesScreen() {
  const { width } = useWindowDimensions();
  const isWideScreen = width >= 768;

  const [activeFilter, setActiveFilter] = useState<FilterKey>('Todas');

  const filteredActivities = initialActivities.filter((activity) => {
    if (activeFilter === 'Todas') {
      return true;
    }

    if (activeFilter === 'Concluídas') {
      return activity.status === 'Concluída';
    }

    return activity.status === activeFilter;
  });

  const completedCount = initialActivities.filter(
    (activity) => activity.status === 'Concluída'
  ).length;

  const inProgressCount = initialActivities.filter(
    (activity) => activity.status === 'Em andamento'
  ).length;

  return (
    <View style={styles.screen}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={[styles.content, isWideScreen && styles.contentWide]}>
          {/* Cabeçalho */}
          <View style={styles.header}>
            <View style={styles.headerTextContainer}>
              <Text style={styles.pageTitle}>Atividades</Text>
              <Text style={styles.pageSubtitle}>
                Organize suas tarefas e acompanhe seu aprendizado.
              </Text>
            </View>

            <View style={styles.headerIcon}>
              <Ionicons
                name='clipboard-outline'
                size={27}
                color={COLORS.blue}
              />
            </View>
          </View>

          {/* Resumo */}
          <View style={styles.summarySection}>
            <Text style={styles.sectionTitle}>Meu resumo</Text>

            <View style={styles.summaryGrid}>
              <View style={[styles.summaryCard, styles.summaryCardBlue]}>
                <View style={styles.summaryIconBlue}>
                  <Ionicons name='book-outline' size={22} color={COLORS.blue} />
                </View>

                <Text style={styles.summaryNumber}>
                  {initialActivities.length}
                </Text>
                <Text style={styles.summaryLabel}>Total de atividades</Text>
              </View>

              <View style={[styles.summaryCard, styles.summaryCardGreen]}>
                <View style={styles.summaryIconGreen}>
                  <Ionicons
                    name='checkmark-circle-outline'
                    size={22}
                    color='#15803D'
                  />
                </View>

                <Text style={styles.summaryNumber}>{completedCount}</Text>
                <Text style={styles.summaryLabel}>Concluídas</Text>
              </View>
            </View>

            <View style={styles.progressOverview}>
              <View style={styles.progressOverviewHeader}>
                <View style={styles.progressOverviewText}>
                  <Text style={styles.progressOverviewTitle}>
                    Atividades em andamento
                  </Text>
                  <Text style={styles.progressOverviewSubtitle}>
                    Continue avançando nos seus estudos.
                  </Text>
                </View>

                <Text style={styles.progressOverviewCount}>
                  {inProgressCount}
                </Text>
              </View>
            </View>
          </View>

          {/* Lista de atividades */}
          <View style={styles.activitiesSection}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Minhas atividades</Text>

              <Text style={styles.activityCount}>
                {filteredActivities.length}{' '}
                {filteredActivities.length === 1 ? 'atividade' : 'atividades'}
              </Text>
            </View>

            {/* Filtros */}
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={styles.filtersScroll}
              contentContainerStyle={styles.filtersContainer}
            >
              {filters.map((filter) => {
                const selected = activeFilter === filter;

                return (
                  <TouchableOpacity
                    key={filter}
                    style={[
                      styles.filterButton,
                      selected && styles.filterButtonActive,
                    ]}
                    onPress={() => setActiveFilter(filter)}
                    accessibilityRole='button'
                    accessibilityState={{ selected }}
                  >
                    <Text
                      style={[
                        styles.filterText,
                        selected && styles.filterTextActive,
                      ]}
                    >
                      {filter}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </ScrollView>

            {/* Cartões */}
            <View
              style={[
                styles.activitiesList,
                isWideScreen && styles.activitiesListWide,
              ]}
            >
              {filteredActivities.map((activity) => {
                const statusStyle = getStatusStyle(activity.status);

                return (
                  <View
                    key={activity.id}
                    style={[
                      styles.activityCard,
                      isWideScreen && styles.activityCardWide,
                    ]}
                  >
                    <View style={styles.activityCardHeader}>
                      <View
                        style={[
                          styles.activityIcon,
                          {
                            backgroundColor: activity.iconBackground,
                          },
                        ]}
                      >
                        <Ionicons
                          name={activity.icon}
                          size={24}
                          color={activity.iconColor}
                        />
                      </View>

                      <View style={styles.activityTitleContainer}>
                        <Text style={styles.activitySubject}>
                          {activity.subject}
                        </Text>

                        <Text style={styles.activityTitle}>
                          {activity.title}
                        </Text>
                      </View>

                      <View
                        style={[
                          styles.statusBadge,
                          {
                            backgroundColor: statusStyle.backgroundColor,
                          },
                        ]}
                      >
                        <Text
                          style={[
                            styles.statusText,
                            { color: statusStyle.color },
                          ]}
                        >
                          {activity.status}
                        </Text>
                      </View>
                    </View>

                    <Text style={styles.activityDescription}>
                      {activity.description}
                    </Text>

                    <View style={styles.activityProgressHeader}>
                      <Text style={styles.activityProgressLabel}>
                        Progresso
                      </Text>

                      <Text style={styles.activityProgressValue}>
                        {activity.progress}%
                      </Text>
                    </View>

                    <View style={styles.progressTrack}>
                      <View
                        style={[
                          styles.progressFill,
                          {
                            width: `${activity.progress}%`,
                            backgroundColor:
                              activity.status === 'Concluída'
                                ? '#16A34A'
                                : COLORS.blue,
                          },
                        ]}
                      />
                    </View>

                    <View style={styles.activityFooter}>
                      <View style={styles.dueDateContainer}>
                        <Ionicons
                          name={
                            activity.status === 'Concluída'
                              ? 'checkmark-circle-outline'
                              : 'calendar-outline'
                          }
                          size={16}
                          color={COLORS.muted}
                        />

                        <Text style={styles.dueDateText}>
                          {activity.dueDate}
                        </Text>
                      </View>

                      <Ionicons
                        name='chevron-forward'
                        size={19}
                        color={COLORS.muted}
                      />
                    </View>
                  </View>
                );
              })}

              {filteredActivities.length === 0 && (
                <View style={styles.emptyState}>
                  <View style={styles.emptyStateIcon}>
                    <Ionicons
                      name='clipboard-outline'
                      size={30}
                      color={COLORS.muted}
                    />
                  </View>

                  <Text style={styles.emptyStateTitle}>
                    Nenhuma atividade encontrada
                  </Text>

                  <Text style={styles.emptyStateDescription}>
                    Não há atividades nesta categoria no momento.
                  </Text>
                </View>
              )}
            </View>
          </View>

          <Text style={styles.footerMessage}>
            Cada atividade é uma oportunidade de aprender.
          </Text>
        </View>
      </ScrollView>

      <BottomNavigation activeTab='atividades' />
    </View>
  );
}
