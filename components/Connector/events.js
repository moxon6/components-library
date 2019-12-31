const subscriptions = {}

export default {
    subscribe(subscriptionName, fn) {
        const [namespace, event] = subscriptionName.split("/");
        subscriptions[event] = subscriptions[event] || {}
        subscriptions[event][namespace] = fn
    },

    dispatchEvent(event, ...args) {
        for ( let fn of Object.values(subscriptions[event]) ) {
            fn(...args)
        }
    }
}