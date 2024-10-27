
import { useState } from 'react';
import './App.css'
import Link from './Link/link';
import { CiMenuBurger } from "react-icons/ci";
import { ImCross } from "react-icons/im";

function App() {

  let [navicon,setNavIcon]=useState(false)

  let handleIcon=()=>{

    setNavIcon(!navicon)

  }

  const routes = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/about", name: "About" },
    { id: 3, path: "/services", name: "Services" },
    { id: 4, path: "/contact", name: "Contact" },
    { id: 5, path: "/profile", name: "Profile" }
  ];
  
 
  


  return (
    <>

    {/* <ul>
    {
      routes.map(route=><li key={route.id}><a href={route.path}>{route.name}</a></li>)
    }
    </ul> */}

    
    {/* {
      navicon ?  <ImCross onClick={()=>handleIcon()} className='text-2xl md:hidden'></ImCross>  : <CiMenuBurger onClick={()=>handleIcon()} className='text-2xl md:hidden '></CiMenuBurger>
    } */}

  <div onClick={()=>handleIcon()} className=' bg-yellow-400 text-2xl md:hidden py-5'>
    {
      navicon ? <ImCross></ImCross>: <CiMenuBurger></CiMenuBurger>
    }
  </div>

    <ul className={`p-8 absolute duration-1000 md:static md:flex rounded bg-yellow-400 ${navicon ? "top-16" : "-top-60" }`}>
    {
      routes.map(route=><Link key={route.id} route={route}></Link>)
    }
    </ul>


     
      <h1 className='text-5xl text-center'>Hello React</h1>

     
      
       
    </>
  )
}

export default App
