import React from 'react'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import { AppContext } from './context/ContextAPI'
import Header from './components/Header'
import LeftNav from './components/LeftNav'
import LeftNavMenuItems from './components/LeftNavMenuItems'
import Feed from './components/Feed'
import SearchResult from './components/SearchResult'
import SearchResultVideo from './components/SearchResultVideo'
import SuggestionVideo from './components/SuggestionVideo'
import VideoDetails from './components/VideoDetails'
import VideoCard from './components/VideoCard'

const App = () => {
  return (
   <>
<AppContext>

<BrowserRouter>
<div className='flex flex-col h-full'>
    <Header /> 
    <Routes>
        <Route path='/'  element={<Feed />}/>
        <Route path='/searchResult/:searchQuery' element={<SearchResult />}/>
        <Route path='/video/:id' element={<VideoDetails />}/>
    </Routes>
</div>
</BrowserRouter>


</AppContext>


  
  
   </>
  )
}

export default App