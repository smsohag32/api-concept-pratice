function imgLoad (){
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(res => res.json())
    .then(data => displayImg(data))

}

function displayImg (data){
    const imgContainer = document.getElementById('img-container');
    for(const img of data){
        const imgDiv = document.createElement('div')
        // console.log(img);
        
        imgDiv.innerHTML = `
        <h2> Serial No : ${img.id}</h2>
        <p> Image Name: ${img.title}</P>
        <img src='${img.thumbnailUrl}'> </img>
        
        `

        imgContainer.appendChild(imgDiv)
    }
}

imgLoad()