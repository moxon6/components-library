const subscriptions = {}

export default {
    subscribe(event, fn) {
        subscriptions[event] = subscriptions[event] || []
        subscriptions[event].push(fn)
    },

    dispatchEvent(event, ...args) {
        for (let fn of subscriptions[event]) {
            fn(...args)
        }
    }
}