(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[3],{65:function(t,a,e){"use strict";e.r(a);var c=e(13),n=e(14),s=e(17),r=e(16),i=e(1),o=e(15),h=e(0),m=function(t){Object(s.a)(e,t);var a=Object(r.a)(e);function e(){var t;Object(c.a)(this,e);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(t=a.call.apply(a,[this].concat(s))).state={cast:[]},t.componentDidMount=function(){var a=t.props.match.params.movieId;o.a.fetchCastInfo(a).then((function(a){t.setState((function(){return{cast:a.data.cast}}))}))},t}return Object(n.a)(e,[{key:"render",value:function(){var t=this.state.cast;return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("ul",{className:"cast",children:t.map((function(t){return Object(h.jsxs)("div",{className:"castItem",children:[Object(h.jsx)("img",{className:"castImg",src:"https://image.tmdb.org/t/p/w300".concat(t.profile_path),alt:t.name}),Object(h.jsx)("h3",{children:t.name}),Object(h.jsxs)("h3",{children:["Character: ",t.character]})]},t.id)}))})})}}]),e}(i.Component);a.default=m}}]);
//# sourceMappingURL=3.0e5981e9.chunk.js.map