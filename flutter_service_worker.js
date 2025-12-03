'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "d4f1e43911bc58bec5f14b36697d7329",
".git/config": "186d116afb46f3d05226d1b3b60d55c9",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "1451605f93fadfc0809fbb8ca324d50b",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "bdeded98123b5e1c84611518ad6d75b5",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "1de1658acb39975ed70523b8bfbe24dd",
".git/logs/refs/heads/main": "1de1658acb39975ed70523b8bfbe24dd",
".git/logs/refs/remotes/origin/HEAD": "60317337dc31c0dea65cb6495c5c5851",
".git/logs/refs/remotes/origin/main": "0db85fc28344af66d0236821bfc49aa0",
".git/objects/02/d379985de129bf1118143f9405993014d84a88": "49a3fd720a605cdff3cce75df2a0f8a8",
".git/objects/05/a9058f513cce5faf1704e06e3c150688b0a01f": "e8d02f60cf87abd4c1de4b153dd696dc",
".git/objects/09/042ad848e9d3ad0401c16aed5d44641f8768e4": "7b78801c907961c0d2b66be14d56c24d",
".git/objects/10/d2472a96b00b70fe8bceb742ce5a0f5a7ccd7c": "6c629a09f7e0787148a871c1d1585bdb",
".git/objects/11/839a5d85bacb71cca19fcfb77dab50bb36755c": "9a50578cb0d498831cae78f9f6685cf0",
".git/objects/13/f89316c49683b719b30b541e6223d31230e2ff": "13282b97602da30c8f68971747c76db0",
".git/objects/1a/f60fdfabf40c630699ecfa4a5c52f475cfc4b1": "2919669a8e4380953902af538b7288de",
".git/objects/1c/10972eceaea5bc6ddf055d7e4caa75e01e6f8e": "0185c67dad999f49755704755e660c16",
".git/objects/1e/d0f84510701045aa6fcfc14028be3f9a9232ad": "0fb060fecdacb2714f571b04ca339ab9",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/24/df6cd631235867e02b74563cadb80e623f11d6": "676c292db93cf0eb2297a6ad5725e675",
".git/objects/26/d5edad98380d54b5e777439f914fe1a4362c14": "b65397183cd8d327b36a450e640dc05c",
".git/objects/27/a297abdda86a3cbc2d04f0036af1e62ae008c7": "51d74211c02d96c368704b99da4022d5",
".git/objects/2b/36a3347a8ef8abb948b15d5a9438707ae6e381": "66327eab38fec67a110f7ae49a727ec9",
".git/objects/30/61b84756d5dbd79fd0bc784d82603c0ca6e846": "70762353fe333be24186405b30cb8ab9",
".git/objects/35/319d97177756b3b0747226141bfbc834f77d88": "5d568f8c3b2122b7e9c61c17f6b1c16f",
".git/objects/35/7631c317782ae545e6c116787e38f3b84a197e": "1d835e93147c0c8b7e97ac3be0d593ca",
".git/objects/39/9ab940ee04953c4388155bc52fdd445830fe11": "7e907a998c79d1a856ccb78469530e7c",
".git/objects/3d/6591dfcdf954ff1d4b7cf8c76fff69c7704385": "d24167407aac2739bd6f3aaa29792568",
".git/objects/40/01710e5b37b41e5b8bdda1546f5f5f9cb96eb4": "680dc3181c8a8a425a6091182a157023",
".git/objects/42/c1d3f345e07045f6d0979d26027cab0b79b641": "c50b64bf06973ecf07eea9e53fb7f4e5",
".git/objects/4b/144cc33db39338ea4a76ca1765fd5d0a766094": "5eabca31aecfd59ca047b13072ad3db8",
".git/objects/55/4028867b9ebe2db56e2dc0ed26689631b3f9ea": "be012a720fd679313fdd1cc99f42477f",
".git/objects/55/911c75f9724bb3f472eba76c9b8288d3f8eb59": "cc61686541b00c048326c40926e98e20",
".git/objects/58/62fdae72937b279909b09baf82041c7597fce4": "920930a7f73a67cd076309a39870a0fb",
".git/objects/58/c450131253156e5e1be6ce5318358f88710db1": "ec667c6e75cd4690736c0014576aff31",
".git/objects/5d/e3857c1369c3c6466fe06bda810a03bd100279": "0ba786a32069b5bc849fb1f122554fff",
".git/objects/63/6931bcaa0ab4c3ff63c22d54be8c048340177b": "8cc9c6021cbd64a862e0e47758619fb7",
".git/objects/65/c0a790fdead1987158c5b07abc9c493cf132d1": "eec0c716236a2b640e35da1ed84d0f1b",
".git/objects/66/535beef590742e504b89dce8e643a5d11887b7": "73e3c7a5b62d9f63d1f2ef72b6538ff3",
".git/objects/69/2b341b35511d874fc52c2fbf999d0f09454e16": "8eb4985042e9951d0a75c5ea9079c9bf",
".git/objects/6a/c87f84568528e2739ee7417f567b1876e93f52": "905bd0bb37b8340b245e550f3ebd33cb",
".git/objects/6b/fc9ba797111e4d25814bf2a144c79ef33e04ab": "56d063757fea587ac0be840f2b15d9f8",
".git/objects/6d/5f0fdc7ccbdf7d01fc607eb818f81a0165627e": "2b2403c52cb620129b4bbc62f12abd57",
".git/objects/71/c92a0d39f1318518d0490ede6077f602b7ef18": "b73ad24b81276ee53476dac7ebc39f34",
".git/objects/73/7f149c855c9ccd61a5e24ce64783eaf921c709": "1d813736c393435d016c1bfc46a6a3a6",
".git/objects/73/8570a75d2316681871684da9c5fcbeb8cad8b5": "6de4170bbd8499481472547a690779ea",
".git/objects/76/037d107250b5e09065f44f68ac251f32673083": "96d575cfb90a05be6c7bb062c81de79e",
".git/objects/76/27006cb2977fb0ece87664f8319c2d537a26f0": "795259e3ac01de8b2fa90640bb7ad08b",
".git/objects/77/585c062236813f242d6c7bec248ba525a4a710": "6ba19bac4bc252b3716995590c7e2023",
".git/objects/77/ceab1cd085754265debbbddfe4fcd73d222ca6": "4e721d7b74c38e75a2f722c477f37e29",
".git/objects/7c/0afe931b5fc548c17fdfe1d0860c1e62ad21dd": "5c877e30619c88108802d4f5665deda4",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/59773bee8314a8ffb4431593d0fb49f52e34c6": "2eb993d30677573ffd0e58484cc6a514",
".git/objects/92/96339c5473ae228c694b0a00d64658fdc12cbb": "c2bc1c25998f683862f4a18473868560",
".git/objects/93/b1d453d3e1d668426c06e01bb21a19bd55f302": "e03b2dca899f0f948167dc4c2a78ec4b",
".git/objects/94/6459bb7f6acd85d0acbd70680dfe69726cfe4f": "9565992f5206653e6e3eef4ff14ea353",
".git/objects/95/be390104639888c84896e767355e3204dcf882": "1b6c4389f678c1d1809ba96efbcb3ee8",
".git/objects/97/8a4d89de1d1e20408919ec3f54f9bba275d66f": "dbaa9c6711faa6123b43ef2573bc1457",
".git/objects/97/b660a30ed03b9a8cef8a550279a80f096aef2b": "cadd828cfc46db253dfa5335f25dec89",
".git/objects/99/bf1a82a84ede4d8d83ebcfa0b8505c114a5602": "25145a0e2f4ed9b06eaa20d8a91c74bd",
".git/objects/99/eedecaf4995b69bf8863f57ab1072bcba30445": "df836d1f44d91d83cfbb5164001384d2",
".git/objects/9e/62727b484e4cd41f0f81dbbf41d43fce5a866a": "d79f9783cb852fd322d8337b626b1bed",
".git/objects/a1/816381b4b7a7c38abac0339fea9ee0f0d502de": "d35ece104928e292a7402e2827d61e22",
".git/objects/a1/ddb34d4c0bb52b428f588e2212d1d4bd68d462": "e30ff78dc8aeaee0d0e1065338eb2039",
".git/objects/a5/71527caa345c7994603df6d37e770edde45af3": "e046b64f11ecfd520abc9188a0c81811",
".git/objects/a7/1ff8a27fcfd8945db8bf43a738ac5e3202b3b6": "1422c6e2b78a1cd46f9da9c16c209bb7",
".git/objects/aa/83144b15e85540b15b3f33409b59fd09444f68": "c3b5f7229f6cb8a9ff90729e6908399d",
".git/objects/ae/7378c6c75f37abb08bf6bc132c1ea936c28049": "92d2c57a98dbac592d0aefa7c501b276",
".git/objects/af/31ef4d98c006d9ada76f407195ad20570cc8e1": "a9d4d1360c77d67b4bb052383a3bdfd9",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/5b40746b09b737326587e7956b33eaaea2cd8b": "e43596d520619d509c91315e06b0d742",
".git/objects/b1/afd5429fbe3cc7a88b89f454006eb7b018849a": "e4c2e016668208ba57348269fcb46d7b",
".git/objects/b3/a4b675557f3361809f6a47c3dcde33e92fb579": "efe6233d5b35cd01e54bc36ddc417cac",
".git/objects/b4/08a4169c123b965059011ccdbf880a641eb156": "f481b51742832ca9f3f1634a1135f304",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bc/d227b7eb4017d6d2539b44e33fd653216c5f66": "ca6093175c00d01bf33d3346cdbcf83d",
".git/objects/c3/e81f822689e3b8c05262eec63e4769e0dea74c": "8c6432dca0ea3fdc0d215dcc05d00a66",
".git/objects/c6/06caa16378473a4bb9e8807b6f43e69acf30ad": "ed187e1b169337b5fbbce611844136c6",
".git/objects/cd/ecdea3258bc5c3282c9614474ee46ed47034d6": "bb6727791ab432014ef80eb305dec273",
".git/objects/ce/4d0f9085ee23655569bffccfc1fb457cd4a681": "2779c9736c484a5b160d72b8075c8d9d",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/1dbb3226b2e3513e8a9cb98e151f71f16b0d55": "a4280060c82831b86c75506e415a2b86",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/29da7f8acbfdc8674106c9a70e430600983517": "82171b056ab5fdc4abc093ecd92719a8",
".git/objects/d8/7014702658d27ce8df0f8a185f6b44ac5aa70e": "a0fd0c23dc930a8976a4fb104977b011",
".git/objects/dd/712eb3510de61952e4a401b37a3ec6f1a47765": "c546d9dfb0826cb79b136dd4956f075d",
".git/objects/df/c634c13b52bebd87d5522b376e5482e9b15713": "d6c23692d372ffe38c2e64527a083ae7",
".git/objects/e9/5da406c3b6ddcc8c5983b65d1116fc57fdfb4c": "fd95c362f0f180f614ab5fdf306cc7a9",
".git/objects/e9/f01b4e9af46b4b99833216f53844996d090794": "abb8599173f9631edf22413b0c1c6ba3",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/361605e9e785c47c62dd46a67f9c352731226b": "d1eafaea77b21719d7c450bcf18236d6",
".git/objects/ec/a97b1c834ca0aae90e6063ff0797eb3b385710": "44ad2cd0b9e7b67ada35b0ac0daec097",
".git/objects/ee/f8707ac03a5fb94f085438074ab4a1fdb0d53e": "946ce1925e501add00d0b3e51453bf23",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/bfa30c1cd4c4e053f9499c7346ee675b61c128": "3ac484493324b200fe18474a706031ca",
".git/objects/f6/bbf8496346973df211a4eb6bab4c89462babb0": "ff61a5181d0e9de1cd5c31e78b69fe4e",
".git/ORIG_HEAD": "ba72ff87d1e5efc577c05d7f298e67e4",
".git/refs/heads/main": "ba72ff87d1e5efc577c05d7f298e67e4",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "ba72ff87d1e5efc577c05d7f298e67e4",
"assets/AssetManifest.bin": "c51612bbbc100893ba5c1216b7f98223",
"assets/AssetManifest.bin.json": "7a367fd5bded2d37fef737e790ff44eb",
"assets/AssetManifest.json": "b2f3e9c737350efdcb1fd7c321bac20a",
"assets/assets/me.jpg": "834fad62118e389c88cb87ba9cd07d81",
"assets/assets/praveenaresume.pdf": "20f7bb4fee1c5ea8a665577181726e60",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "f013818655d4a44608cb55032f0bce55",
"assets/NOTICES": "22ab85657eb1fd8747e78063744abeac",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "2dea6a14df78a2d3afe473b36e523e0a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5d424a84ac80760175a3638412945dd1",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "269f971cec0d5dc864fe9ae080b19e23",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "bcf4fce680e9b5acf69a6a8f5c5fdfeb",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "f51233b8f82cd66338780672d3b1ef11",
"/": "f51233b8f82cd66338780672d3b1ef11",
"main.dart.js": "8c9db2e74ae5f27ff67f0200993a145f",
"manifest.json": "d1389b7e7569cda1a5ce617ee17c8014",
"version.json": "a6a21dd2bb77c018960ad8ad997cfa35"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
