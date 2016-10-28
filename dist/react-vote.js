module.exports=function(t){function e(o){if(s[o])return s[o].exports;var r=s[o]={exports:{},id:o,loaded:!1};return t[o].call(r.exports,r,r.exports,e),r.loaded=!0,r.exports}var s={};return e.m=t,e.c=s,e.p="",e(0)}([function(t,e,s){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function n(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var p=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var s=arguments[e];for(var o in s)Object.prototype.hasOwnProperty.call(s,o)&&(t[o]=s[o])}return t},i=function(){function t(t,e){for(var s=0;s<e.length;s++){var o=e[s];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,s,o){return s&&t(e.prototype,s),o&&t(e,o),e}}(),l=s(1),u=o(l),c=function(t){function e(){var t,s,o,n;r(this,e);for(var i=arguments.length,l=Array(i),c=0;c<i;c++)l[c]=arguments[c];return s=o=a(this,(t=e.__proto__||Object.getPrototypeOf(e)).call.apply(t,[this].concat(l))),o.state={showResult:!1,items:o.props.data?o.props.data.items:[],data:p({},o.props.data,{title:o.props.data&&o.props.data.title,items:o.props.data&&o.props.data.items,done:o.props.data&&o.props.data.done,closed:o.props.data&&o.props.data.closed}),isAdmin:o.props.isAdmin,total:o.props.total,expansion:o.props.expansion,voted:o.props.voted||!1,multiple:o.props.multiple,showMessage:!1,errorMessage:!1,autoClose:o.props.autoClose},o.addItem=function(){var t=o.addInput.value,e=o.state.items;t&&t.trim()&&(e.push({title:t,count:0}),o.setState({items:e}),o.addInput.value="")},o.removeItem=function(t){var e=o.state.items,s=o[t].innerHTML;e=e.filter(function(t){return t.title!==s}),o.setState({items:e})},o.createVote=function(){var t=o.state.items,e=o.voteTitle.value,s=o.multipleCheck.checked,r=o.expansionCheck.checked,a={title:e,items:t,multiple:s,expansion:r,done:!1,closed:!1};return e&&e.trim()?a.items.length<2?o.setState({showMessage:!0,errorMessage:o.props.errorMessage.notEnoughItems}):(o.setState({data:a,showMessage:!1,multiple:s,expansion:r,items:t}),o.props.getData&&o.props.getData(a)):o.setState({showMessage:!0,errorMessage:o.props.errorMessage.noTitle})},o.expandVote=function(){var t=o.expansionInput.value;if(!t||!t.trim())return!1;var e=o.state.data,s={title:t,count:0};return e.items.push(s),o.setState({data:e,items:e.items}),o.expansionInput.value="",o.props.getData&&o.props.getData(e)},o.showResult=function(){o.setState({showResult:!0})},o.showVoting=function(){o.setState({showResult:!1})},o.closeVote=function(){var t=o.state.data;return t.done=!0,t.closed=!0,o.setState({data:t}),o.props.getData&&o.props.getData(t)},o.upvote=function(t){var e=o.state.items,s=o.state.data,r=e.reduce(function(t,e){return t+e.count},0);return r===o.state.autoClose?o.closeVote():(e[t].count+=1,e[t].voted=!0,s.items=e,o.setState({voted:!0,items:e,data:s}),o.props.getData&&o.props.getData(s))},o.renderItems=function(t){var e=0;return u.default.createElement("div",null,t.map(function(t){var s=e,r=t.voted?u.default.createElement("span",{className:o.props.styles.votedText},o.props.text.votedText):(o.state.multiple||!o.state.voted)&&u.default.createElement("button",{onClick:function(){return o.upvote(s)},className:o.props.styles.voteButton},o.props.text.voteButtonText),a=u.default.createElement("div",{key:"react-vote-item-"+s,className:o.props.styles.itemWrapper},u.default.createElement("div",{className:o.props.styles.itemTitle,ref:function(t){o["react-vote-item-"+s]=t}},t.title),o.state.data.title?r:u.default.createElement("button",{onClick:function(){return o.removeItem("react-vote-item-"+s)},className:o.props.styles.removeButton},o.props.text.removeButtonText));return e+=1,a}))},o.renderResult=function(t){var e=0,s=t.reduce(function(t,e){return t+e.count},0);return u.default.createElement("div",null,t.map(function(t){var r=0===s?0:(t.count/s*100).toFixed(2),a=u.default.createElement("div",{key:"react-vote-result-"+e,className:o.props.styles.itemWrapper},u.default.createElement("div",{className:o.props.styles.itemTitle,ref:function(t){o["react-vote-result-"+e]=t}},t.title),u.default.createElement("div",{className:o.props.styles.itemCount},t.count+"("+r+"%)"));return e+=1,a}),o.state.total&&u.default.createElement("div",{className:o.props.styles.itemWrapper},u.default.createElement("div",{className:o.props.styles.itemTitle},o.props.text.totalText),u.default.createElement("div",{className:o.props.styles.itemCount},s)))},n=s,a(o,n)}return n(e,t),i(e,[{key:"componentWillReceiveProps",value:function(t){t.data&&this.setState({data:t.data,items:t.data.items,isAdmin:t.isAdmin})}},{key:"render",value:function(){var t=this,e=u.default.createElement("div",null,u.default.createElement("div",{className:this.props.styles.voteTitle},this.state.data.title),this.renderItems(this.state.items),this.state.expansion&&(!this.state.voted||this.state.multiple)&&u.default.createElement("div",{className:this.props.styles.itemWrapper},u.default.createElement("input",{className:this.props.styles.expansionInput,ref:function(e){t.expansionInput=e},placeholder:this.props.text.expansionPlaceholder}),u.default.createElement("button",{className:this.props.styles.expansionButton,onClick:this.expandVote},this.props.text.expansionButtonText)),u.default.createElement("div",{className:this.props.styles.buttonWrapper},u.default.createElement("button",{className:this.props.styles.resultButton,onClick:this.showResult},this.props.text.resultButtonText),this.state.isAdmin&&u.default.createElement("button",{className:this.props.styles.closeButton,onClick:this.closeVote},this.props.text.closeButtonText))),s=this.state.data.title&&u.default.createElement("div",null,u.default.createElement("div",{className:this.props.styles.voteTitle},this.state.data.title),this.renderResult(this.state.items),!this.state.data.done&&!this.state.data.closed&&u.default.createElement("div",{className:this.props.styles.buttonWrapper},u.default.createElement("button",{className:this.props.styles.goBackButton,onClick:this.showVoting},this.props.text.goBackButtonText))),o=this.state.data.title&&(this.state.data.done||this.state.data.closed||this.state.showResult)?s:e;return u.default.createElement("div",{className:this.props.styles.voteWrapper},this.state.data.title?o:u.default.createElement("div",null,u.default.createElement("input",{className:this.props.styles.titleInput,ref:function(e){t.voteTitle=e},placeholder:this.props.text.titleInputPlaceholder}),u.default.createElement("div",{className:this.props.styles.addWrapper},this.renderItems(this.state.items),u.default.createElement("div",null,u.default.createElement("input",{className:this.props.styles.addInput,ref:function(e){t.addInput=e},placeholder:this.props.text.addInputPlaceholder}),u.default.createElement("button",{className:this.props.styles.addButton,onClick:this.addItem},this.props.text.addButtonText)),u.default.createElement("div",null,u.default.createElement("input",{type:"checkbox",ref:function(e){t.multipleCheck=e}}),this.props.text.multipleCheckbox,u.default.createElement("input",{type:"checkbox",ref:function(e){t.expansionCheck=e}}),this.props.text.expansionCheckbox)),this.state.showMessage&&u.default.createElement("div",{className:this.props.styles.errorMessage},this.state.errorMessage),u.default.createElement("button",{className:this.props.styles.createButton,onClick:this.createVote},this.props.text.createButtonText)))}}]),e}(l.Component);c.propTypes={isAdmin:l.PropTypes.bool,total:l.PropTypes.bool,multiple:l.PropTypes.bool,data:l.PropTypes.shape({title:l.PropTypes.string.required,items:l.PropTypes.arrayOf(l.PropTypes.object).required,done:l.PropTypes.bool,closed:l.PropTypes.bool.required}),autoClose:l.PropTypes.number,voted:l.PropTypes.bool,expansion:l.PropTypes.bool,styles:l.PropTypes.shape({voteWrapper:l.PropTypes.string,voteTitle:l.PropTypes.string,titleInput:l.PropTypes.string,addWrapper:l.PropTypes.string,addInput:l.PropTypes.string,addButton:l.PropTypes.string,itemTitle:l.PropTypes.string,itemCount:l.PropTypes.string,itemWrapper:l.PropTypes.string,buttonWrapper:l.PropTypes.string,removeButton:l.PropTypes.string,createButton:l.PropTypes.string,resultButton:l.PropTypes.string,goBackButton:l.PropTypes.string,voteButton:l.PropTypes.string,closeButton:l.PropTypes.string,errorMessage:l.PropTypes.string,votedText:l.PropTypes.string,expansionButton:l.PropTypes.string,expansionInput:l.PropTypes.string}),getData:l.PropTypes.func,text:l.PropTypes.shape({titleInputPlaceholder:l.PropTypes.string,addInputPlaceholder:l.PropTypes.string,addButtonText:l.PropTypes.string,removeButtonText:l.PropTypes.string,closeButtonText:l.PropTypes.string,createButtonText:l.PropTypes.string,resultButtonText:l.PropTypes.string,goBackButtonText:l.PropTypes.string,voteButtonText:l.PropTypes.string,votedText:l.PropTypes.string,totalText:l.PropTypes.string,multipleCheckbox:l.PropTypes.string,expansionCheckbox:l.PropTypes.string,expansionPlaceholder:l.PropTypes.string,expansionButtonText:l.PropTypes.string}),errorMessage:l.PropTypes.shape({notEnoughItems:l.PropTypes.string,noTitle:l.PropTypes.string})},c.defaultProps={isAdmin:!1,multiple:!1,total:!0,expansion:!1,voted:!1,text:{addButtonText:"Add",titleInputPlaceholder:"Title of this vote",addInputPlaceholder:"Type title of new option here",removeButtonText:"×",closeButtonText:"Close vote",createButtonText:"Create",resultButtonText:"Show result",goBackButtonText:"Go back to vote",voteButtonText:"Upvote",votedText:"Voted",totalText:"Total",multipleCheckbox:"multiple?",expansionCheckbox:"expansion?",expansionPlaceholder:"Add an option yourself",expansionButtonText:"Add"},errorMessage:{notEnoughItems:"Need at least 2 item!",noTitle:"Need a title!"},styles:{}},e.default=c},function(t,e){t.exports=require("react")}]);
//# sourceMappingURL=react-vote.js.map