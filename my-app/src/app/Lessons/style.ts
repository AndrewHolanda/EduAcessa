import { StyleSheet } from 'react-native';

export const COLORS = {
  blue: '#2457C5',
  primary: '#2457C5',
  primaryDark: '#19439D',
  background: '#F5F7FC',
  surface: '#FFFFFF',
  text: '#18233B',
  muted: '#78839A',
  border: '#E3E8F2',
  white: '#FFFFFF',
  success: '#2D9D78',
  track: '#E8EDF6',
};

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.background,
  },

  page: {
    flex: 1,
    backgroundColor: COLORS.background,
  },

  scrollView: {
    flex: 1,
  },

  scrollContent: {
    flexGrow: 1,
    paddingBottom: 20,
  },

  content: {
    width: '100%',
    maxWidth: 1120,
    alignSelf: 'center',
    paddingHorizontal: 20,
    paddingTop: 18,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 24,
    gap: 12,
  },

  headerTextContainer: {
    flex: 1,
  },

  greeting: {
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 1.1,
    color: COLORS.blue,
    marginBottom: 7,
  },

  pageTitle: {
    fontSize: 30,
    fontWeight: '800',
    color: COLORS.text,
    letterSpacing: -0.7,
  },

  subtitle: {
    fontSize: 14,
    color: COLORS.muted,
    marginTop: 7,
    lineHeight: 21,
  },

  headerIcon: {
    width: 54,
    height: 54,
    borderRadius: 18,
    backgroundColor: '#E7EEFF',
    alignItems: 'center',
    justifyContent: 'center',
  },

  summaryCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.blue,
    borderRadius: 20,
    padding: 20,
    marginBottom: 30,
    gap: 14,
  },

  summaryIcon: {
    width: 48,
    height: 48,
    borderRadius: 15,
    backgroundColor: 'rgba(255,255,255,0.18)',
    alignItems: 'center',
    justifyContent: 'center',
  },

  summaryTextContainer: {
    flex: 1,
  },

  summaryTitle: {
    fontSize: 17,
    fontWeight: '700',
    color: COLORS.white,
    marginBottom: 5,
  },

  summaryDescription: {
    fontSize: 13,
    lineHeight: 19,
    color: '#E7EEFF',
  },

  sectionHeader: {
    marginBottom: 15,
  },

  sectionTitle: {
    fontSize: 19,
    fontWeight: '800',
    color: COLORS.text,
  },

  searchContainer: {
    minHeight: 54,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.surface,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 15,
    paddingHorizontal: 15,
    gap: 10,
    marginBottom: 17,
  },

  searchInput: {
    flex: 1,
    minWidth: 0,
    fontSize: 14,
    color: COLORS.text,
    paddingVertical: 14,
  },

  filters: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 9,
    paddingBottom: 5,
  },

  filterButton: {
    minHeight: 39,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 15,
    borderRadius: 22,
    borderWidth: 1,
    borderColor: COLORS.border,
    backgroundColor: COLORS.surface,
  },

  filterButtonActive: {
    backgroundColor: COLORS.blue,
    borderColor: COLORS.blue,
  },

  filterText: {
    fontSize: 13,
    fontWeight: '600',
    color: COLORS.muted,
  },

  filterTextActive: {
    color: COLORS.white,
  },

  savedFilter: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 9,
    alignSelf: 'flex-start',
    marginTop: 16,
    marginBottom: 27,
    paddingVertical: 10,
    paddingHorizontal: 13,
    borderRadius: 12,
    backgroundColor: '#EAF0FF',
  },

  savedFilterActive: {
    backgroundColor: '#DDE7FF',
  },

  savedFilterText: {
    fontSize: 13,
    fontWeight: '700',
    color: COLORS.blue,
  },

  listHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
    gap: 10,
  },

  resultCount: {
    fontSize: 12,
    fontWeight: '600',
    color: COLORS.muted,
  },

  lessonList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 14,
  },

  lessonCard: {
    width: '100%',
    backgroundColor: COLORS.surface,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 19,
    padding: 17,
    marginBottom: 2,
  },

  lessonCardWide: {
    width: '48.5%',
  },

  cardTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },

  lessonIcon: {
    width: 53,
    height: 53,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },

  bookmarkButton: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: '#F4F6FB',
    alignItems: 'center',
    justifyContent: 'center',
  },

  subjectLabel: {
    fontSize: 11,
    fontWeight: '700',
    color: COLORS.blue,
    textTransform: 'uppercase',
    letterSpacing: 0.6,
    marginBottom: 6,
  },

  lessonTitle: {
    fontSize: 17,
    lineHeight: 23,
    fontWeight: '800',
    color: COLORS.text,
    marginBottom: 7,
  },

  lessonDescription: {
    fontSize: 13,
    lineHeight: 20,
    color: COLORS.muted,
    minHeight: 40,
  },

  durationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginTop: 13,
    marginBottom: 14,
  },

  durationText: {
    fontSize: 12,
    color: COLORS.muted,
  },

  progressContainer: {
    marginBottom: 15,
  },

  progressTrack: {
    width: '100%',
    height: 6,
    borderRadius: 5,
    backgroundColor: COLORS.track,
    overflow: 'hidden',
  },

  progressFill: {
    height: '100%',
    borderRadius: 5,
    backgroundColor: COLORS.success,
  },

  progressText: {
    fontSize: 11,
    color: COLORS.muted,
    marginTop: 6,
  },

  openLessonButton: {
    minHeight: 44,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 9,
    backgroundColor: COLORS.blue,
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 11,
  },

  openLessonText: {
    fontSize: 13,
    fontWeight: '700',
    color: COLORS.white,
  },

  emptyState: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.surface,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: COLORS.border,
    padding: 28,
    marginBottom: 15,
  },

  emptyTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: COLORS.text,
    marginTop: 12,
    textAlign: 'center',
  },

  emptyDescription: {
    fontSize: 13,
    lineHeight: 20,
    color: COLORS.muted,
    textAlign: 'center',
    marginTop: 7,
  },

  offlineCard: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 13,
    backgroundColor: '#EAF0FF',
    borderRadius: 17,
    padding: 17,
    marginTop: 28,
  },

  offlineTextContainer: {
    flex: 1,
  },

  offlineTitle: {
    fontSize: 15,
    fontWeight: '800',
    color: COLORS.text,
    marginBottom: 5,
  },

  offlineDescription: {
    fontSize: 12,
    lineHeight: 19,
    color: COLORS.muted,
  },

  footerText: {
    fontSize: 11,
    color: COLORS.muted,
    textAlign: 'center',
    marginTop: 24,
    marginBottom: 10,
  },

  bottomNav: {
    minHeight: 65,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 4,
    paddingTop: 10,
    paddingBottom: 8,
    backgroundColor: COLORS.white,
    borderTopWidth: 1,
    borderTopColor: COLORS.border,
  },

  navItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
    paddingVertical: 3,
  },

  navLabel: {
    fontSize: 10,
    color: COLORS.muted,
    fontWeight: '500',
    textAlign: 'center',
  },

  navLabelSelected: {
    color: COLORS.blue,
    fontWeight: '700',
  },
});
