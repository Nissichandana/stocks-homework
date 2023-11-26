import { Link } from 'react-router-dom'

function Nav() {
  return (
    <div className='nav'>
      <Link to='/'>
          iStocks
      </Link>
      <Link to='/about'>
          About
      </Link>
      <Link to= '/stocks'>
        Stock List
      </Link>
    </div>
  )
}

export default Nav