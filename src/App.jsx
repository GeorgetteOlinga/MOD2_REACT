import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Dashboard from './components/Dashboard'
import Reviews from './components/Reviews'
import SentimentAnalysis from './components/SentimentAnalysis'
import WebsitesVisitors from './components/WebsitesVisitors'
import AverageRating from './components/AverageRating'
import empty from './components/nothing'
import "./style.css";

function App() {


  return (
    <body>

      <div className="bigbox">
        <div className="dashbox"><Dashboard />
        </div>
        <div className='midbox'>
          <div className="topbox">
            <div className="revbox"><Reviews /></div>
            <div className="averabox"><AverageRating /></div>
            <div className="sentibox"><SentimentAnalysis /></div>
          </div>

          <div className="bottombox">
            <WebsitesVisitors />
            <div className="emptybox"><nothing/></div>
          </div>
        </div>

      </div>



    </body>
  )
}

export default App
