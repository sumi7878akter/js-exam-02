
console.log('comments')
function loadComments(){
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(data => displayComments(data))
}
loadComments();


function displayComments(data){
    const sectionId = document.getElementById('comments');
    for(const comments of data){
        const div = document.createElement('div');
                 div.classList.add("comments")
            div.innerHTML = `
                <h1>${comments.name}</h1>
                 <h5>${comments.username}</h5>
                <h4>${comments.email}</h4>
                 <a>${comments.phone}</a>
                 <a href="${comments.website}">Website</a>
                 `;
                
               sectionId.appendChild(div);
                 console.log(comments);
    }
}