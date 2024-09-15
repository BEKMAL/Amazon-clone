import React from 'react'
import Header from '../Header/Header'
import { Outlet } from 'react-router-dom'

function LayOut() {
  return (
<div>
    <Header/>
    <Outlet/>
</div>
  )
}

export default LayOut