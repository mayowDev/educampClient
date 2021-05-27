// schema validation middleware using jsonschema.net
// import tv4 from tv4 - schema validation package
// import stateSchema from './stateSchema'
export default ({dispatch, getState}) => next=>action=>{
    next(action)
    //validate returned/updated state
    //if(!tv4.validate(getState(),stateSchema)){
        // console.warn("invalid state schema")
    // }
}

// add this middleware to redux store configuration applyMiddleware