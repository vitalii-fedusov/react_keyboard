(this.webpackJsonpreact_keyboard=this.webpackJsonpreact_keyboard||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(3),s=n.n(a),r=n(4),c=n(5),o=n(7),i=n(6),u=n(1),d=n.n(u),y=n(0),l=function(e){Object(o.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(r.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={key:""},e.handleKeyPress=function(t){e.setState({key:t.key})},e}return Object(c.a)(n,[{key:"componentDidMount",value:function(){document.addEventListener("keyup",this.handleKeyPress)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keyup",this.handleKeyPress)}},{key:"render",value:function(){var e=this.state.key;return Object(y.jsx)("div",{children:Object(y.jsx)("p",{className:"App__message",children:e?"The last pressed key is [".concat(e,"]"):"Nothing was pressed yet"})})}}]),n}(d.a.PureComponent);n(13);s.a.render(Object(y.jsx)(l,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.aff68fec.chunk.js.map