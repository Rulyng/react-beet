import {Route, Routes} from 'react-router-dom'

import Header from './common/header/Header';
import Footer from './common/footer/Footer';

import Home from "./pages/home/Home";
import Contact from './pages/contact/Contact'
import Blog from './pages/blog/Blog'
import Article from './common/article/Article'
import Aboutus from './pages/about-us/About-us'
import News from './pages/news/News'
import SinglePost from './pages/blog/SinglePost'

import './app.css'

function App() {
  return (
    <div className='wrapper'>
   <Header/>

   <main>
   <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/blog' element={<Blog/>} />
      <Route path='/aboutus' element={<Aboutus/>}/>
      <Route path='*' element={<h2>404</h2>}/>
      <Route path='/news' element={<News/>}/>
      <Route path='/blog/:postInfo' element={<SinglePost/>}/>
    </Routes>
    <Article/>
   </main>

   <Footer/>
    </div>

  );
}

export default App;
