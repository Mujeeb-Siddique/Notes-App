/* eslint-disable react/prop-types */


const Header = ({handleToggleDarkMode}) => {
  return (
    <div className="header">
      <h1>Notes</h1>
      <button className="save" onClick={()=> handleToggleDarkMode((prevDarkMode)=> !prevDarkMode)}>Toggle Mode</button>
    </div>
  )
}

export default Header
