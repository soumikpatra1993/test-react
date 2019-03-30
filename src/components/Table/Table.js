import React from "react";
import './Table.css';
const Table = props => {

    const TableHead = ['Company Name' , 'Type' , 'last scanned' , 'Action']
const {tableData} = props;
console.log(tableData);
// this.calcPaginator();
// calcPaginator = () => {
// console.log('pagination');
// }
return (
	<div>
        <table align="left" className = "table">
  <div className = "TableHead-wrapper">
<div className = "table-head-value">{
TableHead.map((item , key) => {
        return (<th key = {key} >{item}</th>)
    })
}
</div>
 </div>
 <div>{tableData.map((item,key) => {
     return  (
         <tr key = {key} className = "row">
         <input type = "checkbox" />
             <td align="left" className  = "cell"key = {item.company}>{item.company}</td>
             <td key = {item.type}>{item.type}</td>
             <td key = {item.name}>{item.name}</td>
             <td> <span>Check</span> <span>Delete</span></td>
        
             
         </tr>
     )
 })}</div>
 </table>
 <div className = "Paginator">

 </div>
    </div>
);
}

export default Table