montageDefine("f75d1cd","merge",{dependencies:["collections/shim"],factory:function(e,t,r){"use strict";function n(e,t){for(var r,n=(t.length+1)*(e.length+1),i=Array(n),s=Array(t.length+1),l=Array(t.length+1),a=0;a<e.length+1;a++){for(var f=0;f<t.length+1;f++){var h,o;if(0===a&&0===f)h=" ",o=0;else if(0===a)h="insert",o=f;else if(0===f)h="delete",o=a;else if(e[a-1]===t[f-1])h="retain",o=l[f-1];else{var c=s[f-1],g=l[f];g<c?(h="delete",o=g+1):(h="insert",o=c+1)}i[a+f*(e.length+1)]=h,s[f]=o}r=s,s=l,l=r}return{edges:i,cost:l[t.length],source:t,target:e}}function i(e){for(var t,r,n=[],i=e.edges,s=t=e.target.length,l=e.source.length;t||l;){var a=i[t+l*(s+1)];if("delete"===a){if(r&&"delete"===r[0])r[1]++;else{var f=["delete",1];r=f,n.push(f)}t--}else if("insert"===a){if(r&&"insert"===r[0])r[1]++;else{var f=["insert",1];r=f,n.push(f)}l--}else if("retain"===a){var f=["retain",1];r&&"retain"===r[0]?r[1]++:(r=f,n.push(f)),t--,l--}}return n.reverse(),n}function s(e,t){return i(n(e,t))}function l(e,t){for(var r=s(e,t),n=[],i=0,l=0,a=0;a<r.length;){var f=r[a++];if("insert"===f[0])n.push([l,0,t.slice(l,l+f[1])]),l+=f[1];else if("delete"===f[0])if(a<r.length&&"insert"===r[a][0]){var h=r[a++];n.push([l,f[1],t.slice(l,l+h[1])]),i+=f[1],l+=h[1]}else n.push([l,f[1]]),i+=f[1];else"retain"==f[0]&&(i+=f[1],l+=f[1])}return n}function a(e,t){for(var r=0;r<t.length;r++)e.swap.apply(e,t[r])}function f(e,t){a(e,l(e,t))}e("collections/shim"),t.graphOt=n,t.traceOt=i,t.ot=s,t.diff=l,t.apply=a,t.merge=f}});