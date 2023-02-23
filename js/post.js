function loadPost (){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then( res => res.json())
    .then(data => displayData(data))
}

function displayData(data){

    // get the container where your want to create new element
    const postContainer = document.getElementById('post-container');
    for(const post of data){
        console.log(post);
        const div = document.createElement('div');
        div.classList.add('post')
        div.innerHTML = `
        <h2> user_ ${post.id} </h2>
        <h3> post: ${post.title} </h3>
        <p> post description ${post.body} </p>

        `;
        postContainer.appendChild(div)
    }
}

loadPost()