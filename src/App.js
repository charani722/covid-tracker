import React,{useState,useEffect} from 'react';
import Table from 'react-bootstrap/Table';

const App = ()=>{
  const [data,setData] = useState([]);
  useEffect(() =>
  {
    fetch("https://data.covid19india.org/data.json").then(
      res => res.json()
    ).then(jsonData => setData(jsonData.statewise))

  },[]);
  return(
    <center>
      <h1>INDIA COVID-19 DASHBOARD</h1>
      <table className='table'>
        <thead className = "thead-d">
          <tr>
            <th>STATE</th>
            <th>CONFIRMED</th>
            <th>RECOVERED</th>
            <th>DEATHS</th>
            <th>ACTIVE</th>
            <th>LAST UPDATED</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map(item =>{
              return(
                <tr>
                  <td>{item.state}</td>
                  <td>{item.confirmed}</td>
                  <td>{item.recovered}</td>
                  <td>{item.deaths}</td>
                  <td>{item.active}</td>
                  <td>{item.lastupdatedtime}</td>
                </tr>
              )
            })
          }

        </tbody>
      </table>
    </center>
  )
}

export default App