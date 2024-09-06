// Banda nome = "U2"
// https://legacy.reactjs.org/docs/cdn-links.html?
// <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>

function Banda(props) {
    return (
        <div className="cartao">
            <h2>{props.nome}</h2>
        </div>
    )
}

let bandas = (
    <div className="bandas">
        <Banda nome="U2"></Banda>
        <Banda nome="Manoel Gomes"></Banda>
        <Banda nome="BTS"></Banda>
        <Banda nome="Koala"></Banda>
        <Banda nome="Raimundos"></Banda>
        <Banda nome="Mamonas"></Banda>
        <Banda nome="Calipso"></Banda>
        <Banda nome="Barões"></Banda>
        <Banda nome="Xuxa"></Banda>
        <Banda nome="Metalica"></Banda>
        <Banda nome="Pantera"></Banda>
        <Banda nome="NX Zero"></Banda>
    </div>
)


let root = ReactDOM.createRoot(document.getElementById('app'))
root.render(bandas)
