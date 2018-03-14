montageDefine("176abc9","package.json",{exports:{name:"montage",version:"17.1.1",description:"Build your next application with a browser based platform that really gets the web.",license:"BSD-3-Clause",repository:{type:"git",url:"git+https://github.com/montagejs/montage.git"},main:"core/core",engines:{node:"4.8.4",npm:"2.15.11"},production:!0,dependencies:{bluebird:"~3.5.0",collections:"~5.0.x",frb:"~4.0.x",htmlparser2:"~3.0.5","q-io":"^1.13.3",mr:"^17.0.11","weak-map":"^1.0.5","lodash.kebabcase":"^4.1.1","lodash.camelcase":"^4.3.0","lodash.trim":"^4.5.1","lodash.snakecase":"^4.1.1","proxy-polyfill":"~0.1.7"},devDependencies:{concurrently:"^3.4.0","http-server":"^0.10.0",xhr2:"^0.1.4","jasmine-console-reporter":"^1.2.7","jasmine-core":"^2.5.2",jshint:"^2.9.5",karma:"^1.5.0","karma-chrome-launcher":"^2.0.0","karma-coverage":"^1.1.1","karma-firefox-launcher":"^1.0.1","karma-ie-launcher":"^1.0.0","karma-jasmine":"^1.1.0","karma-phantomjs-launcher":"^1.0.2","karma-safari-launcher":"^1.0.0","montage-testing":"git://github.com/montagejs/montage-testing.git#master","mop-integration":"git://github.com/montagejs/mop-integration.git#master",open:"0.0.5"},scripts:{test:"node test/run-node.js",jsdoc:"jsdoc -c jsdoc.json","start:demo":'concurrently "http-server -p 8084" "open http://localhost:8084/demo/"',integration:"MONTAGE_VERSION=${MONTAGE_VERSION:=./} MOP_VERSION=${MOP_VERSION:=#master} node node_modules/mop-integration/integration",lint:"jshint .","test:karma":"karma start --no-auto-watch --single-run","test:karma-travis":"karma start --no-auto-watch --single-run --browsers=Chrome_travis_ci","test:karma-firefox":"karma start --no-auto-watch --single-run --browsers=Firefox","test:karma-chrome":"karma start --no-auto-watch --single-run --browsers=Chrome","test:karma-debug":"karma start --auto-watch --no-single-run --browsers=PhantomJS_debug","test:karma-dev":"karma start --auto-watch --no-single-run --capture","test:jasmine":'concurrently "http-server -p 8085" "open http://localhost:8085/test/run.html"'},exclude:["demo","report","doc","test","tools"],gitHead:"fb88551cd10ab4f4a28579d2d39dd8f1ae515061",readmeFilename:"README.md",bugs:{url:"https://github.com/montagejs/montage/issues"},homepage:"https://github.com/montagejs/montage#readme",_id:"montage@17.1.1",_shasum:"48281159030556f244bebff4b6d4ab1edda10b53",_from:"montagejs/montage#master",_resolved:"git://github.com/montagejs/montage.git#fb88551cd10ab4f4a28579d2d39dd8f1ae515061",redirects:{montage:"core/core"},mappings:{mr:{name:"mr",hash:"68ac777",location:"../mr@68ac777/"},bluebird:{name:"bluebird",hash:"6330253",location:"../bluebird@6330253/"},collections:{name:"collections",hash:"85c0ea9",location:"../collections@85c0ea9/"},frb:{name:"frb",hash:"f75d1cd",location:"../frb@f75d1cd/"},htmlparser2:{name:"htmlparser2",hash:"33facd8",location:"../htmlparser2@33facd8/"},"q-io":{name:"q-io",hash:"4639031",location:"../q-io@4639031/"},"weak-map":{name:"weak-map",hash:"7619811",location:"../weak-map@7619811/"},"lodash.kebabcase":{name:"lodash.kebabcase",hash:"bbffe87",location:"../lodash.kebabcase@bbffe87/"},"lodash.camelcase":{name:"lodash.camelcase",hash:"375c005",location:"../lodash.camelcase@375c005/"},"lodash.trim":{name:"lodash.trim",hash:"d958b9d",location:"../lodash.trim@d958b9d/"},"lodash.snakecase":{name:"lodash.snakecase",hash:"dbb2498",location:"../lodash.snakecase@dbb2498/"},"proxy-polyfill":{name:"proxy-polyfill",hash:"930df53",location:"../proxy-polyfill@930df53/"}},hash:"176abc9",useScriptInjection:!0}});