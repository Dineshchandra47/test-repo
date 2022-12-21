import {BrowserRouter,Routes,Route} from 'react-router-dom'
import PostView from './PostViewPage/postView_page.js'
import LandingPage from './LandingPage/landing_page.js'
import CreatePost from './CreatePostPage/createPost_page.js'
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/postview' element={<PostView/>}/>
        <Route path='/createPost' element={<CreatePost/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
