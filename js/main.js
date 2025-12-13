/*
async function fetchData() {
    console.log (fetch ("https://api.giphy.com/v1/gifs/search?api_key=lGItLrwdRSuso1wZgkXewwrrgP7MDQtz&q=book&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips"))
    let responseObj = await fetch ("https://api.giphy.com/v1/gifs/search?api_key=lGItLrwdRSuso1wZgkXewwrrgP7MDQtz&q=book&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips")
    console.log(responseObj)
    console.log(responseObj.body)

    let giphyjson = await responseObj.json()
    let giphyArray = giphyjson.data
    

    for (let i =0 ; i< giphyArray.length; i++) {
        console.log (giphyArray [i])
        let imageGrab =  giphyArray [i]
        console.log (imageGrab)
        console.log(imageGrab.images)
        console.log(imageGrab.images.original)
        console.log(imageGrab.images.original.url)
        let newImage = document.createElement("img")
        newImage.src = imageGrab.images.original.url
        document.getElementById("imageContainer").appendChild(newImage)
    }
  
}

fetchData()
*/

// new function -> 
// grab json image.fixed_width.url


async function fetchImgWidth() {


    console.log(document.getElementById("SearchGif").tagName)
    
    console.log(document.getElementById("SearchGif").value)

    let abc = document.getElementById("SearchGif").value

    console.log(fetch(`https://api.giphy.com/v1/gifs/search?api_key=E3FxsVjS3g8GkfDpCncqnS6xjVMNA7wQ&q=${abc}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`))
    
    let responseObj = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=E3FxsVjS3g8GkfDpCncqnS6xjVMNA7wQ&q=${abc}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`)

    console.log(responseObj)
    
    console.log(responseObj.body)
    
    let giphyjson = await responseObj.json()

    let giphyArray = giphyjson.data

    for (let i =0 ; i< giphyArray.length; i++) {
        
        console.log (giphyArray [i])
        
        let imageWidth =  giphyArray [i]

        console.log (imageWidth)
        
        console.log(imageWidth.images)

        console.log(imageWidth.images.fixed_width)
        
        console.log(imageWidth.images.fixed_width.url)
    
        let newImage = document.createElement("img")
        
        newImage.src = imageWidth.images.fixed_width.url

        document.getElementById("imageContainer").appendChild(newImage) 
    } 
}

