montageDefine("176abc9","ui/condition.reel/condition",{dependencies:["../component","../../core/logger"],factory:function(e,t,n){var o=e("../component").Component;e("../../core/logger").logger("condition");t.Condition=o.specialize({hasTemplate:{value:!1},_condition:{value:!0},_contents:{value:null},_needsClearDomContent:{value:!1},__contentDocumentFragment:{value:null},_contentDocumentFragment:{get:function(){return!this.__contentDocumentFragment&&this.element&&(this.__contentDocumentFragment=document.createDocumentFragment()),this.__contentDocumentFragment}},condition:{set:function(e){e!==this._condition&&(this._condition=e,this.needsDraw=!0,this.isDeserializing||"remove"!==this.removalStrategy||(e?this.domContent=this._contentDocumentFragment.childNodes:this._needsDraw=this._needsClearDomContent=!0))},get:function(){return this._condition}},_clearDomContent:{value:function(){if("remove"===this.removalStrategy&&!this._condition){for(var e=this.element.childNodes;e.length;)this._contentDocumentFragment.appendChild(e[0]);this.domContent=null,this._shouldClearDomContentOnNextDraw=!1,this.needsDraw=!1}this._needsClearDomContent=!1}},deserializedFromTemplate:{value:function(){this._condition||this._clearDomContent()}},_removalStrategy:{value:"remove"},removalStrategy:{get:function(){return this._removalStrategy},set:function(e){this._removalStrategy!==e&&(this._removalStrategy=e,this.needsDraw=!0)}},draw:{value:function(){this.condition?this.element.classList.remove("montage-invisible"):this.element.classList.add("montage-invisible"),this._needsClearDomContent&&this._clearDomContent()}}})}});