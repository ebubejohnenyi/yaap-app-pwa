'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "0244455d4c737262c597da07308b792c",
"version.json": "c3514585085b99bb528d4a42b3f2ed10",
"index.html": "eb183ae98a89a6bf4bf45ada6088c212",
"/": "eb183ae98a89a6bf4bf45ada6088c212",
"main.dart.js": "2ffc3d31bfeaede6ffe6606052507508",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"favicon.png": "768cfdf60f39aec1ca396dd7d9fda015",
"icons/Icon-192.png": "e7ba104cc847bc841c6088be5695ce0b",
"icons/Icon-maskable-192.png": "e7ba104cc847bc841c6088be5695ce0b",
"icons/Assets.xcassets/AppIcon.appiconset/1024.png": "ac36f92d39f610e09e7d93ed08424dd6",
"icons/Assets.xcassets/AppIcon.appiconset/76.png": "e8daa4d5318f9b6e986bcd444a09cd74",
"icons/Assets.xcassets/AppIcon.appiconset/60.png": "a6bd9431c87fb687a57e6c7174b5daac",
"icons/Assets.xcassets/AppIcon.appiconset/58.png": "61277e1a046a7b8ce84d0ae421de92ae",
"icons/Assets.xcassets/AppIcon.appiconset/167.png": "e578f74ab245aeb822d141da398c8516",
"icons/Assets.xcassets/AppIcon.appiconset/72.png": "97fa22fdcea067c8afec5aa1fcacf647",
"icons/Assets.xcassets/AppIcon.appiconset/29.png": "9d75f421515e2e54dfca24957dde44cd",
"icons/Assets.xcassets/AppIcon.appiconset/100.png": "552e9309594a39741de99a137fb199fc",
"icons/Assets.xcassets/AppIcon.appiconset/114.png": "a71edd9395882e66149f88b516097e14",
"icons/Assets.xcassets/AppIcon.appiconset/120.png": "da65a44c711f966cf6dbd950a0a43306",
"icons/Assets.xcassets/AppIcon.appiconset/20.png": "78b45378866396ddec5945819cb9d685",
"icons/Assets.xcassets/AppIcon.appiconset/Contents.json": "5b576dd1f8d164cea7a1804348317e76",
"icons/Assets.xcassets/AppIcon.appiconset/180.png": "22329a40a40694a9301295eb43c4f55c",
"icons/Assets.xcassets/AppIcon.appiconset/57.png": "66255e4bea16b019c6e20796edf268e3",
"icons/Assets.xcassets/AppIcon.appiconset/80.png": "cdfdaa292a46a48e221a0a3c291b9c01",
"icons/Assets.xcassets/AppIcon.appiconset/40.png": "0b541e000821aba5676c9f385041bd61",
"icons/Assets.xcassets/AppIcon.appiconset/87.png": "bd136e19e4eb099fe631cec9890f050b",
"icons/Assets.xcassets/AppIcon.appiconset/50.png": "5940ff4e268a93e98ff05391a7bc58ec",
"icons/Assets.xcassets/AppIcon.appiconset/144.png": "897d25d24245cbcd54d95d660c0fcf06",
"icons/Assets.xcassets/AppIcon.appiconset/152.png": "d48a8171fe1284dee14d10a14391f895",
"icons/appstore.png": "ac36f92d39f610e09e7d93ed08424dd6",
"icons/README.md": "04439d76271e5b72820abf20309b3c3b",
"icons/AppIcon.icon/icon.json": "e180133c2e808dcf1d9555afc0bbcbad",
"icons/AppIcon.icon/Assets/icon.png": "9b670ea7510dd04dd915b4faf87e52cb",
"icons/android/mipmap-mdpi/ic_launcher.png": "b6a6cc20d5b88901e7ca3a009967cfd1",
"icons/android/mipmap-hdpi/ic_launcher.png": "5cfa7b42a496dad542310261165ab8f9",
"icons/android/mipmap-xxxhdpi/ic_launcher.png": "32f2377186264d44a63e0c5d9fc9e564",
"icons/android/mipmap-xxhdpi/ic_launcher.png": "e7ba104cc847bc841c6088be5695ce0b",
"icons/android/adaptive-foreground.png": "56fd88c4a5a604522c12c7d41d285b30",
"icons/android/mipmap-xhdpi/ic_launcher.png": "5f7be3edf44e1602577d0133295111c3",
"icons/playstore.png": "768cfdf60f39aec1ca396dd7d9fda015",
"icons/Icon-maskable-512.png": "32f2377186264d44a63e0c5d9fc9e564",
"icons/Icon-512.png": "32f2377186264d44a63e0c5d9fc9e564",
"manifest.json": "b74eb08fab60964671c723ea64699067",
".git/ORIG_HEAD": "9a87a3d142e21e8d520a33f83d0557b9",
".git/config": "d0818ad0663db62b190462b20ce4a354",
".git/objects/68/6784d2188121ad2bc1b49acba8a79ecb815675": "6237549885576bd0a2aa16c400d8ade9",
".git/objects/68/43fddc6aef172d5576ecce56160b1c73bc0f85": "2a91c358adf65703ab820ee54e7aff37",
".git/objects/57/02672bdee12df630a6a086d2fc84c4f4489408": "5792ee688969eed10104ddc0e35c86fe",
".git/objects/6f/7661bc79baa113f478e9a717e0c4959a3f3d27": "985be3a6935e9d31febd5205a9e04c4e",
".git/objects/04/48975656bd175dec24df1400ce429009b840a5": "a981117e4893b545046b02ac5f09b9b8",
".git/objects/6a/e3a8a7ad46262ea1d8cd9f27c2b2e633db8e80": "c8395aad5dba805af294c9756d00c0ab",
".git/objects/69/b2023ef3b84225f16fdd15ba36b2b5fc3cee43": "6ccef18e05a49674444167a08de6e407",
".git/objects/51/796eff139904bafa731eb109f2482137844459": "117d95569bb7cda3f953879209f9dbf4",
".git/objects/51/43927d9591a2960d3471eb249e06e5d76b1aa3": "c5abcf71ad98ebfb860e58ab8697eb91",
".git/objects/51/03e757c71f2abfd2269054a790f775ec61ffa4": "d437b77e41df8fcc0c0e99f143adc093",
".git/objects/58/2322e216e001e8bc846491f8ae312302bfeff8": "d67b87341852f4017e7e111557291869",
".git/objects/93/04490a6144d2af756ab1bbd9d4378d8da17d23": "3bcd8b8c7b196aa06d553c7ff09d3071",
".git/objects/93/58e58f0da5e24425c036a5ea581546af1970f4": "f408446e1bde91c371d1b5f714b8d4ad",
".git/objects/93/b363f37b4951e6c5b9e1932ed169c9928b1e90": "c8d74fb3083c0dc39be8cff78a1d4dd5",
".git/objects/0e/346ede6239a3eaa5f7e8d0a5b3e1d7996117d6": "2016d2f8c4ba2ba7c88ba4a67a5a5b1b",
".git/objects/9c/89773a535e019fe2d8b42f376a046cc86b8092": "7d5e06238d8ee3240f4508c40b6dc95c",
".git/objects/02/2d921b36a109efec36b186a7e6fdb17b19cf17": "f45f0e1c2081280bf8f08e69fa836802",
".git/objects/b5/e0fe735af9c5632885ab2ec2d8c6e0ea60e487": "68fbbf216c21b7a03df3492e904ab76d",
".git/objects/d9/5b1d3499b3b3d3989fa2a461151ba2abd92a07": "a072a09ac2efe43c8d49b7356317e52e",
".git/objects/d9/016626d55268f6e754e3cdf9cde4bac0991d1b": "de98a614df7b7378f3941cbf52f385e9",
".git/objects/ad/ced61befd6b9d30829511317b07b72e66918a1": "37e7fcca73f0b6930673b256fac467ae",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/a5/97878ed4c23f14c06560403c49c67931e71138": "8dc3acb8d879f67e9a02bc6588f7cd68",
".git/objects/bd/341b2a8645b9673eaecc72e30f90e8e2067ab0": "fa240168e838eda031a6a6ef9e7636b8",
".git/objects/d1/6a07f4a38a100e61f55c3aedd5ae93765bbe52": "9ccb182b21fd8f1415bbe4e5d83b6b7d",
".git/objects/d1/f39fd90151e1af2f2a4809e6ec748382008dc9": "23e84bcd48013b16197c79ce6f5d0c5c",
".git/objects/d6/ec5ac7b55c8295fb3e6809fb473808f9f961fe": "98445e63bbe244575e54f6b2c050b21c",
".git/objects/e5/b68c605a6dd4a28951c38e96286de3a8e900bf": "0b2054f337a3eb5972cec2dfeea4f05a",
".git/objects/f4/b60e461313d88de3a0bae10ed00b4061edba79": "f017b0094a16208bc38fef03b957f4c6",
".git/objects/f3/3e0726c3581f96c51f862cf61120af36599a32": "afcaefd94c5f13d3da610e0defa27e50",
".git/objects/c7/61d2d707516efe45176712dc85567499d56013": "3392d835a04589921159372275d6ea87",
".git/objects/fd/05cfbc927a4fedcbe4d6d4b62e2c1ed8918f26": "5675c69555d005a1a244cc8ba90a402c",
".git/objects/fd/ea61ffc701ff6512be2cfb41af7bd7134a824c": "28aa02037c7e993730f9b7d0a67e8f7b",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/cf/b014fc1f6a1c98784163daa594975c8ea38978": "b48e1b7cba06f438a05e6470fa8f3591",
".git/objects/ca/561a3cd0a2a5acbf43ea03c6b1fcd2185dc3dc": "f722ebd7175f93c292c1249a48e83e9a",
".git/objects/ca/a7f9f8a47b546753c2f9883d38b96c709a4dd2": "83cb4f6e8762b139adee6c6b1f5802f9",
".git/objects/c8/3af99da428c63c1f82efdcd11c8d5297bddb04": "144ef6d9a8ff9a753d6e3b9573d5242f",
".git/objects/ed/e4b306e6ec59f9cad2ede33f6e5887be75266a": "4bc886e9745f2389060853d4abb854bc",
".git/objects/4e/9ad51351a4c9936aef012a8d8d4ac5794f6bc7": "e280edafe4c4e8dda19763a4ee8334ec",
".git/objects/27/020abe1694f3d760e448f3475bfca2e4ab667f": "6442fd8ed998506ca30ca8589efa593e",
".git/objects/11/5bb86d16915208f93e727a31fedad43fdb058f": "455b2e9aa5ca1f79156cfbd2d3ab53d6",
".git/objects/11/51f0b59934a24d0528b1304213302dd7b31f6e": "099c9b6817ee193dee736419f77c432a",
".git/objects/29/d805b82e42b717579c68c4cf8ab8dff1446490": "f85c04979f1ccc4a605ff4947121f1e9",
".git/objects/7c/3463b788d022128d17b29072564326f1fd8819": "37fee507a59e935fc85169a822943ba2",
".git/objects/89/23916f929c20fce6496641f34c1a50e2d5718e": "e14e2b1f160693e313621d70d93cf976",
".git/objects/45/2941bebf5690e7326d170bac512c0f9eeadad0": "c786dabad620bc1147a579681692630c",
".git/objects/1f/f63dbd17ec84432b585f0ca494fef7897e307f": "478269c03d5a0c3356f9c34936673ab3",
".git/objects/73/e7e9b076581622e284561886185292415772ce": "75a14a74a1f3e1235b69aa2ade776367",
".git/objects/73/b1f106f1fc967b97d1510a6389afd9eb1fd6e7": "1a8aae9ab80d33abb284ae3f42f57935",
".git/objects/87/52d243ea36f2e1381b59ca29ef8b1bfc170af3": "d5ce2953eda0b0255d8be2919ea909a6",
".git/objects/87/7456c9d0578fcc83a327fe1b741dcb08c53168": "a2a01897b70264e89a74b049a99da53b",
".git/objects/80/34f2cfe9f6a7407e25b578d085324a40e9826e": "3b3a859300810741bbe67d6159e618a8",
".git/objects/7b/208411d9bb8d861994a5f0fd226aa61f30c026": "74180af1cf558f1b0a99ad9e530da0c1",
".git/objects/7b/6806f7ad83ff5cee16688e38b9dd900f1c1388": "7649fa76fc4699539f525a0f822cab19",
".git/objects/8f/df9690e3e093d9b330b999ff18833c5981aa83": "aa50863e8f858650bc79cef412dfdf0d",
".git/objects/7e/76065eca6ebe8e4c786170da984d9b9f328744": "65fbfcf9f29aff0d4c32fec824d9e367",
".git/objects/7e/3ca16b86cae6d7263f637d16d8cbb5335835dd": "5cc69d93f9761ec66be9869b08f6a9cf",
".git/objects/21/47ec9a3f95a3398dd30231cf8c21369e36b529": "c6164bdea35fa9e72bee64fd4cca23d5",
".git/objects/2f/9de2ffb2ff81b77a5a6b18945587fc4d39099a": "3688267fd00feb385fbec4ba1eeed875",
".git/objects/9f/9952a51046b42f3f9d389384c76d8b55351318": "b8c92e869c93e5203b7699a868d42755",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/07/bd089347b48a5d3cfeecc3f058de3f71d2a17d": "17d1003a0c3bb7546bef1c901265ddc2",
".git/objects/6e/773bf0c5fb10f4d111fa5f89ed83dfeaef353c": "3c4344b57804ac5dc80cde33cdd55e19",
".git/objects/5c/ce1886e19ff9c8de6711b57ea5d43dccef87f3": "37fd463c9fbcd2e577ddfe2291e3e73f",
".git/objects/3a/8cda5335b4b2a108123194b84df133bac91b23": "1636ee51263ed072c69e4e3b8d14f339",
".git/objects/3a/29a6f15d7da0cff7a84a767c16ce0b08f061b1": "f54f559146aeccd0eb6feb25d46d60f7",
".git/objects/54/6af05ec095e9d8c4488cbcc3dbe461d52c1c8f": "25fc527e28f60a42f29b02c9e5ffbf32",
".git/objects/54/f3aaa89826fb0669f81c2a6351fc00cc39b774": "d758b66c267a05414436fe23b20529b3",
".git/objects/98/6148f32254b6b271a408297c18de6669b87971": "f720334c2bdf67c9de6ff95f60674a93",
".git/objects/3f/acb1796f5155fa5f444c16a8ab0a1eb6868465": "03d2c27731d63b00582f6de0db91b080",
".git/objects/08/27c17254fd3959af211aaf91a82d3b9a804c2f": "360dc8df65dabbf4e7f858711c46cc09",
".git/objects/01/9a0c37f5aa25d6b041daf9aeb920ba203be1f4": "62208e6942eab5bac510698bf5e31aa2",
".git/objects/39/63aa3c966742e8bb6d9fbb165eb905a90c57d8": "20b4bc57e1de936573bd60558bd66ead",
".git/objects/99/5d4b4dc9fa5b12f0790679f2c556a85cd82622": "1fd571607a480ac022fb2095839abde5",
".git/objects/55/56d7a4dce8455f53091b1dc79cc687d6ffe08e": "a488f084817961d4caae543cc8bd93fa",
".git/objects/55/df5abd9c7a2ce5f731463595a0899c594795bd": "e670b1f0c2943131bbc32417f19998ba",
".git/objects/63/670fb33711c999c266e88888b1f078b923a141": "3fe8d56a8437860ad54a822736ef2502",
".git/objects/64/775966b4b13b74a5c94672392e7c3849a0269a": "543c7968fb3bae179ffed89606c302dd",
".git/objects/90/cc47484f3b7ebf623fad780ae2ace42b013ca7": "6622ed9ed9b39cd7212ba50fec707cf4",
".git/objects/bf/6008a04f7cb871b6199191fef85c023f9c9714": "d4d5764b90b4b9c5c9abd233497add9d",
".git/objects/d3/d11817b9595a2573ca4a31116feba02447f195": "087eed84ba6110a52a7e247441464f50",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/9a8c7e2b610e05d1bfa26d074dec4ba7314840": "8564413e29c9cd7bc82b6e11b8bbad95",
".git/objects/ba/9f5149db0e2395cdb3d7e31b9ee513fea85a2b": "27515a5c4337b598ee918b5a272ed2c5",
".git/objects/a0/efe24af31a328696503857a65feb4945d4b995": "400a5193a3e195582c00e3bff65a933a",
".git/objects/a0/f85468ea4eb93e3f5e0052143fe8910ecb164f": "0144f797622ae39670116625bcfdd94a",
".git/objects/dd/6c87023910be8b9214f7c2d327fb2db60aa713": "8ae524509bfefdf0ef2fab909b82ce59",
".git/objects/b6/9d109bd80aa9ebb71ed9144fa431c6dde258ba": "04bdbb284e1e0d7195c0cfdef9891469",
".git/objects/d2/a1ee2b11f02c35a99bce05c88e216fe157b7ae": "7afbc5addf8d3405ca64a451d1fd4b17",
".git/objects/aa/d33ec460ad377b2df787dd7600f7c8c5c30d38": "b1e62099373c47963c1219289d6e020d",
".git/objects/a8/cff3fbbd55a7567f7260cf7da3e0b278c9c8a9": "5cbff91d2928c79c8609e8a55526d1f5",
".git/objects/a8/41d1470e78b2cbed4f504dc2f276e19a5bcc3a": "88907f509089c4331759cef82031d5a4",
".git/objects/de/cc98b4b58b3222f7a66aaaeb19ab500fe15f2c": "3689b15270e983d6d94bd7002e537ea9",
".git/objects/de/2e353fd12421d0ac1aae3a62afa043229e1116": "4a503cb8fe92ea22b27657b9c7013235",
".git/objects/b9/85a21aaf8c0b83000ea860f20428b9d56e76d3": "f701cf7b158e66f173d3b3119ea92488",
".git/objects/b9/3e39bd49dfaf9e225bb598cd9644f833badd9a": "666b0d595ebbcc37f0c7b61220c18864",
".git/objects/ef/b30edd35030e1b454b89f341c381ed56638e55": "5ef701a59a643de68df57e020e0284a7",
".git/objects/ef/5b9946ec5a043bd4a728cabb2b0d9ed2d6997a": "b54a0529371ed647d5e3887d64d9a1cd",
".git/objects/ef/3a7d0a211fec1add79a96b20d6199afd127782": "8b4187da19f208731ac96427a289b413",
".git/objects/c3/3909051c845ab8582c0a1dfbdae6dd71a37d7c": "ed3b85fdd2fc1de8c885f92e94490853",
".git/objects/c4/35b79dad3cd96191a5d800573711bcc6e1400e": "3743a3aae17c09de372308eb7eb896c1",
".git/objects/e1/4f23968d9296c5914546a9a197b58ad6ecc070": "564eaabcaca67866ca5015a87ff1b7d8",
".git/objects/e1/d535a13227e8d59aba5c9810e39eb4f48f9d77": "feb181adae42772cfeef8d26f4371f31",
".git/objects/cd/5f3618ea01bc3b763fe2202e1af5ace9048479": "ec130f9ab6367bf29ad4a275211cdd27",
".git/objects/e6/eb8f689cbc9febb5a913856382d297dae0d383": "466fce65fb82283da16cdd7c93059ff3",
".git/objects/f7/4cfdde456b14aa4aa6c704855c7f469af21b39": "a340ad9d36295f84c073f719e0a81a4c",
".git/objects/fa/b6cb4e89fa0d14d7fec3f5bc4541dd18be6574": "ce395a9deb20fe69554d031634d929ec",
".git/objects/fa/ae8fa6fa5bd23c5f3da22fb035c321fe0032fd": "4f08415f15078034e0bf2ee95ac08257",
".git/objects/c5/d5ad38e5881ddb00401f114db60c93ad48f3e4": "cc6bcd11d2c75c275d3fa0c0bb5f3a03",
".git/objects/c2/913d0bdbbb32a218c0d493b53eccb602b2e02a": "b29e2084b7147d9293044d3e862cc521",
".git/objects/f6/e6c75d6f1151eeb165a90f04b4d99effa41e83": "95ea83d65d44e4c524c6d51286406ac8",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/f1/ee209f9218aad081d186e450996e408e2e969e": "1c44e4b292ebab33dafb187a0629e159",
".git/objects/f1/fb49235ea5e977bba99b7013bd2fb2b3dd2476": "14e58c80f2cbf3b96acd19e89a43a343",
".git/objects/cb/be7702e8aebe68ad25c45b9aa0814c06d5e919": "50eec631673dedfd1cea0fa335ea0757",
".git/objects/46/d26934d6b60c65a3f4b83bf97420b512eb15c6": "d08afeff2870eefcf66e252328fc2703",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/77/ca613b9b5b7128caa8440df89e197bde149728": "8f252a4728f82ff50427816a060c58fd",
".git/objects/77/8d2175866d095eb05d754ad250371a7777ffde": "f7702e4672c9f935157aa28389e32684",
".git/objects/84/188f97f245d323fbfaea366ba2eff02e84ef56": "9fe295aba661e7b9ab551e4f99f1e0b9",
".git/objects/8c/cf2d912e634ed29f81a98c54cc39f4bb546741": "9a29b98191c1f9c99b38ebc4bd0cffed",
".git/objects/85/e5bf5fd41227f26ab458dccfb7f13b976f3286": "495ee21221a0129e2c0a677beb42fe13",
".git/objects/85/63aed2175379d2e75ec05ec0373a302730b6ad": "997f96db42b2dde7c208b10d023a5a8e",
".git/objects/1d/1a531687d0ef06d1db70286ccfa822bad59fd2": "f811c76d3689852cc83a02969b84cb21",
".git/objects/1d/adcfcd2e24d6054454bd00866ddcf8d6957ccf": "e7320cd1c0be11ba8f55dfeed7f86a50",
".git/objects/71/e8ceab1a197b32758ed7d3640acc4592795702": "f331cd2b05eba679b4a0e864cfacbb6a",
".git/objects/71/c06d9bba67e479301e8bf30ae68e12e91c6c93": "4ea0a21d8b6ece1d0bdd8ff061d0933b",
".git/objects/2b/79d94614283e7552a98ee2fc39e4559d874373": "6636185b5f4c209053af9eec5a602c14",
".git/objects/78/5f0bb7d19907e3e31cb76bfb120f1913af8017": "54969837f419d9107e7f645c3115e521",
".git/objects/13/7516cdd8644b3bec84d306af7a980989627236": "9f43c66cbcb73991b0ca6030a8ec881c",
".git/objects/14/ddbd927a78af693a1c0e74abc306e2e4d56200": "1c4c0359e82fe810b087aac445550a52",
".git/objects/8e/49fe95ba37331d23ac1298af884843eaa241c0": "3623c7cda1a31334b82824edc0135563",
".git/objects/22/478a52f435332d35628335e34eadf38a691850": "76e6b06a657fec0b4e4764218a7b1666",
".git/objects/22/b4803b7a627d3e42f8956e964b4967a865e17d": "e66e1b1adeb74b62ad9828084f072898",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "a233edc89dc16a755c61f9748bc3127f",
".git/logs/refs/heads/main": "52dd6f1caa80424225b45c5ea1b94cae",
".git/logs/refs/remotes/origin/HEAD": "4128f6c43f3656c281ba700016c7af81",
".git/logs/refs/remotes/origin/main": "4f7015d6a265b01d62a4d36d55f820f8",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "c1c498664883b6194dbb9b7810158046",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "c1c498664883b6194dbb9b7810158046",
".git/index": "d238a00a1f396f0fe56e8b7b9003d7dc",
".git/COMMIT_EDITMSG": "60d2c3654fdf9b9c1db0462aa60ca7b4",
".git/FETCH_HEAD": "dc49154e42811d67182269ace80857a4",
"push-sw.js": "e03a5cf317ccd1ed9f90dee7a4fffa45",
"assets/NOTICES": "477df409ff91994b3042f310138d8824",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "e261d55eb378164e9cd9b761c874fd61",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"assets/AssetManifest.bin": "134b1891f3577ceadb58d34b3dd5d530",
"assets/fonts/MaterialIcons-Regular.otf": "0f63d1cf93f1f784396ab595f91d5b1c",
"assets/assets/sounds/clear-announce-tones-2861.wav": "65a2df7ab7e7c9f59bf0fa6a20ff2a11",
"assets/assets/icon/no-bg.png": "1d1ba227b1beb7904b1895cb080cd129",
"assets/assets/icon/app_icon.png": "9b670ea7510dd04dd915b4faf87e52cb",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01"};
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
