import {navLinks} from '../constants/index'

const Navbar = () => {
  return (
    <div><ul>{navLinks.map((Link) => (<li key={Link.id}><a href={`#${Link.id}`} >{Link.title}</a> </li>))}</ul></div>
  )

}

export default Navbar