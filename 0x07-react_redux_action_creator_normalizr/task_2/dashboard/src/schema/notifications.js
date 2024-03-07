import * as notificationsData from '../../notifications.json'
import { normalize, schema } from 'normalizr'


const user = new schema.Entity('users')
const message = new schema.Entity('messages', {}, {
    idAttribute: 'guid'
})
const notification = new schema.Entity('notifications', {
    author: user,
    context: message
})

const mySchema = [notification]

const normalizedData = normalize(notificationsData.default, mySchema)

function getAllNotificationsByUser(userId) {
    const notifications = normalizedData.entities.notifications
    const messages = normalizedData.entities.messages
    const result = []
    for (const key in notifications) {
        if (notifications[key].author === userId) {
            result.push(messages[notifications[key].context])
        }
    }

    return result
}


export { getAllNotificationsByUser, normalizedData }
