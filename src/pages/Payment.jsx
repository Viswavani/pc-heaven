import React from 'react'
import secure from '../images/secure.png';
import pay from '../images/pay.png';
import razor from '../images/razor.png';

export default function Payment() {
    return (
        <div>
            <section className="flex justify-between">

                <div className="w-1/2 flex flex-col gap-2 p-7">
                    <p className='font-bold text-lg text-gray-500'>Checkout</p>
                    <div className="flex flex-col gap-2 mt-5">
                        <h2 className='font-bold text-2xl'>Contact Details</h2>
                        <label for="email">Email ID</label>
                        <input className='bg-[#fff6f6] border-gray-300 border-2 rounded-md p-4 py-3' type="email" name="" id="email" placeholder="test@gmail.com" />
                    </div>
                    <h2 className='font-bold text-2xl'>Payment</h2>
                    <div className="rounded-md border-2 border-gray-300 p-5 flex flex-col gap-5 w-full">
                        <div className="payment-select">
                            <div className="flex gap-2 w-full">
                                <label for="card-pay" className="card-method flex-1">
                                    <input type="radio" name="payment" id="card-pay" hidden className='peer' />
                                    <div className='cursor-pointer border-gray-300 border-2 p-5 peer-checked:border-blue-500 rounded-md h-[100px] flex-1 flex flex-col justify-center gap-2'>
                                        <span><i className="fa fa-credit-card" aria-hidden="true"></i></span>
                                        <p>Card</p>
                                    </div>
                                </label>
                                <label for="crypto-pay" className="crypto-method flex-1">
                                    <input type="radio" name="payment" id="crypto-pay" hidden className='peer' />
                                    <div className='cursor-pointer border-gray-300 border-2 peer-checked:border-blue-500 p-5 rounded-md h-[100px] flex-1 flex flex-col justify-center gap-2'>
                                        <span><i className="fa fa-btc" aria-hidden="true"></i></span>
                                        <p>Crypto</p>
                                    </div>
                                </label>
                                <label for="bank-pay" className="bank-method flex-1">
                                    <input type="radio" name="payment" id="bank-pay" hidden className='peer' />
                                    <div className='cursor-pointer border-gray-300 border-2 peer-checked:border-blue-500 p-5 rounded-md h-[100px] flex-1 flex flex-col justify-center gap-2'>
                                        <span><i className="fa fa-university" aria-hidden="true"></i></span>
                                        <p>Bank</p>
                                    </div>
                                </label>
                                <label for="other-pay" className="other-method flex-1">
                                    <input type="radio" name="payment" id="other-pay" hidden className='peer' />
                                    <div className='cursor-pointer border-gray-300 border-2 peer-checked:border-blue-500 p-5 rounded-md h-[100px] flex-1 flex flex-col justify-center gap-2'>
                                        <span><i className="fa fa-ellipsis-v" aria-hidden="true"></i></span>
                                    </div>
                                </label>
                            </div>
                        </div>



                        <div className="flex flex-col gap-2">
                            <label for="card-num" className='flex-1'>Card Number</label>
                            <input className='bg-[#fff6f6] border-gray-300 border-2 rounded-md p-4 py-3' type="number" id="card-num" placeholder="1234XXXXXXX" />
                        </div>
                        <div className="flex gap-3">
                            <div className="w-full">
                                <div className='flex gap-2 flex-col'>
                                    <label for="expiry-date" className='flex-1'>Expiry</label>
                                    <input className='bg-[#fff6f6] border-gray-300 border-2 rounded-md p-4 py-3' type="text" id="expiry-date" placeholder="MM/YY" />
                                </div>

                                <div className='flex gap-2 flex-col mt-2'>
                                    <label for="country" className='flex-1'>Country</label>
                                    <input className='bg-[#fff6f6] border-gray-300 border-2 rounded-md p-4 py-3' type="text" maxlength="10" id="country" placeholder="India" />
                                </div>
                            </div>
                            <div className="w-full">
                                <div className='flex gap-2 flex-col'>
                                    <label for="cvc" className='flex-1'>CVC</label>
                                    <input className='bg-[#fff6f6] border-gray-300 border-2 rounded-md p-4 py-3' type="text" id="cvc" placeholder="***" />
                                </div>
                                <div className='flex gap-2 flex-col mt-2'>
                                    <label for="zip" className='flex-1'>ZIP</label>
                                    <input className='bg-[#fff6f6] border-gray-300 border-2 rounded-md p-4 py-3' type="text" id="zip" placeholder="XXXXXX" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-[#e5e5e5] w-1/2 p-7 justify-items-center content-center">
                    <h2 className='font-bold text-2xl'>Order Summary</h2>

                    <div className="border-2 border-gray-300 bg-white px-7 py-10 m-3 mb-10 rounded-3xl flex flex-col">
                        <p className='font-medium '>Enter Coupon Code</p>
                        <div className="mt-3 mb-5 flex gap-3">
                            <input className='bg-[#fff6f6] border-gray-300 border-2 rounded-md p-4 py-3' type="text" name="" id="" placeholder="COUPON CODE" />
                            <button className="px-5 py-3 bg-black text-white rounded-md">Apply Coupon</button>
                        </div>

                        <div className="flex flex-col gap-3">
                            <div className='flex justify-between'>
                                <p>Sub Total</p>
                                <p>₹ 4,40,190</p>
                            </div>
                            <div className='flex justify-between'>
                                <p>Taxes(if applicable)</p>
                                <p>₹ 10,000</p>
                            </div>
                            <div className='flex justify-between'>
                                <p>Discount</p>
                                <p>₹ 0</p>
                            </div>
                            <div className='flex justify-between font-bold text-lg'>
                                <p>Total</p>
                                <p>₹ 4,50,190</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <button className="bg-[#0073e6] px-[130px] py-[25px] text-white text-lg rounded-3xl">Pay Now ₹ 4,50,190</button>
                        <div className="flex justify-center items-center gap-5 mt-5 mb-2">
                            <img className="h-6" src={secure} alt="asset" />
                            <img className="h-6" src={razor} alt="asset" />
                            <img className="h-6" src={pay} alt="asset" />
                        </div>
                    </div>
                </div>

            </section>
        </div>
    )
}