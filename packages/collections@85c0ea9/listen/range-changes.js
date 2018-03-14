"use strict";function RangeChangeDescriptor(e){this.name=e,this.isActive=!1,this._willChangeListeners=null,this._changeListeners=null}function RangeChangeListenersRecord(e){var n=RangeChangeListenersSpecificHandlerMethodName.get(e);return n||(n="handle",n+=e.slice(0,1).toUpperCase(),n+=e.slice(1),n+="RangeChange",RangeChangeListenersSpecificHandlerMethodName.set(e,n)),this.specificHandlerMethodName=n,this}function RangeWillChangeListenersRecord(e){var n=RangeWillChangeListenersSpecificHandlerMethodName.get(e);return n||(n="handle",n+=e.slice(0,1).toUpperCase(),n+=e.slice(1),n+="RangeWillChange",RangeWillChangeListenersSpecificHandlerMethodName.set(e,n)),this.specificHandlerMethodName=n,this}function RangeChanges(){throw new Error("Can't construct. RangeChanges is a mixin.")}var WeakMap=require("../weak-map"),Map=require("../_map"),ChangeDescriptor=require("./change-descriptor"),ObjectChangeDescriptor=ChangeDescriptor.ObjectChangeDescriptor,ChangeListenersRecord=ChangeDescriptor.ChangeListenersRecord,ListenerGhost=ChangeDescriptor.ListenerGhost,rangeChangeDescriptors=new WeakMap;RangeChangeDescriptor.prototype=new ObjectChangeDescriptor,RangeChangeDescriptor.prototype.constructor=RangeChangeDescriptor,RangeChangeDescriptor.prototype.changeListenersRecordConstructor=RangeChangeListenersRecord,RangeChangeDescriptor.prototype.willChangeListenersRecordConstructor=RangeWillChangeListenersRecord,Object.defineProperty(RangeChangeDescriptor.prototype,"active",{get:function(){return this._active||(this._active=this._current?this._current.slice():[])}});var RangeChangeListenersSpecificHandlerMethodName=new Map;RangeChangeListenersRecord.prototype=new ChangeListenersRecord,RangeChangeListenersRecord.prototype.constructor=RangeChangeListenersRecord;var RangeWillChangeListenersSpecificHandlerMethodName=new Map;RangeWillChangeListenersRecord.prototype=new ChangeListenersRecord,RangeWillChangeListenersRecord.prototype.constructor=RangeWillChangeListenersRecord,module.exports=RangeChanges,RangeChanges.prototype.getAllRangeChangeDescriptors=function(){return rangeChangeDescriptors.has(this)||rangeChangeDescriptors.set(this,new Map),rangeChangeDescriptors.get(this)},RangeChanges.prototype.getRangeChangeDescriptor=function(e){var n=this.getAllRangeChangeDescriptors();return e=e||"",n.has(e)||n.set(e,new RangeChangeDescriptor(e)),n.get(e)};var ObjectsDispatchesRangeChanges=new WeakMap,dispatchesRangeChangesGetter=function(){return ObjectsDispatchesRangeChanges.get(this)},dispatchesRangeChangesSetter=function(e){return ObjectsDispatchesRangeChanges.set(this,e)},dispatchesChangesMethodName="dispatchesRangeChanges",dispatchesChangesPropertyDescriptor={get:dispatchesRangeChangesGetter,set:dispatchesRangeChangesSetter,configurable:!0,enumerable:!1};RangeChanges.prototype.addRangeChangeListener=function(e,n,t){!this.isObservable&&this.makeObservable&&this.makeObservable();var r,a=this.getRangeChangeDescriptor(n);r=t?a.willChangeListeners:a.changeListeners,r._current?Array.isArray(r._current)?r._current.push(e):r._current=[r._current,e]:r._current=e,void 0===Object.getOwnPropertyDescriptor(this.__proto__||Object.getPrototypeOf(this),dispatchesChangesMethodName)&&Object.defineProperty(this.__proto__||Object.getPrototypeOf(this),dispatchesChangesMethodName,dispatchesChangesPropertyDescriptor),this.dispatchesRangeChanges=!0;var s=this;return function(){s&&(s.removeRangeChangeListener(e,n,t),s=null)}},RangeChanges.prototype.removeRangeChangeListener=function(e,n,t){var r,a=this.getRangeChangeDescriptor(n);if(r=t?a._willChangeListeners:a._changeListeners,r._current)if(r._current===e)r._current=null;else{var s=r._current.lastIndexOf(e);if(s===-1)throw new Error("Can't remove range change listener: does not exist: token "+JSON.stringify(n));a.isActive?(r.ghostCount=r.ghostCount+1,r._current[s]=ListenerGhost):r._current.spliceOne(s)}},RangeChanges.prototype.dispatchRangeChange=function(e,n,t,r){var a,s,i,h,g,o,c,p,C=this.getAllRangeChangeDescriptors(),l=C.values();for(C.dispatchBeforeChange=r;a=l.next().value;){if(a.isActive)return;if(s=r?a._willChangeListeners:a._changeListeners,s&&s._current)if(i=s.specificHandlerMethodName,Array.isArray(s._current)){if(s._current.length){a.isActive=!0;try{for(c=s.removeCurrentGostListenersIfNeeded(),p=ListenerGhost,h=0,g=c.length;h<g;h++)if((o=c[h])!==p)if(o[i])o[i](e,n,t,this,r);else{if(!o.call)throw new Error("Handler "+o+" has no method "+i+" and is not callable");o.call(this,e,n,t,this,r)}}finally{a.isActive=!1}}}else{a.isActive=!0;try{if(o=s._current,o[i])o[i](e,n,t,this,r);else{if(!o.call)throw new Error("Handler "+o+" has no method "+i+" and is not callable");o.call(this,e,n,t,this,r)}}finally{a.isActive=!1}}}},RangeChanges.prototype.addBeforeRangeChangeListener=function(e,n){return this.addRangeChangeListener(e,n,!0)},RangeChanges.prototype.removeBeforeRangeChangeListener=function(e,n){return this.removeRangeChangeListener(e,n,!0)},RangeChanges.prototype.dispatchBeforeRangeChange=function(e,n,t){return this.dispatchRangeChange(e,n,t,!0)};