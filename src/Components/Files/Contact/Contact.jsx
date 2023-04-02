import "./Contact.css"
export default function Contact() {
    return (
        <>
            <main className="align Contact_Section" >
                <h1>
                    Contact Us
                </h1>
                <aside className="align2">
                    <a href="https://wa.me/<919650988301>" target='_blank' rel="noreferrer">
                        <i class=" social-media fa-brands fa-whatsapp  "></i>
                    </a>
                    <a href="tel:9650988301">
                        <i class=" social-media fa-solid fa-phone" />
                    </a>
                    <a href="mailto: hashtagbakerynoida@gmail.com">
                        <i class=" social-media fa-solid fa-envelope newletter"></i>
                    </a>
                    <i class=" social-media fa-brands fa-instagram"></i>
                </aside>
                <div>
                    We appreciate you taking the time to visit our website.
                    Our goal is to provide the best possible products
                    to our customers, and we value your feedback. If you have
                    any questions, comments, or concerns, please don't hesitate to
                    reach out to us.
                </div>
                <section className="align">
                    <div className="secondDivs">Shiv Shakti Apartment Gate 2, Sector -71, Noida, Uttar Pradesh, 201301</div>
                    <div className="secondDivs">hashtagbakerynoida@gmail.com</div>
                    <div className="secondDivs">9650988301</div>
                </section>
            </main>
            <div className="align">Designed and Developed by</div>
            <div className="align"><a href="http://ankitsinghchauhan.tech" target="_blank" rel="noopener noreferrer">Ankit Singh Chauhan</a></div>
            <br />
        </>
    )
}