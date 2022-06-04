const axios = require('axios')
const TOKEN = process.env.VAULT_TOKEN
const https = require('https')

module.exports.queryVault = (uri) => {
  return new Promise((resolve, reject) => {
    const options = {
      headers:{
        'Authorization': `Bearer ${TOKEN}`
      },
      httpsAgent: new https.Agent({   
        rejectUnauthorized: false
      }),
    }
  
    axios.get(`https://streamsforlab3.bucaramanga.upb.edu.co${uri}`, options)
    .then((res) => {
      return resolve(res.data.data)
    })
    .catch((err) => reject(err))
  })
}
