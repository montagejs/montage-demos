var Montage=require("../../core/core").Montage,FlowBezierSpline=exports.FlowBezierSpline=Montage.specialize({constructor:{value:function(){this._knots=[],this._densities=[],this._getStyleAtIndexTimeBuffer=[]}},_parameterKeys:{value:void 0},knots:{get:function(){return this._knots},set:function(e){this._knots=e}},previousHandlers:{get:function(){return this._previousHandlers||(this._previousHandlers=[]),this._previousHandlers},set:function(e){this._previousHandlers=e}},nextHandlers:{get:function(){return this._nextHandlers||(this._nextHandlers=[]),this._nextHandlers},set:function(e){this._nextHandlers=e}},densities:{get:function(){return this._densities},set:function(e){this._densities=e,this._densitiesLength=this._densities.length,this._maxTime=null}},_parameters:{value:{}},parameters:{get:function(){return this._parameters||(this._parameters={}),this._parameters},set:function(e){this._parameters=e}},_maxTime:{enumerable:!1,value:null},computeMaxTime:{value:function(){return this._computeDensitySummation(),this._densitySummation.length?this._maxTime=this._densitySummation[this._densitySummation.length-1]:this._maxTime=0,this._maxTime}},_densitySummation:{enumerable:!1,value:null},_computeDensitySummation:{enumerable:!1,value:function(){var e,t=this.densities,n=t.length-1,r=0;for(this._densitySummation=[],e=0;e<n;e++)r+=(t[e]+t[e+1])/2,this._densitySummation[e]=r;this._maxTime=null}},_convertSplineTimeToBezierIndexTime:{enumerable:!1,value:function(e){if(e<0)return null;if(null===this._maxTime&&this.computeMaxTime(),e>=this._maxTime)return null;for(var t,n,r,i,s,a=this._densitySummation,o=a.length,u=o-1,l=o>>1;l;)u-l>=0&&a[u-l]>e?u-=l:l>>=1;return t=e-(u?a[u-1]:0),r=this._densities[u],i=this._densities[u+1],s=r-i,n=s<-1e-10||s>1e-10?(r-Math.sqrt(r*r+2*(i-r)*t))/s:t/r,[u,n]}},getPositionAtIndexTime:{value:function(e,t){var n=e[0],r=e[1],i=this._knots[n],s=this._nextHandlers[n],a=this._previousHandlers[n+1],o=this._knots[n+1],u=1-r,l=u*u*u,h=u*u*r*3,m=u*r*r*3,d=r*r*r;return t?[t.x.numerator*(i[0]*l+s[0]*h+a[0]*m+o[0]*d)/t.x.denominator,t.y.numerator*(i[1]*l+s[1]*h+a[1]*m+o[1]*d)/t.y.denominator,t.z.numerator*(i[2]*l+s[2]*h+a[2]*m+o[2]*d)/t.z.denominator]:[i[0]*l+s[0]*h+a[0]*m+o[0]*d,i[1]*l+s[1]*h+a[1]*m+o[1]*d,i[2]*l+s[2]*h+a[2]*m+o[2]*d]}},getRotationAtIndexTime:{value:function(e){var t,n,r,i=e[0],s=e[1],a=1-s,o=this._parameters;return t="undefined"!=typeof o.rotateX?o.rotateX.data[i]*a+o.rotateX.data[i+1]*s:0,n="undefined"!=typeof o.rotateY?o.rotateY.data[i]*a+o.rotateY.data[i+1]*s:0,r="undefined"!=typeof o.rotateZ?o.rotateZ.data[i]*a+o.rotateZ.data[i+1]*s:0,[t,n,r]}},_getStyleAtIndexTimeBuffer:{value:null},getStyleAtIndexTime:{value:function(e){var t,n,r,i,s,a,o,u=e[0],l=e[1],h=this._parameters,m=1-l,d=this._getStyleAtIndexTimeBuffer;if(d.length=0,i=this._parameterKeys)for(s=i.length,t=0;t<s;t++)n=i[t],a=h[n],o=a.data,"rotateX"!==n&&"rotateY"!==n&&"rotateZ"!==n&&void 0!==o[u]&&void 0!==o[u+1]&&(r=n,r+=":",r+=1e-5*(1e5*(o[u]*m+o[u+1]*l)>>0),r+=a.units,r+=";",d.push(r));return d.join("")}},transformVectorArray:{value:function(e,t){var n,r,i=e.length,s=[];for(r=0;r<i;r++)n=e[r],n&&(s[r]=[n[0]*t[0]+n[1]*t[4]+n[2]*t[8]+t[12],n[0]*t[1]+n[1]*t[5]+n[2]*t[9]+t[13],n[0]*t[2]+n[1]*t[6]+n[2]*t[10]+t[14]]);return s}},transform:{value:function(e){var t=new FlowBezierSpline;return t._densities=this._densities,t._densitySummation=this._densitySummation,t._knots=this.transformVectorArray(this.knots,e),t._previousHandlers=this.transformVectorArray(this.previousHandlers,e),t._nextHandlers=this.transformVectorArray(this.nextHandlers,e),t}},deCasteljau:{value:function(e,t,n,r,i){var s=1-i,a=s*e[0]+i*t[0],o=s*t[0]+i*n[0],u=s*n[0]+i*r[0],l=s*a+i*o,h=s*o+i*u,m=s*l+i*h,d=s*e[1]+i*t[1],_=s*t[1]+i*n[1],c=s*n[1]+i*r[1],f=s*d+i*_,v=s*_+i*c,x=s*f+i*v,p=s*e[2]+i*t[2],y=s*t[2]+i*n[2],g=s*n[2]+i*r[2],H=s*p+i*y,S=s*y+i*g,b=s*H+i*S;return[[e,[a,d,p],[l,f,H],[m,x,b]],[[m,x,b],[h,v,S],[u,c,g],r]]}},cubic:{enumerable:!1,value:function(e,t,n,r,i){return((e*i+t)*i+n)*i+r}},cubeRoot:{enumerable:!1,value:function(e){return e>0?Math.pow(e,1/3):-Math.pow(-e,1/3)}},cubicRealRoots:{enumerable:!1,value:function(e,t,n,r){var i=Math;if(0!==e){var s=1/e,a=t*s,o=n*s,u=(3*o-a*a)*(1/9),l=(4.5*a*o-13.5*r*s-a*a*a)*(1/27),h=u*u*u+l*l;if(h>0){var m=i.sqrt(h);return[this.cubeRoot(l+m)+this.cubeRoot(l-m)+a*(-1/3)]}if(h>0){if(0!==l){var d=this.cubeRoot(l),_=2*d+a*(-1/3),c=a*(-1/3)-d;return _<c?[_,c]:[c,_]}return[a*(-1/3)]}var f=i.acos(l/i.sqrt(-u*u*u))*(1/3),v=i.sqrt(-u),x=v*i.sin(f)*1.7320508075688772,p=a*(-1/3);return v*=i.cos(f),[p-v-x,p-v+x,p+2*v]}if(0!==t){var y=n*n-4*t*r;return y>=0?(y=i.sqrt(y),[(-n-y)/(2*t),(y-n)/(2*t)]):[]}return 0!==n?[-r/n]:[]}},_halfPI:{enumerable:!1,value:.5*Math.PI},reflectionMatrix:{enumerable:!1,value:function(e,t,n){var r=Math,i=this._halfPI-r.atan2(t,e),s=r.sin(i),a=r.cos(i),o=this._halfPI-r.atan2(n,e*s+t*a),u=r.sin(o);return[u*s,a*u,r.cos(o)]}},reflectedY:{enumerable:!1,value:function(e,t,n,r){return e*r[0]+t*r[1]+n*r[2]}},getScaledKnots:{value:function(e){var t,n=[];for(t=0;t<this._knots.length;t++)this._knots[t]&&(n[t]=[e.x.numerator*this._knots[t][0]/e.x.denominator,e.y.numerator*this._knots[t][1]/e.y.denominator,e.z.numerator*this._knots[t][2]/e.z.denominator]);return n}},getScaledPreviousHandlers:{value:function(e){var t,n=[];for(t=0;t<this._previousHandlers.length;t++)this._previousHandlers[t]&&(n[t]=[e.x.numerator*this._previousHandlers[t][0]/e.x.denominator,e.y.numerator*this._previousHandlers[t][1]/e.y.denominator,e.z.numerator*this._previousHandlers[t][2]/e.z.denominator]);return n}},getScaledNextHandlers:{value:function(e){var t,n=[];for(t=0;t<this._nextHandlers.length;t++)this._nextHandlers[t]&&(n[t]=[e.x.numerator*this._nextHandlers[t][0]/e.x.denominator,e.y.numerator*this._nextHandlers[t][1]/e.y.denominator,e.z.numerator*this._nextHandlers[t][2]/e.z.denominator]);return n}},directedPlaneBezierIntersection:{enumerable:!1,value:function(e,t,n,r,i,s,a,o){for(var u,l,h=this.reflectionMatrix(r[0],r[1],r[2]),m=this.reflectedY(i[0]-e,i[1]-t,i[2]-n,h),d=this.reflectedY(s[0]-e,s[1]-t,s[2]-n,h),_=this.reflectedY(a[0]-e,a[1]-t,a[2]-n,h),c=this.reflectedY(o[0]-e,o[1]-t,o[2]-n,h),f=3*(d-_)+c-m,v=3*(m+_)-6*d,x=3*(d-m),p=this.cubicRealRoots(f,v,x,m),y=0,g=0,H=[];g<p.length&&p[g]<=0;)g++;for(;g<p.length&&p[g]<1;)u=y,y=p[g],l=.5*(u+y),this.cubic(f,v,x,m,l)>=0&&H.push([u,y]),g++;return l=.5*(y+1),this.cubic(f,v,x,m,l)>=0&&H.push([y,1]),H}}});