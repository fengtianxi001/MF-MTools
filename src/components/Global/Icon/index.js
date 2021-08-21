const contexts = require.context("@/assets/iconfont", true, /iconfont.js$/);
contexts.keys().forEach(key => contexts(key));

import icon from "./src"
export default icon