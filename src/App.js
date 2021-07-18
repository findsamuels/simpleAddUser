import Modal from './Components/Ui/ErrorModal'
import { useState } from 'react';
import './App.css';
import AddPerson from './Components/PersonInput/AddPerson';
import DisplayPersons from './Components/PersonOutput/DisplayPersons';
import ErrorModal from './Components/Ui/ErrorModal';

function App() {

  const [personDatas, setPersonDatas] = useState([])
  const [showErrorModal, setShowErrorModal] = useState(false)
  const [errorType, setErrorType] = useState("")

  const onPersonData = (name,age,id) => {

      setPersonDatas(prevPerson => {
      
        const updatePerson = [...prevPerson]
        updatePerson.unshift({
          name: name,
          age: age,
          id: id
        })
        return(updatePerson)
      })

  }
 
  const deletePersonHandler = personId => {

    setPersonDatas(prevPerson => {
      const updatedPerson = prevPerson.filter(person => person.id !== personId)
      return updatedPerson
    })
  }

  const showErrorModalHandler = (showError, errorType) => {
setShowErrorModal(showError)
setErrorType(errorType)
  }

  const hideErrorModal = () => {
    setShowErrorModal(false)
  }


  return (
    <div className="App">
      <ErrorModal title="An error occured" body={errorType}  hide={hideErrorModal} show={showErrorModal} />
      <h1 style={{padding: "10px 0"}}>New User Registration</h1>
     <AddPerson onShowErrorModal={showErrorModalHandler} onGetPerson={onPersonData}/>
     <DisplayPersons onDeletePersonById={deletePersonHandler} personData={personDatas} />
    </div>
  );
}

export default App;
