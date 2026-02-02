const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(user) {
        this.userProfile.innerHTML = `<div class="info"><img src="${user.avatarUrl}" alt="Foto de perfil do usuario" />
                           <div class="data">
                             <h1>${user.name ?? 'nao possui nome cadastrado'}</h1>
                             <p>${user.bio ?? 'nao possui bio cadastrado'} </p>
                              <p>
                               👥 Followers: ${user.followers} |
                               ➕ Following: ${user.following}
                               </p>
                           </div>`

        let repositoriesItens = ''
        user.repositories.forEach(repo => repositoriesItens += `<li><a href="${repo.html_url}" target ="_blank">${repo.name}</a>
                                                                   <div class="repo-info">
                                                                     <span class="repo-badge stars"> ⭐${repo.stargazers_count}</pan>
                                                                     <span class="repo=-badge forks"> 🍴 ${repo.forks_count}</pan>
                                                                     <span class="repo=-badge watchers"> 👀 ${repo.watchers_count}</pan>
                                                                     <span class="repo=-badge language"> 💻 ${repo.language ?? 'Não informado'}</pan>
                                                                    </div>
                                                                </li>
            `)
        if (user.repositories.length > 0) {
            this.userProfile.innerHTML += `<div class = "repositories section">
                                              <h2> Repositorios</h2>
                                              <ul>${repositoriesItens}</ul>
                                             </div>`
        }


    },
    renderNotFound() {
        this.userProfile.innerHTML = "<h3>Usuario nao encontrado</h3> "
    }

}

export { screen }