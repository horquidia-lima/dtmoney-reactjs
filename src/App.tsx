import Modal from "react-modal"
import { useState } from "react";
import { Header } from "./components/Header";
import {GlobalStyle} from "./styles/global";
import {Deshboard} from "./components/Dashboard"

Modal.setAppElement("#root")

export function App() {

  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false)

  function handleOpenNewTransactionModal(){
      setIsNewTransactionModalOpen(true)
  }

  function handleCloseNewTransactionModal(){
      setIsNewTransactionModalOpen(false)
  }

  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
      <Deshboard/>

      <Modal 
          isOpen={isNewTransactionModalOpen}
          onRequestClose={handleCloseNewTransactionModal}
      >
          <h2>Cadastrar transacao</h2>
      </Modal>
      <GlobalStyle/>
    </>
  );
}


