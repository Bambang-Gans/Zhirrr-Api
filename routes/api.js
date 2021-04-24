__path = process.cwd()
var favicon = require('serve-favicon');
var express = require('express');
var db = require(__path + '/database/db');
try {
var zahirr = db.get("zahirr");
} catch (e) {
	console.log('')  
}
 
var creator = "Bambang Tri Raharjo"
var secure = require('ssl-express-www');
var cors = require('cors');
var fetch = require('node-fetch');
var cheerio = require('cheerio');
var request = require('request');
var zrapi = require("zrapi");
var dotenv = require("dotenv").config()
var fs = require('fs');
var TikTokScraper = require('tiktok-scraper');
var { EmojiAPI } = require("emoji-api");
var emoji = new EmojiAPI();
var router  = express.Router();
var { color, bgcolor } = require(__path + '/lib/color.js');
var { fetchJson } = require(__path + '/lib/fetcher.js');
var options = require(__path + '/lib/options.js');
var {
	Searchnabi,
	Gempa
} = require('./../lib');

var {
  pShadow,
  pRomantic,
  pSmoke,
  pBurnPapper,
  pNaruto,
  pLoveMsg,
  pMsgGrass,
  pGlitch,
  pDoubleHeart,
  pCoffeCup,
  pLoveText,
  pButterfly
} = require("./../lib/utils/photooxy");

var {
  igStalk,
  igDownload
} = require("./../lib/utils/ig");

var {
  ytDonlodMp3,
  ytDonlodMp4,
  ytPlayMp3,
  ytPlayMp4,
  ytSearch
} = require("./../lib/utils/yt");

var { 
  Joox, 
  FB, 
  Tiktok
} = require("./../lib/utils/downloader");

var {
  Cuaca, 
  Lirik
} = require('./../lib/utils/information');

var {
  Base, 
  WPUser
} = require('./../lib/utils/tools');

var tebakGambar = require('./../lib/utils/tebakGambar');

var cookie = process.env.COOCKIE
/*
* @Pesan Error
*/
loghandler = {
    notparam: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter apikey'
    },
    noturl: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter url'
    },
    notquery: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukkan parameter query'
        },
    notkata: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter kata'
    },
    nottext: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter text'
    },
    nottext2: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter text2'
    },
    notnabi: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter nabi'
    },
    nottext3: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter text3'
    },
    nottheme: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter theme'
    },
    notusername: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter username'
    },
    notvalue: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter value'
    },
    invalidKey: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'apikey invalid'
    },
    invalidlink: {
        status: false,
        creator: `${creator}`,
        message: 'error, mungkin link anda tidak valid.'
    },
    invalidkata: {
        status: false,
        creator: `${creator}`,
        message: 'error, mungkin kata tidak ada dalam api.'
    },
    error: {
        status: false,
        creator: `${creator}`,
        message: 'emror bruh'
    }
}

/*
Akhir Pesan Error
*/

router.use(favicon(__path + "/views/favicon.ico"));

const listkey = ["KazuyaDeveloper", "BambangGans"];

router.post("/apikey", async (req, res, next) => {
  const key = req.query.key;
  if(listkey.includes(key)) {
    res.json({
      message: 'apikey sudah terdaftar'
    });
  } else {
    listkey.push(key);
    res.json({
      message: `berhasil mendaftarkan ${key} Kedatabase apikey`
    });
  }
});

// delete apikey

router.delete("/apikey", async(req, res, next) => {
	const key = req.query.delete;
	if(listkey.includes(key)) {
		res.json({
			message: 'apikey tidak ada sebelumnya'
			})
			} else {
	listkey.splice(key, 1)
	res.json({
		message: 'apikey berhasil dihapus' 
});
 }
});

router.get('/nulis2', async (req, res) => {
	var apikeyInput = req.query.apikey,
	text = req.query.text
	
	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
	if(!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter kata"})
	
      hasil = (`http://zekais-api.herokuapp.com/foliokiri?text=${text}`)
     data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync('heker.png', data)
        res.sendFile(__path+'/heker.png')
})

router.get('/neonlight', async (req, res) => {
	var apikeyInput = req.query.apikey,
	text = req.query.text
	
	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
	if(!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter kata"})
	
      hasil = (`http://docs-jojo.herokuapp.com/api/neon_light?text=${text}`)
     data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync('heker.png', data)
        res.sendFile(__path+'/heker.png')
})

router.get('/trafficlight', async (req, res) => {
	var apikeyInput = req.query.apikey,
	text = req.query.text
	
	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
	if(!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter kata"})
	
      hasil = (`http://akirainfo.site/trafficlight?apikey=KazuyaBot&code=${text}`)
     data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync('heker.png', data)
        res.sendFile(__path+'/heker.png')
})

router.get('/logogaming', async (req, res) => {
	var apikeyInput = req.query.apikey,
	text = req.query.text
	
	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
	if(!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter kata"})
	
      hasil = (`http://docs-jojo.herokuapp.com/api/gaming?text=${text}`)
     data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync('heker.png', data)
        res.sendFile(__path+'/heker.png')
})

router.get('/galaxywp', async (req, res) => {
	var apikeyInput = req.query.apikey,
	text = req.query.text
	
	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
	if(!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter kata"})
	
      hasil = (`http://docs-jojo.herokuapp.com/api/galaxywp?text=${text}`)
     data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync('heker.png', data)
        res.sendFile(__path+'/heker.png')
})

router.get('/nulis3', async (req, res) => {
	var apikeyInput = req.query.apikey,
	text = req.query.text
	
	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
	if(!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter kata"})
	
      hasil = (`http://zekais-api.herokuapp.com/bukukanan?text=${text}`)
     data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync('heker.png', data)
        res.sendFile(__path+'/heker.png')
})

router.get('/nulis4', async (req, res) => {
	var apikeyInput = req.query.apikey,
	text = req.query.text
	
	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
	if(!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter kata"})
	
      hasil = (`http://zekais-api.herokuapp.com/bukukiri?text=${text}`)
     data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync('heker.png', data)
        res.sendFile(__path+'/heker.png')
})

router.get('/hartatahta2', async (req, res) => {
	var apikeyInput = req.query.apikey,
	text = req.query.text
	
	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
	if(!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter kata"})
	
      hasil = (`http://zekais-api.herokuapp.com/hartatahta?text=${text}`)
     data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync('heker.png', data)
        res.sendFile(__path+'/heker.png')
})

router.get('/honey', async (req, res) => {
	var apikeyInput = req.query.apikey,
	text = req.query.text
	
	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
	if(!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter kata"})
	
      hasil = (`http://hadi-api.herokuapp.com/api/photoxy/honey-text?teks=${text}`)
     data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync('heker.png', data)
        res.sendFile(__path+'/heker.png')
})

router.get('/tts', async (req, res) => {
	var apikeyInput = req.query.apikey,
	text = req.query.text
	
	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
	if(!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter kata"})
	
      hasil = (`http://hadi-api.herokuapp.com/api/tts?text=${text}&language=id`)
     data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync('heker.mp3', data)
        res.sendFile(__path+'/heker.mp3')
})

router.get('/vintage', async (req, res) => {
	var apikeyInput = req.query.apikey,
	text = req.query.text
	
	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
	if(!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter kata"})
	
      hasil = (`http://hadi-api.herokuapp.com/api/photoxy/vintage-text?teks=${text}`)
     data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync('heker.png', data)
        res.sendFile(__path+'/heker.png')
})

router.get('/romantic-messages', async (req, res) => {
	var apikeyInput = req.query.apikey,
	text = req.query.text
	
	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
	if(!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter kata"})
	
      hasil = (`http://hadi-api.herokuapp.com/api/photoxy/romantic-messages?teks=${text}`)
     data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync('heker.png', data)
        res.sendFile(__path+'/heker.png')
})

router.get('/hartatahta3', async (req, res) => {
	var apikeyInput = req.query.apikey,
	text = req.query.text
	
	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
	if(!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter kata"})
	
      hasil = (`https://api.vhtear.com/hartatahta?text=${text}&apikey=jepribrs`)
     data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync('heker.png', data)
        res.sendFile(__path+'/heker.png')
})

router.get('/webptomp4', async (req, res, next) => {
        var apikeyInput = req.query.apikey
        url = req.query.url
            
	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
	if(!url) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter url"})

       fetch(encodeURI(`http://zekais-api.herokuapp.com/webptomp4?url=${url}`))
        .then(response => response.json())
        .then(data => {
        var result = data.result;
             res.json({
             	author: 'Sadboy.edtz',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/pngtowebp', async (req, res, next) => {
        var apikeyInput = req.query.apikey
        url = req.query.url
            
	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
	if(!url) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter url"})

       fetch(encodeURI(`http://zekais-api.herokuapp.com/pngtowebp?url=${url}`))
        .then(response => response.json())
        .then(data => {
        var result = data.result;
             res.json({
             	author: 'Sadboy.edtz',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/spamsms', async (req, res, next) => {
        var apikeyInput = req.query.apikey
        no = req.query.no
            
	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
	if(!no) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter url"})

       fetch(encodeURI(`http://docs-jojo.herokuapp.com/api/spamsms?no=${no}&jum=100`))
        .then(response => response.json())
        .then(data => {
        var result = data.result;
             res.json({
             	author: 'Sadboy.edtz',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/emoji', async (req, res) => {
	var apikeyInput = req.query.apikey,
	emoji = req.query.emoji
	
	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
	if(!emoji) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter emoji"})
	
      hasil = (`http://zekais-api.herokuapp.com/emoji?unicode=${emoji}`)
     data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync('heker.png', data)
        res.sendFile(__path+'/heker.png')
})

router.get('/halah', async (req, res, next) => {
        var apikeyInput = req.query.apikey
        text = req.query.text
            
	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
	if(!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter kata"})

       fetch(encodeURI(`https://hadi-api.herokuapp.com/api/halah?teks=${text}`))
        .then(response => response.json())
        .then(data => {
        var result = data.result
             res.json({
             	author: 'Sadboy.edtz',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/zodiak', async (req, res, next) => {
        var apikeyInput = req.query.apikey
        text = req.query.text
            
	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
	if(!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter kata"})

       fetch(encodeURI(`https://h4ck3rs404-api.herokuapp.com/api/zodiak?zodiak=${text}&apikey=404Api`))
        .then(response => response.json())
        .then(data => {
        var result = data.result
             res.json({
             	author: 'Sadboy.edtz',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/hilih', async (req, res, next) => {
        var apikeyInput = req.query.apikey
        text = req.query.text
            
	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
	if(!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter kata"})

       fetch(encodeURI(`https://hadi-api.herokuapp.com/api/hilih?teks=${text}`))
        .then(response => response.json())
        .then(data => {
        var result = data.result;
             res.json({
             	author: 'Sadboy.edtz',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/heleh', async (req, res, next) => {
        var apikeyInput = req.query.apikey
        text = req.query.text
            
	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
	if(!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter kata"})

       fetch(encodeURI(`https://hadi-api.herokuapp.com/api/heleh?teks=${text}`))
        .then(response => response.json())
        .then(data => {
        var result = data.result;
             res.json({
             	author: 'Sadboy.edtz',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/cekjodoh', async (req, res, next) => {
        var apikeyInput = req.query.apikey
        text = req.query.text
        text2 = req.query.text2
            
	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
	if(!text && text2) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text & text2"})

       fetch(encodeURI(`http://hadi-api.herokuapp.com/api/pasangan?nama=${text}&nama2=${text}`))
        .then(response => response.json())
        .then(data => {
        var result = data.result;
             res.json({
             	author: 'Sadboy.edtz',
              result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/font', async (req, res, next) => {
        var apikeyInput = req.query.apikey
        text = req.query.text
            
	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
	if(!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter kata"})

       fetch(encodeURI(`https://hadi-api.herokuapp.com/api/font2?teks=${text}`))
        .then(response => response.json())
        .then(data => {
        var result = data.result;
             res.json({
             	author: 'Sadboy.edtz',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/font2', async (req, res, next) => {
        var apikeyInput = req.query.apikey
        text = req.query.text
            
	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
	if(!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter kata"})

       fetch(encodeURI(`https://hadi-api.herokuapp.com/api/font?teks=${text}`))
        .then(response => response.json())
        .then(data => {
        var result = data.result;
             res.json({
             	author: 'Sadboy.edtz',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/wallpaper/anony', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://raw.githubusercontent.com/binjaicity/warga62/master/anony.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	author: 'Sadboy.edtz',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/wallpaper/joker', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://raw.githubusercontent.com/binjaicity/warga62/master/joker.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	author: 'Sadboy.edtz',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/wallpaper/hijaber', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://raw.githubusercontent.com/binjaicity/warga62/master/hijaber.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	author: 'Sadboy.edtz',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/wallpaper/cecans', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://raw.githubusercontent.com/binjaicity/warga62/master/cecan.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	author: 'Sadboy.edtz',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/wallpaper/cogans', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://api.fdci.se/rep.php?gambar=cowokganteng`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	author: 'Sadboy.edtz',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/wallpaper/harley', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://raw.githubusercontent.com/binjaicity/warga62/master/harley.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	author: 'Sadboy.edtz',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/asupan', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://raw.githubusercontent.com/binjaicity/warga62/master/asupan.js`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	author: 'BambangGans',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/rikagusriani', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://raw.githubusercontent.com/binjaicity/warga62/master/asupan/rikagusriani.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	author: 'BambangGans',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/asupan/santuy', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://raw.githubusercontent.com/binjaicity/warga62/master/santuy.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	author: 'BambangGans',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/ukty', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://raw.githubusercontent.com/binjaicity/warga62/master/ukhty.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	author: 'BambangGans',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/bocil', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://raw.githubusercontent.com/binjaicity/warga62/master/bocil.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	author: 'BambangGans',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/ghea', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://raw.githubusercontent.com/binjaicity/warga62/master/geayubi.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	author: 'BambangGans',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/textmaker/banner', async (req, res, next) => {
        var theme = req.query.theme,
             text = req.query.text,
             text2 = req.query.text2,
             text3 = req.query.text3,
             apikeyInput = req.query.apikey;
        
	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
        if (!theme) return res.json(loghandler.nottheme)
        if (theme != 'typography' && theme != 'pokemon') return res.json(loghandler.notheme)
        if (!text) return res.json(loghandler.nottext)

        if (theme == 'typography') {
            try {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/create-a-layered-leaves-typography-text-effect-354.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                    delete_url = data.data.delete_url;
                                        res.json({
                                            creator : `${creator}`,
                                            result:{
                                                url:urlnya,
                                            }
                                        })
                                })
                        })
                    }
                })
                } catch (e) {
                	console.log(e);
                res.json(loghandler.error)
                }
        } else if (theme == 'avatarlol') {
            request.post({
                url: "https://photooxy.com/league-of-kings/cool-league-of-kings-avatar-153.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                    delete_url = data.data.delete_url;
                                        res.json({
                                            creator : `${creator}`,
                                            result:{
                                                url:urlnya,
                                            }
                                        })
                                })
                        })
                    }
                }) 
        } else {
            res.json(loghandler.error)
        }
})

router.get('/textmaker/banner', async (req, res, next) => {
        var theme = req.query.theme,
             text = req.query.text,
             text2 = req.query.text2,
             text3 = req.query.text3,
             apikeyInput = req.query.apikey;
        
	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
        if (!theme) return res.json(loghandler.nottheme)
        if (theme != 'boom' && theme != 'wings') return res.json(loghandler.notheme)
        if (!text) return res.json(loghandler.nottext)

        if (theme == 'boom') {
            try {
            request.post({
                url: "https://en.ephoto360.com/boom-text-comic-style-text-effect-675.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=GO`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://en.ephoto360.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                    delete_url = data.data.delete_url;
                                        res.json({
                                            creator : `${creator}`,
                                            result:{
                                                url:urlnya,
                                            }
                                        })
                                })
                        })
                    }
                })
                } catch (e) {
                	console.log(e);
                res.json(loghandler.error)
                }
        } else if (theme == 'wings') {
            request.post({
                url: "https://en.ephoto360.com/neon-devil-wings-text-effect-online-683.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=GO`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://en.ephoto360.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                    delete_url = data.data.delete_url;
                                        res.json({
                                            creator : `${creator}`,
                                            result:{
                                                url:urlnya,
                                            }
                                        })
                                })
                        })
                    }
                }) 
        } else {
            res.json(loghandler.error)
        }
})

router.get('/textmaker/banner', async (req, res, next) => {
        var theme = req.query.theme,
             text = req.query.text,
             text2 = req.query.text2,
             text3 = req.query.text3,
             apikeyInput = req.query.apikey;
        
	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
        if (!theme) return res.json(loghandler.nottheme)
        if (theme != 'naruto' && theme != 'pokemon') return res.json(loghandler.notheme)
        if (!text) return res.json(loghandler.nottext)

        if (theme == 'naruto') {
            try {
            request.post({
                url: "https://photooxy.com/manga-and-anime/make-naruto-banner-online-free-378.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                    delete_url = data.data.delete_url;
                                        res.json({
                                            creator : `${creator}`,
                                            result:{
                                                url:urlnya,
                                            }
                                        })
                                })
                        })
                    }
                })
                } catch (e) {
                	console.log(e);
                res.json(loghandler.error)
                }
        } else if (theme == 'pokemon') {
            request.post({
                url: "https://photooxy.com/movies/make-pokemon-wallpaper-with-your-name-149.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                    delete_url = data.data.delete_url;
                                        res.json({
                                            creator : `${creator}`,
                                            result:{
                                                url:urlnya,
                                            }
                                        })
                                })
                        })
                    }
                }) 
        } else {
            res.json(loghandler.error)
        }
})

router.get('/textmaker/romatic', async (req, res, next) => {
        var theme = req.query.theme,
             text = req.query.text,
             text2 = req.query.text2,
             text3 = req.query.text3,
             apikeyInput = req.query.apikey;
        
	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
        if (!theme) return res.json(loghandler.nottheme)
        if (theme != 'roman' && theme != 'paper') return res.json(loghandler.notheme)
        if (!text) return res.json(loghandler.nottext)

        if (theme == 'roman') {
            try {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/romantic-messages-for-your-loved-one-391.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                    delete_url = data.data.delete_url;
                                        res.json({
                                            creator : `${creator}`,
                                            result:{
                                                url:urlnya,
                                            }
                                        })
                                })
                        })
                    }
                })
                } catch (e) {
                	console.log(e);
                res.json(loghandler.error)
                }
        } else if (theme == 'paper') {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/write-text-on-burn-paper-388.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                    delete_url = data.data.delete_url;
                                        res.json({
                                            creator : `${creator}`,
                                            result:{
                                                url:urlnya,
                                            }
                                        })
                                })
                        })
                    }
                }) 
        } else {
            res.json(loghandler.error)
        }
})

router.get('/textmaker/love', async (req, res, next) => {
        var theme = req.query.theme,
             text = req.query.text,
             text2 = req.query.text2,
             text3 = req.query.text3,
             apikeyInput = req.query.apikey;
        
	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
        if (!theme) return res.json(loghandler.nottheme)
        if (theme != 'lovemaker' && theme != 'under') return res.json(loghandler.notheme)
        if (!text) return res.json(loghandler.nottext)

        if (theme == 'lovemaker') {
            try {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/create-a-picture-of-love-message-377.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                    delete_url = data.data.delete_url;
                                        res.json({
                                            creator : `${creator}`,
                                            result:{
                                                url:urlnya,
                                            }
                                        })
                                })
                        })
                    }
                })
                } catch (e) {
                	console.log(e);
                res.json(loghandler.error)
                }
        } else if (theme == 'under') {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/make-quotes-under-grass-376.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                    delete_url = data.data.delete_url;
                                        res.json({
                                            creator : `${creator}`,
                                            result:{
                                                url:urlnya,
                                            }
                                        })
                                })
                        })
                    }
                }) 
        } else {
            res.json(loghandler.error)
        }
})

router.get('/textmaker/logo', async (req, res, next) => {
        var theme = req.query.theme,
             text = req.query.text,
             text2 = req.query.text2,
             text3 = req.query.text3,
             apikeyInput = req.query.apikey;
        
	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
        if (!theme) return res.json(loghandler.nottheme)
        if (theme != 'metal' && theme != 'underwater') return res.json(loghandler.notheme)
        if (!text) return res.json(loghandler.nottext)

        if (theme == 'metal') {
            try {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/create-a-wolf-metal-text-effect-365.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                    delete_url = data.data.delete_url;
                                        res.json({
                                            creator : `${creator}`,
                                            result:{
                                                url:urlnya,
                                            }
                                        })
                                })
                        })
                    }
                })
                } catch (e) {
                	console.log(e);
                res.json(loghandler.error)
                }
        } else if (theme == 'underwater') {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/creating-an-underwater-ocean-363.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                    delete_url = data.data.delete_url;
                                        res.json({
                                            creator : `${creator}`,
                                            result:{
                                                url:urlnya,
                                            }
                                        })
                                })
                        })
                    }
                }) 
        } else {
            res.json(loghandler.error)
        }
})

router.get('/textmaker/payo', async (req, res, next) => {
        var theme = req.query.theme,
             text = req.query.text,
             text2 = req.query.text2,
             text3 = req.query.text3,
             apikeyInput = req.query.apikey;
        
	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
        if (!theme) return res.json(loghandler.nottheme)
        if (theme != 'night' && theme != 'flaming') return res.json(loghandler.notheme)
        if (!text) return res.json(loghandler.nottext)

        if (theme == 'night') {
            try {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/write-stars-text-on-the-night-sky-200.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                    delete_url = data.data.delete_url;
                                        res.json({
                                            creator : `${creator}`,
                                            result:{
                                                url:urlnya,
                                            }
                                        })
                                })
                        })
                    }
                })
                } catch (e) {
                	console.log(e);
                res.json(loghandler.error)
                }
        } else if (theme == 'flaming') {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/realistic-flaming-text-effect-online-197.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                    delete_url = data.data.delete_url;
                                        res.json({
                                            creator : `${creator}`,
                                            result:{
                                                url:urlnya,
                                            }
                                        })
                                })
                        })
                    }
                }) 
        } else {
            res.json(loghandler.error)
        }
})

router.get('/textmaker/hayo', async (req, res, next) => {
        var theme = req.query.theme,
             text = req.query.text,
             text2 = req.query.text2,
             text3 = req.query.text3,
             apikeyInput = req.query.apikey;
        
	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
        if (!theme) return res.json(loghandler.nottheme)
        if (theme != 'semongko' && theme != 'matrix') return res.json(loghandler.notheme)
        if (!text) return res.json(loghandler.nottext)

        if (theme == 'semongko') {
            try {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/watermelon-text-style-186.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                    delete_url = data.data.delete_url;
                                        res.json({
                                            creator : `${creator}`,
                                            result:{
                                                url:urlnya,
                                            }
                                        })
                                })
                        })
                    }
                })
                } catch (e) {
                	console.log(e);
                res.json(loghandler.error)
                }
        } else if (theme == 'matrix') {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/text-under-web-matrix-effect-185.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                    delete_url = data.data.delete_url;
                                        res.json({
                                            creator : `${creator}`,
                                            result:{
                                                url:urlnya,
                                            }
                                        })
                                })
                        })
                    }
                }) 
        } else {
            res.json(loghandler.error)
        }
})

router.get('/textmaker/harry', async (req, res, next) => {
        var theme = req.query.theme,
             text = req.query.text,
             text2 = req.query.text2,
             text3 = req.query.text3,
             apikeyInput = req.query.apikey;
        
	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
        if (!theme) return res.json(loghandler.nottheme)
        if (theme != 'potter' && theme != 'horor') return res.json(loghandler.notheme)
        if (!text) return res.json(loghandler.nottext)

        if (theme == 'potter') {
            try {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/create-harry-potter-text-on-horror-background-178.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                    delete_url = data.data.delete_url;
                                        res.json({
                                            creator : `${creator}`,
                                            result:{
                                                url:urlnya,
                                            }
                                        })
                                })
                        })
                    }
                })
                } catch (e) {
                	console.log(e);
                res.json(loghandler.error)
                }
        } else if (theme == 'horor') {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/text-on-scary-cemetery-gate-172.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                    delete_url = data.data.delete_url;
                                        res.json({
                                            creator : `${creator}`,
                                            result:{
                                                url:urlnya,
                                            }
                                        })
                                })
                        })
                    }
                }) 
        } else {
            res.json(loghandler.error)
        }
})

router.get('/textmaker/asap', async (req, res, next) => {
        var theme = req.query.theme,
             text = req.query.text,
             text2 = req.query.text2,
             text3 = req.query.text3,
             apikeyInput = req.query.apikey;
        
	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
        if (!theme) return res.json(loghandler.nottheme)
        if (theme != 'smoke' && theme != 'betwen') return res.json(loghandler.notheme)
        if (!text) return res.json(loghandler.nottext)

        if (theme == 'smoke') {
            try {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/smoke-typography-text-effect-170.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                    delete_url = data.data.delete_url;
                                        res.json({
                                            creator : `${creator}`,
                                            result:{
                                                url:urlnya,
                                            }
                                        })
                                })
                        })
                    }
                })
                } catch (e) {
                	console.log(e);
                res.json(loghandler.error)
                }
        } else if (theme == 'betwen') {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/bevel-text-between-royal-patterns-166.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                    delete_url = data.data.delete_url;
                                        res.json({
                                            creator : `${creator}`,
                                            result:{
                                                url:urlnya,
                                            }
                                        })
                                })
                        })
                    }
                }) 
        } else {
            res.json(loghandler.error)
        }
})

router.get('/textmaker/langit', async (req, res, next) => {
        var theme = req.query.theme,
             text = req.query.text,
             text2 = req.query.text2,
             text3 = req.query.text3,
             apikeyInput = req.query.apikey;
        
	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
        if (!theme) return res.json(loghandler.nottheme)
        if (theme != 'awan' && theme != 'write') return res.json(loghandler.notheme)
        if (!text) return res.json(loghandler.nottext)

        if (theme == 'awan') {
            try {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/shadow-text-effect-in-the-sky-394.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                    delete_url = data.data.delete_url;
                                        res.json({
                                            creator : `${creator}`,
                                            result:{
                                                url:urlnya,
                                            }
                                        })
                                })
                        })
                    }
                })
                } catch (e) {
                	console.log(e);
                res.json(loghandler.error)
                }
        } else if (theme == 'write') {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/write-text-on-the-cup-392.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                    delete_url = data.data.delete_url;
                                        res.json({
                                            creator : `${creator}`,
                                            result:{
                                                url:urlnya,
                                            }
                                        })
                                })
                        })
                    }
                }) 
        } else {
            res.json(loghandler.error)
        }
})



router.get('/textmaker/poter', async (req, res, next) => {
        var theme = req.query.theme,
             text = req.query.text,
             text2 = req.query.text2,
             text3 = req.query.text3,
             apikeyInput = req.query.apikey;
        
	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
        if (!theme) return res.json(loghandler.nottheme)
        if (theme != 'harry' && theme != 'smoke') return res.json(loghandler.notheme)
        if (!text) return res.json(loghandler.nottext)

        if (theme == 'harry') {
            try {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/create-harry-potter-text-on-horror-background-178.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            status : true,
                                            creator : `${creator}`,
                                            message : `jangan lupa follow ${creator}`,
                                            result:{
                                                url:urlnya,
                                                delete_url: delete_url,
                                                info: 'url akan hilang setelah 2 menit'
                                            }
                                        })
                                })
                        })
                    }
                })
                } catch (e) {
                	console.log(e);
                res.json(loghandler.error)
                }
        } else if (theme == 'smoke') {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/smoke-typography-text-effect-170.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            status : true,
                                            creator : `${creator}`,
                                            message : `jangan lupa follow ${creator}`,
                                            result:{
                                                url:urlnya,
                                                delete_url: delete_url,
                                                info: 'url akan hilang setelah 2 menit'
                                            }
                                        })
                                })
                        })
                    }
                }) 
        } else {
            res.json(loghandler.error)
        }
})



router.get('/ephoto3', async (req, res, next) => {
        var theme = req.query.theme,
             text = req.query.text,
             text2 = req.query.text2,
             text3 = req.query.text3,
             apikeyInput = req.query.apikey;
        
	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
        if (!theme) return res.json(loghandler.nottheme)
        if (theme != 'kaca' && theme != 'paper') return res.json(loghandler.notheme)
        if (!text) return res.json(loghandler.nottext)

        if (theme == 'kaca') {
            try {
            request.post({
                url: "https://en.ephoto360.com/write-text-on-wet-glass-online-589.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&submit=GO`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://en.ephoto360.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                    delete_url = data.data.delete_url;
                                        res.json({
                                            creator : `${creator}`,
                                            result:{
                                                url:urlnya,
                                            }
                                        })
                                })
                        })
                    }
                })
                } catch (e) {
                	console.log(e);
                res.json(loghandler.error)
                }
        } else if (theme == 'paper') {
            request.post({
                url: "https://en.ephoto360.com/multicolor-3d-paper-cut-style-text-effect-658.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=GO`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://en.ephoto360.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                    delete_url = data.data.delete_url;
                                        res.json({
                                            creator : `${creator}`,
                                            result:{
                                                url:urlnya,
                                            }
                                        })
                                })
                        })
                    }
                }) 
        } else {
            res.json(loghandler.error)
        }
})

router.get('/ephoto2', async (req, res, next) => {
        var theme = req.query.theme,
             text = req.query.text,
             text2 = req.query.text2,
             text3 = req.query.text3,
             apikeyInput = req.query.apikey;
        
	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
        if (!theme) return res.json(loghandler.nottheme)
        if (theme != 'skytext' && theme != 'bordirtext') return res.json(loghandler.notheme)
        if (!text) return res.json(loghandler.nottext)

        if (theme == 'skytext') {
            try {
            request.post({
                url: "https://en.ephoto360.com/write-text-effect-clouds-in-the-sky-online-619.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&submit=GO`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://en.ephoto360.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                    delete_url = data.data.delete_url;
                                        res.json({
                                            creator : `${creator}`,
                                            result:{
                                                url:urlnya,
                                            }
                                        })
                                })
                        })
                    }
                })
                } catch (e) {
                	console.log(e);
                res.json(loghandler.error)
                }
        } else if (theme == 'bordirtext') {
            request.post({
                url: "https://en.ephoto360.com/create-a-realistic-embroidery-text-effect-online-662.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=GO`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://en.ephoto360.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                    delete_url = data.data.delete_url;
                                        res.json({
                                            creator : `${creator}`,
                                            result:{
                                                url:urlnya,
                                            }
                                        })
                                })
                        })
                    }
                }) 
        } else {
            res.json(loghandler.error)
        }
})

router.get('/ephoto', async (req, res, next) => {
        var theme = req.query.theme,
             text = req.query.text,
             text2 = req.query.text2,
             text3 = req.query.text3,
             apikeyInput = req.query.apikey;
        
	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
        if (!theme) return res.json(loghandler.nottheme)
        if (theme != 'wetglass' && theme != 'pornhub') return res.json(loghandler.notheme)
        if (!text) return res.json(loghandler.nottext)

        if (theme == 'kaca') {
            try {
            request.post({
                url: "https://en.ephoto360.com/write-text-on-wet-glass-online-589.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&submit=GO`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://en.ephoto360.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                    delete_url = data.data.delete_url;
                                        res.json({
                                            creator : `${creator}`,
                                            result:{
                                                url:urlnya,
                                            }
                                        })
                                })
                        })
                    }
                })
                } catch (e) {
                	console.log(e);
                res.json(loghandler.error)
                }
        } else if (theme == 'pornhub') {
            	if (!text2) return res.json(loghandler.nottext2)
            request.post({
                url: "https://textpro.me/pornhub-style-logo-online-generator-free-977.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&text_2=${text2}&login=GO`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://textpro.me/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                    delete_url = data.data.delete_url;
                                        res.json({
                                            creator : `${creator}`,
                                            result:{
                                                url:urlnya,
                                            }
                                        })
                                })
                        })
                    }
                }) 
        } else {
            res.json(loghandler.error)
        }
})

router.get('/textmaker/langit', async (req, res, next) => {
        var theme = req.query.theme,
             text = req.query.text,
             text2 = req.query.text2,
             text3 = req.query.text3,
             apikeyInput = req.query.apikey;
        
	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
        if (!theme) return res.json(loghandler.nottheme)
        if (theme != 'shadow' && theme != 'write') return res.json(loghandler.notheme)
        if (!text) return res.json(loghandler.nottext)

        if (theme == 'shadow') {
            try {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/shadow-text-effect-in-the-sky-394.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            status : true,
                                            creator : `${creator}`,
                                            message : `jangan lupa follow ${creator}`,
                                            result:{
                                                url:urlnya,
                                                delete_url: delete_url,
                                                info: 'url akan hilang setelah 2 menit'
                                            }
                                        })
                                })
                        })
                    }
                })
                } catch (e) {
                	console.log(e);
                res.json(loghandler.error)
                }
        } else if (theme == 'write') {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/write-text-on-the-cup-392.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            status : true,
                                            creator : `${creator}`,
                                            message : `jangan lupa follow ${creator}`,
                                            result:{
                                                url:urlnya,
                                                delete_url: delete_url,
                                                info: 'url akan hilang setelah 2 menit'
                                            }
                                        })
                                })
                        })
                    }
                }) 
        } else {
            res.json(loghandler.error)
        }
})

router.get('/textmaker/love', async (req, res, next) => {
        var theme = req.query.theme,
             text = req.query.text,
             text2 = req.query.text2,
             text3 = req.query.text3,
             apikeyInput = req.query.apikey;
        
	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
        if (!theme) return res.json(loghandler.nottheme)
        if (theme != 'lovemaker' && theme != 'logo') return res.json(loghandler.notheme)
        if (!text) return res.json(loghandler.nottext)

        if (theme == 'lovemaker') {
            try {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/create-a-picture-of-love-message-377.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            status : true,
                                            creator : `${creator}`,
                                            message : `jangan lupa follow ${creator}`,
                                            result:{
                                                url:urlnya,
                                                delete_url: delete_url,
                                                info: 'url akan hilang setelah 2 menit'
                                            }
                                        })
                                })
                        })
                    }
                })
                } catch (e) {
                	console.log(e);
                res.json(loghandler.error)
                }
        } else if (theme == 'logo') {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/create-a-wolf-metal-text-effect-365.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            status : true,
                                            creator : `${creator}`,
                                            message : `jangan lupa follow ${creator}`,
                                            result:{
                                                url:urlnya,
                                                delete_url: delete_url,
                                                info: 'url akan hilang setelah 2 menit'
                                            }
                                        })
                                })
                        })
                    }
                }) 
        } else {
            res.json(loghandler.error)
        }
})


router.get('/katasenja', async (req, res, next) => {
        var apikeyInput = req.query.apikey

	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://pencarikode.xyz/api/katasenja?apikey=Tester`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
               Author : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/bacakomik', async (req, res, next) => {
        var apikeyInput = req.query.apikey
                  text = req.query.text
                  
	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
  if(!text) return res.json(loghandler.nottext)
  
       fetch(encodeURI(`https://api.zeks.xyz/api/bacakomik?apikey=apivinz&q=${text}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
               Author : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/simsimi', async (req, res, next) => {
        var apikeyInput = req.query.apikey
         text = req.query.text
         
	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
  if(!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})

       fetch(encodeURI(`https://h4ck3rs404-api.herokuapp.com/api/simsimi?text=${text}&apikey=404Api`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/listhero', async (req, res, next) => {
        var apikeyInput = req.query.apikey
         
	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://h4ck3rs404-api.herokuapp.com/api/heroml/list?apikey=404Api`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/katailham', async (req, res, next) => {
        var apikeyInput = req.query.apikey

	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://h4ck3rs404-api.herokuapp.com/api/katailham?apikey=404Api`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
               author : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/nickff', async (req, res, next) => {
        var apikeyInput = req.query.apikey

	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://h4ck3rs404-api.herokuapp.com/api/nickepep?apikey=404Api`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
               Author : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/igstory', async (req, res, next) => {
        var apikeyInput = req.query.apikey

	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`http://docs-jojo.herokuapp.com/api/igstory?username=sadboy.edtz`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/ttp', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
                   text = req.query.text;

	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
  if(!text) return res.json(loghandler.nottext)
      hasil = (`https://h4ck3rs404-api.herokuapp.com/api/ttp?text=${text}&apikey=404Api`)
     data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync('ttp.png', data)
        res.sendFile(__path+'/ttp.png')
})

router.get('/attp', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
                   text = req.query.text;

	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
  if(!text) return res.json(loghandler.nottext)
       hasil = (`https://h4ck3rs404-api.herokuapp.com/api/attp?text=${text}&apikey=404Api`)
     data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync('attp.png', data)
        res.sendFile(__path+'/attp.png')
})
         
router.get('/ucapan', async (req, res, next) => {
        var apikeyInput = req.query.apikey

	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://xinzbot-api.herokuapp.com/api/ucapan?apikey=XinzBot&timeZone=Asia/Jakarta`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
               Author : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/ramadhan', async (req, res, next) => {
        var apikeyInput = req.query.apikey

	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://xinzbot-api.herokuapp.com/api/hitungmundur?apikey=XinzBot&tanggal=12&bulan=4`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                Author : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/hurufterbalik', async (req, res, next) => {
        var apikeyInput = req.query.apikey

	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://videfikri.com/api/hurufterbalik/?query=Bambang`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                Author : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/shopee', async (req, res, next) => {
        var apikeyInput = req.query.apikey
                   
                   
	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://h4ck3rs404-api.herokuapp.com/api/shopee?q=HP&apikey=404Api`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/mediafire', async (req, res, next) => {
    var apikeyInput = req.query.apikey,
        url = req.query.url


	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
     if (!url) return res.json(loghandler.noturl)

     fetch(encodeURI(`https://h4ck3rs404-api.herokuapp.com/api/mediafire?url=${url}&apikey=404Api`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/soundcloud', async (req, res, next) => {
    var apikeyInput = req.query.apikey,
        url = req.query.url


	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
     if (!url) return res.json(loghandler.noturl)

     fetch(encodeURI(`https://api.zeks.xyz/api/soundcloud?apikey=apivinz&url=${url}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/igdownloader', async (req, res, next) => {
    var apikeyInput = req.query.apikey,
        url = req.query.url


	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
     if (!url) return res.json(loghandler.noturl)

     fetch(encodeURI(`https://h4ck3rs404-api.herokuapp.com/api/igdow/?url=${url}&apikey=404Api`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/darkneon', async (req, res, next) => {
	var apikeyInput = req.query.apikey,
            text = req.query.text

	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
    if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})

       hasil = (`https://videfikri.com/api/textmaker/darkneon/?text=${text}`)
     data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync('darkneon.png', data)
        res.sendFile(__path+'/darkneon.png')
})

 router.get('/bannernaruto', async (req, res, next) => {
	var apikeyInput = req.query.apikey,
            text = req.query.text

	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
    if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})

       hasil = (`http://hadi-api.herokuapp.com/api/photoxy/manga-naruto?teks=${text}`)
     data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync('bannernaruto.png', data)
        res.sendFile(__path+'/bannernaruto.png')
})
                
  router.get('/sky', async (req, res, next) => {
	var apikeyInput = req.query.apikey,
            text = req.query.text

	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
    if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})

       fetch(encodeURI(`https://api.zeks.xyz/api/skytext?text=${text}&apikey=apivinz`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})
                
 router.get('/pornhub', async (req, res, next) => {
	var apikeyInput = req.query.apikey,
            text = req.query.text
            text2 = req.query.text2
            
	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
    if (!text && !text2) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})

       hasil = (`https://api.zeks.xyz/api/phlogo?text1=${text}&text2=${text2}&apikey=apivinz`)
     data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync('pornhub.png', data)
        res.sendFile(__path+'/pornhub.png')
})                 
                
router.get('/hartatahta', async (req, res, next) => {
	var apikeyInput = req.query.apikey,
            text = req.query.text

	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
    if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})

       hasil = (`https://h4ck3rs404-api.herokuapp.com/api/hartatahta?text=${text}&apikey=404Api`)
     data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync('hartatahta.png', data)
        res.sendFile(__path+'/hartatahta.png')
})

router.get('/snow3d', async (req, res, next) => {
	var apikeyInput = req.query.apikey,
            text = req.query.text

	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
    if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})

       hasil = (`http://akirainfo.site/snow3d?apikey=KazuyaBot&text=${text}`)
     data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync('hartatahta.png', data)
        res.sendFile(__path+'/hartatahta.png')
})

router.get('/wooden3d', async (req, res, next) => {
	var apikeyInput = req.query.apikey,
            text = req.query.text

	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
    if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})

       hasil = (`http://akirainfo.site/wooden3d?apikey=KazuyaBot&text=${text}`)
     data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync('hartatahta.png', data)
        res.sendFile(__path+'/hartatahta.png')
})

router.get('/noel3d', async (req, res, next) => {
	var apikeyInput = req.query.apikey,
            text = req.query.text

	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
    if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})

       hasil = (`http://akirainfo.site/noel3d?apikey=KazuyaBot&text=${text}`)
     data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync('hartatahta.png', data)
        res.sendFile(__path+'/hartatahta.png')
})

router.get('/neon3d', async (req, res, next) => {
	var apikeyInput = req.query.apikey,
            text = req.query.text

	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
    if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})

       hasil = (`http://akirainfo.site/neon3d?apikey=KazuyaBot&text=${text}`)
     data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync('hartatahta.png', data)
        res.sendFile(__path+'/hartatahta.png')
})

router.get('/luxury3d', async (req, res, next) => {
	var apikeyInput = req.query.apikey,
            text = req.query.text

	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
    if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})

       hasil = (`http://akirainfo.site/luxury3d?apikey=KazuyaBot&text=${text}`)
     data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync('hartatahta.png', data)
        res.sendFile(__path+'/hartatahta.png')
})

router.get('/minion3d', async (req, res, next) => {
	var apikeyInput = req.query.apikey,
            text = req.query.text

	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
    if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})

       hasil = (`http://akirainfo.site/minion3d?apikey=KazuyaBot&text=${text}`)
     data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync('hartatahta.png', data)
        res.sendFile(__path+'/hartatahta.png')
})

router.get('/sand2d', async (req, res, next) => {
	var apikeyInput = req.query.apikey,
            text = req.query.text

	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
    if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})

       hasil = (`http://akirainfo.site/sand2d?apikey=KazuyaBot&text=${text}`)
     data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync('hartatahta.png', data)
        res.sendFile(__path+'/hartatahta.png')
})

router.get('/neon2d', async (req, res, next) => {
	var apikeyInput = req.query.apikey,
            text = req.query.text

	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
    if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})

       hasil = (`http://akirainfo.site/neon2d?apikey=KazuyaBot&text=${text}`)
     data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync('hartatahta.png', data)
        res.sendFile(__path+'/hartatahta.png')
})

router.get('/glow2d', async (req, res, next) => {
	var apikeyInput = req.query.apikey,
            text = req.query.text

	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
    if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})

       hasil = (`http://akirainfo.site/glow2d?apikey=KazuyaBot&text=${text}`)
     data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync('hartatahta.png', data)
        res.sendFile(__path+'/hartatahta.png')
})

router.get('/stars2d', async (req, res, next) => {
	var apikeyInput = req.query.apikey,
            text = req.query.text

	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
    if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})

       hasil = (`http://akirainfo.site/stars2d?apikey=KazuyaBot&text=${text}`)
     data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync('hartatahta.png', data)
        res.sendFile(__path+'/hartatahta.png')
})

router.get('/holography2d', async (req, res, next) => {
	var apikeyInput = req.query.apikey,
            text = req.query.text

	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
    if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})

       hasil = (`http://akirainfo.site/holography2d?apikey=KazuyaBot&text=${text}`)
     data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync('hartatahta.png', data)
        res.sendFile(__path+'/hartatahta.png')
})

router.get('/galaxy2d', async (req, res, next) => {
	var apikeyInput = req.query.apikey,
            text = req.query.text

	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
    if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})

       hasil = (`http://akirainfo.site/galaxy2d?apikey=KazuyaBot&text=${text}`)
     data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync('hartatahta.png', data)
        res.sendFile(__path+'/hartatahta.png')
})

router.get('/leavtext2d', async (req, res, next) => {
	var apikeyInput = req.query.apikey,
            text = req.query.text

	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
    if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})

       hasil = (`http://akirainfo.site/leaftext2d?apikey=KazuyaBot&text=${text}`)
     data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync('hartatahta.png', data)
        res.sendFile(__path+'/hartatahta.png')
})

router.get('/hologram3d', async (req, res, next) => {
	var apikeyInput = req.query.apikey,
            text = req.query.text

	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
    if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})

       hasil = (`http://akirainfo.site/hologram3d?apikey=KazuyaBot&text=${text}`)
     data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync('hartatahta.png', data)
        res.sendFile(__path+'/hartatahta.png')
})

router.get('/box3d', async (req, res, next) => {
	var apikeyInput = req.query.apikey,
            text = req.query.text

	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
    if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})

       hasil = (`http://akirainfo.site/box3d?apikey=KazuyaBot&text=${text}`)
     data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync('hartatahta.png', data)
        res.sendFile(__path+'/hartatahta.png')
})

router.get('/futureneon', async (req, res, next) => {
	var apikeyInput = req.query.apikey,
            text = req.query.text

	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
    if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})

       hasil = (`http://akirainfo.site/futureneon?apikey=KazuyaBot&text=${text}`)
     data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync('hartatahta.png', data)
        res.sendFile(__path+'/hartatahta.png')
})

router.get('/futureneon2', async (req, res, next) => {
	var apikeyInput = req.query.apikey,
            text = req.query.text

	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
    if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})

       hasil = (`http://akirainfo.site/futureneon2?apikey=KazuyaBot&text=${text}`)
     data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync('hartatahta.png', data)
        res.sendFile(__path+'/hartatahta.png')
})

router.get('/newyear', async (req, res, next) => {
	var apikeyInput = req.query.apikey,
            text = req.query.text

	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
    if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})

       hasil = (`http://akirainfo.site/newyear?apikey=KazuyaBot&text=${text}`)
     data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync('hartatahta.png', data)
        res.sendFile(__path+'/hartatahta.png')
})

router.get('/firework', async (req, res, next) => {
	var apikeyInput = req.query.apikey,
            text = req.query.text

	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
    if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})

       hasil = (`http://akirainfo.site/firework?apikey=KazuyaBot&text=${text}`)
     data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync('hartatahta.png', data)
        res.sendFile(__path+'/hartatahta.png')
})

router.get('/roadwarning', async (req, res, next) => {
	var apikeyInput = req.query.apikey,
            text = req.query.text

	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
    if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})

       hasil = (`http://akirainfo.site/roadwarning?apikey=KazuyaBot&text=${text}`)
     data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync('hartatahta.png', data)
        res.sendFile(__path+'/hartatahta.png')
})

router.get('/avenger', async (req, res, next) => {
	var apikeyInput = req.query.apikey,
            text = req.query.text
text2 = req.query.text2

	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
    if (!text && !text2) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})

       hasil = (`http://akirainfo.site/avenger?apikey=KazuyaBot&text=${text}&text2=${text2}`)
     data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync('hartatahta.png', data)
        res.sendFile(__path+'/hartatahta.png')
})

router.get('/marvel', async (req, res, next) => {
	var apikeyInput = req.query.apikey,
            text = req.query.text

	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
    if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})

       hasil = (`http://akirainfo.site/marvel?apikey=KazuyaBot&text=${text}&&text2=${text2}`)
     data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync('hartatahta.png', data)
        res.sendFile(__path+'/hartatahta.png')
})

router.get('/wolflogo', async (req, res, next) => {
	var apikeyInput = req.query.apikey,
            text = req.query.text
text2 = req.query.text2

	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
    if (!text && !text2) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})

       hasil = (`http://akirainfo.site/wolflogo?apikey=KazuyaBot&text1=${text1}&text2=${text2}`)
     data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync('hartatahta.png', data)
        res.sendFile(__path+'/hartatahta.png')
})

router.get('/blueneon', async (req, res, next) => {
	var apikeyInput = req.query.apikey,
            text = req.query.text

	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
    if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})

       hasil = (`http://akirainfo.site/blueneon?apikey=KazuyaBot&text=${text}`)
     data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync('hartatahta.png', data)
        res.sendFile(__path+'/hartatahta.png')
})

router.get('/jokerlogo', async (req, res, next) => {
	var apikeyInput = req.query.apikey,
            text = req.query.text
text2 = req.query.text2

	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
    if (!text && !text2) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})

       hasil = (`http://akirainfo.site/jokerlogo?apikey=KazuyaBot&text=${text}&text2=${text2}`)
     data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync('hartatahta.png', data)
        res.sendFile(__path+'/hartatahta.png')
})

router.get('/ninjalogo', async (req, res, next) => {
	var apikeyInput = req.query.apikey,
            text = req.query.text
text2 = req.query.text2

	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
    if (!text && !text2) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})

       hasil = (`http://akirainfo.site/ninjalogo?apikey=KazuyaBot&text=${text}&text2=${text2}`)
     data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync('hartatahta.png', data)
        res.sendFile(__path+'/hartatahta.png')
})

router.get('/halloween', async (req, res, next) => {
	var apikeyInput = req.query.apikey,
            text = req.query.text

	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
    if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})

       hasil = (`http://akirainfo.site/halloween?apikey=KazuyaBot&text=${text}`)
     data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync('hartatahta.png', data)
        res.sendFile(__path+'/hartatahta.png')
})

router.get('/cloudtext', async (req, res, next) => {
	var apikeyInput = req.query.apikey,
            text = req.query.text

	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
    if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})

       hasil = (`http://akirainfo.site/cloudtext?apikey=KazuyaBot&text=${text}`)
     data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync('hartatahta.png', data)
        res.sendFile(__path+'/hartatahta.png')
})

router.get('/pornhubc', async (req, res, next) => {
	var apikeyInput = req.query.apikey,
            text = req.query.text
        username = req.query.username
	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
    if (!text && !username) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text & Username"})

       hasil = (`https://api.zeks.xyz/api/phub?apikey=apivinz&img=https://1.bp.blogspot.com/-x8KhcOBG-yw/XiU4pi1yWVI/AAAAAAAADBA/gK8tsLyc1lQ808A348IKzDCjf6fUBKONwCLcBGAsYHQ/s1600/cara%2Bbuat%2Bfoto%2Bprofil%2Bdi%2Bwhatsapp%2Bmenjadi%2Bunik.jpg&username=${username}&msg=${text}`)
     data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync('hartatahta.png', data)
        res.sendFile(__path+'/hartatahta.png')
})

router.get('/steel', async (req, res, next) => {
	var apikeyInput = req.query.apikey,
            text = req.query.text
text2 = req.query.text2

	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
    if (!text && !text2) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})

       hasil = (`https://pencarikode.xyz/api/textpro/steel?text=${text}&text2=${text2}&apikey=Tester`)
     data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync('tahta.png', data)
        res.sendFile(__path+'/tahta.png')
})

router.get('/ttp2', async (req, res, next) => {
	var apikeyInput = req.query.apikey,
            text = req.query.text

	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
    if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})

       hasil = (`http://akirainfo.site/ttp2?apikey=KazuyaBot&text=${text}`)
     data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync('hartatahta.png', data)
        res.sendFile(__path+'/hartatahta.png')
})

router.get('/ttp3', async (req, res, next) => {
	var apikeyInput = req.query.apikey,
            text = req.query.text

	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
    if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})

       hasil = (`http://akirainfo.site/ttp3?apikey=KazuyaBot&text=${text}`)
     data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync('hartatahta.png', data)
        res.sendFile(__path+'/hartatahta.png')
})

router.get('/xmas', async (req, res, next) => {
	var apikeyInput = req.query.apikey,
            text = req.query.text

	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
    if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})

       hasil = (`https://pencarikode.xyz/api/textpro/xmas?text=${text}&apikey=Tester`)
     data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync('harta.png', data)
        res.sendFile(__path+'/harta.png')
})

router.get('/glosy', async (req, res, next) => {
	var apikeyInput = req.query.apikey,
            text = req.query.text

	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
    if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})

       hasil = (`https://pencarikode.xyz/api/textpro/glossy-carbon?text=${text}&apikey=Tester`)
     data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync('tahta.png', data)
        res.sendFile(__path+'/tahta.png')
})

router.get('/wicker', async (req, res, next) => {
	var apikeyInput = req.query.apikey,
            text = req.query.text

	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
    if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})

       hasil = (`https://pencarikode.xyz/api/textpro/wicker?text=${text}&apikey=Tester`)
     data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync('harta.png', data)
        res.sendFile(__path+'/harta.png')
})

router.get('/welcome', async (req, res, next) => {
	var apikeyInput = req.query.apikey,
            nama = req.query.nama
            gcname = req.query.gcname
            memcount = req.query.memcount

	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
    if (!nama && !gcname && !memcount) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text,nama dan gc name"})

       hasil = (`https://api-self.herokuapp.com/api/canvaswel?name=${nama}&img_url=https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfLO0ZiPJ3Ggjex3PqI00DGRhYVq_PgwbT8Q&usqp=CAU&gcname=${gcname}&jumlahmem=${memcount}`)
     data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync('hartatahta.png', data)
        res.sendFile(__path+'/hartatahta.png')
})

router.get('/goodbye', async (req, res, next) => {
	var apikeyInput = req.query.apikey,
            nama = req.query.nama
            gcname = req.query.gcname
            memcount = req.query.memcount

	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
    if (!nama && !gcname && !memcount) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text,nama dan gc name"})

       hasil = (`https://api-self.herokuapp.com/api/canvasbye?name=${nama}&img_url=https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfLO0ZiPJ3Ggjex3PqI00DGRhYVq_PgwbT8Q&usqp=CAU&gcname=${gcname}&jumlahmem=${memcount}`)
     data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync('hartatahta.png', data)
        res.sendFile(__path+'/hartatahta.png')
})

router.get('/holographic-3d', async (req, res, next) => {
	var apikeyInput = req.query.apikey,
            text = req.query.text
            
	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
    if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})

       hasil = (`https://h4ck3rs404-api.herokuapp.com/api/textprome/holographic-3d?text=${text}&apikey=404Api`)
     data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync('holographic-3d.png', data)
        res.sendFile(__path+'/holographic-3d.png')
})                 
                
router.get('/skeleton', async (req, res, next) => {
	var apikeyInput = req.query.apikey,
            text = req.query.text

	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
    if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})

       hasil = (`https://h4ck3rs404-api.herokuapp.com/api/textprome/skeleton?text=${text}&apikey=404Api`)
     data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync('skeleton.png', data)
        res.sendFile(__path+'/skeleton.png')
})

router.get('/blood', async (req, res, next) => {
	var apikeyInput = req.query.apikey,
            text = req.query.text
            
	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
    if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})

       hasil = (`http://akirainfo.site/blood?apikey=KazuyaBot&text=${text}`)
     data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync('blood.png', data)
        res.sendFile(__path+'/blood.png')
})                 
                
router.get('/thunder', async (req, res, next) => {
	var apikeyInput = req.query.apikey,
            text = req.query.text

	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
    if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})

       hasil = (`http://akirainfo.site/thunder?apikey=KazuyaBot&text=${text}`)
     data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync('thunder.png', data)
        res.sendFile(__path+'/thunder.png')
})

router.get('/breakwall', async (req, res, next) => {
	var apikeyInput = req.query.apikey,
            text = req.query.text

	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
    if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})

       hasil = (`http://akirainfo.site/breakwall?apikey=KazuyaBot&text=${text}`)
     data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync('breakwall.png', data)
        res.sendFile(__path+'/breakwall.png')
})

router.get('/dropwater', async (req, res, next) => {
	var apikeyInput = req.query.apikey,
            text = req.query.text

	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
    if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})

       hasil = (`https://api.zeks.xyz/api/dropwater?apikey=apivinz&text=${text}`)
     data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync('dropwater.png', data)
        res.sendFile(__path+'/dropwater.png')
})

router.get('/pubglogo', async (req, res, next) => {
	var apikeyInput = req.query.apikey,
            text = req.query.text
           text2 = req.query.text2
           
	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
    if (!text && !text2) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})
       fetch(encodeURI(`https://api.zeks.xyz/api/pubglogo?text1=${text}&text2=${text2}&apikey=apivinz`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/mlserti', async (req, res, next) => {
	var apikeyInput = req.query.apikey,
            text = req.query.text

	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
    if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})

       hasil = (`https://h4ck3rs404-api.herokuapp.com/api/mltourserti?namasq=${text}&apikey=404Api`)
     data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync('mlserti.png', data)
        res.sendFile(__path+'/mlserti.png')
})

router.get('/hekerserti', async (req, res, next) => {
	var apikeyInput = req.query.apikey,
            text = req.query.text

	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
    if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})

       hasil = (`https://onlydevcity.xyz/HekerSerti/img.php?nama=${text}`)
     data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync('hekerserti.png', data)
        res.sendFile(__path+'/hekerserti.png')
})

router.get('/pubgserti', async (req, res, next) => {
	var apikeyInput = req.query.apikey,
            text = req.query.text

	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
    if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})

       hasil = (`https://onlydevcity.xyz/PubgTourSerti/img.php?nama=${text}`)
     data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync('pubgserti.png', data)
        res.sendFile(__path+'/pubgserti.png')
})

router.get('/mlserti1', async (req, res, next) => {
	var apikeyInput = req.query.apikey,
            text = req.query.text

	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
    if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})

       hasil = (`https://onlydevcity.xyz/MLTourSerti/img.php?nama=${text}`)
     data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync('mlserti1.png', data)
        res.sendFile(__path+'/mlserti1.png')
})

router.get('/epepserti1', async (req, res, next) => {
	var apikeyInput = req.query.apikey,
            text = req.query.text

	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
    if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})

       hasil = (`https://onlydevcity.xyz/FFSerti/img.php?nama=${text}`)
     data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync('epepserti1.png', data)
        res.sendFile(__path+'/epepserti1.png')
})

router.get('/pubgserti2', async (req, res, next) => {
	var apikeyInput = req.query.apikey,
            text = req.query.text

	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
    if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})

       hasil = (`https://onlydevcity.xyz/PubgTourSerti2/img.php?nama=${text}`)
     data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync('pubgserti2.png', data)
        res.sendFile(__path+'/pubgserti2.png')
})

router.get('/mlserti2', async (req, res, next) => {
	var apikeyInput = req.query.apikey,
            text = req.query.text

	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
    if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})

       hasil = (`https://onlydevcity.xyz/MLTourSerti2/img.php?nama=${text}`)
     data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync('mlserti2.png', data)
        res.sendFile(__path+'/mlserti2.png')
})

router.get('/epepserti2', async (req, res, next) => {
	var apikeyInput = req.query.apikey,
            text = req.query.text

	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
    if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})

       hasil = (`https://onlydevcity.xyz/FFSerti2/img.php?nama=${text}`)
     data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync('epepserti2.png', data)
        res.sendFile(__path+'/epepserti2.png')
})

router.get('/pubgserti3', async (req, res, next) => {
	var apikeyInput = req.query.apikey,
            text = req.query.text

	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
    if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})

       hasil = (`https://onlydevcity.xyz/PubgTourSerti3/img.php?nama=${text}`)
     data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync('pubgserti3.png', data)
        res.sendFile(__path+'/pubgserti3.png')
})

router.get('/mlserti3', async (req, res, next) => {
	var apikeyInput = req.query.apikey,
            text = req.query.text

	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
    if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})

       hasil = (`https://onlydevcity.xyz/MLTourSerti3/img.php?nama=${text}`)
     data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync('mlserti3.png', data)
        res.sendFile(__path+'/mlserti3.png')
})

router.get('/epepserti3', async (req, res, next) => {
	var apikeyInput = req.query.apikey,
            text = req.query.text

	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
    if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})

       hasil = (`https://onlydevcity.xyz/FFSerti3/img.php?nama=${text}`)
     data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync('epepserti3.png', data)
        res.sendFile(__path+'/epepserti3.png')
})

router.get('/pubgserti4', async (req, res, next) => {
	var apikeyInput = req.query.apikey,
            text = req.query.text

	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
    if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})

       hasil = (`https://onlydevcity.xyz/PubgTourSerti4/img.php?nama=${text}`)
     data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync('pubgserti4.png', data)
        res.sendFile(__path+'/pubgserti4.png')
})

router.get('/mlserti4', async (req, res, next) => {
	var apikeyInput = req.query.apikey,
            text = req.query.text

	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
    if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})

       hasil = (`https://onlydevcity.xyz/MLTourSerti4/img.php?nama=${text}`)
     data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync('mlserti4.png', data)
        res.sendFile(__path+'/mlserti4.png')
})

router.get('/epepserti4', async (req, res, next) => {
	var apikeyInput = req.query.apikey,
            text = req.query.text

	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
    if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})

       hasil = (`https://onlydevcity.xyz/FFSerti4/img.php?nama=${text}`)
     data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync('epepserti4.png', data)
        res.sendFile(__path+'/epepserti4.png')
})

router.get('/pubgserti5', async (req, res, next) => {
	var apikeyInput = req.query.apikey,
            text = req.query.text

	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
    if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})

       hasil = (`https://onlydevcity.xyz/PubgTourSerti5/img.php?nama=${text}`)
     data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync('pubgserti5.png', data)
        res.sendFile(__path+'/pubgserti5.png')
})

router.get('/mlserti5', async (req, res, next) => {
	var apikeyInput = req.query.apikey,
            text = req.query.text

	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
    if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})

       hasil = (`https://onlydevcity.xyz/MLTourSerti5/img.php?nama=${text}`)
     data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync('mlserti5.png', data)
        res.sendFile(__path+'/mlserti5.png')
})

router.get('/epepserti5', async (req, res, next) => {
	var apikeyInput = req.query.apikey,
            text = req.query.text

	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
    if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})

       hasil = (`https://onlydevcity.xyz/FFSerti5/img.php?nama=${text}`)
     data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync('epepserti5.png', data)
        res.sendFile(__path+'/epepserti5.png')
})

router.get('/silverplay', async (req, res, next) => {
	var apikeyInput = req.query.apikey,
            text = req.query.text

	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
    if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})

       hasil = (`https://h4ck3rs404-api.herokuapp.com/api/silverplay?text=${text}&apikey=404Api`)
     data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync('silverplay.png', data)
        res.sendFile(__path+'/silverplay.png')
})

router.get('/randomquran', async (req, res, next) => {
        var apikeyInput = req.query.apikey

	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://videfikri.com/api/randquran/`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                Author : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/goldplay', async (req, res) => {
	var apikeyInput = req.query.apikey,
	text = req.query.text
	
	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
	if(!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter kata"})
	
      hasil = (`https://h4ck3rs404-api.herokuapp.com/api/goldplay?text=${text}&apikey=404Api`)
     data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync('goldplay.png', data)
        res.sendFile(__path+'/goldplay.png')
})

router.get('/bannerepep', async (req, res) => {
	var apikeyInput = req.query.apikey,
	text = req.query.text
	
	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
	if(!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter kata"})
	
      hasil = (`https://h4ck3rs404-api.herokuapp.com/api/bannerepep?text=${text}&apikey=404Api`)
     data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync('bannerepep.png', data)
        res.sendFile(__path+'/bannerepep.png')
})

router.get('/tanggaljadian', async (req, res, next) => {
        var apikeyInput = req.query.apikey
        text = req.query.text
        text2 = req.query.text2
        text3 = req.query.text3
                   
	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
  if(!text && text2 && text3) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})
  
       fetch(encodeURI(`https://videfikri.com/api/primbon/tgljadian/?tgl=${text}&bln=${text2}&thn=${text3}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/heroml', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
                    text = req.query.text;
	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
  if(!text) return res.json(loghandler.nottext)
       fetch(encodeURI(`https://xinzbot-api.herokuapp.com/api/mobilelegend/herodetails?hero=${text}&apikey=aqulzz`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/sparkling', async (req, res, next) => {
        var apikeyInput = req.query.apikey
                   text = req.query.text
                   text2 = req.query.text2
                   
	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
  if (!text && !text2) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})
 
       hasil = (`http://docs-jojo.herokuapp.com/api/sparkling?text1=${text}&text2=${text2}`)
     data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync('sparkling.png', data)
        res.sendFile(__path+'/sparkling.png')
})

router.get('/infocuaca', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
	    provinsi = req.query.provinsi
            
	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
	if(!provinsi) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter provinsi"})
       fetch(encodeURI(`https://bmkg-api-zahirr.herokuapp.com/api/cuaca/${provinsi}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/infocuaca/bandara', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
       fetch(encodeURI(`https://bmkg-api-zahirr.herokuapp.com/api/cuaca/bandara`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/infocuaca/dunia', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
       fetch(encodeURI(`https://bmkg-api-zahirr.herokuapp.com/api/cuaca/dunia`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/infotsunami', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
       fetch(encodeURI(`https://bmkg-api-zahirr.herokuapp.com/api/tsunami`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/blackpink', async (req, res, next) => {
        var apikeyInput = req.query.apikey

	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://raw.githubusercontent.com/mzailani/Latihan/master/blackpink.json`))
        .then(response => response.json())
        .then(data => {
        var isi = data[Math.floor(Math.random() * data.length)];
        var result = isi;
             res.json({
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/playstore/search', async (req, res, next) => {
        var apikeyInput = req.query.apikey
         kata = req.query.kata   

	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
    if(!kata) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter"})
       fetch(encodeURI(`https://api-gplay.azharimm.tk/apps?q=${kata}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('//search', async (req, res, next) => {
        var apikeyInput = req.query.apikey
         kata = req.query.kata   

	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
    if(!kata) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter"})
       fetch(encodeURI(`https://-apii1.herokuapp.com/api//search?film=${kata}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('//movie', async (req, res, next) => {
        var apikeyInput = req.query.apikey

	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://-apii1.herokuapp.com/api/genre/movie`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('//action', async (req, res, next) => {
        var apikeyInput = req.query.apikey

	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://-apii1.herokuapp.com/api/genre/action`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('//adventure', async (req, res, next) => {
        var apikeyInput = req.query.apikey

	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://-apii1.herokuapp.com/api/genre/adventure`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('//drama', async (req, res, next) => {
        var apikeyInput = req.query.apikey

	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://-apii1.herokuapp.com/api/genre/drama`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('//comedy', async (req, res, next) => {
        var apikeyInput = req.query.apikey

	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://-apii1.herokuapp.com/api/genre/comedy`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/kartun/search', async (req, res, next) => {
        var apikeyInput = req.query.apikey
         kata = req.query.kata   

	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
    if(!kata) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter"})
       fetch(encodeURI(`https://kartun-apii1.herokuapp.com/api/kartun/search?film=${kata}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/kartun/movie', async (req, res, next) => {
        var apikeyInput = req.query.apikey

	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://kartun-apii1.herokuapp.com/api/genre/movie`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/kartun/action', async (req, res, next) => {
        var apikeyInput = req.query.apikey

	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://kartun-apii1.herokuapp.com/api/genre/action`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/kartun/adventure', async (req, res, next) => {
        var apikeyInput = req.query.apikey

	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://kartun-apii1.herokuapp.com/api/genre/adventure`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/kartun/drama', async (req, res, next) => {
        var apikeyInput = req.query.apikey

	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://kartun-apii1.herokuapp.com/api/genre/drama`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/kartun/comedy', async (req, res, next) => {
        var apikeyInput = req.query.apikey

	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://kartun-apii1.herokuapp.com/api/genre/comedy`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/kartun/military', async (req, res, next) => {
        var apikeyInput = req.query.apikey

	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://kartun-apii1.herokuapp.com/api/genre/military`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('//military', async (req, res, next) => {
        var apikeyInput = req.query.apikey

	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://-apii1.herokuapp.com/api/genre/military`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/husbu', async (req, res, next) => {
        var apikeyInput = req.query.apikey

	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://raw.githubusercontent.com/mzailani/Latihan/master/husbu.json`))
        .then(response => response.json())
        .then(data => {
        var isi = data[Math.floor(Math.random() * data.length)];
        var result = isi;
             res.json({
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/filmapik/search', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            film = req.query.film

	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
    if (!film) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter film"})

       fetch(encodeURI(`https://filmapik-api-zahirr.herokuapp.com/search?q=${film}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/filmapik/kategori', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            film = req.query.film

	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
    if (!film) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter film"})

       fetch(encodeURI(`https://filmapik-api-zahirr.herokuapp.com/category?search=${film}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/filmapik/play', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            id = req.query.id

	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
    if (!id) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter id"})

       fetch(encodeURI(`https://filmapik-api-zahirr.herokuapp.com/play?id=${id}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/filmapik/terbaru', async (req, res, next) => {
        var apikeyInput = req.query.apikey

	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://filmapik-api-zahirr.herokuapp.com/latest`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/lk21/terbaru', async (req, res, next) => {
        var apikeyInput = req.query.apikey

	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://lk21-api-zahirr.herokuapp.com/newupload`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/lk21/comingsoon', async (req, res, next) => {
        var apikeyInput = req.query.apikey

	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://lk21-api-zahirr.herokuapp.com/comingsoon`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/lk21/tvseries', async (req, res, next) => {
        var apikeyInput = req.query.apikey

	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://lk21-api-zahirr.herokuapp.com/tv`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/lk21/year', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            tahun = req.query.tahun

	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
    if (!tahun) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter tahun"})

       fetch(encodeURI(`https://lk21-api-zahirr.herokuapp.com/year?year=${tahun}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/lk21/country', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            negara = req.query.negara

	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
    if (!negara) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter negara"})

       fetch(encodeURI(`https://lk21-api-zahirr.herokuapp.com/country?country=${negara}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/lk21/genre', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            tipe = req.query.tipe

	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
    if (!tipe) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter tipe"})

       fetch(encodeURI(`https://lk21-api-zahirr.herokuapp.com/genre?genre=${tipe}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/bts', async (req, res, next) => {
        var apikeyInput = req.query.apikey

	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://raw.githubusercontent.com/mzailani/Latihan/master/bts.json`))
        .then(response => response.json())
        .then(data => {
        var isi = data[Math.floor(Math.random() * data.length)];
        var result = isi;
             res.json({
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/exo', async (req, res, next) => {
        var apikeyInput = req.query.apikey

	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://raw.githubusercontent.com/mzailani/Latihan/master/exo.json`))
        .then(response => response.json())
        .then(data => {
        var isi = data[Math.floor(Math.random() * data.length)];
        var result = isi;
             res.json({
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/randomquote/muslim', async (req, res, next) => {
        var apikeyInput = req.query.apikey

	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://docs-api-zahirrr.herokuapp.com/api/quote?type=agamis`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/quotes/kanye', async (req, res, next) => {
        var apikeyInput = req.query.apikey

	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://docs-api-zahirrr.herokuapp.com/api/quote?type=kanye`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/lk21/search', async (req, res, next) => {
        var apikeyInput = req.query.apikey
         kata = req.query.kata   

	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
    if(!kata) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter kata"})
       fetch(encodeURI(`http://api-lk21.herokuapp.com/search?query=${kata}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/pinterest', async (req, res, next) => {
        var apikeyInput = req.query.apikey
         kata = req.query.kata   

	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
    if(!kata) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter kata"})
       fetch(encodeURI(`https://api.fdci.se/rep.php?gambar=${kata}`))
        .then(response => response.json())
        .then(data => {
        var isi = data[Math.floor(Math.random() * data.length)];
        var result = isi;
             res.json({
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/googleimage', async (req, res, next) => {
        var apikeyInput = req.query.apikey
         kata = req.query.kata   

	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
    if(!kata) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter kata"})
       fetch(encodeURI(`http://nzcha-apii.herokuapp.com/googleimage?q=${kata}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/randomloli', async (req, res, next) => {
        var apikeyInput = req.query.apikey
         kata = req.query.kata   

	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
       fetch(encodeURI(`https://api.fdci.se/rep.php?gambar=anime loli`))
        .then(response => response.json())
        .then(data => {
        var isi = data[Math.floor(Math.random() * data.length)];
        var result = isi;
             res.json({
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/hug', async (req, res, next) => {
        var apikeyInput = req.query.apikey
         kata = req.query.kata   

	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
       fetch(encodeURI(`https://nekos.life/api/v2/img/hug`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/kiss5', async (req, res, next) => {
        var apikeyInput = req.query.apikey
         kata = req.query.kata   

	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
       fetch(encodeURI(`https://nekos.life/api/v2/img/kiss`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/wallpaper/anime', async (req, res, next) => {
        var apikeyInput = req.query.apikey
         kata = req.query.kata   

	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
       fetch(encodeURI(`https://nekos.life/api/v2/img/wallpaper`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/waifu', async (req, res, next) => {
        var apikeyInput = req.query.apikey
         kata = req.query.kata   

	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
       fetch(encodeURI(`https://docs-jojo.herokuapp.com/api/waifu`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/nekonime', async (req, res, next) => {
        var apikeyInput = req.query.apikey
         kata = req.query.kata   

	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
       fetch(encodeURI(`https://docs-jojo.herokuapp.com/api/nekonime`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/infonpm', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            query = req.query.query

	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
    if (!query) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter query"})

       fetch(encodeURI(`https://registry.npmjs.org/${query}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result,
                 message : `jangan lupa follow ${creator}`
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/drakorasia', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            search = req.query.search

	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
        if(!search) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter search"})

       fetch(encodeURI(`http://docs-api-zahirrr.herokuapp.com/api/drakorasia?search=${search}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/kbbi', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            kata = req.query.kata

	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
        if(!kata) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter kata"})

       fetch(encodeURI(`https://kbbi-api-zhirrr.vercel.app/api/kbbi?text=${kata}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/pantun', async (req, res, next) => {
        var apikeyInput = req.query.apikey

	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://raw.githubusercontent.com/mzailani/Latihan/master/pantun.json`))
        .then(response => response.json())
        .then(data => {
        var isi = data[Math.floor(Math.random() * data.length)];
        var result = isi;
             res.json({
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/howgay', async (req, res, next) => {
        var apikeyInput = req.query.apikey

	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://raw.githubusercontent.com/mzailani/Latihan/master/howgay.json`))
        .then(response => response.json())
        .then(data => {
        var isi = data[Math.floor(Math.random() * data.length)];
        var result = isi;
             res.json({
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/faktaunix', async (req, res, next) => {
        var apikeyInput = req.query.apikey

	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://raw.githubusercontent.com/mzailani/Latihan/master/faktaunix.json`))
        .then(response => response.json())
        .then(data => {
        var isi = data[Math.floor(Math.random() * data.length)];
        var result = isi;
             res.json({
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/cersex', async (req, res, next) => {
        var apikeyInput = req.query.apikey
         kata = req.query.kata   

	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
       fetch(encodeURI(`https://masgi.herokuapp.com/api/cersex2`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/cerpen', async (req, res, next) => {
        var apikeyInput = req.query.apikey
         kata = req.query.kata   

	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
       fetch(encodeURI(`https://docs-jojo.herokuapp.com/api/cerpen`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/randomquote', async (req, res, next) => {
        var apikeyInput = req.query.apikey

	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://st4rz.herokuapp.com/api/randomquotes`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/chordlagu', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            lagu = req.query.lagu

	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
        if(!lagu) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter kata"})

       fetch(encodeURI(`https://python-api-zhirrr.herokuapp.com/api/chord?q=${lagu}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

 router.get('/estetikpic', async (req, res, next) => {
        var apikeyInput = req.query.apikey
         kata = req.query.kata   

	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
       fetch(encodeURI(`https://api.zeks.xyz/api/estetikpic?apikey=benbenz`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/wallpaper/cyberspace', async (req, res, next) => {
        var apikeyInput = req.query.apikey

	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/CyberSpace.json`))
        .then(response => response.json())
        .then(data => {
        var isi = data[Math.floor(Math.random() * data.length)];
        var result = isi;
             res.json({
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/wallpaper/teknologi', async (req, res, next) => {
        var apikeyInput = req.query.apikey

	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/Technology.json`))
        .then(response => response.json())
        .then(data => {
        var isi = data[Math.floor(Math.random() * data.length)];
        var result = isi;
             res.json({
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/wallpaper/muslim', async (req, res, next) => {
        var apikeyInput = req.query.apikey

	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/Islamic.json`))
        .then(response => response.json())
        .then(data => {
        var isi = data[Math.floor(Math.random() * data.length)];
        var result = isi;
             res.json({
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/wallpaper/programming', async (req, res, next) => {
        var apikeyInput = req.query.apikey

	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/Programming.json`))
        .then(response => response.json())
        .then(data => {
        var isi = data[Math.floor(Math.random() * data.length)];
        var result = isi;
             res.json({
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/wallpaper/pegunungan', async (req, res, next) => {
        var apikeyInput = req.query.apikey

	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/Mountain.json`))
        .then(response => response.json())
        .then(data => {
        var isi = data[Math.floor(Math.random() * data.length)];
        var result = isi;
             res.json({
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/kodepos', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
	    kota = req.query.kota

	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
	if(!kota) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter kota"})

       fetch(encodeURI(`https://kodepos-api-zhirrr.vercel.app/?q=${kota}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/fakedata', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            country = req.query.country

	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
        if(!country) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter country"})

       fetch(encodeURI(`https://fakename-api-zhirrr.vercel.app/api/fakename?country=${country}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/hilih', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            kata = req.query.kata

	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
        if(!kata) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter kata"})

       fetch(encodeURI(`https://hilih-api-zhirrr.vercel.app/api/hilih?kata=${kata}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/liriklagu', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            lagu = req.query.lagu

	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
        if(!lagu) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter kata"})

       fetch(encodeURI(`https://docs-jojo.herokuapp.com/api/lirik?q=${lagu}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/wikipedia', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            search = req.query.search

	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
        if(!search) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter search"})

       fetch(encodeURI(`https://docs-api-zahirrr.herokuapp.com/api/wiki?keyword=${search}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/short/tiny', async (req, res, next) => {
    var apikeyInput = req.query.apikey,
        url = req.query.url

	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
     if (!url) return res.json(loghandler.noturl)

     request(`https://tinyurl.com/api-create.php?url=${url}`, function (error, response, body) {
         try {
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result : {
                     link : `${body}`,
                 },
                 message : `jangan lupa follow ${creator}`
             })
         } catch (e) {
             console.log('Error :', color(e,'red'))
             res.json(loghandler.invalidlink)
         }
     })
})

router.get('/base', async (req, res, next) => {
	var type = req.query.type,
		encode = req.query.encode,
		decode = req.query.decode,
		apikeyInput = req.query.apikey;
		if (!apikey) return res.json(loghandler.notparam)
		if (apikeyInput != 'KazuyaDev') return res.json(loghandler.invalidKey)
		if (!type) return res.json({status: false, creator, code: 404, message: 'masukan parameter type, type yang tersedia : base64 , base32'})
		if (type == 'base64enc' && encode){
				Base("b64enc", encode)
				.then(result => {
					res.json({
						status:true,
						creator: `${creator}`,
						result
					})
				})
			} else if (type == 'base64dec' && decode){
				Base("b64dec", decode)
				.then(result => {
					res.json({
						status: true,
						creator: `${creator}`,
						result
					})
				})
			} else if (type == 'base32enc' && encode){
				Base('b32enc', encode)
				.then(result => {
					res.json({
						status:true,
						creator: `${creator}`,
						result
					})
				})
			} else if (type == 'base32dec' && decode){
				Base('b32dec', decode)
				.then(result => {
					res.json({
						status:true,
						creator: `${creator}`,
						result
					})
				})
			} else if(!(encode || decode)){
				res.json({
					status:false,
					creator: `${creator}`,
					message: "tambahkan parameter encode/decode"
				})
			} else {
				res.json(loghandler.error)
			}
})

router.get('/sha1', async (req, res, next) => {
	var apikeyInput = req.query.apikey,
            text = req.query.text

	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
    if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})

       fetch(encodeURI(`https://xteam.xyz/encrypt/sha1?text=${text}&APIKEY=AkiraBotWa`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/sha256', async (req, res, next) => {
	var apikeyInput = req.query.apikey,
            text = req.query.text

	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
    if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})

       fetch(encodeURI(`https://xteam.xyz/encrypt/sha256?text=${text}&APIKEY=AkiraBotWa`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/encrypt/md5', async (req, res, next) => {
	var apikeyInput = req.query.apikey,
            text = req.query.text

	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
    if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})

       fetch(encodeURI(`https://h4ck3rs404-api.herokuapp.com/api/md5?text=${text}&apikey=404Api`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/sha512', async (req, res, next) => {
	var apikeyInput = req.query.apikey,
            text = req.query.text

	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
    if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})

       fetch(encodeURI(`https://xteam.xyz/encrypt/sha256?text=${text}&APIKEY=AkiraBotWa`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/nulis', async (req, res, next) => {
	var apikeyInput = req.query.apikey,
            text = req.query.text

	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
    if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})

       fetch(encodeURI(`http://salism3.pythonanywhere.com/write/?text=${text}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/translate', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
	    kata = req.query.kata

	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
	if(!kata) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter kata"})
       fetch(encodeURI(`https://docs-api-zahirrr.herokuapp.com/api/translate?text=${kata}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/gabut', async (req, res, next) => {
        var apikeyInput = req.query.apikey

	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://docs-api-zahirrr.herokuapp.com/api/bosan`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/meme5', async (req, res, next) => {
        var apikeyInput = req.query.apikey

	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://raw.githubusercontent.com/mzailani/Latihan/master/meme5.json`))
        .then(response => response.json())
        .then(data => {
        var isi = data[Math.floor(Math.random() * data.length)];
        var result = isi;
             res.json({
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/random/meme', async (req, res, next) => {
        var apikeyInput = req.query.apikey

	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://docs-api-zahirrr.herokuapp.com/api/meme`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/dadu', async (req, res, next) => {
        var apikeyInput = req.query.apikey

	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://raw.githubusercontent.com/mzailani/Latihan/master/dadu.json`))
        .then(response => response.json())
        .then(data => {
        var isi = data[Math.floor(Math.random() * data.length)];
        var result = isi;
             res.json({
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/chikaa', async (req, res, next) => {
        var apikeyInput = req.query.apikey

	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://raw.githubusercontent.com/mzailani/Latihan/master/chika.json`))
        .then(response => response.json())
        .then(data => {
        var isi = data[Math.floor(Math.random() * data.length)];
        var result = isi;
             res.json({
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/asupan', async (req, res, next) => {
        var apikeyInput = req.query.apikey

	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://raw.githubusercontent.com/mzailani/Latihan/master/asupan.json`))
        .then(response => response.json())
        .then(data => {
        var isi = data[Math.floor(Math.random() * data.length)];
        var result = isi;
             res.json({
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/citacita', async (req, res, next) => {
        var apikeyInput = req.query.apikey

	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://raw.githubusercontent.com/mzailani/Latihan/master/citacita.json`))
        .then(response => response.json())
        .then(data => {
        var isi = data[Math.floor(Math.random() * data.length)];
        var result = isi;
             res.json({
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/drakjokes', async (req, res, next) => {
        var apikeyInput = req.query.apikey

	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://raw.githubusercontent.com/mzailani/Latihan/master/drak.json`))
        .then(response => response.json())
        .then(data => {
        var isi = data[Math.floor(Math.random() * data.length)];
        var result = isi;
             res.json({
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/tiktod', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            url = req.query.url
            
	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
    if (!url) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter url"})

       fetch(encodeURI(`https://shellys-chan.herokuapp.com/api/tiktok?url=${url}`))
        .then(response => response.json())
        .then(data => {
        var result = data.data;
             res.json({
             	author: '@Sadboy.edtz',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})



router.get('/anime/kusonime', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
	    search = req.query.search

	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
	if(!search) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter search"})
       fetch(encodeURI(`https://docs-api-zahirrr.herokuapp.com/api/kusonime?search=${search}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/muslim/niatshubuh', async (req, res, next) => {
        var apikeyInput = req.query.apikey

	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/NiatShubuh.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/muslim/niatdzuhur', async (req, res, next) => {
        var apikeyInput = req.query.apikey

	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/NiatDzuhur.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/muslim/niatmaghrib', async (req, res, next) => {
        var apikeyInput = req.query.apikey

	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/NiatMaghrib.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/muslim/niatisya', async (req, res, next) => {
        var apikeyInput = req.query.apikey

	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/NiatIsya.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/muslim/niatashar', async (req, res, next) => {
        var apikeyInput = req.query.apikey

	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/NiatAshar.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/tiktod/stalk', async (req, res, next) => {
    var apikeyInput = req.query.apikey,
        username = req.query.username

	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
    if (!username) return res.json(loghandler.notusername)


    TikTokScraper.getUserProfileInfo(username)
        .then(user => {
            res.json({
                status : true,
                creator : `${creator}`,
                result : user
            })
        })
        .catch(e => {
             res.json({
                 status : false,
                 creator : `${creator}`,
                 message : "error, mungkin username anda tidak valid"
             })
         })
})

router.get('/ig/stalk', async (req, res, next) => {
        var apikeyInput = req.query.apikey
         kata = req.query.kata   

	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
    if(!kata) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter username"})
       fetch(encodeURI(`https://st4rz.herokuapp.com/api/stalk?username=${kata}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/twt/stalk', async (req, res, next) => {
        var apikeyInput = req.query.apikey
         kata = req.query.kata   

	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
    if(!kata) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter username"})
       fetch(encodeURI(`https://videfikri.com/api/stalktwit/?username=${kata}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/fbdown', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            url = req.query.url

	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
    if (!url) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter url"})

       fetch(encodeURI(`https://fb-api-zhirrr.vercel.app/?url=${url}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/yt-play', async (req, res, next) => {
        var apikeyInput = req.query.apikey
         kata = req.query.kata   

	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
    if(!kata) return res.json({ status : false, creator : `${creator}`, message : "masukan Judulnya"})
       fetch(encodeURI(`https://docs-jojo.herokuapp.com/api/yt-play?q=${kata}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/ytvid', async (req, res, next) => {
        var apikeyInput = req.query.apikey
         url = req.query.url   

	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
    if(!url) return res.json({ status : false, creator : `${creator}`, message : "masukan Judulnya"})
       fetch(encodeURI(`http://hadi-api.herokuapp.com/api/ytvideo?url=${url}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/ytaudio', async (req, res, next) => {
        var apikeyInput = req.query.apikey
         url = req.query.url  

	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
    if(!url) return res.json({ status : false, creator : `${creator}`, message : "masukan Judulnya"})
       fetch(encodeURI(`http://hadi-api.herokuapp.com/api/ytaudio?url=${url}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/yutub/search', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            video = req.query.video

	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
    if (!video) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter video"})

       fetch(encodeURI(`https://yutub-api-zaahirr.herokuapp.com/search?q=${video}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: '@Sadboy.edtz',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/joox', async (req, res, next) => {
        var apikeyInput = req.query.apikey
         kata = req.query.kata   

	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
	if(!kata) return res.json({ status : false, creator : `${creator}`, message : "masukan Judulnya"})
       fetch(encodeURI(`https://pencarikode.xyz/download/joox?search=${kata}&apikey=pais`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/ytv2', async (req, res, next) => {
        var apikeyInput = req.query.apikey
         url = req.query.url   

	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
    if(!url) return res.json({ status : false, creator : `${creator}`, message : "masukan Url nya"})
       fetch(encodeURI(`https://st4rz.herokuapp.com/api/ytv2?url=${url}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/yta2', async (req, res, next) => {
        var apikeyInput = req.query.apikey
         url = req.query.url   

	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
    if(!url) return res.json({ status : false, creator : `${creator}`, message : "masukan url nya"})
       fetch(encodeURI(`https://st4rz.herokuapp.com/api/yta2?url=${url}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/igtv', async (req, res, next) => {
        var apikeyInput = req.query.apikey
         url = req.query.url   

	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
    if(!url) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter"})
       fetch(encodeURI(`https://docs-jojo.herokuapp.com/api/igtv?url=${url}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/github/stalk', async (req, res, next) => {
        var apikeyInput = req.query.apikey

	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
  
       fetch(encodeURI(`https://videfikri.com/api/github/?username=Bambang-Gans`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/nsfw/nsfwNeko', async (req, res, next) => {
        var apikeyInput = req.query.apikey

	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://raw.githubusercontent.com/alpin1234567/Js-Project/master/jsinnsfw/nsfwNeko.json`))
        .then(response => response.json())
        .then(data => {
        var isi = data[Math.floor(Math.random() * data.length)];
        var result = isi;
             res.json({
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/nsfw/ahegao', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://rawcdn.githack.com/Not-found-squad/hentong-raw/12855ba1dc86f55496ced2de80cb84ff1911a626/ahegao.json`))
        .then(response => response.json())
        .then(data => {
        nee = JSON.parse(JSON.stringify(data));
	    nimo =  nee[Math.floor(Math.random() * nee.length)];
        var result = nimo;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/nsfw/ass', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://rawcdn.githack.com/Not-found-squad/hentong-raw/12855ba1dc86f55496ced2de80cb84ff1911a626/ass.json`))
        .then(response => response.json())
        .then(data => {
        sas = JSON.parse(JSON.stringify(data));
	    dedj =  sas[Math.floor(Math.random() * sas.length)];
        var result = dedj;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/nsfw/bdsm', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://rawcdn.githack.com/Not-found-squad/hentong-raw/12855ba1dc86f55496ced2de80cb84ff1911a626/bdsm.json`))
        .then(response => response.json())
        .then(data => {
        fgd = JSON.parse(JSON.stringify(data));
	    myt =  fgd[Math.floor(Math.random() * fgd.length)];
        var result = myt;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/nsfw/blowjob', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://rawcdn.githack.com/Not-found-squad/hentong-raw/12855ba1dc86f55496ced2de80cb84ff1911a626/blowjob.json`))
        .then(response => response.json())
        .then(data => {
        hehy = JSON.parse(JSON.stringify(data));
	    hyt =  hehy[Math.floor(Math.random() * hehy.length)];
        var result = hyt;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/nsfw/boobjob', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://rawcdn.githack.com/Not-found-squad/hentong-raw/12855ba1dc86f55496ced2de80cb84ff1911a626/boobjob.json`))
        .then(response => response.json())
        .then(data => {
        tet = JSON.parse(JSON.stringify(data));
	    tot =  tet[Math.floor(Math.random() * tet.length)];
        var result = tot;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/nsfw/creampie', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://rawcdn.githack.com/Not-found-squad/hentong-raw/12855ba1dc86f55496ced2de80cb84ff1911a626/creampie.json`))
        .then(response => response.json())
        .then(data => {
        tat = JSON.parse(JSON.stringify(data));
	    titid =  tat[Math.floor(Math.random() * tat.length)];
        var result = titid;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/nsfw/cuckold', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://rawcdn.githack.com/Not-found-squad/hentong-raw/12855ba1dc86f55496ced2de80cb84ff1911a626/cuckold.json`))
        .then(response => response.json())
        .then(data => {
        cuckold = JSON.parse(JSON.stringify(data));
	    eek =  cuckold[Math.floor(Math.random() * cuckold.length)];
        var result = eek;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/nsfw/cum', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://rawcdn.githack.com/Not-found-squad/hentong-raw/12855ba1dc86f55496ced2de80cb84ff1911a626/cum.json`))
        .then(response => response.json())
        .then(data => {
        cum = JSON.parse(JSON.stringify(data));
	    cium =  cum[Math.floor(Math.random() * cum.length)];
        var result = cium;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/nsfw/elves', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://rawcdn.githack.com/Not-found-squad/hentong-raw/12855ba1dc86f55496ced2de80cb84ff1911a626/elves.json`))
        .then(response => response.json())
        .then(data => {
        elis = JSON.parse(JSON.stringify(data));
	    gty =  elis[Math.floor(Math.random() * elis.length)];
        var result = gty;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/nsfw/ero', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://rawcdn.githack.com/Not-found-squad/hentong-raw/12855ba1dc86f55496ced2de80cb84ff1911a626/ero.json`))
        .then(response => response.json())
        .then(data => {
        eros = JSON.parse(JSON.stringify(data));
	    sens =  sens[Math.floor(Math.random() * eros.length)];
        var result = sens;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/nsfw/femdom', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://rawcdn.githack.com/Not-found-squad/hentong-raw/12855ba1dc86f55496ced2de80cb84ff1911a626/femdom.json`))
        .then(response => response.json())
        .then(data => {
        femi = JSON.parse(JSON.stringify(data));
	    dommys =  femi[Math.floor(Math.random() * femi.length)];
        var result = dommys;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/nsfw/gangbang', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://rawcdn.githack.com/Not-found-squad/hentong-raw/12855ba1dc86f55496ced2de80cb84ff1911a626/gangbang.json`))
        .then(response => response.json())
        .then(data => {
        gangg = JSON.parse(JSON.stringify(data));
	    bangbang =  bangbang[Math.floor(Math.random() * gangg.length)];
        var result = bangbang;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/nsfw/glasses', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://rawcdn.githack.com/Not-found-squad/hentong-raw/12855ba1dc86f55496ced2de80cb84ff1911a626/glasses.json`))
        .then(response => response.json())
        .then(data => {
        kamcas = JSON.parse(JSON.stringify(data));
	    kacas =  kamcas[Math.floor(Math.random() * kamcas.length)];
        var result = kacas;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/nsfw/hentai', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://rawcdn.githack.com/Not-found-squad/hentong-raw/12855ba1dc86f55496ced2de80cb84ff1911a626/hentai.json`))
        .then(response => response.json())
        .then(data => {
        henn = JSON.parse(JSON.stringify(data));
	    taik =  henn[Math.floor(Math.random() * henn.length)];
        var result = taik;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/nsfw/hentai-gif', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://rawcdn.githack.com/Not-found-squad/hentong-raw/12855ba1dc86f55496ced2de80cb84ff1911a626/hnt_gifs.json`))
        .then(response => response.json())
        .then(data => {
        samg = JSON.parse(JSON.stringify(data));
	    ngengek =  samg[Math.floor(Math.random() * samg.length)];
        var result = ngengek;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})



router.get('/nsfw/incest', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://rawcdn.githack.com/Not-found-squad/hentong-raw/12855ba1dc86f55496ced2de80cb84ff1911a626/incest.json`))
        .then(response => response.json())
        .then(data => {
        incest = JSON.parse(JSON.stringify(data));
	    ences =  incest[Math.floor(Math.random() * incest.length)];
        var result = ences;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})



router.get('/nsfw/masturbation', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://rawcdn.githack.com/Not-found-squad/hentong-raw/12855ba1dc86f55496ced2de80cb84ff1911a626/masturbation.json`))
        .then(response => response.json())
        .then(data => {
        cooll = JSON.parse(JSON.stringify(data));
	    liii =  cooll[Math.floor(Math.random() * cooll.length)];
        var result = liii;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/nsfw/wp-nsfw', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://rawcdn.githack.com/Not-found-squad/hentong-raw/12855ba1dc86f55496ced2de80cb84ff1911a626/nsfwMobileWallpaper.json`))
        .then(response => response.json())
        .then(data => {
        mobi = JSON.parse(JSON.stringify(data));
	    lee =  mobi[Math.floor(Math.random() * mobi.length)];
        var result = lee;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/nsfw/nsfwneko', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://rawcdn.githack.com/Not-found-squad/hentong-raw/12855ba1dc86f55496ced2de80cb84ff1911a626/nsfwNeko.json`))
        .then(response => response.json())
        .then(data => {
        nemko = JSON.parse(JSON.stringify(data));
	    nisme =  nemko[Math.floor(Math.random() * nemko.length)];
        var result = nisme;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/nsfw/panties', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://rawcdn.githack.com/Not-found-squad/hentong-raw/12855ba1dc86f55496ced2de80cb84ff1911a626/panties.json`))
        .then(response => response.json())
        .then(data => {
        gaktaunjir = JSON.parse(JSON.stringify(data));
	    pantiensapan =  gaktaunjir[Math.floor(Math.random() * gaktaunjir.length)];
        var result = pantiensapan;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/nsfw/pussy', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://rawcdn.githack.com/Not-found-squad/hentong-raw/12855ba1dc86f55496ced2de80cb84ff1911a626/pussy.json`))
        .then(response => response.json())
        .then(data => {
        memek = JSON.parse(JSON.stringify(data));
	    pussyahh =  memek[Math.floor(Math.random() * memek.length)];
        var result = pussyahh;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/nsfw/tentakel', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://rawcdn.githack.com/Not-found-squad/hentong-raw/12855ba1dc86f55496ced2de80cb84ff1911a626/tentacles.json`))
        .then(response => response.json())
        .then(data => {
        wirdword = JSON.parse(JSON.stringify(data));
	    temtakel =  wirdword[Math.floor(Math.random() * wirdword.length)];
        var result = temtakel;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/nsfw/uniform', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://rawcdn.githack.com/Not-found-squad/hentong-raw/12855ba1dc86f55496ced2de80cb84ff1911a626/uniform.json`))
        .then(response => response.json())
        .then(data => {
        seragam = JSON.parse(JSON.stringify(data));
	    seklh =  seragam[Math.floor(Math.random() * seragam.length)];
        var result = seklh;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/nsfw/thighs', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://rawcdn.githack.com/Not-found-squad/hentong-raw/12855ba1dc86f55496ced2de80cb84ff1911a626/thighs.json`))
        .then(response => response.json())
        .then(data => {
        thighs = JSON.parse(JSON.stringify(data));
	    hmmmm =  thighs[Math.floor(Math.random() * thighs.length)];
        var result = hmmmm;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/nsfw/yuri', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://rawcdn.githack.com/Not-found-squad/hentong-raw/12855ba1dc86f55496ced2de80cb84ff1911a626/yuri.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;     
        res.json({         
          creator : `${creator}`,          
          result       
          })       
        })
         .catch(e => {
         	res.json(loghandler.error)
})
})



router.get('/baka', async (req, res, next) => {
        var apikeyInput = req.query.apikey
         kata = req.query.kata   

	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
       fetch(encodeURI(`https://nekos.life/api/v2/img/baka`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/spank', async (req, res, next) => {
        var apikeyInput = req.query.apikey
         kata = req.query.kata   

	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
       fetch(encodeURI(`https://nekos.life/api/v2/img/spank`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/classic', async (req, res, next) => {
        var apikeyInput = req.query.apikey
         kata = req.query.kata   

	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
       fetch(encodeURI(`https://nekos.life/api/v2/img/classic`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/manga', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
	    search = req.query.search

	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
	if(!search) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter search"})
       fetch(encodeURI(`https://docs-api-zahirrr.herokuapp.com/api/manga?keyword=${search}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/textmaker/banner', async (req, res, next) => {
        var theme = req.query.theme,
             text = req.query.text,
             text2 = req.query.text2,
             text3 = req.query.text3,
             apikeyInput = req.query.apikey;

	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
        if (!theme) return res.json(loghandler.nottheme)
        if (theme != 'flaming' && theme != 'underwater') return res.json(loghandler.notheme)
        if (!text) return res.json(loghandler.nottext)

        if (theme == 'flaming') {
            try {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/realistic-flaming-text-effect-online-197.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            status : true,
                                            creator : `${creator}`,
                                            message : `jangan lupa follow ${creator}`,
                                            result:{
                                                url:urlnya,
                                                delete_url: delete_url,
                                                info: 'url akan hilang setelah 2 menit'
                                            }
                                        })
                                })
                        })
                    }
                })
                } catch (e) {
                	console.log(e);
                res.json(loghandler.error)
                }
        } else if (theme == 'underwater') {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/creating-an-underwater-ocean-363.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            status : true,
                                            creator : `${creator}`,
                                            message : `jangan lupa follow ${creator}`,
                                            result:{
                                                url:urlnya,
                                                delete_url: delete_url,
                                                info: 'url akan hilang setelah 2 menit'
                                            }
                                        })
                                })
                        })
                    }
                }) 
        } else {
            res.json(loghandler.error)
        }
})

router.get('/textmaker/banner3', async (req, res, next) => {
        var theme = req.query.theme,
             text = req.query.text,
             text2 = req.query.text2,
             text3 = req.query.text3,
             apikeyInput = req.query.apikey;

	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
        if (!theme) return res.json(loghandler.nottheme)
        if (theme != 'romantic' && theme != 'burn-paper') return res.json(loghandler.notheme)
        if (!text) return res.json(loghandler.nottext)

        if (theme == 'romantic') {
            try {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/romantic-messages-for-your-loved-one-391.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            status : true,
                                            creator : `${creator}`,
                                            message : `jangan lupa follow ${creator}`,
                                            result:{
                                                url:urlnya,
                                                delete_url: delete_url,
                                                info: 'url akan hilang setelah 2 menit'
                                            }
                                        })
                                })
                        })
                    }
                })
                } catch (e) {
                	console.log(e);
                res.json(loghandler.error)
                }
        } else if (theme == 'burn-paper') {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/write-text-on-burn-paper-388.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            status : true,
                                            creator : `${creator}`,
                                            message : `jangan lupa follow ${creator}`,
                                            result:{
                                                url:urlnya,
                                                delete_url: delete_url,
                                                info: 'url akan hilang setelah 2 menit'
                                            }
                                        })
                                })
                        })
                    }
                }) 
        } else {
            res.json(loghandler.error)
        }
})

router.get('/textmaker/effect', async (req, res, next) => {
        var theme = req.query.theme,
             text = req.query.text,
             text2 = req.query.text2,
             text3 = req.query.text3,
             apikeyInput = req.query.apikey;

	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
        if (!theme) return res.json(loghandler.nottheme)
        if (theme != 'wood' && theme != 'harry-potter') return res.json(loghandler.notheme)
        if (!text) return res.json(loghandler.nottext)

        if (theme == 'wood') {
            try {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/carved-wood-effect-online-171.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            status : true,
                                            creator : `${creator}`,
                                            message : `jangan lupa follow ${creator}`,
                                            result:{
                                                url:urlnya,
                                                delete_url: delete_url,
                                                info: 'url akan hilang setelah 2 menit'
                                            }
                                        })
                                })
                        })
                    }
                })
                } catch (e) {
                	console.log(e);
                res.json(loghandler.error)
                }
        } else if (theme == 'harry-potter') {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/create-harry-potter-text-on-horror-background-178.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            status : true,
                                            creator : `${creator}`,
                                            message : `jangan lupa follow ${creator}`,
                                            result:{
                                                url:urlnya,
                                                delete_url: delete_url,
                                                info: 'url akan hilang setelah 2 menit'
                                            }
                                        })
                                })
                        })
                    }
                }) 
        } else {
            res.json(loghandler.error)
        }
})

router.get('/textmaker', async (req, res, next) => {
        var theme = req.query.theme,
             text = req.query.text,
             text2 = req.query.text2,
             text3 = req.query.text3,
             apikeyInput = req.query.apikey;

	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
        if (!theme) return res.json(loghandler.nottheme)
        if (theme != 'glitch' && theme != 'google-suggestion') return res.json(loghandler.notheme)
        if (!text) return res.json(loghandler.nottext)

        if (theme == 'glitch') {
        	if (!text2) return res.json(loghandler.nottext2)
            try {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/make-tik-tok-text-effect-375.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&text_2=${text2}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=93f5c8966cfaf3ca19051ee9f85c14f3&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            status : true,
                                            creator : `${creator}`,
                                            message : `jangan lupa follow ${creator}`,
                                            result:{
                                                url:urlnya,
                                                delete_url: delete_url,
                                                info: 'url akan hilang setelah 2 menit'
                                            }
                                        })
                                })
                        })
                    }
                })
                } catch (e) {
                	console.log(e);
                res.json(loghandler.error)
                }
        } else if (theme == 'google-suggestion') {
        	if (!text2) return res.json(loghandler.nottext2)
        if (!text3) return res.json(loghandler.nottext3)
            request.post({
                url: "https://photooxy.com/other-design/make-google-suggestion-photos-238.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&text_2=${text2}&text_3=${text3}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            status : true,
                                            creator : `${creator}`,
                                            message : `jangan lupa follow ${creator}`,
                                            result:{
                                                url:urlnya,
                                                delete_url: delete_url,
                                                info: 'url akan hilang setelah 2 menit'
                                            }
                                        })
                                })
                        })
                    }
                }) 
        } else {
            res.json(loghandler.error)
        }
})

router.get('/textmaker/banner65', async (req, res, next) => {
        var theme = req.query.theme,
             text = req.query.text,
             text2 = req.query.text2,
             text3 = req.query.text3,
             apikeyInput = req.query.apikey;

	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
        if (!theme) return res.json(loghandler.nottheme)
        if (theme != 'yellow-roses' && theme != 'typography') return res.json(loghandler.notheme)
        if (!text) return res.json(loghandler.nottext)

        if (theme == 'yellow-roses') {
            try {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/yellow-roses-text-360.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            status : true,
                                            creator : `${creator}`,
                                            message : `jangan lupa follow ${creator}`,
                                            result:{
                                                url:urlnya,
                                                delete_url: delete_url,
                                                info: 'url akan hilang setelah 2 menit'
                                            }
                                        })
                                })
                        })
                    }
                })
                } catch (e) {
                	console.log(e);
                res.json(loghandler.error)
                }
        } else if (theme == 'typography') {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/smoke-typography-text-effect-170.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            status : true,
                                            creator : `${creator}`,
                                            message : `jangan lupa follow ${creator}`,
                                            result:{
                                                url:urlnya,
                                                delete_url: delete_url,
                                                info: 'url akan hilang setelah 2 menit'
                                            }
                                        })
                                })
                        })
                    }
                }) 
        } else {
            res.json(loghandler.error)
        }
})

router.get('/textmaker/logo4', async (req, res, next) => {
        var theme = req.query.theme,
             text = req.query.text,
             text2 = req.query.text2,
             text3 = req.query.text3,
             apikeyInput = req.query.apikey;

	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
        if (!theme) return res.json(loghandler.nottheme)
        if (theme != '8-bit' && theme != 'pornhub') return res.json(loghandler.notheme)
        if (!text) return res.json(loghandler.nottext)

        if (theme == '8-bit') {
        	if (!text2) return res.json(loghandler.nottext2)
            try {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/8-bit-text-on-arcade-rift-175.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&text_2=${text2}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            status : true,
                                            creator : `${creator}`,
                                            message : `jangan lupa follow ${creator}`,
                                            result:{
                                                url:urlnya,
                                                delete_url: delete_url,
                                                info: 'url akan hilang setelah 2 menit'
                                            }
                                        })
                                })
                        })
                    }
                })
                } catch (e) {
                	console.log(e);
                res.json(loghandler.error)
                }
        } else if (theme == 'pornhub') {
        	if (!text2) return res.json(loghandler.nottext2)
            request.post({
                url: "https://textpro.me/pornhub-style-logo-online-generator-free-977.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `White_text=${text}&Black_text=${text2}&login=Go`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://textpro.me/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            status : true,
                                            creator : `${creator}`,
                                            message : `jangan lupa follow ${creator}`,
                                            result:{
                                                url:urlnya,
                                                delete_url: delete_url,
                                                info: 'url akan hilang setelah 2 menit'
                                            }
                                        })
                                })
                        })
                    }
                }) 
        } else {
            res.json(loghandler.error)
        }
})

router.get('/textmaker/game', async (req, res, next) => {
        var theme = req.query.theme,
             text = req.query.text,
             text2 = req.query.text2,
             text3 = req.query.text3,
             apikeyInput = req.query.apikey;

	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
        if (!theme) return res.json(loghandler.nottheme)
        if (theme != 'pubg' && theme != 'battlefield') return res.json(loghandler.notheme)
        if (!text) return res.json(loghandler.nottext)

        if (theme == 'pubg') {
        	if (!text2) return res.json(loghandler.nottext2)
            try {
            request.post({
                url: "https://photooxy.com/battlegrounds/make-wallpaper-battlegrounds-logo-text-146.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&text_2=${text2}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            status : true,
                                            creator : `${creator}`,
                                            message : `jangan lupa follow ${creator}`,
                                            result:{
                                                url:urlnya,
                                                delete_url: delete_url,
                                                info: 'url akan hilang setelah 2 menit'
                                            }
                                        })
                                })
                        })
                    }
                })
                } catch (e) {
                	console.log(e);
                res.json(loghandler.error)
                }
        } else if (theme == 'battlefield') {
        	if (!text2) return res.json(loghandler.nottext2)
            request.post({
                url: "https://photooxy.com/fps-game-effect/create-battlefield-4-rising-effect-152.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&text_2=${text2}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            status : true,
                                            creator : `${creator}`,
                                            message : `jangan lupa follow ${creator}`,
                                            result:{
                                                url:urlnya,
                                                delete_url: delete_url,
                                                info: 'url akan hilang setelah 2 menit'
                                            }
                                        })
                                })
                        })
                    }
                }) 
        } else {
            res.json(loghandler.error)
        }
})

router.get('/textmaker/senja', async (req, res, next) => {
        var theme = req.query.theme,
             text = req.query.text,
             text2 = req.query.text2,
             text3 = req.query.text3,
             apikeyInput = req.query.apikey;

	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
        if (!theme) return res.json(loghandler.nottheme)
        if (theme != 'coffee-cup' && theme != 'coffee-cup2') return res.json(loghandler.notheme)
        if (!text) return res.json(loghandler.nottext)

        if (theme == 'coffee-cup') {
            try {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/put-any-text-in-to-coffee-cup-371.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            status : true,
                                            creator : `${creator}`,
                                            message : `jangan lupa follow ${creator}`,
                                            result:{
                                                url:urlnya,
                                                delete_url: delete_url,
                                                info: 'url akan hilang setelah 2 menit'
                                            }
                                        })
                                })
                        })
                    }
                })
                } catch (e) {
                	console.log(e);
                res.json(loghandler.error)
                }
        } else if (theme == 'coffee-cup2') {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/put-your-text-on-a-coffee-cup--174.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            status : true,
                                            creator : `${creator}`,
                                            message : `jangan lupa follow ${creator}`,
                                            result:{
                                                url:urlnya,
                                                delete_url: delete_url,
                                                info: 'url akan hilang setelah 2 menit'
                                            }
                                        })
                                })
                        })
                    }
                }) 
        } else {
            res.json(loghandler.error)
        }
})

router.get('/textmaker/metallic', async (req, res, next) => {
        var theme = req.query.theme,
             text = req.query.text,
             text2 = req.query.text2,
             text3 = req.query.text3,
             apikeyInput = req.query.apikey;

	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
        if (!theme) return res.json(loghandler.nottheme)
        if (theme != 'neon' && theme != 'glow') return res.json(loghandler.notheme)
        if (!text) return res.json(loghandler.nottext)

        if (theme == 'neon') {
            try {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/illuminated-metallic-effect-177.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            status : true,
                                            creator : `${creator}`,
                                            message : `jangan lupa follow ${creator}`,
                                            result:{
                                                url:urlnya,
                                                delete_url: delete_url,
                                                info: 'url akan hilang setelah 2 menit'
                                            }
                                        })
                                })
                        })
                    }
                })
                } catch (e) {
                	console.log(e);
                res.json(loghandler.error)
                }
        } else if (theme == 'glow') {
            request.post({
                url: "https://photooxy.com/other-design/create-metallic-text-glow-online-188.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            status : true,
                                            creator : `${creator}`,
                                            message : `jangan lupa follow ${creator}`,
                                            result:{
                                                url:urlnya,
                                                delete_url: delete_url,
                                                info: 'url akan hilang setelah 2 menit'
                                            }
                                        })
                                })
                        })
                    }
                }) 
        } else {
            res.json(loghandler.error)
        }
})

router.get('/textmaker/new3', async (req, res, next) => {
        var theme = req.query.theme,
             text = req.query.text,
             text2 = req.query.text2,
             text3 = req.query.text3,
             apikeyInput = req.query.apikey;

	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
        if (!theme) return res.json(loghandler.nottheme)
        if (theme != 'camouflage' && theme != 'stars-text') return res.json(loghandler.notheme)
        if (!text) return res.json(loghandler.nottext)

        if (theme == 'camouflage') {
            try {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/army-camouflage-fabric-text-effect-221.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            status : true,
                                            creator : `${creator}`,
                                            message : `jangan lupa follow ${creator}`,
                                            result:{
                                                url:urlnya,
                                                delete_url: delete_url,
                                                info: 'url akan hilang setelah 2 menit'
                                            }
                                        })
                                })
                        })
                    }
                })
                } catch (e) {
                	console.log(e);
                res.json(loghandler.error)
                }
        } else if (theme == 'stars-text') {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/write-stars-text-on-the-night-sky-200.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            status : true,
                                            creator : `${creator}`,
                                            message : `jangan lupa follow ${creator}`,
                                            result:{
                                                url:urlnya,
                                                delete_url: delete_url,
                                                info: 'url akan hilang setelah 2 menit'
                                            }
                                        })
                                })
                        })
                    }
                }) 
        } else {
            res.json(loghandler.error)
        }
})

router.get('/textmaker/new2', async (req, res, next) => {
        var theme = req.query.theme,
             text = req.query.text,
             text2 = req.query.text2,
             text3 = req.query.text3,
             apikeyInput = req.query.apikey;

	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
        if (!theme) return res.json(loghandler.nottheme)
        if (theme != 'smoke' && theme != 'rainbow') return res.json(loghandler.notheme)
        if (!text) return res.json(loghandler.nottext)

        if (theme == 'smoke') {
            try {
            request.post({
                url: "https://photooxy.com/other-design/create-an-easy-smoke-type-effect-390.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            status : true,
                                            creator : `${creator}`,
                                            message : `jangan lupa follow ${creator}`,
                                            result:{
                                                url:urlnya,
                                                delete_url: delete_url,
                                                info: 'url akan hilang setelah 2 menit'
                                            }
                                        })
                                })
                        })
                    }
                })
                } catch (e) {
                	console.log(e);
                res.json(loghandler.error)
                }
        } else if (theme == 'rainbow') {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/glow-rainbow-effect-generator-201.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            status : true,
                                            creator : `${creator}`,
                                            message : `jangan lupa follow ${creator}`,
                                            result:{
                                                url:urlnya,
                                                delete_url: delete_url,
                                                info: 'url akan hilang setelah 2 menit'
                                            }
                                        })
                                })
                        })
                    }
                }) 
        } else {
            res.json(loghandler.error)
        }
})

router.get('/maker', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            text = req.query.text
            
	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
    if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})

       fetch(encodeURI(`https://textmaker-api-zahirr.herokuapp.com/api/textmaker?text=${text}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'Bambang',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/maker2', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            text = req.query.text
            
	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
    if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})

       fetch(encodeURI(`https://textmaker-api-zahirr.herokuapp.com/api/textmaker2?text=${text}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'Bambang',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/maker3', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            text = req.query.text
            
	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
    if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})

       fetch(encodeURI(`https://textmaker-api-zahirr.herokuapp.com/api/textmaker3?text=${text}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'Bambang',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/maker4', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            text = req.query.text
            
	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
    if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})

       fetch(encodeURI(`https://textmaker-api-zahirr.herokuapp.com/api/textmaker4?text=${text}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'Bambang',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/maker/special/transformer', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            text = req.query.text
            
	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
    if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})

       fetch(encodeURI(`https://textmaker-api-zahirr.herokuapp.com/api/special/transformer?text=${text}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'Bambang',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/maker/special/epep', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            text = req.query.text
            
	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
    if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})

       fetch(encodeURI(`https://textmaker-api-zahirr.herokuapp.com/api/special/sertifikatepep?text=${text}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'Bambang',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/news/cnn', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            type = req.query.type
            
	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
    if (!type) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter type"})

       fetch(encodeURI(`https://news-api-zhirrr.vercel.app/v1/cnn-news/${type}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'Bambang',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/news/cnbc', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            type = req.query.type
            
	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
    if (!type) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter type"})

       fetch(encodeURI(`https://news-api-zhirrr.vercel.app/v1/cnbc-news/${type}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'Bambang',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/news/republika', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            type = req.query.type
            
	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
    if (!type) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter type"})

       fetch(encodeURI(`https://news-api-zhirrr.vercel.app/v1/republika-news/${type}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'Bambang',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/news/tempo', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            type = req.query.type
            
	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
    if (!type) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter type"})

       fetch(encodeURI(`https://news-api-zhirrr.vercel.app/v1/tempo-news/${type}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'Bambang',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/news/antara', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            type = req.query.type
            
	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
    if (!type) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter type"})

       fetch(encodeURI(`https://news-api-zhirrr.vercel.app/v1/antara-news/${type}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'Bambang',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/news/kumparan', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://news-api-zhirrr.vercel.app/v1/kumparan-news`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'Bambang',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/maker3d', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            text = req.query.text
           
	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
    if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})

       fetch(encodeURI(`https://textmaker-api-zahirr.herokuapp.com/api/text3d?text=${text}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'Bambang',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/maker3d/no2', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            text = req.query.text
            
	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
    if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})

       fetch(encodeURI(`https://textmaker-api-zahirr.herokuapp.com/api/text3d-2?text=${text}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'Bambang',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/maker3d/no3', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            text = req.query.text
            
	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
    if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})

       fetch(encodeURI(`https://textmaker-api-zahirr.herokuapp.com/api/text3d-3?text=${text}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'Bambang',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/maker3d/no4', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            text = req.query.text
            
	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
    if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})

       fetch(encodeURI(`https://textmaker-api-zahirr.herokuapp.com/api/text3d-4?text=${text}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'Bambang',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/textmaker/banner7', async (req, res, next) => {
        var theme = req.query.theme,
             text = req.query.text,
             text2 = req.query.text2,
             text3 = req.query.text3,
             apikeyInput = req.query.apikey;

	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
        if (!theme) return res.json(loghandler.nottheme)
        if (theme != 'funny-cup' && theme != 'gradient') return res.json(loghandler.notheme)
        if (!text) return res.json(loghandler.nottext)

        if (theme == 'funny-cup') {
            try {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/put-text-on-the-cup-387.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            status : true,
                                            creator : `${creator}`,
                                            message : `jangan lupa follow ${creator}`,
                                            result:{
                                                url:urlnya,
                                                delete_url: delete_url,
                                                info: 'url akan hilang setelah 2 menit'
                                            }
                                        })
                                })
                        })
                    }
                })
                } catch (e) {
                	console.log(e);
                res.json(loghandler.error)
                }
        } else if (theme == 'gradient') {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/gradient-avatar-text-effect-207.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            status : true,
                                            creator : `${creator}`,
                                            message : `jangan lupa follow ${creator}`,
                                            result:{
                                                url:urlnya,
                                                delete_url: delete_url,
                                                info: 'url akan hilang setelah 2 menit'
                                            }
                                        })
                                })
                        })
                    }
                }) 
        } else {
            res.json(loghandler.error)
        }
})

router.get('/textmaker/banner6', async (req, res, next) => {
        var theme = req.query.theme,
             text = req.query.text,
             text2 = req.query.text2,
             text3 = req.query.text3,
             apikeyInput = req.query.apikey;

	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
        if (!theme) return res.json(loghandler.nottheme)
        if (theme != 'metallic-glow' && theme != 'sweet-candy') return res.json(loghandler.notheme)
        if (!text) return res.json(loghandler.nottext)

        if (theme == 'metallic-glow') {
            try {
            request.post({
                url: "https://photooxy.com/other-design/create-metallic-text-glow-online-188.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            status : true,
                                            creator : `${creator}`,
                                            message : `jangan lupa follow ${creator}`,
                                            result:{
                                                url:urlnya,
                                                delete_url: delete_url,
                                                info: 'url akan hilang setelah 2 menit'
                                            }
                                        })
                                })
                        })
                    }
                })
                } catch (e) {
                	console.log(e);
                res.json(loghandler.error)
                }
        } else if (theme == 'sweet-candy') {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/sweet-andy-text-online-168.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            status : true,
                                            creator : `${creator}`,
                                            message : `jangan lupa follow ${creator}`,
                                            result:{
                                                url:urlnya,
                                                delete_url: delete_url,
                                                info: 'url akan hilang setelah 2 menit'
                                            }
                                        })
                                })
                        })
                    }
                }) 
        } else {
            res.json(loghandler.error)
        }
})

router.get('/textmaker/banner5', async (req, res, next) => {
        var theme = req.query.theme,
             text = req.query.text,
             text2 = req.query.text2,
             text3 = req.query.text3,
             apikeyInput = req.query.apikey;

	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
        if (!theme) return res.json(loghandler.nottheme)
        if (theme != 'wolf-metal' && theme != 'neon-glow') return res.json(loghandler.notheme)
        if (!text) return res.json(loghandler.nottext)

        if (theme == 'wolf-metal') {
            try {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/create-a-wolf-metal-text-effect-365.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            status : true,
                                            creator : `${creator}`,
                                            message : `jangan lupa follow ${creator}`,
                                            result:{
                                                url:urlnya,
                                                delete_url: delete_url,
                                                info: 'url akan hilang setelah 2 menit'
                                            }
                                        })
                                })
                        })
                    }
                })
                } catch (e) {
                	console.log(e);
                res.json(loghandler.error)
                }
        } else if (theme == 'neon-glow') {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/make-smoky-neon-glow-effect-343.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            status : true,
                                            creator : `${creator}`,
                                            message : `jangan lupa follow ${creator}`,
                                            result:{
                                                url:urlnya,
                                                delete_url: delete_url,
                                                info: 'url akan hilang setelah 2 menit'
                                            }
                                        })
                                })
                        })
                    }
                }) 
        } else {
            res.json(loghandler.error)
        }
})

router.get('/textmaker/banner4', async (req, res, next) => {
        var theme = req.query.theme,
             text = req.query.text,
             text2 = req.query.text2,
             text3 = req.query.text3,
             apikeyInput = req.query.apikey;

	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
        if (!theme) return res.json(loghandler.nottheme)
        if (theme != 'love' && theme != 'under-grass') return res.json(loghandler.notheme)
        if (!text) return res.json(loghandler.nottext)

        if (theme == 'love') {
            try {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/create-a-picture-of-love-message-377.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            status : true,
                                            creator : `${creator}`,
                                            message : `jangan lupa follow ${creator}`,
                                            result:{
                                                url:urlnya,
                                                delete_url: delete_url,
                                                info: 'url akan hilang setelah 2 menit'
                                            }
                                        })
                                })
                        })
                    }
                })
                } catch (e) {
                	console.log(e);
                res.json(loghandler.error)
                }
        } else if (theme == 'under-grass') {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/make-quotes-under-grass-376.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            status : true,
                                            creator : `${creator}`,
                                            message : `jangan lupa follow ${creator}`,
                                            result:{
                                                url:urlnya,
                                                delete_url: delete_url,
                                                info: 'url akan hilang setelah 2 menit'
                                            }
                                        })
                                })
                        })
                    }
                }) 
        } else {
            res.json(loghandler.error)
        }
})

router.get('/textmaker/banner2', async (req, res, next) => {
        var theme = req.query.theme,
             text = req.query.text,
             text2 = req.query.text2,
             text3 = req.query.text3,
             apikeyInput = req.query.apikey;

	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
        if (!theme) return res.json(loghandler.nottheme)
        if (theme != 'shadow' && theme != 'cemetery') return res.json(loghandler.notheme)
        if (!text) return res.json(loghandler.nottext)

        if (theme == 'shadow') {
            try {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/shadow-text-effect-in-the-sky-394.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            status : true,
                                            creator : `${creator}`,
                                            message : `jangan lupa follow ${creator}`,
                                            result:{
                                                url:urlnya,
                                                delete_url: delete_url,
                                                info: 'url akan hilang setelah 2 menit'
                                            }
                                        })
                                })
                        })
                    }
                })
                } catch (e) {
                	console.log(e);
                res.json(loghandler.error)
                }
        } else if (theme == 'cemetery') {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/text-on-scary-cemetery-gate-172.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            status : true,
                                            creator : `${creator}`,
                                            message : `jangan lupa follow ${creator}`,
                                            result:{
                                                url:urlnya,
                                                delete_url: delete_url,
                                                info: 'url akan hilang setelah 2 menit'
                                            }
                                        })
                                })
                        })
                    }
                }) 
        } else {
            res.json(loghandler.error)
        }
})

router.get('/textmaker/alam', async (req, res, next) => {
        var theme = req.query.theme,
             text = req.query.text,
             text2 = req.query.text2,
             text3 = req.query.text3,
             apikeyInput = req.query.apikey;

	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
        if (!theme) return res.json(loghandler.nottheme)
        if (theme != 'summer' && theme != 'flower') return res.json(loghandler.notheme)
        if (!text) return res.json(loghandler.nottext)

        if (theme == 'summer') {
            try {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/3d-summer-text-effect-367.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            status : true,
                                            creator : `${creator}`,
                                            message : `jangan lupa follow ${creator}`,
                                            result:{
                                                url:urlnya,
                                                delete_url: delete_url,
                                                info: 'url akan hilang setelah 2 menit'
                                            }
                                        })
                                })
                        })
                    }
                })
                } catch (e) {
                	console.log(e);
                res.json(loghandler.error)
                }
        } else if (theme == 'flower') {
            request.post({
                url: "https://photooxy.com/art-effects/flower-typography-text-effect-164.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            status : true,
                                            creator : `${creator}`,
                                            message : `jangan lupa follow ${creator}`,
                                            result:{
                                                url:urlnya,
                                                delete_url: delete_url,
                                                info: 'url akan hilang setelah 2 menit'
                                            }
                                        })
                                })
                        })
                    }
                }) 
        } else {
            res.json(loghandler.error)
        }
})

router.get('/cuaca', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
	    kabupaten = req.query.kabupaten

	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
	if(!kabupaten) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter kabupaten"})
       fetch(encodeURI(`https://docs-api-zahirrr.herokuapp.com/api/cuaca?kabupaten=${kabupaten}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/infogempa', async (req, res, next) => {
	        var apikeyInput = req.query.apikey

		if (!apikey) return res.json(loghandler.notparam)
		if (apikeyInput != 'KazuyaDev') return res.json(loghandler.invalidKey)
		Gempa()
		.then(result => {
			res.json({
				creator: creator,
				result
			})
		})
		.catch(e => {
			console.log('Error :', color(e, 'red'))
			res.json(loghandler.error)
		})
})


router.get('/covidindo', async (req, res, next) => {
        var apikeyInput = req.query.apikey

	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://covid19-api-zhirrr.vercel.app/api/covid-indonesia`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/covidworld', async (req, res, next) => {
        var apikeyInput = req.query.apikey

	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://covid19-api-zhirrr.vercel.app/api/world`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/truth', async (req, res, next) => {
        var apikeyInput = req.query.apikey

	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://raw.githubusercontent.com/mzailani/Latihan/master/truth.json`))
        .then(response => response.json())
        .then(data => {
        var isi = data[Math.floor(Math.random() * data.length)];
        var result = isi;
             res.json({
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/truthen', async (req, res, next) => {
        var apikeyInput = req.query.apikey

	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://raw.githubusercontent.com/mzailani/Latihan/master/truthen.json`))
        .then(response => response.json())
        .then(data => {
        var isi = data[Math.floor(Math.random() * data.length)];
        var result = isi;
             res.json({
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/dare', async (req, res, next) => {
        var apikeyInput = req.query.apikey

	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://raw.githubusercontent.com/mzailani/Latihan/master/dare.json`))
        .then(response => response.json())
        .then(data => {
        var isi = data[Math.floor(Math.random() * data.length)];
        var result = isi;
             res.json({
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/dareen', async (req, res, next) => {
        var apikeyInput = req.query.apikey

	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://raw.githubusercontent.com/mzailani/Latihan/master/dareen.json`))
        .then(response => response.json())
        .then(data => {
        var isi = data[Math.floor(Math.random() * data.length)];
        var result = isi;
             res.json({
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/muslim/tahlil', async (req, res, next) => {
        var apikeyInput = req.query.apikey

	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/dataTahlil.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/jadwalshalat', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            kota = req.query.kota

	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
        if(!kota) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter daerah"})

       fetch(encodeURI(`https://docs-jojo.herokuapp.com/api/jadwalshalat?daerah=${kota}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/samehadaku', async (req, res, next) => {
        var apikeyInput = req.query.apikey
         kata = req.query.kata   

	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
    if(!kata) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter judul"})
       fetch(encodeURI(`https://docs-jojo.herokuapp.com/api/samehadaku?q=${kata}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/quran', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            surah = req.query.surah,
            ayat = req.query.ayat

	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
    if (!surah) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter surah"})
    if (!ayat) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter ayat"})

       fetch(encodeURI(`https://alquran-apiii.vercel.app/surah/${surah}/${ayat}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/tafsirmimpi', async (req, res, next) => {
        var apikeyInput = req.query.apikey
         mimpi = req.query.mimpi   

	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
    if(!mimpi) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter mimpi"})
       fetch(encodeURI(`https://kocakz.herokuapp.com/api/primbon/tafsirmimpi?mimpi=${mimpi}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/artinama', async (req, res, next) => {
        var apikeyInput = req.query.apikey
         name = req.query.name   

	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
    if(!name) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter name"})
       fetch(encodeURI(`https://kocakz.herokuapp.com/api/primbon/artinama?name=${name}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/muslim/wirid', async (req, res, next) => {
        var apikeyInput = req.query.apikey

	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/dataWirid.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/muslim/ayatkursi', async (req, res, next) => {
        var apikeyInput = req.query.apikey

	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/dataAyatKursi.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/randomkatacinta', async (req, res, next) => {
        var apikeyInput = req.query.apikey

	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`http://docs-jojo.herokuapp.com/api/katacinta`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/muslim/doaharian', async (req, res, next) => {
        var apikeyInput = req.query.apikey

	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/dataDoaHarian.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/muslim/bacaanshalat', async (req, res, next) => {
        var apikeyInput = req.query.apikey

	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/dataBacaanShalat.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/muslim/niatshalat', async (req, res, next) => {
        var apikeyInput = req.query.apikey

	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/dataNiatShalat.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/kisahnabi', async (req, res, next) => {
	var nabi = req.query.nabi,
		apikeyInput = req.query.apikey;

		if (!apikey) return res.json(loghandler.notparam)
		if (apikeyInput != 'KazuyaDev') return res.json(loghandler.invalidKey)
		Searchnabi(nabi)
		.then(result => {
			res.json({
				creator: creator,
				result
			})
		})
		.catch(e => {
			console.log('Error :', color(e, 'red'))
			res.json(loghandler.error)
		})
})


router.get('/muslim/kisahnabi', async (req, res, next) => {
        var apikeyInput = req.query.apikey

	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/dataKisahNabi.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/random/asmaulhusna', async (req, res, next) => {
        var apikeyInput = req.query.apikey

	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://python-api-zhirrr.herokuapp.com/api/random/asmaulhusna`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/muslim/asmaulhusna', async (req, res, next) => {
        var apikeyInput = req.query.apikey

	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/dataAsmaulHusna.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/hadits', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            kitab = req.query.kitab,
            nomor = req.query.nomor

	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
    if (!kitab) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter kitab"})
    if (!nomor) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter nomor"})

       fetch(encodeURI(`https://hadits-api-zhirrr.vercel.app/books/${kitab}/${nomor}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/random/wallpaper', async (req, res, next) => {
        var apikeyInput = req.query.apikey

	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://docs-api-zahirrr.herokuapp.com/api/random/wallpaper?genre=acak`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/kuis/caklontong', async (req, res, next) => {
        var apikeyInput = req.query.apikey

	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://docs-api-zahirrr.herokuapp.com/api/quote?type=caklontong`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/family100', async (req, res, next) => {
        var apikeyInput = req.query.apikey

	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://raw.githubusercontent.com/mzailani/Latihan/master/family100.json`))
        .then(response => response.json())
        .then(data => {
        var isi = data[Math.floor(Math.random() * data.length)];
        var result = isi;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/kuis/tebakgambar', async (req, res, next) => {
        var apikeyInput = req.query.apikey

	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://docs-api-zahirrr.herokuapp.com/api/quote?type=tebakgambar`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/tolol', async (req, res) => {
	var apikeyInput = req.query.apikey,
	text = req.query.text
	
	if(!apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
	if(!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter kata"})
	
      hasil = (`https://hadi-api.herokuapp.com/api/tolol?nama=${text}`)
     data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync('tolol.png', data)
        res.sendFile(__path+'/tolol.png')
})

router.get('/music/joox', async(req, res, next) => {
  const query = req.query.query;
  const apikey = req.query.apikey;
  
  if(!query) return res.json(loghandler.notquery)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)){
  Joox(query)
  .then((result) => {
  res.json(result)
    res.json(result)
  });
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/music/spotify', async(req, res, next) => {
  const apikey = req.query.apikey;
  const query = req.query.query;
  if(!apikey) return res.json(loghandler.notparam)
  if(!query) return res.json(loghandler.notquery)
  
  if(listkey.includes(apikey)){
  fetch(encodeURI(`https://alpin-api-2021.herokuapp.com/api/spotify?apikey=alpin1&q=${query}`))
  .then(response => response.json())
        .then(hasil => {

        var result = hasil.data;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.invalidKey)
}
})
router.get('/download/ytmp3', async(req, res, next) => {
  const url = req.query.url;
  const apikey = req.query.apikey;
  if(!url) return res.json(loghandler.noturl)
  if(!apikey) return res.json(loghandler.notparam)
  if(listkey.includes(apikey)){
  ytDonlodMp3(url)
    .then((result) => {
      res.json({
        status: true,
        code: 200,
        creator: `${creator}`,
        result
      })
    })
    .catch((error) => {
      console.log(error)
      res.json(error)
    });
    } else {
    	res.json(loghandler.invalidKey)
    }
});

router.get('/download/ytmp4', async(req, res, next) => {
  const url = req.query.url;
  const apikey = req.query.apikey;

  if(!url) return res.json(loghandler.noturl)
  if(!apikey) return res.json(loghandler.notparam)
  if(listkey.includes(apikey)){
  ytDonlodMp4(url)
    .then((result) => {
      res.json({
        status: true,
        code: 200,
        creator: `${creator}`,
        result
      })
    })
    .catch((error) => {
      res.json(error)
    });
    } else {
    	res.json(loghandler.invalidKey)
    }
});

router.get("/yt/playmp3", async(req, res, next) => {
    const query = req.query.query;
    const apikey = req.query.apikey;
    
    if(!query) return res.json(loghandler.notquery)
    if(!apikey) return res.json(loghandler.notparam)
    if(listkey.includes(apikey)){
    ytPlayMp3(query)
        .then((result) => {
            res.json(result);
        })
        .catch((error) => {
            res.json(error);
        });
      } else {
      res.json(loghandler.invalidKey)
      }
});

router.get("/yt/playmp4", async(req, res, next) => {

    const query = req.query.query;

    const apikey = req.query.apikey;
    
    if(!query) return res.json(loghandler.notquery)
    if(!apikey) return res.json(loghandler.notparam)
    if(listkey.includes(apikey)){
    ytPlayMp4(query)
        .then((result) => {
            res.json(result);
        })
        .catch((error) => {
            res.json(error);
        });
      } else {
      res.json(loghandler.invalidKey)
      }
});


router.get('/yt/search', async(req, res, next) => {
    const query = req.query.query;
    const apikey = req.query.apikey;
    
    if(!query) return res.json(loghandler.notquery)
    if(!apikey) return res.json(loghandler.notparam)
    if(listkey.includes(apikey)){
    ytSearch(query)
        .then((result) => {
            res.json({
              status: true,
              code: 200,
              creator: `${creator}`,
              result
            })
        })
        .catch((error) => {
            res.json(error);
        });
      } else {
     res.json(loghandler.invalidKey)
     }
});

router.get('/download/tiktok', async (req, res, next) => {
    var Apikey = req.query.apikey,
        url = req.query.url

	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
     if (!url) return res.json(loghandler.noturl)
     Tiktok(url)
     .then((data) => {
       res.json(data)
     })
    } else {
res.json(loghandler.invalidKey)
}
})

router.get('/download/ig', async(req, res, next) => {
  const url = req.query.url;
  const apikey = req.query.apikey;
  if(!url) return res.json(loghandler.noturl)
  if(!apikey) return res.json(loghandler.notparam)
  if(listkey.includes(apikey)){
  igDownload(url)
    .then((data) => {
      result = {
        status: true,
        code: 200,
        creator: `${creator}`,
        id: data.id,
        shortCode: data.shortCode,
        caption: data.caption,
        result: data.url
      }
      res.json(result)
    })
    .catch((err) => {
      res.json(err);
    });
    } else {
    	res.json(loghandler.invalidKey)
    }
});

router.get('/download/fb', async (req, res, next) => {

        var Apikey = req.query.apikey,
            url = req.query.url
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
    if (!url) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter url"})

       FB(url)
       .then((data) => {
         res.json({
           status: true,
           code: 200,
           creator: `${creator}`,
           title: data.title,
           desc: data.deskripsi,
           durasi: data.durasi,
           thumb: data.thumbnail,
           result: data.hd
         })
       });
} else {
res.json(loghandler.invalidKey)
}
});

router.get('/stalk/tiktok', async (req, res, next) => {
    var Apikey = req.query.apikey,
        username = req.query.username

	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
    if (!username) return res.json(loghandler.notusername)


    TikTokScraper.getUserProfileInfo(username)
        .then(user => {
            res.json({
                status : true,
                creator : `${creator}`,
                result : user
            })
        })
        .catch(e => {
             res.json({
                 status : false,
                 creator : `${creator}`,
                 message : "error, mungkin username anda tidak valid"
             })
         })
   } else {
res.json(loghandler.invalidKey)
}
})

router.get('/stalk/ig', async(req, res, next) => {
  const username = req.query.username;
  const apikey = req.query.apikey;
  if(!username) return res.json(loghandler.notusername)
  if(!apikey) return res.json(loghandler.notparam)
  if(listkey.includes(apikey)){
  igStalk(username)
    .then((result) => {
      res.json({
        status : true,
        code: 200,
        creator : `${creator}`,
        result
      });
    })
    .catch((err) => {
      res.json(err);
    });
    } else {
    	res.json(loghandler.invalidKey)
    }
});


router.get('/stalk/npm', async (req, res, next) => {
        var Apikey = req.query.apikey,
            query = req.query.query
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
    if (!query) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter query"})

       fetch(encodeURI(`https://registry.npmjs.org/${query}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})


router.get('/random/quotes', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://python-api-zhirrr.herokuapp.com/api/random/quotes`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})


router.get('/jadwal-bioskop', async(req, res, next) => {
var Apikey = req.query.apikey

if(!Apikey) return res.json(loghandler.notparam)
if(listkey.includes(Apikey)){
const { default: Axios } = require('axios')
const cheerio = require('cheerio')

Axios.get('https://jadwalnonton.com/now-playing')
.then(({ data }) => {
     const $ = cheerio.load(data)
     let title = []
     let url = []
     let img = []
 	$('div.row > div.item > div.clearfix > div.rowl > div.col-xs-6 > a').get().map((rest) => {
         url.push($(rest).attr('href'))
         })
         $('div.row > div.item > div.clearfix > div.rowl > div.col-xs-6 > a > img').get().map((rest) => {
        	title.push($(rest).attr('alt'))
         })
         $('div.row > div.item > div.clearfix > div.rowl > div.col-xs-6 > a > img').get().map((rest) => {
        	img.push($(rest).attr('src'))
         })
     let result = []
     for (let i = 0; i < url.length; i++) {
          result.push({
               	url: url[i],
               	title: title[i],
               	img: img[i]
          })
     }
     res.json({
     creator:  `${creator}`,
     status: true,
     result: result
     })
})
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/short/tinyurl', async (req, res, next) => {
    var Apikey = req.query.apikey,
        url = req.query.url

	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
     if (!url) return res.json(loghandler.noturl)
     request(`https://tinyurl.com/api-create.php?url=${url}`, function (error, response, body) {
         try {
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result : `${body}`
             })
         } catch (e) {
             console.log('Error :', color(e,'red'))
             res.json(loghandler.invalidlink)
         }
     })
   } else {
res.json(loghandler.invalidKey)
}
})

router.get('/base', async (req, res, next) => {
	var type = req.query.type,
		encode = req.query.encode,
		decode = req.query.decode,
		Apikey = req.query.apikey;
		if (!Apikey) return res.json(loghandler.notparam)
		if (listkey.includes(Apikey)){
		if (!type) return res.json({status: false, creator, code: 404, message: 'masukan parameter type, type yang tersedia : base64 , base32'})
		if (type == 'base64' && encode){
				Base("b64enc", encode)
				.then(result => {
					res.json({
						status:true,
						creator: `${creator}`,
						result
					})
				})
			} else if (type == 'base64' && decode){
				Base("b64dec", decode)
				.then(result => {
					res.json({
						status: true,
						creator: `${creator}`,
						result
					})
				})
			} else if (type == 'base32' && encode){
				Base('b32enc', encode)
				.then(result => {
					res.json({
						status:true,
						creator: `${creator}`,
						result
					})
				})
			} else if (type == 'base32' && decode){
				Base('b32dec', decode)
				.then(result => {
					res.json({
						status:true,
						creator: `${creator}`,
						result
					})
				})
			} else if(!(encode || decode)){
				res.json({
					status:false,
					creator: `${creator}`,
					message: "tambahkan parameter encode/decode"
				})
			} else {
				res.json(loghandler.error)
			}
	} else {
res.json(loghandler.invalidKey)
}
});

router.get('/tools/wpuser', async(req, res, next) => {
  const link = req.query.url;
  const apikey = req.query.apikey;
  
  if(!link) return res.json(loghandler.noturl)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
    WPUser(link)
    .then((data) => {
      res.json(data)
    })
} else {
  res.json(loghandler.invalidKey)
};
});

router.get('/info/cuaca', async(req, res, next) => {
  const apikey = req.query.apikey;
  const kota = req.query.kota;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!kota) return res.json({status: false, code: 406, message: 'masukkan parameter kota'})
  if(listkey.includes(apikey)) {
    Cuaca(kota)
    .then((data) => {
      res.json(data)
    })
  } else {
    res.json(loghandler.invalidKey)
  }
})
router.get('/info/gempa', async (req, res, next) => {
	        var Apikey = req.query.apikey

		if (!Apikey) return res.json(loghandler.notparam)
		if (listkey.includes(Apikey)){
		Gempa()
		.then(result => {
			res.json({
				creator: creator,
				result
			})
		})
		.catch(e => {
			console.log('Error :', color(e, 'red'))
			res.json(loghandler.error)
		})
	} else {
res.json(loghandler.invalidKey)
}
})


router.get('/muslim/kisahnabi', async (req, res, next) => {
	var nabi = req.query.nabi,
		Apikey = req.query.apikey;

		if (!Apikey) return res.json(loghandler.notparam)
		if (listkey.includes(Apikey)){
		Searchnabi(nabi)
		.then(result => {
			res.json({
				creator: creator,
				result
			})
		})
		.catch(e => {
			console.log('Error :', color(e, 'red'))
			res.json(loghandler.error)
		})
	} else {
res.json(loghandler.invalidKey)
}
})


router.get('/muslim/hadits', async (req, res, next) => {
        var Apikey = req.query.apikey,
            kitab = req.query.kitab,
            nomor = req.query.nomor
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
    if (!kitab) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter kitab"})
    if (!nomor) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter nomor"})

       fetch(encodeURI(`https://hadits-api-zhirrr.vercel.app/books/${kitab}/${nomor}`))
        .then(response => response.json())
        .then(data => {
             res.json(
             data
             )
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})


router.get('/muslim/quran', async (req, res, next) => {
        var Apikey = req.query.apikey,
            surah = req.query.surah,
            ayat = req.query.ayat
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
    if (!surah) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter surah"})
    if (!ayat) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter ayat"})

       fetch(encodeURI(`https://alquran-apiii.vercel.app/surah/${surah}/${ayat}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/muslim/tahlil', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/dataTahlil.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})


router.get('/muslim/wirid', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/dataWirid.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})


router.get('/muslim/ayatkursi', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/dataAyatKursi.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})


router.get('/muslim/doaharian', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/dataDoaHarian.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})


router.get('/muslim/bacaanshalat', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/dataBacaanShalat.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})


router.get('/muslim/niatshalat', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/dataNiatShalat.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})


router.get('/muslim/kisahnabi', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/dataKisahNabi.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})


router.get('/muslim/asmaulhusna', async (req, res, next) => {
        var Apikey = req.query.apikey

	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

	asmaul = JSON.parse(fs.readFileSync(__path +'/data/AsmaulHusna.json'));
	res.json(asmaul)
} else {
res.json(loghandler.invalidKey)
}
})


router.get('/muslim/niatshubuh', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/NiatShubuh.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})


router.get('/muslim/niatdzuhur', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/NiatDzuhur.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})


router.get('/muslim/niatmaghrib', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/NiatMaghrib.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})


router.get('/muslim/niatisya', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/NiatIsya.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})


router.get('/muslim/niatashar', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/NiatAshar.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})
router.get('/muslim/jadwalshalat', async (req, res, next) => {
        var Apikey = req.query.apikey,
            kota = req.query.kota
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
        if(!kota) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter kota"})

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/Zhirrr-Database/main/adzan/${kota}/2021/03.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/search/image', async(req, res, next) => {
  const apikey = req.query.apikey;
  const query = req.query.query;
  
  if(!query) return res.json(loghandler.notquery)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)){
    try {
        var options = {
            url: `http://results.dogpile.com/serp?qc=images&q=${query}`,
            method: "GET",
            headers: {
                "Accept": "text/html",
                "User-Agent": "Chrome"
            }
        }
        request(options, function(error, response, responseBody) {
            if (error) return

            $ = cheerio.load(responseBody)
            var links = $(".image a.link")
            var cari = new Array(links.length).fill(0).map((v, i) => links.eq(i).attr("href"))
            if (!cari.length) return
            var hasil = cari[Math.floor(Math.random() * cari.length)]
        res.json({
              status: true,
              code: 200,
              creator: `${creator}`,
              result: hasil
            })
        })
    } catch (e) {}
  } else {
    res.json(loghandler.invalidKey)
  }
})
router.get('/wallpaper/cyberspace', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  Cc = JSON.parse(fs.readFileSync(__path +'/data/CyberSpace.json'));
  const randCc = Cc[Math.floor(Math.random() * Cc.length)]
  data = await fetch(randCc).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/CyberSpace.jpeg', data)
  res.sendFile(__path +'/tmp/CyberSpace.jpeg')
} else {
res.json(loghandler.invalidKey)
}
})


router.get('/wallpaper/teknologi', async (req, res, next) => {
        const Apikey = req.query.apikey;
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

const Techno = JSON.parse(fs.readFileSync(__path +'/data/Technology.json'))
const randTech = Techno[Math.floor(Math.random() * Techno.length)]
//tansole.log(randTech)
data = await fetch(randTech).then(v => v.buffer())
await fs.writeFileSync(__path +'/tmp/techno.jpeg', data)
res.sendFile(__path +'/tmp/techno.jpeg')
} else {
res.json(loghandler.invalidKey)
}
})


router.get('/wallpaper/muslim', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const Muslim = JSON.parse(fs.readFileSync(__path +'/data/Islamic.json'));
  const randMuslim = Muslim[Math.floor(Math.random() * Muslim.length)];
  data = await fetch(randMuslim).then(v => v.buffer());
  await fs.writeFileSync(__path +'/tmp/muslim.jpeg', data)
  res.sendFile(__path +'/tmp/muslim.jpeg');
} else {
res.json(loghandler.invalidKey)
}
})


router.get('/wallpaper/programming', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const Progam = JSON.parse(fs.readFileSync(__path +'/data/Programming.json'));
  const randProgam = Progam[Math.floor(Math.random() * Progam.length)];
  data = await fetch(randProgam).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/Programming.jpeg', data)
  res.sendFile(__path +'/tmp/Programming.jpeg')
} else {
res.json(loghandler.invalidKey)
}
})


router.get('/wallpaper/pegunungan', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const Mount = JSON.parse(fs.readFileSync(__path +'/data/Mountain.json'));
  const randMount = Mount[Math.floor(Math.random() * Mount.length)];
  data = await fetch(randMount).then(v => v.buffer());
  await fs.writeFileSync(__path +'/tmp/Mountain.jpeg', data)
  res.sendFile(__path+ '/tmp/Mountain.jpeg');
} else {
res.json(loghandler.invalidKey)
}
})


router.get('/random/quotes/muslim', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://docs-api-zahirrr.herokuapp.com/api/quote?type=agamis`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/random/asmaulhusna', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://python-api-zhirrr.herokuapp.com/api/random/asmaulhusna`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/info/wikipedia', async (req, res, next) => {
        var Apikey = req.query.apikey,
            search = req.query.search
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
        if(!search) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter search"})

       fetch(encodeURI(`https://docs-api-zahirrr.herokuapp.com/api/wiki?keyword=${search}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})


router.get('/info/drakorasia', async (req, res, next) => {
        var Apikey = req.query.apikey,
            search = req.query.search
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
        if(!search) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter search"})

       fetch(encodeURI(`http://docs-api-zahirrr.herokuapp.com/api/drakorasia?search=${search}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/fakedata', async (req, res, next) => {
        var Apikey = req.query.apikey,
            country = req.query.country
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
        if(!country) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter country"})

       fetch(encodeURI(`https://fakename-api-zhirrr.vercel.app/api/fakename?country=${country}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})


router.get('/hilih', async (req, res, next) => {
        var Apikey = req.query.apikey,
            kata = req.query.kata
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
        if(!kata) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter kata"})

       fetch(encodeURI(`https://hilih-api-zhirrr.vercel.app/api/hilih?kata=${kata}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})


router.get('/music/liriklagu', async (req, res, next) => {
        var Apikey = req.query.apikey,
            lagu = req.query.query;
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
        if(!lagu) return res.json(loghandler.notquery)
        Lirik(lagu)
        .then((lirik) => {
          res.json({
            status: true,
            code: 200,
            creator: `${creator}`,
            result: lirik.data
          })
        });
} else {
res.json(loghandler.invalidKey)
}
})


router.get('/music/chordlagu', async (req, res, next) => {
        var Apikey = req.query.apikey,
            lagu = req.query.lagu
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
        if(!lagu) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter kata"})

       fetch(encodeURI(`https://python-api-zhirrr.herokuapp.com/api/chord?q=${lagu}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})


router.get('/info/kbbi', async (req, res, next) => {
        var Apikey = req.query.apikey,
            kata = req.query.kata
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
        if(!kata) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter kata"})

       fetch(encodeURI(`https://kbbi-api-zhirrr.vercel.app/api/kbbi?text=${kata}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})


router.get('/info/covidindo', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://covid19-api-zhirrr.vercel.app/api/covid-indonesia`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})


router.get('/info/covidworld', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://covid19-api-zhirrr.vercel.app/api/world`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/random/meme', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://docs-api-zahirrr.herokuapp.com/api/meme`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})


router.get('/info/kodepos', async (req, res, next) => {
        var Apikey = req.query.apikey,
	    kota = req.query.kota
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
	if(!kota) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter kota"})

       fetch(encodeURI(`https://kodepos-api-zhirrr.vercel.app/?q=${kota}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})


router.get('/translate', async (req, res, next) => {
        var Apikey = req.query.apikey,
	    kata = req.query.kata
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
	if(!kata) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter kata"})
       fetch(encodeURI(`https://docs-api-zahirrr.herokuapp.com/api/translate?text=${kata}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})


router.get('/anime/kusonime', async (req, res, next) => {
        var Apikey = req.query.apikey,
	    search = req.query.search
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
	if(!search) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter search"})
       fetch(encodeURI(`https://docs-api-zahirrr.herokuapp.com/api/kusonime?search=${search}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/anime/loli', async(req, res, next) => {
    var apikey = req.query.apikey
    if (!apikey) return res.json(loghandler.notparam)
    if(listkey.includes(apikey)){
    try {
        var options = {
            url: "http://results.dogpile.com/serp?qc=images&q= " + "Loli",
            method: "GET",
            headers: {
                "Accept": "text/html",
                "User-Agent": "Chrome"
            }
        }
        request(options, function(error, response, responseBody) {
            if (error) return

            $ = cheerio.load(responseBody)
            var links = $(".image a.link")
            var cari = new Array(links.length).fill(0).map((v, i) => links.eq(i).attr("href"))
            if (!cari.length) return
            var hasil = cari[Math.floor(Math.random() * cari.length)]
        res.json({
              status: true,
              code: 200,
              creator: `${creator}`,
              result: hasil
            })
        })
    } catch (e) {}
    } else {
      res.json(loghandler.invalidKey)
    }
});


router.get('/anime/manga', async (req, res, next) => {
        var Apikey = req.query.apikey,
	    search = req.query.search
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
	if(!search) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter search"})
       fetch(encodeURI(`https://docs-api-zahirrr.herokuapp.com/api/manga?keyword=${search}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})


router.get('/kuis/caklontong', async (req, res, next) => {
        var Apikey = req.query.apikey
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
       fetch(encodeURI(`https://docs-api-zahirrr.herokuapp.com/api/quote?type=caklontong`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})


router.get('/kuis/tebakGambar', async (req, res, next) => {
  var apikey = req.query.apikey;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(listkey.includes(apikey)){
  let result = await tebakGambar()
  if (result) {
    const hasil = {
      status: true,
      code: 200,
      creator: `${creator}`,
      image: result.img,
      jawaban: result.jawaban,
      clue: result.petunjuk
    }
    res.json(hasil)
  } else {
    return res.status(408).json({
      status: res.statusCode,
      error: 'Emror'
    })
  }
  } else {
  res.json(loghandler.invalidKey)
  }
})

/**
* @Maker
**/



router.get("/photooxy/shadow", async(req, res, next) => {
  const text1 = req.query.text;
  const apikey = req.query.apikey;
  if(!text1) return res.json(loghandler.nottext1)
  if(!apikey) return res.json(loghandler.notparam)
  if(listkey.includes(apikey)){
  pShadow(text1)
    .then((data) => {
      const result = {
        status: true,
        code: 200,
        creator: `${creator}`,
        result: data.url
      }
      res.json(result)
    })
    .catch((error) => {
      res.json(error)
    });
    } else {
    	res.json(loghandler.invalidKey)
    }
});

router.get("/photooxy/romantic", async(req, res, next) => {
  const text1 = req.query.text;
  const apikey = req.query.apikey;
  if(!text1) return res.json(loghandler.nottext1)
  if(!apikey) return res.json(loghandler.notparam)
  if(listkey.includes(apikey)){
  pRomantic(text1)
    .then((data) => {
      const result = {
        status: true,
        code: 200,
        creator: `${creator}`,
        result: data.url
      }
      res.json(result)
    })
    .catch((error) => {
      res.json(error)
    });
    } else {
    	res.json(loghandler.invalidKey)
    }
});

// @PHOTOOXY

router.get("/photooxy/smoke", async(req, res, next) => {
  const text1 = req.query.text;
  const apikey = req.query.apikey;
  if(!text1) return res.json(loghandler.nottext1)
  if(!apikey) return res.json(loghandler.notparam)
  if(listkey.includes(apikey)){
  pSmoke(text1)
    .then((data) => {
      const result = {
        status: true,
        code: 200,
        creator: `${creator}`,
        result: data.url
      }
      res.json(result)
    })
    .catch((error) => {
      res.json(error)
    });
    } else {
    	res.json(loghandler.invalidKey)
    }
});

router.get("/photooxy/burn-papper", async(req, res, next) => {
  const text1 = req.query.text;
  const apikey = req.query.apikey;
  if(!text1) return res.json(loghandler.nottext1)
  if(!apikey) return res.json(loghandler.notparam)
  if(listkey.includes(apikey)){
  pBurnPapper(text1)
    .then((data) => {
      const result = {
        status: true,
        code: 200,
        creator: `${creator}`,
        result: data.url
      }
      res.json(result)
    })
    .catch((error) => {
      res.json(error)
    });
    } else {
    	res.json(loghandler.invalidKey)
    }
});

router.get("/photooxy/naruto", async(req, res, next) => {
  const text1 = req.query.text;
  const apikey = req.query.apikey;
  if(!text1) return res.json(loghandler.nottext1)
  if(!apikey) return res.json(loghandler.notparam)
  if(listkey.includes(apikey)){
  pNaruto(text1)
    .then((data) => {
      const result = {
        status: true,
        code: 200,
        creator: `${creator}`,
        result: data.url
      }
      res.json(result)
    })
    .catch((error) => {
      res.json(error)
    });
    } else {
    	res.json(loghandler.invalidKey)
    }
});

router.get("/photooxy/love-message", async(req, res, next) => {
  const text1 = req.query.text;
  const apikey = req.query.apikey;
  if(!text1) return res.json(loghandler.nottext1)
  if(!apikey) return res.json(loghandler.notparam)
  if(listkey.includes(apikey)){
  pLoveMsg(text1)
    .then((data) => {
      const result = {
        status: true,
        code: 200,
        creator: `${creator}`,
        result: data.url
      }
      res.json(result)
    })
    .catch((error) => {
      res.json(error)
    });
    } else {
    	res.json(loghandler.invalidKey)
    }
});

router.get("/photooxy/message-under-grass", async(req, res, next) => {
  const text1 = req.query.text;
  const apikey = req.query.apikey;
  if(!text1) return res.json(loghandler.nottext1)
  if(!apikey) return res.json(loghandler.notparam)
  if(listkey.includes(apikey)){
  pMsgGrass(text1)
    .then((data) => {
      const result = {
        status: true,
        code: 200,
        creator: `${creator}`,
        result: data.url
      }
      res.json(result)
    })
    .catch((error) => {
      res.json(error)
    });
    } else {
    	res.json(loghandler.invalidKey)
    }
});

router.get("/photooxy/glitch", async(req, res, next) => {
  const text1 = req.query.text1;
  const text2 = req.query.text2;
  const apikey = req.query.apikey;
  if(!text1) return res.json(loghandler.nottext1)
  if(!text2) return res.json(loghandler.nottext2)
  if(!apikey) return res.json(loghandler.notparam)
  if(listkey.includes(apikey)){
  pGlitch(text1, text2)
    .then((data) => {
      const result = {
        status: true,
        code: 200,
        creator: `${creator}`,
        result: data.url
      }
      res.json(result)
    })
    .catch((error) => {
      res.json(error)
    });
    } else {
    	res.json(loghandler.invalidKey)
    }
});

router.get("/photooxy/double-heart", async(req, res, next) => {
  const text1 = req.query.text;
  const apikey = req.query.apikey;
  if(!text1) return res.json(loghandler.nottext1)
  if(!apikey) return res.json(loghandler.notparam)
  if(listkey.includes(apikey)){
  pDoubleHeart(text1)
    .then((data) => {
      const result = {
        status: true,
        code: 200,
        creator: `${creator}`,
        result: data.url
      }
      res.json(result)
    })
    .catch((error) => {
      res.json(error)
    });
    } else {
    	res.json(loghandler.invalidKey)
    }
});

router.get("/photooxy/coffe-cup", async(req, res, next) => {
  const text1 = req.query.text;
  const apikey = req.query.apikey;
  if(!text1) return res.json(loghandler.nottext1)
  if(!apikey) return res.json(loghandler.notparam)
  if(listkey.includes(apikey)){
  pCoffeCup(text1)
    .then((data) => {
      const result = {
        status: true,
        code: 200,
        creator: `${creator}`,
        result: data.url
      }
      res.json(result)
    })
    .catch((error) => {
      res.json(error)
    });
    } else {
    	res.json(loghandler.invalidKey)
    }
});

router.get("/photooxy/love-text", async(req, res, next) => {
  const text1 = req.query.text;
  const apikey = req.query.apikey;
  if(!text1) return res.json(loghandler.nottext1)
  if(!apikey) return res.json(loghandler.notparam)
  if(listkey.includes(apikey)){
  pLoveText(text1)
    .then((data) => {
      const result = {
        status: true,
        code: 200,
        creator: `${creator}`,
        result: data.url
      }
      res.json(result)
    })
    .catch((error) => {
      res.json(error)
    });
    } else {
    	res.json(loghandler.invalidKey)
    }
});

router.get("/photooxy/butterfly", async(req, res, next) => {
  const text1 = req.query.text;
  const apikey = req.query.apikey;
  if(!text1) return res.json(loghandler.nottext1)
  if(!apikey) return res.json(loghandler.notparam)
  if(listkey.includes(apikey)){
  pButterfly(text1)
  .then((data) => {
      const result = {
        status: true,
        code: 200,
        creator: `${creator}`,
        result: data.url
      }
      res.json(result)
    })
    .catch((error) => {
      res.json(loghandler.error)
    })
    } else {
    	res.json(loghandler.invalidKey)
    }
});

/*
@ AKHIR PHOTOOXY
*/
/*
@ TEXTPROME
*/
router.get('/textpro/logo-wolf', async(req, res, next) => {
  const apikey = req.query.apikey;
  const text = req.query.text;
  const text2 = req.query.text2;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  if(!text2) return res.json(loghandler.nottext2)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/create-wolf-logo-black-white-937.html", [
    text, text2
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/natural-leaves', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/natural-leaves-text-effect-931.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/logo-wolf2', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  const text2 = req.query.text2;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  if(!text2) return res.json(loghandler.nottext2)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/create-wolf-logo-galaxy-online-936.html", [
    text, text2
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/logo-wolf', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  const text2 = req.query.text2;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  if(!text2) return res.json(loghandler.nottext2)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/matrix-style-text-effect-online-884.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/logo-wolf', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  const text2 = req.query.text2;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  if(!text2) return res.json(loghandler.nottext2)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/firework-sparkle-text-effect-930.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/thunder', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  const text2 = req.query.text2;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  if(!text2) return res.json(loghandler.nottext2)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/thunder-text-effect-online-881.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/black-pink', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/create-blackpink-logo-style-online-1001.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/drop-water', async(req, res, next) => {



  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/dropwater-text-effect-872.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/christmas', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/create-a-christmas-holiday-snow-text-effect-1007.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/3d-gradient', async(req, res, next) => {
  const apikey = req.query.apikey;
  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/3d-gradient-text-effect-online-free-1002.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/porn-hub', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text1;
  const text2 = req.query.text2;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext1)
  if(!text2) return res.json(loghandler.nottext2)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/pornhub-style-logo-online-generator-free-977.html", [
    text, text2
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

/*
@AKHIR TEXTPRO ME
*/

router.get('/maker/dadu', async (req, res, next) => {
  Apikey = req.query.apikey;

  if(!Apikey) return res.json(loghandler.notparam)
  if(listkey.includes(Apikey)) {
      random = Math.floor(Math.random() * 6) + 1
      hasil = 'https://www.random.org/dice/dice' + random + '.png'
     data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/dadu.png', data)
        res.sendFile(__path+'/tmp/dadu.png')
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/asupan', async (req, res, next) => {
  Apikey = req.query.apikey;
  
  if(!Apikey) return res.json(loghandler.notparam)
  if(listkey.includes(Apikey)) {
    const asupan = JSON.parse(fs.readFileSync(__path +'/data/asupan.json'));
    const Asupan = asupan[Math.floor(Math.random() * asupan.length)];
    let hasil = Asupan.asupan;
    data = await fetch(hasil).then(v => v.buffer())
    await fs.writeFileSync(__path +'/tmp/asupan.mp4', data)
    res.sendFile(__path +'/tmp/asupan.mp4')
  } else {
    res.json(loghandler.invalidKey)
  }
});
 
router.get("/maker/nulis", async (req, res, next) => {
  
  apikey = req.query.apikey;
  text = req.query.text;
  
  if(!text) return res.json(loghandler.nottext)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
    let hasil = 'https://api.zeks.xyz/api/nulis?text='+ text +'&apikey=apivinz' 
    data = await fetch(hasil).then(v => v.buffer())
    await fs.writeFileSync(__path +'/tmp/nulis.jpeg', data)
    res.sendFile(__path +'/tmp/nulis.jpeg')
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/maker/ttp', async (req, res, next) => {

  Apikey = req.query.apikey;
  if (!req.query.text) return res.json({ status: 404, error: 'masukkan parameter text'})
  if(!Apikey) return res.json(loghandler.notparam)
  if(listkey.includes(Apikey)) {
  random = new Date
data = await fetch(`https://api.areltiyan.site/sticker_maker?text=${encodeURIComponent(req.query.text)}`).then(v => v.json())
         base64 = data.base64
         var buffer = base64.slice(22)
         await fs.writeFileSync(__path +`/tmp/ttp.png`, buffer, 'base64')
        res.sendFile(__path+'/tmp/ttp.png')
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/maker/attp', async(req, res, next) => {

  const text = req.query.text;
  const apikey = req.query.apikey;
  if(!text) return res.json(loghandler.nottext)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
  let hasil = 'https://alpin-api-2021.herokuapp.com/api/attp?text='+ text +'&apikey=alpin1'
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/attp.gif', data)
  res.sendFile(__path +'/tmp/attp.gif')
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/maker/harta-tahta', async(req, res, next) => {
  const text = req.query.text;
  const apikey = req.query.apikey;
  
  if(!text) return res.json(loghandler.nottext)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
  let hasil = 'https://api.zeks.xyz/api/hartatahta?text='+ text +'&apikey=apivinz' 
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/tahta.jpg', data)
  res.sendFile(__path +'/tmp/tahta.jpg')
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/maker/skatch', async(req, res, next) => {
  const apikey = req.query.apikey;
  const url = req.query.url;
  if(!url) return res.json(loghandler.noturl)
  if(!apikey) return res.json(loghandler.notparam)
  if(listkey.includes(apikey)){
  let hasil = `https://lindow-api.herokuapp.com/api/sketcheffect?img=${url}&apikey=LindowApi`
  data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/skatch.jpeg', data)
        res.sendFile(__path+'/tmp/skatch.jpeg')
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/maker/emoji2png', async(req, res, next) => {
  const apikey = req.query.apikey;
  const Emoji = req.query.text;
  
  if(!apikey) return jes.json(loghandler.notparam)
  if(!Emoji) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)) {

    emoji.get(Emoji)
    .then(img_emoji => {
      const result = {
        status: true,
        code: 200,
        creator: `${creator}`,
        result: img_emoji.images[0].url
      }
      res.json(result)
    })
  
    .catch((err) => {
      res.json(loghandler.error)
    })
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/web2plain-text', async(req, res, next) => {
  const apikey = req.query.apikey;
  const url = req.query.url;
  
  if(!url) return res.json(loghandler.noturl)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)){
    fetch(encodeURI(`https://websitetextextraction.apifex.com/api/v1/extract?url=${url}`))
    .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
               status: true,
               code: 200,
               creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
  } else {
    res.json(loghandler.invalidKey)
  }
});


router.get('/cekapikey', async(req, res, next) => {
  const apikey = req.query.apikey;
  if(!apikey) return res.json(loghandler.notparam)
  if(listkey.includes(apikey)) {
    res.json({
      status: 'active',
      creator: `${creator}`,
      apikey: `${apikey}`,
      message: 'APIKEY ACTIVE'
    })
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.use(function (req, res) {

    res.status(404)
    .set("Content-Type", "text/html")
    .sendFile(__path + '/views/404.html');
});

module.exports = router
