"use strict";(globalThis.webpackChunk_kiwicom_orbit_components=globalThis.webpackChunk_kiwicom_orbit_components||[]).push([[3186],{"./src/Toast/Toast.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Playground:()=>Playground,RTL:()=>RTL,WithPromise:()=>WithPromise,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Toast_stories});var react=__webpack_require__("../../node_modules/react/index.js"),Button=__webpack_require__("./src/Button/index.tsx"),Notification=__webpack_require__("./src/icons/Notification.tsx"),RenderInRtl=__webpack_require__("./src/utils/rtl/RenderInRtl.tsx"),clsx=__webpack_require__("../../node_modules/clsx/dist/clsx.mjs");let e={data:""},t=t=>"object"==typeof window?((t?t.querySelector("#_goober"):window._goober)||Object.assign((t||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:t||e,l=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,a=/\/\*[^]*?\*\/|  +/g,n=/\n+/g,o=(e,t)=>{let r="",l="",a="";for(let n in e){let c=e[n];"@"==n[0]?"i"==n[1]?r=n+" "+c+";":l+="f"==n[1]?o(c,n):n+"{"+o(c,"k"==n[1]?"":t)+"}":"object"==typeof c?l+=o(c,t?t.replace(/([^,])+/g,(e=>n.replace(/(^:.*)|([^,])+/g,(t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)))):n):null!=c&&(n=/^--/.test(n)?n:n.replace(/[A-Z]/g,"-$&").toLowerCase(),a+=o.p?o.p(n,c):n+":"+c+";")}return r+(t&&a?t+"{"+a+"}":a)+l},c={},s=e=>{if("object"==typeof e){let t="";for(let r in e)t+=r+s(e[r]);return t}return e},i=(e,t,r,i,p)=>{let u=s(e),d=c[u]||(c[u]=(e=>{let t=0,r=11;for(;t<e.length;)r=101*r+e.charCodeAt(t++)>>>0;return"go"+r})(u));if(!c[d]){let t=u!==e?e:(e=>{let t,r,o=[{}];for(;t=l.exec(e.replace(a,""));)t[4]?o.shift():t[3]?(r=t[3].replace(n," ").trim(),o.unshift(o[0][r]=o[0][r]||{})):o[0][t[1]]=t[2].replace(n," ").trim();return o[0]})(e);c[d]=o(p?{["@keyframes "+d]:t}:t,r?"":"."+d)}let f=r&&c.g?c.g:null;return r&&(c.g=c[d]),((e,t,r,l)=>{l?t.data=t.data.replace(l,e):-1===t.data.indexOf(e)&&(t.data=r?e+t.data:t.data+e)})(c[d],t,i,f),d},p=(e,t,r)=>e.reduce(((e,l,a)=>{let n=t[a];if(n&&n.call){let e=n(r),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;n=t?"."+t:e&&"object"==typeof e?e.props?"":o(e,""):!1===e?"":e}return e+l+(null==n?"":n)}),"");function u(e){let r=this||{},l=e.call?e(r.p):e;return i(l.unshift?l.raw?p(l,[].slice.call(arguments,1),r.p):l.reduce(((e,t)=>Object.assign(e,t&&t.call?t(r.p):t)),{}):l,t(r.target),r.g,r.o,r.k)}u.bind({g:1});let d,goober_modern_f,g,h=u.bind({k:1});function j(e,t){let r=this||{};return function(){let l=arguments;function a(n,o){let c=Object.assign({},n),s=c.className||a.className;r.p=Object.assign({theme:goober_modern_f&&goober_modern_f()},c),r.o=/ *go\d+/.test(s),c.className=u.apply(r,l)+(s?" "+s:""),t&&(c.ref=o);let i=e;return e[0]&&(i=c.as||e,delete c.as),g&&i[0]&&g(c),d(i,c)}return t?t(a):a}}var T=(e,t)=>(e=>"function"==typeof e)(e)?e(t):e,U=(()=>{let e=0;return()=>(++e).toString()})(),dist_b=(()=>{let e;return()=>{if(void 0===e&&typeof window<"u"){let t=matchMedia("(prefers-reduced-motion: reduce)");e=!t||t.matches}return e}})(),S=new Map,$=e=>{if(S.has(e))return;let t=setTimeout((()=>{S.delete(e),dist_u({type:4,toastId:e})}),1e3);S.set(e,t)},v=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,20)};case 1:return t.toast.id&&(e=>{let t=S.get(e);t&&clearTimeout(t)})(t.toast.id),{...e,toasts:e.toasts.map((r=>r.id===t.toast.id?{...r,...t.toast}:r))};case 2:let{toast:o}=t;return e.toasts.find((r=>r.id===o.id))?v(e,{type:1,toast:o}):v(e,{type:0,toast:o});case 3:let{toastId:s}=t;return s?$(s):e.toasts.forEach((r=>{$(r.id)})),{...e,toasts:e.toasts.map((r=>r.id===s||void 0===s?{...r,visible:!1}:r))};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter((r=>r.id!==t.toastId))};case 5:return{...e,pausedAt:t.time};case 6:let a=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map((r=>({...r,pauseDuration:r.pauseDuration+a})))}}},A=[],P={toasts:[],pausedAt:void 0},dist_u=e=>{P=v(P,e),A.forEach((t=>{t(P)}))},Y={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},dist_h=e=>(t,o)=>{let s=((e,t="blank",o)=>({createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...o,id:(null==o?void 0:o.id)||U()}))(t,e,o);return dist_u({type:2,toast:s}),s.id},dist_n=(e,t)=>dist_h("blank")(e,t);dist_n.error=dist_h("error"),dist_n.success=dist_h("success"),dist_n.loading=dist_h("loading"),dist_n.custom=dist_h("custom"),dist_n.dismiss=e=>{dist_u({type:3,toastId:e})},dist_n.remove=e=>dist_u({type:4,toastId:e}),dist_n.promise=(e,t,o)=>{let s=dist_n.loading(t.loading,{...o,...null==o?void 0:o.loading});return e.then((a=>(dist_n.success(T(t.success,a),{id:s,...o,...null==o?void 0:o.success}),a))).catch((a=>{dist_n.error(T(t.error,a),{id:s,...o,...null==o?void 0:o.error})})),e};var Z=(e,t)=>{dist_u({type:1,toast:{id:e,height:t}})},ee=()=>{dist_u({type:5,time:Date.now()})},D=e=>{let{toasts:t,pausedAt:o}=((e={})=>{let[t,o]=(0,react.useState)(P);(0,react.useEffect)((()=>(A.push(o),()=>{let a=A.indexOf(o);a>-1&&A.splice(a,1)})),[t]);let s=t.toasts.map((a=>{var r,c;return{...e,...e[a.type],...a,duration:a.duration||(null==(r=e[a.type])?void 0:r.duration)||(null==e?void 0:e.duration)||Y[a.type],style:{...e.style,...null==(c=e[a.type])?void 0:c.style,...a.style}}}));return{...t,toasts:s}})(e);(0,react.useEffect)((()=>{if(o)return;let r=Date.now(),c=t.map((i=>{if(i.duration===1/0)return;let d=(i.duration||0)+i.pauseDuration-(r-i.createdAt);if(!(d<0))return setTimeout((()=>dist_n.dismiss(i.id)),d);i.visible&&dist_n.dismiss(i.id)}));return()=>{c.forEach((i=>i&&clearTimeout(i)))}}),[t,o]);let s=(0,react.useCallback)((()=>{o&&dist_u({type:6,time:Date.now()})}),[o]),a=(0,react.useCallback)(((r,c)=>{let{reverseOrder:i=!1,gutter:d=8,defaultPosition:p}=c||{},g=t.filter((m=>(m.position||p)===(r.position||p)&&m.height)),E=g.findIndex((m=>m.id===r.id)),x=g.filter(((m,R)=>R<E&&m.visible)).length;return g.filter((m=>m.visible)).slice(...i?[x+1]:[0,x]).reduce(((m,R)=>m+(R.height||0)+d),0)}),[t]);return{toasts:t,handlers:{updateHeight:Z,startPause:ee,endPause:s,calculateOffset:a}}},oe=h`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,re=h`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,se=h`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,_=j("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${oe} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${re} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${se} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,ne=h`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,V=j("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${ne} 1s linear infinite;
`,pe=h`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,de=h`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,w=j("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${pe} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${de} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,ue=j("div")`
  position: absolute;
`,le=j("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,Te=h`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,fe=j("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${Te} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,M=({toast:e})=>{let{icon:t,type:o,iconTheme:s}=e;return void 0!==t?"string"==typeof t?react.createElement(fe,null,t):t:"blank"===o?null:react.createElement(le,null,react.createElement(V,{...s}),"loading"!==o&&react.createElement(ue,null,"error"===o?react.createElement(_,{...s}):react.createElement(w,{...s})))},ye=e=>`\n0% {transform: translate3d(0,${-200*e}%,0) scale(.6); opacity:.5;}\n100% {transform: translate3d(0,0,0) scale(1); opacity:1;}\n`,ge=e=>`\n0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}\n100% {transform: translate3d(0,${-150*e}%,-1px) scale(.6); opacity:0;}\n`,be=j("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,Se=j("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`;react.memo((({toast:e,position:t,style:o,children:s})=>{let a=e.height?((e,t)=>{let s=e.includes("top")?1:-1,[a,r]=dist_b()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[ye(s),ge(s)];return{animation:t?`${h(a)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${h(r)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}})(e.position||t||"top-center",e.visible):{opacity:0},r=react.createElement(M,{toast:e}),c=react.createElement(Se,{...e.ariaProps},T(e.message,e));return react.createElement(be,{className:e.className,style:{...a,...o,...e.style}},"function"==typeof s?s({icon:r,message:c}):react.createElement(react.Fragment,null,r,c))}));!function m(e,t,r,l){o.p=t,d=e,goober_modern_f=r,g=l}(react.createElement);u`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`;var Stack=__webpack_require__("./src/Stack/index.tsx"),Text=__webpack_require__("./src/Text/index.tsx"),useTheme=__webpack_require__("./src/hooks/useTheme/index.ts");const placements={"top-right":"justify-end top-0","top-center":"justify-center top-0","top-left":"justify-start top-0","bottom-right":"justify-end bottom-0","bottom-center":"justify-center bottom-0","bottom-left":"justify-start bottom-0"},ToastMessage=({onMouseEnter,onMouseLeave,visible,onDismiss,dismissTimeout,placement,icon,children,offset,ariaLive})=>{const theme=(0,useTheme.A)(),ref=react.useRef(null),[isPaused,setPaused]=react.useState(!1),{swipeOffset,swipeOpacity}=function useSwipeToDismiss(ref,onDismiss,distanceBeforeDismiss,direction){const node=ref.current,[removing,setRemoving]=(0,react.useState)(!1),[pressedPosition,setPressedPosition]=(0,react.useState)(0),[positionLeft,setPositionLeft]=(0,react.useState)(0),[opacity,setOpacity]=(0,react.useState)(1),remove=(0,react.useCallback)((()=>{setTimeout((()=>{onDismiss()}),300)}),[onDismiss]),onMouseUp=(0,react.useCallback)((()=>{removing||(setPressedPosition(0),setPositionLeft(0),setOpacity(1))}),[removing]),onMouseMove=(0,react.useCallback)((ev=>{if(!removing&&pressedPosition&&node){let newPositionLeft=ev.screenX-pressedPosition;const directionValue="right"===direction?1:-1;"right"===direction&&newPositionLeft>=node.offsetWidth*distanceBeforeDismiss/100||"left"===direction&&newPositionLeft*directionValue>=node.offsetWidth*distanceBeforeDismiss/100?(newPositionLeft+=node.offsetWidth*directionValue,setRemoving(!0),remove()):newPositionLeft="right"===direction?newPositionLeft<0?0:newPositionLeft:newPositionLeft>0?0:newPositionLeft,setPositionLeft(newPositionLeft),setOpacity((100-newPositionLeft*directionValue*100/(2*node.offsetWidth))/100)}}),[removing,pressedPosition,direction,distanceBeforeDismiss,node,remove]),onMouseDown=(0,react.useCallback)((ev=>setPressedPosition(ev.screenX)),[setPressedPosition]);return(0,react.useEffect)((()=>(node?node.addEventListener("mousedown",onMouseDown):setOpacity(1.1),()=>{node&&node.removeEventListener("mousedown",onMouseDown)})),[node,onMouseDown,setOpacity]),(0,react.useEffect)((()=>(document.body?.addEventListener("mouseup",onMouseUp),document.body?.addEventListener("mousemove",onMouseMove),()=>{document.body?.removeEventListener("mouseup",onMouseUp),document.body?.removeEventListener("mousemove",onMouseMove)})),[onMouseUp,onMouseDown,onMouseMove]),{swipeOffset:positionLeft,swipeOpacity:opacity}}(ref,onDismiss,50,"top-left"===placement||"bottom-left"===placement?"left":"right");return react.createElement("div",{"aria-live":ariaLive,role:"status",className:(0,clsx.A)("z-onTop duration-normal absolute inset-x-0 flex cursor-grab transition-all ease-in-out will-change-transform","translate-x-[var(--toast-message-offset-x)] translate-y-[var(--toast-message-offset-y)] opacity-[var(--toast-message-opacity)]",placements[placement]),style:{"--toast-message-offset-x":`${swipeOffset}px`,"--toast-message-offset-y":`${offset}px`,"--toast-message-opacity":swipeOpacity}},react.createElement("div",{className:(0,clsx.A)("rounded-150 bg-ink-dark p-200 relative w-full overflow-hidden will-change-transform","lm:max-w-modal-extra-small lm:w-auto lm:p-300 [&_svg]:min-h-icon-medium",visible&&"pointer-events-auto animate-[toast-fade-in_theme(transitionDuration.normal)_forwards]",!visible&&"pointer-events-none animate-[toast-fade-out_theme(transitionDuration.normal)_forwards]"),style:{animationPlayState:isPaused?"paused":"running"},ref,onMouseEnter:()=>{onMouseEnter(),setPaused(!0)},onMouseLeave:()=>{onMouseLeave(),setPaused(!1)}},react.createElement("div",{className:"rounded-150 bg-white-normal z-default absolute left-0 top-0 size-full animate-[toast-light_var(--toast-message-duration)_linear] opacity-10 will-change-transform rtl:animate-[toast-light-rtl_var(--toast-message-duration)_linear]",style:{"--toast-message-duration":`${dismissTimeout}ms`,animationPlayState:isPaused?"paused":"running"}}),react.createElement(Stack.A,{flex:!0,shrink:!0,spacing:"200"},icon&&react.isValidElement(icon)&&react.cloneElement(icon,{size:"small",customColor:theme.orbit.paletteWhite}),react.createElement(Text.A,{type:"white"},children))))},Toast_ToastMessage=ToastMessage;ToastMessage.__docgenInfo={description:"",methods:[],displayName:"ToastMessage"};const ToastRoot=({dataTest,id:wrapperId,topOffset=8,leftOffset=8,rightOffset=8,bottomOffset=8,gutter=8,dismissTimeout=5e3,placement="top-center"})=>{const{toasts,handlers}=D({duration:dismissTimeout}),{startPause,endPause,calculateOffset}=handlers;return react.createElement("div",{"data-test":dataTest,id:wrapperId,className:(0,clsx.A)("z-onTop pointer-events-none fixed","bottom-[var(--toast-root-bottom)] end-[var(--toast-root-end)] start-[var(--toast-root-start)] top-[var(--toast-root-top)]"),style:{"--toast-root-top":`${topOffset}px`,"--toast-root-bottom":`${bottomOffset}px`,"--toast-root-start":`${leftOffset}px`,"--toast-root-end":`${rightOffset}px`}},toasts.map((toast=>{const{id,message,ariaProps,visible,icon}=toast,offset=calculateOffset(toast,{gutter});return react.createElement(Toast_ToastMessage,{key:id,id,dismissTimeout,visible,icon,offset,onMouseEnter:startPause,onMouseLeave:endPause,placement,onDismiss:dist_n.dismiss,ariaLive:ariaProps["aria-live"]},message)})))},Toast_ToastRoot=ToastRoot;ToastRoot.__docgenInfo={description:"",methods:[],displayName:"ToastRoot",props:{topOffset:{defaultValue:{value:"8",computed:!1},required:!1},leftOffset:{defaultValue:{value:"8",computed:!1},required:!1},rightOffset:{defaultValue:{value:"8",computed:!1},required:!1},bottomOffset:{defaultValue:{value:"8",computed:!1},required:!1},gutter:{defaultValue:{value:"8",computed:!1},required:!1},dismissTimeout:{defaultValue:{value:"5000",computed:!1},required:!1},placement:{defaultValue:{value:'"top-center"',computed:!1},required:!1}}};const createToast=(content,options)=>{dist_n(content,options)};var PLACEMENTS=function(PLACEMENTS){return PLACEMENTS.TOP_LEFT="top-left",PLACEMENTS.TOP_CENTER="top-center",PLACEMENTS.TOP_RIGHT="top-right",PLACEMENTS.BOTTOM_LEFT="bottom-left",PLACEMENTS.BOTTOM_CENTER="bottom-center",PLACEMENTS.BOTTOM_RIGHT="bottom-right",PLACEMENTS}(PLACEMENTS||{});const Toast_stories={title:"Toast",component:Toast_ToastRoot},Default={render:({message})=>react.createElement(react.Fragment,null,react.createElement(Button.A,{onClick:()=>createToast(message,{icon:react.createElement(Notification.A,null)})},"Add toast"),react.createElement(Toast_ToastRoot,null)),parameters:{info:"This is the default configuration of this component. Visit Orbit.Kiwi for more detailed guidelines.",controls:{exclude:["topOffset","leftOffset","rightOffset","bottomOffset","gutter","dismissTimeout","placement"]}},args:{message:"Thank you for feedback"}},WithPromise={render:()=>react.createElement(react.Fragment,null,react.createElement(Button.A,{onClick:()=>{const promise=new Promise(((res,rej)=>{setTimeout(Math.random()>.5?res:rej,3e3)}));var content,messages,options;content=promise,messages={loading:"...Loading",success:"Freddy Krueger has nightmares about Chuck Norris!",error:"Chuck did not come"},options={success:{icon:react.createElement(Notification.A,null)}},dist_n.promise(content,messages,options)}},"Add toast"),react.createElement(Toast_ToastRoot,null)),parameters:{controls:{disable:!0}}},Playground={render:({message,...args})=>react.createElement(react.Fragment,null,react.createElement(Button.A,{onClick:()=>createToast(message,{icon:react.createElement(Notification.A,null)})},"Add toast"),react.createElement(Toast_ToastRoot,args)),parameters:{info:"You can try all possible configurations of this component. Visit Orbit.Kiwi for more detailed guidelines."},args:{message:"Thank you for feedback",id:"ID",topOffset:8,leftOffset:8,rightOffset:8,bottomOffset:8,gutter:8,dismissTimeout:5e3,placement:PLACEMENTS.TOP_CENTER},argTypes:{placement:{options:Object.values(PLACEMENTS),control:{type:"select"}}}},RTL={render:({message})=>react.createElement(RenderInRtl.A,null,react.createElement(react.Fragment,null,react.createElement(Button.A,{onClick:()=>createToast(message,{icon:react.createElement(Notification.A,null)})},"Add toast"),react.createElement(Toast_ToastRoot,null))),parameters:{info:"This is a preview of this component in RTL setup.",controls:{exclude:["topOffset","leftOffset","rightOffset","bottomOffset","gutter","dismissTimeout","placement"]}},args:{message:"When the Tooth fairy comes to your house she takes your tooth and gives you money. When Chuck Norris comes to your house he breaks your tooth and takes your money."}},__namedExportsOrder=["Default","WithPromise","Playground","RTL"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  render: ({\n    message\n  }) => {\n    const toast = () => createToast(message, {\n      icon: <Notification />\n    });\n    return <>\n        <Button onClick={toast}>Add toast</Button>\n        <ToastRoot />\n      </>;\n  },\n  parameters: {\n    info: "This is the default configuration of this component. Visit Orbit.Kiwi for more detailed guidelines.",\n    controls: {\n      exclude: ["topOffset", "leftOffset", "rightOffset", "bottomOffset", "gutter", "dismissTimeout", "placement"]\n    }\n  },\n  args: {\n    message: "Thank you for feedback"\n  }\n}',...Default.parameters?.docs?.source}}},WithPromise.parameters={...WithPromise.parameters,docs:{...WithPromise.parameters?.docs,source:{originalSource:'{\n  render: () => {\n    const notify = () => {\n      const promise = new Promise((res, rej) => {\n        setTimeout(Math.random() > 0.5 ? res : rej, 3000);\n      });\n      createToastPromise(promise, {\n        loading: "...Loading",\n        success: "Freddy Krueger has nightmares about Chuck Norris!",\n        error: "Chuck did not come"\n      }, {\n        success: {\n          icon: <Notification />\n        }\n      });\n    };\n    return <>\n        <Button onClick={notify}>Add toast</Button>\n        <ToastRoot />\n      </>;\n  },\n  parameters: {\n    controls: {\n      disable: true\n    }\n  }\n}',...WithPromise.parameters?.docs?.source}}},Playground.parameters={...Playground.parameters,docs:{...Playground.parameters?.docs,source:{originalSource:'{\n  render: ({\n    message,\n    ...args\n  }) => {\n    const toast = () => createToast(message, {\n      icon: <Notification />\n    });\n    return <>\n        <Button onClick={toast}>Add toast</Button>\n        <ToastRoot {...args} />\n      </>;\n  },\n  parameters: {\n    info: "You can try all possible configurations of this component. Visit Orbit.Kiwi for more detailed guidelines."\n  },\n  args: {\n    message: "Thank you for feedback",\n    id: "ID",\n    topOffset: 8,\n    leftOffset: 8,\n    rightOffset: 8,\n    bottomOffset: 8,\n    gutter: 8,\n    dismissTimeout: 5000,\n    placement: PLACEMENTS.TOP_CENTER\n  },\n  argTypes: {\n    placement: {\n      options: Object.values(PLACEMENTS),\n      control: {\n        type: "select"\n      }\n    }\n  }\n}',...Playground.parameters?.docs?.source}}},RTL.parameters={...RTL.parameters,docs:{...RTL.parameters?.docs,source:{originalSource:'{\n  render: ({\n    message\n  }) => {\n    const toast = () => createToast(message, {\n      icon: <Notification />\n    });\n    return <RenderInRtl>\n        <>\n          <Button onClick={toast}>Add toast</Button>\n          <ToastRoot />\n        </>\n      </RenderInRtl>;\n  },\n  parameters: {\n    info: "This is a preview of this component in RTL setup.",\n    controls: {\n      exclude: ["topOffset", "leftOffset", "rightOffset", "bottomOffset", "gutter", "dismissTimeout", "placement"]\n    }\n  },\n  args: {\n    message: "When the Tooth fairy comes to your house she takes your tooth and gives you money. When Chuck Norris comes to your house he breaks your tooth and takes your money."\n  }\n}',...RTL.parameters?.docs?.source}}}},"./src/icons/Notification.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");const __WEBPACK_DEFAULT_EXPORT__=(0,__webpack_require__("./src/Icon/createIcon.tsx").A)(react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M18.243 15.333c0 .69.56 1.25 1.25 1.25a.833.833 0 0 1 0 1.667h-15a.833.833 0 1 1 0-1.667c.69 0 1.25-.56 1.25-1.25v-4.051A6.63 6.63 0 0 1 11.16 4.56V2.833a.833.833 0 1 1 1.666 0v1.728a6.63 6.63 0 0 1 5.417 6.72v4.052ZM10.13 19.5h3.726c.107 0 .196.08.207.185a2.083 2.083 0 1 1-4.14 0 .208.208 0 0 1 .207-.185Z"})),"0 0 24 24","Notification")},"./src/utils/rtl/RenderInRtl.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),_kiwicom_orbit_design_tokens__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../orbit-design-tokens/dist/index.js"),_OrbitProvider__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/OrbitProvider/index.tsx");const RenderInRtl=({children})=>(react__WEBPACK_IMPORTED_MODULE_0__.useEffect((()=>(document&&document.documentElement.setAttribute("dir","rtl"),()=>{document&&document.documentElement.removeAttribute("dir")})),[]),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_OrbitProvider__WEBPACK_IMPORTED_MODULE_2__.A,{theme:{orbit:_kiwicom_orbit_design_tokens__WEBPACK_IMPORTED_MODULE_1__.o3,rtl:!0},useId:react__WEBPACK_IMPORTED_MODULE_0__.useId},children)),__WEBPACK_DEFAULT_EXPORT__=RenderInRtl;RenderInRtl.__docgenInfo={description:"",methods:[],displayName:"RenderInRtl",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}}}}]);
//# sourceMappingURL=Toast-Toast-stories.665025f4.iframe.bundle.js.map