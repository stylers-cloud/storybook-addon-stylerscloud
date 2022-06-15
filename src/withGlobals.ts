import {
  DecoratorFunction,
  useParameter,
  useEffect,
  useGlobals,
} from "@storybook/addons";
import { PARAM_KEY_DOMAINS, PARAM_KEY_PROJECT_ID, PARAM_KEY_SUPPORT_MODE } from "./constants";

export const withGlobals: DecoratorFunction = (StoryFn, context) => {
  const projectId = useParameter(PARAM_KEY_PROJECT_ID);
  const globals = useGlobals();
  // Is the addon being used in the docs panel
  const isInDocs = context.viewMode === "docs";

  useEffect(() => {
    displayToolState({
      projectId,
      globals,
      isInDocs,
    });
  }, [projectId]);

  return StoryFn();
};

function displayToolState(state: any) {
  if (!state[PARAM_KEY_SUPPORT_MODE]) {
    const windowAny = window as any;
    if (windowAny.stylersCloud) return;
    var sc = (windowAny.stylersCloud = {
      config: {
        projectId: state[PARAM_KEY_PROJECT_ID],
        nonProdDomains: state[PARAM_KEY_DOMAINS] || [-1204607085, 1505998205], // see the link in comment above
        realtimePreview: true,
        nonFlickering: true,
      },
    });

    // @ts-ignore
    // prettier-ignore
    {function a(a){j.head.appendChild(a)}function b(a){var b=0,c=a.length,d;if(0==c)return b;for(d=0;d<c;d++){b=(b<<5)-b+a.charCodeAt(d);b=b&b}return b}function c(){return"loading"===j.readyState}var d="stylers.cloud",e=d.replace(".","-"),f="https://",g="script",h=sc.config,j=document,k=window.localStorage;if(k){var l=JSON.parse(k.getItem(e))||{};if(l.overrideConfig){for(var m in l){if(l.hasOwnProperty(m))h[m]=l[m]}}}var n=!h.env||3449687===b(h.env)?"":h.env+".";function o(){return f+n+"api."+d+"/v1/projects/"+h.projectId}function p(b,d){if(!d&&c()){j.write(b)}else{for(var e=b.split(/[><]/)[1].split(" "),f=j.createElement(e[0]),g=1,h;g<e.length;g++){h=e[g].split("=");f.setAttribute(h[0],h[1]?h[1].replace(/(^"|"$)/g,""):"")}a(f)}}var q=(!(99349===void 0)||h.nonFlickering)&&!h.supportModeOnly,r=h.realtimePreview&&!h.supportModeOnly;function s(){r&&p("<link rel=\"stylesheet\" type=\"text/css\" href=\""+o()+"/css?"+Date.now()+"\" "+e+"=\"global-css\">");q&&p("<"+g+" "+e+"=\""+"DOMagic"+"\" src=\""+o()+"/domodifier\"><"+"/"+g+">",!h.nonFlickering);p("<"+g+" src=\""+f+n+"sdk."+d+"/sdk.js\"><"+"/"+g+">",true)}var t=location.hostname.split(".").slice(-3).join(".");if(-1!==h.nonProdDomains.indexOf(b(t))){c()&&console.groupCollapsed(d+" snippet");c()&&console.log("Don't worry, the following warnings don't matter. Everything will work properly.");s();c()&&console.groupEnd()}else{h.realtimePreview=false;h.openAfterInit=true;sc.init=s}}
  } else {
    if (!(window as any).stylersCloud) {
      (window as any).stylersCloud = {
        config: {
          projectId: state.projectId,
          supportModeOnly: true,
          openAfterInit: document.readyState === "complete",
        },
      };

      var script = document.createElement("script");
      script.src = "https://stage.sdk.stylers.cloud/sdk.js";
      document.head.appendChild(script);
    }
  }
}
