//how middlewares like redux-thunk or redux-promise take care of async redux actions behind the scenes
export default ({dispatch}) => next=>action=>{
    //check if action has promise in the payload, if so, wait to be resolved and then dispatch new action,
    // if action is not async/promise send it to next middileware if there is no other middlewares the action is returned
    if(!action.payload || !action.payload.then){
        return next(action)
    }
    //take the action and wait the response to be solved. then modify the payload to the response
    action.payload.then((response)=>{
        const newAction = {...action, payload: response}
        console.log('action resolved', newAction)
        
        dispatch(newAction)
    })

}


// this my action working with this custome middleware

// export const login = (data:ITypeLogin)=>{
//     try {
//         const res=  API.login(data)
//         console.log('loginResponse', res);
        
//         if(res){
//             return {type:LOGIN_SUCCESS, payload: res}
//         }
//     } catch (error) {
//         console.log('signInErr',error)     
//     }
// }

// then change the configurestore of redux with this async middleware instead of redux-thunk
