import*as a from"@swc/helpers";import{Color as b,rgbConvert as c,Rgb as d}from"./color.js";var e,f,g,h=Math.PI/180,i=180/Math.PI,j=-0.5210501878999999-0.1347134789;export default function cubehelix(k,l,m,n){return 1===arguments.length?(function(o){if(a._instanceof(o,Cubehelix))return new Cubehelix(o.h,o.s,o.l,o.opacity);a._instanceof(o,d)||(o=c(o));var p=o.r/255,q=o.g/255,r=o.b/255,s=(j*r+ -1.7884503806*p-3.5172982438*q)/(j+ -1.7884503806-3.5172982438),t=r-s,u=-((1.97294*(q-s)- -0.29227*t)/0.90649),v=Math.sqrt(u*u+t*t)/(1.97294*s*(1-s)),w=v?Math.atan2(u,t)*i-120:NaN;return new Cubehelix(w<0?w+360:w,v,s,o.opacity)})(k):new Cubehelix(k,l,m,null==n?1:n)};export function Cubehelix(x,y,z,A){this.h=+x,this.s=+y,this.l=+z,this.opacity=+A}e=Cubehelix,f=cubehelix,g=(function(B,C){var D=Object.create(B.prototype);for(var E in C)D[E]=C[E];return D})(b,{brighter:function(F){return F=null==F?1.4285714285714286:Math.pow(1.4285714285714286,F),new Cubehelix(this.h,this.s,this.l*F,this.opacity)},darker:function(G){return G=null==G?0.7:Math.pow(0.7,G),new Cubehelix(this.h,this.s,this.l*G,this.opacity)},rgb:function(){var H=isNaN(this.h)?0:(this.h+120)*h,I=+this.l,J=isNaN(this.s)?0:this.s*I*(1-I),K=Math.cos(H),L=Math.sin(H);return new d(255*(I+J*(-0.14861*K+1.78277*L)),255*(I+J*(-0.29227*K+ -0.90649*L)),255*(I+J*(1.97294*K)),this.opacity)}}),e.prototype=f.prototype=g,g.constructor=e