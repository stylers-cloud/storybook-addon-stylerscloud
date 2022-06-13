import {
  DecoratorFunction,
  useParameter,
  useEffect,
  useGlobals,
} from "@storybook/addons";
import { PARAM_KEY } from "./constants";

export const withGlobals: DecoratorFunction = (StoryFn, context) => {
  const projectId = useParameter(PARAM_KEY);
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
