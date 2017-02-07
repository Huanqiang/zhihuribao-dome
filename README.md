# 使用 Vue.js 构建一个 知乎日报

## API

1. 查看最新消息：http://news-at.zhihu.com/api/4/news/latest
2. 查看过往消息：http://news-at.zhihu.com/api/4/news/before/{20170117}（这是查看了2017年1月16号的信息）
3. 消息内容：http://news-at.zhihu.com/api/4/news/{news-id}
4. 专题列表：http://news-at.zhihu.com/api/4/themes
5. 专题内容：http://news-at.zhihu.com/api/4/theme/{theme-id}

## 用到的组件

1. [Vue.js](https://github.com/vuejs/vue)，[Vue-Router](https://github.com/vuejs/vue-router)，[Vuex](https://github.com/vuejs/vuex)
2. 网络请求：[axios](https://github.com/mzabriskie/axios)
3. UI 组件：[element-ui](http://element.eleme.io/#/zh-CN/component/installation)

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
