import Modal from 'react-modal';

import  {Container} from './styles'

interface NewTransactionsModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionsModalProps){
  Modal.setAppElement('#root'); 

  return (
    <Modal 
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
        <Container>
          <h2>Nova transação</h2>
          <input type="text" placeholder="Título"/>
          <input type="number" placeholder="Valor"/>
          <input type="text" placeholder="Categoria"/>
          <button type="submit">Salvar</button>
        </Container>
    </Modal>
  );
}