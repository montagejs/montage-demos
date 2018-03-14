var Montage=require("montage/core/core").Montage,Component=require("montage/ui/component").Component,PressComposer=require("montage/composer/press-composer").PressComposer,AbstractVideo=require("montage/ui/base/abstract-video").AbstractVideo;exports.Video=AbstractVideo.specialize({constructor:{value:function(){AbstractVideo.constructor.call(this),this.addPathChangeListener("videoController.status",this,"handleControllerStatusChange")}},enterDocument:{value:function(e){AbstractVideo.enterDocument&&AbstractVideo.enterDocument.call(this,e),e&&(this.setupFirstPlay(),this.addOwnPropertyChangeListener("src",this),this.addOwnPropertyChangeListener("posterSrc",this))}},prepareForActivationEvents:{value:function(){this._pressComposer.addEventListener("pressStart",this,!1),this._pressComposer.addEventListener("press",this,!1),this._pressComposer.addEventListener("pressCancel",this,!1)}},handlePlayAction:{value:function(e){this.loadMedia(),this.videoController.play(),this.classList.remove("digit-Video--firstPlay")}},handleVideoPress:{value:function(e){this.videoController.status===this.videoController.EMPTY&&(this.loadMedia(),this.classList.remove("digit-Video--firstPlay"),this._pressComposer.unload(),this._pressComposer.removeEventListener("pressStart",this,!1),this._pressComposer.removeEventListener("press",this,!1),this._pressComposer.removeEventListener("pressCancel",this,!1),this._pressComposer=null)}},handleTouchstart:{value:function(){this.clearHideControlsTimeout(),this.classList.add("digit-Video--showControls"),document.addEventListener("touchend",this,!1)}},handleTouchend:{value:function(){this.setHideControlsTimeout()}},handleMousedown:{value:function(){this.clearHideControlsTimeout(),this.classList.add("digit-Video--showControls"),document.addEventListener("mouseup",this,!1)}},handleMouseup:{value:function(){this.setHideControlsTimeout()}},handleControllerStatusChange:{value:function(e,t,s){this.videoController&&(this._firstPlay||e===this.videoController.PLAYING?this._firstPlay&&e===this.videoController.PLAYING&&this.doFirstPlay():(this.clearHideControlsTimeout(),this.classList.add("digit-Video--showControls")))}},handleSrcChange:{value:function(){var e=this.mediaElement,t=document.createElement("video");t.className=e.className,this.element.replaceChild(t,e),this.mediaElement=t,this.setupFirstPlay()}},handlePostersrcChange:{value:function(){this.showPoster()}},setupFirstPlay:{value:function(){this.element.removeEventListener("touchstart",this,!1),this.element.removeEventListener("mousedown",this,!1),this._firstPlay=!0,this.videoController&&this.videoController.stop(),this.classList.add("digit-Video--firstPlay"),this.classList.remove("digit-Video--showControls"),this._pressComposer=new PressComposer,this._pressComposer.identifier="video",this.addComposerForElement(this._pressComposer,this.mediaElement),this.showPoster()}},draw:{value:function(){AbstractVideo.draw&&AbstractVideo.draw.call(this),this.supportsFullScreen&&this.isFullScreen?this.element.classList.add("fullscreen"):this.element.classList.remove("fullscreen")}},doFirstPlay:{value:function(e){this.element.addEventListener("touchstart",this,!1),this.element.addEventListener("mousedown",this,!1),this._firstPlay=!1}},setHideControlsTimeout:{value:function(e){var t=this;this.clearHideControlsTimeout(),this._hideControlsTimeout=setTimeout(function(){t.classList.remove("digit-Video--showControls")},2500)}},clearHideControlsTimeout:{value:function(e){this._hideControlsTimeout&&clearTimeout(this._hideControlsTimeout)}},_firstPlay:{value:!0},_hideControlsTimeout:{value:null}});