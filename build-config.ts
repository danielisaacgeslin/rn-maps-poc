const { readFileSync, writeFileSync } = require('fs'); // tslint:disable-line
const { join } = require('path'); // tslint:disable-line
const packageJSON = require('./package.json'); //tslint:disable-line

const env = process.env.NODE_ENV;
const isProd = env === 'production';

const config = readFileSync(join(__dirname, `src/config/${env}.config.json`));
writeFileSync(join(__dirname, 'src/config/config.json'), config);

const app = JSON.parse(readFileSync(join(__dirname, 'app.dist.json')));
app.expo.name = isProd ? 'rnmapspoc' : `${env} rnmapspoc`;
app.expo.slug = isProd ? 'rnmapspoc' : `${env}-rnmapspoc`;
app.expo.version = app.expo.ios.buildNumber = packageJSON.version;
app.expo.ios.bundleIdentifier = app.expo.android.package = isProd ? 'com.rnmapspoc' : `com.rnmapspoc.${env}`;
writeFileSync(join(__dirname, 'app.json'), JSON.stringify(app, null, 2));
