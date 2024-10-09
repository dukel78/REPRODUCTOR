let contenedor = document.getElementById('track-list')

axios.get('https://api.institutoalfa.org/api/songs').then((response) => {
    response.data.songs.map((song) => {
        // Ocurre por cada canción
        let div = document.createElement('div')
        div.setAttribute('class', 'flex p-4 gap-2')

        div.innerHTML = `
             <div class="cancion_lista">
              <img src="https://api.institutoalfa.org/api/songs/image/${song.image.filename}" class="rounded-full h-16" alt="" width="200px" height="120px">
                    <div>
                        <h3 class="font-bold">${song.title}</h3>
                        <p class="opacity-40">${song.author}</p>
                    </div>
                    <button>play</button>
             <div>
               
        `
        div.addEventListener('click', () => {
            document.getElementById('audio').setAttribute('src',
                `https://api.institutoalfa.org/api/songs/audio/${song.audio.filename}`
            )
        })
         
        contenedor.appendChild(div)
    })
})