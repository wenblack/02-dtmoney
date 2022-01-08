import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export function TransactionTable() {
    useEffect(() => {
        api.get('transactions')
            .then(reponse => console.log(reponse.data))
    }, []);
    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td >Desenvolvimento de Website</td>
                        <td className="deposit">R$ 12.000,00</td>
                        <td>Desenvolvimento</td>
                        <td>30/12/2021</td>
                    </tr>
                    <tr>
                        <td>Água</td>
                        <td className="withdraw">- R$ 60,00</td>
                        <td>Casa</td>
                        <td>20/12/2021</td>
                    </tr>
                    <tr>
                        <td >Luz</td>
                        <td className="withdraw">- R$ 350,00</td>
                        <td>Casa</td>
                        <td>25/12/2021</td>
                    </tr>
                    <tr >
                        <td>Salário</td>
                        <td className="deposit">R$ 1.000,00</td>
                        <td>Adiantamento</td>
                        <td>20/12/2021</td>
                    </tr>
                </tbody>
            </ table>
        </Container>
    )
}