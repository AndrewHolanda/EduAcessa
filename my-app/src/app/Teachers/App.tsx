import React, { useMemo, useState } from 'react';
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';

import BottomNavigation from '../../components/BottomNavigation';
import { styles, COLORS } from './style';

type Period = 'Manhã' | 'Tarde' | 'Noite';

type Monitor = {
  id: string;
  name: string;
  initials: string;
  institution: string;
  subjects: string[];
  description: string;
  color: string;
  availablePeriods: Period[];
};

const monitors: Monitor[] = [
  {
    id: '1',
    name: 'Ana Oliveira',
    initials: 'AO',
    institution: 'Universidade Federal do Amazonas',
    subjects: ['Matemática', 'Física'],
    description:
      'Auxilia alunos na compreensão de conteúdos e na resolução de exercícios.',
    color: '#E4EDFF',
    availablePeriods: ['Tarde', 'Noite'],
  },
  {
    id: '2',
    name: 'Lucas Ferreira',
    initials: 'LF',
    institution: 'Universidade do Estado do Amazonas',
    subjects: ['Português', 'Redação'],
    description:
      'Ajuda os alunos a desenvolver a leitura, a escrita e a interpretação de textos.',
    color: '#E3F5EA',
    availablePeriods: ['Manhã', 'Tarde'],
  },
  {
    id: '3',
    name: 'Mariana Santos',
    initials: 'MS',
    institution: 'Universidade Federal do Amazonas',
    subjects: ['Biologia', 'Ciências'],
    description:
      'Compartilha conhecimentos de ciências e incentiva a curiosidade dos estudantes.',
    color: '#FCEBD9',
    availablePeriods: ['Manhã', 'Noite'],
  },
  {
    id: '4',
    name: 'Gabriel Costa',
    initials: 'GC',
    institution: 'Universidade do Estado do Amazonas',
    subjects: ['História', 'Geografia'],
    description:
      'Apoia os alunos na compreensão dos acontecimentos históricos e do espaço geográfico.',
    color: '#F0E7FF',
    availablePeriods: ['Tarde', 'Noite'],
  },
  {
    id: '5',
    name: 'Beatriz Lima',
    initials: 'BL',
    institution: 'Universidade Federal do Amazonas',
    subjects: ['Matemática', 'Química'],
    description:
      'Ajuda a revisar conteúdos e a desenvolver estratégias para resolver problemas.',
    color: '#FBE5EE',
    availablePeriods: ['Manhã', 'Tarde'],
  },
  {
    id: '6',
    name: 'Rafael Souza',
    initials: 'RS',
    institution: 'Universidade do Estado do Amazonas',
    subjects: ['Inglês', 'Português'],
    description:
      'Auxilia na aprendizagem de idiomas, vocabulário e interpretação de textos.',
    color: '#DFF3F5',
    availablePeriods: ['Noite'],
  },
];

export default function MonitorsScreen() {
  const { width } = useWindowDimensions();

  const [search, setSearch] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('Todas');
  const [selectedPeriod, setSelectedPeriod] = useState<'Todos' | Period>(
    'Todos'
  );

  const columns = width < 650 ? 1 : width < 1100 ? 2 : 3;

  const cardWidth = columns === 1 ? '100%' : columns === 2 ? '48%' : '31.5%';

  const subjects = useMemo(
    () => [
      'Todas',
      ...Array.from(
        new Set(monitors.flatMap((monitor) => monitor.subjects))
      ).sort((a, b) => a.localeCompare(b, 'pt-BR')),
    ],
    []
  );

  const periods: ('Todos' | Period)[] = ['Todos', 'Manhã', 'Tarde', 'Noite'];

  const filteredMonitors = useMemo(() => {
    const normalizedSearch = search.trim().toLocaleLowerCase('pt-BR');

    return monitors.filter((monitor) => {
      const matchesName = monitor.name
        .toLocaleLowerCase('pt-BR')
        .includes(normalizedSearch);

      const matchesSubject =
        selectedSubject === 'Todas' ||
        monitor.subjects.includes(selectedSubject);

      const matchesPeriod =
        selectedPeriod === 'Todos' ||
        monitor.availablePeriods.includes(selectedPeriod);

      return matchesName && matchesSubject && matchesPeriod;
    });
  }, [search, selectedSubject, selectedPeriod]);

  const clearFilters = () => {
    setSearch('');
    setSelectedSubject('Todas');
    setSelectedPeriod('Todos');
  };

  return (
    <View style={styles.screen}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps='handled'
      >
        <Text style={styles.pageTitle}>Monitores</Text>

        <Text style={styles.pageSubtitle}>
          Encontre monitores voluntários e descubra as disciplinas e os horários
          em que eles podem ajudar você.
        </Text>

        {/* Busca por nome */}
        <View style={styles.searchContainer}>
          <Text style={styles.searchSymbol}>⌕</Text>

          <TextInput
            style={styles.searchInput}
            placeholder='Buscar monitor pelo nome...'
            placeholderTextColor={COLORS.muted}
            value={search}
            onChangeText={setSearch}
            autoCapitalize='words'
            accessibilityLabel='Buscar monitor pelo nome'
          />

          {search.length > 0 && (
            <TouchableOpacity
              onPress={() => setSearch('')}
              accessibilityRole='button'
              accessibilityLabel='Limpar busca'
              style={styles.clearButton}
            >
              <Text style={styles.clearButtonText}>×</Text>
            </TouchableOpacity>
          )}
        </View>

        {/* Filtro por disciplina */}
        <Text style={styles.filterTitle}>Filtrar por disciplina</Text>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.filtersScroll}
          contentContainerStyle={styles.filtersContent}
        >
          {subjects.map((subject) => {
            const isSelected = selectedSubject === subject;

            return (
              <TouchableOpacity
                key={subject}
                style={[
                  styles.filterChip,
                  isSelected && styles.filterChipSelected,
                ]}
                onPress={() => setSelectedSubject(subject)}
                accessibilityRole='button'
                accessibilityState={{ selected: isSelected }}
              >
                <Text
                  style={[
                    styles.filterChipText,
                    isSelected && styles.filterChipTextSelected,
                  ]}
                >
                  {subject}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>

        {/* Filtro por horário */}
        <Text style={styles.filterTitle}>Filtrar por horário</Text>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.filtersScroll}
          contentContainerStyle={styles.filtersContent}
        >
          {periods.map((period) => {
            const isSelected = selectedPeriod === period;

            return (
              <TouchableOpacity
                key={period}
                style={[
                  styles.filterChip,
                  isSelected && styles.filterChipSelected,
                ]}
                onPress={() => setSelectedPeriod(period)}
                accessibilityRole='button'
                accessibilityState={{ selected: isSelected }}
              >
                <Text
                  style={[
                    styles.filterChipText,
                    isSelected && styles.filterChipTextSelected,
                  ]}
                >
                  {period === 'Todos' ? 'Todos os horários' : period}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>

        {/* Resultados */}
        <View style={styles.resultsHeader}>
          <Text style={styles.resultsTitle}>Monitores disponíveis</Text>

          <Text style={styles.resultsCount}>
            {filteredMonitors.length}{' '}
            {filteredMonitors.length === 1 ? 'monitor' : 'monitores'}
          </Text>
        </View>

        <View style={styles.cardsContainer}>
          {filteredMonitors.map((monitor) => (
            <View
              key={monitor.id}
              style={[styles.monitorCard, { width: cardWidth }]}
            >
              <View style={styles.cardHeader}>
                <View
                  style={[styles.avatar, { backgroundColor: monitor.color }]}
                >
                  <Text style={styles.avatarText}>{monitor.initials}</Text>
                </View>

                <View style={styles.monitorIdentity}>
                  <Text style={styles.monitorName}>{monitor.name}</Text>

                  <Text style={styles.monitorRole}>Monitor voluntário</Text>
                </View>
              </View>

              <Text style={styles.institution}>{monitor.institution}</Text>

              <Text style={styles.subjectsLabel}>Disciplinas que ministra</Text>

              <View style={styles.subjectsContainer}>
                {monitor.subjects.map((subject) => (
                  <View key={subject} style={styles.subjectTag}>
                    <Text style={styles.subjectTagText}>{subject}</Text>
                  </View>
                ))}
              </View>

              {/* Períodos disponíveis */}
              <Text style={styles.subjectsLabel}>Horários disponíveis</Text>

              <View style={styles.subjectsContainer}>
                {monitor.availablePeriods.map((period) => (
                  <View key={period} style={styles.periodTag}>
                    <Text style={styles.periodTagText}>
                      {period === 'Manhã'
                        ? '☀ Manhã'
                        : period === 'Tarde'
                          ? '◷ Tarde'
                          : '☾ Noite'}
                    </Text>
                  </View>
                ))}
              </View>

              <Text style={styles.description}>{monitor.description}</Text>

              <TouchableOpacity
                style={styles.profileButton}
                onPress={() => {
                  // A navegação para o perfil público será conectada depois.
                }}
                accessibilityRole='button'
                accessibilityLabel={`Ver perfil de ${monitor.name}`}
              >
                <Text style={styles.profileButtonText}>
                  Ver perfil e horários
                </Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>

        {/* Nenhum resultado */}
        {filteredMonitors.length === 0 && (
          <View style={styles.emptyState}>
            <Text style={styles.emptyTitle}>Nenhum monitor encontrado</Text>

            <Text style={styles.emptyDescription}>
              Tente outro nome, selecione outra disciplina ou escolha outro
              horário.
            </Text>

            <TouchableOpacity
              style={styles.resetButton}
              onPress={clearFilters}
              accessibilityRole='button'
            >
              <Text style={styles.resetButtonText}>Limpar filtros</Text>
            </TouchableOpacity>
          </View>
        )}
      </ScrollView>

      <BottomNavigation activeTab='monitores' />
    </View>
  );
}
