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
                    <button onclick="abrir1()" class="role button ${job.role !== undefined ? 'display-on' : 'display-off'}"> ${job.role}</button>
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