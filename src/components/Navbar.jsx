import image from '../images/image.png';
const Navbar = ()=>{
    return(
        
      <nav class="bg-white dark:bg-gray-900 fixed w-full z-20 top-2 start-0 shadow-md h-20">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse -ml-40">
            <img src={image} class="h-8" alt="Logo"/>
            <span class="self-center text-3xl font-semibold whitespace-nowrap dark:text-white text-teal-700">PC Heaven</span>
          </a>
          <div class=" cta flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <ul class="flex space-x-4 gap-x-2 cursor-pointer text-2xl -mr-30">
            <li><i class='bx bx-search text-gray-900 dark:text-white' aria-hidden='true'></i></li>
            <li><i class='bx bx-cart text-gray-900 dark:text-white' aria-hidden='true'></i></li>
            <li><i class='bx bx-user text-gray-900 dark:text-white' aria-hidden='true'></i></li>
          </ul>
          </div>
          <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
            <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a href="#" class="block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Home</a>
              </li>
              <li>
                <a href="#" class="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
              </li>
              <li>
                <a href="#" class="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                  <select>
                    <option value="Brands">Brands</option>
                  </select>
                </a>
              </li>
              <li>
                <a href="#" class="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                  <select>
                    <option value="More">More</option>  
                  </select>
                </a>
              </li>
              <li>
                <a href="#" class="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

  );
}

export default Navbar;