montageDefine("4639031","writer",{dependencies:["q"],factory:function(e,r,n){function o(e,r){var n=Object.create(o.prototype);r&&e.setEncoding&&e.setEncoding(r);var i=t.defer();return e.on("error",function(e){i.reject(e),i=t.defer()}),e.on("drain",function(){i.resolve(),i=t.defer()}),n.write=function(r){return e.writeable||e.writable?("string"!=typeof r&&(r=new Buffer(r)),e.write(r)?t.resolve():i.promise):t.reject(new Error("Can't write to non-writable (possibly closed) stream"))},n.flush=function(){return i.promise},n.close=function(){var r;return s&&(r=t.defer(),e.on("finish",function(){r.resolve()}),e.on("error",function(e){r.reject(e)})),e.end(),i.resolve(),r?r.promise:t()},n.destroy=function(){return e.destroy(),i.resolve(),t.resolve()},n.node=e,t(n)}var t=e("q");n.exports=o;var i=process.versions.node.split("."),s=i[0]>=1||i[1]>=10}});