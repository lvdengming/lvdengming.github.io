/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "6d211d1c071b1b8e60e3747cb1c4ae23"
  },
  {
    "url": "assets/css/0.styles.aae97977.css",
    "revision": "cbd768b49a8a1bcbeb296f8cee0c487d"
  },
  {
    "url": "assets/fonts/iconfont.938fa69e.woff",
    "revision": "938fa69ea89bccb0f20d643cc5f07cbe"
  },
  {
    "url": "assets/fonts/iconfont.ecabaf00.ttf",
    "revision": "ecabaf00c2c5be9907d524bb21a0f0dc"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/img/logo.png",
    "revision": "7fb623a14a89094489b0a90cecda5178"
  },
  {
    "url": "assets/js/1.bac8b977.js",
    "revision": "fa1fffa928846eb5c8120710968cf850"
  },
  {
    "url": "assets/js/10.1696a096.js",
    "revision": "d9fd59f8ace94d116daee84ab0fe2977"
  },
  {
    "url": "assets/js/11.5b216128.js",
    "revision": "bbf6d3baabee5900be14beac25cd8db3"
  },
  {
    "url": "assets/js/12.d2340c6c.js",
    "revision": "470874fee6153b04a938f59450de5af7"
  },
  {
    "url": "assets/js/13.e0d64045.js",
    "revision": "01131a7a8d04ac71f3a13a857e11e588"
  },
  {
    "url": "assets/js/14.1b2444ea.js",
    "revision": "0a4361b93b331aeef7c894c96d52bf4e"
  },
  {
    "url": "assets/js/15.66f7dbd1.js",
    "revision": "218a909409d8a7b28d984ad96d0f2a64"
  },
  {
    "url": "assets/js/16.2dc9a96d.js",
    "revision": "6a93bf7151a32f026d2c62357720722c"
  },
  {
    "url": "assets/js/17.b6b4f3cf.js",
    "revision": "67b7d6dec78db983fa50eaea3fd2f20c"
  },
  {
    "url": "assets/js/18.d81c3c6c.js",
    "revision": "9cd269693a07efdb4249f097464d0d71"
  },
  {
    "url": "assets/js/19.e0174c58.js",
    "revision": "56546691c9cb7dee029026d84d153fa5"
  },
  {
    "url": "assets/js/20.2d6df439.js",
    "revision": "27fb3bc9b767cc9d59fec3ddba208740"
  },
  {
    "url": "assets/js/21.445b3503.js",
    "revision": "1f00493380b7150acb1340a26fafb7ef"
  },
  {
    "url": "assets/js/22.79e77f03.js",
    "revision": "0ab7d4ea1fa09502f7e2f03b80d600cb"
  },
  {
    "url": "assets/js/23.5d6ed179.js",
    "revision": "0862838d5950450051508ef04596616e"
  },
  {
    "url": "assets/js/24.c0419a80.js",
    "revision": "d523521ccff7016880ea0aa098e6becf"
  },
  {
    "url": "assets/js/25.64f912ed.js",
    "revision": "80d6fee8c000acd22c929250888f0dff"
  },
  {
    "url": "assets/js/26.82128bcf.js",
    "revision": "f8ce12ee1d1c645e413a2ec305b52c3e"
  },
  {
    "url": "assets/js/27.5a83fcb9.js",
    "revision": "4ed1a003c007057cfcb14ac7286fce76"
  },
  {
    "url": "assets/js/28.ab149fd0.js",
    "revision": "cbb322e14ccd34dfe8d51bca7dbcf6cb"
  },
  {
    "url": "assets/js/29.49dcdd25.js",
    "revision": "fc2de74e59f3f1fce9cacf4068022321"
  },
  {
    "url": "assets/js/3.6cdc8f83.js",
    "revision": "bebd9d4fa3867c2b073e614a8e5162f0"
  },
  {
    "url": "assets/js/30.ad05a542.js",
    "revision": "5cd4611f1426c33c4aa2d97fedc40c73"
  },
  {
    "url": "assets/js/31.628c5dbe.js",
    "revision": "da7c5d6d01ca696f0d171afb6fb3cc4b"
  },
  {
    "url": "assets/js/32.21d1f27e.js",
    "revision": "ba203721390708a70110b4d9e5a8c0a6"
  },
  {
    "url": "assets/js/33.849a075e.js",
    "revision": "91917edff8d3347b7ae7851a291e230f"
  },
  {
    "url": "assets/js/4.f0858a0f.js",
    "revision": "f08c0aef4f4e4a859c4797e87b075b12"
  },
  {
    "url": "assets/js/5.1624bdad.js",
    "revision": "990d3ac84a09a46f51ba1f21394513d2"
  },
  {
    "url": "assets/js/6.1cd86853.js",
    "revision": "b88dc7fe03020a15cf996157e4cb0f8f"
  },
  {
    "url": "assets/js/7.95782b34.js",
    "revision": "1cd6915dd542b1d98ce63c5846a1d233"
  },
  {
    "url": "assets/js/8.c2da6364.js",
    "revision": "939c76ee65e5d427c41fab880b0499c8"
  },
  {
    "url": "assets/js/9.3ef0319e.js",
    "revision": "2cc658f4d223202e7ca94f56292d3464"
  },
  {
    "url": "assets/js/app.5e63d28f.js",
    "revision": "64f4fd86879acc6267ee7aebcc95350d"
  },
  {
    "url": "categories/css/index.html",
    "revision": "f37a1d4150b3acee896795b1cd980001"
  },
  {
    "url": "categories/flutter/index.html",
    "revision": "f1cd2d326c73c117ca909e7cf9e97de7"
  },
  {
    "url": "categories/git/index.html",
    "revision": "5cf33b85eacc782a1ec2765623073117"
  },
  {
    "url": "categories/index.html",
    "revision": "9d428fff90db3c9bed6416e15ae1b2ac"
  },
  {
    "url": "categories/js/index.html",
    "revision": "0429907420222e8404ddedf95697e245"
  },
  {
    "url": "categories/nest/index.html",
    "revision": "8a4a1bb076f882cb2a7a6d744f0a93f5"
  },
  {
    "url": "categories/node/index.html",
    "revision": "8e4ba5e32514501b15a440755d4f072a"
  },
  {
    "url": "categories/其它/index.html",
    "revision": "34890925a022412af0207fd1cf2c742b"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "31e91c869d24ab2f2d1cab9d27073903"
  },
  {
    "url": "categories/后端/index.html",
    "revision": "f0c99f4eb95436c0f18a5c42fcff8a68"
  },
  {
    "url": "categories/小程序/index.html",
    "revision": "d4ada345fd60d6ebe670fe77c7df7430"
  },
  {
    "url": "categories/操作系统/index.html",
    "revision": "b95e376020a88738fe8fd3c3ff0395c1"
  },
  {
    "url": "categories/服务搭建/index.html",
    "revision": "d2526ebf085decfeaa1a7564d6cae050"
  },
  {
    "url": "categories/设计/index.html",
    "revision": "5055affef0bca5422a0b790a1845d29f"
  },
  {
    "url": "css/note.html",
    "revision": "d8feda731c0a18f5bee6a4ddf065f120"
  },
  {
    "url": "design/collection.html",
    "revision": "c744d398f1c860e853b312c6005cab9b"
  },
  {
    "url": "favicon.png",
    "revision": "fcbb01120e3e89247b1aff649a0809e7"
  },
  {
    "url": "flutter/develop.html",
    "revision": "5c0d4f404cd547ee0850221df5d5c02e"
  },
  {
    "url": "flutter/start.html",
    "revision": "430273496ff32bca055e7e40e27d02e5"
  },
  {
    "url": "git/connect.html",
    "revision": "4d407982972f488e67eaa8fb3856ee1e"
  },
  {
    "url": "icons/portrait128.png",
    "revision": "390142acab2d7c64390b0b8cf0bb2967"
  },
  {
    "url": "icons/portrait144.png",
    "revision": "27b69148afbaf0b9415cc7d670e6725b"
  },
  {
    "url": "icons/portrait168.png",
    "revision": "87faa0039c80836e3efb813af96c8dcc"
  },
  {
    "url": "icons/portrait192.png",
    "revision": "fcbb01120e3e89247b1aff649a0809e7"
  },
  {
    "url": "icons/portrait48.png",
    "revision": "200c1b28a7e16412a8b998baa577d873"
  },
  {
    "url": "icons/portrait72.png",
    "revision": "4a5241c38d20af443c5dc1c1c5e1b39b"
  },
  {
    "url": "icons/portrait96.png",
    "revision": "4cc40476fd04ffeaf0cb338fd45daa0b"
  },
  {
    "url": "index.html",
    "revision": "e8ea461f60951999bb05433e5b7af8eb"
  },
  {
    "url": "js/log.html",
    "revision": "16532f859030693a14efe02bd6f8ef60"
  },
  {
    "url": "miniprogram/learning.html",
    "revision": "f82e3e8ad2ece073b1fae7ce9d30d146"
  },
  {
    "url": "nest/start.html",
    "revision": "a049c4db453d6a2db8b703b31f1dbafc"
  },
  {
    "url": "node/collection.html",
    "revision": "166c471c16b1dc95777693c32c8cfae3"
  },
  {
    "url": "node/mjs-cjs.html",
    "revision": "0c326c6b6f740714fec0688a9a2aab8b"
  },
  {
    "url": "node/npm.html",
    "revision": "9c2550aa1e73876902fdd20e9f1936e8"
  },
  {
    "url": "operation-system/command.html",
    "revision": "dee9747f04028d3baadc8bb3dc81e94c"
  },
  {
    "url": "operation-system/connect.html",
    "revision": "9ebfc5e8045c5025b00bf42588445d89"
  },
  {
    "url": "operation-system/docker.html",
    "revision": "a5637526ea120938b5e77e987aa9f8b0"
  },
  {
    "url": "operation-system/hosts.html",
    "revision": "ef30f333dd237f56ea0975053fe8cfbd"
  },
  {
    "url": "operation-system/initialize.html",
    "revision": "955efd5df5c4003c98c845b85bd672ed"
  },
  {
    "url": "operation-system/serve.html",
    "revision": "572318446999b885f551ea1e88eaad6a"
  },
  {
    "url": "operation-system/ssl.html",
    "revision": "9ed05d48c327b975a28c2a5553fdf1d1"
  },
  {
    "url": "operation-system/transmit.html",
    "revision": "b9008a2713ed1be5becac09590c264cf"
  },
  {
    "url": "operation-system/use-shell.html",
    "revision": "37b87eeaf9b3ea7a447ed8a8e9d427b4"
  },
  {
    "url": "other/collection.html",
    "revision": "4e36d073f9427cbfe1c68bfb9e472172"
  },
  {
    "url": "other/vscode-skill.html",
    "revision": "83de9b28e8233d47a9b16574fe095b6d"
  },
  {
    "url": "tag/index.html",
    "revision": "a90f0903ffd724f738ca79483b7558a9"
  },
  {
    "url": "tag/使用技巧/index.html",
    "revision": "8f5e410cab56c527a1dbebcad2789ceb"
  },
  {
    "url": "tag/命令行/index.html",
    "revision": "a68b1b8fe95f551ebe184bd7d408c1ef"
  },
  {
    "url": "tag/学习笔记/index.html",
    "revision": "be43de23ad6f6e6c7a0da08d782ff3eb"
  },
  {
    "url": "tag/收藏/index.html",
    "revision": "91f45b434de6a667a64001cd0e3b931b"
  },
  {
    "url": "tag/环境搭建/index.html",
    "revision": "c658eb5125f64ccf513fa6f3c91e6466"
  },
  {
    "url": "tag/配置/index.html",
    "revision": "c3dd66922603f0fbf6d3a6967a318454"
  },
  {
    "url": "tag/项目配置/index.html",
    "revision": "4cd7476a64776fe3b3b5533efa29fce2"
  },
  {
    "url": "timeline/index.html",
    "revision": "4d96eaa8e8a1478f3fe59d2aa0152e91"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
