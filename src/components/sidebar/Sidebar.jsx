import './Sidebar.scss'

const Sidebar = ({isOpen, toggleSidebar, purpose}) => {
  const clickBackground = (e) => {
    console.log('clickBackground');
    if(e.target !== e.currentTarget) return;
    toggleSidebar()
  };
  return (
    // <div>Sidebar</div>
    <div className={`background ${isOpen ? 'visible' : ''}`} onClick={clickBackground}>
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
          
      </div>
    </div>
  )
}

export default Sidebar
