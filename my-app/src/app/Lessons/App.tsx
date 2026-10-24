import React, { useMemo, useState } from 'react';
import {
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, styles } from './style';

type TabKey = 'inicio' | 'aulas' | 'monitores' | 'atividades' | 'perfil';

type Lesson = {
  id: number;
  title: string;
  subject: string;
  description: string;
  duration: string;
  icon: keyof typeof Ionicons.glyphMap;
  color: string;
  progress: number;
  saved: boolean;
};

type Props = {
  onNavigate?: (tab: TabKey) => void;
};

const LESSONS: Lesson[] = [
  {
    id: 1,
    title: 'Frações e números',
    subject: 'Matemática',
    description: 'Aprenda frações com exemplos práticos.',
    duration: '20 min',
    icon: 'calculator-outline',
    color: '#E5EDFF',
    progress: 65,
    saved: true,
  },
  {
    id: 2,
    title: 'Interpretação de texto',
    subject: 'Português',
    description: 'Desenvolva sua leitura e compreensão.',
    duration: '15 min',
    icon: 'book-outline',
    color: '#FBE8D8',
    progress: 30,
    saved: false,
  },
  {
    id: 3,
    title: 'Sistema solar',
    subject: 'Ciências',
    description: 'Explore os planetas e o espaço.',
    duration: '25 min',
    icon: 'planet-outline',
    color: '#E4F5E9',
    progress: 0,
    saved: true,
  },
  {
    id: 4,
    title: 'Brasil: regiões e estados',
    subject: 'Geografia',
    description: 'Conheça as regiões brasileiras.',
    duration: '18 min',
    icon: 'earth-outline',
    color: '#F0E7FF',
    progress: 0,
    saved: false,
  },
];

const SUBJECTS = ['Todas', 'Matemática', 'Português', 'Ciências', 'Geografia'];

const TABS: {
  key: TabKey;
  label: string;
  icon: keyof typeof Ionicons.glyphMap;
}[] = [
  { key: 'inicio', label: 'Início', icon: 'home-outline' },
  { key: 'aulas', label: 'Aulas', icon: 'book-outline' },
  { key: 'monitores', label: 'Monitores', icon: 'people-outline' },
  { key: 'atividades', label: 'Atividades', icon: 'clipboard-outline' },
  { key: 'perfil', label: 'Perfil', icon: 'person-outline' },
];

export default function Lessons({ onNavigate }: Props) {
  const { width } = useWindowDimensions();

  const [search, setSearch] = useState('');
  const [subject, setSubject] = useState('Todas');
  const [savedOnly, setSavedOnly] = useState(false);
  const [savedIds, setSavedIds] = useState<number[]>(
    LESSONS.filter((lesson) => lesson.saved).map((lesson) => lesson.id)
  );

  const isWide = width >= 760;

  const filteredLessons = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase();

    return LESSONS.filter((lesson) => {
      const matchesSearch =
        lesson.title.toLowerCase().includes(normalizedSearch) ||
        lesson.subject.toLowerCase().includes(normalizedSearch) ||
        lesson.description.toLowerCase().includes(normalizedSearch);

      const matchesSubject = subject === 'Todas' || lesson.subject === subject;

      const matchesSaved = !savedOnly || savedIds.includes(lesson.id);

      return matchesSearch && matchesSubject && matchesSaved;
    });
  }, [search, subject, savedOnly, savedIds]);

  const toggleSaved = (lessonId: number) => {
    setSavedIds((current) =>
      current.includes(lessonId)
        ? current.filter((id) => id !== lessonId)
        : [...current, lessonId]
    );
  };

  const renderLesson = (lesson: Lesson) => {
    const isSaved = savedIds.includes(lesson.id);

    return (
      <View
        key={lesson.id}
        style={[styles.lessonCard, isWide && styles.lessonCardWide]}
      >
        <View style={styles.cardTop}>
          <View style={[styles.lessonIcon, { backgroundColor: lesson.color }]}>
            <Ionicons name={lesson.icon} size={27} color={COLORS.blue} />
          </View>

          <TouchableOpacity
            accessibilityRole='button'
            accessibilityLabel={isSaved ? 'Remover aula salva' : 'Salvar aula'}
            onPress={() => toggleSaved(lesson.id)}
            style={styles.bookmarkButton}
          >
            <Ionicons
              name={isSaved ? 'bookmark' : 'bookmark-outline'}
              size={22}
              color={COLORS.blue}
            />
          </TouchableOpacity>
        </View>

        <Text style={styles.subjectLabel}>{lesson.subject}</Text>
        <Text style={styles.lessonTitle}>{lesson.title}</Text>
        <Text style={styles.lessonDescription}>{lesson.description}</Text>

        <View style={styles.durationRow}>
          <Ionicons name='time-outline' size={16} color={COLORS.muted} />
          <Text style={styles.durationText}>{lesson.duration}</Text>
        </View>

        {lesson.progress > 0 && (
          <View style={styles.progressContainer}>
            <View style={styles.progressTrack}>
              <View
                style={[styles.progressFill, { width: `${lesson.progress}%` }]}
              />
            </View>
            <Text style={styles.progressText}>
              {lesson.progress}% concluído
            </Text>
          </View>
        )}

        <TouchableOpacity
          style={styles.openLessonButton}
          activeOpacity={0.8}
          onPress={() => {
            // Conecte aqui a navegação para o conteúdo da aula.
          }}
        >
          <Text style={styles.openLessonText}>
            {lesson.progress > 0 ? 'Continuar aula' : 'Começar aula'}
          </Text>
          <Ionicons name='arrow-forward' size={17} color={COLORS.white} />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.safeArea} edges={['top', 'left', 'right']}>
      <StatusBar barStyle='light-content' backgroundColor={COLORS.blue} />

      <View style={styles.page}>
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps='handled'
        >
          <View style={styles.content}>
            <View style={styles.header}>
              <View style={styles.headerTextContainer}>
                <Text style={styles.greeting}>SEU ESPAÇO DE APRENDIZADO</Text>
                <Text style={styles.pageTitle}>Minhas aulas</Text>
                <Text style={styles.subtitle}>
                  Aprenda no seu ritmo, de onde estiver.
                </Text>
              </View>

              <View style={styles.headerIcon}>
                <Ionicons name='school-outline' size={28} color={COLORS.blue} />
              </View>
            </View>

            <View style={styles.summaryCard}>
              <View style={styles.summaryIcon}>
                <Ionicons name='book' size={25} color={COLORS.white} />
              </View>

              <View style={styles.summaryTextContainer}>
                <Text style={styles.summaryTitle}>Continue aprendendo!</Text>
                <Text style={styles.summaryDescription}>
                  Você tem {LESSONS.length} aulas disponíveis para estudar.
                </Text>
              </View>
            </View>

            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Explore os conteúdos</Text>
            </View>

            <View style={styles.searchContainer}>
              <Ionicons name='search-outline' size={21} color={COLORS.muted} />
              <TextInput
                style={styles.searchInput}
                placeholder='Buscar aula ou matéria...'
                placeholderTextColor={COLORS.muted}
                value={search}
                onChangeText={setSearch}
                returnKeyType='search'
                accessibilityLabel='Buscar aulas'
              />

              {search.length > 0 && (
                <TouchableOpacity
                  onPress={() => setSearch('')}
                  accessibilityRole='button'
                  accessibilityLabel='Limpar busca'
                >
                  <Ionicons
                    name='close-circle'
                    size={20}
                    color={COLORS.muted}
                  />
                </TouchableOpacity>
              )}
            </View>

            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.filters}
            >
              {SUBJECTS.map((item) => {
                const selected = subject === item;

                return (
                  <TouchableOpacity
                    key={item}
                    onPress={() => setSubject(item)}
                    style={[
                      styles.filterButton,
                      selected && styles.filterButtonActive,
                    ]}
                  >
                    <Text
                      style={[
                        styles.filterText,
                        selected && styles.filterTextActive,
                      ]}
                    >
                      {item}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </ScrollView>

            <TouchableOpacity
              style={[
                styles.savedFilter,
                savedOnly && styles.savedFilterActive,
              ]}
              onPress={() => setSavedOnly((current) => !current)}
              accessibilityRole='button'
            >
              <Ionicons
                name={savedOnly ? 'bookmark' : 'bookmark-outline'}
                size={19}
                color={COLORS.blue}
              />
              <Text style={styles.savedFilterText}>
                {savedOnly ? 'Mostrando aulas salvas' : 'Ver aulas salvas'}
              </Text>
              <Ionicons
                name={savedOnly ? 'checkmark-circle' : 'chevron-forward'}
                size={18}
                color={COLORS.blue}
              />
            </TouchableOpacity>

            <View style={styles.listHeader}>
              <Text style={styles.sectionTitle}>
                {savedOnly ? 'Aulas salvas' : 'Todas as aulas'}
              </Text>
              <Text style={styles.resultCount}>
                {filteredLessons.length}{' '}
                {filteredLessons.length === 1 ? 'aula' : 'aulas'}
              </Text>
            </View>

            <View style={styles.lessonList}>
              {filteredLessons.length > 0 ? (
                filteredLessons.map(renderLesson)
              ) : (
                <View style={styles.emptyState}>
                  <Ionicons
                    name='search-outline'
                    size={38}
                    color={COLORS.muted}
                  />
                  <Text style={styles.emptyTitle}>Nenhuma aula encontrada</Text>
                  <Text style={styles.emptyDescription}>
                    Experimente mudar a busca ou selecionar outra matéria.
                  </Text>
                </View>
              )}
            </View>

            <View style={styles.offlineCard}>
              <Ionicons
                name='cloud-download-outline'
                size={27}
                color={COLORS.blue}
              />
              <View style={styles.offlineTextContainer}>
                <Text style={styles.offlineTitle}>
                  Estude mesmo sem internet
                </Text>
                <Text style={styles.offlineDescription}>
                  O suporte para baixar aulas e acessá-las offline poderá ser
                  conectado posteriormente.
                </Text>
              </View>
            </View>

            <Text style={styles.footerText}>
              EduAcessa • Aprender transforma o futuro.
            </Text>
          </View>
        </ScrollView>

        <View style={styles.bottomNav}>
          {TABS.map((tab) => {
            const selected = tab.key === 'aulas';

            return (
              <TouchableOpacity
                key={tab.key}
                style={styles.navItem}
                onPress={() => onNavigate?.(tab.key)}
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
                  numberOfLines={1}
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
