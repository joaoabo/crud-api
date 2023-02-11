import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header";

import api from "../../services/api"
import "./styles.css";

export default function Clientes() {
    const [clientes, setClientes] = useState([]);

    useEffect(() => {
        trazClientes();
        console.log(trazClientes);
      }, []);
    
    async function trazClientes() {
        const response = await api.get("api/Clientes")
        setClientes((response.data));
        console.log(response);
    }

    return (
      <>
         <Header/>
        <div className="main-body">
          <div className="main-body-opa">
            <div className="livro-container">
              <h1>Registro de clientes</h1>
              <ul>
                  {clientes.map(cliente => (
                      <li>
                      <div className="car-conteudo">
                        <h3><strong>Id</strong></h3>
                        <h4><p>{cliente.id}</p></h4>
                        <h3><strong>Nome</strong></h3>
                        <h4><p>{cliente.nome}</p></h4>
                      </div>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
	   </>
    )
}