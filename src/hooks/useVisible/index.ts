import { ref } from "vue";
import { isFunction } from "lodash-es";

export interface useVisibleConfigType {
  obDeforeShow?: () => Promise<boolean | void>;
}
