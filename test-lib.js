const lib = require('./dist/index.js');
console.log('Available exports:', Object.keys(lib));
console.log('Has App component:', !!lib.App);
console.log('Has HeroSection:', !!lib.HeroSection);
console.log('Has Button:', !!lib.Button);