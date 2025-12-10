async function fetchData() {
    console.log (fetch ("https://api.giphy.com/v1/gifs/search?api_key=lGItLrwdRSuso1wZgkXewwrrgP7MDQtz&q=book&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips"))
    
    
    
    let responseObj = await fetch ("https://api.giphy.com/v1/gifs/search?api_key=lGItLrwdRSuso1wZgkXewwrrgP7MDQtz&q=book&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips")
    console.log(responseObj)
    console.log(responseObj.body)

    let giphyjson =await responseObj.json()
    let giphyArray = giphyjson.data
    

    for (let i =0 ; i< giphyArray.length; i++) {
        console.log (giphyArray [i])
    }


    }

fetchData()