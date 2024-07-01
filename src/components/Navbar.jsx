import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

// const Navbar = () => {
//   return (
//     <nav className='text-white text-2xl bg-slate-700 flex justify-around items-center py-4'>
//         <h2 className=' font-semibold'>
//             <span className='text-green-600'>&lt;</span>
//             GuptKunji
//             <span className='text-green-600'>/&gt;</span>
//         </h2>
//         <ul >
//             <li className='flex justify-center items-center gap-1'>
//             <lord-icon
//     src="https://cdn.lordicon.com/jzvoyjzb.json"
//     trigger="hover"
//     stroke="bold"
//     colors="primary:#121331,secondary:#ebe6ef,tertiary:#16c79e">
// </lord-icon>
//                 <a className=' hover:font-bold hover:text-green-500' href="https://ptharshit.netlify.app/" target='__blank'>PortFolio</a>
//             </li>
//         </ul>
//     </nav>
//   )
// }
const Navbar = () => {
  const { logout } = useAuth0();
  const { user, isAuthenticated, isLoading } = useAuth0();
  return (
    <nav className="text-white text-2xl bg-slate-700 flex flex-col md:flex-row justify-between items-center py-4 px-6">
      <h2 className="font-semibold mb-4 md:mb-0">
        <span className="text-green-600">&lt;</span>
        GuptKunji
        <span className="text-green-600">/&gt;</span>
      </h2>
      {isAuthenticated && <h2 className="font-semibold mb-4 md:mb-0 ">
        Welcome {user.name}
      </h2>}
      
      
      <ul className="flex justify-center md:justify-end">
        <li className="flex justify-center items-center gap-1">
          <lord-icon
            src="https://cdn.lordicon.com/jzvoyjzb.json"
            trigger="hover"
            stroke="bold"
            colors="primary:#121331,secondary:#ebe6ef,tertiary:#16c79e"
          ></lord-icon>
          <a
            className="hover:font-bold hover:text-green-500 mr-8"
            href="https://ptharshit.netlify.app/"
            target="__blank"
          >
            PortFolio
          </a>
          <button
            onClick={() =>
              logout({ logoutParams: { returnTo: window.location.origin } })
            }
            className=" hover:text-red-500"
          >
            LogOut
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
