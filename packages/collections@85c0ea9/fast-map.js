"use strict";function FastMap(t,e,a,o){return this instanceof FastMap?(e=e||Object.equals,a=a||Object.hash,o=o||Function.noop,this.contentEquals=e,this.contentHash=a,this.getDefault=o,this.store=new Set((void 0),function(t,a){return e(t.key,a.key)},function(t){return a(t.key)}),this.length=0,void this.addEach(t)):new FastMap(t,e,a,o)}var Shim=require("./shim"),Set=require("./fast-set"),GenericCollection=require("./generic-collection"),GenericMap=require("./generic-map"),PropertyChanges=require("./listen/property-changes"),MapChanges=require("./listen/map-changes");module.exports=FastMap,FastMap.FastMap=FastMap,Object.addEach(FastMap.prototype,GenericCollection.prototype),Object.addEach(FastMap.prototype,GenericMap.prototype),Object.addEach(FastMap.prototype,PropertyChanges.prototype),Object.addEach(FastMap.prototype,MapChanges.prototype),FastMap.from=GenericCollection.from,FastMap.prototype.constructClone=function(t){return new this.constructor(t,this.contentEquals,this.contentHash,this.getDefault)},FastMap.prototype.log=function(t,e){e=e||this.stringify,this.store.log(t,e)},FastMap.prototype.stringify=function(t,e){return e+JSON.stringify(t.key)+": "+JSON.stringify(t.value)};