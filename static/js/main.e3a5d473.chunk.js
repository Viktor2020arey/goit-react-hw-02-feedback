(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{11:function(e,t,n){e.exports={btn:"FeedbackOptions_btn__26_9I"}},12:function(e,t,n){e.exports={notification:"Notification_notification__1fU6H"}},2:function(e,t,n){e.exports={text:"Statistics_text__1m_8H"}},29:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),o=n(6),s=n.n(o),i=(n(19),n(7)),r=n(8),b=n(9),l=n(14),d=n(13),u=n(2),j=n.n(u),h=n(0),x=function(e){var t=e.good,n=e.neutral,a=e.bad,c=e.total,o=e.positivePercentage;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("p",{className:j.a.text,children:["Good:",t]}),Object(h.jsxs)("p",{className:j.a.text,children:["Neutral:",n]}),Object(h.jsxs)("p",{className:j.a.text,children:["Bad:",a]}),Object(h.jsxs)("p",{className:j.a.text,children:["Total:",c]}),Object(h.jsxs)("p",{className:j.a.text,children:["Positive feedback:",o," %"]})]})},f=n(10),O=n.n(f),p=n(11),v=n.n(p),g=function(e){var t=e.options,n=e.onLeaveFeedback;return Object(h.jsx)(h.Fragment,{children:t.map((function(e){return Object(h.jsx)("button",{className:v.a.btn,type:"button",name:e,onClick:n,children:e},O.a.generate())}))})},m=n(5),k=n.n(m),_=function(e){var t=e.title,n=e.children;return Object(h.jsxs)("section",{className:k.a.section,children:[Object(h.jsx)("h2",{className:k.a.title,children:t}),n]})},F=n(12),N=n.n(F),P=function(e){var t=e.message;return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("p",{className:N.a.notification,children:t})})},y=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(r.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={good:0,neutral:0,bad:0},e.countTotalFeedback=function(){var t=e.state;return t.good+t.neutral+t.bad},e.countPositiveFeedbackPercentage=function(){var t=e.countTotalFeedback(),n=100*e.state.good/t;return Math.round(n)},e.onLeaveFeedback=function(t){var n=t.target.name;e.setState((function(e){return Object(i.a)({},n,e[n]+1)}))},e}return Object(b.a)(n,[{key:"render",value:function(){var e=this.state,t=e.good,n=e.neutral,a=e.bad,c=this.countTotalFeedback(),o=this.countPositiveFeedbackPercentage(),s=Object.keys(this.state);return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(_,{title:"Please leave feedback",children:Object(h.jsx)(g,{options:s,onLeaveFeedback:this.onLeaveFeedback})}),0===c?Object(h.jsx)(P,{message:"No feedback given"}):Object(h.jsx)(_,{title:"Statistics",children:Object(h.jsx)(x,{good:t,neutral:n,bad:a,total:c,positivePercentage:o})})]})}}]),n}(a.Component);n(29);s.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(y,{})}),document.getElementById("root"))},5:function(e,t,n){e.exports={section:"Section_section__NxEJP",title:"Section_title__11Z-J"}}},[[30,1,2]]]);
//# sourceMappingURL=main.e3a5d473.chunk.js.map