(function(D,A,o,i,L,e,h,y,g,U){"use strict";const{Image:J}=h.General,{FormRow:F}=h.Forms,w=vendetta.metro.findByProps("ActionSheetRow")?.ActionSheetRow;function I(n){let{label:r,icon:a,onPress:c,onLongPress:t}=n;const l=e.stylesheet.createThemedStyleSheet({icon:{width:24,height:24,tintColor:y.semanticColors.INTERACTIVE_NORMAL,opacity:1}});return w?React.createElement(w,{label:r,icon:React.createElement(w.Icon,{source:a,IconComponent:function(){return React.createElement(J,{resizeMode:"cover",style:l.icon,source:a})}}),onPress:function(){return c?.()},onLongPress:function(){return t?.()}}):React.createElement(F,{label:r,leading:React.createElement(F.Icon,{source:a,style:l.icon}),onPress:function(){return c?.()},onLongPress:function(){return t?.()}})}const W="https://mnhrte8nst.us.aircode.run/translate",Y="https://translate.googleapis.com/translate_a/single?client=gtx&dt=t";async function G(n){const r=`${Y}&sl=auto&tl=en&q=${encodeURIComponent(n.replace(/\n/g,"                                           "))}`;try{const a=await fetch(r);return a.ok?(await a.json())[0][0][0]:"Try Again"}catch{}}async function V(n){const r=await(await fetch(W,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({text:n,source_lang:"auto",target_lang:"en"})})).json();return r.code!==200?"Try Again.":r.data}async function K(n,r){try{return r==="dl"?await V(n):await G(n)}catch{}}const x=` \uFF3D\`

`;i.findByStoreName("MessageStore"),i.findByProps("getChannel","getDMFromUserId");const O=i.findByProps("openLazy","hideActionSheet");function X(n,r){let a=n.lastIndexOf(r);return a!==-1?n.substring(a+r.length):n}async function k(n,r){let a=n.content;try{a=X(a,"06e56823dash6945dash4281dash8a2bdashecee215cba27")}catch{}a.includes(x)&&(a=`${a.substring(a.lastIndexOf(x)+x.length)}`);const c=await K(a,r);U.showConfirmationAlert({title:`Translation [en] | @${n.author.globalName?.normalize("NFKC")||n.author.username}`,content:`${c}`,confirmText:"Copy",cancelText:"Close",confirmColor:"brand",onConfirm:function(){try{e.clipboard.setString(`${c}`),g.showToast("Copied Translation",o.getAssetIDByName("toast_copy_message"))}catch{}}}),O.hideActionSheet()}function Z(){A.before("openLazy",O,function(n){const[r,a,c]=n,t=c?.message;a!=="MessageLongPressActionSheet"||!t||r.then(function(l){const _=A.after("default",l,function(P,R){e.React.useEffect(function(){return function(){return _()}},[]);const s=L.findInReactTree(R,function(u){return u?.[0]?.type?.name==="ButtonRow"});if(!s)return R;t.content&&s.splice(5,0,e.React.createElement(I,{label:"Translate Message",icon:o.getAssetIDByName("ic_locale_24px"),onPress:async function(){return await k(t,"dl")},onLongPress:async function(){return await k(t,"gl")}}))})})})}const{View:d,Text:$,TextInput:q,TouchableOpacity:p}=h.General,{FormIcon:B}=h.Forms,{ScrollView:H,Image:Q,Modal:ee}=e.ReactNative;i.findByProps("pushModal");const E=i.findByStoreName("ThemeStore"),{meta:{resolveSemanticColor:m}}=i.findByProps("colors","meta"),te=i.findByName("Navigator")??i.findByProps("Navigator")?.Navigator,ne=i.findByName("Svg",!1).default,N=i.findByName("Svg",!1).Path,ae=i.findByProps("useSafeAreaInsets");function re(n,r){return function(){return e.React.createElement(p,{onPress:n,onLongPress:r},e.React.createElement(B,{source:o.getAssetIDByName("ic_edit_24px"),style:{marginRight:8,marginLeft:-8,opacity:1}}))}}function j(){let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"unknown",r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"dummy",a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"dummy",c=arguments.length>3?arguments[3]:void 0,t=arguments.length>4?arguments[4]:void 0;return function(){const[l,_]=e.React.useState(!0),[P,R]=e.React.useState(`${r}`),s={header:m(E.theme,y.semanticColors.HEADER_PRIMARY),test:m(E.theme,y.semanticColors.TEXT_MUTED),bgDark:m(E.theme,y.semanticColors.BACKGROUND_SECONDARY_ALT),bgBright:m(E.theme,y.semanticColors.BACKGROUND_SECONDARY),bgBrighter:m(E.theme,y.semanticColors.BACKGROUND_ACCENT)},u=e.React.createElement(ne,{height:"24",width:"24",viewBox:"0 0 24 24",fill:l?s.header:s.test},e.React.createElement(N,{d:"M2.75 5C2.33579 5 2 5.33579 2 5.75C2 6.16421 2.33579 6.5 2.75 6.5H21.25C21.6642 6.5 22 6.16421 22 5.75C22 5.33579 21.6642 5 21.25 5H2.75Z"}),e.React.createElement(N,{d:"M2.75 11.5C2.33579 11.5 2 11.8358 2 12.25C2 12.6642 2.33579 13 2.75 13H19C20.3807 13 21.5 14.1193 21.5 15.5C21.5 16.8807 20.3807 18 19 18H14.5607L15.2803 17.2803C15.5732 16.9874 15.5732 16.5126 15.2803 16.2197C14.9874 15.9268 14.5126 15.9268 14.2197 16.2197L12.2197 18.2197C11.9268 18.5126 11.9268 18.9874 12.2197 19.2803L14.2197 21.2803C14.5126 21.5732 14.9874 21.5732 15.2803 21.2803C15.5732 20.9874 15.5732 20.5126 15.2803 20.2197L14.5607 19.5H19C21.2091 19.5 23 17.7091 23 15.5C23 13.2909 21.2091 11.5 19 11.5H2.75Z"}),e.React.createElement(N,{d:"M2 18.75C2 18.3358 2.33579 18 2.75 18H9.25C9.66421 18 10 18.3358 10 18.75C10 19.1642 9.66421 19.5 9.25 19.5H2.75C2.33579 19.5 2 19.1642 2 18.75Z"})),[b,C]=e.React.useState(!1),v=e.React.useRef(null),le=ae.useSafeAreaInsets();let ce=e.React.createElement(d,{style:{marginTop:0}},e.React.createElement(d,{style:{padding:15,paddingBottom:0,display:"flex",flexDirection:"row",flexWrap:"nowrap",justifyContent:"space-between"}},e.React.createElement(d,{style:{display:"flex",flexDirection:"row",gap:8}},e.React.createElement(p,{onPress:function(){_(!l)},onLongPress:function(){g.showToast("Toggle Word Wrap",o.getAssetIDByName("ic_information_filled_24px"))},style:{backgroundColor:l?s.bgBrighter:s.bgDark,padding:4,borderRadius:5,borderWidth:2,borderColor:l?s.bgBright:s.bgDark}},u),e.React.createElement(p,{onPress:function(){C(!0)},onLongPress:function(){g.showToast(e.i18n.Messages.JUMP,o.getAssetIDByName("ic_information_filled_24px"))},style:{marginLeft:10,backgroundColor:s.bgDark,padding:4,borderRadius:5,borderWidth:2,borderColor:s.bgDark}},e.React.createElement(Q,{source:o.getAssetIDByName("ic_reply_24px"),style:{height:24,width:24,transform:[{scaleX:-1},{rotate:"-90deg"}]}})))),e.React.createElement(H,{ref:v,style:{margin:15,marginBottom:50+le.bottom}},e.React.createElement(H,{horizontal:!l},e.React.createElement(d,{style:{flexDirection:"row"}},e.React.createElement(d,{style:{borderTopLeftRadius:4,borderBottomLeftRadius:4,backgroundColor:s.bgDark,marginRight:5,paddingRight:2,paddingLeft:2,alignSelf:"flex-start"}}),e.React.createElement(q,{multiline:!0,selectable:!0,editable:t,style:[{color:s.header,lineHeight:20,flex:1}],onChangeText:function(f){R(`${f}`)}},P)))),e.React.createElement(ee,{transparent:!0,animationType:"none",visible:b,onRequestClose:function(){return C(!1)}},e.React.createElement(d,{style:{flex:1,justifyContent:"center",alignItems:"center",backgroundColor:"rgba(0, 0, 0, 0.5)"}},e.React.createElement(d,{style:{backgroundColor:s.bgBright,padding:20,borderRadius:10,width:"90%"}},e.React.createElement(d,{style:{flexDirection:"row",justifyContent:"space-between",alignItems:"center",marginBottom:15}},e.React.createElement(h.Forms.FormText,{style:{fontSize:20,fontFamily:e.constants.Fonts.PRIMARY_BOLD}},e.i18n.Messages.JUMP),e.React.createElement(p,{onPress:function(){return C(!1)}},e.React.createElement(B,{source:o.getAssetIDByName("ic_close_16px"),style:{opacity:1}}))),e.React.createElement(p,{style:{backgroundColor:s.bgDark,borderRadius:5,padding:10,marginBottom:15,marginTop:5,flexDirection:"row",justifyContent:"space-between",alignItems:"center"},onPress:function(){let f=v?.current;C(!1),f?.scrollToEnd?.({animated:!0})}},e.React.createElement(B,{source:o.getAssetIDByName("ic_jump_to_bottom_24px"),style:{opacity:1}}),e.React.createElement(h.Forms.FormText,{style:{color:s.test,fontSize:16,fontFamily:e.constants.Fonts.PRIMARY_BOLD,textTransform:"uppercase"}},"Jump to the bottom"),e.React.createElement(d,null)),e.React.createElement(p,{style:{backgroundColor:s.bgDark,borderRadius:5,padding:10,marginBottom:10,flexDirection:"row",justifyContent:"space-between",alignItems:"center"},onPress:function(){let f=v?.current;C(!1),f?.scrollTo?.({y:0,animated:!0})}},e.React.createElement(B,{source:o.getAssetIDByName("ic_jump_to_bottom_24px"),style:{opacity:1,transform:[{scaleY:-1}]}}),e.React.createElement(h.Forms.FormText,{style:{color:s.test,fontSize:16,fontFamily:e.constants.Fonts.PRIMARY_BOLD,textTransform:"uppercase"}},"Jump to the top"),e.React.createElement(d,null))))));return e.React.createElement(te,{initialRouteName:"FILE_CONTENT_PREVIEW",screens:{FILE_CONTENT_PREVIEW:{headerRight:re(function(){return c(`${P}`)}),render:function(){return ce},headerTitle:function(){let f=m(E.theme,y.semanticColors.HEADER_PRIMARY);return e.React.createElement(p,{onPress:function(){e.clipboard.setString(n),g.showToast(e.i18n.Messages.COPIED_TEXT,o.getAssetIDByName("toast_copy_message"))}},e.React.createElement(d,{style:{alignSelf:"flex-start",maxWidth:"98%"}},e.React.createElement($,{ellipsizeMode:"tail",numberOfLines:1,style:{color:f,textAlign:"left"}},n)),e.React.createElement(d,{style:{alignSelf:"flex-start",maxWidth:"98%"}},e.React.createElement($,{ellipsizeMode:"tail",style:{color:f,fontSize:12,textAlign:"left"}},a)))}}}})}}const z=i.findByProps("getChannel","getDMFromUserId");i.findByStoreName("MessageStore"),i.findByStoreName("SelectedChannelStore"),i.findByProps("MessagesHandlers");const T=i.findByProps("openLazy","hideActionSheet"),S=i.findByProps("pushModal");function se(n){const r=JSON.parse(JSON.stringify(n));for(const a in r.author)switch(a){case"email":case"phone":case"mfaEnabled":case"hasBouncedEmail":delete r.author[a]}return Object.fromEntries(Object.entries(r).sort(function(a,c){let[t]=a,[l]=c;return t.localeCompare(l)}))}function ie(){A.before("openLazy",T,function(n){const[r,a,c]=n,t=c?.message;a!=="MessageLongPressActionSheet"||!t||r.then(function(l){const _=A.after("default",l,function(P,R){e.React.useEffect(function(){return function(){return _()}},[]);const s=L.findInReactTree(R,function(u){return u?.[0]?.type?.name==="ButtonRow"});if(!s)return R;s.push(e.React.createElement(I,{label:"Edit Message Locally",icon:o.getAssetIDByName("ic_chat_bubble_32px"),onPress:async function(){S.pushModal({key:"file-content-preview",modal:{key:"file-content-preview",modal:j(t.content&&t.content.trim()!==""?t.content.replace(/\n/g," "):"[Attachment(s)]",t.content&&t.content.trim()!==""?t.content:"\uFEFF ",`@${t?.author?.username}`,function(u){e.FluxDispatcher.dispatch({type:"MESSAGE_UPDATE",message:{...t,content:`${u}`,guild_id:z.getChannel(t?.channel_id)?.guild_id,embeds:null,messageReference:null},dont_log:!0}),g.showToast("Pushed Edit",o.getAssetIDByName("ic_edit_24px")),S.popModal("file-content-preview")}),animation:"slide-up",shouldPersistUnderModals:!1,closable:!0}}),T.hideActionSheet()},onLongPress:async function(){S.pushModal({key:"file-content-preview",modal:{key:"file-content-preview",modal:j(t.content&&t.content!=""?t?.content.length>32?t?.content?.slice(0,32)?.replace(/\n/g," ")+"...":t?.content:"[Attachment(s)]",JSON.stringify(se(t),null,"	"),`@${t?.author?.username}`,function(u){try{let b={type:"MESSAGE_UPDATE",message:{...JSON.parse(u),guild_id:z.getChannel(t?.channel_id)?.guild_id,embeds:null,messageReference:null},dont_log:!0};(!b.message.content||b.message.content.replace(/\ufeff/g,"")==="")&&delete b.message.content,e.FluxDispatcher.dispatch(b),g.showToast("Pushed Edit",o.getAssetIDByName("ic_edit_24px")),S.popModal("file-content-preview")}catch{g.showToast("Make sure the JSON is valid",o.getAssetIDByName("ic_warning_24px"))}}),animation:"slide-up",shouldPersistUnderModals:!1,closable:!0}}),T.hideActionSheet()}})),t?.content?.includes("06e56823dash6945dash4281dash8a2bdashecee215cba27")||s.push(e.React.createElement(I,{label:"Hide Message Locally",icon:o.getAssetIDByName("ic_eye"),onPress:async function(){e.FluxDispatcher.dispatch({type:"MESSAGE_DELETE",id:t.id,channelId:t.channel_id,__vml_cleanup:!0}),g.showToast("Hidden Message",o.getAssetIDByName("ic_eye_hidden")),T.hideActionSheet()}}))})})})}let M=[];var oe={onLoad:function(){M.push(ie()),M.push(Z())},onUnload:function(){for(const n of M)n()}};return D.default=oe,Object.defineProperty(D,"__esModule",{value:!0}),D})({},vendetta.patcher,vendetta.ui.assets,vendetta.metro,vendetta.utils,vendetta.metro.common,vendetta.ui.components,vendetta.ui,vendetta.ui.toasts,vendetta.ui.alerts);
