const fetch = require('node-fetch')



async function get_commit_info(username, reponame){
    const promise = await fetch(`https://api.github.com/repos/${username}/${reponame}/commits`)
    const data = await promise.json()
    
}

get_commit_info('Allaye', 'Expediting_Employees_Promotion')

