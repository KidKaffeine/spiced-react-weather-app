import './App.css';
import Form from './components/Form/Form';
import Header from './components/Header/Header';
import RenderForm from './components/RenderForm/RenderForm';
import  {uid} from "uid"
import useLocalStorageState from 'use-local-storage-state';
import useFetch from './utils/useFetch';


  
function App() {
 const [activity, setActivity] = useLocalStorageState("activity", {defaultValue: []})
 
 const data = useFetch()
 const goodWeather = data.isGoodWeather
   
 if(!data) {
  return "Loading..."
 }

    function handleDeleteButton(id) {
     setActivity([...activity.filter((note) => note.id !== id)])
    }

    function handleAddActivity(data) {   
    setActivity([...activity, {...data, id: uid(), isChecked: document.getElementById("checkbox").checked}])
    }

   return ( 
          <>
          <div className={goodWeather ? "test1" : "test"}>
          <Header weatherData={data}></Header>
          <main className="main__app">
          <RenderForm entry={activity.filter((note) => note.isChecked === goodWeather)} onDeleteButton={handleDeleteButton} />
          <Form onAddActivity={handleAddActivity}/>
          </main>
          </div>
          </>
  )
}

export default App;
