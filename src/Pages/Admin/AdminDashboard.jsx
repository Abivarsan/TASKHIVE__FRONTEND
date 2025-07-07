import React, { useState } from 'react'
import Sidebar from '../../Compornents/Sidebar.jsx'
import Topbar from '../../Compornents/Topbar.jsx'
import '../Styles/PageStructure.css'
import AdminDashboardComponent from '../../Components-Thusharaga/AdminDashboardComponent.js'
import { useLocation } from 'react-router-dom'


function AdminDashboard() {




  return (
    <div className="FullPage">
      
      <Sidebar/>
      <Topbar/>
     
      <div className="Content">
       
        <AdminDashboardComponent showRateUpdate={true}/>
     
      </div>
      
    </div>

  )
}

export default AdminDashboard