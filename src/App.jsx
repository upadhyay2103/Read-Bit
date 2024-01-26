import Footer from './components/Footer';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import PostList from './components/PostList';
import CreatePost from './components/CreatePost';
import { useState } from 'react';
import PostListProvider from './store/post-list-store';
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  let [selectedTab, setSelectedTab] = useState("Home");

  const handleClick = (e) => {
    let text = e.target.innerText;
    setSelectedTab(text);
  }

  return (
    <PostListProvider>
      <div className='appCont'>
        <Sidebar tab={selectedTab} handleClick={handleClick}></Sidebar>
        <div className="content">
          <Header></Header>
          {
            selectedTab === "Home" ?
              <PostList></PostList> :
              <CreatePost></CreatePost>
          }
          <Footer></Footer>
        </div>
      </div>
    </PostListProvider>
  )
}

export default App
