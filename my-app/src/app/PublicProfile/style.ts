import { StyleSheet } from 'react-native';

export const COLORS = {
  primary: '#1E56B2',
  primaryLight: '#EAF1FF',
  background: '#F5F7FB',
  surface: '#FFFFFF',
  text: '#1F2937',
  muted: '#667085',
  border: '#E5EAF2',
  success: '#16804A',
  successLight: '#E5F7EC',
  warning: '#B45309',
  warningLight: '#FFF2DB',
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
    maxWidth: 1440,
    alignSelf: 'center',
    paddingHorizontal: 24,
    paddingTop: 32,
    paddingBottom: 40,
  },

  heading: {
    marginBottom: 26,
  },

  pageTitle: {
    fontSize: 30,
    fontWeight: '800',
    color: COLORS.text,
    marginBottom: 8,
  },

  pageSubtitle: {
    fontSize: 15,
    lineHeight: 23,
    color: COLORS.muted,
  },

  mainLayout: {
    width: '100%',
    gap: 22,
  },

  mainLayoutWide: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },

  profileColumn: {
    flex: 1,
    minWidth: 0,
    gap: 18,
  },

  scheduleColumn: {
    flex: 1.15,
    minWidth: 0,
  },

  profileCard: {
    backgroundColor: COLORS.surface,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: COLORS.border,
    padding: 24,
  },

  profileTop: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },

  avatar: {
    width: 86,
    height: 86,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },

  avatarText: {
    fontSize: 27,
    fontWeight: '800',
    color: COLORS.primary,
  },

  profileIdentity: {
    flex: 1,
    minWidth: 0,
  },

  name: {
    fontSize: 23,
    fontWeight: '800',
    color: COLORS.text,
    marginBottom: 5,
  },

  role: {
    color: COLORS.primary,
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 10,
  },

  statusBadge: {
    alignSelf: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 20,
    backgroundColor: COLORS.successLight,
  },

  statusDot: {
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: COLORS.success,
  },

  statusBadgeText: {
    fontSize: 12,
    fontWeight: '700',
    color: COLORS.success,
  },

  separator: {
    height: 1,
    backgroundColor: COLORS.border,
    marginVertical: 23,
  },

  sectionTitle: {
    fontSize: 17,
    fontWeight: '800',
    color: COLORS.text,
    marginTop: 20,
    marginBottom: 10,
  },

  description: {
    color: COLORS.muted,
    fontSize: 14,
    lineHeight: 23,
  },

  infoLabel: {
    color: COLORS.muted,
    fontSize: 12,
    fontWeight: '700',
    marginTop: 19,
    marginBottom: 5,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },

  infoValue: {
    color: COLORS.text,
    fontSize: 14,
    lineHeight: 21,
    fontWeight: '500',
  },

  subjectsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 9,
  },

  subjectTag: {
    backgroundColor: COLORS.primaryLight,
    borderRadius: 10,
    paddingHorizontal: 13,
    paddingVertical: 8,
  },

  subjectTagText: {
    color: COLORS.primary,
    fontSize: 13,
    fontWeight: '700',
  },

  noticeCard: {
    backgroundColor: '#EDF4FF',
    borderRadius: 16,
    padding: 19,
    borderWidth: 1,
    borderColor: '#D9E6FF',
  },

  noticeTitle: {
    fontSize: 15,
    fontWeight: '800',
    color: COLORS.primary,
    marginBottom: 7,
  },

  noticeText: {
    fontSize: 13,
    lineHeight: 21,
    color: '#435574',
  },

  scheduleCard: {
    backgroundColor: COLORS.surface,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: COLORS.border,
    padding: 24,
  },

  scheduleTitle: {
    fontSize: 21,
    fontWeight: '800',
    color: COLORS.text,
    marginBottom: 8,
  },

  scheduleSubtitle: {
    color: COLORS.muted,
    fontSize: 14,
    lineHeight: 21,
    marginBottom: 21,
  },

  tabs: {
    flexDirection: 'row',
    backgroundColor: '#F0F3F8',
    borderRadius: 12,
    padding: 4,
    marginBottom: 17,
  },

  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 11,
    borderRadius: 9,
  },

  tabActive: {
    backgroundColor: COLORS.surface,
    elevation: 2,
  },

  tabText: {
    fontSize: 13,
    fontWeight: '600',
    color: COLORS.muted,
  },

  tabTextActive: {
    color: COLORS.primary,
    fontWeight: '800',
  },

  scheduleItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 12,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 14,
    padding: 15,
    marginBottom: 12,
  },

  scheduleDate: {
    flex: 1,
    minWidth: 0,
  },

  scheduleDay: {
    fontSize: 14,
    fontWeight: '800',
    color: COLORS.text,
    marginBottom: 4,
  },

  scheduleDateText: {
    fontSize: 12,
    color: COLORS.muted,
    marginBottom: 9,
  },

  scheduleTime: {
    fontSize: 15,
    fontWeight: '800',
    color: COLORS.primary,
    marginBottom: 5,
  },

  scheduleSubject: {
    fontSize: 13,
    color: COLORS.muted,
  },

  scheduleAction: {
    alignItems: 'flex-end',
    gap: 10,
  },

  availabilityBadge: {
    backgroundColor: COLORS.successLight,
    borderRadius: 20,
    paddingHorizontal: 9,
    paddingVertical: 6,
  },

  availabilityText: {
    fontSize: 11,
    fontWeight: '800',
    color: COLORS.success,
  },

  bookedBadge: {
    backgroundColor: COLORS.warningLight,
  },

  bookedText: {
    color: COLORS.warning,
  },

  bookButton: {
    backgroundColor: COLORS.primary,
    paddingHorizontal: 17,
    paddingVertical: 11,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },

  bookButtonDisabled: {
    backgroundColor: '#EEF0F4',
  },

  bookButtonText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '800',
  },

  bookButtonTextDisabled: {
    color: COLORS.muted,
  },

  legend: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 20,
    marginTop: 10,
    paddingTop: 18,
    borderTopWidth: 1,
    borderTopColor: COLORS.border,
  },

  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 7,
  },

  legendAvailable: {
    width: 9,
    height: 9,
    borderRadius: 5,
    backgroundColor: COLORS.success,
  },

  legendBooked: {
    width: 9,
    height: 9,
    borderRadius: 5,
    backgroundColor: COLORS.warning,
  },

  legendText: {
    fontSize: 12,
    color: COLORS.muted,
  },

  emptyState: {
    alignItems: 'center',
    paddingVertical: 32,
  },

  emptyTitle: {
    fontSize: 16,
    fontWeight: '800',
    color: COLORS.text,
    marginBottom: 7,
    textAlign: 'center',
  },

  emptyDescription: {
    fontSize: 13,
    color: COLORS.muted,
    textAlign: 'center',
    lineHeight: 20,
  },
});
