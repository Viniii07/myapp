import React from 'react'

export const TableList = () => {
    const headers = ["Name", "Loc", "Runs"];
    const data=[{name:"Dhoni",loc:"Ranchi",runs:100},
    {name:"Sachin",loc:"Mumbai",runs:150},
    {name:"Kohli",loc:"Delhi",runs:100},
    {name:"Dravid",loc:"Bangalore",runs:200}];
  return (
    <div>
        <table border="1px solid">
            <thead>
                {headers.map((header,i)=>{
                 return <th>{header}</th>
                })}
            </thead>
            <tbody>
                {data.map((obj,i)=>{
                   return <tr>
                    <td>{obj.name}</td>
                    <td>{obj.loc}</td>
                    <td>{obj.runs}</td>
                   </tr>;
                })}
            </tbody>
        </table>
    </div>
  )
}
