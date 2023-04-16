import React from "react";

const Navbar = () => {
    return(
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-home">
  		<a className="navbar-brand" href="#">PIZZAMANIA</a>
  		<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    	<span className="navbar-toggler-icon"></span>
  		</button>

  		<div className="collapse navbar-collapse" id="navbarSupportedContent">
    		<ul className="navbar-nav ml-auto">
      			
      			<li className="nav-item">
        			<a className="nav-link home-link" href="#">Home</a>
     			</li>
     			<li className="nav-item">
        			<a className="nav-link about-link" href="#">About Pizza</a>
     			</li>
     			<li className="nav-item">
        			<a className="nav-link" href="#">Pizza Types</a>
     			</li>
      			
    		</ul>
    		
  		</div>
	</nav>
    </>

    )
}

export default Navbar