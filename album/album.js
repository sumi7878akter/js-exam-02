console.log('album');
function loadUsers(){
    fetch('https://jsonplaceholder.typicode.com/albums')
    .then(res => res.json())
    .then(data => displayAlbum(data))
}
loadAlbum();


function displayAlbum(data){
    const sectionId = document.getElementById('album');
    for(const album of data){
        const div = document.createElement('div');
                 div.classList.add("album")
            div.innerHTML = `
                <h1>${album.name}</h1>
                 <h5>${album.username}</h5>
                <h4>${album.email}</h4>
                 <a>${album.phone}</a>
                 <a href="${album.website}">Website</a>
                 `;
                
               sectionId.appendChild(div);
                 console.log(album);
    }
}