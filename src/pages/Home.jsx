import computer from '../images/computer.png'; 
function Home() {
    return(
        <div className="h-[75vh] mt-5 flex justify-center items-center gap-x-8">
            <div className="left grid gap-6 ">
                <h1 className="text-5xl font-semibold">Welcome to<br/>PC Heaven</h1>
                <p className="w-[700px]">Discover top-performing PCs at unbeatable prices! Our store offers the latest models for gaming, work, and everyday use. Enjoy powerful performance, sleek designs and personalized customer service to find the perfect PC tailored to your needs. Upgrade your setup today!!.</p>
                <button className="border bg-black rounded-lg text-white p-4 w-[8vw] shadow-2xl shadow-fuchsia-500">Shop Now</button>
            </div>
            <div className="right -mr-20">
                <img className="size-[600px]" src={computer} alt="Image" />
            </div>
        </div>
    );
}

export default Home;