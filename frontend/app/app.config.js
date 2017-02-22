angular
    .module('taternet')
    .config(config);
function config($mdThemingProvider, $authProvider){
    materialConfig($mdThemingProvider);
    satellizerConfig($authProvider);
    // JWTconfig($httpProvider, jwtOptionsProvider)
}

function materialConfig($mdThemingProvider) {
    console.log('MD theming')
    $mdThemingProvider.theme('default')
    .primaryPalette('blue-grey', {
        'default': '500', // by default use shade 500 from the pink palette for primary intentions
        'hue-1': '700', // use shade 700 for the <code>md-hue-1</code> class
        'hue-2': '800', // use shade 800 for the <code>md-hue-2</code> class
        'hue-3': 'A200' // use shade A200 for the <code>md-hue-3</code> class
    })
    .accentPalette('light-blue', {
    'default': '700' // use shade 200 for default, and keep all other shades the same
    });
}

function satellizerConfig($authProvider){
    console.log("satellizerConfig ran");
    $authProvider.google({
        url: '/api/v1/login/social/jwt_user/google-oauth2/',
        clientId: '373420519079-h24np71la11of55ccqef6ne5q9hcvo9p.apps.googleusercontent.com',
        redirectUri: window.location.origin + '/',
    });
    
    $authProvider.tokenType = 'JWT';
    $authProvider.tokenPrefix = 'satellizer_jwt';
}

// function JWTconfig($httpProvider, jwtOptionsProvider) {
//     jwtOptionsProvider.config({
//       authPrefix: 'JWT ',
//       tokenGetter: ['options', function(options) {
//         // Skip authentication for any requests ending in .html
//         // if (options.url.substr(options.url.length - 5) == '.json') {
//         //   return null;
//         // }
//         if (!localStorage.getItem('ls.currentUser')){
//           currentUser = {username: '' ,token:''};
//           localStorage.setItem('ls.currentUser', JSON.stringify(currentUser))
//         };
//         return JSON.parse(localStorage.getItem('ls.currentUser')).token
//       }]
//     });
//    $httpProvider.interceptors.push('jwtInterceptor');
// }