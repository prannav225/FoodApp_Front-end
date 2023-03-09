import { Routes, Route } from 'react-router-dom';
import Home from './home';
import About from './about';
import Posts from './posts';
import Food from './food';
import SinglePost from './singlePost';
import CollapsibleExample from './navbar';
import Footer from './footer';

const HomePortal = () => {
    return (
        <div className="homeportal">
            <CollapsibleExample />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/addposts' element={<Posts />} />
                <Route path='/food' element={<Food />} />
                <Route path='/food/:id' element={<SinglePost />} />
            </Routes>
            <Footer/>
        </div>
    );
}

export default HomePortal;