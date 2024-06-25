import { clarity, delight, path, speed } from "../../assets";

import "./principles.css";

export function Principles() {
  return (
    <div className="principles">
      <section className="information-box-module_informationBox__QOoZN">
        <figure className="information-box-module_component__Fe90I">
          <img
            className="monday-storybook-principle_visual-element"
            src={clarity}
            alt=""
          />
        </figure>
        <h4 className="information-box-title-module_informationBoxTitle__Ue-Ii">
          Clarity
        </h4>
        <section className="information-box-module_description__0MwCB">
          Clear visuals and experiences enable users to feel confident using the
          platform.
        </section>
      </section>
      <section className="information-box-module_informationBox__QOoZN">
        <figure className="information-box-module_component__Fe90I">
          <img
            className="monday-storybook-principle_visual-element"
            src={speed}
            alt=""
          />
        </figure>
        <h4 className="information-box-title-module_informationBoxTitle__Ue-Ii">
          Speed and Reliability
        </h4>
        <section className="information-box-module_description__0MwCB">
          Fast and steady behavior gives the user a sense of control and
          independence.
        </section>
      </section>
      <section className="information-box-module_informationBox__QOoZN">
        <figure className="information-box-module_component__Fe90I">
          <img
            className="monday-storybook-principle_visual-element"
            src={path}
            alt=""
          />
        </figure>
        <h4 className="information-box-title-module_informationBoxTitle__Ue-Ii">
          Intuitive Path
        </h4>
        <section className="information-box-module_description__0MwCB">
          Keeping a natural flow in mind when using the product helps users
          achieve their goals.
        </section>
      </section>
      <section className="information-box-module_informationBox__QOoZN">
        <figure className="information-box-module_component__Fe90I">
          <img
            className="monday-storybook-principle_visual-element"
            src={delight}
            alt=""
          />
        </figure>
        <h4 className="information-box-title-module_informationBoxTitle__Ue-Ii">
          Delightful Experience
        </h4>
        <section className="information-box-module_description__0MwCB">
          Users will continue using the platform if it makes them feel
          empowered.
        </section>
      </section>
    </div>
  );
}
