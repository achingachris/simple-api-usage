import Link from 'next/link'

const Sidemenu = () => {
  return (
    <div className='vertical-menu'>
      <div data-simplebar='' className='h-100'>
        {/*- Sidemenu */}
        <div id='sidebar-menu'>
          {/* Left Menu Start */}
          <ul className='metismenu list-unstyled' id='side-menu'>
            <li className='menu-title'>Main</li>
            <li>
              <Link href='/admin' legacyBehavior>
                <a className=' waves-effect'>
                  <span>Dashboard</span>
                </a>
              </Link>
            </li>
            <li>
              <Link href='/admin/cargo' legacyBehavior>
                <a className=' waves-effect'>
                  <span>Cargo</span>
                </a>
              </Link>
            </li>
          </ul>
        </div>
        {/* Sidebar */}
      </div>
    </div>
  )
}

export default Sidemenu