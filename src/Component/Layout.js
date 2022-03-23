import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          {/* <li>
            <Link to="/">Header</Link>
          </li>
          <li>
            <Link to="/self">SelfLearning</Link>
          </li> */}
          {/* <li>
            <Link to="/getwork">Getwork</Link>
          </li> */}
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;