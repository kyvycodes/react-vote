module.exports=function(t){function e(r){if(s[r])return s[r].exports;var o=s[r]={exports:{},id:r,loaded:!1};return t[r].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var s={};return e.m=t,e.c=s,e.p="",e(0)}([function(t,e,s){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function n(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var p=function(){function t(t,e){for(var s=0;s<e.length;s++){var r=e[s];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,s,r){return s&&t(e.prototype,s),r&&t(e,r),e}}(),i=s(1),l=r(i),u=function(t){function e(){var t,s,r,n;o(this,e);for(var p=arguments.length,i=Array(p),u=0;u<p;u++)i[u]=arguments[u];return s=r=a(this,(t=e.__proto__||Object.getPrototypeOf(e)).call.apply(t,[this].concat(i))),r.state={showResult:!1,items:r.props.data?r.props.data.items:[],data:r.props.data,voted:!1,showMessage:!1,errorMessage:!1},r.addItem=function(){var t=r.addInput.value,e=r.state.items;t&&t.trim()&&(e.push({title:t,count:0}),r.setState({items:e}),r.addInput.value="")},r.removeItem=function(t){var e=r.state.items,s=r[t].innerHTML;e=e.filter(function(t){return t.title!==s}),r.setState({items:e})},r.confirmVote=function(){var t=r.state.items,e=r.voteTitle.value,s={title:e,items:t,done:!1};return e&&e.trim()?s.items.length<2?r.setState({showMessage:!0,errorMessage:r.props.errorMessage.notEnoughItems}):(r.setState({data:s,showMessage:!1}),r.props.getData&&r.props.getData(s)):r.setState({showMessage:!0,errorMessage:r.props.errorMessage.noTitle})},r.showResult=function(){r.setState({showResult:!0})},r.showVoting=function(){r.setState({showResult:!1})},r.closeVote=function(){var t=r.state.data;return t.done=!0,r.setState({data:t}),r.props.getData&&r.props.getData(t)},r.upvote=function(t){var e=r.state.items,s=r.state.data;return e[t].count+=1,e[t].voted=!0,s.items=e,r.setState({voted:!0,items:e,data:s}),r.props.getData&&r.props.getData(s)},r.renderItems=function(t){var e=0;return l["default"].createElement("div",null,t.map(function(t){var s=e,o=r.state.voted?t.voted&&l["default"].createElement("span",{className:r.props.styles.votedText}," ",r.props.text.votedText):l["default"].createElement("button",{onClick:function(){return r.upvote(s)},className:r.props.styles.voteButton},r.props.text.voteButtonText),a=l["default"].createElement("div",{key:"react-vote-item-"+s,className:r.props.styles.itemWrapper},l["default"].createElement("div",{className:r.props.styles.itemTitle,ref:function(t){r["react-vote-item-"+s]=t}},t.title),r.state.data?o:l["default"].createElement("button",{onClick:function(){return r.removeItem("react-vote-item-"+s)},className:r.props.styles.removeButton},r.props.text.removeButtonText));return e+=1,a}))},r.renderResult=function(t){var e=0,s=t.reduce(function(t,e){return t+e.count},0);return l["default"].createElement("div",null,t.map(function(t){var o=(t.count/s*100).toFixed(2),a=l["default"].createElement("div",{key:"react-vote-result-"+e,className:r.props.styles.itemWrapper},l["default"].createElement("div",{className:r.props.styles.itemTitle,ref:function(t){r["react-vote-result-"+e]=t}},t.title),l["default"].createElement("div",{className:r.props.styles.itemCount},t.count+"("+o+"%)"));return e+=1,a}))},n=s,a(r,n)}return n(e,t),p(e,[{key:"render",value:function(){var t=this,e=l["default"].createElement("div",null,l["default"].createElement("div",{className:this.props.styles.voteTitle},this.state.data&&this.state.data.title),this.renderItems(this.state.items),l["default"].createElement("button",{className:this.props.styles.resultButton,onClick:this.showResult},this.props.text.resultButtonText),this.props.isAdmin&&l["default"].createElement("button",{className:this.props.styles.closeButton,onClick:this.closeVote},this.props.text.closeButtonText)),s=this.state.data&&l["default"].createElement("div",null,l["default"].createElement("div",{className:this.props.styles.voteTitle},this.state.data.title),this.renderResult(this.state.items),!this.state.data.done&&l["default"].createElement("button",{className:this.props.styles.goBackButton,onClick:this.showVoting},this.props.text.goBackButtonText)),r=this.state.data&&(this.state.data.done||this.state.showResult)?s:e;return l["default"].createElement("div",{className:this.props.styles.voteWrapper},this.state.data?r:l["default"].createElement("div",null,l["default"].createElement("input",{className:this.props.styles.titleInput,ref:function(e){t.voteTitle=e},placeholder:this.props.text.titleInputPlaceholder}),this.renderItems(this.state.items),l["default"].createElement("div",{className:this.props.styles.addWrapper},l["default"].createElement("input",{className:this.props.styles.addInput,ref:function(e){t.addInput=e},placeholder:this.props.text.addInputPlaceholder}),l["default"].createElement("button",{className:this.props.styles.addButton,onClick:this.addItem},this.props.text.addButtonText)),this.state.showMessage&&l["default"].createElement("div",{className:this.props.styles.errorMessage},this.state.errorMessage),l["default"].createElement("button",{className:this.props.styles.createButton,onClick:this.confirmVote},this.props.text.createButtonText)))}}]),e}(i.Component);u.propTypes={isAdmin:i.PropTypes.bool,data:i.PropTypes.shape({title:i.PropTypes.string.required,items:i.PropTypes.arrayOf(i.PropTypes.object).required,done:i.PropTypes.bool.required}),styles:i.PropTypes.shape({voteWrapper:i.PropTypes.string,voteTitle:i.PropTypes.string,titleInput:i.PropTypes.string,addWrapper:i.PropTypes.string,addInput:i.PropTypes.string,addButton:i.PropTypes.string,itemTitle:i.PropTypes.string,itemCount:i.PropTypes.string,itemWrapper:i.PropTypes.string,removeButton:i.PropTypes.string,createButton:i.PropTypes.string,resultButton:i.PropTypes.string,goBackButton:i.PropTypes.string,voteButton:i.PropTypes.string,closeButton:i.PropTypes.string,errorMessage:i.PropTypes.string,votedText:i.PropTypes.string}),getData:i.PropTypes.func,text:i.PropTypes.shape({titleInputPlaceholder:i.PropTypes.string,addInputPlaceholder:i.PropTypes.string,addButtonText:i.PropTypes.string,removeButtonText:i.PropTypes.string,closeButtonText:i.PropTypes.string,createButtonText:i.PropTypes.string,resultButtonText:i.PropTypes.string,goBackButtonText:i.PropTypes.string,errorMessage:i.PropTypes.string,voteButtonText:i.PropTypes.string,votedText:i.PropTypes.string}),errorMessage:i.PropTypes.shape({notEnoughItems:i.PropTypes.string,noTitle:i.PropTypes.string})},u.defaultProps={isAdmin:!0,text:{addButtonText:"Add",titleInputPlaceholder:"Title of this vote",addInputPlaceholder:"Type title of new item here",removeButtonText:"×",closeButtonText:"Close vote",createButtonText:"Create",resultButtonText:"Show result",goBackButtonText:"Go back to vote",voteButtonText:"Upvote",votedText:"Voted"},errorMessage:{notEnoughItems:"Need at least 2 item!",noTitle:"Need a title!"},styles:{}},e["default"]=u},function(t,e){t.exports=require("react")}]);
//# sourceMappingURL=react-vote.js.map