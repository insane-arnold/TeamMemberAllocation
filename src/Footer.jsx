const Footer = () => {

  let today = new Date();
  
  return (
    <footer className="container text-white bg-dark">
      <div className="row justify-content-center mt-3 mb-4">
        <div className="col-8">
          <h1>TeamMemberAllocation App-{today.getFullYear()}</h1>
        </div>
      </div>
    </footer>
  )

}

export default Footer;