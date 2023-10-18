import './home.css';

import B1 from './b1.jpg';
import Oil from './oil.jpg';
import water from './water.jpg';

const Home=() => (
      //This bellow div code for design the home page by using images,header and nav bar
    <div> 
       
       <div className="h1">
                <h1><span className='he'>Get in Touch</span><br></br> <span className='he1'>with Our Bike Experts Today</span></h1>  
        </div>
        <h1 className='ser'>Our<span className='s1'>Services</span></h1>
        <div className="serv">
                <div className='ser1'>
                    <figure className='card'>
                        <img src={B1} alt='bike' className='b2'></img>
                        
                    </figure> 
                    <h1 className='heads'>General Service</h1>
                </div>
                <div className='ser2'>
                    <figure className='card'>
                        <img src={Oil} alt='bike' className='b2'></img>
                        
                    </figure> 
                    <h1 className='heads'>Oil Change</h1>
                </div>
                <div className='ser2'>
                    <figure className='card'>
                        <img src={water} alt='bike' className='b2'></img>
                        
                    </figure> 
                    <h1 className='heads'>Water Service</h1>
                </div>
        </div>
    </div>
)
export default Home;