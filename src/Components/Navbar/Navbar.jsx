import './Navbar.css'

const Navbar = () => {
  return (
    <div className='nav'>
      <div className="nav-logo">EV-olution</div>
      <ul className="nav-menu">
        <li><a href="#">Home</a></li>
        <li><a href="#">Explore</a></li>
        <li><a href="#">About</a></li>
        
        </ul>
        <ul>
          <li className='nav-contact'> Contact</li>
        </ul>
      
    </div>
  )
}

export default Navbar
