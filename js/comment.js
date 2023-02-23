function loadComment(){
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(data => displayData2(data))
};

function displayData2 (data){
    const commentContainer = document.getElementById('comment-container');
    for(const comment of data){
        console.log(comment);
        // const userComment = data.
        const div = document.createElement('div');
        div.classList.add('comment')
        div.innerHTML = `
        <h3> User_ ${comment.id}</3>
        <hr>
        <h4> Name: ${comment.name}</h4>
        <h4> email: ${comment.email}</h4>
        <p> ${comment.body}</p> 
        `
        commentContainer.appendChild(div)
    }    
}


loadComment()