(function(w,b,s,i,v,e,E,y,f,j){"use strict";const{FormRow:L}=E.Forms,A=i.findByProps("ActionSheetRow")?.ActionSheetRow;function S(n){let{label:a,icon:r,onPress:c,onLongPress:t}=n;const d=e.stylesheet.createThemedStyleSheet({iconComponent:{width:24,height:24,tintColor:y.semanticColors.INTERACTIVE_NORMAL}});return A?React.createElement(A,{label:a,icon:React.createElement(A.Icon,{source:r,IconComponent:function(){return React.createElement(e.ReactNative.Image,{resizeMode:"cover",style:d.iconComponent,source:r})}}),onPress:function(){return c?.()},onLongPress:function(){return t?.()}}):React.createElement(L,{label:a,leading:React.createElement(L.Icon,{source:r}),onPress:function(){return c?.()},onLongPress:function(){return t?.()}})}const z="https://api.deeplx.org/translate",J="https://translate.googleapis.com/translate_a/single?client=gtx&dt=t";async function Y(n){const a=`${J}&sl=auto&tl=en&q=${encodeURIComponent(n.replace(/\n/g,"                                           "))}`;try{const r=await fetch(a);return r.ok?(await r.json())[0][0][0]:"Try Again"}catch{}}async function W(n){const a=await(await fetch(z,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({text:n,source_lang:"auto",target_lang:"en"})})).json();return a.code!==200?"Try Again.":a.data}async function G(n,a){try{return a==="dl"?await W(n):await Y(n)}catch{}}const D=` \uFF3D\`

`;i.findByStoreName("MessageStore"),i.findByProps("getChannel","getDMFromUserId");const F=i.findByProps("openLazy","hideActionSheet");async function O(n,a){let r=n.content;r.includes(D)&&(r=`${r.substring(r.lastIndexOf(D)+D.length)}`);const c=await G(r,a);j.showConfirmationAlert({title:`Translation [en] | @${n.author.globalName?.normalize("NFKC")||n.author.username}`,content:`${c}`,confirmText:"Copy",cancelText:"Close",confirmColor:"brand",onConfirm:function(){try{e.clipboard.setString(`${c}`),f.showToast("Copied Translation",s.getAssetIDByName("toast_copy_message"))}catch{}}}),F.hideActionSheet()}function V(){b.before("openLazy",F,function(n){const[a,r,c]=n,t=c?.message;r!=="MessageLongPressActionSheet"||!t||a.then(function(d){const m=b.after("default",d,function(x,o){e.React.useEffect(function(){return function(){return m()}},[]);const p=v.findInReactTree(o,function(g){return g?.[0]?.type?.name==="ButtonRow"});if(!p)return o;t.content&&p.splice(5,0,e.React.createElement(S,{label:"Translate Message",icon:s.getAssetIDByName("ic_locale_24px"),onPress:async function(){return await O(t,"dl")},onLongPress:async function(){return await O(t,"gl")}}))})})})}const{View:l,Text:k,TextInput:K,TouchableOpacity:R}=E.General,{FormIcon:B}=E.Forms,{ScrollView:$,Image:X,Modal:Z}=e.ReactNative,q=i.findByProps("pushModal"),_=i.findByStoreName("ThemeStore"),{meta:{resolveSemanticColor:C}}=i.findByProps("colors","meta"),Q=i.findByName("Navigator")??i.findByProps("Navigator")?.Navigator,ee=i.findByProps("getRenderCloseButton")?.getRenderCloseButton??i.findByProps("getHeaderCloseButton")?.getHeaderCloseButton,te=i.findByName("Svg",!1).default,I=i.findByName("Svg",!1).Path,ne=i.findByProps("useSafeAreaInsets");function ae(n,a){return function(){return e.React.createElement(R,{onPress:n,onLongPress:a},e.React.createElement(B,{source:s.getAssetIDByName("ic_edit_24px"),style:{marginRight:8,marginLeft:-8,opacity:1}}))}}function H(){let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"unknown",a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"dummy",r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"dummy",c=arguments.length>3?arguments[3]:void 0;return function(){const[t,d]=e.React.useState(!0),[m,x]=e.React.useState(`${a}`),o={header:C(_.theme,y.semanticColors.HEADER_PRIMARY),test:C(_.theme,y.semanticColors.TEXT_MUTED),bgDark:C(_.theme,y.semanticColors.BACKGROUND_SECONDARY_ALT),bgBright:C(_.theme,y.semanticColors.BACKGROUND_SECONDARY),bgBrighter:C(_.theme,y.semanticColors.BACKGROUND_ACCENT)},p=e.React.createElement(te,{height:"24",width:"24",viewBox:"0 0 24 24",fill:t?o.header:o.test},e.React.createElement(I,{d:"M2.75 5C2.33579 5 2 5.33579 2 5.75C2 6.16421 2.33579 6.5 2.75 6.5H21.25C21.6642 6.5 22 6.16421 22 5.75C22 5.33579 21.6642 5 21.25 5H2.75Z"}),e.React.createElement(I,{d:"M2.75 11.5C2.33579 11.5 2 11.8358 2 12.25C2 12.6642 2.33579 13 2.75 13H19C20.3807 13 21.5 14.1193 21.5 15.5C21.5 16.8807 20.3807 18 19 18H14.5607L15.2803 17.2803C15.5732 16.9874 15.5732 16.5126 15.2803 16.2197C14.9874 15.9268 14.5126 15.9268 14.2197 16.2197L12.2197 18.2197C11.9268 18.5126 11.9268 18.9874 12.2197 19.2803L14.2197 21.2803C14.5126 21.5732 14.9874 21.5732 15.2803 21.2803C15.5732 20.9874 15.5732 20.5126 15.2803 20.2197L14.5607 19.5H19C21.2091 19.5 23 17.7091 23 15.5C23 13.2909 21.2091 11.5 19 11.5H2.75Z"}),e.React.createElement(I,{d:"M2 18.75C2 18.3358 2.33579 18 2.75 18H9.25C9.66421 18 10 18.3358 10 18.75C10 19.1642 9.66421 19.5 9.25 19.5H2.75C2.33579 19.5 2 19.1642 2 18.75Z"})),[g,u]=e.React.useState(!1),M=e.React.useRef(null),se=ne.useSafeAreaInsets();let ce=e.React.createElement(l,{style:{marginTop:0}},e.React.createElement(l,{style:{padding:15,paddingBottom:0,display:"flex",flexDirection:"row",flexWrap:"nowrap",justifyContent:"space-between"}},e.React.createElement(l,{style:{display:"flex",flexDirection:"row",gap:8}},e.React.createElement(R,{onPress:function(){d(!t)},onLongPress:function(){f.showToast("Toggle Word Wrap",s.getAssetIDByName("ic_information_filled_24px"))},style:{backgroundColor:t?o.bgBrighter:o.bgDark,padding:4,borderRadius:5,borderWidth:2,borderColor:t?o.bgBright:o.bgDark}},p),e.React.createElement(R,{onPress:function(){u(!0)},onLongPress:function(){f.showToast(e.i18n.Messages.JUMP,s.getAssetIDByName("ic_information_filled_24px"))},style:{marginLeft:10,backgroundColor:o.bgDark,padding:4,borderRadius:5,borderWidth:2,borderColor:o.bgDark}},e.React.createElement(X,{source:s.getAssetIDByName("ic_reply_24px"),style:{height:24,width:24,transform:[{scaleX:-1},{rotate:"-90deg"}]}})))),e.React.createElement($,{ref:M,style:{margin:15,marginBottom:50+se.bottom}},e.React.createElement($,{horizontal:!t},e.React.createElement(l,{style:{flexDirection:"row"}},e.React.createElement(l,{style:{borderTopLeftRadius:4,borderBottomLeftRadius:4,backgroundColor:o.bgDark,marginRight:5,paddingRight:2,paddingLeft:2,alignSelf:"flex-start"}}),e.React.createElement(K,{multiline:!0,selectable:!0,style:[{color:o.header,lineHeight:20,flex:1}],onChangeText:function(h){x(`${h}`)}},m)))),e.React.createElement(Z,{transparent:!0,animationType:"none",visible:g,onRequestClose:function(){return u(!1)}},e.React.createElement(l,{style:{flex:1,justifyContent:"center",alignItems:"center",backgroundColor:"rgba(0, 0, 0, 0.5)"}},e.React.createElement(l,{style:{backgroundColor:o.bgBright,padding:20,borderRadius:10,width:"90%"}},e.React.createElement(l,{style:{flexDirection:"row",justifyContent:"space-between",alignItems:"center",marginBottom:15}},e.React.createElement(E.Forms.FormText,{style:{fontSize:20,fontFamily:e.constants.Fonts.PRIMARY_BOLD}},e.i18n.Messages.JUMP),e.React.createElement(R,{onPress:function(){return u(!1)}},e.React.createElement(B,{source:s.getAssetIDByName("ic_close_16px"),style:{opacity:1}}))),e.React.createElement(R,{style:{backgroundColor:o.bgDark,borderRadius:5,padding:10,marginBottom:15,marginTop:5,flexDirection:"row",justifyContent:"space-between",alignItems:"center"},onPress:function(){let h=M?.current;u(!1),h?.scrollToEnd?.({animated:!0})}},e.React.createElement(B,{source:s.getAssetIDByName("ic_jump_to_bottom_24px"),style:{opacity:1}}),e.React.createElement(E.Forms.FormText,{style:{color:o.test,fontSize:16,fontFamily:e.constants.Fonts.PRIMARY_BOLD,textTransform:"uppercase"}},"Jump to the bottom"),e.React.createElement(l,null)),e.React.createElement(R,{style:{backgroundColor:o.bgDark,borderRadius:5,padding:10,marginBottom:10,flexDirection:"row",justifyContent:"space-between",alignItems:"center"},onPress:function(){let h=M?.current;u(!1),h?.scrollTo?.({y:0,animated:!0})}},e.React.createElement(B,{source:s.getAssetIDByName("ic_jump_to_bottom_24px"),style:{opacity:1,transform:[{scaleY:-1}]}}),e.React.createElement(E.Forms.FormText,{style:{color:o.test,fontSize:16,fontFamily:e.constants.Fonts.PRIMARY_BOLD,textTransform:"uppercase"}},"Jump to the top"),e.React.createElement(l,null))))));return e.React.createElement(Q,{initialRouteName:"FILE_CONTENT_PREVIEW",screens:{FILE_CONTENT_PREVIEW:{headerLeft:ee(function(){return q.popModal("file-content-preview")}),headerRight:ae(function(){return c(`${m}`)}),render:function(){return ce},headerTitle:function(){let h=C(_.theme,y.semanticColors.HEADER_PRIMARY);return e.React.createElement(R,{onPress:function(){e.clipboard.setString(n),f.showToast(e.i18n.Messages.COPIED_TEXT,s.getAssetIDByName("toast_copy_message"))}},e.React.createElement(k,{numberOfLines:1,style:{color:h}},n),e.React.createElement(k,{style:{color:h,fontSize:12}},r))}}}})}}const U=i.findByProps("getChannel","getDMFromUserId");i.findByStoreName("MessageStore"),i.findByStoreName("SelectedChannelStore"),i.findByProps("MessagesHandlers");const P=i.findByProps("openLazy","hideActionSheet"),T=i.findByProps("pushModal");function re(n){const a=JSON.parse(JSON.stringify(n));for(const r in a.author)switch(r){case"email":case"phone":case"mfaEnabled":case"hasBouncedEmail":delete a.author[r]}return Object.fromEntries(Object.entries(a).sort(function(r,c){let[t]=r,[d]=c;return t.localeCompare(d)}))}function oe(){b.before("openLazy",P,function(n){const[a,r,c]=n,t=c?.message;r!=="MessageLongPressActionSheet"||!t||a.then(function(d){const m=b.after("default",d,function(x,o){e.React.useEffect(function(){return function(){return m()}},[]);const p=v.findInReactTree(o,function(g){return g?.[0]?.type?.name==="ButtonRow"});if(!p)return o;p.splice(21,0,e.React.createElement(S,{label:"View Raw",icon:s.getAssetIDByName("ic_chat_bubble_16px"),onPress:async function(){T.pushModal({key:"file-content-preview",modal:{key:"file-content-preview",modal:H(t.content&&t.content!==""?t?.content.length>32?t?.content?.slice(0,32)?.replace(/\n/g," ")+"...":t?.content:"[Attachment(s)]",JSON.stringify(re(t),null,"	"),`@${t?.author?.username}`,function(g){try{let u={type:"MESSAGE_UPDATE",message:{...JSON.parse(g),guild_id:U.getChannel(t?.channel_id)?.guild_id,embeds:null,messageReference:null},dont_log:!0};(!u.message.content||u.message.content.replace(/\ufeff/g,"")==="")&&delete u.message.content,e.FluxDispatcher.dispatch(u),f.showToast("Pushed Edit",s.getAssetIDByName("ic_edit_24px")),T.popModal("file-content-preview")}catch{f.showToast("Make sure the JSON is valid",s.getAssetIDByName("ic_warning_24px"))}}),animation:"slide-up",shouldPersistUnderModals:!1,closable:!0}}),P.hideActionSheet()},onLongPress:async function(){T.pushModal({key:"file-content-preview",modal:{key:"file-content-preview",modal:H(t.content&&t.content.trim()!==""?t.content.replace(/\n/g," "):"[Attachment(s)]",t.content&&t.content.trim()!==""?t.content:"\uFEFF ",`@${t?.author?.username}`,function(g){e.FluxDispatcher.dispatch({type:"MESSAGE_UPDATE",message:{...t,content:`${g.replace(/\ufeff/g,"")}`,guild_id:U.getChannel(t?.channel_id)?.guild_id,embeds:null,messageReference:null},dont_log:!0}),f.showToast("Pushed Edit",s.getAssetIDByName("ic_edit_24px")),T.popModal("file-content-preview")}),animation:"slide-up",shouldPersistUnderModals:!1,closable:!0}}),P.hideActionSheet()}})),t.__vml_deleted||p.splice(30,0,e.React.createElement(S,{label:"Hide Message Locally",icon:s.getAssetIDByName("ic_eye"),onPress:async function(){e.FluxDispatcher.dispatch({type:"MESSAGE_DELETE",id:t.id,channelId:t.channel_id,__vml_cleanup:!0}),f.showToast("Hidden Message",s.getAssetIDByName("ic_eye_hidden")),P.hideActionSheet()}}))})})})}let N=[];var ie={onLoad:function(){N.push(oe()),N.push(V())},onUnload:function(){for(const n of N)n()}};return w.default=ie,Object.defineProperty(w,"__esModule",{value:!0}),w})({},vendetta.patcher,vendetta.ui.assets,vendetta.metro,vendetta.utils,vendetta.metro.common,vendetta.ui.components,vendetta.ui,vendetta.ui.toasts,vendetta.ui.alerts);
