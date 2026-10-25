import { StyleSheet } from 'react-native';

export const COLORS = {
  blue: '#1E56B2',
  blueDark: '#174590',
  white: '#FFFFFF',
  background: '#F7F9FC',
  text: '#172B4D',
  secondaryText: '#64748B',
  muted: '#94A3B8',
  border: '#E8EDF3',
  green: '#15803D',
};

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: COLORS.background,
  },

  scrollView: {
    flex: 1,
  },

  scrollContent: {
    flexGrow: 1,
    paddingBottom: 24,
  },

  content: {
    width: '100%',
    maxWidth: 720,
    alignSelf: 'center',
    paddingHorizontal: 20,
    paddingTop: 24,
  },

  contentWide: {
    maxWidth: 1100,
    paddingHorizontal: 32,
    paddingTop: 32,
  },

  // Cabeçalho
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 28,
    gap: 16,
  },

  headerTextContainer: {
    flex: 1,
  },

  pageTitle: {
    color: COLORS.text,
    fontSize: 28,
    fontWeight: '800',
    letterSpacing: -0.5,
  },

  pageSubtitle: {
    color: COLORS.secondaryText,
    fontSize: 14,
    lineHeight: 21,
    marginTop: 7,
  },

  headerIcon: {
    width: 54,
    height: 54,
    borderRadius: 16,
    backgroundColor: '#E8F0FE',
    alignItems: 'center',
    justifyContent: 'center',
  },

  // Títulos das seções
  summarySection: {
    marginBottom: 30,
  },

  sectionTitle: {
    color: COLORS.text,
    fontSize: 19,
    fontWeight: '700',
    marginBottom: 16,
  },

  // Cartões de resumo
  summaryGrid: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 14,
  },

  summaryCard: {
    flex: 1,
    minWidth: 0,
    backgroundColor: COLORS.white,
    borderRadius: 18,
    padding: 16,
    borderWidth: 1,
    borderColor: COLORS.border,
  },

  summaryCardBlue: {
    borderTopWidth: 3,
    borderTopColor: COLORS.blue,
  },

  summaryCardGreen: {
    borderTopWidth: 3,
    borderTopColor: '#16A34A',
  },

  summaryIconBlue: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: '#E8F0FE',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 14,
  },

  summaryIconGreen: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: '#DCFCE7',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 14,
  },

  summaryNumber: {
    color: COLORS.text,
    fontSize: 28,
    fontWeight: '800',
  },

  summaryLabel: {
    color: COLORS.secondaryText,
    fontSize: 12,
    lineHeight: 18,
    marginTop: 5,
  },

  progressOverview: {
    backgroundColor: COLORS.white,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: COLORS.border,
    padding: 17,
  },

  progressOverviewHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 12,
  },

  progressOverviewText: {
    flex: 1,
  },

  progressOverviewTitle: {
    color: COLORS.text,
    fontSize: 14,
    fontWeight: '700',
  },

  progressOverviewSubtitle: {
    color: COLORS.secondaryText,
    fontSize: 12,
    lineHeight: 18,
    marginTop: 5,
  },

  progressOverviewCount: {
    color: COLORS.blue,
    fontSize: 24,
    fontWeight: '800',
  },

  // Lista de atividades
  activitiesSection: {
    marginBottom: 24,
  },

  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 8,
  },

  activityCount: {
    color: COLORS.secondaryText,
    fontSize: 12,
    marginBottom: 16,
  },

  filtersScroll: {
    marginBottom: 20,
    flexGrow: 0,
  },

  filtersContainer: {
    flexDirection: 'row',
    gap: 9,
    paddingRight: 8,
  },

  filterButton: {
    minHeight: 40,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 17,
    borderRadius: 22,
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: COLORS.border,
  },

  filterButtonActive: {
    backgroundColor: COLORS.blue,
    borderColor: COLORS.blue,
  },

  filterText: {
    color: COLORS.secondaryText,
    fontSize: 12,
    fontWeight: '600',
  },

  filterTextActive: {
    color: COLORS.white,
    fontWeight: '700',
  },

  activitiesList: {
    gap: 15,
  },

  activitiesListWide: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'stretch',
    justifyContent: 'space-between',
  },

  activityCard: {
    width: '100%',
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 18,
    padding: 17,
  },

  activityCardWide: {
    width: '48.5%',
    alignSelf: 'flex-start',
  },

  activityCardHeader: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 11,
  },

  activityIcon: {
    width: 46,
    height: 46,
    borderRadius: 13,
    alignItems: 'center',
    justifyContent: 'center',
  },

  activityTitleContainer: {
    flex: 1,
    minWidth: 0,
    paddingTop: 2,
  },

  activitySubject: {
    color: COLORS.secondaryText,
    fontSize: 11,
    fontWeight: '600',
    marginBottom: 5,
  },

  activityTitle: {
    color: COLORS.text,
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 20,
  },

  statusBadge: {
    alignSelf: 'flex-start',
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 8,
    maxWidth: 115,
  },

  statusText: {
    fontSize: 10,
    fontWeight: '700',
    textAlign: 'center',
  },

  activityDescription: {
    color: COLORS.secondaryText,
    fontSize: 12,
    lineHeight: 19,
    marginTop: 17,
    marginBottom: 19,
  },

  activityProgressHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 9,
  },

  activityProgressLabel: {
    color: COLORS.secondaryText,
    fontSize: 11,
    fontWeight: '600',
  },

  activityProgressValue: {
    color: COLORS.text,
    fontSize: 12,
    fontWeight: '700',
  },

  progressTrack: {
    height: 7,
    width: '100%',
    backgroundColor: '#E9EEF5',
    borderRadius: 10,
    overflow: 'hidden',
  },

  progressFill: {
    height: '100%',
    borderRadius: 10,
  },

  activityFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 8,
    marginTop: 18,
    paddingTop: 14,
    borderTopWidth: 1,
    borderTopColor: '#F0F3F7',
  },

  dueDateContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 7,
  },

  dueDateText: {
    flexShrink: 1,
    color: COLORS.secondaryText,
    fontSize: 11,
    lineHeight: 16,
  },

  // Estado vazio
  emptyState: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 18,
    paddingHorizontal: 24,
    paddingVertical: 38,
  },

  emptyStateIcon: {
    width: 58,
    height: 58,
    borderRadius: 18,
    backgroundColor: '#F1F5F9',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },

  emptyStateTitle: {
    color: COLORS.text,
    fontSize: 15,
    fontWeight: '700',
    textAlign: 'center',
  },

  emptyStateDescription: {
    color: COLORS.secondaryText,
    fontSize: 12,
    lineHeight: 19,
    textAlign: 'center',
    marginTop: 8,
  },

  footerMessage: {
    color: COLORS.muted,
    fontSize: 12,
    lineHeight: 19,
    textAlign: 'center',
    paddingVertical: 8,
  },
});
