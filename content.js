const adultSites = [
  "xhamster",
  "pornhub",
  "xvideos",
  "xnxx",
  "redtube",
  "youporn",
  "tube8",
  "youjizz",
  "adultfriendfinder",
  "cam4",
  "chaturbate",
  "livejasmin",
  "bongacams",
  "spankbang",
  "onlyfans",
  "nudevista",
  "xhamsterlive",
  "camdolls",
  "camsoda",
  "bigass",
  "erome",
  "camster",
  "cams",
  "cam4ultimate",
  "naughtyamerica",
  "tnaflix",
  "bravotube",
  "hclips",
  "pervclips",
  "motherless",
  "empflix",
  "sunporno",
  "brazzer",
  "bangbros",
  "extremetube",
  "lubetube",
  "keezmovies",
  "sex",
  "cliphunter",
  "drtuber",
  "playvids",
  "ashemaletube",
  "gaytube",
  "hdtube",
  "xxnx",
  "3movs",
  "hardsextube",
  "hdsex",
  "porntube",
  "porn",
  "pornburst",
  "pornoxo",
  "wankz",
  "spankwire",
  "xxxbunker",
  "fuq",
  "hdporn",
  "javbangers",
  "perfectgirls",
  "porndroids",
  "pornhd",
  "pornhost",
  "sexvid",
  "slutload",
  "steezy",
  "viewporn",
  "vporn",
  "yesporn",
  "xxxtv",
  "yobt",
  "yuvutu",
  "zbporn",
  "xozilla",
  "beeg",
  "pornrabbit",
  "wetplace",
  "hotmovs",
  "pornfun",
  "pornone",
  "see.xxx",
  "tiava",
  "xbabe",
  "asstr",
  "cliphunter",
  "pornhd",
  "x-tube",
  "pornerbros",
  "frprn",
  "iporn",
  "xkeezmovies",
  "xmovies",
  "xxnx",
  "hentaihaven",
  "hentai.tv",
  "hentai-foundry",
  "hentaimama",
  "hentairules",
  "hentai",
  "hentaistream",
  "hentaifox",
  "hentaicafe",
  "hentaigasm",
  "hentaicosplay",
  "hentailib",
  "hentairead",
  "hentaihero",
  "hanime",
  "hentaiporn"
];

const currentURL = window.location.href.toLowerCase();
const isAdultSite = adultSites.some(site => currentURL.includes(site));

if (isAdultSite) {
  window.location.href = chrome.runtime.getURL("music.html");
}
