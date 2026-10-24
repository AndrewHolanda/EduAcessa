import { StyleSheet } from 'react-native';

export const createStyles = (screenWidth: number) => {
  const isWideScreen = screenWidth >= 768;

  return StyleSheet.create({
    safeArea: {
      flex: 1,
      backgroundColor: '#F5F7FC',
    },

    page: {
      flex: 1,
      backgroundColor: '#F5F7FC',
    },

    scrollView: {
      flex: 1,
    },

    scrollContent: {
      flexGrow: 1,
      alignItems: 'center',
      paddingHorizontal: isWideScreen ? 32 : 20,
      paddingTop: isWideScreen ? 32 : 24,
      paddingBottom: 28,
    },

    container: {
      width: '100%',
      maxWidth: 800,
    },

    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: 16,
      marginBottom: 26,
    },

    headerTextContainer: {
      flex: 1,
      minWidth: 0,
    },

    eyebrow: {
      fontSize: 11,
      fontWeight: '800',
      letterSpacing: 2,
      color: '#2457C5',
      marginBottom: 7,
    },

    pageTitle: {
      fontSize: isWideScreen ? 32 : 28,
      fontWeight: '800',
      color: '#17233C',
      letterSpacing: -0.7,
    },

    subtitle: {
      fontSize: 14,
      color: '#778198',
      marginTop: 7,
      lineHeight: 21,
    },

    headerIcon: {
      width: 48,
      height: 48,
      borderRadius: 16,
      backgroundColor: '#E7EEFF',
      alignItems: 'center',
      justifyContent: 'center',
    },

    headerIconText: {
      fontSize: 27,
      fontWeight: '500',
      color: '#2457C5',
    },

    identityCard: {
      backgroundColor: '#FFFFFF',
      borderRadius: 20,
      padding: isWideScreen ? 24 : 18,
      borderWidth: 1,
      borderColor: '#E9EDF5',
      flexDirection: 'row',
      alignItems: 'center',
      gap: 16,
      marginBottom: 24,
    },

    avatar: {
      width: 60,
      height: 60,
      borderRadius: 20,
      backgroundColor: '#2457C5',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
    },

    avatarText: {
      color: '#FFFFFF',
      fontSize: 21,
      fontWeight: '800',
      letterSpacing: 1,
    },

    identityInfo: {
      flex: 1,
      minWidth: 0,
    },

    identityTitle: {
      color: '#17233C',
      fontSize: 16,
      fontWeight: '800',
    },

    identityDescription: {
      color: '#778198',
      fontSize: 13,
      lineHeight: 19,
      marginTop: 5,
    },

    formCard: {
      backgroundColor: '#FFFFFF',
      borderRadius: 22,
      padding: isWideScreen ? 30 : 20,
      borderWidth: 1,
      borderColor: '#E9EDF5',
      shadowColor: '#17233C',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.035,
      shadowRadius: 14,
      elevation: 2,
    },

    sectionTitle: {
      color: '#17233C',
      fontSize: 19,
      fontWeight: '800',
      marginBottom: 6,
    },

    sectionDescription: {
      color: '#778198',
      fontSize: 13,
      lineHeight: 20,
      marginBottom: 24,
    },

    fieldGroup: {
      marginBottom: 21,
    },

    label: {
      color: '#26334D',
      fontSize: 13,
      fontWeight: '700',
      marginBottom: 9,
    },

    input: {
      width: '100%',
      minHeight: 50,
      borderWidth: 1,
      borderColor: '#DDE3EF',
      borderRadius: 12,
      paddingHorizontal: 15,
      paddingVertical: 12,
      color: '#26334D',
      backgroundColor: '#FFFFFF',
      fontSize: 14,
    },

    helperText: {
      color: '#8490A5',
      fontSize: 12,
      lineHeight: 18,
      marginTop: -2,
      marginBottom: 12,
    },

    roleOptions: {
      flexDirection: isWideScreen ? 'row' : 'column',
      gap: 12,
    },

    roleOption: {
      flex: isWideScreen ? 1 : undefined,
      minHeight: 52,
      borderWidth: 1,
      borderColor: '#DDE3EF',
      borderRadius: 12,
      paddingHorizontal: 15,
      flexDirection: 'row',
      alignItems: 'center',
      gap: 11,
      backgroundColor: '#FFFFFF',
    },

    roleOptionSelected: {
      borderColor: '#2457C5',
      backgroundColor: '#F0F4FF',
    },

    radioOuter: {
      width: 20,
      height: 20,
      borderWidth: 1.5,
      borderColor: '#A4AEC0',
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
    },

    radioOuterSelected: {
      borderColor: '#2457C5',
    },

    radioInner: {
      width: 10,
      height: 10,
      borderRadius: 5,
      backgroundColor: '#2457C5',
    },

    roleText: {
      color: '#536078',
      fontSize: 14,
      fontWeight: '600',
    },

    roleTextSelected: {
      color: '#2457C5',
      fontWeight: '800',
    },

    buttonsContainer: {
      flexDirection: isWideScreen ? 'row' : 'column-reverse',
      gap: 12,
      marginTop: 8,
    },

    cancelButton: {
      flex: isWideScreen ? 1 : undefined,
      minHeight: 50,
      borderRadius: 13,
      borderWidth: 1,
      borderColor: '#DDE3EF',
      backgroundColor: '#FFFFFF',
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 16,
    },

    cancelButtonText: {
      color: '#536078',
      fontSize: 14,
      fontWeight: '700',
    },

    saveButton: {
      flex: isWideScreen ? 1.5 : undefined,
      minHeight: 50,
      borderRadius: 13,
      backgroundColor: '#2457C5',
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 16,
    },

    saveButtonText: {
      color: '#FFFFFF',
      fontSize: 14,
      fontWeight: '800',
    },

    buttonPressed: {
      opacity: 0.78,
    },

    note: {
      color: '#8490A5',
      fontSize: 11,
      lineHeight: 17,
      textAlign: 'center',
      marginTop: 18,
    },

    footerText: {
      color: '#9AA4B6',
      fontSize: 12,
      textAlign: 'center',
      marginTop: 24,
      marginBottom: 12,
    },

    bottomNav: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around',
      backgroundColor: '#FFFFFF',
      borderTopWidth: 1,
      borderTopColor: '#E9EDF5',
      paddingTop: 10,
      paddingBottom: 8,
      paddingHorizontal: isWideScreen ? 40 : 4,
      minHeight: 70,
      width: '100%',
    },

    navItem: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      gap: 4,
      minWidth: 0,
      paddingHorizontal: 1,
    },

    navIconWrap: {
      width: 34,
      height: 28,
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
    },

    navIconWrapActive: {
      backgroundColor: '#E9EFFF',
    },

    navIcon: {
      color: '#8993A7',
      fontSize: 21,
      lineHeight: 25,
      fontWeight: '600',
    },

    navIconActive: {
      color: '#2457C5',
    },

    navLabel: {
      color: '#8993A7',
      fontSize: isWideScreen ? 12 : 10,
      fontWeight: '500',
      textAlign: 'center',
    },

    navLabelActive: {
      color: '#2457C5',
      fontWeight: '800',
    },
  });
};
