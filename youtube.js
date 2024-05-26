const axios = require("axios")
const yt = require("ytdl-core")
const yts = require("yt-search")

async function ytDonlodMp3(url) {
  return new Promise((resolve, reject) => {
    try {
      const id = yt.getVideoID(url)
      const yutub = yt.getInfo(`https://www.youtube.com/watch?v=${id}`)
      .then((data) => {
        let pormat = data.formats
        let audio = []
        for (let i = 0; i < pormat.length; i++) {
          if (pormat[i].mimeType == 'audio/webm; codecs=\"opus\"') {
            let aud = pormat[i]
            audio.push(aud.url)
          }
        }
        const title = data.player_response.microformat.playerMicroformatRenderer.title.simpleText
        const thumb = data.player_response.microformat.playerMicroformatRenderer.thumbnail.thumbnails[0].url
        const channel = data.player_response.microformat.playerMicroformatRenderer.ownerChannelName
        const views = data.player_response.microformat.playerMicroformatRenderer.viewCount
        const published = data.player_response.microformat.playerMicroformatRenderer.publishDate
        
        const result = {
          title: title,
          thumb: thumb,
          channel: channel,
          published: published,
          views: views,
          url: audio
        }
        return(result)
      })
      resolve(yutub)
    } catch (error) {
        reject(error);
      }
      console.log(error)
  })
}

async function ytDonlodMp4(url) {
  return new Promise((resolve, reject) => {
    try {
      const id = yt.getVideoID(url)
      const yutub = yt.getInfo(`https://www.youtube.com/watch?v=${id}`)
      .then((data) => {
        let pormat = data.formats
        let video = []
        for (let i = 0; i < pormat.length; i++) {
          if (pormat[i].container == 'mp4' && pormat[i].hasVideo == true && pormat[i].hasAudio == true) {
            let vid = pormat[i]
            video.push(vid.url)
          }
        }
        const title = data.player_response.microformat.playerMicroformatRenderer.title.simpleText
        const thumb = data.player_response.microformat.playerMicroformatRenderer.thumbnail.thumbnails[0].url
        const channel = data.player_response.microformat.playerMicroformatRenderer.ownerChannelName
        const views = data.player_response.microformat.playerMicroformatRenderer.viewCount
        const published = data.player_response.microformat.playerMicroformatRenderer.publishDate
        
        const result = {
          title: title,
          thumb: thumb,
          channel: channel,
          published: published,
          views: views,
          url: video
        }
        return(result)
      })
      resolve(yutub)
    } catch (error) {
        reject(error);
      }
      console.log(error)
  })
}

async function ytPlayMp3(query) {
    return new Promise((resolve, reject) => {
        try {
            const search = yts(query)
            .then((data) => {
                const url = []
                const pormat = data.all
                for (let i = 0; i < pormat.length; i++) {
                    if (pormat[i].type == 'video') {
                        let dapet = pormat[i]
                        url.push(dapet.url)
                    }
                }
                const id = yt.getVideoID(url[0])
                const yutub = yt.getInfo(`https://www.youtube.com/watch?v=${id}`)
                .then((data) => {
                    let pormat = data.formats
                    let audio = []
                    let video = []
                    for (let i = 0; i < pormat.length; i++) {
                    if (pormat[i].mimeType == 'audio/webm; codecs=\"opus\"') {
                        let aud = pormat[i]
                        audio.push(aud.url)
                    }
                    }
                    const title = data.player_response.microformat.playerMicroformatRenderer.title.simpleText
                    const thumb = data.player_response.microformat.playerMicroformatRenderer.thumbnail.thumbnails[0].url
                    const channel = data.player_response.microformat.playerMicroformatRenderer.ownerChannelName
                    const views = data.player_response.microformat.playerMicroformatRenderer.viewCount
                    const published = data.player_response.microformat.playerMicroformatRenderer.publishDate
                    const result = {
                    status: true,
                    code: 200,
                    creator: 'Creator Bot Akira',
                    title: title,
                    thumb: thumb,
                    channel: channel,
                    published: published,
                    views: views,
                    url: audio
                    }
                    return(result)
                })
                return(yutub)
            })
            resolve(search)
        } catch (error) {
            reject(error)
        }
        console.log(error)
    })
}

async function ytPlayMp4(query) {
    return new Promise((resolve, reject) => {
        try {
            const search = yts(query)
            .then((data) => {
                const url = []
                const pormat = data.all
                for (let i = 0; i < pormat.length; i++) {
                    if (pormat[i].type == 'video') {
                        let dapet = pormat[i]
                        url.push(dapet.url)
                    }
                }
                const id = yt.getVideoID(url[0])
                const yutub = yt.getInfo(`https://www.youtube.com/watch?v=${id}`)
                .then((data) => {
                    let pormat = data.formats
                    let video = []
                    for (let i = 0; i < pormat.length; i++) {
                    if (pormat[i].container == 'mp4' && pormat[i].hasVideo == true && pormat[i].hasAudio == true) {
                        let vid = pormat[i]
                        video.push(vid.url)
                    }
                   }
                    const title = data.player_response.microformat.playerMicroformatRenderer.title.simpleText
                    const thumb = data.player_response.microformat.playerMicroformatRenderer.thumbnail.thumbnails[0].url
                    const channel = data.player_response.microformat.playerMicroformatRenderer.ownerChannelName
                    const views = data.player_response.microformat.playerMicroformatRenderer.viewCount
                    const published = data.player_response.microformat.playerMicroformatRenderer.publishDate
                    const result = {
                    title: title,
                    thumb: thumb,
                    channel: channel,
                    published: published,
                    views: views,
                    url: video
                    }
                    return(result)
                })
                return(yutub)
            })
            resolve(search)
        } catch (error) {
            reject(error)
        }
        console.log(error)
    })
}

async function ytSearch(query) {
    return new Promise((resolve, reject) => {
        try {
            const cari = yts(query)
            .then((data) => {
                res = data.all
                return res
            })
            resolve(cari)
        } catch (error) {
            reject(error)
        }
        console.log(error)
    })
}

const domain = "https://www.tikwm.com/";

const tikVideo = (url) => {
  return new Promise(async (resolve, reject) => {
    try {
      const isUrl = (str) => /^https?:\/\//.test(str);
      if (!isUrl(url) || !/tiktok\.com/i.test(url))
        throw new Error("Invalid URL: " + url);

      const res = await axios.post(
        domain + "/api/",
        {},
        {
          headers: {
            accept: "application/json, text/javascript, */*; q=0.01",
            "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
            "sec-ch-ua":
              '"Chromium";v="104", " Not A;Brand";v="99", "Google Chrome";v="104"',
            "user-agent":
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36",
          },
          params: {
            url: url,
            count: 12,
            cursor: 0,
            web: 1,
            hd: 1,
          },
        },
      );

      if (res?.data?.code === -1) {
        resolve(res?.data);
      } else {
        resolve({
          status: 200,
          ...updateUrls(res.data?.data),
        });
      }
    } catch (error) {
      resolve({
        status: 404,
        msg: error?.message,
      });
    }
  });
};

const tikUser = (user) => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await axios.post(
        domain + "/api/user/posts",
        {},
        {
          headers: {
            accept: "application/json, text/javascript, */*; q=0.01",
            "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
            "sec-ch-ua":
              '"Chromium";v="104", " Not A;Brand";v="99", "Google Chrome";v="104"',
            "user-agent":
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36",
          },
          params: {
            unique_id: user,
            count: 12,
            cursor: 0,
            web: 1,
            hd: 1,
          },
        },
      );

      const videos = res.data?.data?.videos;
      if (!videos || videos.length < 1) {
        resolve({
          error: true,
          message: "The user has not uploaded any videos",
          log: res.data,
        });
      }

      const lastVideo = videos.sort((a, b) => b.create_time - a.create_time)[0];

      resolve({
        status: 200,
        data: {
          videos: videos.map((x) => updateUrls(x)),
          lastVideo: updateUrls(lastVideo),
        },
      });
    } catch (error) {
      resolve({
        status: 404,
        msg: error?.message,
      });
    }
  });
};

function updateUrls(obj) {
  const regex =
    /("avatar": "|music": "|play": "|wmplay": "|hdplay": "|cover": ")(\/[^"]+)/g;
  const updatedData = JSON.stringify(obj, null, 2).replace(
    regex,
    (match, p1, p2) => p1 + domain + p2,
  );
  return JSON.parse(updatedData);
}

global.ytDonlodMp3 = ytDonlodMp3
global.ytDonlodMp4 = ytDonlodMp4
global.ytPlayMp3 = ytPlayMp3
global.ytPlayMp4 = ytPlayMp4
global.ytSearch = ytSearch
global.tikVideo = tikVideo
global.tikUser = tikUser