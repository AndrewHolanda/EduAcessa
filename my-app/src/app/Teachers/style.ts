import { StyleSheet } from 'react-native';

export const COLORS = {
  primary: '#1E56B2',
  primaryDark: '#17458F',
  background: '#F5F7FB',
  surface: '#FFFFFF',
  text: '#202938',
  muted: '#697586',
  border: '#E1E7EF',
  chipBackground: '#EAF1FF',
  periodBackground: '#E5F7EC',
  periodText: '#187747',
};

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: COLORS.background,
  },

  scrollView: {
    flex: 1,
  },

  content: {
    width: '100%',
    maxWidth: 1200,
    alignSelf: 'center',
    paddingHorizontal: 18,
    paddingTop: 24,
    paddingBottom: 32,
  },

  pageTitle: {
    fontSize: 28,
    fontWeight: '700',
    color: COLORS.text,
    marginBottom: 8,
  },

  pageSubtitle: {
    fontSize: 15,
    lineHeight: 23,
    color: COLORS.muted,
    marginBottom: 22,
  },

  searchContainer: {
    minHeight: 50,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.surface,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 12,
    paddingHorizontal: 14,
    marginBottom: 22,
  },

  searchSymbol: {
    fontSize: 25,
    color: COLORS.muted,
    marginRight: 10,
  },

  searchInput: {
    flex: 1,
    minWidth: 0,
    minHeight: 48,
    fontSize: 14,
    color: COLORS.text,
    paddingVertical: 10,
    outlineStyle: 'none',
  } as any,

  clearButton: {
    width: 32,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
  },

  clearButtonText: {
    fontSize: 25,
    color: COLORS.muted,
  },

  filterTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: COLORS.text,
    marginBottom: 10,
  },

  filtersScroll: {
    flexGrow: 0,
    marginBottom: 24,
  },

  filtersContent: {
    flexDirection: 'row',
    gap: 8,
    paddingRight: 8,
  },

  filterChip: {
    minHeight: 36,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 14,
    paddingVertical: 8,
    backgroundColor: COLORS.surface,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 20,
  },

  filterChipSelected: {
    backgroundColor: COLORS.primary,
    borderColor: COLORS.primary,
  },

  filterChipText: {
    fontSize: 13,
    fontWeight: '600',
    color: COLORS.text,
  },

  filterChipTextSelected: {
    color: '#FFFFFF',
  },

  resultsHeader: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 8,
    marginBottom: 14,
  },

  resultsTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: COLORS.text,
  },

  resultsCount: {
    fontSize: 13,
    color: COLORS.muted,
  },

  cardsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    gap: 14,
  },

  monitorCard: {
    flexGrow: 0,
    flexShrink: 0,
    backgroundColor: COLORS.surface,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 16,
    padding: 16,
    marginBottom: 2,
    minWidth: 0,
  },

  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 14,
  },

  avatar: {
    width: 54,
    height: 54,
    borderRadius: 27,
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },

  avatarText: {
    fontSize: 16,
    fontWeight: '700',
    color: COLORS.primary,
  },

  monitorIdentity: {
    flex: 1,
    minWidth: 0,
  },

  monitorName: {
    fontSize: 16,
    fontWeight: '700',
    color: COLORS.text,
    marginBottom: 5,
  },

  monitorRole: {
    fontSize: 13,
    color: COLORS.muted,
    lineHeight: 18,
  },

  institution: {
    fontSize: 13,
    lineHeight: 19,
    color: COLORS.muted,
    marginBottom: 16,
  },

  subjectsLabel: {
    fontSize: 13,
    fontWeight: '700',
    color: COLORS.text,
    marginBottom: 9,
  },

  subjectsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    gap: 7,
    marginBottom: 14,
  },

  subjectTag: {
    backgroundColor: COLORS.chipBackground,
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 6,
    maxWidth: '100%',
  },

  subjectTagText: {
    fontSize: 12,
    fontWeight: '600',
    color: COLORS.primary,
  },

  periodTag: {
    backgroundColor: COLORS.periodBackground,
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 6,
    maxWidth: '100%',
  },

  periodTagText: {
    fontSize: 12,
    fontWeight: '600',
    color: COLORS.periodText,
  },

  description: {
    fontSize: 13,
    lineHeight: 20,
    color: COLORS.muted,
    marginBottom: 18,
    flexGrow: 1,
  },

  profileButton: {
    minHeight: 44,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 12,
    paddingVertical: 11,
    backgroundColor: COLORS.primary,
    borderRadius: 10,
  },

  profileButtonText: {
    fontSize: 13,
    fontWeight: '700',
    color: '#FFFFFF',
    textAlign: 'center',
  },

  emptyState: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: 36,
    backgroundColor: COLORS.surface,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: COLORS.border,
  },

  emptyTitle: {
    fontSize: 17,
    fontWeight: '700',
    color: COLORS.text,
    textAlign: 'center',
    marginBottom: 8,
  },

  emptyDescription: {
    fontSize: 14,
    lineHeight: 21,
    color: COLORS.muted,
    textAlign: 'center',
    marginBottom: 16,
  },

  resetButton: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    backgroundColor: COLORS.chipBackground,
    borderRadius: 10,
  },

  resetButtonText: {
    fontSize: 14,
    fontWeight: '700',
    color: COLORS.primary,
  },
});
