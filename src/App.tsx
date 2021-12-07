import Modal from "react-modal"
import { useState } from "react";
import { Header } from "./components/Header";
import {GlobalStyle} from "./styles/global";
import {Deshboard} from "./components/Dashboard"
import { NewTransactionModal } from "./components/NewTransactionModal";
import { TransactionContext } from "./TransactionContext";

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
    <TransactionContext.Provider value={[]}>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
      <Deshboard/>
      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
      <GlobalStyle/>
    </TransactionContext.Provider>
  );
}


