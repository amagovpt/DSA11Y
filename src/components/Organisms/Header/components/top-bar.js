import "./top-bar.css";
import React from "react";
import { Icon } from "../../../Atoms/Icon";
import { Link } from "../../../Atoms/Link";
import { useRef, useState } from "react";

export function TopBar() {
  const [openAccordion, setOpenAccordion] = useState(false);
  const accordionContentRef = useRef(null);

  const toggleAccordion = () => {
    setOpenAccordion(!openAccordion);
    if (!openAccordion && accordionContentRef.current) {
      accordionContentRef.current.focus();
    }
  };

  const getTitle = () => {
    return openAccordion ? "pressione para comprimir a nossa lista de aplicações e sítios web" : "pressione para expandir a nossa lista de aplicações e sítios web";
  }

  return (
    <>
      <div className="top-bar py-1">
        <div className="accordion accordion-flush" id="accordionTopBar">
          <div className="container">
            <div className="d-flex justify-content-between flex-row-reverse">
              <div className="d-flex flex-row gap-4">
                <button
                  className="btn btn-link dark-mode d-flex align-items-center"
                  id="darkModeBtn"
                >
                  <span id="darkModeLabel" className="ama-typography-body">Modo Escuro</span>
                  <Icon
                    name="AMA-EscuroClaro-Line icon-dark"
                    aria-hidden="true"
                  />
                </button>

                <button
                  className="btn btn-link language-mode p-1  d-flex align-items-center"
                  id="langModeBtn"
                >
                  <span id="langModeLabel" className="ama-typography-body">See in english</span>
                  <Icon name="AMA-Globo-Line icon-lang" aria-hidden="true" />
                </button>
              </div>

              <button
                type="button"
                className="btn btn-link btn-ecossistema collapsed d-flex align-items-center p-1"
                data-bs-toggle="collapse"
                data-bs-target="#flushEcossistema"
                aria-controls="flushEcossistema"
                onClick={toggleAccordion}
                aria-expanded={openAccordion ? "true" : "false"}
                id="accordionBtn"
                title={getTitle()}
              >
                <span
                  className="icon-AMA-MenuCimaGrande-Line icon-ed-menu-dots"
                  aria-hidden="true"
                />

                <span id="flushHeading" className="ama-typography-body">
                  Uma ferramenta do ecossistema{" "}
                  <span className="text-primary fw-bold dark_mode_span ama-typography-body">
                    acessibilidade.gov.pt
                  </span>
                </span>

                <span
                  className={` icon ${
                    openAccordion
                      ? "icon-AMA-SetaCima3-Line"
                      : "icon-AMA-SetaBaixo3-Line "
                  }`}
                  aria-hidden="true"
                ></span>
              </button>
            </div>

            <div
              data-bs-parent="#accordionTopBar"
              id="flushEcossistema"
              className={`accordion-collapse collapse ${openAccordion ? "show" : ""}`}
              aria-labelledby="flushHeading"
            >
              <div className="accordion-body ps-0 pe-0">
                <div className="container">
                  <div className="row">
                    <div className="col-12 col-lg-6 align-self-center">
                      <div className="d-flex justify-content-between">
                        <div className="title-ecosssistema-ama">
                          <h2>
                            ecossistema
                            <br />
                            <strong>acessibilidade</strong>.gov.pt
                          </h2>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-lg-6 align-self-center">
                      <div className="ama-typography-body">
                        <p className="m-0">
                          Os sítios e as ferramentas de apoio à acessibilidade e
                          à usabilidade, para garantir a promoção das boas
                          práticas e melhorar a experiência de utilização dos
                          serviços públicos digitais.
                        </p>
                      </div>
                    </div>
                  </div>
                  <hr className="mt-4 mb-5" />
                  <div className="row">
                    <div className="col-12 col-lg-4">
                      <div className="left-column-ecossistema-ama">
                        <h3 className="mb-2">
                          <strong>acessibilidade</strong>.gov.pt
                        </h3>
                      </div>
                      <p className="mb-4">
                        Divulgação, partilha e promoção das melhores práticas
                        de acessibilidade para conteúdos Web e aplicações
                        móveis.
                      </p>
                      <ul className="ama-list">
                        <li className="mb-3">
                          <Link
                            iconLeft={
                              <Icon name="AMA-Setalongaoficial-Line" />
                            }
                            to="https://observatorio.acessibilidade.gov.pt/"
                            text="Observatório Português da Acessibilidade Web"
                          />
                        </li>

                        <li className="mb-3">
                          <Link
                            iconLeft={
                              <Icon name="AMA-Setalongaoficial-Line" />
                            }
                            to="https://www.acessibilidade.gov.pt/gerador/"
                            text={`Gerador "Declaração de Acessibilidade"`}
                          />
                        </li>

                        <li className="mb-3">
                          <Link
                            iconLeft={
                              <Icon name="AMA-Setalongaoficial-Line" />
                            }
                            to="https://accessmonitor.acessibilidade.gov.pt/"
                            text="AccessMonitor"
                          />
                        </li>

                        <li className="mb-3">
                          <Link
                            iconLeft={
                              <Icon name="AMA-Setalongaoficial-Line" />
                            }
                            to="https://www.acessibilidade.gov.pt/wcag/"
                          >
                            <abbr
                              title="Web Content Accessibility Guidelines, version 2.1"
                              lang="en"
                            >
                              WCAG 2.1
                            </abbr>
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="col-12 col-lg-4">
                      <h3 className="mb-2">
                        <strong>mosaico</strong>.gov.pt
                      </h3>
                      <p className="mb-4">
                        Recursos, ferramentas e boas práticas para melhorar a
                        experiência de utilização dos serviços públicos
                        digitais.
                      </p>
                      <ul className="ama-list">
                        <li className="mb-3">
                          <Link
                            iconLeft={
                              <Icon name="AMA-Setalongaoficial-Line" />
                            }
                            to="https://mosaico.gov.pt/areas-tecnicas/usabilidade"
                            text="Usabilidade no Mosaico"
                          />
                        </li>

                        <li className="mb-3">
                          <Link
                            iconLeft={
                              <Icon name="AMA-Setalongaoficial-Line" />
                            }
                            to="https://zeroheight.com/1be481dc2/p/97181d-agora-design-system"
                          >
                            Ágora <em lang="en">Design System</em> -
                            documentação
                          </Link>
                        </li>

                        <li className="mb-3">
                          <Link
                            iconLeft={
                              <Icon name="AMA-Setalongaoficial-Line" />
                            }
                            to="https://prd-agora.northeurope.cloudapp.azure.com"
                          >
                            Ágora <em lang="en">Design System</em> -
                            componentes
                          </Link>
                        </li>

                        <li className="mb-3">
                          <Link
                            iconLeft={
                              <Icon name="AMA-Setalongaoficial-Line" />
                            }
                            to="https://guias.mosaico.gov.pt/guias-praticos/usabilidade-como-realizar-testes-de-usabilidade"
                            text="Como realizar testes de usabilidade?"
                          />
                        </li>

                        <li className="mb-3">
                          <Link
                            iconLeft={
                              <Icon name="AMA-Setalongaoficial-Line" />
                            }
                            to="https://guias.mosaico.gov.pt/guias-praticos/usabilidade-como-desenvolver-aplicacoes-para-dispositivos-moveis"
                            text="Como desenvolver aplicações móveis?"
                          />
                        </li>
                      </ul>
                    </div>
                    <div className="col-12 col-lg-4">
                      <h3 className="mb-2">
                        <strong>selo.usabilidade</strong>.gov.pt
                      </h3>
                      <p className="mb-4">
                        Selo de excelência que premeia as boas práticas de
                        acessibilidade e usabilidade nos sítios Web dos
                        serviços públicos digitais.
                      </p>
                      <ul className="ama-list">
                        <li className="mb-3">
                          <Link
                            iconLeft={
                              <Icon name="AMA-Setalongaoficial-Line" />
                            }
                            to="https://pprselo.usabilidade.gov.pt/candidatura/"
                            text="Candidatura ao Selo"
                          />
                        </li>

                        <li className="mb-3">
                          <Link
                            iconLeft={
                              <Icon name="AMA-Setalongaoficial-Line" />
                            }
                            to="https://pprselo.usabilidade.gov.pt/requisitos/"
                            text="Requisitos do Selo"
                          />
                        </li>

                        <li className="mb-3">
                          <Link
                            iconLeft={
                              <Icon name="AMA-Setalongaoficial-Line" />
                            }
                            to="https://amagovpt.github.io/kit-selo/"
                            text="Kit informativo do Selo"
                          />
                        </li>

                        <li className="mb-3">
                          <Link
                            iconLeft={
                              <Icon name="AMA-Setalongaoficial-Line" />
                            }
                            to="https://pprselo.usabilidade.gov.pt/ajuda/"
                            text="Dúvidas sobre o Selo?"
                          />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="accordion-body ps-0 pe-0">
                <div className="container">
                  <div className="row">
                    <div className="col-12 col-lg-6 align-self-center">
                      <div className="d-flex justify-content-between">
                        <div className="title-ecosssistema-ama">
                          <div className="h2">
                            {t("HEADER.DROPDOWN.ecosystem")}
                            <br />
                            <strong>acessibilidade</strong>.gov.pt
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-lg-6 align-self-center">
                      <div className="description-ecossistema-ama">
                        <p>{t("HEADER.DROPDOWN.text")}</p>
                      </div>
                    </div>
                  </div>
                  <hr className="mt-4 mb-5" />
                  <div className="row">
                    <div className="col-12 col-lg-4">
                      <div className="left-column-ecossistema-ama">
                        <div className="h3">
                          <strong>acessibilidade</strong>.gov.pt
                        </div>
                      </div>
                      <div className="left-column-ecossistema-ama">
                        <p>{t("HEADER.DROPDOWN.accessibility.text")}</p>
                      </div>
                      <div className="left-column-ecossistema-ama">
                        <div
                          style={{ height: "20px" }}
                          aria-hidden="true"
                          className="wp-block-spacer"
                        ></div>
                      </div>
                      <div className="left-column-ecossistema-ama">
                        <ul className="ama-list">
                          <li>
                            <Link
                              iconLeft={
                                <Icon name="AMA-Setalongaoficial-Line" />
                              }
                              to="https://observatorio.acessibilidade.gov.pt/"
                              text={t("HEADER.DROPDOWN.accessibility.link1")}
                            />
                          </li>

                          <li>
                            <Link
                              iconLeft={
                                <Icon name="AMA-Setalongaoficial-Line" />
                              }
                              to="https://www.acessibilidade.gov.pt/gerador/"
                              text={t("HEADER.DROPDOWN.accessibility.link2")}
                            />
                          </li>

                          <li>
                            <Link
                              iconLeft={
                                <Icon name="AMA-Setalongaoficial-Line" />
                              }
                              to="https://accessmonitor.acessibilidade.gov.pt/"
                              text={t("HEADER.DROPDOWN.accessibility.link3")}
                            />
                          </li>

                          <li>
                            <Link
                              iconLeft={
                                <Icon name="AMA-Setalongaoficial-Line" />
                              }
                              to="https://www.acessibilidade.gov.pt/wcag/"
                            >
                              <abbr
                                title="Web Content Accessibility Guidelines, version 2.1"
                                lang="en"
                              >
                                WCAG 2.1
                              </abbr>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-12 col-lg-4">
                      <div className="center-column-ecossistema-ama">
                        <div className="h3">
                          <strong>mosaico</strong>.gov.pt
                        </div>
                      </div>
                      <div className="center-column-ecossistema-ama">
                        <p>{t("HEADER.DROPDOWN.usability.text")}</p>
                      </div>
                      <div className="center-column-ecossistema-ama">
                        <div
                          style={{ height: "20px" }}
                          aria-hidden="true"
                          className="wp-block-spacer"
                        ></div>
                      </div>
                      <div className="center-column-ecossistema-ama">
                        <ul className="ama-list">
                          <li>
                            <Link
                              iconLeft={
                                <Icon name="AMA-Setalongaoficial-Line" />
                              }
                              to="https://mosaico.gov.pt/areas-tecnicas/usabilidade"
                              text={t("HEADER.DROPDOWN.usability.link1")}
                            />
                          </li>

                          <li>
                            <Link
                              iconLeft={
                                <Icon name="AMA-Setalongaoficial-Line" />
                              }
                              to="https://zeroheight.com/1be481dc2/p/97181d-agora-design-system"
                              text={t("HEADER.DROPDOWN.usability.link2")}
                            />
                          </li>

                          <li>
                            <Link
                              iconLeft={
                                <Icon name="AMA-Setalongaoficial-Line" />
                              }
                              to="https://prd-agora.northeurope.cloudapp.azure.com"
                              text={t("HEADER.DROPDOWN.usability.link3")}
                            />
                          </li>

                          <li>
                            <Link
                              iconLeft={
                                <Icon name="AMA-Setalongaoficial-Line" />
                              }
                              to="https://guias.mosaico.gov.pt/guias-praticos/usabilidade-como-realizar-testes-de-usabilidade"
                              text={t("HEADER.DROPDOWN.usability.link5")}
                            />
                          </li>

                          <li>
                            <Link
                              iconLeft={
                                <Icon name="AMA-Setalongaoficial-Line" />
                              }
                              to="https://guias.mosaico.gov.pt/guias-praticos/usabilidade-como-desenvolver-aplicacoes-para-dispositivos-moveis"
                              text={t("HEADER.DROPDOWN.usability.link6")}
                            />
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-12 col-lg-4">
                      <div className="right-column-ecossistema-ama">
                        <div className="h3">
                          <strong>selo.usabilidade</strong>.gov.pt
                        </div>
                      </div>
                      <div className="right-column-ecossistema-ama">
                        <p>{t("HEADER.DROPDOWN.badge.text")}</p>
                      </div>
                      <div className="right-column-ecossistema-ama">
                        <div
                          style={{ height: "20px" }}
                          aria-hidden="true"
                          className="wp-block-spacer"
                        ></div>
                      </div>
                      <div className="right-column-ecossistema-ama">
                        <ul className="ama-list">
                          <li>
                            <Link
                              iconLeft={
                                <Icon name="AMA-Setalongaoficial-Line" />
                              }
                              to="https://pprselo.usabilidade.gov.pt/candidatura/"
                              text={t("HEADER.DROPDOWN.badge.link3")}
                            />
                          </li>

                          <li>
                            <Link
                              iconLeft={
                                <Icon name="AMA-Setalongaoficial-Line" />
                              }
                              to="https://pprselo.usabilidade.gov.pt/requisitos/"
                              text={t("HEADER.DROPDOWN.badge.link5")}
                            />
                          </li>

                          <li>
                            <Link
                              iconLeft={
                                <Icon name="AMA-Setalongaoficial-Line" />
                              }
                              to="https://amagovpt.github.io/kit-selo/"
                              text={t("HEADER.DROPDOWN.badge.link2")}
                            />
                          </li>

                          <li>
                            <Link
                              iconLeft={
                                <Icon name="AMA-Setalongaoficial-Line" />
                              }
                              to="https://pprselo.usabilidade.gov.pt/ajuda/"
                              text={t("HEADER.DROPDOWN.badge.link1")}
                            />
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
