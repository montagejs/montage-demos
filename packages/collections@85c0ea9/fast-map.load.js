montageDefine("85c0ea9","fast-map",{dependencies:["./shim","./fast-set","./generic-collection","./generic-map","./listen/property-changes","./listen/map-changes","fast-map"],factory:function(t,e,n){"use strict";function o(t,e,n,i){return this instanceof o?(e=e||Object.equals,n=n||Object.hash,i=i||Function.noop,this.contentEquals=e,this.contentHash=n,this.getDefault=i,this.store=new s((void 0),function(t,n){return e(t.key,n.key)},function(t){return n(t.key)}),this.length=0,void this.addEach(t)):new o(t,e,n,i)}var s=(t("./shim"),t("./fast-set")),i=t("./generic-collection"),c=t("./generic-map"),r=t("./listen/property-changes"),a=t("./listen/map-changes");n.exports=o,o.FastMap=o,Object.addEach(o.prototype,i.prototype),Object.addEach(o.prototype,c.prototype),Object.addEach(o.prototype,r.prototype),Object.addEach(o.prototype,a.prototype),o.from=i.from,o.prototype.constructClone=function(t){return new this.constructor(t,this.contentEquals,this.contentHash,this.getDefault)},o.prototype.log=function(t,e){e=e||this.stringify,this.store.log(t,e)},o.prototype.stringify=function(t,e){return e+JSON.stringify(t.key)+": "+JSON.stringify(t.value)}}});