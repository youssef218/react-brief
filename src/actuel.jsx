import React from 'react'
const Actuel = (props) => {

  return (
   
    <>
    <div className='col'>
            <div className='card text-bg-info mb-3' style={{ maxWidth: '18rem' }}>
              <div className='card-header'>solde actuel</div>
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

export default Actuel