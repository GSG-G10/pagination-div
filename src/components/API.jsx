

function API(page) {
    let url = `https://api.unsplash.com/search/collections?page=${page}&limit=10&query=cat&client_id=kQ_rA8Dd9Tb-JZ80Nx6RyFBtaoIFyaP5kdLn5EmGkVM`
 return   fetch(url)
    .then(data=>{
        return data.json()
    }).then(data=>{
        return data
    })
}

export default API
