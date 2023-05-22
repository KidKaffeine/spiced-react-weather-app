import './App.css';
import Form from './components/Form/Form';
import Header from './components/Form/Header/Header';
import RenderForm from './components/RenderForm/RenderForm';
import { useState } from 'react';
import  {uid} from "uid"
import useLocalStorageState from 'use-local-storage-state';

  
function App() {
  const [activity, setActivity] = useLocalStorageState("activity", {defaultValue: []})
  const [isChecked, setIsChecked] = useState(false)

  function handleAddActivity(data) {

    setActivity([...activity, {...data, id: uid()}])
    setIsChecked()
    console.log(typeof activity[1].checkbox);
    console.log(activity)
    }
  

   return ( <>
          <Header></Header>
          <Form onAddActivity={handleAddActivity}></Form>
          <RenderForm entry={activity} checkButton={isChecked}/>
          </>
  )
}

export default App;
