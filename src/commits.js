const fetch = require('node-fetch')



async function get_commit_info(username, reponame){
    return promise =  await fetch(`https://api.github.com/repos/${username}/${reponame}/commits`)    
}

module.exports = get_commit_info
