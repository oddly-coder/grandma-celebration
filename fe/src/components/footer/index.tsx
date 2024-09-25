import { fLogo, pLogo1, pLogo2, pLogo3, pLogo4, pLogo5, pLogo6 } from "../../assets";

export function Footer() {
    return (
        <footer className="footer-section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 flex flex-row">
                        <div className="footer-text">
                            <div className="copyright-text"><p>
                                Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | Designed and Developed by Ugege Daniel
                            </p></div>
                            <div className="ft-social">
                                <a href="#"><i className="fa fa-twitter"></i></a>
                                <a href="#"><i className="fa fa-linkedin"></i></a>
                                <a href="#"><i className="fa fa-github"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}