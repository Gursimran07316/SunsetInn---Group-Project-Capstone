import React, { useEffect, useState } from 'react';
import { View, Text, Switch, Platform, ScrollView } from 'react-native';
import styles from './styles';
import * as Notifications from 'expo-notifications';

export default function Settings({isDarkTheme}) {
    const [reminder, setReminder] = useState(false);
    const [schedule, setSchedule] = useState([]);
    const backgroundColor = isDarkTheme ? "black" : 'white';
    const textStyle=isDarkTheme?styles.darkText:styles.lightText
    const handleReminderPress = async () => {
        if(!reminder){
            const scheduled = await scheduleReminder()
            if(scheduled){
                setReminder(true)
                setSchedule(await getSchedule())
            }
        } else {
            const cancelled = await cancelReminder()
            if (cancelled){
                setReminder(false)
                setSchedule(await getSchedule())
            }
        }
    }

    useEffect(() => {
        (async () => {
         
            const previouslyScheduled = await getSchedule()
            console.log("previously scheduled: ", previouslyScheduled)
            setSchedule(previouslyScheduled)
            console.log(setSchedule(previouslyScheduled))
            console.log("item ", previouslyScheduled)
            if(previouslyScheduled.find((item) => item.type === 'reminder')){
                console.log("item type", item.type)
                //setReminder(true)
            }
        })()
    }, [])

  return (
    <ScrollView style={styles.container} backgroundColor={backgroundColor}>
        <View style={styles.reminderSwitch}>
            <Text style={textStyle}>Set Daily Reminder</Text>
            <Switch value= {reminder} onValueChange={handleReminderPress} />
        </View>
        <View style={styles.scheduledNotification}>
            <Text style={textStyle}>Scheduled Notifications: </Text>
            <Text style={textStyle}>{schedule.length}</Text>
        </View>
        <View style={[styles.notificationList,textStyle]}>
            {schedule.map((item, index) => (
                
                <Text key={index} style={textStyle}>
                    {item.type}: {item.id}
                </Text>
            ))}
        </View>
    </ScrollView>
  );
}

async function scheduleReminder(){
    try{
        console.log("Schedule for: ", Platform.OS)
        const permissions = await Notifications.getPermissionsAsync()
        //console.log('- Permissions: ', permissions)
        if(!permissions.granted){
            const request = await Notifications.requestPermissionsAsync({
                ios: {
                    allowAlert: true,
                    allowSound: true,
                    allowBadge: true
                }
            })
            console.log("- Request: ", request)
            if(!request){
                return false
            }
        }
        const id = await Notifications.scheduleNotificationAsync({
            content: {
                title: "Recpies Reminder",
                body: "Remember to check new recipes",
                subtitle: "Do not forget.",
                
                data: {
                    userId: 1778896,
                    userName: 'Gursimran',
                    type: 'reminder'
                }
            },
            trigger: {
                
                seconds: 30,
                repeats: true
            }
        })
        if(!id){
            console.log("!!!no ID!!!!")
            return false
        }
        return true
    } catch {
        return false
    }
}

async function cancelReminder(){
    console.log("cancel for: ", Platform.OS)
    let cancelled = false
    const schedule = await getSchedule()
    for (const item of schedule) {
        if(item.type === 'reminder'){
            await Notifications.cancelAllScheduledNotificationsAsync(item.id)
            console.log("Cancelled: ", item.id)
            cancelled = true
        }
    }
    return cancelled
}

async function getSchedule(){
    const scheduledNotifications = await Notifications.getAllScheduledNotificationsAsync()
    //console.log("Scheduled Noti: ", scheduledNotifications)
    const schedule = []
    scheduledNotifications.forEach((scheduledNotification) => {
        schedule.push({
            id: scheduledNotification.identifier,
            type: scheduledNotification.content.data.type
        })
    })
    //console.log("schedule: ", schedule)
    return schedule
}