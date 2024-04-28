import React from 'react';
import TransactionRow from './TransactionRow';
import { useState } from 'react';
import AddTransaction from './AddTransaction';
import SearchBox from './SearchBox';

function TableTransaction({records}) {
  const [stateRecords, setStateRecords] = useState(records);
  const [searchValue, setSearch] = useState("");

    const rows = [];
      stateRecords.forEach((data, index) => {
       if(data.description.toLowerCase().indexOf(searchValue.toLowerCase()) === -1) {
        return;
       } 

      rows.push( < TransactionRow 
          key={index}
            date={data.date} 
            description={data.description}
            category={data.category}
            amount={data.amount}
            />
      )
})
    return (<>
      <SearchBox searchValue={searchValue} funcSetSearch={setSearch} />
      <AddTransaction funcSetData={setStateRecords} />
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Description</th>
              <th>Category</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
        </>
      );
}

export default TableTransaction