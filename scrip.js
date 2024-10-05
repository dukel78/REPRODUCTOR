let contenedor = document.getElementById('track-list')

axios.get('https://api.institutoalfa.org/api/songs').then((response) => {
    response.data.songs.map((song) => {
        let div = document.createElement('div')
        div.setAttribute('src', 'flex p-4 gap-2')

        div.innerHTML = `
                <img src="/imagen/musica.svg" class="rounded-full" alt="">
                    <div>
                        <h3 class="font-bold">${song.title}</h3>
                        <p class="opacity-40">${song.author}</p>
                    </div>
                    <button>play</button>
        `
        contenedor.appendChild(div)
    })
})