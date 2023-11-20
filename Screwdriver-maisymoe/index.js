(function(o,n,a,s,l,g,m,c){"use strict";const p=a.findByStoreName("DeveloperOptionsStore"),d=a.findByProps("setDeveloperOptionSettings"),r=function(e){return d.setDeveloperOptionSettings({bugReporterEnabled:e})};function f(){vendetta.metro.findByProps("ChatListAnimationExperiment").ChatListAnimationExperiment.getCurrentConfig().shouldAnimateAndroid=!0;const e=p.isBugReporterEnabled;r(!n.storage.disableBugReporter);const i=s.before("setDeveloperOptionSettings",d,function(t){!n.storage.disableBugReporter||!t[0]?.bugReporterEnabled||(t[0].bugReporterEnabled=!1)});return function(){i(),r(e)}}const b=a.findByProps("addFiles","popFirstFile");function R(){return s.before("addFiles",b,function(e){n.storage.fixJSONUploads&&e[0]?.files.forEach(function(i){i.mimeType==="application/json"&&(i.mimeType="text/plain")})})}const{FormSection:v,FormRow:S,FormSwitchRow:y,FormDivider:E}=c.Forms,B=[{title:"Quality of Life",items:[{label:"Forcibly disable Bug Reporter",subLabel:"Prevent enabling Discord's Bug Reporter, since the value of built-in toggle does not persist.",icon:"ic_noise_cancellation_disabled",setting:"disableBugReporter",action:function(){return r(!1)}}]},{title:"Fixes",items:[{label:"JSON file uploads",subLabel:"Fix a long-standing Discord bug causing JSON files to be uploaded with their metadata as contents.",icon:"ic_file_upload_24px",setting:"fixJSONUploads"}]}];function F(){return g.useProxy(n.storage),React.createElement(l.ReactNative.ScrollView,{style:{flex:1},contentContainerStyle:{paddingBottom:38}},B.map(function(e,i){return React.createElement(v,{title:e.title,titleStyleType:i===0?"no_border":void 0},e.disclaimer&&React.createElement(l.ReactNative.View,{style:{marginHorizontal:10,marginBottom:10}},React.createElement(c.HelpMessage,{messageType:0},e.disclaimer)),e.items.map(function(t,N){return React.createElement(React.Fragment,null,React.createElement(y,{label:t.label,subLabel:t.subLabel,leading:t.icon&&React.createElement(S.Icon,{source:m.getAssetIDByName(t.icon)}),disabled:t.disabled,value:n.storage[t.setting],onValueChange:function(u){t.action?.(u),n.storage[t.setting]=u}}),N!==e.items.length-1&&React.createElement(E,null))}))}))}n.storage.fixJSONUploads??=!0;const h=[f(),R()],x=function(){return h.forEach(function(e){return e()})};return o.onUnload=x,o.settings=F,o})({},vendetta.plugin,vendetta.metro,vendetta.patcher,vendetta.metro.common,vendetta.storage,vendetta.ui.assets,vendetta.ui.components);
