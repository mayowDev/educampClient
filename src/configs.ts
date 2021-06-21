let API_URL = 'https://educampv.herokuapp.com'; 
if(process.env.NODE_ENV === 'development'){
    API_URL ='http://localhost:5000';
}
export const BACKEND_URL = API_URL
export const STRIPE_PUBLISH_KEY = 'pk_test_51IzMmgBph643tycyzqWr41c02oVDvZZbOl7b54anJ0tkFmycWHjZFhVLnAbghlKaiKgVeS1ajLbR3KiLsuWWnlq200ZTNGFp5I';
