var Component=require("montage/ui/component").Component,demos=require("../../assets/data/demos.json");exports.Main=Component.specialize({constructor:{value:function(){this["super"]()}},demos:{value:null},enterDocument:{value:function(e){var o=this;o.demos=demos}}});