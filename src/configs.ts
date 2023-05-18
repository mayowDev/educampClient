let API_URL; 
if(process.env.NODE_ENV === 'development'){
    API_URL ='http://localhost:4000';
}else{
    API_URL ='https://educampapi-production.up.railway.app';
}
export const BACKEND_URL = API_URL
export const STRIPE_PUBLISH_KEY = 'pk_test_51IzMmgBph643tycyzqWr41c02oVDvZZbOl7b54anJ0tkFmycWHjZFhVLnAbghlKaiKgVeS1ajLbR3KiLsuWWnlq200ZTNGFp5I';
