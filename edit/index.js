(function(A,a,N,r,H,g,e,f,h){"use strict";const{Image:U}=f.General,{FormRow:w}=f.Forms,D=vendetta.metro.findByProps("ActionSheetRow")?.ActionSheetRow;function x(s){let{label:l,icon:o,onPress:d,onLongPress:t}=s;const c=e.stylesheet.createThemedStyleSheet({icon:{width:18,height:18,tintColor:h.semanticColors.INTERACTIVE_NORMAL,opacity:1}});return D?React.createElement(D,{label:l,icon:React.createElement(D.Icon,{source:o,IconComponent:function(){return React.createElement(U,{resizeMode:"cover",style:c.icon,source:o})}}),onPress:function(){return d?.()},onLongPress:function(){return t?.()}}):React.createElement(w,{label:l,leading:React.createElement(w.Icon,{source:o,style:c.icon}),onPress:function(){return d?.()},onLongPress:function(){return t?.()}})}const{View:i,Text:v,TextInput:j,TouchableOpacity:p}=f.General,{FormIcon:m}=f.Forms,{ScrollView:L,Image:z,Modal:W}=e.ReactNative,G=a.findByProps("pushModal"),R=a.findByStoreName("ThemeStore"),{meta:{resolveSemanticColor:E}}=a.findByProps("colors","meta"),J=a.findByName("Navigator")??a.findByProps("Navigator")?.Navigator,Y=a.findByProps("getRenderCloseButton")?.getRenderCloseButton??a.findByProps("getHeaderCloseButton")?.getHeaderCloseButton,$=a.findByName("Svg",!1).default,S=a.findByName("Svg",!1).Path,V=a.findByProps("useSafeAreaInsets");function K(s,l){return function(){return e.React.createElement(p,{onPress:s,onLongPress:l},e.React.createElement(m,{source:r.getAssetIDByName("ic_edit_24px"),style:{marginRight:8,marginLeft:-8,opacity:1}}))}}function F(){let s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"unknown",l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"dummy",o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"dummy",d=arguments.length>3?arguments[3]:void 0,t=arguments.length>4?arguments[4]:void 0;return function(){const[c,T]=e.React.useState(!0),[I,P]=e.React.useState(`${l}`),n={header:E(R.theme,h.semanticColors.HEADER_PRIMARY),test:E(R.theme,h.semanticColors.TEXT_MUTED),bgDark:E(R.theme,h.semanticColors.BACKGROUND_SECONDARY_ALT),bgBright:E(R.theme,h.semanticColors.BACKGROUND_SECONDARY),bgBrighter:E(R.theme,h.semanticColors.BACKGROUND_ACCENT)},y=e.React.createElement($,{height:"24",width:"24",viewBox:"0 0 24 24",fill:c?n.header:n.test},e.React.createElement(S,{d:"M2.75 5C2.33579 5 2 5.33579 2 5.75C2 6.16421 2.33579 6.5 2.75 6.5H21.25C21.6642 6.5 22 6.16421 22 5.75C22 5.33579 21.6642 5 21.25 5H2.75Z"}),e.React.createElement(S,{d:"M2.75 11.5C2.33579 11.5 2 11.8358 2 12.25C2 12.6642 2.33579 13 2.75 13H19C20.3807 13 21.5 14.1193 21.5 15.5C21.5 16.8807 20.3807 18 19 18H14.5607L15.2803 17.2803C15.5732 16.9874 15.5732 16.5126 15.2803 16.2197C14.9874 15.9268 14.5126 15.9268 14.2197 16.2197L12.2197 18.2197C11.9268 18.5126 11.9268 18.9874 12.2197 19.2803L14.2197 21.2803C14.5126 21.5732 14.9874 21.5732 15.2803 21.2803C15.5732 20.9874 15.5732 20.5126 15.2803 20.2197L14.5607 19.5H19C21.2091 19.5 23 17.7091 23 15.5C23 13.2909 21.2091 11.5 19 11.5H2.75Z"}),e.React.createElement(S,{d:"M2 18.75C2 18.3358 2.33579 18 2.75 18H9.25C9.66421 18 10 18.3358 10 18.75C10 19.1642 9.66421 19.5 9.25 19.5H2.75C2.33579 19.5 2 19.1642 2 18.75Z"})),[_,C]=e.React.useState(!1),M=e.React.useRef(null),Q=V.useSafeAreaInsets();let ee=e.React.createElement(i,{style:{marginTop:0}},e.React.createElement(i,{style:{padding:15,paddingBottom:0,display:"flex",flexDirection:"row",flexWrap:"nowrap",justifyContent:"space-between"}},e.React.createElement(i,{style:{display:"flex",flexDirection:"row",gap:8}},e.React.createElement(p,{onPress:function(){T(!c)},onLongPress:function(){g.showToast("Toggle Word Wrap",r.getAssetIDByName("ic_information_filled_24px"))},style:{backgroundColor:c?n.bgBrighter:n.bgDark,padding:4,borderRadius:5,borderWidth:2,borderColor:c?n.bgBright:n.bgDark}},y),e.React.createElement(p,{onPress:function(){C(!0)},onLongPress:function(){g.showToast(e.i18n.Messages.JUMP,r.getAssetIDByName("ic_information_filled_24px"))},style:{marginLeft:10,backgroundColor:n.bgDark,padding:4,borderRadius:5,borderWidth:2,borderColor:n.bgDark}},e.React.createElement(z,{source:r.getAssetIDByName("ic_reply_24px"),style:{height:24,width:24,transform:[{scaleX:-1},{rotate:"-90deg"}]}})))),e.React.createElement(L,{ref:M,style:{margin:15,marginBottom:50+Q.bottom}},e.React.createElement(L,{horizontal:!c},e.React.createElement(i,{style:{flexDirection:"row"}},e.React.createElement(i,{style:{borderTopLeftRadius:4,borderBottomLeftRadius:4,backgroundColor:n.bgDark,marginRight:5,paddingRight:2,paddingLeft:2,alignSelf:"flex-start"}}),e.React.createElement(j,{multiline:!0,selectable:!0,editable:t,style:[{color:n.header,lineHeight:20,flex:1}],onChangeText:function(u){P(`${u}`)}},I)))),e.React.createElement(W,{transparent:!0,animationType:"none",visible:_,onRequestClose:function(){return C(!1)}},e.React.createElement(i,{style:{flex:1,justifyContent:"center",alignItems:"center",backgroundColor:"rgba(0, 0, 0, 0.5)"}},e.React.createElement(i,{style:{backgroundColor:n.bgBright,padding:20,borderRadius:10,width:"90%"}},e.React.createElement(i,{style:{flexDirection:"row",justifyContent:"space-between",alignItems:"center",marginBottom:15}},e.React.createElement(f.Forms.FormText,{style:{fontSize:20,fontFamily:e.constants.Fonts.PRIMARY_BOLD}},e.i18n.Messages.JUMP),e.React.createElement(p,{onPress:function(){return C(!1)}},e.React.createElement(m,{source:r.getAssetIDByName("ic_close_16px"),style:{opacity:1}}))),e.React.createElement(p,{style:{backgroundColor:n.bgDark,borderRadius:5,padding:10,marginBottom:15,marginTop:5,flexDirection:"row",justifyContent:"space-between",alignItems:"center"},onPress:function(){let u=M?.current;C(!1),u?.scrollToEnd?.({animated:!0})}},e.React.createElement(m,{source:r.getAssetIDByName("ic_jump_to_bottom_24px"),style:{opacity:1}}),e.React.createElement(f.Forms.FormText,{style:{color:n.test,fontSize:16,fontFamily:e.constants.Fonts.PRIMARY_BOLD,textTransform:"uppercase"}},"Jump to the bottom"),e.React.createElement(i,null)),e.React.createElement(p,{style:{backgroundColor:n.bgDark,borderRadius:5,padding:10,marginBottom:10,flexDirection:"row",justifyContent:"space-between",alignItems:"center"},onPress:function(){let u=M?.current;C(!1),u?.scrollTo?.({y:0,animated:!0})}},e.React.createElement(m,{source:r.getAssetIDByName("ic_jump_to_bottom_24px"),style:{opacity:1,transform:[{scaleY:-1}]}}),e.React.createElement(f.Forms.FormText,{style:{color:n.test,fontSize:16,fontFamily:e.constants.Fonts.PRIMARY_BOLD,textTransform:"uppercase"}},"Jump to the top"),e.React.createElement(i,null))))));return e.React.createElement(J,{initialRouteName:"FILE_CONTENT_PREVIEW",screens:{FILE_CONTENT_PREVIEW:{headerLeft:Y(function(){return G.popModal("file-content-preview")}),headerRight:K(function(){return d(`${I}`)}),render:function(){return ee},headerTitle:function(){let u=E(R.theme,h.semanticColors.HEADER_PRIMARY);return e.React.createElement(p,{onPress:function(){e.clipboard.setString(s),g.showToast(e.i18n.Messages.COPIED_TEXT,r.getAssetIDByName("toast_copy_message"))}},e.React.createElement(i,{style:{alignSelf:"flex-start",maxWidth:"80%",minWidth:"80%"}},e.React.createElement(v,{ellipsizeMode:"tail",numberOfLines:1,style:{color:u,textAlign:"left"}},s)),e.React.createElement(i,{style:{alignSelf:"flex-start"}},e.React.createElement(v,{ellipsizeMode:"tail",style:{color:u,fontSize:12,textAlign:"left"}},o)))}}}})}}const O=a.findByProps("getChannel","getDMFromUserId");a.findByStoreName("MessageStore"),a.findByStoreName("SelectedChannelStore"),a.findByProps("MessagesHandlers");const b=a.findByProps("openLazy","hideActionSheet"),B=a.findByProps("pushModal");function X(s){const l=JSON.parse(JSON.stringify(s));for(const o in l.author)switch(o){case"email":case"phone":case"mfaEnabled":case"hasBouncedEmail":delete l.author[o]}return Object.fromEntries(Object.entries(l).sort(function(o,d){let[t]=o,[c]=d;return t.localeCompare(c)}))}function Z(){N.before("openLazy",b,function(s){const[l,o,d]=s,t=d?.message;o!=="MessageLongPressActionSheet"||!t||l.then(function(c){const T=N.after("default",c,function(I,P){e.React.useEffect(function(){return function(){return T()}},[]);const n=H.findInReactTree(P,function(y){return y?.[0]?.type?.name==="ButtonRow"});if(!n)return P;n.push(e.React.createElement(x,{label:"Edit Message Locally",icon:r.getAssetIDByName("ic_chat_bubble_32px"),onPress:async function(){B.pushModal({key:"file-content-preview",modal:{key:"file-content-preview",modal:F(t.content&&t.content.trim()!==""?t.content.replace(/\n/g," "):"[Attachment(s)]",t.content&&t.content.trim()!==""?t.content:"\uFEFF ",`@${t?.author?.username}`,function(y){e.FluxDispatcher.dispatch({type:"MESSAGE_UPDATE",message:{...t,content:`${y}`,guild_id:O.getChannel(t?.channel_id)?.guild_id},dont_log:!0}),g.showToast("Pushed Edit",r.getAssetIDByName("ic_edit_24px")),B.popModal("file-content-preview")}),animation:"slide-up",shouldPersistUnderModals:!1,closable:!0}}),b.hideActionSheet()},onLongPress:async function(){B.pushModal({key:"file-content-preview",modal:{key:"file-content-preview",modal:F(t.content&&t.content!=""?t?.content.length>32?t?.content?.slice(0,32)?.replace(/\n/g," ")+"...":t?.content:"[Attachment(s)]",JSON.stringify(X(t),null,"	"),`@${t?.author?.username}`,function(y){try{let _={type:"MESSAGE_UPDATE",message:{...JSON.parse(y),guild_id:O.getChannel(t?.channel_id)?.guild_id},dont_log:!0};(!_.message.content||_.message.content.replace(/\ufeff/g,"")==="")&&delete _.message.content,e.FluxDispatcher.dispatch(_),g.showToast("Pushed Edit",r.getAssetIDByName("ic_edit_24px")),B.popModal("file-content-preview")}catch{g.showToast("Make sure the JSON is valid",r.getAssetIDByName("ic_warning_24px"))}}),animation:"slide-up",shouldPersistUnderModals:!1,closable:!0}}),b.hideActionSheet()}})),t?.monke_msg_logger_deleted||n.push(e.React.createElement(x,{label:"Hide Message Locally",icon:r.getAssetIDByName("ic_eye"),onPress:async function(){e.FluxDispatcher.dispatch({type:"MESSAGE_DELETE",id:t.id,channelId:t.channel_id,__vml_cleanup:!0}),g.showToast("Hidden Message",r.getAssetIDByName("ic_eye_hidden")),b.hideActionSheet()}}))})})})}let k=[];var q={onLoad:function(){k.push(Z())},onUnload:function(){for(const s of k)s()}};return A.default=q,Object.defineProperty(A,"__esModule",{value:!0}),A})({},vendetta.metro,vendetta.patcher,vendetta.ui.assets,vendetta.utils,vendetta.ui.toasts,vendetta.metro.common,vendetta.ui.components,vendetta.ui);
