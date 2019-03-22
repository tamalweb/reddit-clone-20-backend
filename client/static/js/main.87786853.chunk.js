(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{136:function(e,t,a){},139:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),o=a(38),r=a.n(o),c=a(12),i=a(3),l=a(4),u=a(6),m=a(5),p=a(7),d=a(19),h=a.n(d),g=a(140),f=a(20),E=a.n(f),b=a(21),v=a.n(b),y=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(s)))).upvote=function(){a.props.user._id?fetch("/api/post/".concat(a.props.post._id,"/upvote"),{method:"PUT",headers:{Authorization:"Bearer "+a.props.token,"Content-Type":"application/json"},body:JSON.stringify({userId:a.props.user._id})}).then(function(e){return e.json()}).then(function(e){e.success?(a.props.updateUser(e),a.props.single&&a.props.updatePostAfterVotes(e.post),a.props.userPageUpdate&&a.props.userPageUpdate(e.post)):console.log(e.message)}).catch(function(e){console.log(e)}):console.log("You are not logged in!")},a.downvote=function(){a.props.user._id?fetch("/api/post/".concat(a.props.post._id,"/downvote"),{method:"PUT",headers:{Authorization:"Bearer "+a.props.token,"Content-Type":"application/json"},body:JSON.stringify({userId:a.props.user._id})}).then(function(e){return e.json()}).then(function(e){e.success?(a.props.updateUser(e),a.props.single&&a.props.updatePostAfterVotes(e.post),a.props.userPageUpdate&&a.props.userPageUpdate(e.post)):console.log(e.message)}).catch(function(e){console.log(e)}):console.log("You are not logged in!")},a.deletePost=function(e,t){a.props.user._id?fetch("/api/post/".concat(t,"/delete"),{method:"DELETE",headers:{Authorization:"Bearer "+a.props.token,"Content-Type":"application/json"},body:JSON.stringify(e)}).then(function(e){return e.json()}).then(function(e){e.success?(a.props.deletePost(e),a.props.userPageDelete&&a.props.userPageDelete(t)):console.log(e.message)}).catch(function(e){console.log(e)}):console.log("You are not logged in!")},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.props.post,a=t.title,o=t.text,r=t.created,c=t.username,i=t.upvotedby,l=t.downvotedby,u=t.score,m=t.author,p=t._id;return s.a.createElement(n.Fragment,null,s.a.createElement("div",{className:"post"},s.a.createElement("div",{className:"rank"},this.props.rank),s.a.createElement("div",{className:"votes"},s.a.createElement("div",{className:"arrow up ".concat(this.props.user&&i.includes(this.props.user._id)?"upvoted":""),onClick:function(){return e.upvote(e.props.user,p)}}),s.a.createElement("div",{className:"score"},u||0),s.a.createElement("div",{className:"arrow down ".concat(this.props.user&&l.includes(this.props.user._id)?"downvoted":""),onClick:function(){return e.downvote(e.props.user,p)}})),s.a.createElement(g.a,{to:"/post/".concat(p),className:"thumbnail self"}),s.a.createElement("div",{className:"content"},s.a.createElement("div",{className:"title-area"},s.a.createElement("span",{className:"title"},this.props.single?s.a.createElement("span",null,a):s.a.createElement(g.a,{to:"/post/".concat(p)},a))," ",s.a.createElement("span",{className:"url"},"(self.",document.domain,")")),s.a.createElement("div",{className:"meta-area"},"Submitted ",E()(r).fromNow()," by"," ",s.a.createElement(g.a,{to:"/user/".concat(c)},c)),s.a.createElement("div",{className:"link-area"},m===this.props.user._id||this.props.user.isAdmin?s.a.createElement("a",{onClick:function(){return e.deletePost(e.props.user,p)},className:"fake-link"},"delete"):""))),this.props.single&&o?s.a.createElement("div",{className:"post-text"},s.a.createElement(v.a,{linkTarget:"_blank",source:o})):"")}}]),t}(n.Component),A=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(s)))).loadMorePosts=function(){a.props.getNextPosts()},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return document.title="Homepage",this.props.loading?s.a.createElement("div",{className:"center"},s.a.createElement("img",{src:h.a,alt:"Loading animation"})):s.a.createElement("div",null,this.props.posts.map(function(t,a){return s.a.createElement(y,{key:a,user:e.props.user,token:e.props.token,updateUser:e.props.updateUser,deletePost:e.props.deletePost,post:t,rank:a+1})}),this.props.loadMore?s.a.createElement("div",{className:"pagination center"},s.a.createElement("span",{onClick:this.loadMorePosts,className:"load-more"},"Load more")):"")}}]),t}(n.Component),k=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(s)))).state={submit:!1,submitMessage:"Submitting..."},a.processPost=function(e){a.setState({submit:!0}),e.preventDefault();var t={};t.title=e.target.title.value.trim(),t.text=e.target.text.value.trim(),t.created=Date.now(),t.author=a.props.user._id,t.username=a.props.user.username,t.title?(fetch("/api/posts/new",{method:"POST",headers:{Authorization:"Bearer "+a.props.token,"Content-Type":"application/json"},body:JSON.stringify(t)}).then(function(e){return e.json()}).then(function(e){e.success?(a.props.submitPost(e),a.props.history.push("/post/".concat(e.post._id))):e.tokenExpired?a.props.tokenExpired():(a.setState({submit:!0,submitMessage:"Something went wrong, please contact the admin"}),console.log(e.message))}).catch(function(e){a.setState({submit:!0,submitMessage:"The server encountered an error, please contact the admin"})}),e.target.reset()):a.setState({submit:!0,submitMessage:"Missing required information"})},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("h3",null,"Submit a new post"),s.a.createElement("form",{onSubmit:this.processPost,className:"submit-form",action:""},s.a.createElement("div",{className:"input-box"},s.a.createElement("label",{htmlFor:"title"},"title"),s.a.createElement("input",{name:"title",type:"text",required:!0})),s.a.createElement("div",{className:"input-box"},s.a.createElement("label",{htmlFor:"text"},"text (optional)"),s.a.createElement("textarea",{name:"text",id:"",rows:"6"})),s.a.createElement("button",null,"submit"),this.state.submit?s.a.createElement("span",null,s.a.createElement("small",null," ",this.state.submitMessage)):""))}}]),t}(n.Component),N=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(s)))).upvote=function(){a.props.user._id?fetch("/api/comment/".concat(a.props.comment._id,"/upvote"),{method:"PUT",headers:{Authorization:"Bearer "+a.props.token,"Content-Type":"application/json"},body:JSON.stringify(a.props.user)}).then(function(e){return e.json()}).then(function(e){e.success?a.props.updateComment(e.comment):console.log(e.message)}).catch(function(e){console.log(e)}):console.log("You are not logged in!")},a.downvote=function(){a.props.user._id?fetch("/api/comment/".concat(a.props.comment._id,"/downvote"),{method:"PUT",headers:{Authorization:"Bearer "+a.props.token,"Content-Type":"application/json"},body:JSON.stringify(a.props.user)}).then(function(e){return e.json()}).then(function(e){e.success?a.props.updateComment(e.comment):console.log(e.message)}).catch(function(e){console.log(e)}):console.log("You are not logged in!")},a.deleteComment=function(){fetch("/api/post/".concat(a.props.comment._id,"/comment"),{method:"DELETE",headers:{Authorization:"Bearer "+a.props.token,"Content-Type":"application/json"},body:JSON.stringify(a.props.user)}).then(function(e){return e.json()}).then(function(e){e.success?(a.props.deleteComment(a.props.comment._id),console.log(e)):(e.tokenExpired,console.log(e))}).catch(function(e){console.log(e)})},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.comment,t=e.comment,a=e.author,n=e.username,o=e.created,r=e._id,c=e.upvotedby,i=e.downvotedby,l=e.score,u=this.props.user;return s.a.createElement("div",{className:"single-comment",id:"comment-id-".concat(r)},s.a.createElement("div",{className:"votes"},s.a.createElement("div",{className:"arrow up ".concat(u&&c.includes(u._id)?"upvoted":""),onClick:this.upvote}),s.a.createElement("div",{className:"arrow down ".concat(u&&i.includes(u._id)?"downvoted":""),onClick:this.downvote})),s.a.createElement("div",{className:"comment"},s.a.createElement("div",{className:"comment-author"},s.a.createElement("small",null,s.a.createElement(g.a,{to:"/user/".concat(n)},n)," ",l," points, posted ",E()(o).fromNow()," ",a===this.props.user._id||this.props.user.isAdmin?s.a.createElement("span",{className:"fake-link",onClick:this.deleteComment},"Delete"):"")),s.a.createElement("div",{className:"comment-body"},s.a.createElement(v.a,{linkTarget:"_blank",source:t})),s.a.createElement("div",{className:"comment-meta"})))}}]),t}(n.Component),j=a(15),w=a.n(j),C=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(s)))).state={post:null,comments:[],submit:!1,notFound:!1},a.deleteComment=function(e){var t=Object(c.a)(a.state.comments);t.forEach(function(a,n){a._id===e&&t.splice(n,1)}),a.setState({comments:t})},a.updatePostAfterVotes=function(e){a.setState({post:e})},a.updateComment=function(e){var t=Object(c.a)(a.state.comments);t.forEach(function(a,n){a._id===e._id&&(t[n]=e)}),a.setState({comments:t})},a.postComment=function(e){a.setState({submit:!0}),e.preventDefault();var t=e.target.comment.value.trim();if(t){e.target.reset();var n=a.props.match.params.id,s={comment:t,author:a.props.user._id,username:a.props.user.username,post:n,upvotedby:a.props.user._id,created:Date.now()};fetch("/api/post/".concat(n,"/comment"),{method:"POST",headers:{Authorization:"Bearer "+a.props.token,"Content-Type":"application/json"},body:JSON.stringify(s)}).then(function(e){return e.json()}).then(function(e){if(e.success){var t=Object(c.a)(a.state.comments);t.push(e.comment),a.setState({comments:t,submit:!1}),a.props.history.push("#comment-id-".concat(e.comment._id))}else a.setState({submit:!1})}).catch(function(e){a.props.history.push("/?message=failed to post comment"),a.setState({submit:!1})})}else console.log("Comment is empty")},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.id;fetch("/api/post/".concat(t,"/single")).then(function(e){return e.json()}).then(function(t){t.success?e.setState({post:t.post,comments:t.comments}):(console.log(t),e.setState({notFound:!0,post:{}}))}).catch(function(e){console.log(e)})}},{key:"render",value:function(){var e=this;return this.state.post?this.state.notFound?(document.title="Not Found",s.a.createElement("div",null,s.a.createElement("h1",null,"Not Found"))):(document.title="".concat(this.state.post.title),s.a.createElement("div",null,s.a.createElement(y,{key:1,user:this.props.user,token:this.props.token,updateUser:this.props.updateUser,deletePost:this.props.deletePost,updatePostAfterVotes:this.updatePostAfterVotes,post:this.state.post,rank:1,single:!0}),this.props.banner?s.a.createElement("div",{className:"banner comment-banner padding"},s.a.createElement(w.a,{html:this.props.banner})):"",s.a.createElement("div",{className:"comments"},this.state.comments.length&&this.state.comments.length>1?s.a.createElement("h3",null,"all ",this.state.comments.length," comments"):s.a.createElement("h3",null,this.state.comments.length," comments"),this.props.user&&this.props.user._id&&!this.props.user.banned?s.a.createElement("div",{className:"comment-form"},s.a.createElement("form",{onSubmit:this.postComment},s.a.createElement("textarea",{name:"comment",id:"",rows:"5",required:!0}),s.a.createElement("button",null,"Save")," ",this.state.submit?s.a.createElement("span",null," posting.."):"")):"",this.state.comments.map(function(t){return s.a.createElement(N,{token:e.props.token,user:e.props.user,comment:t,deleteComment:e.deleteComment,key:t._id,updateComment:e.updateComment})})))):(document.title="Loading..",s.a.createElement("div",{className:"center"},s.a.createElement("img",{src:h.a,alt:"Loading"})))}}]),t}(n.Component),S=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(s)))).state={regError:!1,regErrorMsg:""},a.displayError=function(e){a.setState({regError:!0,regErrorMsg:e})},a.registerAccount=function(e){e.preventDefault();var t={};t.username=e.target.username.value.toLowerCase(),t.password=e.target.password.value,t.passwordConfirm=e.target.passwordConfirm.value,t.email=e.target.email.value,t.username&&t.password?fetch("/api/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then(function(e){return e.json()}).then(function(e){e.success?(a.props.register(e),a.props.history.push("/")):a.displayError(e.message)}).catch(function(e){a.displayError("There was a problem connecting to the server"),console.log(e)}):a.displayError("Required fields are missing")},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return document.title="Sign up",s.a.createElement("div",null,s.a.createElement("div",{className:"reg-form"},s.a.createElement("h4",{className:"modal-title"},"Create a new account"),this.state.regError?s.a.createElement("div",{className:"reg-error"},this.state.regErrorMsg,s.a.createElement("div",{className:"close-button",onClick:function(){e.setState({regError:!1})}},"\xd7")):"",s.a.createElement("form",{onSubmit:this.registerAccount},s.a.createElement("input",{type:"text",name:"username",placeholder:"choose a username",required:!0}),s.a.createElement("input",{type:"password",name:"password",placeholder:"password",required:!0}),s.a.createElement("input",{type:"password",name:"passwordConfirm",placeholder:"verify password",required:!0}),s.a.createElement("input",{type:"email",name:"email",placeholder:"email",required:!0}),s.a.createElement("div",{className:"register-button-box"},s.a.createElement("button",{className:"button-primary"},"Sign Up")))))}}]),t}(n.Component),O=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(s)))).state={loading:""},a.saveSettings=function(e){e.preventDefault();var t={};t.topBanner=e.target.topBanner.value,t.footerBanner=e.target.footerBanner.value,t.commentBanner=e.target.commentBanner.value,t.sidebarBanner=e.target.sidebarBanner.value,t.rulesCode=e.target.rulesCode.value,t.extraCode=e.target.extraCode.value,a.setState({loading:"Saving..."}),fetch("/api/app/update",{method:"PUT",headers:{Authorization:"Bearer "+a.props.token,"Content-Type":"application/json"},body:JSON.stringify(t)}).then(function(e){return e.json()}).then(function(e){e.success&&a.setState({loading:void 0})}).catch(function(e){a.setState({loading:"Failed to save!"})})},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.codes;return s.a.createElement("div",null,s.a.createElement("h2",null,"Admin Page"),s.a.createElement("form",{onSubmit:this.saveSettings},s.a.createElement("h3",null,"Top Banner Code"),s.a.createElement("textarea",{name:"topBanner",className:"banner-form",rows:"5",defaultValue:e?e.topBanner:null}),s.a.createElement("hr",null),s.a.createElement("h3",null,"Before Comments Banner Code"),s.a.createElement("textarea",{name:"commentBanner",className:"banner-form",rows:"5",defaultValue:e?e.commentBanner:null}),s.a.createElement("hr",null),s.a.createElement("h2",null,"Sidebar Area"),s.a.createElement("h3",null,"Sidebar Ad Code"),s.a.createElement("textarea",{name:"sidebarBanner",className:"banner-form",rows:"5",defaultValue:e?e.sidebarBanner:null}),s.a.createElement("hr",null),s.a.createElement("h3",null,"Rules Section HTML 1"),s.a.createElement("textarea",{name:"rulesCode",className:"banner-form",rows:"10",defaultValue:e?e.rulesCode:null}),s.a.createElement("hr",null),s.a.createElement("h3",null,"Extra Code HTML 2"),s.a.createElement("textarea",{name:"extraCode",className:"banner-form",rows:"10",defaultValue:e?e.extraCode:null}),s.a.createElement("hr",null),s.a.createElement("h2",null,"Footer Section"),s.a.createElement("h3",null,"Footer Banner Code"),s.a.createElement("textarea",{name:"footerBanner",className:"banner-form",rows:"5",defaultValue:e?e.footerBanner:null}),s.a.createElement("hr",null),s.a.createElement("strong",null,"Save all changes"),s.a.createElement("br",null),s.a.createElement("button",null,"Save")," ",this.state.loading))}}]),t}(n.Component),I=a(143),U=a(142),B=a(141),P=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(s)))).state={posts:[],currentUser:{}},a.adminAction=function(e){a.props.user._id?fetch("/api/user/".concat(a.props.match.params.username,"/action/").concat(e),{method:"POST",headers:{Authorization:"Bearer "+a.props.token,"Content-Type":"application/json"},body:JSON.stringify({userId:a.props.user._id})}).then(function(e){return e.json()}).then(function(e){e.success?a.setState({currentUser:e.currentUser}):console.log("Something went wrong")}).catch(function(e){console.log(e)}):console.log("You are not logged in!")},a.deleteUser=function(){a.props.user._id?window.confirm("Are you sure you want to delete this user and all the posts created by them?")&&fetch("/api/user/".concat(a.props.match.params.username),{method:"DELETE",headers:{Authorization:"Bearer "+a.props.token,"Content-Type":"application/json"},body:JSON.stringify({userId:a.props.user._id})}).then(function(e){return e.json()}).then(function(e){e.success?(a.props.history.push("/"),console.log(e)):console.log(e)}).catch(function(e){console.log(e)}):console.log("You are not logged in!")},a.userPageUpdate=function(e){var t=Object(c.a)(a.state.posts);t.forEach(function(a,n){a._id===e._id&&(t[n]=e)}),a.setState({posts:t})},a.userPageDelete=function(e){var t=Object(c.a)(a.state.posts);t.forEach(function(a,n){a._id===e&&t.splice(n,1)}),a.setState({posts:t})},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("/api/user/".concat(this.props.match.params.username,"/posts")).then(function(e){return e.json()}).then(function(t){t.success?e.setState({posts:t.posts,currentUser:t.currentUser}):console.log(t)}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){var e=this,t=this.props.match.params.username,a=this.state.currentUser,n=a.isAdmin,o=a.banned;return document.title="User page: ".concat(t),s.a.createElement("div",null,s.a.createElement("div",{className:"user-area"},s.a.createElement("h2",null,t),this.props.user.isAdmin&&this.state.currentUser&&this.props.user._id!==this.state.currentUser._id?s.a.createElement("div",{className:"admin-actions"},"Admin actions:"," ",o?s.a.createElement("button",{className:"load-more",onClick:function(){return e.adminAction("unban")}},"Unban User"):s.a.createElement("button",{className:"load-more red",onClick:function(){return e.adminAction("ban")}},"Ban User")," ",n?s.a.createElement("button",{className:"load-more",onClick:function(){return e.adminAction("removeadmin")}},"Remove Admin"):s.a.createElement("button",{className:"load-more",onClick:function(){return e.adminAction("makeadmin")}},"Make Admin")," ",s.a.createElement("button",{className:"load-more red",onClick:this.deleteUser},"Delete User")," "):""),this.state.posts.map(function(t,a){return s.a.createElement(y,{key:a,user:e.props.user,token:e.props.token,updateUser:e.props.updateUser,deletePost:e.props.deletePost,post:t,userPageUpdate:e.userPageUpdate,userPageDelete:e.userPageDelete,rank:a+1})}))}}]),t}(n.Component);function x(e){return s.a.createElement("div",{id:"layout"},e.children)}var M=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(s)))).state={loading:!0,posts:[],user:{},token:"",loggedIn:!1,loginError:!1,loginMsg:"Something went wrong",currentPage:1,loadMore:!0,codes:null},a.getNextPosts=function(){var e=Object(c.a)(a.state.posts);fetch("/api/posts/50/".concat(a.state.currentPage)).then(function(e){return e.json()}).then(function(t){t.posts.length?(t.posts.forEach(function(t){e.push(t)}),a.setState({posts:e,currentPage:a.state.currentPage+1}),console.log(t)):(console.log("End of the posts"),a.setState({loadMore:!1}))}).catch(function(e){return console.log(e)})},a.register=function(e){a.setState({loggedIn:!0,user:e.user,token:e.token});var t={loggedIn:!0,user:e.user,token:e.token};localStorage.setItem("userInfo",JSON.stringify(t))},a.tokenExpired=function(){a.logout()},a.login=function(e){e.preventDefault();var t={};t.username=e.target.username.value,t.password=e.target.password.value,t.username&&t.password?fetch("/api/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then(function(e){return e.json()}).then(function(e){if(e.success){a.setState({loggedIn:!0,user:e.user,token:e.token});var t={loggedIn:!0,user:e.user,token:e.token};localStorage.setItem("userInfo",JSON.stringify(t))}else a.setState({loginError:!0,loginMsg:e.message})}).catch(function(e){console.log(e),a.setState({loginError:!0,loginMsg:e})}):a.setState({loginError:!0,loginMsg:"Missing credentials"})},a.logout=function(){a.setState({loggedIn:!1,token:void 0,user:{}}),localStorage.removeItem("userInfo")},a.submitPost=function(e){var t=Object(c.a)(a.state.posts);t.push(e.post),a.setState({posts:t,user:e.user}),localStorage.setItem("posts",JSON.stringify(t))},a.updateUser=function(e){var t=Object(c.a)(a.state.posts);t.forEach(function(a,n){a._id===e.post._id&&(t[n]=e.post)}),a.setState({posts:t})},a.deletePost=function(e){var t=Object(c.a)(a.state.posts);t.forEach(function(a,n){a._id===e.deletedId&&t.splice(n,1)}),a.setState({posts:t})},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=JSON.parse(localStorage.getItem("userInfo"));t&&this.setState({loggedIn:!0,token:t.token,user:t.user}),fetch("/api/posts/all").then(function(e){return e.json()}).then(function(t){t.success?(e.setState({posts:t.data,loading:!1}),t.data.length<50&&e.setState({loadMore:!1})):(console.log("Cannot load the file"),e.setState({loading:!1}))}).catch(function(t){console.log(t),e.setState({loading:!1})}),fetch("/api/app/content").then(function(e){return e.json()}).then(function(t){t.success&&e.setState({codes:t.codes})}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){var e=this;return s.a.createElement(I.a,null,s.a.createElement(x,null,s.a.createElement("header",{id:"header"},s.a.createElement("nav",{className:"top-menu"}),s.a.createElement("div",{className:"main-header"},s.a.createElement(g.a,{to:"/",id:"header-img",className:"default-header"},"reddit clone"),s.a.createElement("div",{className:"tab-menu"}),s.a.createElement("div",{className:"user-header"},this.state.loggedIn&&this.state.user.isAdmin?s.a.createElement("span",null," ",s.a.createElement(g.a,{to:"/admin"},"Admin Settings")," |"," "):"",this.state.loggedIn?s.a.createElement("span",null,"Hello"," ",s.a.createElement(g.a,{className:"fake-link",to:"/user/".concat(this.state.user.username)},this.state.user.username)," ","|"," ",s.a.createElement("a",{className:"fake-link",onClick:this.logout},"logout")," "):s.a.createElement("span",null,"Want to join? ",s.a.createElement(g.a,{to:"/register"},"sign up")," in seconds.")))),s.a.createElement("div",{id:"container"},s.a.createElement("main",{id:"body-submissions"},this.state.codes?s.a.createElement("div",{className:"banner top-banner padding"},s.a.createElement(w.a,{html:this.state.codes.topBanner})):"",s.a.createElement(U.a,{exact:!0,path:"/",render:function(t){return s.a.createElement(A,Object.assign({loading:e.state.loading,user:e.state.user,posts:e.state.posts,token:e.state.token,updateUser:e.updateUser,deletePost:e.deletePost,getNextPosts:e.getNextPosts,currentPage:e.state.currentPage,loadMore:e.state.loadMore},t))}}),s.a.createElement(U.a,{path:"/submit",render:function(t){return e.state.loggedIn?s.a.createElement(k,Object.assign({user:e.state.user,token:e.state.token,tokenExpired:e.tokenExpired,submitPost:e.submitPost},t)):s.a.createElement(B.a,{to:"/"})}}),s.a.createElement(U.a,{path:"/admin",render:function(t){return e.state.loggedIn&&e.state.user.isAdmin?s.a.createElement(O,Object.assign({},t,{token:e.state.token,codes:e.state.codes})):s.a.createElement(B.a,{to:"/"})}}),s.a.createElement(U.a,{exact:!0,path:"/user/:username",render:function(t){return s.a.createElement(P,Object.assign({user:e.state.user,posts:e.state.posts,token:e.state.token,updateUser:e.updateUser,deletePost:e.deletePost},t))}}),s.a.createElement(U.a,{exact:!0,path:"/post/:id",render:function(t){return s.a.createElement(C,Object.assign({user:e.state.user,token:e.state.token,banner:e.state.codes?e.state.codes.commentBanner:null,updateUser:e.updateUser,deletePost:e.deletePost,posts:e.state.posts},t))}}),s.a.createElement(U.a,{path:"/register",render:function(t){return e.state.loggedIn?s.a.createElement(B.a,{to:"/"}):s.a.createElement(S,Object.assign({register:e.register},t))}})),s.a.createElement("aside",{id:"sidebar"},this.state.loggedIn?"":s.a.createElement("div",{className:"login-box",id:"login"},this.state.loginError?s.a.createElement("div",{className:"login-error"},this.state.loginMsg,s.a.createElement("div",{className:"close-button",onClick:function(){e.setState({loginError:!1})}},"\xd7")):"",s.a.createElement("form",{onSubmit:this.login},s.a.createElement("input",{className:"login-username",type:"text",name:"username",placeholder:"username",required:!0}),s.a.createElement("input",{className:"login-password",type:"password",name:"password",placeholder:"password",required:!0}),s.a.createElement("div",{className:"login-button-area"},s.a.createElement("a",{className:"login-reset-link",href:"/reset"},"reset password"),s.a.createElement("button",null,"login")))),this.state.loggedIn?s.a.createElement("div",{className:"submit-button"},s.a.createElement(g.a,{to:"/submit"},"Submit")):"",this.state.codes?s.a.createElement("div",{className:"sidebar-ad"},s.a.createElement("div",{className:"banner sidebar-banner"},s.a.createElement(w.a,{html:this.state.codes.sidebarBanner}))):"",this.state.codes?s.a.createElement("div",{className:"rules-section"},s.a.createElement(w.a,{html:this.state.codes.rulesCode})):"",this.state.codes?s.a.createElement("div",{className:"html-section"},s.a.createElement(w.a,{html:this.state.codes.extraCode})):"")),s.a.createElement("footer",{className:"center",id:"footer"},this.state.codes?s.a.createElement("div",{className:"banner footer-banner padding"},s.a.createElement(w.a,{html:this.state.codes.footerBanner})):"",s.a.createElement("div",{className:"copyright"}))))}}]),t}(n.Component);a(136),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(s.a.createElement(M,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},19:function(e,t){e.exports="data:image/gif;base64,R0lGODlh+gD6AMQdALKysmtra8XFxezs7NnZ2YqKitTU1K6urvr6+s/Pz/Hx8fX19be3t/T09Jubm7y8vOfn59/f393d3XJycsrKyunp6cDAwHp6era2tuLi4oKCgqWlpZOTk////wAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh/wtYTVAgRGF0YVhNUDw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTExIDc5LjE1ODMyNSwgMjAxNS8wOS8xMC0wMToxMDoyMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RTA4OUYxNzlCOTVBMTFFNUExQkVBRTQ2QUVBREI4QkYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RTA4OUYxN0FCOTVBMTFFNUExQkVBRTQ2QUVBREI4QkYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpFMDg5RjE3N0I5NUExMUU1QTFCRUFFNDZBRUFEQjhCRiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpFMDg5RjE3OEI5NUExMUU1QTFCRUFFNDZBRUFEQjhCRiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PgH//v38+/r5+Pf29fTz8vHw7+7t7Ovq6ejn5uXk4+Lh4N/e3dzb2tnY19bV1NPS0dDPzs3My8rJyMfGxcTDwsHAv769vLu6ubi3trW0s7KxsK+urayrqqmop6alpKOioaCfnp2cm5qZmJeWlZSTkpGQj46NjIuKiYiHhoWEg4KBgH9+fXx7enl4d3Z1dHNycXBvbm1sa2ppaGdmZWRjYmFgX15dXFtaWVhXVlVUU1JRUE9OTUxLSklIR0ZFRENCQUA/Pj08Ozo5ODc2NTQzMjEwLy4tLCsqKSgnJiUkIyIhIB8eHRwbGhkYFxYVFBMSERAPDg0MCwoJCAcGBQQDAgEAACH5BAUZAB0ALAAAAAD6APoAAAX/YCeOZGmeaKqubOu+cCzPdG3feK7vfO//wKBwSCwaj8ikcslsOp/QqHRKrVqv2Kx2y+16v+CweEwum8/otHrNbrvf8Lh8Tq/b7/i8fs/v+/+AgYKDhIWGh4iJiouMjY6PkJGSk5SVlpeYmZqbnJ2en6ChoqOkpaanqKmqq6ytrq+wsbKztLW2t7i5uru8vb6/wMHCw8TFxsfIycrLzM3Oz9DR0tPU1dbX2Nna29zd3t/g4eLj5OXm5+jp6uvs7e7v8PHy8/T19vf4+fr7/P3+/wADChxIsKDBgwgTKlzIsKHDhxAjcqvgoIDFixYdGDgxIIGAjyA/JljAkULIkAYQ/5yLMCGAy5cwA1AoAQGAzZs4ATBQUCJDzp8MSJYrELNogAslHvz8KYAEgqU/E5gzarTCiAVQf5IYkBVn03JUi24UwbXrza1mbX4lFzbm2A5l06JNu3ZcW5hv45qda7auuLsv86a1yber33CAXQoeXDjrYXCJAyyWO0Kv46mJJ++tPPjxt5aAG4x4mpZBY6ievTkAXKCEgLRSSSg1S8BcA6JhNYh2asGwShIKZkONvRLDgePID7w1MYCA8+cEJPA8gQAC9OfSJWrfzr279+/gw4sfT768+fPo06tfz769+/fw48ufT7++/fv48+vfz7+///8ABijggAQWaOCBCCao4EKCDDbo4IMQRijhhBRWaOGFGGao4YYcdujhhyCGKOKIJJZo4okopqjiiiy26OKLMMYo44w01mjjjTjmqOOOPPboSAgAIfkEBRkAHQAsYgB1ACEADwAABXtgtyRCaZbJ0K1sZzhFLMdO1SkMoO88ALUdSmBILAYmEUFvCXgAL8ZooMBkLlgVqbS6VK0M2ii353WFjWNeGXwmpnfrtvsNiMsD9DqLLc/b5TlvCCwNdxMJbwJABXIOCEpcFoMtDRpnBQ0rChIEnZ4EZUAuB6SlBxgRKyEAIfkEBRkAHQAsdAB1ACIADwAABX5g1w2JYJ5msoisaHBFLMdbI0JAru8Ao7QdS2BILAYmlc6DxwQIWg2jdOhYNJstw1RaGFyZ2a2x++WFxURyWXdGB9RrQBsNX8/F9fJ9m//upwUIcT1/XB0CcQlAF24BBx0IFmUCCEARjGIOLQMEnZ4EEj9AIg0UB6eoBxgRIiEAOw=="},39:function(e,t,a){e.exports=a(139)}},[[39,2,1]]]);
//# sourceMappingURL=main.87786853.chunk.js.map