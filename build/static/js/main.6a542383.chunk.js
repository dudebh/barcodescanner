(this.webpackJsonpscanbarcode=this.webpackJsonpscanbarcode||[]).push([[0],{11:function(e,t,c){},13:function(e,t,c){},14:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),r=c(5),o=c.n(r),i=(c(11),c(3)),s=c(2),u=c.n(s),d=c(6),l=c(0);var b=function(e){var t=Object(n.useState)(!1),c=Object(i.a)(t,2),a=(c[0],c[1],Object(n.useState)(!1)),r=Object(i.a)(a,2),o=r[0],s=r[1],b=Object(n.useState)(null),f=Object(i.a)(b,2),m=(f[0],f[1]);Object(n.useEffect)((function(){s(!1),u.a.init(d,(function(e){return e&&console.log(e,"error msg"),u.a.start(),function(){u.a.stop()}})),u.a.onProcessed((function(e){var t=u.a.canvas.ctx.overlay,c=u.a.canvas.dom.overlay;e&&(e.boxes&&(t.clearRect(0,0,Number(c.getAttribute("width")),Number(c.getAttribute("height"))),e.boxes.filter((function(t){return t!==e.box})).forEach((function(e){u.a.ImageDebug.drawPath(e,{x:0,y:1},t,{color:"green",lineWidth:2})}))),e.box&&u.a.ImageDebug.drawPath(e.box,{x:0,y:1},t,{color:"#00F",lineWidth:2}),e.codeResult&&e.codeResult.code&&u.a.ImageDebug.drawPath(e.line,{x:"x",y:"y"},t,{color:"red",lineWidth:3}))})),u.a.onDetected(j)}),[e.isReload]);var j=function(t){o||(console.log(t.codeResult.code),e.setBarcodeNumber(t.codeResult.code)),s(!0),document.getElementById("interactive").getElementsByTagName("video")[0].pause(),u.a.stop(),function(e){m(e)}(t.codeResult.code)};return Object(l.jsx)("div",{className:"camera-container",children:Object(l.jsx)("div",{id:"interactive",className:"viewport"})})};c(13);var f=function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)("Barcode Number"),o=Object(i.a)(r,2),s=o[0],u=o[1];Object(n.useEffect)((function(){u("Barcode Number")}),[c]);var d=function(){u("")};return Object(l.jsxs)("div",{className:"flex flex-col gap-2 justify-center items-center",children:[Object(l.jsx)(b,{setBarcodeNumber:u,isReload:c}),Object(l.jsx)("div",{className:"flex mt-2 justify-center border-black border-b-2 gap-2 text-gray-600",onClick:function(){d()},style:{cursor:"pointer"},children:Object(l.jsx)("p",{children:s})}),Object(l.jsx)("div",{className:"flex justify-center",children:Object(l.jsx)("a",{href:"/",onClick:function(e){e.preventDefault()},className:"text-xs underline text-blue-600 hover:text-blue-800 visited:text-purple-600",children:"Input barcode number manually"})}),Object(l.jsx)("button",{onClick:function(){d(),a(!c)},className:"py-4 px-1 mt-4 rounded-xl btn-success",children:"Scan Another Barcode"})]})},m=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,15)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,r=t.getLCP,o=t.getTTFB;c(e),n(e),a(e),r(e),o(e)}))};o.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(f,{})}),document.getElementById("root")),m()},6:function(e){e.exports=JSON.parse('{"inputStream":{"type":"LiveStream","constraints":{"width":{"min":300},"height":{"min":300},"facingMode":"environment","aspectRatio":{"min":1,"max":2}}},"locator":{"patchSize":"medium","halfSample":true},"numOfWorkers":2,"frequency":1,"decoder":{"readers":["ean_reader","code_128_reader"]},"locate":true}')}},[[14,1,2]]]);
//# sourceMappingURL=main.6a542383.chunk.js.map