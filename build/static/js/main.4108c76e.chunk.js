(this["webpackJsonpreact-test"]=this["webpackJsonpreact-test"]||[]).push([[0],{12:function(i,e,t){},13:function(i,e,t){},15:function(i,e,t){"use strict";t.r(e);var n=t(1),r=t.n(n),l=t(5),s=t.n(l),d=(t(12),t.p,t(13),t(2)),o=t(3),u=t(7),a=t(6),c=[3],h=[2,3],f=function(){function i(e,t){Object(d.a)(this,i),this.xSize=e,this.ySize=t;var n=this.generateGrids(e,t);this.lifeGrid=n.lifeGrid,this.tempGrid=n.tempGrid}return Object(o.a)(i,[{key:"generateGrids",value:function(i,e){for(var t=[],n=[],r=0;r<i;r++){t[r]=[],n[r]=[];for(var l=0;l<e;l++)t[r][l]=new v,n[r][l]=new v}return{lifeGrid:t,tempGrid:n}}},{key:"grid",get:function(){return this.lifeGrid}},{key:"setCell",value:function(i,e,t){if(!(i>=0&&i<this.xSize&&e>=0&&e<this.ySize))throw"Attempted to set a nonexistant cell";this.lifeGrid[i][e].isAlive=t}},{key:"iterate",value:function(){for(var i=0;i<this.xSize;i++)for(var e=0;e<this.Size;e++)this.applyRulesToCell(i,e);this.applyTempGridToLifeGrid()}},{key:"applyRulesToCell",value:function(i,e){var t=this.lifeGrid[i][e],n=this.getNumberOfLivingNeighbors(i,e);t.isAlive?this.tempGrid[i][e].isAlive=h.includes(n):this.tempGrid[i][e].isAlive=c.includes(n)}},{key:"getNumberOfLivingNeighbors",value:function(i,e){var t,n,r,l,s,d,o,u;return[null===(t=this.lifeGrid[i-1])||void 0===t?void 0:t[e-1],null===(n=this.lifeGrid[i-1])||void 0===n?void 0:n[e],null===(r=this.lifeGrid[i-1])||void 0===r?void 0:r[e+1],null===(l=this.lifeGrid[i])||void 0===l?void 0:l[e-1],null===(s=this.lifeGrid[i])||void 0===s?void 0:s[e+1],null===(d=this.lifeGrid[i+1])||void 0===d?void 0:d[e-1],null===(o=this.lifeGrid[i+1])||void 0===o?void 0:o[e],null===(u=this.lifeGrid[i+1])||void 0===u?void 0:u[e+1]].filter((function(i){return void 0!==i})).filter((function(i){return i.isAlive})).length}},{key:"applyTempGridToLifeGrid",value:function(){for(var i=0;i<this.xSize;i++)for(var e=0;e<this.ySize;e++)this.lifeGrid[i][e].isAlive=this.tempGrid[i][e].isAlive}}]),i}(),v=function i(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];Object(d.a)(this,i),this.isAlive=e},p=t(0),G=function(i){Object(u.a)(t,i);var e=Object(a.a)(t);function t(i){var n;return Object(d.a)(this,t),(n=e.call(this,i)).state={lifeGrid:new f(10,10)},n}return Object(o.a)(t,[{key:"render",value:function(){return Object(p.jsx)("div",{children:Object(p.jsx)("h1",{children:" Oh yeah, It is game of life time! "})})}}]),t}(r.a.Component);var b=function(){return Object(p.jsx)("div",{className:"App",children:Object(p.jsx)("header",{className:"App-header",children:Object(p.jsx)(G,{})})})},j=function(i){i&&i instanceof Function&&t.e(3).then(t.bind(null,16)).then((function(e){var t=e.getCLS,n=e.getFID,r=e.getFCP,l=e.getLCP,s=e.getTTFB;t(i),n(i),r(i),l(i),s(i)}))};s.a.render(Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsx)(b,{})}),document.getElementById("root")),j()}},[[15,1,2]]]);
//# sourceMappingURL=main.4108c76e.chunk.js.map