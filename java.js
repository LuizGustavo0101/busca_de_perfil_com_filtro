async function fetchData() {
    try {
        const response = await fetch('data.json'); // Certifique-se de que o arquivo JSON esteja no mesmo diretório

        const data = await response.json();
        
        const jobsList = document.getElementById('listaBox');
        
        data.forEach(job => {
            const jobCard = document.createElement('li');
            jobCard.classList.add('li'); // Adicione uma classe CSS para estilização (opcional)

            jobCard.innerHTML = `
                <div>
                    <img src="${job.logo}">
                </div>

                <div class="agrupamentoMeio">
                    <div>
                        <h4>${job.company}</h4>

                        <span class="new span ${job.new !== false ? 'display-on' : 'display-off'}"> ${job.new === true ? 'NEW!' : ''}</span>
                        <span class="featured span ${job.featured !== false ? 'display-on' : 'display-off'}"> ${job.featured === true ? 'FEATURED' : ''}</span>
                    </div>

                    <h2>${job.position}</h2>

                    <div>
                        <ul>
                            <li>${job.postedAt}</li>
                            <li>${job.contract}</li>
                            <li>${job.location}</li>
                        </ul>
                    </div>
                </div>

                <hr>

                <div class="buttons">
                    <button data-filter="Frontend, Backend, Fullstack" onclick="abrir1()" class="role button ${job.role !== undefined ? 'display-on' : 'display-off'}"> ${job.role}</button>
                    <button onclick="abrir2()" class="level button ${job.level !== undefined ? 'display-on' : 'display-off'}"> ${job.level}</button>

                    <button onclick="abrir3()" class="languages button ${job.languages[0] !== undefined ? 'display-on' : 'display-off'}"> ${job.languages[0]}</butto>
                    <button onclick="abrir4()" class="languages button ${job.languages[1] !== undefined ? 'display-on' : 'display-off'}"> ${job.languages[1]}</button>
                    <button onclick="abrir5()" class="languages button ${job.languages[2] !== undefined ? 'display-on' : 'display-off'}"> ${job.languages[2]}</button>

                    <button onclick="abrir6()" class="tools button ${job.tools[1] !== undefined ? 'display-on' : 'display-off'}"> ${job.tools[0]}</button>
                    <button onclick="abrir7()" class="tools button ${job.tools[2] !== undefined ? 'display-on' : 'display-off'}"> ${job.tools[1]}</button>
                </div>
            `;

            // decetar os spans da opção new e featured
            var new1 = job.new;
            var featured1 = job.featured;
            
            // fazer a verificação se os 2 existem na
            // visual para adicionar uma barra lateral
            if(new1 === true && featured1 === true){
                jobCard.classList.add("border-on");
            }

            jobsList.appendChild(jobCard);
        });

    } catch (error) {
        console.error('Erro ao buscar dados:', error);
    }
}

// Chamar a função para buscar e consumir os dados
fetchData();

document.addEventListener('DOMContentLoaded', function () {
    const filterButtons = document.querySelectorAll('.listOptions li');
    const filteredItemsContainer = document.querySelector('#listaBox');
    const items = [{
        "id": 1,
"company": "Photosnap",
"logo": "./images/photosnap.svg",
"new": true,
"featured": true,
"position": "Senior Frontend Developer",
"role": "Frontend",
"level": "Senior",
"postedAt": "1d ago",
"contract": "Full Time",
"location": "USA Only",
"languages": ["HTML", "CSS", "JavaScript"],
"tools": []
},
{
"id": 2,
"company": "Manage",
"logo": "./images/manage.svg",
"new": true,
"featured": true,
"position": "Fullstack Developer",
"role": "Fullstack",
"level": "Midweight",
"postedAt": "1d ago",
"contract": "Part Time",
"location": "Remote",
"languages": ["Python"],
"tools": ["React"]
},
{
"id": 3,
"company": "Account",
"logo": "./images/account.svg",
"new": true,
"featured": false,
"position": "Junior Frontend Developer",
"role": "Frontend",
"level": "Junior",
"postedAt": "2d ago",
"contract": "Part Time",
"location": "USA Only",
"languages": ["JavaScript"],
"tools": ["React", "Sass"]
},
{
"id": 4,
"company": "MyHome",
"logo": "./images/myhome.svg",
"new": false,
"featured": false,
"position": "Junior Frontend Developer",
"role": "Frontend",
"level": "Junior",
"postedAt": "5d ago",
"contract": "Contract",
"location": "USA Only",
"languages": ["CSS", "JavaScript"],
"tools": []
},
{
"id": 5,
"company": "Loop Studios",
"logo": "./images/loop-studios.svg",
"new": false,
"featured": false,
"position": "Software Engineer",
"role": "Fullstack",
"level": "Midweight",
"postedAt": "1w ago",
"contract": "Full Time",
"location": "Worldwide",
"languages": ["JavaScript"],
"tools": ["Ruby", "Sass"]
},
{
"id": 6,
"company": "FaceIt",
"logo": "./images/faceit.svg",
"new": false,
"featured": false,
"position": "Junior Backend Developer",
"role": "Backend",
"level": "Junior",
"postedAt": "2w ago",
"contract": "Full Time",
"location": "UK Only",
"languages": ["Ruby"],
"tools": ["RoR"]
},
{
"id": 7,
"company": "Shortly",
"logo": "./images/shortly.svg",
"new": false,
"featured": false,
"position": "Junior Developer",
"role": "Frontend",
"level": "Junior",
"postedAt": "2w ago",
"contract": "Full Time",
"location": "Worldwide",
"languages": ["HTML", "JavaScript"],
"tools": ["Sass"]
},
{
"id": 8,
"company": "Insure",
"logo": "./images/insure.svg",
"new": false,
"featured": false,
"position": "Junior Frontend Developer",
"role": "Frontend",
"level": "Junior",
"postedAt": "2w ago",
"contract": "Full Time",
"location": "USA Only",
"languages": ["JavaScript"],
"tools": ["Vue", "Sass"]
},
{
"id": 9,
"company": "Eyecam Co.",
"logo": "./images/eyecam-co.svg",
"new": false,
"featured": false,
"position": "Full Stack Engineer",
"role": "Fullstack",
"level": "Midweight",
"postedAt": "3w ago",
"contract": "Full Time",
"location": "Worldwide",
"languages": ["JavaScript", "Python"],
"tools": ["Django"]
},
{
"id": 10,
"company": "The Air Filter Company",
"logo": "./images/the-air-filter-company.svg",
"new": false,
"featured": false,
"position": "Front-end Dev",
"role": "Frontend",
"level": "Junior",
"postedAt": "1mo ago",
"contract": "Part Time",
"location": "Worldwide",
"languages": ["JavaScript"],
"tools": ["React", "Sass"]
}
    ];

    let activeFilter = null;

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filterValue = button.textContent.toLowerCase().trim();

            if (filterValue === activeFilter) {
                activeFilter = null;
                button.classList.remove('active');
                displayFilteredItems(items);
            } else {
                filterButtons.forEach(btn => {
                    btn.classList.remove('active');
                });

                button.classList.add('active');
                activeFilter = filterValue;

                const filteredItems = items.filter(item => {
                    return (
                        item.languages.includes(filterValue) ||
                        item.tools.includes(filterValue) ||
                        item.role.toLowerCase() === filterValue ||
                        item.level.toLowerCase() === filterValue
                    );
                });
                displayFilteredItems(filteredItems);
            }
        });
    });

    function displayFilteredItems(filteredItems) {
        filteredItemsContainer.innerHTML = '';

        if (filteredItems.length === 0) {
            filteredItemsContainer.innerHTML = '<p>Nenhum item encontrado.</p>';
            return;
        }

        filteredItems.forEach(item => {
            const itemDiv = document.createElement('div');
            itemDiv.className = 'filtered-item';

            const companyElement = document.createElement('li');
            companyElement.textContent = item.company;
            const positionElement = document.createElement('p');
            positionElement.textContent = item.position;

            itemDiv.appendChild(companyElement);
            itemDiv.appendChild(positionElement);

            filteredItemsContainer.appendChild(itemDiv);
        });
    }

    // Funçõa para fechar os filtros
    function fechar(svgElemento) {
        const liElemento = svgElemento.parentNode; // o parentNode fecha só o elemnto pai (no caso li)
        liElemento.style.display = 'none';
    }

    // Limpar os LIs com a tag <a>
    document.addEventListener("DOMContentLoaded", function(){ // todo o conteúdo do DOM seja carregado.
        const a = document.querySelector("#ocultar-itens");

        a.addEventListener("click", function() {
            const itensLista = document.querySelectorAll("#minha-lista li");

            itensLista.forEach(function(item) { // percorrer todos os li(s) por representar um loop e fazer a ação da função dita
                item.style.display = "none";
            });
        });
    })
});
