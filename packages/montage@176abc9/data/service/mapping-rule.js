var Montage=require("montage").Montage,compile=require("frb/compile-evaluator"),parse=require("frb/parse"),ONE_WAY_BINDING="<-",TWO_WAY_BINDING="<->";exports.MappingRule=Montage.specialize({converter:{value:void 0},expression:{get:function(){return!this._expression&&this.sourcePathSyntax&&(this._expression=compile(this.sourcePathSyntax)),this._expression}},inversePropertyName:{value:void 0},isReverter:{value:void 0},propertyDescriptor:{value:void 0},requirements:{get:function(){return!this._requirements&&this.sourcePathSyntax&&(this._requirements=this._parseRequirementsFromSyntax(this.sourcePathSyntax)),this._requirements}},_parseRequirementsFromSyntax:{value:function(e,r){var t=e.args,s=e.type;if(r=r||[],"property"===s&&"value"===t[0].type)r.push(t[1].value);else if("property"===s&&"property"===t[0].type){var i=[t[1].value];this._parseRequirementsFromSyntax(t[0],i),r.push(i.reverse().join("."))}else"record"===s&&this._parseRequirementsFromRecord(e,r);return r}},_parseRequirementsFromRecord:{value:function(e,r){var t=this,s=e.args,i=Object.keys(s);i.forEach(function(e){t._parseRequirementsFromSyntax(s[e],r)})}},serviceIdentifier:{value:void 0},sourcePath:{value:void 0},sourcePathSyntax:{get:function(){return!this._sourcePathSyntax&&this.sourcePath&&(this._sourcePathSyntax=parse(this.sourcePath)),this._sourcePathSyntax}},targetPath:{value:void 0},evaluate:{value:function(e){var r=this.expression(e);return this.converter?this.isReverter?this.converter.revert(r):this.converter.convert(r):r}}},{withRawRuleAndPropertyName:{value:function(e,r,t){var s=new this,i=t?e[ONE_WAY_BINDING]||e[TWO_WAY_BINDING]:r,a=t&&r||e[TWO_WAY_BINDING];return s.inversePropertyName=e.inversePropertyName,s.serviceIdentifier=e.serviceIdentifier,s.sourcePath=i,s.targetPath=a,s}}});