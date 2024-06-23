import "./styles.css"
export const TypographyTable = ({fonts, family}) => {
  const font = (variant, size, weight, className) => {
    return (
        <tr>
            <td>{variant}</td>
            <td>{size}</td>
            <td>{weight}</td>
            <td>
                {family === "headlines" ? headline(variant)
                : <p className={`overflow ${className}`}>The quick brown fox jumps over the lazy dog.</p>}
            </td>
        </tr>
    )
  }

  const headline = (type) => {
    switch(type) {
        case "1":
            return <h1 className="overflow">The quick brown fox jumps over the lazy dog.</h1>
        case "2":
            return <h2 className="overflow">The quick brown fox jumps over the lazy dog.</h2>
        case "3":
            return <h3 className="overflow">The quick brown fox jumps over the lazy dog.</h3>
        case "4":
            return <h4 className="overflow">The quick brown fox jumps over the lazy dog.</h4>
        case "5":
            return <h5 className="overflow">The quick brown fox jumps over the lazy dog.</h5>
        case "6":
            return <h6 className="overflow">The quick brown fox jumps over the lazy dog.</h6>
    }
  }
  return (
    <table className="mb-5 typography_table">
        <thead>
            <tr>
                <th>{family === "pesos" ? "Nome da Classe" : "Variant"}</th>
                <th>{family === "pesos" ? "Atributo Alterado" : "Font Size"}</th>
                <th>{family === "pesos" ? "Value" : "Font Weight"}</th>
                <th style={{ width: 170 }}>Result</th>
            </tr>
        </thead>
        <tbody>
            {fonts.map((s) => font(s.variant, s.size, s.weight, s.className))}
        </tbody>
    </table>
  );
}