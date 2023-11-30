(function(D,B,o,s,M,e,R,h,g,v){"use strict";const{FormRow:L}=R.Forms;function N(t){let{label:n,icon:a,onPress:l,onLongPress:r}=t;const c=e.stylesheet.createThemedStyleSheet({icon:{width:24,height:24,tintColor:h.semanticColors.INTERACTIVE_NORMAL,opacity:1}});return React.createElement(L,{label:n,leading:React.createElement(L.Icon,{source:a,style:c.icon}),onPress:function(){return l?.()},onLongPress:function(){return r?.()}})}const j="https://api.deeplx.org/translate",J="https://translate.googleapis.com/translate_a/single?client=gtx&dt=t";async function z(t){const n=`${J}&sl=auto&tl=en&q=${encodeURIComponent(t.replace(/\n/g,"                                           "))}`;try{const a=await fetch(n);return a.ok?(await a.json())[0][0][0]:"Try Again"}catch{}}async function Y(t){const n=await(await fetch(j,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({text:t,source_lang:"auto",target_lang:"en"})})).json();return n.code!==200?"Try Again.":n.data}async function G(t,n){try{return n==="dl"?await Y(t):await z(t)}catch{}}const P=` \uFF3D\`

`;s.findByStoreName("MessageStore"),s.findByProps("getChannel","getDMFromUserId");const F=s.findByProps("openLazy","hideActionSheet");async function O(t,n){let a=t.content;a.includes(P)&&(a=`${a.substring(a.lastIndexOf(P)+P.length)}`);const l=await G(a,n);v.showConfirmationAlert({title:`Translation [en] | @${t.author.globalName?.normalize("NFKC")||t.author.username}`,content:`${l}`,confirmText:"Copy",cancelText:"Close",confirmColor:"brand",onConfirm:function(){try{e.clipboard.setString(`${l}`),g.showToast("Copied Translation",o.getAssetIDByName("toast_copy_message"))}catch{}}}),F.hideActionSheet()}function V(){B.before("openLazy",F,function(t){const[n,a,l]=t,r=l?.message;a!=="MessageLongPressActionSheet"||!r||n.then(function(c){const b=B.after("default",c,function(S,p){e.React.useEffect(function(){return function(){return b()}},[]);const i=M.findInReactTree(p,function(d){return d?.[0]?.type?.name==="ButtonRow"});if(!i)return p;r.content&&i.splice(5,0,e.React.createElement(N,{label:"Translate Message",icon:o.getAssetIDByName("ic_locale_24px"),onPress:async function(){return await O(r,"dl")},onLongPress:async function(){return await O(r,"gl")}}))})})})}const{View:u,Text:k,TextInput:W,TouchableOpacity:y}=R.General,{FormIcon:T}=R.Forms,{ScrollView:H,Image:K,Modal:X}=e.ReactNative,Z=s.findByProps("pushModal"),E=s.findByStoreName("ThemeStore"),{meta:{resolveSemanticColor:_}}=s.findByProps("colors","meta"),q=s.findByName("Navigator")??s.findByProps("Navigator")?.Navigator,Q=s.findByProps("getRenderCloseButton")?.getRenderCloseButton??s.findByProps("getHeaderCloseButton")?.getHeaderCloseButton,ee=s.findByName("Svg",!1).default,A=s.findByName("Svg",!1).Path,te=s.findByProps("useSafeAreaInsets");function ne(t,n){return function(){return e.React.createElement(y,{onPress:t,onLongPress:n},e.React.createElement(T,{source:o.getAssetIDByName("ic_edit_24px"),style:{marginRight:8,marginLeft:-8,opacity:1}}))}}function ae(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"unknown",n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"dummy",a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"dummy",l=arguments.length>3?arguments[3]:void 0,r=arguments.length>4?arguments[4]:void 0;return function(){const[c,b]=e.React.useState(!0),[S,p]=e.React.useState(`${n}`),i={header:_(E.theme,h.semanticColors.HEADER_PRIMARY),test:_(E.theme,h.semanticColors.TEXT_MUTED),bgDark:_(E.theme,h.semanticColors.BACKGROUND_SECONDARY_ALT),bgBright:_(E.theme,h.semanticColors.BACKGROUND_SECONDARY),bgBrighter:_(E.theme,h.semanticColors.BACKGROUND_ACCENT)},d=e.React.createElement(ee,{height:"24",width:"24",viewBox:"0 0 24 24",fill:c?i.header:i.test},e.React.createElement(A,{d:"M2.75 5C2.33579 5 2 5.33579 2 5.75C2 6.16421 2.33579 6.5 2.75 6.5H21.25C21.6642 6.5 22 6.16421 22 5.75C22 5.33579 21.6642 5 21.25 5H2.75Z"}),e.React.createElement(A,{d:"M2.75 11.5C2.33579 11.5 2 11.8358 2 12.25C2 12.6642 2.33579 13 2.75 13H19C20.3807 13 21.5 14.1193 21.5 15.5C21.5 16.8807 20.3807 18 19 18H14.5607L15.2803 17.2803C15.5732 16.9874 15.5732 16.5126 15.2803 16.2197C14.9874 15.9268 14.5126 15.9268 14.2197 16.2197L12.2197 18.2197C11.9268 18.5126 11.9268 18.9874 12.2197 19.2803L14.2197 21.2803C14.5126 21.5732 14.9874 21.5732 15.2803 21.2803C15.5732 20.9874 15.5732 20.5126 15.2803 20.2197L14.5607 19.5H19C21.2091 19.5 23 17.7091 23 15.5C23 13.2909 21.2091 11.5 19 11.5H2.75Z"}),e.React.createElement(A,{d:"M2 18.75C2 18.3358 2.33579 18 2.75 18H9.25C9.66421 18 10 18.3358 10 18.75C10 19.1642 9.66421 19.5 9.25 19.5H2.75C2.33579 19.5 2 19.1642 2 18.75Z"})),[C,m]=e.React.useState(!1),x=e.React.useRef(null),ce=te.useSafeAreaInsets();let ue=e.React.createElement(u,{style:{marginTop:0}},e.React.createElement(u,{style:{padding:15,paddingBottom:0,display:"flex",flexDirection:"row",flexWrap:"nowrap",justifyContent:"space-between"}},e.React.createElement(u,{style:{display:"flex",flexDirection:"row",gap:8}},e.React.createElement(y,{onPress:function(){b(!c)},onLongPress:function(){g.showToast("Toggle Word Wrap",o.getAssetIDByName("ic_information_filled_24px"))},style:{backgroundColor:c?i.bgBrighter:i.bgDark,padding:4,borderRadius:5,borderWidth:2,borderColor:c?i.bgBright:i.bgDark}},d),e.React.createElement(y,{onPress:function(){m(!0)},onLongPress:function(){g.showToast(e.i18n.Messages.JUMP,o.getAssetIDByName("ic_information_filled_24px"))},style:{marginLeft:10,backgroundColor:i.bgDark,padding:4,borderRadius:5,borderWidth:2,borderColor:i.bgDark}},e.React.createElement(K,{source:o.getAssetIDByName("ic_reply_24px"),style:{height:24,width:24,transform:[{scaleX:-1},{rotate:"-90deg"}]}})))),e.React.createElement(H,{ref:x,style:{margin:15,marginBottom:50+ce.bottom}},e.React.createElement(H,{horizontal:!c},e.React.createElement(u,{style:{flexDirection:"row"}},e.React.createElement(u,{style:{borderTopLeftRadius:4,borderBottomLeftRadius:4,backgroundColor:i.bgDark,marginRight:5,paddingRight:2,paddingLeft:2,alignSelf:"flex-start"}}),e.React.createElement(W,{multiline:!0,selectable:!0,editable:r,style:[{color:i.header,lineHeight:20,flex:1}],onChangeText:function(f){p(`${f}`)}},S)))),e.React.createElement(X,{transparent:!0,animationType:"none",visible:C,onRequestClose:function(){return m(!1)}},e.React.createElement(u,{style:{flex:1,justifyContent:"center",alignItems:"center",backgroundColor:"rgba(0, 0, 0, 0.5)"}},e.React.createElement(u,{style:{backgroundColor:i.bgBright,padding:20,borderRadius:10,width:"90%"}},e.React.createElement(u,{style:{flexDirection:"row",justifyContent:"space-between",alignItems:"center",marginBottom:15}},e.React.createElement(R.Forms.FormText,{style:{fontSize:20,fontFamily:e.constants.Fonts.PRIMARY_BOLD}},e.i18n.Messages.JUMP),e.React.createElement(y,{onPress:function(){return m(!1)}},e.React.createElement(T,{source:o.getAssetIDByName("ic_close_16px"),style:{opacity:1}}))),e.React.createElement(y,{style:{backgroundColor:i.bgDark,borderRadius:5,padding:10,marginBottom:15,marginTop:5,flexDirection:"row",justifyContent:"space-between",alignItems:"center"},onPress:function(){let f=x?.current;m(!1),f?.scrollToEnd?.({animated:!0})}},e.React.createElement(T,{source:o.getAssetIDByName("ic_jump_to_bottom_24px"),style:{opacity:1}}),e.React.createElement(R.Forms.FormText,{style:{color:i.test,fontSize:16,fontFamily:e.constants.Fonts.PRIMARY_BOLD,textTransform:"uppercase"}},"Jump to the bottom"),e.React.createElement(u,null)),e.React.createElement(y,{style:{backgroundColor:i.bgDark,borderRadius:5,padding:10,marginBottom:10,flexDirection:"row",justifyContent:"space-between",alignItems:"center"},onPress:function(){let f=x?.current;m(!1),f?.scrollTo?.({y:0,animated:!0})}},e.React.createElement(T,{source:o.getAssetIDByName("ic_jump_to_bottom_24px"),style:{opacity:1,transform:[{scaleY:-1}]}}),e.React.createElement(R.Forms.FormText,{style:{color:i.test,fontSize:16,fontFamily:e.constants.Fonts.PRIMARY_BOLD,textTransform:"uppercase"}},"Jump to the top"),e.React.createElement(u,null))))));return e.React.createElement(q,{initialRouteName:"FILE_CONTENT_PREVIEW",screens:{FILE_CONTENT_PREVIEW:{headerLeft:Q(function(){return Z.popModal("file-content-preview")}),headerRight:ne(function(){return l(`${S}`)}),render:function(){return ue},headerTitle:function(){let f=_(E.theme,h.semanticColors.HEADER_PRIMARY);return e.React.createElement(y,{onPress:function(){e.clipboard.setString(t),g.showToast(e.i18n.Messages.COPIED_TEXT,o.getAssetIDByName("toast_copy_message"))}},e.React.createElement(k,{numberOfLines:1,style:{color:f}},t),e.React.createElement(k,{style:{color:f,fontSize:12}},a))}}}})}}const{ScrollView:re,Image:de,Modal:ge}=e.ReactNative,U=s.findByProps("getChannel","getDMFromUserId");s.findByStoreName("MessageStore"),s.findByStoreName("SelectedChannelStore"),s.findByProps("MessagesHandlers");const w=s.findByProps("openLazy","hideActionSheet"),$=s.findByProps("pushModal");function ie(t){const n=JSON.parse(JSON.stringify(t));for(const a in n.author)switch(a){case"email":case"phone":case"mfaEnabled":case"hasBouncedEmail":delete n.author[a]}return Object.fromEntries(Object.entries(n).sort(function(a,l){let[r]=a,[c]=l;return r.localeCompare(c)}))}function se(t){let n=JSON.parse(JSON.stringify(t)),a=n?.content||"";v.showConfirmationAlert({title:"Edit Message",confirmText:"Push Edit",onConfirm:function(){e.FluxDispatcher.dispatch({type:"MESSAGE_UPDATE",message:{...n,content:a?.trim()!=""?a:null,guild_id:U.getChannel(n?.channel_id)?.guild_id,embeds:null,messageReference:null},dont_log:!0}),g.showToast("Pushed Edit",o.getAssetIDByName("ic_edit_24px"))},children:e.React.createElement(re,{style:{marginVertical:8,maxHeight:e.ReactNative.Dimensions.get("window").height/1.372}},e.React.createElement(FormInput,{multiline:!0,title:"Message Content.",placeholder:"Hewwo guys :3 UwU x3 rawr arf arf",value:`${a}`,onChange:function(l){a=l}}))})}function oe(){B.before("openLazy",w,function(t){const[n,a,l]=t,r=l?.message;a!=="MessageLongPressActionSheet"||!r||n.then(function(c){const b=B.after("default",c,function(S,p){e.React.useEffect(function(){return function(){return b()}},[]);const i=M.findInReactTree(p,function(d){return d?.[0]?.type?.name==="ButtonRow"});if(!i)return p;i.splice(21,0,e.React.createElement(N,{label:"Edit Message Locally",icon:o.getAssetIDByName("ic_chat_bubble_32px"),onPress:async function(){try{se(r)}catch(d){vendetta.logger.log(d)}w.hideActionSheet()},onLongPress:async function(){$.pushModal({key:"file-content-preview",modal:{key:"file-content-preview",modal:ae(r.content&&r.content!=""?r?.content.length>32?r?.content?.slice(0,32)?.replace(/\n/g," ")+"...":r?.content:"[Attachment(s)]",JSON.stringify(ie(r),null,"	"),`@${r?.author?.username}`,function(d){try{let C={type:"MESSAGE_UPDATE",message:{...JSON.parse(d),guild_id:U.getChannel(r?.channel_id)?.guild_id,embeds:null,messageReference:null},dont_log:!0};(!C.message.content||C.message.content.replace(/\ufeff/g,"")==="")&&delete C.message.content,e.FluxDispatcher.dispatch(C),g.showToast("Pushed Edit",o.getAssetIDByName("ic_edit_24px")),$.popModal("file-content-preview")}catch{g.showToast("Make sure the JSON is valid",o.getAssetIDByName("ic_warning_24px"))}}),animation:"slide-up",shouldPersistUnderModals:!1,closable:!0}}),w.hideActionSheet()}})),r.__vml_deleted||i.splice(30,0,e.React.createElement(N,{label:"Hide Message Locally",icon:o.getAssetIDByName("ic_eye"),onPress:async function(){e.FluxDispatcher.dispatch({type:"MESSAGE_DELETE",id:r.id,channelId:r.channel_id,__vml_cleanup:!0}),g.showToast("Hidden Message",o.getAssetIDByName("ic_eye_hidden")),w.hideActionSheet()}}))})})})}let I=[];var le={onLoad:function(){I.push(oe()),I.push(V())},onUnload:function(){for(const t of I)t()}};return D.default=le,Object.defineProperty(D,"__esModule",{value:!0}),D})({},vendetta.patcher,vendetta.ui.assets,vendetta.metro,vendetta.utils,vendetta.metro.common,vendetta.ui.components,vendetta.ui,vendetta.ui.toasts,vendetta.ui.alerts);
