<template>
  <ul class="b-files-tree">
    <li class="b-files-tree-item">
      ...
    </li>

    <li v-for="item in files" :key="item.path" class="b-files-tree-item">
      <div>
        <i class='far fa-file-alt'></i>
        <span>{{ item.label }}</span>
      </div>
      <span>2022-12-12 12:12:12</span>
    </li>
  </ul>
</template>
<script setup lang="ts">
const files = [
  {
    "path": "d:\\Coding\\device-web\\.editorconfig",
    "label": ".editorconfig",
    "isLeaf": true
  },
  {
    "path": "d:\\Coding\\device-web\\.env.development",
    "label": ".env.development",
    "isLeaf": true
  },
  {
    "path": "d:\\Coding\\device-web\\.env.production",
    "label": ".env.production",
    "isLeaf": true
  },
  {
    "path": "d:\\Coding\\device-web\\.env.staging",
    "label": ".env.staging",
    "isLeaf": true
  },
  {
    "path": "d:\\Coding\\device-web\\.eslintignore",
    "label": ".eslintignore",
    "isLeaf": true
  },
  {
    "path": "d:\\Coding\\device-web\\.eslintrc.js",
    "label": ".eslintrc.js",
    "isLeaf": true
  },
  {
    "path": "d:\\Coding\\device-web\\.gitignore",
    "label": ".gitignore",
    "isLeaf": true
  },
  {
    "path": "d:\\Coding\\device-web\\.travis.yml",
    "label": ".travis.yml",
    "isLeaf": true
  },
  {
    "path": "d:\\Coding\\device-web\\.vscode",
    "label": ".vscode"
  },
  {
    "path": "d:\\Coding\\device-web\\babel.config.js",
    "label": "babel.config.js",
    "isLeaf": true
  },
  {
    "path": "d:\\Coding\\device-web\\build",
    "label": "build"
  },
  {
    "path": "d:\\Coding\\device-web\\jest.config.js",
    "label": "jest.config.js",
    "isLeaf": true
  },
  {
    "path": "d:\\Coding\\device-web\\jsconfig.json",
    "label": "jsconfig.json",
    "isLeaf": true
  },
  {
    "path": "d:\\Coding\\device-web\\LICENSE",
    "label": "LICENSE",
    "isLeaf": true
  },
  {
    "path": "d:\\Coding\\device-web\\package-lock.json",
    "label": "package-lock.json",
    "isLeaf": true
  },
  {
    "path": "d:\\Coding\\device-web\\package.json",
    "label": "package.json",
    "isLeaf": true
  },
  {
    "path": "d:\\Coding\\device-web\\permission.js",
    "label": "permission.js",
    "isLeaf": true
  },
  {
    "path": "d:\\Coding\\device-web\\postcss.config.js",
    "label": "postcss.config.js",
    "isLeaf": true
  },
  {
    "path": "d:\\Coding\\device-web\\public",
    "label": "public"
  },
  {
    "path": "d:\\Coding\\device-web\\README.md",
    "label": "README.md",
    "isLeaf": true
  },
  {
    "path": "d:\\Coding\\device-web\\settings.js",
    "label": "settings.js",
    "isLeaf": true
  },
  {
    "path": "d:\\Coding\\device-web\\src",
    "label": "src"
  },
  {
    "path": "d:\\Coding\\device-web\\tests",
    "label": "tests"
  },
  {
    "path": "d:\\Coding\\device-web\\vue.config.js",
    "label": "vue.config.js",
    "isLeaf": true
  }
]
</script>

<style lang="scss" scoped>
.b-files-tree {
  width: 100%;
  // height: 300px;
  max-height: 300px;
  overflow-y: auto;
  border: $border;
  background-color: #f1f3f4;
  margin-bottom: 10px;

  &-item {
    font-size: 12px;
    height: 38px;
    padding: 8px 16px;
    border-bottom: 1px solid #ccc;
    @extend %v-center;
    cursor: pointer;
    justify-content: space-between;

    .far {
      margin-right: 6px;
      font-size: 14px;
    }
  }
}
</style>