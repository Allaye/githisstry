const fetch = require('node-fetch')



async function get_commit_info(username, reponame){
    return promise =  await fetch(`https://api.github.com/repos/${username}/${reponame}/commits`)    
}

module.exports = get_commit_info

// for(i in data){
//     info = data[i]
//     console.log(info.commit.author.name)
//     console.log(typeofinfo.commit.author.date)
//     console.log(info.commit.message)
//     console.log(info.author.avatar_url)

//     console.log(data[i])
// }