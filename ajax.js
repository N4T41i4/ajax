$(document).ready(function(){
    $('#link').click(function(){
        
        const link = $('#link').val();
        const endpoint=`https://api.github.com/users/ogiansouza`;
        fetch(endpoint)
        .then(function(resposta){
            return resposta.json();
        })
        .then(function(json){ 
            avatar.src=json.avatar_url;
            meunome.innerText=json.name;
         
         
            username.innerText=json.login;
            seguidores.innerText=json.following;
            seguindo.innerText=json.followers;
            repositorio.innerText = json.public_repos;
            link.href=json.html_url;
        })


    })
})

