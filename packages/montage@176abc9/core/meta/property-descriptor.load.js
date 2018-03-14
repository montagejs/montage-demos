montageDefine("176abc9","core/meta/property-descriptor",{dependencies:["../core","../promise","../deprecate","../logger","../core","../core","../core","../core"],factory:function(e,t,r){var i=e("../core").Montage,a=e("../promise").Promise,l=e("../deprecate"),o=(e("../logger").logger("objectDescriptor"),{name:"default",cardinality:1,mandatory:!1,readOnly:!1,denyDelete:!1,valueType:"string",collectionValueType:"list",valueObjectPrototypeName:"",valueObjectModuleId:"",valueDescriptor:void 0,enumValues:[],defaultValue:void 0,helpKey:""});t.PropertyDescriptor=i.specialize({initWithNameObjectDescriptorAndCardinality:{value:function(e,t,r){return this._name=null!==e?e:o.name,this._owner=t,this.cardinality=r>0?r:o.cardinality,this}},initWithNameBlueprintAndCardinality:{value:l.deprecateMethod(void 0,function(e,t,r){return this.initWithNameObjectDescriptorAndCardinality(e,t,r)},"new PropertyBlueprint().initWithNameBlueprintAndCardinality","new PropertyDescriptor().initWithNameObjectDescriptorAndCardinality")},serializeSelf:{value:function(e){e.setProperty("name",this.name),e.setProperty("objectDescriptor",this._owner,"reference"),this.cardinality===1/0?e.setProperty("cardinality",-1):this._setPropertyWithDefaults(e,"cardinality",this.cardinality),this._setPropertyWithDefaults(e,"mandatory",this.mandatory),this._setPropertyWithDefaults(e,"readOnly",this.readOnly),this._setPropertyWithDefaults(e,"denyDelete",this.denyDelete),this._setPropertyWithDefaults(e,"valueType",this.valueType),this._setPropertyWithDefaults(e,"collectionValueType",this.collectionValueType),this._setPropertyWithDefaults(e,"valueObjectPrototypeName",this.valueObjectPrototypeName),this._setPropertyWithDefaults(e,"valueObjectModuleId",this.valueObjectModuleId),this._setPropertyWithDefaults(e,"valueDescriptor",this._valueDescriptorReference),this.enumValues.length>0&&this._setPropertyWithDefaults(e,"enumValues",this.enumValues),this._setPropertyWithDefaults(e,"defaultValue",this.defaultValue),this._setPropertyWithDefaults(e,"helpKey",this.helpKey),this._setPropertyWithDefaults(e,"definition",this.definition)}},deserializeSelf:{value:function(e){var t;t=e.getProperty("name"),void 0!==t&&(this._name=t),t=e.getProperty("objectDescriptor")||e.getProperty("blueprint"),void 0!==t&&(this._owner=t),this._overridePropertyWithDefaults(e,"cardinality"),this.cardinality===-1&&(this.cardinality=1/0),this._overridePropertyWithDefaults(e,"mandatory"),this._overridePropertyWithDefaults(e,"readOnly"),this._overridePropertyWithDefaults(e,"denyDelete"),this._overridePropertyWithDefaults(e,"valueType"),this._overridePropertyWithDefaults(e,"collectionValueType"),this._overridePropertyWithDefaults(e,"valueObjectPrototypeName"),this._overridePropertyWithDefaults(e,"valueObjectModuleId"),this._overridePropertyWithDefaults(e,"_valueDescriptorReference","valueDescriptor","targetBlueprint"),this._overridePropertyWithDefaults(e,"enumValues"),this._overridePropertyWithDefaults(e,"defaultValue"),this._overridePropertyWithDefaults(e,"helpKey"),this._overridePropertyWithDefaults(e,"definition")}},_setPropertyWithDefaults:{value:function(e,t,r){null!==r&&r!==o[t]&&e.setProperty(t,r)}},_getPropertyWithDefaults:{value:function(e){var t,r,i,a=Array.prototype.slice.call(arguments).slice(1,1/0);for(r=0,i=a.length;r<i&&!t;r+=1)t=e.getProperty(a[r]);return t||o[a[0]]}},_overridePropertyWithDefaults:{value:function(e,t){var r,i,a,l;for(r=arguments.length>2?Array.prototype.slice.call(arguments,2,1/0):[t],a=0,l=r.length;a<l&&!i;a++)i=e.getProperty(r[a]);this[t]=void 0===i?o[r[0]]:i}},_owner:{value:null},owner:{get:function(){return this._owner}},_name:{value:null},name:{serializable:!1,get:function(){return this._name}},identifier:{get:function(){return[this.owner.identifier,this.name].join("_")}},cardinality:{value:o.cardinality},mandatory:{value:o.mandatory},denyDelete:{value:o.denyDelete},readOnly:{value:o.readOnly},isToMany:{get:function(){return this.cardinality===1/0||this.cardinality>1}},isDerived:{get:function(){return!1}},definition:{value:null},valueType:{value:o.valueType},collectionValueType:{value:o.collectionValueType},valueObjectPrototypeName:{value:o.valueObjectPrototypeName},valueObjectModuleId:{value:o.valueObjectModuleId},valueDescriptor:{serializable:!1,get:function(){return this._valueDescriptorReference&&"function"==typeof this._valueDescriptorReference.promise?(l.deprecationWarningOnce("valueDescriptor reference via ObjectDescriptorReference","direct reference via object syntax"),this._valueDescriptorReference.promise(this.require)):this._valueDescriptorReference&&a.resolve(this._valueDescriptorReference)},set:function(e){this._valueDescriptorReference=e}},_targetObjectDescriptorReference:{value:null},_enumValues:{value:null},enumValues:{get:function(){return this._enumValues?this._enumValues:[]},set:function(e){Array.isArray(e)&&(this._enumValues=e)}},defaultValue:{value:o.defaultValue},helpKey:{value:o.helpKey},objectDescriptorModuleId:e("../core")._objectDescriptorModuleIdDescriptor,objectDescriptor:e("../core")._objectDescriptorDescriptor,serializable:{value:!0},isAssociationBlueprint:{get:l.deprecateMethod(void 0,function(){return!!this._valueDescriptorReference},"isAssociationBlueprint","No analog")},targetBlueprint:{get:l.deprecateMethod(void 0,function(){return this.valueDescriptor},"targetBlueprint.get","valueDescriptor.get"),set:l.deprecateMethod(void 0,function(e){this.valueDescriptor=e},"targetBlueprint.get","valueDescriptor.set")},blueprintDescriptorModuleId:e("../core")._objectDescriptorModuleIdDescriptor,blueprint:e("../core")._objectDescriptorDescriptor})}});