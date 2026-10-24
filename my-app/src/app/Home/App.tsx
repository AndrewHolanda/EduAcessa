import React, { useState } from 'react';
import {
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styles, COLORS } from './style';
import { SafeAreaView } from 'react-native-safe-area-context';

type TabKey = 'inicio' | 'aulas' | 'monitores' | 'atividades' | 'perfil';

const schools = [
  'EE Senador João Bosco',
  'EE Prof. Ruth Prestes',
  'EE Sagrada Família',
];

export default function Home() {
  const [activeTab, setActiveTab] = useState<TabKey>('inicio');
  const [schoolIndex, setSchoolIndex] = useState(0);
  const [completedLessons, setCompletedLessons] = useState([
    true,
    true,
    false,
    false,
  ]);

  const toggleLesson = (index: number) => {
    setCompletedLessons((current) =>
      current.map((completed, lessonIndex) =>
        lessonIndex === index ? !completed : completed
      )
    );
  };

  const renderHeader = () => (
    <View style={styles.header}>
      <View style={styles.headerTop}>
        <View style={styles.brand}>
          <View style={styles.logoMark}>
            <Text style={styles.logoText}>ē</Text>
            <View style={styles.logoDot} />
          </View>
          <Text style={styles.brandName}>EduAcessa</Text>
        </View>

        <TouchableOpacity
          accessibilityRole='button'
          accessibilityLabel='Alterar escola'
          style={styles.schoolSelector}
          onPress={() =>
            setSchoolIndex((index) => (index + 1) % schools.length)
          }
        >
          <Ionicons name='school-outline' size={15} color={COLORS.white} />
          <Text style={styles.schoolText} numberOfLines={1}>
            {schools[schoolIndex]}
          </Text>
          <Ionicons name='chevron-down' size={14} color={COLORS.white} />
        </TouchableOpacity>
      </View>

      <Text style={styles.greeting}>Olá, João!</Text>
      <Text style={styles.headerTitle}>Continue seus estudos hoje</Text>
      <Text style={styles.headerSubtitle}>
        Um passo de cada vez. Você consegue!
      </Text>
    </View>
  );

  const renderActivityCard = () => (
    <View style={styles.card}>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Painel de atividades</Text>
        <View style={styles.todayPill}>
          <Text style={styles.todayText}>Hoje</Text>
        </View>
      </View>

      <TouchableOpacity
        style={styles.activityRow}
        onPress={() => setActiveTab('aulas')}
      >
        <View style={[styles.activityIcon, { backgroundColor: '#E8F0FF' }]}>
          <Ionicons name='calculator-outline' size={21} color={COLORS.blue} />
        </View>

        <View style={styles.activityContent}>
          <Text style={styles.activityTitle}>Matemática (9º ano)</Text>
          <Text style={styles.activityDescription}>
            Continue aprendendo sobre frações
          </Text>
        </View>

        <Ionicons name='chevron-forward' size={18} color={COLORS.muted} />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.activityRow}
        onPress={() => setActiveTab('atividades')}
      >
        <View style={[styles.activityIcon, { backgroundColor: '#F3E8FF' }]}>
          <Ionicons name='document-text-outline' size={21} color='#7C3AED' />
        </View>

        <View style={styles.activityContent}>
          <Text style={styles.activityTitle}>Atividade de Português</Text>
          <Text style={styles.activityDescription}>
            Interpretação de texto · Pendente
          </Text>
        </View>

        <View style={styles.pendingDot} />
      </TouchableOpacity>
    </View>
  );

  const renderProgressCard = () => (
    <View style={styles.card}>
      <View style={styles.sectionHeader}>
        <View>
          <Text style={styles.sectionTitle}>Seu progresso</Text>
          <Text style={styles.mutedText}>Você está indo muito bem!</Text>
        </View>

        <View style={styles.progressIcon}>
          <Ionicons name='trending-up' size={21} color={COLORS.blue} />
        </View>
      </View>

      <View style={styles.progressNumberRow}>
        <Text style={styles.progressNumber}>72%</Text>
        <Text style={styles.progressCaption}>da trilha concluída</Text>
      </View>

      <View style={styles.progressTrack}>
        <View style={styles.progressFill} />
      </View>

      <Text style={styles.progressFootnote}>Trilha atual: Frações</Text>

      <TouchableOpacity
        style={styles.tutoringBanner}
        onPress={() => setActiveTab('monitores')}
      >
        <View style={styles.tutoringIcon}>
          <Ionicons name='calendar-outline' size={20} color={COLORS.white} />
        </View>

        <View style={styles.tutoringTextWrap}>
          <Text style={styles.tutoringCaption}>
            Próxima monitoria com Cláudio
          </Text>
          <Text style={styles.tutoringTitle}>
            Monitoria: terça-feira, 15:00
          </Text>
        </View>

        <Text style={styles.viewLink}>Ver</Text>
      </TouchableOpacity>
    </View>
  );

  const renderLearningTrail = () => {
    const lessons = [
      'O que é fração',
      'Somando frações',
      'Subtraindo frações',
      'Desafio final',
    ];

    return (
      <View style={styles.card}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Trilha: Frações do zero</Text>
          <Text style={styles.mutedText}>4 etapas</Text>
        </View>

        <Text style={styles.trailDescription}>
          Aprenda no seu ritmo e acesse as aulas que você salvou, mesmo sem
          internet.
        </Text>

        {lessons.map((lesson, index) => {
          const completed = completedLessons[index];

          return (
            <TouchableOpacity
              key={lesson}
              style={styles.lessonRow}
              onPress={() => toggleLesson(index)}
              accessibilityRole='checkbox'
              accessibilityState={{ checked: completed }}
            >
              <View
                style={[
                  styles.lessonNumber,
                  completed && styles.lessonNumberCompleted,
                ]}
              >
                {completed ? (
                  <Ionicons name='checkmark' size={16} color={COLORS.white} />
                ) : (
                  <Text style={styles.lessonNumberText}>{index + 1}</Text>
                )}
              </View>

              <Text
                style={[
                  styles.lessonTitle,
                  completed && styles.lessonTitleCompleted,
                ]}
              >
                {index + 1}. {lesson}
              </Text>

              <Ionicons
                name={completed ? 'checkmark-circle' : 'ellipse-outline'}
                size={20}
                color={completed ? COLORS.green : COLORS.muted}
              />
            </TouchableOpacity>
          );
        })}

        <TouchableOpacity
          style={styles.primaryButton}
          onPress={() => setActiveTab('aulas')}
        >
          <Text style={styles.primaryButtonText}>Continuar estudando</Text>
          <Ionicons name='arrow-forward' size={17} color={COLORS.white} />
        </TouchableOpacity>
      </View>
    );
  };

  const renderHome = () => (
    <>
      {renderHeader()}

      <View style={styles.content}>
        {renderActivityCard()}
        {renderProgressCard()}
        {renderLearningTrail()}

        <View style={styles.offlineNote}>
          <Ionicons
            name='cloud-download-outline'
            size={19}
            color={COLORS.blue}
          />
          <Text style={styles.offlineNoteText}>
            Dica: salve suas aulas com Wi-Fi para estudar quando estiver sem
            internet.
          </Text>
        </View>
      </View>
    </>
  );

  const renderOtherTab = () => {
    const content: Record<
      Exclude<TabKey, 'inicio'>,
      {
        title: string;
        subtitle: string;
        icon: keyof typeof Ionicons.glyphMap;
      }
    > = {
      aulas: {
        title: 'Trilhas de estudo',
        subtitle:
          'Explore conteúdos de Matemática, Português e outras disciplinas.',
        icon: 'book-outline',
      },
      monitores: {
        title: 'Monitores voluntários',
        subtitle:
          'Encontre apoio de estudantes universitários e acompanhe suas monitorias.',
        icon: 'people-outline',
      },
      atividades: {
        title: 'Minhas atividades',
        subtitle:
          'Acompanhe as tarefas pendentes e veja o que você já concluiu.',
        icon: 'clipboard-outline',
      },
      perfil: {
        title: 'Meu perfil',
        subtitle: 'Confira seus dados de estudante e suas preferências.',
        icon: 'person-circle-outline',
      },
    };

    const selected = content[activeTab as Exclude<TabKey, 'inicio'>];

    return (
      <>
        <View style={styles.simpleHeader}>
          <Text style={styles.simpleHeaderTitle}>{selected.title}</Text>
          <Text style={styles.simpleHeaderSubtitle}>{selected.subtitle}</Text>
        </View>

        <View style={styles.emptyState}>
          <View style={styles.emptyStateIcon}>
            <Ionicons name={selected.icon} size={38} color={COLORS.blue} />
          </View>

          <Text style={styles.emptyStateTitle}>{selected.title}</Text>
          <Text style={styles.emptyStateText}>
            Esta área está preparada para receber a tela correspondente do
            EduAcessa.
          </Text>

          <TouchableOpacity
            style={styles.primaryButton}
            onPress={() => setActiveTab('inicio')}
          >
            <Text style={styles.primaryButtonText}>Voltar ao início</Text>
          </TouchableOpacity>
        </View>
      </>
    );
  };

  const tabs: {
    key: TabKey;
    label: string;
    icon: keyof typeof Ionicons.glyphMap;
  }[] = [
    { key: 'inicio', label: 'Início', icon: 'home-outline' },
    { key: 'aulas', label: 'Aulas', icon: 'book-outline' },
    {
      key: 'monitores',
      label: 'Monitores',
      icon: 'people-outline',
    },
    {
      key: 'atividades',
      label: 'Atividades',
      icon: 'clipboard-outline',
    },
    { key: 'perfil', label: 'Perfil', icon: 'person-outline' },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle='light-content' backgroundColor={COLORS.blue} />

      <View style={styles.screen}>
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {activeTab === 'inicio' ? renderHome() : renderOtherTab()}
        </ScrollView>

        <View style={styles.bottomNav}>
          {tabs.map((tab) => {
            const selected = activeTab === tab.key;

            return (
              <TouchableOpacity
                key={tab.key}
                style={styles.navItem}
                onPress={() => setActiveTab(tab.key)}
                accessibilityRole='button'
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
      </View>
    </SafeAreaView>
  );
}
