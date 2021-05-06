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
  Modal.setAppElement('#root'); 

  const [transactionType, setTransactionType] = useState('deposit');

  function handleWithTheSubmit(event: FormEvent){
    event.preventDefault();
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
        <Container onSubmit={handleWithTheSubmit}>
          <h2>Nova transação</h2>
          <input type="text" placeholder="Título"/>
          <input type="number" placeholder="Valor"/>
          <TransactionTypeContainer>
            <RadioBox 
              type="button"
              onClick={() => setTransactionType('deposit')}
              isActive={transactionType === 'deposit'}
              activeColor="green"
              >
              <img src={incomeImg} alt="entrada"/>
              <span>Entrada</span>
            </RadioBox>
            <RadioBox 
              type="button"
              onClick={() => setTransactionType('withdrawal')}
              isActive={transactionType === 'withdrawal'}
              activeColor="red"
            >
              <img src={outcomeImg} alt="saída"/>
              <span>Saída</span>
            </RadioBox>
          </TransactionTypeContainer>
          <input type="text" placeholder="Categoria"/>
          <button type="submit">Salvar</button>
        </Container>
    </Modal>
  );
}