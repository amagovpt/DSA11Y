import { Icon } from "../../../index";

export function WidgetBar({ description, logo, title, title2 }) {
  return (
    <div className="widgets-bar py-4">
      <div className="container">
        <div className="row ml-0 mr-0">
          <div className="col-12 col-lg-6 align-self-center">
            <div className="d-flex justify-content-between">
              {title && title2 ? 
                <h1 className="d-flex flex-column logo">
                  <span className="title ms-0">{title}</span>
                  <span className="title2 Medium">{title2}</span>
                </h1>
              :
                <h1 className="logo">{logo}</h1>
              }

              <div className="d-flex d-lg-none flex-column align-items-center">
                {/* <button
                  type="button"
                  className="open-mobile-menu menu-hamburger rounded-circle"
                >
                  <span
                    className="icon-AMA-Menu-Line"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">
                    {t("HEADER.mobile_menu")} 
                  </span>
                </button> */}
              </div>
            </div>
          </div>

          {/* Menu */}

          <div className="d-flex flex-row gap-4 button-mobile">
            <button className="btn btn-link dark-mode p-1 d-flex align-items-center">
              <span id="darkModeLabel-mobile" className="AMA-Typography-Body">Modo Escuro</span>
              <Icon
                name="AMA-EscuroClaro-Line icon-dark"
                aria-hidden="true"
              />
            </button>

            <button className="btn btn-link language-mode p-1  d-flex align-items-center">
              <span id="langModeLabel-mobile" className="AMA-Typography-Body">See in english</span>
              <Icon name="AMA-Globo-Line icon-lang" aria-hidden="true" />
            </button>
          </div>

          <div className="col-12 col-lg-6 align-self-center ">
            <div className="site-description">
              <p className="AMA-Typography-Body">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}  