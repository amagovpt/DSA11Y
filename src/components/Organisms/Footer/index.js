import "./styles.css";

export function Footer() {
  return (
    <footer className={`py-5`}>
      <div className="container">
        <nav aria-label="Menu de rodapé do selo.usabilidade.gov.pt">
          <div className="menu-menu-de-rodape-container">
            <ul id="menu-menu-de-rodape" className="footer-menu ps-0 mb-1">
              <li
                id="menu-item-193"
                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-193"
              >
                <a
                  href="https://www.acessibilidade.gov.pt/acessibilidade/"
                  rel="noreferrer"
                  className="ama-typography-action-large p-3"
                >
                  Acessibilidade
                </a>
              </li>

              <li
                id="menu-item-194"
                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-193"
              >
                <a
                  href="https://www.acessibilidade.gov.pt/termos-e-condicoes/"
                  rel="noreferrer"
                  className="ama-typography-action-large p-3"
                >
                  Termos e Condições
                </a>
              </li>

              <li
                id="menu-item-190"
                className="menu-item menu-item-type-custom menu-item-object-custom menu-item-190"
              >
                <a
                  href="https://www.ama.gov.pt/web/agencia-para-a-modernizacao-administrativa/politica-de-privacidade"
                  rel="noreferrer"
                  className="ama-typography-action-large p-3"
                >
                  Política de privacidade
                </a>
              </li>

              <li
                id="menu-item-191"
                className="menu-item menu-item-type-custom menu-item-object-custom menu-item-191"
              >
                <a
                  href="https://amagovpt.github.io/kit-selo/"
                  rel="noreferrer"
                  className="ama-typography-action-large p-3"
                >
                  Github
                </a>
              </li>

              <li
                id="menu-item-192"
                className="menu-item menu-item-type-custom menu-item-object-custom menu-item-192"
              >
                <a
                  href="https://www.acessibilidade.gov.pt/glossario/"
                  rel="noreferrer"
                  className="ama-typography-action-large p-3"
                >
                  Glossário
                </a>
              </li>
              <li
                id="menu-item-68"
                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-68"
              >
                <a
                  href="https://www.acessibilidade.gov.pt/opcoes-de-visualizacao/"
                  rel="noreferrer"
                  className="ama-typography-action-large p-3"
                >
                  Opções de visualização
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <ul className="footer-logos mb-3">
          <li>
            <img
              decoding="async"
              alt="República Portuguesa"
              src="https://selo.leadershipbt.com/wp-content/uploads/2023/02/logo_republica_portuguesa.svg"
              className="img-fluid p-3"
              width="150"
            />
          </li>

          <li>
            <img
              decoding="async"
              alt="AMA – Agência para a Modernização Administrativa I.P."
              src="https://selo.leadershipbt.com/wp-content/uploads/2023/02/logo_ama.svg"
              className="img-fluid p-3"
              width="150"
            />
          </li>

          <li>
            <img
              decoding="async"
              alt="eportugal"
              src="https://selo.leadershipbt.com/wp-content/uploads/2023/02/logo_eportugal.svg"
              className="img-fluid p-3"
              width="150"
            />
          </li>

          <li>
            <img
              decoding="async"
              alt="usabilidade.gov.pt"
              src="https://selo.leadershipbt.com/wp-content/uploads/2023/02/logo_usabilidade.svg"
              className="img-fluid p-3"
              width="150"
            />
          </li>

          <li>
            <img
              decoding="async"
              alt="COMPETE 2020 – Programa Operacional Competitividade e Internacionalização"
              src="https://selo.leadershipbt.com/wp-content/uploads/2023/02/logo_compete.svg"
              className="img-fluid p-3"
              width="150"
            />
          </li>

          <li>
            <img
              decoding="async"
              alt="Portugal 2020"
              src="https://selo.leadershipbt.com/wp-content/uploads/2023/02/logo_2020.svg"
              className="img-fluid p-3"
              width="150"
            />
          </li>

          <li>
            <img
              decoding="async"
              alt="União Europeia – Fundo Europeu de Desenvolvimento Regional"
              src="https://selo.leadershipbt.com/wp-content/uploads/2023/02/logo_uniao_europeia.svg"
              className="img-fluid p-3"
              width="150"
            />
          </li>
        </ul>

        <div className="logo-selo mb-3">
          <img
            src="https://selo.leadershipbt.com/wp-content/themes/www-a11y-theme/img/selo-ouro.svg"
            alt="Selo Ouro de Usabilidade e Acessibilidade"
          />
        </div>
        <div className="text-center">
          <p className="ama-typography-body">
            © 2024 AMA - Agência para a Modernização Administrativa, I.P. Todos
            os Direitos Reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
