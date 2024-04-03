import { Icon } from "../../../index";
import "./styles.css";

export function TableAlternative() {
  return (
    <>
      <table className="table table-bordereds table-alterantive">
        <caption className="visually-hidden">practices found</caption>
        <thead>
          <tr>
            <th scope="col" className="text-left border_right ">
              <span className="total_practices">33</span>{" "}
              <span className="practices_found">practices found</span>
            </th>
            <th className="border_right heading_total total_top">A</th>
            <th className="border_right heading_total total_top">AA</th>
            <th className="border_right heading_total total_top">AAA</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <th scope="row" className="border_right">
              <div className="aceptable_continer">
                <div className="icon_and_text">
                  <Icon name="AMA-Check-Line" />

                  <span className="title">Aceptable</span>
                </div>
                <div
                  className="overlay overlay_aceptable"
                  style={{ width: "70%" }}
                />

                <span className="ammount">24 </span>
              </div>
            </th>
            <td className="border_right body_text">14</td>
            <td className="border_right body_text"> 10</td>
            <td className="border_right body_text">0</td>
          </tr>

          <tr>
            <th scope="row" className="border_right">
              <div className="aceptable_continer">
                <div className="icon_and_text">
                  <Icon name="AMA-Middle-Line" />
                  <span className="title">To view manually</span>
                </div>
                <div
                  className="overlay overlay_manual"
                  style={{ width: "20%" }}
                />

                <span className="ammount">7</span>
              </div>
            </th>
            <td className="border_right body_text">4</td>
            <td className="border_right body_text">0</td>
            <td className="border_right body_text">3</td>
          </tr>

          <tr>
            <th scope="row" className="border_right">
              <div className="aceptable_continer">
                <div className="icon_and_text">
                  <Icon name="AMA-Wrong-Line" />

                  <span className="title">Non Acceptable</span>
                </div>

                <div
                  className="overlay overlay_no_aceptable"
                  style={{ width: "2%" }}
                />

                <span className="ammount">2</span>
              </div>
            </th>
            <td className="border_right body_text">1</td>
            <td className="border_right body_text">0</td>
            <td className="border_right body_text">0</td>
          </tr>

          <tr>
            <th scope="row" className="border-bottom-0 border_right">
              <span class="visually-hidden">Total</span>
            </th>
            <td className="border-bottom-0 border_right heading_total total_bottom">
              19
            </td>
            <td className="border-bottom-0 border_right heading_total total_bottom">
              10
            </td>
            <td className="border-bottom-0 border_right heading_total total_bottom">
              4
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
