import lenova from '../images/lenova.jpg';
import Home from '../pages/Home';
import Navbar from '../components/Navbar';
import len1 from '../images/len1.jpg';
import len2 from '../images/len2.jpg';
import len3 from '../images/len3.jpg';
import len4 from '../images/len4.jpg';
import len5 from '../images/len5.jpg';
import len6 from '../images/len6.jpg';
import len7 from '../images/len7.png';
import len8 from '../images/len8.webp';
import len9 from '../images/len9.jpg';
import len10 from '../images/len10.jpg';
import len11 from '../images/len11.png';
import len12 from '../images/len12.png';

function Product(){
    return(
        <>
        <div className='mt-8'>
            <a href='../pages/Home' className='text-gray-400 ml-30'>Home &gt; Laptops &gt; Lenovo Laptops &gt; Lenovo Legion 9 Intel Core i9 13th Gen 13980HX</a>
        </div>
        <div className="w-full flex flex-column gap-x-15 mt-10">
            <img className="-pl-4 w-120 h-120 ml-30 mb-10 bg-white border-l-2 border-r-2 border-t-8 border-b-8 border-solid border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700 cursor-pointer" src={lenova} alt="product image" />
            <div className="w-200 p-6 bg-white float-right">
                <a href="#">
                    <h5 className="mb-4 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Lenovo Legion 9 Intel Core i9 13th Gen 13980HX-
                        (32 GB/2 TB SSD/Windows 11 Home/16 GB Graphics/
                        NVIDIA GeForce RTX 4090/175 W) 16IRX8 Gaming Laptop
                        (16 inch, Carbon Black, 2.56 kg, With MS Office)
                    </h5>
                </a>
                <p className="mb-6 font-normal text-gray-400 dark:text-gray-400">Integrated 99.9Wh, Hybrid Thermal Solution (Liquid Cooling + ari
                    Cooling + Liquid Metal), AI Chip: LA2, RAID 0 Present, Certifications:
                    ErP Lot 3, RoHs Compliant, TUV Rheinland Low Blue Light(Hardware
                    Solution),UL Solutions - Gaming Performance and Comfort (Gold),
                    Fingerprint: Touch Style, Integrated in Power Button.</p>
                <div className="flex flex-column gap-x-8">
                    <div>
                        <a href="#" className="inline- mb-5 px-3 py-4 text-xl font-medium font-bold text-center text-blue-700 bg-green-300 rounded-lg hover:bg-green-300 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">₹ 4,50,190</a>
                    </div>
                    <p className='text-lime-600 font-bold text-2xl'>Save 28%<br/><span className='text-gray-400 font-normal text-base'>Inclusive of All Taxes</span></p>
                </div>
                <div className='flex flex-column gap-x-4 mt-4'>
                        <ul>
                            <li>
                                <select className='bg-gray-300 rounded-lg p-6 cursor-pointer'>
                                    <option value="one">1</option>
                                    <option value="two">2</option>
                                </select>
                            </li>
                        </ul>
                    <button type="button" className="text-white cursor-pointer bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 text-xl rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        <svg class="w-3.5 h-3.5 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 21">
                            <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z"/>
                        </svg>
                        Add To Cart
                    </button>
                </div>
           </div>
        </div>
        <div className="w-full overflow-x-auto whitespace-nowrap">
            <div className="inline-block w-60 h-46 -mr-2 ml-30 ">
                <img className="w-48 h-38 border-t-2 border-r-5 border-b-5 border-l-2 border-solid border-gray-300 rounded-lg p-5 cursor-pointer" src={len1} alt="product image" />
            </div>
            <div className="inline-block w-60 h-45 -mr-2">
                <img className="w-48 h-38 border-t-2 border-r-5 border-b-5 border-l-2 border-solid border-gray-300 rounded-lg p-5 cursor-pointer" src={len2} alt="product image" />
            </div>
            <div className="inline-block w-60 h-45 -mr-2">
                <img className="w-48 h-38 border-t-2 border-r-5 border-b-5 border-l-2 border-solid border-gray-300 rounded-lg p-5 cursor-pointer" src={len3} alt="product image" />
            </div>
            <div className="inline-block w-60 h-45 -mr-2">
                <img className="w-48 h-38 border-t-2 border-r-5 border-b-5 border-l-2 border-solid border-gray-300 rounded-lg p-5 cursor-pointer" src={len4} alt="product image" />
            </div>
            <div className="inline-block w-60 h-45 -mr-2">
                <img className="w-48 h-38 border-t-2 border-r-5 border-b-5 border-l-2 border-solid border-gray-300 rounded-lg p-5 cursor-pointer" src={len5} alt="product image" />
            </div>
            <div className="inline-block w-60 h-45 -mr-2">
                <img className="w-48 h-38 border-t-2 border-r-5 border-b-5 border-l-2 border-solid border-gray-300 rounded-lg p-5 cursor-pointer" src={len6} alt="product image" />
            </div>
            <div className="inline-block w-60 h-45 -mr-2">
                <img className="w-48 h-38 border-t-2 border-r-5 border-b-5 border-l-2 border-solid border-gray-300 rounded-lg p-5 cursor-pointer" src={len7} alt="product image" />
            </div>
            <div className="inline-block w-60 h-45 -mr-2">
                <img className="w-48 h-38 border-t-2 border-r-5 border-b-5 border-l-2 border-solid border-gray-300 rounded-lg p-5 cursor-pointer" src={len8} alt="product image" />
            </div>
            <div className="inline-block w-60 h-45 -mr-2">
                <img className="w-48 h-38 border-t-2 border-r-5 border-b-5 border-l-2 border-solid border-gray-300 rounded-lg p-5 cursor-pointer" src={len9} alt="product image" />
            </div>
            <div className="inline-block w-60 h-45 -mr-2">
                <img className="w-48 h-38 border-t-2 border-r-5 border-b-5 border-l-2 border-solid border-gray-300 rounded-lg p-5 cursor-pointer" src={len10} alt="product image" />
            </div>
            <div className="inline-block w-60 h-45 -mr-2">
                <img className="w-48 h-38 border-t-2 border-r-5 border-b-5 border-l-2 border-solid border-gray-300 rounded-lg p-5 cursor-pointer" src={len11} alt="product image" />
            </div>
            <div className="inline-block w-60 h-45 -mr-2">
                <img className="w-48 h-38 border-t-2 border-r-5 border-b-5 border-l-2 border-solid border-gray-300 rounded-lg p-5 cursor-pointer" src={len12} alt="product image" />
            </div>
        </div>
        </>
    );
}
export default Product;