(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[4],{66:function(e,t,n){"use strict";n.r(t);var r=n(13),a=n(14),i=n(17),s=n(16),c=n(1),o=n(15),h=n(0),u=function(e){Object(i.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(r.a)(this,n);for(var a=arguments.length,i=new Array(a),s=0;s<a;s++)i[s]=arguments[s];return(e=t.call.apply(t,[this].concat(i))).state={reviews:[]},e}return Object(a.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.movieId;o.a.fetchReviewsInfo(t).then((function(t){e.setState((function(){return{reviews:t.data.results}}))}))}},{key:"render",value:function(){var e=this.state.reviews;return Object(h.jsx)(h.Fragment,{children:e.length>0?Object(h.jsx)("ul",{children:e.map((function(e){return Object(h.jsxs)("div",{className:"reviewItem",children:[Object(h.jsx)("li",{className:"reviewAuthor",children:e.author}),Object(h.jsx)("span",{children:e.content})]},e.id)}))}):Object(h.jsx)("h3",{children:"We don't have any reviews for this movie."})})}}]),n}(c.Component);t.default=u}}]);
//# sourceMappingURL=4.226f7ee6.chunk.js.map