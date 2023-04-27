import React from 'react'
const Revenus = (props) => {
  return (
    <>
    <div className='col'>
            <div
              className='card text-bg-success mb-3'
              style={{ maxWidth: '18rem' }} >
              <div className='card-header'>Les revenus</div>
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

export default Revenus