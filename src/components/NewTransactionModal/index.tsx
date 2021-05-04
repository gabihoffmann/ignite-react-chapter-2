import Modal from 'react-modal';

interface NewTransactionsModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionsModalProps){
  Modal.setAppElement('#root'); 

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
        oi
    </Modal>
  );
}