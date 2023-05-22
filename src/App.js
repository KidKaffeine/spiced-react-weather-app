import './App.css';
import Form from './components/Form/Form';
  
function App() {

  function handleAddActivity(data) {

      
    console.log("data", data)
    }


  return (<Form onAddActivity={handleAddActivity}></Form>);
}

export default App;
