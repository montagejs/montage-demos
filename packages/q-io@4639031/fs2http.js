function Client(e){var r=Object.create(Client.prototype);return r.request=function(r){return Q.when(r,function(r){r=HTTP.normalizeRequest(r);var t=URL.parse(r.url);if("file:"!==t.protocol)return{status:404,headers:{},body:["Can't access protocol "+t.protocol]};var n=t.pathname;return e.open(n,{charset:r.charset}).then(function(e){return{status:200,headers:{},body:e}})})},r.read=function(e,r){return r=r||function(e){return 200===e.status},Q.when(exports.request(e),function(e){if(!r(e)){var t=new Error("HTTP request failed with code "+e.status);throw t.response=e,t}return Q.invoke(e.body,"read")})},r}var Q=require("q"),HTTP=require("./http"),URL=require("url");exports.Client=Client,exports.request=function(e){return Q.fcall(require.async||require,"./fs").then(function(r){return Client(r).request(e)})},exports.read=function(e,r){return Q.fcall(require.async||require,"./fs").then(function(r){return Client(r).read(e)})};