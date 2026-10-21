import { StyleSheet, Platform } from 'react-native';

const COLORS = {
  primary: '#1455CC',
  darkBlue: '#103F9D',
  white: '#FFFFFF',
  background: '#F5F8FF',
  inputBackground: '#F8FAFE',
  text: '#172B4D',
  muted: '#64748B',
  placeholder: '#94A3B8',
  border: '#DCE5F2',
  headerSubtitle: '#DAE8FF',
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.background,
  },

  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },

  scrollContent: {
    flexGrow: 1,
    alignItems: 'center',
    paddingBottom: 8,
  },

  header: {
    backgroundColor: COLORS.primary,
    width: '100%',
    alignItems: 'center',
    paddingTop: 48,
    paddingBottom: 88,
    paddingHorizontal: 24,
    borderBottomLeftRadius: 36,
    borderBottomRightRadius: 36,
  },

  logo: {
    width: 72,
    height: 72,
    borderRadius: 22,
    backgroundColor: COLORS.white,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },

  logoText: {
    color: COLORS.primary,
    fontSize: 44,
    fontWeight: '900',
  },

  appName: {
    color: COLORS.white,
    fontSize: 34,
    fontWeight: '400',
    letterSpacing: -1,
  },

  appNameBold: {
    fontWeight: '800',
  },

  headerSubtitle: {
    color: COLORS.headerSubtitle,
    fontSize: 14,
    marginTop: 9,
    textAlign: 'center',
  },

  formContainer: {
    backgroundColor: COLORS.white,
    width: '90%',
    maxWidth: 440,
    borderRadius: 24,
    padding: 26,
    marginTop: -48,
    elevation: 6,
    shadowColor: COLORS.darkBlue,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.09,
    shadowRadius: 16,

    // Centraliza o cartão em telas maiores.
    alignSelf: 'center',
  },

  title: {
    color: COLORS.text,
    fontSize: 24,
    fontWeight: '800',
    textAlign: 'center',
    marginBottom: 9,
  },

  subtitle: {
    color: COLORS.muted,
    fontSize: 14,
    lineHeight: 21,
    textAlign: 'center',
    marginBottom: 28,
  },

  form: {
    width: '100%',
  },

  label: {
    color: COLORS.text,
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 9,
  },

  input: {
    width: '100%',
    minHeight: 54,
    borderWidth: 1,
    borderColor: COLORS.border,
    backgroundColor: COLORS.inputBackground,
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: Platform.OS === 'web' ? 14 : 0,
    fontSize: 15,
    color: COLORS.text,
    marginBottom: 22,
  },

  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: 54,
    borderWidth: 1,
    borderColor: COLORS.border,
    backgroundColor: COLORS.inputBackground,
    borderRadius: 12,
    paddingLeft: 16,
    paddingRight: 12,
  },

  passwordInput: {
    flex: 1,
    minWidth: 0,
    fontSize: 15,
    color: COLORS.text,
    minHeight: 52,
    paddingVertical: Platform.OS === 'web' ? 14 : 0,
  },

  showPasswordButton: {
    minHeight: 44,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 12,
    paddingRight: 2,
  },

  showPassword: {
    color: COLORS.primary,
    fontSize: 13,
    fontWeight: '700',
  },

  forgotPassword: {
    alignSelf: 'flex-end',
    minHeight: 44,
    justifyContent: 'center',
    marginTop: 8,
    marginBottom: 18,
    paddingLeft: 8,
  },

  forgotPasswordText: {
    color: COLORS.primary,
    fontSize: 13,
    fontWeight: '700',
  },

  loginButton: {
    backgroundColor: COLORS.primary,
    minHeight: 55,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 12,
    paddingVertical: 12,
  },

  loginButtonText: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: '700',
    textAlign: 'center',
  },

  registerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginTop: 22,
    rowGap: 4,
  },

  registerText: {
    color: COLORS.muted,
    fontSize: 13,
    textAlign: 'center',
  },

  registerLink: {
    color: COLORS.primary,
    fontSize: 13,
    fontWeight: '800',
    paddingVertical: 8,
  },

  footer: {
    alignItems: 'center',
    paddingVertical: 26,
    paddingHorizontal: 16,
    marginTop: 'auto',
  },

  footerText: {
    color: COLORS.muted,
    fontSize: 12,
    textAlign: 'center',
  },

  footerSubtitle: {
    color: COLORS.placeholder,
    fontSize: 11,
    marginTop: 5,
    textAlign: 'center',
  },
});

export default styles;
