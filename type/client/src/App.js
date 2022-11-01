import axios from 'axios';
import { useState , useEffect} from 'react';
function App() {
  const [hello , setHello] = useState()

  const sendRequest = async(dataKey) => {
    const response = await axios.get('http://localhost:8080');
    setHello(response.data[dataKey])//response.data.message
  };

  useEffect(()=>{
    sendRequest("message");
  });
  
  return (
    <div className="App">
      {hello}
    </div>
  );
}

export default App;
