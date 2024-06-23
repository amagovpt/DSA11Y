import "./styles.css"
export const SpacingTable = ({spacings, family}) => {
  const spacing = (type, def, variant, example, extra) => {
    return (
        <tr>
            <td>{type}</td>
            <td>{def}</td>
            <td>{variant}</td>
            <td>{example}</td>
            <td>
                <div className={`spacing_container ${extra}`}>
                    <div className={`spacing_inner_container ${family === "margin" ? example : ""}`}>
                        {example}
                    </div>
                </div>
            </td>
        </tr>
    )
  }
  return (
    <table className="mb-5 spacing_table">
        <thead>
            <tr>
                <th>{family === "sizes" ? "Size" : "Type"}</th>
                <th>{family === "sizes" ? "Value" : "Definition"}</th>
                <th>{family === "sizes" ? "Value in px" : "Variant"}</th>
                <th>Example</th>
                <th style={{ width: 170 }}>Result</th>
            </tr>
        </thead>
        <tbody>
            {spacings.map((s) => spacing(s.type, s.def, s.variant, s.example, s.extra))}
        </tbody>
    </table>
  );
}