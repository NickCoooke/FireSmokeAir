
import Button from "react-bootstrap/Button"
//import Form from "react-bootstrap/Form"

export default function Search() {
  return (
    <form action='/' method='get'>
      <label htmlFor="header-search">
        <span className="visually-hidden">Location Search</span>
      </label>
      <input 
        type="text"
        id="location-search"
        name="s"
      />
      <Button variant="secondary" as="input" type="submit" value="Submit">

      </Button>
    </form>
  );
//
//    <div className="inline-block">
//    <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
//      <input type="search" 
//            className="form-control form-control-dark" 
//            placeholder="Search..." 
//            aria-label="Search"/>
//    </form>
//    <div className="text-end">
//      <button type="button" className="btn btn-outline-light me-2">Search</button>
//    </div>
//    </div>
//  );
}


/* Sources
  Search Bar tutorial:  https://www.emgoto.com/react-search-bar/
*/