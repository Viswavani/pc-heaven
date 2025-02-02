function Footer() {
    return(

        <footer>
            <div className="w-full h-20vh flex flex-row items-center justify-around pt-30px pb-30px bg-blue-600 pt-10 pb-10">
                <div className="text-center flex items-center text-white text-2xl">
                    <i className='bx bx-message-rounded text-[3vw]'></i>
                    <p className="text-start m-2"><span className="font-bold">2K+</span><br/>Reviews</p>
                </div>
                <div className="text-center flex items-center text-white text-2xl">
                    <i className='bx bxs-group text-[3vw]'></i>
                    <p className="text-start m-2"><span className="font-bold">30K+</span><br/>Customers</p>
                </div>
                <div className="text-center flex items-center text-white text-2xl">
                    <i className='bx bx-trending-up text-[3vw]'></i>
                    <p className="text-start m-2"><span className="font-bold">High</span><br/>Quality</p>
                </div>
                <div className="text-center flex items-center text-white text-2xl">
                    <i className='bx bx-star text-[3vw]'></i>
                    <p className="text-start m-2"><span className="font-bold">4.5/5</span><br/>Ratings</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;