

let users = fetch("./contributors.json").
    then(response => response.json()).
    then(data => {
        let users = data.profiles;
        let element = users.map((user) => (
            `<div class="contributor">
                <div class="head-contributor">
                    <img src=${user.avatarUrl} alt=${user.avatarUrl} width="250px">
                </div>
                <div class="body-contribute">
                    <div class="name">${user.name}</div>
                    <div class="socials">
                        <a href='https://github.com/${user.github}'><i class="fa-brands fa-github github"></i></a>
                        <a href='https://twitter.com/${user.twitter}'><i class="fa-brands fa-twitter twitter"></i></a>
                    </div>
                </div>
            </div>`
        ))

        let child = document.createElement('div');
        child.className = 'contributors'
        child.innerHTML = element;

        let contributors = document.querySelector('.mapping-contributors');
        contributors.appendChild(child);
        return data;

    }
    )





