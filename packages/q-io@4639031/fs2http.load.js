montageDefine("4639031","fs2http",{dependencies:["q","./http","url"],factory:function(e,t,r){function n(e){var r=Object.create(n.prototype);return r.request=function(t){return u.when(t,function(t){t=o.normalizeRequest(t);var r=a.parse(t.url);if("file:"!==r.protocol)return{status:404,headers:{},body:["Can't access protocol "+r.protocol]};var n=r.pathname;return e.open(n,{charset:t.charset}).then(function(e){return{status:200,headers:{},body:e}})})},r.read=function(e,r){return r=r||function(e){return 200===e.status},u.when(t.request(e),function(e){if(!r(e)){var t=new Error("HTTP request failed with code "+e.status);throw t.response=e,t}return u.invoke(e.body,"read")})},r}var u=e("q"),o=e("./http"),a=e("url");t.Client=n,t.request=function(t){return u.fcall(e.async||e,"./fs").then(function(e){return n(e).request(t)})},t.read=function(t,r){return u.fcall(e.async||e,"./fs").then(function(e){return n(e).read(t)})}}});