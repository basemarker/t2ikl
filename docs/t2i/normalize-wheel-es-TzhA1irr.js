var e,n,t,i,r,a,o,u,d,c,l,f,s,p,m,w=!1;function x(){if(!w){w=!0;var x=navigator.userAgent,h=/(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:Opera(?:.+Version.|.)(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))|(?:Trident\/\d+\.\d+.*rv:(\d+\.\d+))/.exec(x),v=/(Mac OS X)|(Windows)|(Linux)/.exec(x);if(f=/\b(iPhone|iP[ao]d)/.exec(x),s=/\b(iP[ao]d)/.exec(x),c=/Android/i.exec(x),p=/FBAN\/\w+;/i.exec(x),m=/Mobile/i.exec(x),l=!!/Win64/.exec(x),h){(e=h[1]?parseFloat(h[1]):h[5]?parseFloat(h[5]):NaN)&&document&&document.documentMode&&(e=document.documentMode);var N=/(?:Trident\/(\d+.\d+))/.exec(x);a=N?parseFloat(N[1])+4:e,n=h[2]?parseFloat(h[2]):NaN,t=h[3]?parseFloat(h[3]):NaN,(i=h[4]?parseFloat(h[4]):NaN)?(h=/(?:Chrome\/(\d+\.\d+))/.exec(x),r=h&&h[1]?parseFloat(h[1]):NaN):r=NaN}else e=n=t=r=i=NaN;if(v){if(v[1]){var M=/(?:Mac OS X (\d+(?:[._]\d+)?))/.exec(x);o=!M||parseFloat(M[1].replace("_","."))}else o=!1;u=!!v[2],d=!!v[3]}else o=u=d=!1}}var h,v={ie:function(){return x()||e},ieCompatibilityMode:function(){return x()||a>e},ie64:function(){return v.ie()&&l},firefox:function(){return x()||n},opera:function(){return x()||t},webkit:function(){return x()||i},safari:function(){return v.webkit()},chrome:function(){return x()||r},windows:function(){return x()||u},osx:function(){return x()||o},linux:function(){return x()||d},iphone:function(){return x()||f},mobile:function(){return x()||f||s||c||m},nativeApp:function(){return x()||p},android:function(){return x()||c},ipad:function(){return x()||s}},N=v,M={canUseDOM:!!(typeof window<"u"&&window.document&&window.document.createElement)};M.canUseDOM&&(h=document.implementation&&document.implementation.hasFeature&&!0!==document.implementation.hasFeature("",""));var F=function(e,n){if(!M.canUseDOM||n&&!("addEventListener"in document))return!1;var t="on"+e,i=t in document;if(!i){var r=document.createElement("div");r.setAttribute(t,"return;"),i="function"==typeof r[t]}return!i&&h&&"wheel"===e&&(i=document.implementation.hasFeature("Events.wheel","3.0")),i};function D(e){var n=0,t=0,i=0,r=0;return"detail"in e&&(t=e.detail),"wheelDelta"in e&&(t=-e.wheelDelta/120),"wheelDeltaY"in e&&(t=-e.wheelDeltaY/120),"wheelDeltaX"in e&&(n=-e.wheelDeltaX/120),"axis"in e&&e.axis===e.HORIZONTAL_AXIS&&(n=t,t=0),i=10*n,r=10*t,"deltaY"in e&&(r=e.deltaY),"deltaX"in e&&(i=e.deltaX),(i||r)&&e.deltaMode&&(1==e.deltaMode?(i*=40,r*=40):(i*=800,r*=800)),i&&!n&&(n=i<1?-1:1),r&&!t&&(t=r<1?-1:1),{spinX:n,spinY:t,pixelX:i,pixelY:r}}D.getEventType=function(){return N.firefox()?"DOMMouseScroll":F("wheel")?"wheel":"mousewheel"};var b=D;
/**
* Checks if an event is supported in the current execution environment.
*
* NOTE: This will not work correctly for non-generic events such as `change`,
* `reset`, `load`, `error`, and `select`.
*
* Borrows from Modernizr.
*
* @param {string} eventNameSuffix Event name, e.g. "click".
* @param {?boolean} capture Check if the capture phase is supported.
* @return {boolean} True if the event is supported.
* @internal
* @license Modernizr 3.0.0pre (Custom Build) | MIT
*/export{b as Y};
//# sourceMappingURL=normalize-wheel-es-TzhA1irr.js.map
