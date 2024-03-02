const heroSignIn = () => {
    return ( 
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
     );
}
 
export default heroSignIn;