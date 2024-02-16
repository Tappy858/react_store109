import "./footer.css";

function Footer(){
    return(
                <footer className="footer bg-body-tertiary">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <h5>Links</h5>
                                <p>links go here</p>
                            </div>
                            <div className="col-md-6">
                                <h5>Contact Us</h5>
                                <address>
                                    Email: <a href="mailto:info@example.com">info@example.com</a><br />
                                    Phone: (123) 456-7890
                                </address>
                            </div>
                        </div>
                    </div>
                </footer>
            );
        }

export default Footer;