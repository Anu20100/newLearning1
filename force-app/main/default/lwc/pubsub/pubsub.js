const subscribers = {};

//subscribe/register a callback event
// * @param {string} eventName - Name of the event that you are subscribing
// * @param {function} callback - Function to invoke when said event is fired.
const subscribe = (eventName,callback)=>{
    if(!subscribers[eventName]){
        subscribers[eventName] = new Set();

    }
    subscribers[eventName].add(callback);
};

//unsubscribe
const unsubscribe = (eventName,callback)=>{
    subscribers[eventName].delete(callback);
};

//unsubscribeAll
const unregisterAll = () => {
    subscribers={};
};

//publish or fire an event
const publish = (eventName,payload)=>{
    if(subscribers[eventName]){
        subscribers[eventName].forEach(callback=>{
            try {
                callback(payload);
            } catch(error){

            }
        }

        )
    }
};


export default{
    subscribe,
    publish,
    unsubscribe,
    unregisterAll,
};


