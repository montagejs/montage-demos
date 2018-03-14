montageDefine("85c0ea9","lru-set",{dependencies:["./shim","./set","./generic-collection","./generic-set","./listen/property-changes","./listen/range-changes","lru-set"],factory:function(t,e,s){"use strict";function n(t,e,s,o,i){return this instanceof n?(e=e||1/0,s=s||Object.equals,o=o||Object.hash,i=i||Function.noop,this.store=new r((void 0),s,o),this.contentEquals=s,this.contentHash=o,this.getDefault=i,this.capacity=e,this.length=0,void this.addEach(t)):new n(t,e,s,o,i)}var r=(t("./shim"),t("./set").CollectionsSet),o=t("./generic-collection"),i=t("./generic-set"),h=t("./listen/property-changes"),a=t("./listen/range-changes");s.exports=n,n.LruSet=n,Object.addEach(n.prototype,o.prototype),Object.addEach(n.prototype,i.prototype),Object.addEach(n.prototype,h.prototype),Object.addEach(n.prototype,a.prototype),Object.defineProperty(n.prototype,"size",o._sizePropertyDescriptor),n.from=o.from,n.prototype.constructClone=function(t){return new this.constructor(t,this.capacity,this.contentEquals,this.contentHash,this.getDefault)},n.prototype.has=function(t){return this.store.has(t)},n.prototype.get=function(t,e){if(e)throw new Error("LruSet#get does not support second argument: equals");return t=this.store.get(t),void 0!==t?(this.store["delete"](t),this.store.add(t)):t=this.getDefault(t),t},n.prototype.add=function(t){var e,s=this.store.has(t),n=[],r=[];return s?(this.store["delete"](t),this.store.add(t)):this.capacity>0&&(n.push(t),this.length>=this.capacity&&(e=this.store.order.head.next,r.push(e.value)),this.dispatchesRangeChanges&&this.dispatchBeforeRangeChange(n,r,0),this.store.add(t),r.length>0&&this.store["delete"](e.value),this.length=this.length+n.length-r.length,this.dispatchesRangeChanges&&this.dispatchRangeChange(n,r,0)),n.length!==r.length},n.prototype["delete"]=function(t,e){if(e)throw new Error("LruSet#delete does not support second argument: equals");var s=this.store.has(t);return s&&(this.dispatchesRangeChanges&&this.dispatchBeforeRangeChange([],[t],0),this.store["delete"](t),this.length--,this.dispatchesRangeChanges&&this.dispatchRangeChange([],[t],0)),s},n.prototype.one=function(){if(this.length>0)return this.store.one()},n.prototype.clear=function(){this.store.clear(),this.length=0},n.prototype.reduce=function(t,e){var s=arguments[2],n=this.store,r=0;return n.reduce(function(e,n){return t.call(s,e,n,r++,this)},e,this)},n.prototype.reduceRight=function(t,e){var s=arguments[2],n=this.store,r=this.length-1;return n.reduceRight(function(e,n){return t.call(s,e,n,r--,this)},e,this)},n.prototype.iterate=function(){return this.store.iterate()}}});