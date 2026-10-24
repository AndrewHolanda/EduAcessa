import { StyleSheet } from 'react-native';

export const createStyles = (screenWidth: number) => {
  const isWeb = screenWidth >= 768;

  return StyleSheet.create({
    safeArea: {
      flex: 1,
      backgroundColor: '#F5F7FC',
    },

    page: {
      flex: 1,
      width: '100%',
      alignSelf: 'center',
      maxWidth: 1200,
    },

    scrollContent: {
      width: '100%',
      maxWidth: 900,
      alignSelf: 'center',
      paddingHorizontal: isWeb ? 32 : 20,
      paddingTop: isWeb ? 36 : 24,
      paddingBottom: 32,
    },

    header: {
      marginBottom: 24,
    },

    headerEyebrow: {
      color: '#2457C5',
      fontSize: 12,
      fontWeight: '700',
      letterSpacing: 1.2,
      marginBottom: 8,
    },

    headerTitle: {
      color: '#172B4D',
      fontSize: isWeb ? 32 : 27,
      fontWeight: '700',
      marginBottom: 8,
    },

    headerDescription: {
      color: '#667085',
      fontSize: 15,
      lineHeight: 23,
      maxWidth: 560,
    },

    accountCard: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#EAF0FF',
      borderRadius: 16,
      padding: isWeb ? 22 : 16,
      marginBottom: 28,
      gap: 14,
    },

    accountIcon: {
      width: 48,
      height: 48,
      borderRadius: 14,
      backgroundColor: '#D6E2FF',
      alignItems: 'center',
      justifyContent: 'center',
    },

    accountIconText: {
      color: '#2457C5',
      fontSize: 27,
      fontWeight: '600',
    },

    accountText: {
      flex: 1,
    },

    accountTitle: {
      color: '#172B4D',
      fontSize: 15,
      fontWeight: '700',
      marginBottom: 5,
    },

    accountDescription: {
      color: '#52627A',
      fontSize: 13,
      lineHeight: 19,
    },

    group: {
      marginBottom: 24,
    },

    groupTitle: {
      color: '#7A8497',
      fontSize: 11,
      fontWeight: '700',
      letterSpacing: 1.1,
      marginBottom: 10,
      marginLeft: 4,
    },

    groupCard: {
      backgroundColor: '#FFFFFF',
      borderRadius: 16,
      borderWidth: 1,
      borderColor: '#E8ECF4',
      paddingHorizontal: isWeb ? 20 : 14,
      overflow: 'hidden',
    },

    settingsItem: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 17,
      gap: 13,
      minHeight: 84,
    },

    settingsItemBorder: {
      borderBottomWidth: 1,
      borderBottomColor: '#EDF0F5',
    },

    itemIcon: {
      width: 42,
      height: 42,
      borderRadius: 12,
      backgroundColor: '#F1F5FF',
      alignItems: 'center',
      justifyContent: 'center',
    },

    itemIconText: {
      fontSize: 20,
    },

    itemContent: {
      flex: 1,
    },

    itemTitle: {
      color: '#24324A',
      fontSize: 15,
      fontWeight: '600',
      marginBottom: 5,
    },

    itemDescription: {
      color: '#7A8497',
      fontSize: 12,
      lineHeight: 18,
    },

    itemArrow: {
      color: '#98A2B3',
      fontSize: 27,
      paddingLeft: 4,
    },

    footer: {
      alignItems: 'center',
      paddingTop: 12,
      paddingBottom: 16,
    },

    footerName: {
      color: '#2457C5',
      fontSize: 16,
      fontWeight: '700',
      marginBottom: 5,
    },

    footerDescription: {
      color: '#7A8497',
      fontSize: 12,
      textAlign: 'center',
    },

    footerVersion: {
      color: '#A0A8B7',
      fontSize: 11,
      marginTop: 8,
    },

    bottomNav: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      backgroundColor: '#FFFFFF',
      borderTopWidth: 1,
      borderTopColor: '#E8EDF3',
      paddingTop: 9,
      paddingBottom: isWeb ? 12 : 7,
      paddingHorizontal: 4,
    },

    navItem: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: 44,
      gap: 4,
    },

    navLabel: {
      color: '#94A3B8',
      fontSize: isWeb ? 12 : 10,
      textAlign: 'center',
    },

    navLabelSelected: {
      color: '#1E56B2',
      fontWeight: '700',
    },
  });
};
