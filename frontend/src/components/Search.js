
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
}