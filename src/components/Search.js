

export default function Search() {
    return (
      <>
        <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
          <input type="search" 
                class="form-control form-control-dark" 
                placeholder="Search..." 
                aria-label="Search"/>
        </form>
        <div class="text-end">
          <button type="button" class="btn btn-outline-light me-2">Search</button>
        </div>
      </>
    );
}