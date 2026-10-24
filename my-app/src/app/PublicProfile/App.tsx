import React, { useState } from 'react';
import {
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';

import BottomNavigation from '../../components/BottomNavigation';
import { styles, COLORS } from './style';

type UserRole = 'Monitor voluntário' | 'Professor' | 'Aluno';

type ScheduleStatus = 'Disponível' | 'Agendado';

type Schedule = {
  id: string;
  day: string;
  date: string;
  start: string;
  end: string;
  subject: string;
  status: ScheduleStatus;
};

const profile = {
  id: '1',
  name: 'Ana Oliveira',
  initials: 'AO',
  role: 'Monitor voluntário' as UserRole,
  institution: 'Universidade Federal do Amazonas',
  course: 'Licenciatura em Matemática',
  description:
    'Olá! Sou estudante universitária e gosto de ajudar outros alunos a aprender matemática e ciências. Vamos estudar juntos!',
  subjects: ['Matemática', 'Física'],
  color: '#E4EDFF',
};

const initialSchedules: Schedule[] = [
  {
    id: '1',
    day: 'Segunda-feira',
    date: '26/10/2026',
    start: '14:00',
    end: '15:00',
    subject: 'Matemática',
    status: 'Disponível',
  },
  {
    id: '2',
    day: 'Segunda-feira',
    date: '26/10/2026',
    start: '15:00',
    end: '16:00',
    subject: 'Física',
    status: 'Disponível',
  },
  {
    id: '3',
    day: 'Terça-feira',
    date: '27/10/2026',
    start: '14:00',
    end: '15:00',
    subject: 'Matemática',
    status: 'Agendado',
  },
  {
    id: '4',
    day: 'Quarta-feira',
    date: '28/10/2026',
    start: '16:00',
    end: '17:00',
    subject: 'Física',
    status: 'Disponível',
  },
];

export default function PublicProfileScreen() {
  const { width } = useWindowDimensions();
  const isWideScreen = width >= 800;

  const [schedules, setSchedules] = useState(initialSchedules);
  const [selectedTab, setSelectedTab] = useState<'Todos' | 'Disponíveis'>(
    'Todos'
  );

  const visibleSchedules = schedules.filter((schedule) => {
    return selectedTab === 'Todos' || schedule.status === 'Disponível';
  });

  const handleBooking = (id: string) => {
    setSchedules((current) =>
      current.map((schedule) =>
        schedule.id === id && schedule.status === 'Disponível'
          ? { ...schedule, status: 'Agendado' }
          : schedule
      )
    );
  };

  return (
    <View style={styles.screen}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.heading}>
          <Text style={styles.pageTitle}>Perfil público</Text>
          <Text style={styles.pageSubtitle}>
            Conheça o monitor e confira os horários de atendimento.
          </Text>
        </View>

        <View
          style={[styles.mainLayout, isWideScreen && styles.mainLayoutWide]}
        >
          <View style={styles.profileColumn}>
            <View style={styles.profileCard}>
              <View style={styles.profileTop}>
                <View
                  style={[styles.avatar, { backgroundColor: profile.color }]}
                >
                  <Text style={styles.avatarText}>{profile.initials}</Text>
                </View>

                <View style={styles.profileIdentity}>
                  <Text style={styles.name}>{profile.name}</Text>
                  <Text style={styles.role}>{profile.role}</Text>
                  <View style={styles.statusBadge}>
                    <View style={styles.statusDot} />
                    <Text style={styles.statusBadgeText}>Perfil ativo</Text>
                  </View>
                </View>
              </View>

              <View style={styles.separator} />

              <Text style={styles.sectionTitle}>Sobre mim</Text>
              <Text style={styles.description}>{profile.description}</Text>

              <Text style={styles.infoLabel}>Instituição</Text>
              <Text style={styles.infoValue}>{profile.institution}</Text>

              <Text style={styles.infoLabel}>Curso</Text>
              <Text style={styles.infoValue}>{profile.course}</Text>

              <Text style={styles.sectionTitle}>Disciplinas que ministra</Text>

              <View style={styles.subjectsContainer}>
                {profile.subjects.map((subject) => (
                  <View key={subject} style={styles.subjectTag}>
                    <Text style={styles.subjectTagText}>{subject}</Text>
                  </View>
                ))}
              </View>
            </View>

            <View style={styles.noticeCard}>
              <Text style={styles.noticeTitle}>Sobre os agendamentos</Text>
              <Text style={styles.noticeText}>
                Cada atendimento tem duração de uma hora. Escolha um horário
                disponível para fazer sua solicitação.
              </Text>
            </View>
          </View>

          <View style={styles.scheduleColumn}>
            <View style={styles.scheduleCard}>
              <Text style={styles.scheduleTitle}>Horários de atendimento</Text>
              <Text style={styles.scheduleSubtitle}>
                Confira os horários e escolha o melhor para você.
              </Text>

              <View style={styles.tabs}>
                {(['Todos', 'Disponíveis'] as const).map((tab) => {
                  const active = selectedTab === tab;

                  return (
                    <TouchableOpacity
                      key={tab}
                      style={[styles.tab, active && styles.tabActive]}
                      onPress={() => setSelectedTab(tab)}
                      accessibilityRole='button'
                      accessibilityState={{ selected: active }}
                    >
                      <Text
                        style={[styles.tabText, active && styles.tabTextActive]}
                      >
                        {tab}
                      </Text>
                    </TouchableOpacity>
                  );
                })}
              </View>

              {visibleSchedules.map((schedule) => {
                const booked = schedule.status === 'Agendado';

                return (
                  <View key={schedule.id} style={styles.scheduleItem}>
                    <View style={styles.scheduleDate}>
                      <Text style={styles.scheduleDay}>{schedule.day}</Text>
                      <Text style={styles.scheduleDateText}>
                        {schedule.date}
                      </Text>

                      <Text style={styles.scheduleTime}>
                        {schedule.start} – {schedule.end}
                      </Text>

                      <Text style={styles.scheduleSubject}>
                        {schedule.subject}
                      </Text>
                    </View>

                    <View style={styles.scheduleAction}>
                      <View
                        style={[
                          styles.availabilityBadge,
                          booked && styles.bookedBadge,
                        ]}
                      >
                        <Text
                          style={[
                            styles.availabilityText,
                            booked && styles.bookedText,
                          ]}
                        >
                          {booked ? 'Agendado' : 'Disponível'}
                        </Text>
                      </View>

                      <TouchableOpacity
                        disabled={booked}
                        style={[
                          styles.bookButton,
                          booked && styles.bookButtonDisabled,
                        ]}
                        onPress={() => handleBooking(schedule.id)}
                        accessibilityRole='button'
                        accessibilityLabel={`Solicitar horário de ${schedule.start} para ${schedule.end}`}
                      >
                        <Text
                          style={[
                            styles.bookButtonText,
                            booked && styles.bookButtonTextDisabled,
                          ]}
                        >
                          {booked ? 'Indisponível' : 'Agendar'}
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                );
              })}

              {visibleSchedules.length === 0 && (
                <View style={styles.emptyState}>
                  <Text style={styles.emptyTitle}>
                    Nenhum horário disponível
                  </Text>
                  <Text style={styles.emptyDescription}>
                    Confira novamente mais tarde.
                  </Text>
                </View>
              )}

              <View style={styles.legend}>
                <View style={styles.legendItem}>
                  <View style={styles.legendAvailable} />
                  <Text style={styles.legendText}>Disponível</Text>
                </View>
                <View style={styles.legendItem}>
                  <View style={styles.legendBooked} />
                  <Text style={styles.legendText}>Ocupado</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>

      <BottomNavigation activeTab='monitores' />
    </View>
  );
}
