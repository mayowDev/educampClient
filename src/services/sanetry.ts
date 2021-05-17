import Raven from 'raven-js'

function init(){
    Raven.config('httpfromsentry',{
        release: "0.0.0",
        environment: "development"
    }).install()
}

function log(error){
     Raven.captureException(error)
}

export default{
    log, init
}