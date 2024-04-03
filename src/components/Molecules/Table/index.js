import { Icon } from "../../index";
import { Accordion } from "../../Atoms/Accordion";

import "./styles.css";

const TableComponent = () => {
  const options = [
    {
      id: "1",
      title:
        "I found 1 image on the page without the alternative text equivalent.",
      component: (
        <div>
          Check if the alternative text equivalent found in the images provides
          equal information or function as the one performed by the image on the
          page. H37: Using alt attributes on img elements This WCAG 2.1
          technique is related to: Success criteria 1.1.1 (Level A) Notions
          about the SC 1.1.1
        </div>
      ),
    },
  ];

  return (
    <>
      <table className="table table_primary">
        <caption className="visually-hidden">practices found</caption>
        <thead>
          <tr>
            <th>
              <span class="visually-hidden">#</span>
            </th>
            <th>Practice found</th>
            <th>Level</th>
            <th>See detail</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td className="success-cell">
              <Icon name="AMA-Check-Line" />
            </td>
            <td>
              <Accordion options={options} iconAlignment="left" flush={true} />
            </td>
            <td className="middle_col">AA</td>
            <td>
              <button className="detail_link">
                <Icon name="AMA-Detalhe-Line" />
                <span class="visually-hidden">Detalhe</span>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export { TableComponent };
