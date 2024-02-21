"use strict";var l=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var o=l(function(f,u){
var n=require('@stdlib/assert-is-collection/dist'),a=require('@stdlib/array-base-mskfilter/dist'),s=require('@stdlib/array-base-count-truthy/dist'),v=require('@stdlib/array-zeros/dist'),c=require('@stdlib/array-dtype/dist'),i=require('@stdlib/error-tools-fmtprodmsg/dist');function g(e,r){var t;if(!n(e))throw new TypeError(i('null2O',e));if(!n(r))throw new TypeError(i('null2y',r));if(e.length!==r.length)throw new Error(i("invalid arguments. Must provide equal length array-like objects."));return t=c(e),t==="generic"||t===null?a(e,r):a.assign(e,r,v(s(r),t),1,0)}u.exports=g
});var q=o();module.exports=q;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
