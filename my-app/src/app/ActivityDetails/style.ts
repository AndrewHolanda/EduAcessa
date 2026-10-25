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
  red: '#DC2626',
  warning: '#A16207',
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
    paddingBottom: 28,
  },

  content: {
    width: '100%',
    maxWidth: 720,
    alignSelf: 'center',
    paddingHorizontal: 20,
    paddingTop: 22,
  },

  contentWide: {
    maxWidth: 1000,
    paddingHorizontal: 32,
    paddingTop: 30,
  },

  // Cabeçalho
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 13,
    marginBottom: 24,
  },

  backButton: {
    width: 44,
    height: 44,
    borderRadius: 13,
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: COLORS.border,
    alignItems: 'center',
    justifyContent: 'center',
  },

  headerTextContainer: {
    flex: 1,
  },

  headerEyebrow: {
    fontSize: 10,
    color: COLORS.secondaryText,
    fontWeight: '700',
    letterSpacing: 1,
    marginBottom: 4,
  },

  pageTitle: {
    fontSize: 22,
    lineHeight: 29,
    color: COLORS.text,
    fontWeight: '800',
  },

  // Apresentação da atividade
  activityIntro: {
    backgroundColor: COLORS.white,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: COLORS.border,
    padding: 20,
    marginBottom: 16,
  },

  activityIntroTop: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
  },

  subjectIcon: {
    width: 56,
    height: 56,
    borderRadius: 16,
    backgroundColor: '#E8F0FE',
    alignItems: 'center',
    justifyContent: 'center',
  },

  introTitleContainer: {
    flex: 1,
    minWidth: 0,
  },

  subjectLabel: {
    color: COLORS.blue,
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 1,
    marginBottom: 6,
  },

  activityTitle: {
    color: COLORS.text,
    fontSize: 19,
    lineHeight: 25,
    fontWeight: '800',
  },

  activityDescription: {
    color: COLORS.secondaryText,
    fontSize: 13,
    lineHeight: 21,
    marginTop: 18,
  },

  metadataRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 18,
    marginTop: 18,
    paddingTop: 15,
    borderTopWidth: 1,
    borderTopColor: COLORS.border,
  },

  metadataItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 7,
  },

  metadataText: {
    color: COLORS.secondaryText,
    fontSize: 12,
    fontWeight: '600',
  },

  // Progresso
  progressCard: {
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 17,
    padding: 18,
    marginBottom: 16,
  },

  progressHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 12,
    marginBottom: 14,
  },

  progressTitleContainer: {
    flex: 1,
  },

  progressTitle: {
    color: COLORS.text,
    fontSize: 15,
    fontWeight: '700',
  },

  progressSubtitle: {
    color: COLORS.secondaryText,
    fontSize: 12,
    lineHeight: 18,
    marginTop: 5,
  },

  progressPercentage: {
    color: COLORS.blue,
    fontSize: 23,
    fontWeight: '800',
  },

  progressTrack: {
    height: 8,
    backgroundColor: '#E9EEF5',
    borderRadius: 10,
    overflow: 'hidden',
  },

  progressFill: {
    height: '100%',
    backgroundColor: COLORS.blue,
    borderRadius: 10,
  },

  // Instruções
  instructionBox: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 11,
    backgroundColor: '#E8F0FE',
    borderRadius: 14,
    padding: 16,
    marginBottom: 27,
  },

  instructionTextContainer: {
    flex: 1,
  },

  instructionTitle: {
    color: COLORS.blueDark,
    fontSize: 13,
    fontWeight: '800',
    marginBottom: 5,
  },

  instructionText: {
    color: '#334E76',
    fontSize: 12,
    lineHeight: 19,
  },

  // Questões
  questionsSection: {
    marginBottom: 20,
  },

  questionsHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 10,
    marginBottom: 16,
  },

  sectionTitle: {
    color: COLORS.text,
    fontSize: 20,
    fontWeight: '800',
  },

  questionsCount: {
    color: COLORS.secondaryText,
    fontSize: 12,
    fontWeight: '600',
  },

  questionCard: {
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 18,
    padding: 18,
    marginBottom: 16,
  },

  questionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 11,
    marginBottom: 17,
  },

  questionNumber: {
    width: 42,
    height: 42,
    borderRadius: 13,
    backgroundColor: '#E8F0FE',
    alignItems: 'center',
    justifyContent: 'center',
  },

  questionNumberText: {
    color: COLORS.blue,
    fontSize: 14,
    fontWeight: '800',
  },

  questionHeading: {
    flex: 1,
    gap: 4,
  },

  questionLabel: {
    color: COLORS.text,
    fontSize: 12,
    fontWeight: '800',
  },

  questionStatus: {
    color: COLORS.secondaryText,
    fontSize: 11,
  },

  questionStatement: {
    color: COLORS.text,
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '700',
    marginBottom: 17,
  },

  optionsList: {
    gap: 10,
  },

  optionButton: {
    minHeight: 51,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 12,
    backgroundColor: COLORS.white,
  },

  optionSelected: {
    borderColor: COLORS.blue,
    backgroundColor: '#F0F5FF',
  },

  optionCorrect: {
    borderColor: '#86EFAC',
    backgroundColor: '#F0FDF4',
  },

  optionIncorrect: {
    borderColor: '#FCA5A5',
    backgroundColor: '#FEF2F2',
  },

  optionLetter: {
    width: 29,
    height: 29,
    borderRadius: 9,
    backgroundColor: '#F1F5F9',
    alignItems: 'center',
    justifyContent: 'center',
  },

  optionLetterSelected: {
    backgroundColor: COLORS.blue,
  },

  optionLetterCorrect: {
    backgroundColor: COLORS.green,
  },

  optionLetterIncorrect: {
    backgroundColor: COLORS.red,
  },

  optionLetterText: {
    color: COLORS.secondaryText,
    fontSize: 12,
    fontWeight: '800',
  },

  optionLetterTextSelected: {
    color: COLORS.white,
  },

  optionText: {
    flex: 1,
    flexShrink: 1,
    color: COLORS.text,
    fontSize: 13,
    lineHeight: 19,
  },

  // Explicação das respostas
  explanationBox: {
    borderRadius: 12,
    padding: 13,
    marginTop: 15,
  },

  explanationCorrect: {
    backgroundColor: '#F0FDF4',
  },

  explanationIncorrect: {
    backgroundColor: '#FEF2F2',
  },

  explanationTitle: {
    fontSize: 12,
    fontWeight: '800',
    marginBottom: 5,
  },

  explanationText: {
    color: COLORS.text,
    fontSize: 12,
    lineHeight: 19,
  },

  // Resultado
  resultCard: {
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 20,
    padding: 24,
    alignItems: 'center',
    marginBottom: 22,
  },

  resultIcon: {
    width: 64,
    height: 64,
    borderRadius: 20,
    backgroundColor: '#E8F0FE',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },

  resultTitle: {
    color: COLORS.text,
    fontSize: 21,
    fontWeight: '800',
    textAlign: 'center',
  },

  resultScore: {
    color: COLORS.blue,
    fontSize: 25,
    fontWeight: '800',
    marginTop: 12,
  },

  resultDescription: {
    color: COLORS.secondaryText,
    fontSize: 13,
    lineHeight: 21,
    textAlign: 'center',
    marginTop: 10,
  },

  retryButton: {
    minHeight: 46,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 9,
    borderWidth: 1,
    borderColor: COLORS.blue,
    borderRadius: 12,
    paddingHorizontal: 18,
    marginTop: 20,
  },

  retryButtonText: {
    color: COLORS.blue,
    fontSize: 13,
    fontWeight: '700',
  },

  // Envio
  submitSection: {
    marginBottom: 20,
  },

  warningBox: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 9,
    padding: 12,
    borderRadius: 11,
    backgroundColor: '#FFF4DB',
    marginBottom: 13,
  },

  warningText: {
    flex: 1,
    color: '#854D0E',
    fontSize: 12,
    lineHeight: 18,
  },

  submitButton: {
    minHeight: 52,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 11,
    backgroundColor: COLORS.blue,
    borderRadius: 13,
    paddingHorizontal: 18,
  },

  submitButtonDisabled: {
    backgroundColor: '#94A3B8',
  },

  submitButtonText: {
    color: COLORS.white,
    fontSize: 14,
    fontWeight: '800',
  },

  submitHint: {
    color: COLORS.secondaryText,
    fontSize: 11,
    lineHeight: 17,
    textAlign: 'center',
    marginTop: 12,
  },

  footerMessage: {
    color: COLORS.muted,
    fontSize: 11,
    lineHeight: 18,
    textAlign: 'center',
    paddingVertical: 10,
  },
});
