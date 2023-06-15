import React from 'react'
import "./Information.css"
export default function Information() {
    return (
        <>
            <main className="align Info_main">
                <div className="Info_main_div">
                    <h1 className="Info_heading align">
                        Features
                    </h1>
                    <div className="services">
                        <h2 className="align">Services</h2>
                        <ul className = "feature_ul">
                            <li className="service_list"> ✅ No-contact delivery</li>
                            <li className="service_list"> ✅ In-store pick-up</li>
                            <li className="service_list"> ✅ Takeaway</li>
                            <li className="service_list"> ✅ Delivery</li>
                            <li className="service_list"> ✅ In-store shopping</li>
                            <li className="service_list"> ✅ Same-day delivery</li>
                        </ul>
                    </div>

                    <div className="accessibility">
                        <h2 className="align">Accessibility</h2>
                        <ul className = "feature_ul">
                            <li className="accessibility_list">✅ Wheelchair-accessible car park</li>
                            <li className="accessibility_list">✅ Wheelchair-accessible seating</li>
                            <li className="accessibility_list">✅ Wheelchair-accessible toilet</li>
                            <li className="accessibility_list">✅ Wheelchair-accessible entrance</li>
                        </ul>
                    </div>
                    
                    <div className="payment">
                        <h2 className="align">Payment</h2>
                        <ul className = "feature_ul">
                            <li className="payment_list">✅ Cash only</li>
                            <li className="payment_list">✅ Mobile Wallets</li>
                            <li className="payment_list">✅ Google Pay</li>
                        </ul>
                    </div>

                    <div className="amenities">
                        <h2 className="align">Amenities & Crowd</h2>
                        <ul className = "feature_ul">
                            <li className="amenities_list">✅ Toilets</li>
                            <li className="amenities_list">✅ Wi-Fi</li>
                            <li className="amenities_list">✅ LGBTQ+ friendly</li>
                        </ul>
                    </div>

                </div>
            </main>
        </>
    )
}
