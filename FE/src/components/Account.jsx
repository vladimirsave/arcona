import React from 'react'

function Account() {
  return (
    <div style={{backgroundColor: "#dfdddd55"}} className="pt-1 pb-4">
      <div className='account mx-auto mt-5 py-3 rounded'>
        <div className='account-heading ps-4 mb-3' style={{fontSize: "24px"}}>Account</div>
        <div id="balance_arcona" className='p-4 rounded' style={{backgroundColor: "#fff", border:"1px solid #e7e8ea"}}>Connect your wallet and choose a chain</div>
      </div>
    </div>
  )
}

export default Account