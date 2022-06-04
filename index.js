const { createServer } = require('sync-files-cipher')
const { queryVault } = require('./apivault')


async function startServer (){
    try {
        const AES_VAULT_URI = process.env.AES_VAULT_URI
        console.log("AES_VAULT_URI: ", AES_VAULT_URI);
        const  keys  = await queryVault(AES_VAULT_URI)
        createServer(
            keys.key,
            keys.iv,
            () => { console.log("Server listening");}
        )
    } catch (error) {
        console.log("Server error: ", error.message);
    }
}

startServer()