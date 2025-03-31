import secure from '../images/secure.png';
import pay from '../images/pay.png';
import razor from '../images/razor.png';
import {Link} from 'react-router-dom';

function Shopping(){
    return(  
        <>
        {/* left section */}
        <div className="flex justify-center items-center gap-80 mb-30">
            <div className="float-left mt-25"> 
                <p className="text-2xl font-bold ml-6 mt-10 mb-10">Shopping Cart</p>
                <div class="relative overflow-x-auto">
                    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 mb-80">
                        <thead class="text-xs text-gray-700 bg-gray-100 dark:bg-gray-700 dark:text-gray-400 border-b border-gray-200">
                            <tr>
                                <th scope="col" class="px-6 py-3 rounded-s-lg">
                                    Product
                                </th>
                                <th scope="col" class="px-6 py-3 text-center">
                                    Quantity
                                </th>
                                <th scope="col" class="px-6 py-3 rounded-e-lg text-center">
                                    Price
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="bg-white dark:bg-gray-800">
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Lenovo Legion 9...
                                </th>
                                <td class="px-6 py-4">
                                    <div class="flex items-center">
                                        <button class="inline-flex items-center justify-center p-1 text-sm font-medium h-4 w-4 text-gray-700 bg-white focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                                            <span class="sr-only">Quantity button</span>
                                            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16"/>
                                            </svg>
                                        </button>
                                        <div class="ms-3">
                                            <input type="number" id="first_product" class="bg-gray-50 w-12 text-black text-sm focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="1" required />
                                        </div>
                                        <button class="inline-flex items-center justify-center p-1 h-4 w-4 ms-3 text-sm font-medium text-gray-700 bg-white focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                                            <span class="sr-only">Quantity button</span>
                                            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
                                            </svg>
                                        </button>
                                    </div>
                                </td>
                                <td class="px-6 py-4 text-black flex">
                                    ₹4,50,190
                                    <div className="ml-6 mt-1">
                                        <svg class="w-3 h-3 text-red-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                                        </svg>
                                    </div>
                                </td>
                            </tr>
                            <tr class="bg-white dark:bg-gray-800">
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Lenovo Legion 9...
                                </th>
                                <td class="px-6 py-4">
                                    <div class="flex items-center">
                                        <button class="inline-flex items-center justify-center p-1 text-sm font-medium h-4 w-4 text-gray-700 bg-white focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                                            <span class="sr-only">Quantity button</span>
                                            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16"/>
                                            </svg>
                                        </button>
                                        <div class="ms-3">
                                            <input type="number" id="first_product" class="bg-gray-50 w-12 text-black text-sm focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="1" required />
                                        </div>
                                        <button class="inline-flex items-center justify-center p-1 h-4 w-4 ms-3 text-sm font-medium text-gray-700 bg-white focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                                            <span class="sr-only">Quantity button</span>
                                            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
                                            </svg>
                                        </button>
                                    </div>
                                </td>
                                <td class="px-6 py-4 text-black flex">
                                    ₹4,50,190
                                    <div className="ml-6 mt-1">
                                        <svg class="w-3 h-3 text-red-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                                        </svg>
                                    </div>
                                </td>
                            </tr>
                            <tr class="bg-white dark:bg-gray-800">
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Lenovo Legion 9...
                                </th>
                                <td class="px-6 py-4">
                                    <div class="flex items-center">
                                        <button class="inline-flex items-center justify-center p-1 text-sm font-medium h-4 w-4 text-gray-700 bg-white focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                                            <span class="sr-only">Quantity button</span>
                                            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16"/>
                                            </svg>
                                        </button>
                                        <div class="ms-3">
                                            <input type="number" id="first_product" class="bg-gray-50 w-12 text-black text-sm focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="1" required />
                                        </div>
                                        <button class="inline-flex items-center justify-center p-1 h-4 w-4 ms-3 text-sm font-medium text-gray-700 bg-white focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                                            <span class="sr-only">Quantity button</span>
                                            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
                                            </svg>
                                        </button>
                                    </div>
                                </td>
                                <td class="px-6 py-4 text-black flex">
                                    ₹4,50,190
                                    <div className="ml-6 mt-1">
                                        <svg class="w-3 h-3 text-red-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                                        </svg>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <Link to={'/Product'}><p className='font-semibold'>&lt; Continue Shopping</p></Link>
            </div>

           {/*  right section */}
            <div className="float-right mt-38">
                <div class="w-full  bg-white border border-gray-300 rounded-2xl shadow-sm dark:bg-gray-800 dark:border-gray-700 pl-6">
                    <p className="mt-4 mb-2">Enter Coupon Code</p>
                    <div className="flex gap-10">
                        <button type="button" class="py-4 px-14 me-2 mb-2 cursor-pointer text-sm font-medium text-gray-300 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                            COUPON CODE
                        </button>
                        <button type="button" class="text-white cursor-pointer bg-black hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-6 py-4 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
                            Apply Coupon
                        </button>
                    </div>
                    <div class="relative overflow-x-auto">
                        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <tbody>
                                <tr class="bg-white dark:bg-gray-800">
                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        Sub Total
                                    </th>
                                    <td class="px-6 py-4 text-right">
                                        ₹4,40,190
                                    </td>
                                </tr>
                                <tr class="bg-white dark:bg-gray-800">
                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        Taxes(if applicable)
                                    </th>
                                    <td class="px-6 py-4 text-right">
                                        ₹10,000
                                    </td>
                                </tr>
                                <tr class="bg-white dark:bg-gray-800">
                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        Discount
                                    </th>
                                    <td class="px-6 py-4 text-right">
                                        ₹0
                                    </td>
                                </tr>
                            </tbody>
                            <tfoot>
                                <tr class="font-semibold text-gray-900 dark:text-white">
                                    <th scope="row" class="px-6 py-3 text-base">Total</th>
                                    
                                    <td class="px-6 py-3 font-bold text-right">₹4,50,190</td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>
                <Link to={'/Payment'}>
                <button type="button" class="text-white bg-[#2557D6] hover:bg-[#2557D6]/90 focus:ring-4 focus:ring-[#2557D6]/50 focus:outline-none font-medium rounded-2xl text-xl px-32 py-3.5 text-center inline-flex items-center dark:focus:ring-[#2557D6]/50 me-2 mt-7 mb-2 cursor-pointer">
                    Pay Now ₹4,50,190
                </button>
                </Link>
                <div className="flex justify-center items-center mt-5 mb-10">
                    <img className="h-6" src={secure} alt="asset" />
                    <img className="h-6" src={razor} alt="asset" />
                    <img className="h-6" src={pay} alt="asset" />
                </div>
            </div>
        </div>
        </>

    );
}

export default Shopping;