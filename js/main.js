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
    //fetching item width

    console.log(fetch("https://api.giphy.com/v1/gifs/search?api_key=E3FxsVjS3g8GkfDpCncqnS6xjVMNA7wQ&q=book&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips"))
    //fetch goes to get information
    
    let responseObj = await fetch("https://api.giphy.com/v1/gifs/search?api_key=E3FxsVjS3g8GkfDpCncqnS6xjVMNA7wQ&q=book&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips")
    //fetch gets information and returns 

    console.log(responseObj)
    //console log outputs it
    
    console.log(responseObj.body)
    //.body is used to selected the body of responseObj
    
    let giphyjson = await responseObj.json()
    //giphyjson holds responseObj.json

    let giphyArray = giphyjson.data
    //giphyArray chooses .data of giphyjson to create an array

    for (let i =0 ; i< giphyArray.length; i++) {
        //array to select along the .length of giphy array
        
        console.log (giphyArray [i])
        //displays variouse array indexes from giphyArray
        
        let imageWidth =  giphyArray [i]
        //create imageWidth to use giphyArray indexes

        console.log (imageWidth)
        //displays imageGrab
        
        console.log(imageWidth.images)
        //selects and displays .images section of imageGrab

        console.log(imageWidth.images.fixed_width)
        //selects and displays .fixed_width within .images
        
        console.log(imageWidth.images.fixed_width.url)
        //selects and displays .url
    
        let newImage = document.createElement("img")
        //create element image and create new func newImage
        
        newImage.src = imageWidth.images.fixed_width.url
        //newImage references imageWidth.images.fixed_width.url

        document.getElementById("imageContainer").appendChild(newImage)
        //document.getElementById is used to get image container in index.html and appends image from imageWidth.images.fixed_width.url
    }
}

fetchImgWidth()
//fetchImgWidth is ready
