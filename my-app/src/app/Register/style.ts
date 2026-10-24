import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#F2F6FC',
  },

  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingVertical: 28,
    alignItems: 'center',
  },

  scrollContentWide: {
    paddingHorizontal: 32,
    paddingVertical: 48,
    justifyContent: 'center',
  },

  card: {
    width: '100%',
    maxWidth: 480,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 24,
    alignSelf: 'center',
  },

  cardWide: {
    maxWidth: 920,
    paddingHorizontal: 40,
    paddingVertical: 36,
    borderWidth: 1,
    borderColor: '#E5ECF5',
    shadowColor: '#19365D',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.06,
    shadowRadius: 24,
    elevation: 3,
  },

  header: {
    alignItems: 'center',
    marginBottom: 32,
  },

  logo: {
    fontSize: 32,
    fontWeight: '800',
    color: '#19365D',
    letterSpacing: -1,
  },

  logoAccent: {
    color: '#3679D0',
  },

  tagline: {
    fontSize: 13,
    color: '#718096',
    marginTop: 4,
    textAlign: 'center',
  },

  title: {
    fontSize: 28,
    fontWeight: '800',
    color: '#19365D',
    marginBottom: 8,
  },

  subtitle: {
    fontSize: 15,
    lineHeight: 23,
    color: '#718096',
    marginBottom: 28,
  },

  grid: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 24,
  },

  column: {
    flex: 1,
    minWidth: 0,
  },

  field: {
    marginBottom: 20,
    minWidth: 0,
  },

  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#263A56',
    marginBottom: 8,
  },

  input: {
    width: '100%',
    height: 52,
    borderWidth: 1,
    borderColor: '#D5DFED',
    borderRadius: 11,
    paddingHorizontal: 14,
    backgroundColor: '#FFFFFF',
    color: '#19365D',
    fontSize: 15,
    outlineStyle: 'none',
  } as any,

  roleContainer: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 24,
    marginTop: 2,
  },

  roleButton: {
    flex: 1,
    minHeight: 48,
    borderRadius: 11,
    borderWidth: 1,
    borderColor: '#D5DFED',
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 8,
  },

  roleSelected: {
    backgroundColor: '#3679D0',
    borderColor: '#3679D0',
  },

  roleText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#52647D',
  },

  roleTextSelected: {
    color: '#FFFFFF',
  },

  yearGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },

  yearButton: {
    flexGrow: 1,
    flexBasis: '40%',
    minHeight: 45,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#D5DFED',
    backgroundColor: '#FFFFFF',
  },

  yearSelected: {
    backgroundColor: '#3679D0',
    borderColor: '#3679D0',
  },

  yearText: {
    color: '#52647D',
    fontWeight: '600',
    fontSize: 14,
  },

  yearTextSelected: {
    color: '#FFFFFF',
  },

  termsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginTop: 8,
    marginBottom: 24,
  },

  checkbox: {
    width: 22,
    height: 22,
    flexShrink: 0,
    borderWidth: 1.5,
    borderColor: '#B8C7DA',
    borderRadius: 5,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },

  checkboxSelected: {
    backgroundColor: '#3679D0',
    borderColor: '#3679D0',
  },

  checkmark: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '800',
  },

  termsText: {
    flex: 1,
    flexShrink: 1,
    fontSize: 12,
    lineHeight: 19,
    color: '#52647D',
  },

  submitButton: {
    width: '100%',
    minHeight: 54,
    backgroundColor: '#3679D0',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
  },

  submitText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },

  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginTop: 25,
  },

  footerText: {
    color: '#718096',
    fontSize: 14,
  },

  loginLink: {
    color: '#3679D0',
    fontSize: 14,
    fontWeight: '700',
    paddingVertical: 5,
  },
});

export default styles;
