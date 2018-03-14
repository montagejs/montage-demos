montageDefine("176abc9","core/serialization/deserializer/montage-reviver",{dependencies:["../../core","./values-deserializer","./self-deserializer","./unit-deserializer","../../module-reference","../alias","../bindings","../../promise","../../deprecate","../../converter/camel-case-converter","../../converter/kebab-case-converter","../../shim/string"],factory:function(e,t,i){var r=e("../../core").Montage,n=e("./values-deserializer").ValuesDeserializer,a=e("./self-deserializer").SelfDeserializer,s=e("./unit-deserializer").UnitDeserializer,o=e("../../module-reference").ModuleReference,u=e("../alias").Alias,c=e("../bindings"),l=e("../../promise").Promise,v=e("../../deprecate"),d=e("../../converter/camel-case-converter").singleton,f=e("../../converter/kebab-case-converter").singleton,b="=",g="<-",h="<->";e("../../shim/string");var p=new WeakMap,j=new Map,O=["dispatchEvent","addEventListener","firstElementChild","firstChild","getAttribute","getAttributeNames","getAttributeNode","getElementsByClassName","getElementsByTagName"],m=r.specialize({_require:{value:null},_objectRequires:{value:null},init:{value:function(e,t){if("function"!=typeof e)throw new Error("Function 'require' missing.");if("string"!=typeof e.location)throw new Error("Function 'require' location is missing");if("object"!=typeof t&&"undefined"!=typeof t)throw new Error("Parameter 'objectRequires' should be an object.");return this._require=e,this._objectRequires=t,this}},getModuleDescriptor:{value:function(e,t){for(var r=e.getModuleDescriptor(e.resolve(t));void 0!==r.redirect;)r=e.getModuleDescriptor(i.redirect);return void 0!==r.mappingRedirect?this.getExports(r.mappingRequire,r.mappingRedirect):r}},getExports:{value:function(e,t){var i=this.getModuleDescriptor(e,t);return i?i.exports:void 0}},getModule:{value:function(e,t){var i,r,n=this._objectRequires;return i=n&&t in n?n[t]:this._require,r=this.getExports(i,e),r||!e.endsWith(".mjson")&&!e.endsWith(".meta")||(r=this.getModuleDescriptor(i,e).text),r||(r=i.async(e)),r}}}),y=t.MontageReviver=r.specialize({moduleLoader:{value:null},init:{value:function(e,t,i){return this.moduleLoader=(new m).init(e,t),this._require=e,this._deserializerConstructor=i,this}},getTypeOf:{value:function(e){var t=typeof e;if(null===e)return"null";if(Array.isArray(e))return"array";if("object"===t&&1===Object.keys(e).length){if("@"in e)return"reference";if("/"in e)return"regexp";if("#"in e)return"Element";if("%"in e)return"Module";if(g in e||h in e||b in e)return"binding"}return t}},_checkLabel:{value:function(e,t){return t&&":"!==e[0]?new Error('Aliases can only be defined in template values (start with a colon (:)), "'+e+'".'):t||":"!==e[0]?void 0:new Error('Only aliases are allowed as template values (start with a colon (:), "'+e+'".')}},setProxyForDatasetOnElement:{value:function(e,t){var i=e.dataset;if(null!==Object.getPrototypeOf(i)){var r,n,a=Object.keys(i),s=Object.create(null);if(Proxy.prototype){n=t.values?Object.keys(t.values):Object.keys(t.properties).concat(Object.keys(t.bindings)),a=a.concat(n.filter(function(e){return e.startsWith("dataset.")}));for(var o=0,u=a.length;o<u;o++)r=a[o],i[r]?s[r]=i[r]:s[r.replace(/^dataset\./,"")]=void 0}Object.defineProperty(e,"dataset",{value:new Proxy(s,{set:function(t,r,n){return t[r]=n,i[r]=n,e.nativeSetAttribute(j.get(r)||j.set(r,"data-"+f.convert(r)).get(r),n),!0},get:function(e,t){return e[t]}})})}}},setProxyOnElement:{value:function(e,t){if(!p.has(e)){var i=Object.create(null);if(Proxy.prototype){var r,n;for(n in e)e.hasOwnProperty(n)&&(i[n]=void 0);r=t.values?Object.keys(t.values):Object.keys(t.properties).concat(Object.keys(t.bindings));for(var a=0,s=r.length;a<s;a++)n=r[a],n in e||n.indexOf(".")!==-1||(i[n]=void 0)}p.set(e,new Proxy(i,{set:function(t,i,r){return i in Object.getPrototypeOf(e)||void 0===Object.getOwnPropertyDescriptor(e,i)&&Object.defineProperty(e,i,{set:function(r){t[i]=r,null===r||void 0===r?e.removeAttribute(i):e.nativeSetAttribute(i,r)},get:function(){return t[i]}}),t[i]!==r&&(e[i]=r),!0},get:function(t,i){var r=t[i]||e[i];return"function"==typeof r&&O.indexOf(i)!==-1?r.bind(t[i]?t:e):r}}))}return p.get(e)}},wrapSetAttributeForElement:{value:function(e){if(e.setAttribute===e.nativeSetAttribute){var t=p.get(e);e.setAttribute=function(i,r){var n;i.startsWith("data-")?(n=d.convert(i.replace("data-","")),t.dataset[n]=r):(n=d.convert(i),t[n]=r),e.nativeSetAttribute(i,r)}}}},reviveRootObject:{value:function(e,t,i){var r,n,a="alias"in e;if(r=this._checkLabel(i,a))return l.reject(r);if(e["debugger"],"value"in e){if(t.hasUserObject(i))return n=t.getUserObject(i),t.setObjectLabel(n,i),n;var s=this.getTypeOf(e.value),o=this.reviveValue(e.value,t,i),u=this.reviveObjectLiteral(e,t,void 0,y._unitNames);if(t.setObjectLabel(o,i),"Element"===s){if(!l.is(o)){var c=this.setProxyOnElement(o,e);this.setProxyForDatasetOnElement(o,e),this.wrapSetAttributeForElement(o),t.setBindingsToDeserialize(c,u),this.deserializeMontageObjectValues(c,u.values||u.properties,t),t.setUnitsToDeserialize(c,u,y._unitNames)}}else"object"===s&&(t.setBindingsToDeserialize(o,u),this.deserializeMontageObjectValues(o,u.values||u.properties,t),t.setUnitsToDeserialize(o,u,y._unitNames));return o}return 0===Object.keys(e).length?t.hasUserObject(i)?(n=t.getUserObject(i),t.setObjectLabel(n,i),n):this.reviveExternalObject(e,t,i):"alias"in e?this.reviveAlias(e,t,i):this.reviveMontageObject(e,t,i)}},reviveElement:{value:function(e,t,i){var r=e["#"],n=t.getElementById(r);return n?(i&&t.setObjectLabel(n,i),n):l.reject(new Error("Element with id '"+r+"' was not found."))}},reviveModule:{value:function(e,t,i){var r=e["%"],n=t.getRequire();r=n.resolve(r);var a=n.getModuleDescriptor(r);return(new o).initWithIdAndRequire(a.id,a.require)}},reviveAlias:{value:function(e,t,i){var r=new u;return r.value=e.alias,t.setObjectLabel(r,i),r}},reviveMontageObject:{value:function(e,t,i){var r,n,a,s,o=this,u=e.prototype||e.object,c=!(!u||!u.endsWith(".mjson")&&!u.endsWith(".meta"));return u&&(n=y.parseObjectLocationId(u),r=this.moduleLoader.getModule(n.moduleId,i),s=n.objectName),"string"==typeof r&&c&&this._deserializerConstructor.moduleContexts.has(a=t._require.location+u)?l.resolve(this._deserializerConstructor.moduleContexts.get(a)._objects.root):(!c||l.is(r)||r.montageObject||(r=t._require.async(n.moduleId)),l.is(r)?r.then(function(r){return o.instantiateObject(r,n,e,s,t,i)},function(t){throw t.stack&&console.error(t.stack),new Error('Error deserializing "'+i+'" when loading module "'+n.moduleId+"' from '"+e.prototype+"' cause: "+t.message)}):this.instantiateObject(r,n,e,s,t,i))}},instantiateObject:{value:function(e,t,i,r,n,a){var s,o=i.prototype||i.object;return o&&(o.endsWith(".mjson")||o.endsWith(".meta"))?(s=i&&"prototype"in i?Object.create(e.montageObject):e.montageObject,n.setObjectLabel(s,a),this.instantiateMJSONObject(i,s,r,n,a)):(s=this.getMontageObject(i,e,r,n,a),n.setObjectLabel(s,a),this.instantiateMontageObject(i,s,r,n,a))}},getMontageObject:{value:function(e,t,i,r,n){var a;if(r.hasUserObject(n))return r.getUserObject(n);if("prototype"in e){if(!(i in t))throw new Error('Error deserializing "'+n+'": object named "'+i+'" was not found in "'+e.prototype+'". Available objects are: '+Object.keys(t)+".");return a=t[i],a="function"==typeof a?new a:Object.create(a),a.isDeserializing=!0,a}if("object"in e){if(e.object.endsWith(".json"))return t;if(!(i in t))throw new Error('Error deserializing "'+n+'": object named "'+a+"' was not found given '"+e.object+"'");return t[i]}throw new Error("Error deserializing "+JSON.stringify(e)+', might need "prototype" or "object" on label '+JSON.stringify(n))}},instantiateMJSONObject:{value:function(e,t,i,r,n){var a,s=this;return null!==t&&void 0!==t&&(t.isDeserializing=!0),r.setBindingsToDeserialize(t,e),a=this.reviveObjectLiteral(e,r),l.is(a)?a.then(function(e){return s.deserializeMontageObject(e,t,r,n)}):this.deserializeMontageObject(a,t,r,n)}},instantiateMontageObject:{value:function(e,t,i,r,n){var a,s=this;return null!==t&&void 0!==t&&(t.isDeserializing=!0),e.bindings&&v.deprecationWarningOnce("'bindings' block is deprecated, use 'values' instead"),e.properties&&v.deprecationWarningOnce("'properties' block is deprecated, use 'values' instead"),r.setBindingsToDeserialize(t,e),a=this.reviveObjectLiteral(e,r),l.is(a)?a.then(function(e){return"function"==typeof t.deserializeSelf?s.deserializeCustomMontageObject(t,e,r,n):s.deserializeMontageObject(e,t,r,n)}):"function"==typeof t.deserializeSelf?this.deserializeCustomMontageObject(t,a,r,n):this.deserializeMontageObject(a,t,r,n)}},deserializeMontageObject:{value:function(e,t,i,r){var n;return i.setUnitsToDeserialize(t,e,y._unitNames),n=this.deserializeMontageObjectValues(t,e.values||e.properties,i),t}},deserializeMontageObjectProperties:{value:v.deprecateMethod(void 0,function(e,t,i){return this.deserializeMontageObjectValues(e,t,i)},"deserializeMontageObjectProperties","deserializeMontageObjectValues")},deserializeMontageObjectValues:{value:function(e,t,i){var r;if("function"==typeof e.deserializeProperties||"function"==typeof e.deserializeValues){var a=(new n).initWithReviverAndObjects(this,i);r=e.deserializeValues?e.deserializeValues(a):e.deserializeProperties(a)}else for(var s in t)e[s]=t[s];return r}},deserializeCustomMontageObject:{value:function(e,t,i,r){var n,s=(new a).initWithObjectAndObjectDescriptorAndContextAndUnitNames(e,t,i,y._unitNames);return n=e.deserializeSelf(s),l.is(n)?n.then(function(e){return i.setObjectLabel(e,r),e}):"undefined"!=typeof n?(i.setObjectLabel(n,r),n):e}},didReviveObjects:{value:function(e,t){var i=this;return l.all([this._deserializeBindings(t),this._deserializeUnits(t)]).then(function(){i._invokeDeserializedFromSerialization(e,t)})}},_invokeDeserializedFromSerialization:{value:function(e,t){var i;for(var r in e)i=e[r],null!==i&&void 0!==i&&delete i.isDeserializing,t.hasUserObject(r)||i&&"function"==typeof i.deserializedFromSerialization&&i.deserializedFromSerialization(r)}},_deserializeBindings:{value:function(e){var t,i=e.getBindingsToDeserialize(),r=new s;if(i)try{for(var n=0,a=i.length;n<a;n++)t=i[n],c.deserializeObjectBindings(r.initWithContext(e),t.object,t.bindings)}catch(o){return l.reject(o)}}},_deserializeUnits:{value:function(e){var t,i=e.getUnitsToDeserialize(),r=new s;try{for(var n,a=0;n=i[a];a++){t=n.unitNames;for(var o,u=0;o=t[u];u++)o in n.objectDesc&&(r.initWithContext(e),y._unitRevivers.get(o)(r,n.object,n.objectDesc[o]))}}catch(c){return l.reject(c)}}},_createAssignValueFunction:{value:function(e,t){return function(i){e[t]=i}}},getCustomObjectTypeOf:{writable:!0,value:function(){}},reviveValue:{value:function(e,t,i){var r=this.getTypeOf(e);return"string"===r||"number"===r||"boolean"===r||"null"===r||"undefined"===r?this.reviveNativeValue(e,t,i):"regexp"===r?this.reviveRegExp(e,t,i):"reference"===r?this.reviveObjectReference(e,t,i):"array"===r?this.reviveArray(e,t,i):"object"===r?this.reviveObjectLiteral(e,t,i):"Element"===r?this.reviveElement(e,t,i):"binding"===r?e:this._callReviveMethod("revive"+r,e,t,i)}},reviveNativeValue:{value:function(e,t,i){return i&&t.setObjectLabel(e,i),e}},reviveObjectLiteral:{value:function(e,t,i,r){var n,a=[];i&&t.setObjectLabel(e,i);for(var s in e)if(e.hasOwnProperty(s)&&(!r||r.indexOf(s)>-1)){if(e[s]===e)return e;n=this.reviveValue(e[s],t),l.is(n)?a.push(n.then(this._createAssignValueFunction(e,s))):e[s]=n}return 0===a.length?e:l.all(a).then(function(){return e})}},reviveRegExp:{value:function(e,t,i){var r=e["/"],n=new RegExp(r.source,r.flags);return i&&t.setObjectLabel(n,i),n}},reviveObjectReference:{value:function(e,t,i){var r=e["@"],n=t.getObject(r);return n}},reviveArray:{value:function(e,t,i){var r,n=[];i&&t.setObjectLabel(e,i);for(var a=0,s=e.length;a<s;a++)r=this.reviveValue(e[a],t),l.is(r)?n.push(r.then(this._createAssignValueFunction(e,a))):e[a]=r;return 0===n.length?e:l.all(n).then(function(){return e})}},reviveExternalObject:{value:function(e,t,i){return l.reject(new Error("External object '"+i+"' not found in user objects."))}},_callReviveMethod:{value:function(e,t,i,r){return this[e](t,i,r)}}},{_unitRevivers:{value:new Map},_unitNames:{value:[]},_findObjectNameRegExp:{value:/([^\/]+?)(\.reel)?$/},_toCamelCaseRegExp:{value:/(?:^|-)([^-])/g},_replaceToCamelCase:{value:function(e,t){return t.toUpperCase()}},_locationDescCache:{value:new Map},customObjectRevivers:{value:new Map},parseObjectLocationId:{value:function(e){return this._locationDescCache.get(e)||this.createObjectLocationDesc(e)}},createObjectLocationDesc:{value:function(e){var t,i,r=e.indexOf("[");r>0?(t=e.substr(0,r),i=e.slice(r+1,-1)):(t=e,this._findObjectNameRegExp.test(e),i=RegExp.$1.replace(this._toCamelCaseRegExp,this._replaceToCamelCase));var n={moduleId:t,objectName:i};return this._locationDescCache.set(e,n),n}},defineUnitReviver:{value:function(e,t){this._unitRevivers.set(e,t),this._unitNames.push(e)}},getTypeOf:{value:function(e){return this.prototype.getTypeOf.call(this,e)}},addCustomObjectReviver:{value:function(e){var t=this.customObjectRevivers;for(var i in e)if("getTypeOf"!==i&&"function"==typeof e[i]&&"revive"===i.substr(0,5)){if("undefined"!=typeof t.get(i))return new Error("Reviver '"+i+"' is already registered.");t.set(i,e[i].bind(e))}this.prototype.getCustomObjectTypeOf=this.makeGetCustomObjectTypeOf(e.getTypeOf)}},resetCustomObjectRevivers:{value:function(){this.customObjectRevivers.clear(),this.prototype.getCustomObjectTypeOf=function(){}}},makeGetCustomObjectTypeOf:{value:function(e){var t=this.prototype.getCustomObjectTypeOf;return function(i){return e(i)||t(i)}}}});y.findProxyForElement=function(e){return p.get(e)},"undefined"!=typeof t&&(t.MontageReviver=y)}});