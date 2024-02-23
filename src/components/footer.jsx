import "./footer.css";

function Footer(){
    return(
        <footer className="footer bg-body-tertiary">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h5>Jolly's Organics</h5>
                        <p>Discover premium organic products at Jolly's since 2009. We prioritize sustainability and transparency in our carefully curated selection. Enjoy a streamlined shopping experience on our user-friendly website. Choose Jolly's for an authentic organic way of life. Thank you for making us your go-to destination.</p>
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