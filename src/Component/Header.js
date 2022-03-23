import React from 'react'
import Banner from './Banner'

export default function Header() {
  return (
    <div>
        <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark p-3">
        {/* <nav class="navbar fixed-top navbar-light bg-light"> */}
        {/* .navbar-expand{-sm|-md|-lg|-xl|-xxl} */}
  <div class="container-fluid">
    <a class="navbar-brand mr-5" href="#">Course List</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse mr-4" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active ml-4" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
        <a class="nav-link active ml-4" aria-current="page" href="/self">Self Learing</a>
        </li>
        <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="#">News</a>
        </li>
        <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="#">Contacts</a>
        </li>
        <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="#">Register</a>
        </li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button class="btn btn-outline-success" type="submit">Login</button>
      </form>
    </div>
  </div>
</nav>
{/* <Banner /> */}
  
    {/* <div>
<Banner />
    </div> */}
    </div>
  
  )
}
