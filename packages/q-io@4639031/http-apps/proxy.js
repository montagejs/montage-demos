var HTTP=require("../http"),URL=require("url2"),Q=require("q");exports.Proxy=function(r){if("string"==typeof r){var e=r;r=function(r){return r.url=e,r}}return function(e,t){return Q.when(r.apply(this,arguments),function(r){return HTTP.request(r)})}},exports.ProxyTree=function(r){return exports.Proxy(function(e){return e.url=URL.resolve(r,e.pathInfo.replace(/^\//,"")),e})};