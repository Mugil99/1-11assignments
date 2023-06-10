import logo from './logo.svg';
import './App.css';
import Tab from './Components/Tab';
import { useState } from 'react';
function App() {
  var arr=[{title:"Tab1",content:"This is content for Tab 1"},
  {title:"Tab2",content:"This is content for Tab 2"},
  {title:"Tab3",content:"This is content for Tab 3"},    
]
const [cont,setCont]=useState("");
const displayContent=(index)=>{
   setCont(arr[index].content)
   console.log(cont);
}
  return (
    <div>
      <ul>
        {arr.map((obj,index)=>{

          return(
            <li onClick={()=>{displayContent(index)}}>
            <Tab title={obj.title} content={obj.content} key={index} />
            </li>
          )
        })}
      </ul>
      <p>{cont}</p>
    </div>
  );
}

export default App;
