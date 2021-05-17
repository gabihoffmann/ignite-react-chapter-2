import { Container, Card } from "./styles";

import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';

export function Summary(){
  const { transactions } = useContext(TransactionContext);
  
  const summary = transactions.reduce((acc, transaction) => {
      if(transaction.type === 'deposit'){
         acc.deposits += transaction.amount;
         acc.total += transaction.amount
        }else{
          acc.withdraws += transaction.amount;
          acc.total -= transaction.amount
        }
      return acc;
  },{
    deposits: 0,
    withdraws: 0,
    total: 0
  });
  
  return (
    <Container>
      <Card>
        <header>  
          <p>Entradas</p>
          <img src={incomeImg} alt="Entradas"/>
        </header>
        <strong>R$ 17.400,00</strong>
      </Card>
      <Card>
        <header>  
          <p>Saídas</p>
          <img src={outcomeImg} alt="Saídas"/>
        </header>
        <strong>R$ 1.259,00</strong>
      </Card>
      <Card className="highlight">
        <header>  
          <p>Total</p>
          <img src={totalImg} alt="Total"/>
        </header>
        <strong>R$ 16.141,00</strong>
      </Card>
    </Container>
  )
}