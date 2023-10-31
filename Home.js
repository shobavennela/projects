import { Link } from 'react-router-dom';
import vcube from './vcube.jpg';
import image2 from './image2.jpeg';
import download1 from './download1.jpg';
import download2 from './download2.jpg';
import images3 from './images3.jpg';
import images4 from './images4.jpg';
import images5 from './images5.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMagnifyingGlass,faLocationDot} from '@fortawesome/free-solid-svg-icons';
import  './Home.css';


const Homepage=()=>{
   
    return(
        <div className='body'>
            
            <img src={vcube}  className='logo' style={{backgroundColor:'#F4F2F6'}} />
            <div className='display-menu'>
                <Link className='menu' to={"/"}>JOBS</Link>
                <Link className='menu' to={"/"}>BLOGS</Link>
               
                <Link className='menu1' to={"/"}>Employer Login</Link>
                <Link className='menu2' to={"/Signin"}>Candidate Login</Link>
             <div>
             <h4  className='job'>INDIA'S #1 JOBS PLATFORM</h4>
             <h1 className='your'>Your job search ends here</h1>
             <h4 className='career'>Discover 50 lakh+ career opportunities</h4>
             </div>
             <div className='image'>
                <img src={image2} alt='imageerror' className='img'/>
             </div>
             <div className="search-bar">
             <FontAwesomeIcon icon={faMagnifyingGlass} className='mag'/>< input type="text"  placeholder="Search Jobs" className='search'  />
             <FontAwesomeIcon icon={faLocationDot} className='mag' /><input type="text"  placeholder="location" className='search'  />
             <button type='submit' className='btn btn-primary'>search</button>
             <div className='marquee'>
             <marquee>
               <img src={download1} alt='imageerror' className='imgs'/>&nbsp;&nbsp;&nbsp;
               <img src={download2} alt='imageerror' className='imgs'/>&nbsp;&nbsp;&nbsp;
               <img src={images3} alt='imageerror' className='imgs'/>&nbsp;&nbsp;&nbsp;
               <img src={images4} alt='imageerror' className='imgs'/>&nbsp;&nbsp;&nbsp;
               <img src={images5} alt='imageerror' className='imgs'/>&nbsp;&nbsp;&nbsp;
              
             </marquee>
             </div>
            </div>
            </div>
            <div className='down'>
                <h2 className='get'>Get Job in just 2 steps</h2>
                <h4>Build your profile & get <br></br> discovered by HRs</h4>

            </div>
               
                
           
           
           
        </div>


    )
}
   


export default Homepage;