angular
    .module('myApp')
    .config(config);

function config($mdThemingProvider) {
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