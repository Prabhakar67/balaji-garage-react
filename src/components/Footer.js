import React from "react"
import strings from "../strings/strings.en-us.json";


const Footer = () => {
    return (
        <>
            <footer className="footer-distributed">

                <div className="footer-links">
                    <a href="/">{strings['home.page.heading']}</a>

                    <a href="/About">{strings['about.page.heading']}</a>

                    <a href="/Services">{strings['services.page.heading']}</a>

                    <a href="/About">{strings['footer.heading.faq']}</a>

                    <a href="/Contact">{strings['contact.services.heading']}</a>

                    <span className="copyright">{strings['footer.heading.logocopyright']}</span>
                </div>


            </footer>
        </>

    )
}

export default Footer