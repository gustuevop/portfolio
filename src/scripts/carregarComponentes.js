async function carregarComponente(id, caminhoRelativo) {
  const container = document.getElementById(id);
  if (!container) return;

  try {
    const resposta = await fetch(caminhoRelativo);
    const html = await resposta.text();
    container.innerHTML = html;

    // Após carregar o header, destacar menu ativo
    if (id === 'injetar-cabecalho') destacarMenuAtivo();
  } catch (erro) {
    console.error(`Erro ao carregar ${caminhoRelativo}:`, erro);
  }
}

function destacarMenuAtivo() {
  const caminho = window.location.pathname.split('/').pop(); // ex: sobre.html
  const links = document.querySelectorAll('header nav a');

  links.forEach(link => {
    const href = link.getAttribute('href');
    if (href === caminho || (href === 'index.html' && (caminho === '' || caminho === 'index.html'))) {
      link.classList.add('font-semibold', 'border-b-2', 'border-white', 'pb-1');
    } else {
      link.classList.remove('font-semibold', 'border-b-2', 'border-white', 'pb-1');
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const basePath = window.location.pathname.includes("/src/paginas/")
    ? "../componentes/"
    : "src/componentes/";

  carregarComponente("injetar-cabecalho", `${basePath}cabecalho.html`);
  carregarComponente("injetar-rodape", `${basePath}rodape.html`);
});