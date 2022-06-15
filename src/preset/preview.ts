/**
 * A decorator is a way to wrap a story in extra “rendering” functionality. Many addons define decorators
 * in order to augment stories:
 * - with extra rendering
 * - gather details about how a story is rendered
 *
 * When writing stories, decorators are typically used to wrap stories with extra markup or context mocking.
 *
 * https://storybook.js.org/docs/react/writing-stories/decorators#gatsby-focus-wrapper
 */
import {
  PARAM_KEY_PROJECT_ID,
  PARAM_KEY_DOMAINS,
  PARAM_KEY_SUPPORT_MODE,
} from "../constants";
import { withGlobals } from "../withGlobals";

export const decorators = [withGlobals];

export const globalTypes = {
  [PARAM_KEY_PROJECT_ID]: {
    // "stylersCloudProjectId"
    name: PARAM_KEY_PROJECT_ID,
    description: "stylers.cloud project id",
    defaultValue: "please-fill-this-out",
  },
  [PARAM_KEY_DOMAINS]: {
    name: PARAM_KEY_DOMAINS,
    description: "stylers.cloud open on these domains (hashes)",
    defaultValue: [-1204607085, 1505998205],
  },
  [PARAM_KEY_SUPPORT_MODE]: {
    name: PARAM_KEY_SUPPORT_MODE,
    description: "use standalone mode",
    defaultValue: false,
  },
};
