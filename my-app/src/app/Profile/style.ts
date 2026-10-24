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
      paddingHorizontal: isWideScreen ? 32 : 20,
      paddingTop: isWideScreen ? 32 : 24,
      paddingBottom: 28,
      alignItems: 'center',
    },

    container: {
      width: '100%',
      maxWidth: 960,
    },

    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 28,
      gap: 16,
    },

    headerEyebrow: {
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
      fontSize: 15,
      fontWeight: '800',
      color: '#2457C5',
    },

    profileCard: {
      backgroundColor: '#FFFFFF',
      borderRadius: 22,
      padding: isWideScreen ? 28 : 20,
      borderWidth: 1,
      borderColor: '#E9EDF5',
      marginBottom: 30,
      shadowColor: '#17233C',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.04,
      shadowRadius: 14,
      elevation: 2,
    },

    profileTop: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 17,
    },

    avatar: {
      width: isWideScreen ? 88 : 72,
      height: isWideScreen ? 88 : 72,
      borderRadius: isWideScreen ? 28 : 24,
      backgroundColor: '#2457C5',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
    },

    avatarText: {
      color: '#FFFFFF',
      fontSize: isWideScreen ? 27 : 23,
      fontWeight: '800',
      letterSpacing: 1,
    },

    profileIdentity: {
      flex: 1,
      minWidth: 0,
      alignItems: 'flex-start',
    },

    profileName: {
      color: '#17233C',
      fontSize: isWideScreen ? 23 : 19,
      fontWeight: '800',
      marginBottom: 5,
    },

    profileEmail: {
      color: '#778198',
      fontSize: 13,
      lineHeight: 19,
    },

    roleBadge: {
      backgroundColor: '#E9F7EF',
      paddingHorizontal: 12,
      paddingVertical: 5,
      borderRadius: 20,
      marginTop: 10,
    },

    roleBadgeText: {
      fontSize: 12,
      fontWeight: '700',
      color: '#218653',
    },

    profileDivider: {
      height: 1,
      backgroundColor: '#EDF0F6',
      marginVertical: 22,
    },

    schoolRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 13,
    },

    schoolIcon: {
      width: 44,
      height: 44,
      borderRadius: 14,
      backgroundColor: '#EEF2FF',
      alignItems: 'center',
      justifyContent: 'center',
    },

    schoolIconText: {
      fontSize: 18,
      fontWeight: '800',
      color: '#2457C5',
    },

    schoolInfo: {
      flex: 1,
      minWidth: 0,
    },

    schoolName: {
      color: '#26334D',
      fontSize: 14,
      fontWeight: '700',
      marginTop: 5,
      lineHeight: 20,
    },

    section: {
      marginBottom: 28,
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
      marginBottom: 16,
    },

    infoCard: {
      backgroundColor: '#FFFFFF',
      borderRadius: 20,
      paddingHorizontal: isWideScreen ? 24 : 18,
      paddingVertical: 4,
      borderWidth: 1,
      borderColor: '#E9EDF5',
    },

    infoRow: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 17,
      gap: 14,
    },

    infoIcon: {
      width: 42,
      height: 42,
      borderRadius: 13,
      backgroundColor: '#F0F4FF',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
    },

    infoIconText: {
      fontSize: 16,
      fontWeight: '800',
      color: '#2457C5',
    },

    infoContent: {
      flex: 1,
      minWidth: 0,
    },

    fieldLabel: {
      color: '#8490A5',
      fontSize: 12,
      fontWeight: '500',
    },

    fieldValue: {
      color: '#26334D',
      fontSize: 14,
      fontWeight: '600',
      marginTop: 5,
      lineHeight: 21,
    },

    infoDivider: {
      height: 1,
      backgroundColor: '#EDF0F6',
    },

    actionsCard: {
      backgroundColor: '#FFFFFF',
      borderRadius: 20,
      paddingHorizontal: isWideScreen ? 24 : 18,
      borderWidth: 1,
      borderColor: '#E9EDF5',
    },

    actionRow: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 19,
      gap: 13,
    },

    actionIcon: {
      width: 46,
      height: 46,
      borderRadius: 15,
      backgroundColor: '#EEF2FF',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
    },

    actionIconText: {
      color: '#2457C5',
      fontSize: 24,
      fontWeight: '600',
    },

    actionContent: {
      flex: 1,
      minWidth: 0,
    },

    actionTitle: {
      color: '#26334D',
      fontSize: 14,
      fontWeight: '700',
    },

    actionDescription: {
      color: '#8490A5',
      fontSize: 12,
      lineHeight: 18,
      marginTop: 5,
    },

    actionArrow: {
      color: '#98A3B7',
      fontSize: 28,
      fontWeight: '300',
      marginLeft: 4,
    },

    footerText: {
      color: '#9AA4B6',
      fontSize: 12,
      textAlign: 'center',
      marginTop: 2,
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
