import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    },
    reminderSwitch: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 16,
    },
    scheduledNotification: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
    },
    notificationList: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        height: 'auto'
    }
})
export default styles;