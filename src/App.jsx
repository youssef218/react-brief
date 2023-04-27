import React from 'react'
import Dépenses from './dépenses'
import Revenus from './revenus'
import Actuel from './actuel'
import { useState, useEffect } from 'react'
import './App.css'
import Header from './header'
const App = () => {
  // l'affiche 
  const [clicked, setClicked] = useState(true)
  const handleClick = () => {
    setClicked(!clicked)
  }
  // modifier sur categories
  const [categoryToAdd, setCategoryToAdd] = useState('')
  const [categories, setCategories] = useState([
    'Alimentation',
    'Logement',
    'Transport',
    'Loisirs'
  ])
  const handleAddCategory = event => {
    event.preventDefault()
    setCategories([...categories, categoryToAdd])
    setCategoryToAdd('')
  }
  const handleDeleteCategory = index => {
    setCategories(categories.filter((category, i) => i !== index))
  }
  // stet sold
  const [actuel, setactuel] = useState(0)
  const [depences, setdepences] = useState(0)
  const [revenus, setrevenus] = useState(0)
  // value of form
  const [formValues, setFormValues] = useState({
    type: '',
    amount: '',
    category: '',
    details: '',
    date: new Date().toLocaleDateString()
  })
  // recuper les donnee on localstorage
  const [formData, setFormData] = useState(() => {
    const storedData = localStorage.getItem('formData')
    return storedData ? JSON.parse(storedData) : []
  })
  // si le changer tableau automatic
  useEffect(() => {
    localStorage.setItem('formData', JSON.stringify(formData))
  }, [formData])
  // after submit
  const handleSubmit = event => {
    event.preventDefault()
    const newData = { ...formValues }
    setFormValues({
      type: '',
      amount: '',
      category: '',
      details: '',
      date: new Date().toLocaleDateString()
    })
    // Save the form data to local storage
    const storedData = localStorage.getItem('formData')
    const existingData = storedData ? JSON.parse(storedData) : []
    localStorage.setItem('formData', JSON.stringify([...existingData, newData]))
    // changer le tableau
    setFormData([...formData, newData])
  }
  // changer les value de form
  const handleInputChange = event => {
    const { name, value } = event.target
    setFormValues({ ...formValues, [name]: value })
  }
  // add valu to details
  useEffect(() => {
    let totalDepences = 0
    let totalRevenus = 0
    formData.forEach(data => {
      if (data.type === 'depenses') {
        totalDepences += parseInt(data.amount)
      } else if (data.type === 'revenus') {
        totalRevenus += parseInt(data.amount)
      }
    })
    setdepences(totalDepences)
    setrevenus(totalRevenus)
    setactuel(totalRevenus - totalDepences)
  }, [formData])
  return (
    <>
      <Header />
      <div className='container text-center'>
        <div className='row align-items-start'>
          <Dépenses sold={depences} />
          <Revenus sold={revenus} />
          <Actuel sold={actuel} />
        </div>
      </div>

      <table className='table container'>
        <thead>
          <tr>
            <th scope='col'>#</th>
            <th scope='col'>Type</th>
            <th scope='col'>Category</th>
            <th scope='col'>Amount</th>
            <th scope='col'>Date</th>
            <th scope='col'>Comment</th>
          </tr>
        </thead>
        <tbody>
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
        </tbody>
      </table>

      <div
        className='modal fade'
        id='exampleModalToggle'
        aria-hidden='true'
        aria-labelledby='exampleModalToggleLabel'
        tabIndex='-1'
      >
        <div className='modal-dialog position-fixed bottom-0 end-0'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h1 className='modal-title fs-5' id='exampleModalToggleLabel'>
                Enregistrement
              </h1>
              <button
                type='button'
                className='btn-close'
                data-bs-dismiss='modal'
                aria-label='Close'
              ></button>
            </div>
            <div className='modal-body'>
              <div>
                <label htmlFor='type'>Type:</label>
                <select
                  name='type'
                  value={formValues.type}
                  onChange={handleInputChange}
                >
                  <option value=''>-- Please select --</option>
                  <option value='depenses'>Dépenses</option>
                  <option value='revenus'>Revenus</option>
                </select>
              </div>
              <div>
                <label htmlFor='amount'>Amount:</label>
                <input
                  type='number'
                  name='amount'
                  value={formValues.amount}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor='category'>Category:</label>
                <select
                  name='category'
                  value={formValues.category}
                  onChange={handleInputChange}
                >
                  <option value=''>-- Please select --</option>
                  {categories.map(cat => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor='details'>Details:</label>
                <textarea
                  name='details'
                  value={formValues.details}
                  onChange={handleInputChange}
                ></textarea>
              </div>
              <button type='button' onClick={handleSubmit}>
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
      <button
        className='btn btn-primary '
        style={{ position: 'fixed', bottom: '10%', right: '5%' }}
        data-bs-target='#exampleModalToggle'
        data-bs-toggle='modal'
      >
        Nouvelle mise jour
      </button>

      <div className={clicked ? 'moveclicked fle' : 'move fle'}>
        <div>
          <h2>Categories</h2>
          <ul>
            {categories.map((category, i) => (
              <li key={i}>
                {category}
                <button onClick={() => handleDeleteCategory(i)}>Delete</button>
              </li>
            ))}
          </ul>
          <form onSubmit={handleAddCategory}>
            <input
              type='text'
              value={categoryToAdd}
              onChange={event => setCategoryToAdd(event.target.value)}
            />
            <button type='submit'>Add Category</button>
          </form>
        </div>

        <div className='marg' onClick={handleClick}>
          {' '}
          {clicked ? (
            <span>category ⚙️ &#8594;</span>
          ) : (
            <span>&larr;⚙️ category </span>
          )}{' '}
        </div>
      </div>
    </>
  )
}
export default App
