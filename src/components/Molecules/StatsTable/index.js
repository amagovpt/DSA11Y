import { Icon } from "../../Atoms/Icon";
import React from "react";
import "./styles.css";

function sumValuesByKey(key, object) {
  if (!object) {
    return 0;
  }

  let value = object[key];

  if (!value) {
    return 0;
  }

  let result = (value.ok || 0) + (value.err || 0) + (value.war || 0);
  return result;
}

function sumAllValues(object) {
  if (object === null) {
    return { ok: 0, err: 0, war: 0 };
  }

  let allsum = { ok: 0, err: 0, war: 0 };
  for (let key in object) {
    let value = object[key];
    allsum.ok += value.ok || 0;
    allsum.err += value.err || 0;
    allsum.war += value.war || 0;
  }
  return allsum;
}

const StatsTable = ({darkTheme, data, ok, warning, error, title, caption, type}) => {

  const theme = darkTheme === "dark" ? "dark" : ""

  let sumValueA = sumValuesByKey("A", data?.data?.infoak);
  let sumValueAA = sumValuesByKey("AA", data?.data?.infoak);
  let sumValueAAA = sumValuesByKey("AAA", data?.data?.infoak);

  let allvalues = sumAllValues(data?.data.infoak);

  return (
    <>
      <div className="mb-4">
        <p className="practices_found">
          <span className="practices_found me-1">
            {data?.data?.metadata?.count_results}
          </span>
          {title}
        </p>
      </div>

      <table className={`table table-bordereds table-alternative ${theme}`}>
        <caption className="visually-hidden">{caption}</caption>
        <thead>
          <tr className="mobile_table">
            <th scope="col" className="text-left border_right">
              <p className="heading_totals">{type}</p>
            </th>
            <th className="border_right heading_total total_top">Total</th>
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

                  <span className="title">{ok}</span>
                </div>
                <div
                  className="overlay overlay_aceptable"
                  style={{ width: `${allvalues.ok}%` }}
                />
              </div>
              {/* MOBILE */}
              <div className="d-flex flex-row justify-content-end mobile_row-container">
                <div className="d-flex flex-column mobile-row">
                  <span>Total</span>
                  <span>{allvalues.ok}</span>
                </div>

                <div className="d-flex flex-column mobile-row">
                  <span>A</span>
                  <span>{data?.data && data?.data?.infoak?.A?.ok}</span>
                </div>

                <div className="d-flex flex-column mobile-row">
                  <span>AA</span>
                  <span>{data?.data && data?.data?.infoak?.AA?.ok}</span>
                </div>

                <div className="d-flex flex-column mobile-row">
                  <span>AAA</span>
                  <span>{data?.data && data?.data?.infoak?.AAA?.ok}</span>
                </div>
              </div>
            </th>
            {/* DESKTOP */}

            <td className="border_right body_text desk_row">
              {allvalues.ok}
            </td>
            <td className="border_right body_text desk_row">
              {data?.data && data?.data?.infoak?.A?.ok}
            </td>
            <td className="border_right body_text desk_row">
              {data?.data && data?.data?.infoak?.AA?.ok}
            </td>
            <td className="border_right body_text desk_row">
              {data?.data && data?.data?.infoak?.AAA?.ok}
            </td>
          </tr>

          <tr>
            <th scope="row" className="border_right">
              <div className="aceptable_continer">
                <div className="icon_and_text">
                  <Icon name="AMA-Middle-Line" />
                  <span className="title">{warning}</span>
                </div>
                <div
                  className="overlay overlay_manual"
                  style={{ width: `${allvalues.war}%` }}
                />
              </div>
              {/* MOBILE */}
              <div className="d-flex flex-row justify-content-end mobile_row-container">
                <div className="d-flex flex-column mobile-row">
                  <span>Total</span>
                  <span>{allvalues.war}</span>
                </div>
                <div className="d-flex flex-column mobile-row">
                  <span>A</span>
                  <span>{data?.data && data?.data?.infoak?.A?.war}</span>
                </div>

                <div className="d-flex flex-column mobile-row">
                  <span>AA</span>
                  <span>{data?.data && data?.data?.infoak?.AA?.war}</span>
                </div>

                <div className="d-flex flex-column mobile-row">
                  <span>AAA</span>
                  <span>{data?.data && data?.data?.infoak?.AAA?.war}</span>
                </div>
              </div>
            </th>

            {/* DESKTOP */}
            <td className="border_right body_text desk_row">
              {allvalues.war}
            </td>
            <td className="border_right body_text desk_row">
              {data?.data && data?.data?.infoak?.A?.war}
            </td>
            <td className="border_right body_text desk_row">
              {data?.data && data?.data?.infoak?.AA?.war}
            </td>
            <td className="border_right body_text desk_row">
              {data?.data && data?.data?.infoak?.AAA?.war}
            </td>
          </tr>

          <tr>
            <th scope="row" className="border_right">
              <div className="aceptable_continer">
                <div className="icon_and_text">
                  <Icon name="AMA-Wrong-Line" />

                  <span className="title">{error}</span>
                </div>

                <div
                  className="overlay overlay_no_aceptable"
                  style={{ width: `${allvalues.err}%` }}
                />
              </div>
              {/* MOBILE */}

              <div className="d-flex flex-row justify-content-end mobile_row-container">
                <div className="d-flex flex-column mobile-row">
                  <span>Total</span>
                  <span>{allvalues.err}</span>
                </div>
                <div className="d-flex flex-column mobile-row">
                  <span>A</span>
                  <span>{data?.data && data?.data?.infoak?.A?.err}</span>
                </div>

                <div className="d-flex flex-column mobile-row">
                  <span>AA</span>
                  <span>{data?.data && data?.data?.infoak?.AA?.err}</span>
                </div>

                <div className="d-flex flex-column mobile-row">
                  <span>AAA</span>
                  <span>{data?.data && data?.data?.infoak?.AAA?.err}</span>
                </div>
              </div>
            </th>
            {/* DESKTOP */}
            <td className="border_right body_text desk_row">
              {allvalues.err}
            </td>
            <td className="border_right body_text desk_row">
              {data?.data && data?.data?.infoak?.A?.err}
            </td>
            <td className="border_right body_text desk_row">
              {data?.data && data?.data?.infoak?.AA?.err}
            </td>
            <td className="border_right body_text desk_row">
              {data?.data && data?.data?.infoak?.AAA?.err}
            </td>
          </tr>

          {/* MOBILE */}
          <div className="d-flex flex-row justify-content-end total_mobile mobile_row-container-total">
            <div className="d-flex flex-column mobile-row">
              <span>Total</span>
              <span>{data?.data?.metadata?.count_results}</span>
            </div>

            <div className="d-flex flex-column mobile-row">
              <span>A</span>
              <span>{sumValueA}</span>
            </div>

            <div className="d-flex flex-column mobile-row">
              <span>AA</span>
              <span>{sumValueAA}</span>
            </div>

            <div className="d-flex flex-column mobile-row">
              <span>AAA</span>
              <span>{sumValueAAA}</span>
            </div>
          </div>

          {/* DESK */}
          <tr className="total_bottom-container">
            <th scope="row" className="border-bottom-0 border_right sr-only">
              <span className="heading_totals">Total</span>
            </th>
            <td className="border-bottom-0 border_right border_left heading_total total_bottom">
              {data?.data?.metadata?.count_results}
            </td>
            <td className="border-bottom-0 border_right border_left heading_total total_bottom">
              {sumValueA}
            </td>
            <td className="border-bottom-0 border_right heading_total total_bottom">
              {sumValueAA}
            </td>
            <td className="border-bottom-0 border_right heading_total total_bottom">
              {sumValueAAA}
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export { StatsTable };