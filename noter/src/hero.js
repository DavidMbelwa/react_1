const Hero = () => {
    return ( 
        <div className="container-fluid h-75 d-flex justify-content-between align-items-start px-3 border border-1 py-5">
            <div className="container border border-2 d-flex flex-column align-items-start justify-content-center h-75" style={{maxWidth: "500px"}}>
                <h1 className="mb-5 text-light" style={{fontSize: "64px"}}>Marketing Message</h1>
                <h3 className="mb-5 text-light">Service Description</h3>
                <a className="btn btn-large bg-secondary rounded-pill" href="">Call to Action</a>
            </div>

            <div className="container d-flex flex-column align-items-start border border-2 h-50 py-3 mt-4" style={{maxWidth: "500px"}}>
                <div>Sign Up</div>
                <div className="container d-flex justify-content-between ">
                    <a className="btn btn-large border border-1" href="">Instagram</a>
                    <a className="btn btn-large border border-1" href="">Google</a>
                    <a className="btn btn-large border border-1" href="">LinkedIn</a>
                </div>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input className="form-control" placeholder="name@example.com"></input>
                </div>
                
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input className="form-control"></input>
                </div>
            </div>
        </div>
     );
}
 
export default Hero;