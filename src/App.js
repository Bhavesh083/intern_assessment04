import React,{useState} from 'react'
import './App.css';

function App() {

  const data = new Array(32).fill().map((value,index) => ({ id : index}));

  const [value, setValue] = useState('');

  const [count, setCount] = useState(1);

  const [numb, setNumb] = useState([]);


  const [type, setType] = useState({
         id : '',
         name : '',
  });  
  

  const changeDropdown = (e) =>{

      e.preventDefault();
      setValue(e.target.value)
  }

  const checkVal = () =>{

    if (value === 'relay') {
      setType({...type, id : 'Relay ID', name : 'Relay Name',module:'Modules'})
    }
     else if(value === 'motor') {
      setType({...type, id : 'Motor Id', name : 'Motor Name',module:''})
    }
    else if(value === 'sensor'){
            setType({...type, id : 'Sensor Id', name : 'Sensor Name',module:''})
    }

  }
  
  const changeMod = (e) =>{

    const cgc = parseInt(e.target.value)
    setCount(cgc)
    const itemss = new Array(cgc).fill(null).map(()=>('hello'));
    setNumb(itemss)
    console.log(itemss) 

  }
 


  return (
    <div className="app-main">
      <div className='header'>
         <select  onChange={(e)=>changeDropdown(e)}>
              <option selected='selected'>Choose device</option>
              <option value="sensor">Sensor</option>
              <option value="motor">Motor</option>
              <option value="relay">Relay</option>
         </select>
         <button onClick={(e)=>checkVal(e)}>✔</button>
       </div>
            <div className='inputs-grp'> 
              <input  value={type.id} />
               <input  value={type.name} />
                {type.module ==='Modules' ?
                 <div className=''>
                   <select  onChange={(e)=>changeMod(e)}>
                      <option selected='selected'>Modules</option>
                       {data.map( item => (
                        <option value={item.id+1}>{item.id+1}</option>
                          ))}
                     </select>
                    <div className='spc-inp'>{ 
                          numb.map( item => (
                          <input placeholder='.....' key={item.id} />
                      ))}
                 </div>
              </div>:''}
           </div>
      </div>
  );
}

export default App;
