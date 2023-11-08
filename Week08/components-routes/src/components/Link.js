import {useContext} from 'react'
// import cx from 'classNames'
import NavigationContext from '../context/navigation'

export default function Link({to, children}) {
  const {navigate} = useContext(NavigationContext)

  const handleClick = (event) => {
    event.preventDefault()
    navigate(to)
  }

  const classes = cx(
    'text-blue-500', 
    className,
    currentPath === to && activeClassName
  )

  return (
    <a href={to} onClick={handleClick} className={classes}>
      {children}
    </a>
  )
}
