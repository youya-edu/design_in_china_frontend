# frontend

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Run your unit tests
```
yarn test:unit
```

### Run your end-to-end tests
```
yarn test:e2e
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## 组件设计

### Atomic Design

- <https://bradfrost.com/blog/post/atomic-web-design/>
- <https://medium.com/@vuefront/finding-the-perfect-component-file-structure-for-out-vuejs-app-b808a69dacac>
- <https://github.com/vuefront/vuefront>

#### 名词解释

1. Atoms
    - 最小不可分割
    - 通用的，无逻辑（纯展示）
    - 支持多种样式
    - folder level: 1
    - **一般是一些固有组件，例如：button, badge, icon, etc.**
    - 一般只有props和data
2. Molecules
    - 由atom或者molecule组成
    - 通用的，无逻辑（纯展示）
    - 支持多种样式
    - 可以包含slot
    - folder level: 1
    - **一般是业务逻辑中简单组件，或者是一些复杂的固有组件，例如：list, card, product-image, etc.**
    - 一般只有props和data
3. Organisms
    - 由atom或者molecule或者organism组成
    - 包含具体逻辑。业务逻辑
    - 可以访问remote数据
    - 可以包含slot
    - folder level: 1
    - **实际业务逻辑中会用到的组件，或者是需要数据以及交互的组件，例如：login, password-form, product-buy, etc.**
    - 含有vue所有的属性，props, data, methods, computed, mount, etc.
4. Templates
    - 呈现layout。
    - 由atom或者molecule或者organism组成
    - 不包含数据
    - 包含业务逻辑
    - folder level: 2，和page的构造基本一致，例如：account/account, account/address, account/login, etc.
5. Pages
    - 最终呈现的page
    - 包含数据，和后端的交互
    - 基本不包含业务逻辑
    - folder level: 2
    - 最终和vue-router的交互

#### 命名规则

- 不使用单名称组件。
- 前缀
    - atom: a-xxx
    - molecule: m-xxx
    - organism: o-xxx
    - template: t-xxx
    - page: p-xxx
- atom
    - a-button
    - a-checkbox
- molecule
    - m-checkbox-group
    - m-order-price: 如果涉及具体业务，优先前缀为业务名
- organism
    - o-header
    - o-order-compositions，(可以执行具体的业务逻辑，例如添加，修改和删除composition等)
- template(双层文件夹，将atom/molecule/organism组成成一个可以渲染的静态页面)
    - order/t-order
    - order/t-cart
- page(和template构造一致，在template的基础上加入交互和数据流)
    - order/t-order
    - order/t-cart

#### 文件夹结构

推荐对每一个组件都使用一个文件夹，**包括atom组件**。

`*`标为一个组件。

- molecures|organisms|atoms/
    - *alert/
        - alert.scss
        - alert.stories.js -> 使用storybook进行测试
        - alert.vue
        - index.js -> 出口，export { default as aAlert } from './alert.vue'
        - alert.loader.vue -> 异步加载的时候显示的灰条型UI，加载完成后显示alert.vue
- templates|pages/
    - account/
        - *login/
            - login.vue
            - index.js
        - *register/
    - order/
        - *cart/
        - *history/
