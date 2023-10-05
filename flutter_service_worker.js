'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "cd80fe43ed7480850638d8b7b477b177",
".git/config": "16cd6945cd13341b89aaf5ae1e819e1e",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "d27aaa85ac9b0bff14cb4d34a3695719",
".git/HEAD": "2e315b57043b0a01c10d1365acfe0ff6",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "a5a87890d2efc43d8c705c09cb1164a7",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "8c0e916c5fd6d170192a1c090dfbec13",
".git/logs/refs/heads/production": "cda6c1d82aee1db67ff157998c64af69",
".git/logs/refs/remotes/origin/production": "eeb422d8d6c49acb1749631a80393445",
".git/objects/09/39b445649c44b9a38a2602a9a44c384359e251": "627258076e3297d9b1ad0e8c38f7ec77",
".git/objects/0b/60f2f02e193ac47134afacf53f2612e2516ae3": "89457c85b2c03f63f5aceb020179bdfd",
".git/objects/14/666047d7377ea8aa74d8623f960f56a483f5ab": "81dccc3be0095d61b9fde4c2c6750896",
".git/objects/17/2be06674703cadb0746ec4fd8147d433cb91c1": "1c4b2f2d5c51143b5c93a8a62deda5d5",
".git/objects/1b/430b1586fd6a1f9fff9c53194d1a0a6c1a6c90": "76dfbfa1ca5f3ecb5570b64496838e53",
".git/objects/2c/81e234ae4dd4b26a0966912211e1e710d64924": "386743f00ed05135df2e4c8c7cc759a2",
".git/objects/32/45ebdf0217913e929161805ed0042c4a280997": "dc5c02df279d13e9d9edfaefbb78cb5d",
".git/objects/33/1d4065b74520b7aabe359874c8f55d24c9f7a5": "8b1cfd821536b112ba57cf10b09fafeb",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/38/d56fb31a94ca358913c3705ba18fd4721ce856": "20aaf9c39ed5735443edc7203afca5e4",
".git/objects/40/5852e127df34e3b806a50a288dd8c389b7dc0d": "508f8ba67b5c239a787ddec1c030b8b8",
".git/objects/44/9b6fa5babcc51468c095a5fcd78fb8c3886f8e": "b25c46dbd85aa5aab4eac507d67355e3",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/48/9bce7127b35a45cd3c32568df89204684658bc": "e25a852048b7c35db2c8c45e171154da",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/5e/380f46c93480e7977e5065030e22510a99c117": "3b5b039f7968918d1e019b265ea83bd7",
".git/objects/62/48d0d90163e79f399dab1522c1ac32b0c59f4d": "779bb15fbb11eccb189824cdcb76f952",
".git/objects/66/8e2bd5eb4a1dbb62b373908822cf2f3c9fbb55": "4a66af5c1b2ab11d9e3b2a37a731e1d9",
".git/objects/6e/2d074e2ab9f780acc6002aeda55438e19c57f4": "214ea732684495f489794845bfa53335",
".git/objects/73/ebce4f8bb7930808db130931b7ee46eb5ce6bc": "c16f1ee8362756e1ddab3db94e17618c",
".git/objects/78/42ccc429704556b0088f105115b705d38f2663": "28450f74e2938c7d8b87147ab659e640",
".git/objects/79/e24f66730d3ab51becc7472781667b0b416fe2": "20f9282fb0a8b517b4e0e4463f7dfc46",
".git/objects/7e/31d9124863bae6dde012f9b4e9507e5eca838e": "c18ef8c8da49e98423feeb779379e2d6",
".git/objects/80/83198df5bf3905f22a59601450d916faffa774": "b9c688bb31c00d6e51f597429dbc2e8d",
".git/objects/82/6deed233e6effbf3654a837d72aac0406100d2": "48d01a74f6e4c6d5dac278a8648a2df6",
".git/objects/83/0e3d19e7f2ff19bbb4b955e3a38e3328837e12": "4412f19a8aebd49e1c2fb821b641e232",
".git/objects/83/ba7dbdc053c25f65e9fe2d717f429592277ca9": "b15a642a9f3dec3181fc693cd2a73a0c",
".git/objects/86/e1b7ce6df52a7172619121827c0f1c9008f873": "ebe3c67b0807404bb197ed4cff358427",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/49bf8b84e9298e86895c5157777d61368c75bf": "ef75978bd8a48f1040f217a9842463e6",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/8c56b9bff2b0f8837b841f59075d2c6223f3a1": "a010fb4c8c47f151e741c1862f5a5ac5",
".git/objects/95/534c525df35a4a120b1b554874fbcfadc48d90": "ce2a422cb73f52f0e548ffd6162badf7",
".git/objects/9a/e9a3655cd4cb867566b845d705b3542629f7bb": "6dcfea413fec81d4260e08b6ff6bffd6",
".git/objects/9b/6ff8232ddfe9ba877cd653e21d692592a239bd": "a2aac3fe6912757714e02d86a1decb78",
".git/objects/9c/fd5ed16fe4087a6cef1d9c6a70fb3dad99f91f": "5ceaacf6826a6ebdd6b428ad5817fa1f",
".git/objects/a1/3958179ac5c10ff2f02f63aca45a61dd42fb7d": "d392787544e3f6887c3a914cb2e5eccd",
".git/objects/a2/7efe81a0d2968569795a001a780e2e20e61974": "0e011748065331b6175a0ad2e9a11d3b",
".git/objects/a8/234e78324011301c932efde8dd789fba10495a": "5ad9ca983e505191e13f526cf3be6ade",
".git/objects/ab/d61af75af4467ee756243c7b3b8bba00ad8e2c": "0531a5f88739013ee16b241926e9fb1c",
".git/objects/b4/fa8debbcb9de6a1a62f68fc4b8f749f5372946": "6bf7c8281b65997207786851026728fd",
".git/objects/b6/aabd75fcbe6565bda6cffb06a678346b1fb1a9": "9f6501a6ab0499f253b5d224e033f40a",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/c5/52c8fc9b5f75b1eccbea90b14925970a636dda": "b3a27fb77af6f3a413dea70563323d94",
".git/objects/cb/e814604fa64eca123b24f893a8f2178ea8f461": "b225301e7e57ceeede964e68d2c3fa64",
".git/objects/cc/036e75eac24af9e039ba865a0400fea3ad5a1b": "c8dfb502e159089f6db975fedba7417a",
".git/objects/cc/5290831988a0a6d1e1d5e0dd05b0b60324666a": "8c28c6288bcfe77fb0354015ef2f59e0",
".git/objects/d1/66317c78846ce78784d783ecc1476eacf045f3": "c51ff8a52ca56408324bca3325b987aa",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/d6/8fa20f36ac013eee557110c0192654a4ad43f6": "5340d600e44d0f607c332d7148783137",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/a842e01208261c8b33f7c33654759f26bf1001": "11e0531d5ec58febdc9e70f4aacda721",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/db/b38ed8bd014d6fa2b4e2b6a1e2f8adbae2274b": "5753ac358546a7c7c7846ddbce10bedb",
".git/objects/de/a56959764172bec8a7be4e86918213d71c08a1": "85b7ef9ac3821febb1fac010d53a9656",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/df/f9ffcfcc740ad14e27fc3473307eaabcce2d6d": "2e22c82bebd293b0eadc4e065bc9575d",
".git/objects/e0/49c81f7cb35ebc411a3e1b547bf4ccf91292e8": "efad70dc0ca77a90ee53b5cc3be528ca",
".git/objects/e5/4d15e06c355b90af4a8fa4d24dc9eb9e3ffc0e": "8ed26d5767f6862808397d7389d2c85a",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e6/d48e90fe50155669c8847af4ef5860ed69498b": "8a7ef7263c9658b3a906469b008ce6c5",
".git/objects/e9/92f1137918564a29419c83428d3884d6a70c53": "9f6178cbbbb700c23331d4eb4799bb7b",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f0/aae27f25d29066ee52f843c7e7be8726852163": "d53e381558d205b1aeb9f67377ae60b6",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/ORIG_HEAD": "bb4afdd0d136f1c4e00bcc4251f01dbf",
".git/refs/heads/production": "75eaff5402e77f10a02d673c3f18f6da",
".git/refs/remotes/origin/production": "75eaff5402e77f10a02d673c3f18f6da",
"assets/AssetManifest.bin": "32423e7c845de57ed79a8568c709ad29",
"assets/AssetManifest.json": "ec154716c4d8fd8bb3964ced8793a350",
"assets/assets/bg_1.png": "e568bf6d021a3bd03a7ecb828633cd9c",
"assets/assets/bg_2.jpg": "3258afb06a946b1cf4b29db181b47368",
"assets/assets/bg_3.jpg": "e85368b586d252d658eb3a6a5d186c5a",
"assets/assets/bg_4.jpg": "6ae5bf3a88ffedc4d6d9f2d6c00d85f2",
"assets/assets/images/happy_members.jpg": "a6a437193d7aa49e14ace234d8be9fe7",
"assets/assets/images/program_1.jpg": "3698b8da69157c0670031257c1369f6f",
"assets/assets/images/program_2.jpg": "9b50c42f776a088001e8ba0547472d06",
"assets/assets/images/program_3.jpg": "32226e2943c29e10dfeb25cebe982285",
"assets/assets/images/program_4.jpg": "5bb1d4822975f6d2650b6af779f2e767",
"assets/assets/logo.png": "9876988f1e58f13d3a58c5989527cda9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "f8a1105c1548da929089fbcd276080dd",
"assets/NOTICES": "d01fcfc14dd98f199f56c73b6318da86",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "19d8b35640d13140fe4e6f3b8d450f04",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "1165572f59d51e963a5bf9bdda61e39b",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "305173bd0134b582cdc452e2aa2dfe79",
"/": "305173bd0134b582cdc452e2aa2dfe79",
"main.dart.js": "178f141e1cbcf35e82cb5dc615ac2ab6",
"manifest.json": "a4d7cc80282455583c81ede270bb1a17",
"version.json": "701cf18a05c8fb80bb8e16dcd1f8164b"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
