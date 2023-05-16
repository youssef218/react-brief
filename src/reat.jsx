import React, { useState, useEffect } from 'react';

function App() {

    const [formData, setFormData] = useState(() => {
        const storedData = localStorage.getItem('formData')
        return storedData ? JSON.parse(storedData) : []
      })



      const category = [];
      const amount = [];
      
      formData.map((data) => {
        category.push(data.category);
        amount.push(data.amount);
      });
      

      console.log(category);
      console.log(amount);
  return (
    <div>      
          {formData.map((data, index) => (
           
            <tr key={index}>
                
              <th scope='row'>
                {data.type === 'depenses' ? (
                  <i className='fa-solid fa-arrow-down text-danger'></i>
                ) : (
                  <i className='fa-solid fa-arrow-up text-success'></i>
                )}
              </th>
              <td>{data.type}</td>
              <td>{data.category}</td>
              <td>{data.amount}</td>
              <td>{data.date}</td>
              <td>{data.details}</td>
            </tr>
          ))}
    </div>
  );
}

export default App;
