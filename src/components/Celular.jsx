import { useState } from "react"

function Celular(){
    const [celular,setCelular] = useState([]);
    const [marca,setMarca] = useState('')
    const [modelo,setModelo] = useState('')
    const [preco,setPreco] = useState('')
    const [memoria,setMemoria] = useState('')
    const [cor,setCor] = useState('')
    const [processador,setProcessador] = useState('')
    const [composicaoDaBateria,setComposicaoDaBateria] = useState('')
    const [tamanhoDaTela,setTamanhoDaTela] = useState('')
    const [hertzDaTela,setHertzDaTela] = useState('')
    const [camera,setCamera] = useState('')
    const [sistemaOperacional,setSistemaOperacional] = useState('')
    const [descricao,setDescricao] = useState('')
    const [avaliacao,setAvaliacao] = useState('')
    const [armazenamento,setArmazenamento] = useState('')
    const [peso,setPeso] = useState('')
    const [dimensao,setDimensao] = useState('')
    const [conector,setConector] = useState('')
    const [carregador,setCarregador] = useState('')
    const [numeroDeSerie,setNumeroDeSerie] = useState('')
    const [fone,setFone] = useState('')
    const [quantidadeDeChips,setQuantidadeDeChips] = useState('')
    const [entradaDeMicroSd,setEntradaDeMicroSd] = useState('')

    const adicionarCelular = () => {
        if(marca && modelo && preco && memoria && cor && processador && composicaoDaBateria && tamanhoDaTela && hertzDaTela && camera && sistemaOperacional && descricao && avaliacao && armazenamento && peso && dimensao && conector && carregador && numeroDeSerie && fone && quantidadeDeChips && entradaDeMicroSd ) {
            setCelular([...celular, { marca,modelo,preco,memoria,cor,processador,composicaoDaBateria,tamanhoDaTela,hertzDaTela,camera,sistemaOperacional,descricao,avaliacao,armazenamento,peso,dimensao,conector,carregador,numeroDeSerie,fone,quantidadeDeChips,entradaDeMicroSd }]);
            setMarca('');
            setModelo('');
            setPreco('');
            setMemoria('');
            setCor('');
            setProcessador('');
            setComposicaoDaBateria('');
            setTamanhoDaTela('');
            setHertzDaTela('');
            setCamera('');
            setSistemaOperacional('');
            setDescricao('');
            setAvaliacao('');
            setArmazenamento('');
            setPeso('');
            setDimensao('');
            setConector('');
            setCarregador('');
            setNumeroDeSerie('');
            setFone('');
            setQuantidadeDeChips('');
            setEntradaDeMicroSd('');
        }
    }
    return(
        <>
<div>
            <h2>Lista de Celular</h2>
            <div>
                <input type="text " style={{display:"block"}}
                value={marca}
                onChange={(e) => setMarca(e.target.value)}
                placeholder="Marca"

                />
                <input type="text" style={{display:"block"}}
                value={modelo}
                onChange={(e) => setModelo(e.target.value)}
                placeholder="Modelo"
                />

                <input type="text" style={{display:"block"}}
                value={preco}
                onChange={(e) => setPreco(e.target.value)}
                placeholder="Preço"
                />

                <input type="text" style={{display:"block"}}
                value={memoria}
                onChange={(e) => setMemoria(e.target.value)}
                placeholder="Memoria"
                />
 
                <input type="text" style={{display:"block"}} 
                value={cor}
                onChange={(e) => setCor(e.target.value)} 
                placeholder="Cor"
                />

                <input type="text" style={{display:"block"}}
                value={processador}
                onChange={(e) => setProcessador(e.target.value)}
                placeholder="Processador"
                />

                <input type="text" style={{display:"block"}}
                value={composicaoDaBateria}
                onChange={(e) => setComposicaoDaBateria(e.target.value)}
                placeholder="Composição da Bateria"
                />

                <input type="text" style={{display:"block"}}
                value={tamanhoDaTela}
                onChange={(e) => setTamanhoDaTela(e.target.value)}
                placeholder="Tamanho Da Tela"
                 />

                <button onClick={adicionarCelular}>Adicionar</button>
            </div>
            <ul>
                {celular.map((celula,index) => (
                    <li key ={index}>
                        <strong>{celula.marca}:</strong> {celula.modelo}: <strong>{celula.preco}</strong>
                    </li>
                    
                ))}
            </ul>
        </div>
        
        </>
    )
}

export default Celular