if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return r[e]||(s=new Promise(async s=>{if("document"in self){const r=document.createElement("script");r.src=e,document.head.appendChild(r),r.onload=s}else importScripts(e),s()})),s.then(()=>{if(!r[e])throw new Error(`Module ${e} didn’t register its module`);return r[e]})},s=(s,r)=>{Promise.all(s.map(e)).then(e=>r(1===e.length?e[0]:e))},r={require:Promise.resolve(s)};self.define=(s,a,i)=>{r[s]||(r[s]=Promise.resolve().then(()=>{let r={};const o={uri:location.origin+s.slice(1)};return Promise.all(a.map(s=>{switch(s){case"exports":return r;case"module":return o;default:return e(s)}})).then(e=>{const s=i(...e);return r.default||(r.default=s),r})}))}}define("./sw.js",["./workbox-7f9f89a8"],(function(e){"use strict";self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"en/index.html",revision:"d8e6e1f79f44a4136b0e0c0a1505a2b7"},{url:"en/manifest.json",revision:"9c2fba642fff247e04697110fcc58ff9"},{url:"index.html",revision:"d3263fb8881abc70f0651e52ac470f72"},{url:"ko.bundle.js",revision:"159230d1c231bb90822a2f2ef4b3b0b8"},{url:"ko/index.html",revision:"43f007e5f9c4253a5b044901aaced8fb"},{url:"ko/manifest.json",revision:"20e0d1683d218b21f80574bc139aeb81"},{url:"main.bundle.js",revision:"b04d86d92a6cf8fd2fb9954357762fb6"},{url:"resources/assets/images/IDI_PIKAICON-0.png",revision:"626715f8ff44df7393d01481a7aaf086"},{url:"resources/assets/images/IDI_PIKAICON-1_gap_filled.png",revision:"506daec1b30fe530fe92c45ac13dc7a6"},{url:"resources/assets/images/IDI_PIKAICON-1_gap_filled_192.png",revision:"29532d5d3e1660a885ad70c6e8b13d96"},{url:"resources/assets/images/IDI_PIKAICON-1_gap_filled_512.png",revision:"3ed2134d0cdf0e0467b4b7d3b150d457"},{url:"resources/assets/images/controls.png",revision:"6b65737651b54b63bd9ed47f77860b70"},{url:"resources/assets/images/controls_ko.png",revision:"4de772826ad5bda67a272d6fd1287469"},{url:"resources/assets/images/sprite_sheet.json",revision:"fbf5be6abf4715cbe6357d01c5d178ff"},{url:"resources/assets/images/sprite_sheet.png",revision:"e2f9c1aec43ccf5f4dcc03f24b3e13da"},{url:"resources/assets/sounds/WAVE140_1.wav",revision:"a31e486f9bf2dfa2548a4208d78edc1f"},{url:"resources/assets/sounds/WAVE141_1.wav",revision:"e6b661515829712630bbead41d86ee8d"},{url:"resources/assets/sounds/WAVE142_1.wav",revision:"918c03522e79304ad8bb8891c35f58a3"},{url:"resources/assets/sounds/WAVE143_1.wav",revision:"eb2ac1cb1900cd970cdd86be87ebea11"},{url:"resources/assets/sounds/WAVE144_1.wav",revision:"6b16d233bc68aea2a7d071eee85da431"},{url:"resources/assets/sounds/WAVE145_1.wav",revision:"85da47de3575fbedaef71188fe4fc05f"},{url:"resources/assets/sounds/WAVE146_1.wav",revision:"9976daa90c7fd3f7008cf30e7cda8825"},{url:"resources/assets/sounds/bgm.mp3",revision:"029ae684624b50612c09a255264b2d93"},{url:"resources/style.css",revision:"2c8681a37ec24183b59398211bc6c025"},{url:"runtime.bundle.js",revision:"e4561e38162a6ab515f761407828af93"},{url:"vendors~main.bundle.js",revision:"5e363d81c7e24f050ea3870dacd1c79a"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=sw.js.map
