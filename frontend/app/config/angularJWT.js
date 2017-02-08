// angular
//     .module('taternet')
//     .config(config);

// function config($httpProvider, jwtOptionsProvider) {
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