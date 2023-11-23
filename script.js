fetch('https://api.github.com/users/teixtarcio')
    .then(response => response.json())
    .then(data => {

        document.getElementById('avatar').src = data.avatar_url;
        document.getElementById('name').innerHTML = data.name;
        document.getElementById('bio').innerHTML = data.bio;

        const links = [
            {
                name: "GitHub",
                icon: "fa-brands fa-github",
                url: data.html_url
            },
            {
                name: "LinkedIn",
                icon: "fa-brands fa-linkedin",
                color: "#0077B5",
                url: "https://www.linkedin.com/in/teixtarcio/"
            },
            {
                name: "Instagram",
                icon: "fa-brands fa-instagram",
                color: "#FF0069",
                url: "https://www.instagram.com/teixtarcio"
            },
            {
                name: "Filmes e séries assistidos",
                icon: "fas fa-film",
                color: "#1da666",
                url: "https://docs.google.com/spreadsheets/d/14-CWMbwuu6ShV5qcewGNykxmniaiFPB5D_AhtWaIES4/edit?usp=sharing"
            },
            {
                name: "MCCBrasil",
                icon: "fa-solid fa-bullhorn",
                color: "#0E99F0",
                url: "https://tarcio.dev/"
            }
        ];

        for (const link of Object.values(links)) {

            if(!link.color) link.color = '#363636';

            document.getElementById('links').innerHTML += `
                <a class="link" href="${link.url}" target="_blank">
                    <div class="link-icon" style="background-color: ${link.color}">
                        <i class="${link.icon}"></i>
                    </div>
                    <div class="link-name">
                        ${link.name}
                    </div>
                </a>
            `
        }

    })
    .catch(error => console.log('Error fetching data:', error));