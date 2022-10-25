import React from 'react'
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles//ag-grid.css';
import 'ag-grid-community/styles//ag-theme-alpine.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import CircularProgress from '@mui/material/CircularProgress';



const User = (props) => {

  const [rowData, setRowData] = useState();
  const [columnDefs] = useState([
    { field: 'first_name',},
    { field: 'last_name' },
    { field: 'position' }
]);


  const options = {
    method: 'GET',
    url: 'https://free-nba.p.rapidapi.com/players',
    params: {page: '0', per_page: '25'},
    headers: {
      'X-RapidAPI-Key': '8b7d6b83damsh7792e1b6825269fp125c46jsne1985d3b226c',
      'X-RapidAPI-Host': 'free-nba.p.rapidapi.com'
    }
  };

  useEffect(() => {
    props.toggleLoading(true);
    axios.request(options).then((r)=> {
      setRowData(r.data.data)
      props.toggleLoading(false);
    })
    ;}, []);



  return (
    <div className='greething'>
      <h1>Welcome dear {props.user}!!!!</h1>
      <div className="ag-theme-alpine" style={{ height: 400, width: 600, margin:"auto"}}>
        {props.isLoading?<CircularProgress />:null}
        <AgGridReact
          rowData={rowData}
          columnDefs={columnDefs}>
        </AgGridReact>
      </div>
    </div>

  )
}

export default User