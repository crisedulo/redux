(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{103:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(15),i=n.n(r),c=(n(66),n(67),n(16)),l=n(12),s=n(21),u=n(17),m=n(20),h=n(124),p=n(125),b=n(22),d=n(34),f=n.n(d);f.a.initializeApp({apiKey:"AIzaSyAW5wJgS2VwHafT9jm1TjMYX_52bVghxZY",authDomain:"albunes-7b2b3.firebaseapp.com",databaseURL:"https://albunes-7b2b3.firebaseio.com",projectId:"albunes-7b2b3",storageBucket:"gs://albunes-7b2b3.appspot.com",messagingSenderId:"39895454857",appId:"1:39895454857:web:8d617d41b5a4cfdf"});var v=f.a,g=n(19),E=n(122),O=n(50),y=n.n(O),A=n(121),j=n(123),k=n(6),w=Object(k.a)({container:{display:"flex",flexDirection:"row"}})(function(e){return o.a.createElement("div",{className:e.classes.container},e.user?[o.a.createElement(A.a,{src:e.user.providerData[0].photoURL}),o.a.createElement(E.a,{color:"inherit",onClick:e.logout},o.a.createElement(y.a,null))]:o.a.createElement(j.a,{variant:"contained",onClick:e.login},"Iniciar Sesion con Google"))}),T=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).login=n.login.bind(Object(b.a)(n)),n.logout=n.logout.bind(Object(b.a)(n)),n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"login",value:function(){var e=this,t=new v.auth.GoogleAuthProvider;t.addScope("https://www.googleapis.com/auth/photoslibrary"),v.auth().signInWithPopup(t).then(function(t){var n=t.credential.accessToken;e.props.saveToken(n),console.log(n)}).catch(function(e){console.log(e)})}},{key:"logout",value:function(){var e=this;v.auth().signOut().then(function(){e.props.clearToken()})}},{key:"render",value:function(){return o.a.createElement(w,{login:this.login,logout:this.logout,token:this.token,user:this.props.user})}}]),t}(a.Component),S={saveToken:function(e){return{type:"SET_TOKEN",token:e}},clearToken:function(){return{type:"CLEAR_TOKEN"}}},_=Object(g.b)(function(e){return{token:e.token,user:e.user}},S)(T),C=n(126),L=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(h.a,{position:"static"},o.a.createElement(p.a,{className:this.props.classes.nav},o.a.createElement(C.a,{variant:"h6",component:"h1",className:this.props.classes.grow},"Albums"),o.a.createElement(_,null))))}}]),t}(a.Component),N=Object(k.a)({grow:{flexGrow:1,textAlign:"left"},nav:{color:"white"}})(L),I=n(30),B=n.n(I),P=n(127),U=n(129),x=n(128),R=n(131);n(52).a.div({});var G=Object(R.a)({item:{minWidth:"350px",margin:"1em",boxSizing:"border-box"},media:{minHeight:"200px"}})(function(e){return o.a.createElement(P.a,{className:e.classes.item,onClick:function(){return e.setAlbum(e.album)}},o.a.createElement(x.a,{className:e.classes.media,image:e.album.coverPhotoBaseUrl}),o.a.createElement(U.a,null,o.a.createElement(C.a,{variant:"h5",componet:"h2",glutterBottom:!0},e.album.title),o.a.createElement(C.a,{componet:"p"},e.album.mediaItemsCount,"foto")))}),M=n(130);var D=Object(R.a)({})(function(e){return o.a.createElement(M.a,{container:!0,spacing:16,justify:"center"},e.albums.map(function(t,n){return o.a.createElement(G,{setAlbum:e.setAlbum,album:t,key:n})}))}),H=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.loadphotos()}},{key:"loadphotos",value:function(){var e=this;B()({url:"https://photoslibrary.googleapis.com/v1/albums",method:"GET",headers:{Authorization:"Bearer ".concat(this.props.token)}}).then(function(t){e.props.setAlbums(t.data.albums)}).catch(console.log)}},{key:"render",value:function(){return o.a.createElement(D,{setAlbum:this.props.setAlbum,albums:this.props.albums})}}]),t}(a.Component),W={setAlbums:function(e){return{type:"SET_ALBUMS",albums:e}},clearAlbums:function(){return{type:"CLEAR_ALBUMS"}},setAlbum:function(e){return{type:"SET_ALBUM",album:e}}},z=Object(g.b)(function(e){return{albums:e.albums,token:e.token,mainAlbum:e.mainAlbum}},W)(H);var K=Object(k.a)({container:{display:"flex",flexDirection:"row",overflowX:"scroll",justifyContent:"center",padding:"1em 0"},img:{minWidth:"100%",height:"auto"},card:{minwith:"300px",marginRigth:"1em"}})(function(e){return o.a.createElement("div",{className:e.classes.container},e.photos.map(function(t,n){return o.a.createElement(P.a,{key:t.id,className:e.classes.card},o.a.createElement("img",{className:e.classes.img,src:t.baseUrl}),o.a.createElement(U.a,null,o.a.createElement(C.a,{variant:"caption",component:"p"},t.filename)))}))});var J=Object(R.a)({container:{justifyContent:"center"}})(function(e){return o.a.createElement("div",{className:e.classes.container},e.album&&[o.a.createElement(C.a,{varint:"h4",component:"h2"},e.album?e.album.title:""),o.a.createElement(j.a,null,"Regresar Atras"),o.a.createElement(C.a,{varint:"headline",component:"h3"},"Fotos del album"),o.a.createElement(C.a,{varint:"caption",component:"p"},e.photos.length," Fotos(s) en este album"),o.a.createElement(K,{photos:e.photos})])}),F=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidUpdate",value:function(e){var t=this;this.props.mainAlbum?this.loadPhotos():n.e(3).then(n.bind(null,132)).then(function(e){t.props.setPhotos(e.default.mediaItems)})}},{key:"loadPhotos",value:function(){var e=this;B()({method:"POST",url:"https://photoslibrary.googleapis.com/v1/mediaItems:search",headers:{Authorization:"Bearer ".concat(this.props.token)},data:{albumId:this.props.mainAlbum.id}}).then(function(t){console.log(t),e.props.setPhotos(t.data.mediaItems)})}},{key:"render",value:function(){return o.a.createElement(J,{album:this.props.mainAlbum,photos:this.props.photos})}}]),t}(a.Component),V={setPhotos:function(e){return{type:"SET_PHOTOS",photos:e}},clearPhotos:function(){return{type:"CLEAR_PHOTOS"}}},X=Object(g.b)(function(e){return{mainAlbum:e.mainAlbum,token:e.token,photos:e.photos}},V)(F);var Y=function(){return o.a.createElement("div",null,o.a.createElement(N,null),o.a.createElement(X,null),o.a.createElement(z,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Z=n(24),$=n(51),q=n.n($);var Q=Object(Z.b)({token:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_TOKEN":return t.token;case"CLEAR-TOKEN":return"";default:return e}},user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGGED_IN":return t.user;case"SIGN_OUT":return null;default:return e}},albums:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_ALBUMS":return t.albums;case"CLEAR_ALBUMS":return[];default:return e}},mainAlbum:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_ALBUM":return t.album;case"CLEAR_ALBUM":return null;default:return e}},photos:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_PHOTOS":return t.photos;case"CLEAR_PHOTOS":return[];default:return e}}}),ee=Object(Z.c)(q()("token")),te=Object(Z.d)(Q,{},ee);v.auth().onAuthStateChanged(function(e){e?te.dispatch(function(e){return{type:"LOGGED_IN",user:e}}(e)):te.dispatch({type:"SIGN_OUT"})}),i.a.render(o.a.createElement(g.a,{store:te},o.a.createElement(Y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},61:function(e,t,n){e.exports=n(103)},66:function(e,t,n){},67:function(e,t,n){}},[[61,1,2]]]);
//# sourceMappingURL=main.24adeb13.chunk.js.map