import React from 'react'
const Dépenses = (props) => {
  return (
    <>
    <div className='col'>
            <div className='card text-bg-danger mb-3' style={{ maxWidth: '18rem' }}>
              <div className='card-header'>Les dépenses</div>
              <div className='card-body'>
                <p className='card-text'>
                 {props.sold} DH
                </p>
              </div>
            </div>
          </div>
    </>
  )
}

export default Dépenses