# rnApp
基于React-native+mobx的移动APP
# 启动APP
```
***(基于macOS+node+Xcode环境下，如未安装node以及Xcode，请自行查找资料安装，具体参考react-native环境搭建)
  1、npm/yarn react-native-cli
  2、npm/yarn install
  3、react-native run-ios/run-android
```
# 安装mobx
```
  1.npm i mobx mobx-react --save //引入mobx
  2.npm i babel-plugin-transform-decorators-legacy babel-preset-react-native-stage-0 --save-dev //能够使用@标签
  3.在.babelrc文件中修改为{
    "presets": ["react-native"],
    "plugins": ["transform-decorators-legacy"]
  }
```
