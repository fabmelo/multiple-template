https://www.digitalocean.com/community/tutorials/angular-angular-webpack-bundle-analyzer


"scripts": {
  "ng": "ng",
  "start": "ng serve",
  "build": "ng build",
  "build:stats": "ng build --stats-json",
  "watch": "ng build --watch --configuration development",
  "analyze": "webpack-bundle-analyzer dist/angular-bundle-analyzer-example/stats.json",
  "test": "ng test"
},

npm run build:stats

npm run analyze
