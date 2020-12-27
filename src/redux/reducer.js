let initState = 0
export default function operaCount(preState=initState, action) {
    let newPreState
    let value = action.data;
    console.log("value-----",value);
    switch (action.type) {
        case "Increment":
            newPreState = value + preState
            return newPreState
        case "DECREMENT":
            newPreState = preState - value
            return newPreState
        default:
            return preState
    }
}