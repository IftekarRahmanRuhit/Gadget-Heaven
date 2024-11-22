import { Link } from 'react-router-dom';
import Bannerimg from '../../public/banner.jpg'


const Banner = () => {


  return (
    <div>
      <div className="w-11/12 mx-auto bg-[#9538E2] p-12 relative max-w-screen-2xl">
        <div>
          <p className=" text-white text-2xl md:text-5xl text-center font-bold">
            Upgrade Your Tech Accessorize with <br /> Gadget Heaven Accessories
          </p>

          <p className="mt-8 text-white text-center">
            Discover the latest gadgets that will elevate your experience! From
            cutting-edge smart devices to stylish accessories, <br /> we’ve got
            everything you need to stay ahead of the curve.
          </p>

          <div className="text-center mt-14 md:mb-20">
            <Link to='/dashboard'><button className="btn text-purple-600 font-bold rounded-full">Shop Now</button></Link>
          </div>
        </div>
      </div>

      <div className='hidden md:block md:w-3/5 mx-auto relative bottom-32'>

        <div className='mt-4 '>
            <div className='text-center border rounded-xl border-white p-6 rounded backdrop-blur-lg'>
                <div>
                <img className='w-[800px] h-[400px] mx-auto' src= {Bannerimg} alt="" />
                </div>
            </div>
        </div>

      </div>

      <div className=''>

        <p className='text-center font-bold text-2xl md:text-4xl mt-4 md:mt-0'>Explore Cutting-Edge Gadgets</p>

      </div>




    </div>
  );
};

export default Banner;
