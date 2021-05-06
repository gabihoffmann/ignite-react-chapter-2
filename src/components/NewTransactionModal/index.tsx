import { FormEvent, useState } from 'react';
import Modal from 'react-modal';

import  { Container, TransactionTypeContainer, RadioBox } from './styles';

import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';

interface NewTransactionsModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionsModalProps){

  const [type, setTransactionType] = useState('deposit');
  const [title, setTitle] = useState('');
  const [value, setValue] = useState(0);
  const [category, setCategory] = useState('');

  function handleCreateNewTransaction(event: FormEvent){
    event.preventDefault();

    console.log(title, value, type, category)
  }

  return (
    <Modal 
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button type="button" onClick={onRequestClose} className="react-model-close">
        <img src={closeImg} alt="Fechar modal"/>
      </button>
        <Container onSubmit={handleCreateNewTransaction}>
          <h2>Nova transação</h2>
          <input type="text" placeholder="Título" value={title} onChange={event => setTitle(event.target.value)}/>
          <input type="number" placeholder="Valor" value={value} onChange={event => setValue(Number(event.target.value))}/>
          <TransactionTypeContainer>
            <RadioBox 
              type="button"
              onClick={() => setTransactionType('deposit')}
              isActive={type === 'deposit'}
              activeColor="green"
              >
              <img src={incomeImg} alt="entrada"/>
              <span>Entrada</span>
            </RadioBox>
            <RadioBox 
              type="button"
              onClick={() => setTransactionType('withdrawal')}
              isActive={type === 'withdrawal'}
              activeColor="red"
            >
              <img src={outcomeImg} alt="saída"/>
              <span>Saída</span>
            </RadioBox>
          </TransactionTypeContainer>
          <input type="text" placeholder="Categoria" value={category} onChange={event => setCategory(event.target.value)}/>
          <button type="submit">Salvar</button>
        </Container>
    </Modal>
  );
}