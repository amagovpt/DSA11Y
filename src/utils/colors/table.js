import "./styles.css"

export const ColorsTable = ({colors}) => {
  const color = (variant, hex, color) => {
    return (
        <tr>
            <td>{variant}</td>
            <td>{hex}</td>
            <td><div className="box" style={{ backgroundColor: `var(${color})` }}></div></td>
        </tr>
    )
  }
  return (
    <table className="mb-5 colors_table">
        <thead>
            <tr>
                <th>Variant</th>
                <th>Hex</th>
                <th>Color</th>
            </tr>
        </thead>
        <tbody>
            {colors.map((c) => color(c.variant, c.hex, c.color))}
        </tbody>
    </table>
  );
}
