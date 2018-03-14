montageDefine("e64bb50","ui/video.reel/video.html",{"text":"<!DOCTYPE html><html><head><meta charset=utf-8><style>.digit-Video{position:relative;z-index:0;width:320px;height:180px;margin:0;background:hsl(0,0%,10%);overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.digit-Video.fullscreen{position:absolute;display:-webkit-flex;display:flex;box-sizing:border-box;z-index:1000;top:0;left:0;border:none;width:100%;height:100%}.digit-Video-frame{display:block;width:100%;height:100%;-webkit-transform-origin:top;-moz-transform-origin:top;-ms-transform-origin:top;transform-origin:top;-webkit-transition:webkit-transform .2s cubic-bezier(.36,.12,.2,.92);-moz-transition:-moz-transform .2s cubic-bezier(.36,.12,.2,.92);-ms-transition:-ms-transform .2s cubic-bezier(.36,.12,.2,.92);transition:transform .2s cubic-bezier(.36,.12,.2,.92)}.digit-Video-frame::-webkit-media-controls{display:none}.digit-Video--isPlaying .digit-Video-cover{display:none}.digit-Video-cover{top:0;left:0;bottom:0;z-index:1;opacity:0;box-shadow:inset 0 0 0 1px hsla(0,0%,0%,.1);-webkit-transition-property:opacity;-moz-transition-property:opacity;-ms-transition-property:opacity;transition-property:opacity;pointer-events:none}.digit-Video-cover,.digit-Video-cover-button.digit-Button{position:absolute;right:0;-webkit-transition-duration:.2s;-moz-transition-duration:.2s;-ms-transition-duration:.2s;transition-duration:.2s;-webkit-transition-timing-function:cubic-bezier(.02,.4,.2,.96);-moz-transition-timing-function:cubic-bezier(.02,.4,.2,.96);-ms-transition-timing-function:cubic-bezier(.02,.4,.2,.96);transition-timing-function:cubic-bezier(.02,.4,.2,.96)}.digit-Video-cover-button.digit-Button{top:50%;z-index:2;margin-top:-.75em;border-radius:2em 0 0 2em;width:2em;height:1.6em;line-height:1.6em;font-size:40px;background-color:hsla(0,100%,100%,1);-webkit-transform:translate3d(2em,0,0);-moz-transform:translate3d(2em,0,0);-ms-transform:translate3d(2em,0,0);transform:translate3d(2em,0,0);-webkit-transition-property:-webkit-transform;-moz-transition-property:-moz-transform;-ms-transition-property:-moz-transform;transition-property:transform}.digit-Video-cover-button.digit-Button.montage--active{background-color:hsla(0,100%,100%,.9)}.digit-Video-cover-button:before{position:absolute;left:30%;top:0}.digit-Video--firstPlay .digit-Video-cover{opacity:1;pointer-events:auto}.digit-Video--firstPlay .digit-Video-cover-button,.digit-Video--showControls .digit-VideoControl{-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);-ms-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}.digit-Video--showControls .digit-VideoControl{opacity:1;-webkit-transition-duration:.2s;-moz-transition-duration:.2s;-ms-transition-duration:.2s;transition-duration:.2s;-webkit-transition-delay:0s;-moz-transition-delay:0s;-ms-transition-delay:0s;transition-delay:0s;-webkit-transition-timing-function:cubic-bezier(.02,.4,.2,.96);-moz-transition-timing-function:cubic-bezier(.02,.4,.2,.96);-ms-transition-timing-function:cubic-bezier(.02,.4,.2,.96);transition-timing-function:cubic-bezier(.02,.4,.2,.96)}[data-montage-skin=\"light\"] .digit-Video-cover{background:-webkit-linear-gradient(-45deg,hsla(0,0%,100%,.05),hsla(0,0%,100%,.2)50%,hsla(0,0%,100%,0)50%);background:-moz-linear-gradient(-45deg,hsla(0,0%,100%,.05),hsla(0,0%,100%,.2)50%,hsla(0,0%,100%,0)50%);background:-ms-linear-gradient(-45deg,hsla(0,0%,100%,.05),hsla(0,0%,100%,.2)50%,hsla(0,0%,100%,0)50%);background:linear-gradient(-45deg,hsla(0,0%,100%,.05),hsla(0,0%,100%,.2)50%,hsla(0,0%,100%,0)50%)}[data-montage-skin=\"light\"] .digit-Video-cover-button{color:hsla(0,0%,0%,.6);text-shadow:0 1px hsla(0,0%,100%,1);background:-webkit-linear-gradient(top,hsla(0,0%,100%,.96),hsla(0,0%,90%,.9));background:-moz-linear-gradient(top,hsla(0,0%,100%,.96),hsla(0,0%,90%,.9));background:-ms-linear-gradient(top,hsla(0,0%,100%,.96),hsla(0,0%,90%,.9));background:linear-gradient(top,hsla(0,0%,100%,.96),hsla(0,0%,90%,.9));box-shadow:inset 0 1px 1px hsla(0,0%,100%,1),0 2px 3px hsla(0,0%,0%,.2)}[data-montage-skin=\"dark\"] .digit-Video-cover{background:-webkit-linear-gradient(-45deg,hsla(0,0%,100%,.05),hsla(0,0%,100%,.2)50%,hsla(0,0%,100%,0)50%);background:-moz-linear-gradient(-45deg,hsla(0,0%,100%,.05),hsla(0,0%,100%,.2)50%,hsla(0,0%,100%,0)50%);background:-ms-linear-gradient(-45deg,hsla(0,0%,100%,.05),hsla(0,0%,100%,.2)50%,hsla(0,0%,100%,0)50%);background:linear-gradient(-45deg,hsla(0,0%,100%,.05),hsla(0,0%,100%,.2)50%,hsla(0,0%,100%,0)50%)}[data-montage-skin=\"dark\"] .digit-Video-cover-button{color:hsla(0,0%,100%,.7);text-shadow:0 1px hsla(0,0%,0%,.2);background:-webkit-linear-gradient(top,hsla(0,0%,24%,.92),hsla(0,0%,15%,1));background:-moz-linear-gradient(top,hsla(0,0%,24%,.92),hsla(0,0%,15%,1));background:-ms-linear-gradient(top,hsla(0,0%,24%,.92),hsla(0,0%,15%,1));background:linear-gradient(top,hsla(0,0%,24%,.92),hsla(0,0%,15%,1));box-shadow:inset 0 1px 0 hsla(0,0%,100%,.15),0 2px 3px hsla(0,0%,0%,.3)}</style><style>@font-face{font-family:'entypo';src:url('icons/packages/digit@e64bb50/ui/video.reel/fonts/entypo.eot');src:url('icons/packages/digit@e64bb50/ui/video.reel/fonts/entypo.eot?#iefix') format('embedded-opentype'),url('icons/packages/digit@e64bb50/ui/video.reel/fonts/entypo.svg#entypo') format('svg'),url('icons/packages/digit@e64bb50/ui/video.reel/fonts/entypo.woff') format('woff'),url('icons/packages/digit@e64bb50/ui/video.reel/fonts/entypo.ttf') format('truetype');font-weight:400;font-style:normal}.icon-play:before,.icon-pause:before,.icon-cw:before,.icon-ccw:before,.icon-arrow-left:before,.icon-arrow-right:before,.icon-resize-enlarge:before,.icon-resize-shrink:before,.icon-volume:before,.icon-sound:before,.icon-mute:before,.icon-ellipsis:before,.digit-Video-cover-button:before,.digit-VideoControl-button-play:before,.digit-VideoControl-button-fullScreen:before{font-family:'entypo';speak:none;font-style:normal;font-weight:400;-webkit-font-smoothing:antialiased}.digit-Video-cover-button:before,.digit-VideoControl-button-play:before,.icon-play:before{content:\"\\e101\"}.digit-VideoControl--playing .digit-VideoControl-button-play:before,.icon-pause:before{content:\"\\e102\"}.icon-cw:before{content:\"\\e103\"}.icon-ccw:before{content:\"\\e104\"}.icon-arrow-left:before{content:\"\\e105\"}.icon-arrow-right:before{content:\"\\e106\"}.digit-VideoControl-button-fullScreen:before,.icon-resize-enlarge:before{content:\"\\e107\"}.icon-resize-shrink:before{content:\"\\e108\"}.icon-volume:before{content:\"\\e109\"}.icon-sound:before{content:\"\\e10a\"}.icon-mute:before{content:\"\\e10b\"}.icon-ellipsis:before{content:\"\\e10c\"}</style><script type=text/montage-serialization>{\"owner\":{\"properties\":{\"element\":{\"#\":\"video\"},\"mediaElement\":{\"#\":\"mediaElement\"}}},\"control\":{\"prototype\":\"ui/video-control.reel\",\"properties\":{\"element\":{\"#\":\"control\"},\"video\":{\"@\":\"owner\"}},\"bindings\":{\"videoController\":{\"<-\":\"@owner.videoController\"}}},\"play\":{\"prototype\":\"ui/button.reel\",\"properties\":{\"element\":{\"#\":\"play\"}},\"listeners\":[{\"type\":\"action\",\"listener\":{\"@\":\"owner\"}}]}}</script></head><body><div data-montage-id=video class=\"digit-Video digit-Video--firstPlay\"><video data-montage-id=mediaElement class=digit-Video-frame></video><div class=digit-Video-cover><button data-montage-id=play class=digit-Video-cover-button></button></div><menu data-montage-id=control></menu></div></body></html>"})