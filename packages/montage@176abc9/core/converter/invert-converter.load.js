montageDefine("176abc9","core/converter/invert-converter",{dependencies:["./converter","../deprecate"],factory:function(e,n,t){var r,c=e("./converter").Converter,o=e("../deprecate"),i=!1,a=n.InvertConverter=c.specialize({constructor:{value:function(){return this.constructor===a?(r||(r=this),i||o.deprecationWarning("Instantiating InvertConverter is deprecated, use its singleton instead"),r):this}},convert:{value:function(e){return!e}},revert:{value:function(e){return!e}}});Object.defineProperty(n,"singleton",{get:function(){return r||(i=!0,r=new a,i=!1),r}})}});