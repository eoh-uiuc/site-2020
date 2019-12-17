import React from 'react';
import corporatePacket from 'assets/EOH-100-Corporate-Packet.pdf';

import './styles.scss';

class Sponsor extends React.Component {
    render() {
        return(
            <div className="sponsor-container">
                <h1>On-Site Packages</h1>
                <div className="button-row">
                    <form method="POST" action="https://bbisqa.uif.uillinois.edu/PaymentPageTransferGiftnongiftQA.aspx" id="silver-package-form" target="_blank">
                        <input type="hidden" name="FUND1" value="11331546/Engineering Open House Fund"/>
                        <input type="hidden" name="GIFT_AMOUNT1" value="2792.50"/>
                        <input type="hidden" name="FUND2" value="N1556985/Engineering Open House NRG Fund"/>
                        <input type="hidden" name="NONGIFT_AMOUNT2" value="207.50"/>
                    </form>
                    <input class="button" form="silver-package-form" id="submitbtn" type="submit" value="Silver $3,000" />
                    
                    <form method="POST" action="https://bbisqa.uif.uillinois.edu/PaymentPageTransferGiftnongiftQA.aspx" id="gold-package-form" target="_blank">
                        <input type="hidden" name="FUND1" value="11331546/Engineering Open House Fund"/>
                        <input type="hidden" name="GIFT_AMOUNT1" value="4665.00"/>
                        <input type="hidden" name="FUND2" value="N1556985/Engineering Open House NRG Fund"/>
                        <input type="hidden" name="NONGIFT_AMOUNT2" value="335.00"/>
                    </form>
                    <input class="button" form="gold-package-form" id="submitbtn" type="submit" value="Gold $5,000" />

                    <form method="POST" action="https://bbisqa.uif.uillinois.edu/PaymentPageTransferGiftnongiftQA.aspx" id="platinum-package-form" target="_blank">
                        <input type="hidden" name="FUND1" value="11331546/Engineering Open House Fund"/>
                        <input type="hidden" name="GIFT_AMOUNT1" value="8495.00"/>
                        <input type="hidden" name="FUND2" value="N1556985/Engineering Open House NRG Fund"/>
                        <input type="hidden" name="NONGIFT_AMOUNT2" value="505.00"/>
                    </form>
                    <input class="button" form="platinum-package-form" id="submitbtn" type="submit" value="Platinum $9,000" />
                </div>

                <h1>Focus Bundles</h1>
                <div className="button-row">
                    <form method="POST" action="https://bbisqa.uif.uillinois.edu/PaymentPageTransferGiftnongiftQA.aspx" id="compeition-bundle-form" target="_blank">
                        <input type="hidden" name="FUND1" value="11331546/Engineering Open House Fund"/>
                        <input type="hidden" name="GIFT_AMOUNT1" value="2500.00"/>
                    </form>
                    <input class="button" form="competition-bundle-form" id="submitbtn" type="submit" value="Competition $2,500" />


                    <form method="POST" action="https://bbisqa.uif.uillinois.edu/PaymentPageTransferGiftnongiftQA.aspx" id="outreach-bundle-form" target="_blank">
                        <input type="hidden" name="FUND1" value="11331546/Engineering Open House Fund"/>
                        <input type="hidden" name="GIFT_AMOUNT1" value="2500.00"/>
                    </form>
                    <input class="button" form="outreach-bundle-form" id="submitbtn" type="submit" value="Outreach $2,500" />

                    <form method="POST" action="https://bbisqa.uif.uillinois.edu/PaymentPageTransferGiftnongiftQA.aspx" id="spotlight-bundle-form" target="_blank">
                        <input type="hidden" name="FUND1" value="11331546/Engineering Open House Fund"/>
                        <input type="hidden" name="GIFT_AMOUNT1" value="2500.00"/>
                    </form>
                    <input class="button" form="spotlight-bundle-form" id="submitbtn" type="submit" value="Spotlight $2,500" />
                </div>
                
                
                <h1>Itemized Options</h1>
                <h3>Display Vehicle / Oversized</h3>
                <div className="itemized-button-row">
                    <form method="POST" action="https://bbisqa.uif.uillinois.edu/PaymentPageTransferGiftnongiftQA.aspx" id="vehicle-500-form" target="_blank">
                        <input type="hidden" name="FUND1" value="11331546/Engineering Open House Fund"/>
                        <input type="hidden" name="GIFT_AMOUNT1" value="500.00"/>
                    </form>
                    <input class="button" form="vehicle-500-form" id="submitbtn" type="submit" value="Display Vehicle $500" />

                    <form method="POST" action="https://bbisqa.uif.uillinois.edu/PaymentPageTransferGiftnongiftQA.aspx" id="vehicle-1500-form" target="_blank">
                        <input type="hidden" name="FUND1" value="11331546/Engineering Open House Fund"/>
                        <input type="hidden" name="GIFT_AMOUNT1" value="1500.00"/>
                    </form>
                    <input class="button" form="vehicle-1500-form" id="submitbtn" type="submit" value="Display Vehicle $1,500" />
                </div>
                
                <h3>Black & White Ad</h3>
                <div className="itemized-button-row">
                    <form method="POST" action="https://bbisqa.uif.uillinois.edu/PaymentPageTransferGiftnongiftQA.aspx" id="black-white-fourth-form" target="_blank">
                        <input type="hidden" name="FUND1" value="11331546/Engineering Open House Fund"/>
                        <input type="hidden" name="GIFT_AMOUNT1" value="242.50"/>
                        <input type="hidden" name="FUND2" value="N1556985/Engineering Open House NRG Fund"/>
                        <input type="hidden" name="NONGIFT_AMOUNT2" value="7.50"/>
                    </form>
                    <input class="button" form="black-white-fourth-form" id="submitbtn" type="submit" value="1/4 $250" />

                    <form method="POST" action="https://bbisqa.uif.uillinois.edu/PaymentPageTransferGiftnongiftQA.aspx" id="black-white-half-form" target="_blank">
                        <input type="hidden" name="FUND1" value="11331546/Engineering Open House Fund"/>
                        <input type="hidden" name="GIFT_AMOUNT1" value="485.00"/>
                        <input type="hidden" name="FUND2" value="N1556985/Engineering Open House NRG Fund"/>
                        <input type="hidden" name="NONGIFT_AMOUNT2" value="15.00"/>
                    </form>
                    <input class="button" form="black-white-half-form" id="submitbtn" type="submit" value="1/2 $500" />

                    <form method="POST" action="https://bbisqa.uif.uillinois.edu/PaymentPageTransferGiftnongiftQA.aspx" id="black-white-full-form" target="_blank">
                        <input type="hidden" name="FUND1" value="11331546/Engineering Open House Fund"/>
                        <input type="hidden" name="GIFT_AMOUNT1" value="725.00"/>
                        <input type="hidden" name="FUND2" value="N1556985/Engineering Open House NRG Fund"/>
                        <input type="hidden" name="NONGIFT_AMOUNT2" value="25.00"/>
                    </form>
                    <input class="button" form="black-white-full-form" id="submitbtn" type="submit" value="Full $750" />
                </div>

                <h3>Color Ad</h3>
                <div className="itemized-button-row">
                    <form method="POST" action="https://bbisqa.uif.uillinois.edu/PaymentPageTransferGiftnongiftQA.aspx" id="color-half-form" target="_blank">
                        <input type="hidden" name="FUND1" value="11331546/Engineering Open House Fund"/>
                        <input type="hidden" name="GIFT_AMOUNT1" value="960.00"/>
                        <input type="hidden" name="FUND2" value="N1556985/Engineering Open House NRG Fund"/>
                        <input type="hidden" name="NONGIFT_AMOUNT2" value="40.00"/>
                    </form>
                    <input class="button" form="color-half-form" id="submitbtn" type="submit" value="Half $1,000" />

                    <form method="POST" action="https://bbisqa.uif.uillinois.edu/PaymentPageTransferGiftnongiftQA.aspx" id="color-full-form" target="_blank">
                        <input type="hidden" name="FUND1" value="11331546/Engineering Open House Fund"/>
                        <input type="hidden" name="GIFT_AMOUNT1" value="1920.00"/>
                        <input type="hidden" name="FUND2" value="N1556985/Engineering Open House NRG Fund"/>
                        <input type="hidden" name="NONGIFT_AMOUNT2" value="80.00"/>
                    </form>
                    <input class="button" form="color-full-form" id="submitbtn" type="submit" value="Full $2,000" />
                </div>
                
                <h3>Other Itemized Options</h3>
                <div className="itemized-button-row">
                    <form method="POST" action="https://bbisqa.uif.uillinois.edu/PaymentPageTransferGiftnongiftQA.aspx" id="tech-talk-form" target="_blank">
                        <input type="hidden" name="FUND1" value="11331546/Engineering Open House Fund"/>
                        <input type="hidden" name="GIFT_AMOUNT1" value="800.00"/>
                    </form>
                    <input class="button" form="tech-talk-form" id="submitbtn" type="submit" value="Host a Tech Talk or Panel $800" />
                    
                    <form method="POST" action="https://bbisqa.uif.uillinois.edu/PaymentPageTransferGiftnongiftQA.aspx" id="exhibit-sponsor-form" target="_blank">
                        <input type="hidden" name="FUND1" value="11331546/Engineering Open House Fund"/>
                        <input type="hidden" name="GIFT_AMOUNT1" value="500.00"/>
                    </form>
                    <input class="button" form="exhibit-sponsor-form" id="submitbtn" type="submit" value="Sponsor an Exhibit $500" />
                    
                    <form method="POST" action="https://bbisqa.uif.uillinois.edu/PaymentPageTransferGiftnongiftQA.aspx" id="exhibitor-breakfast-form" target="_blank">
                    <input type="hidden" name="FUND1" value="11331546/Engineering Open House Fund"/>
                    <input type="hidden" name="GIFT_AMOUNT1" value="1500.00"/>
                    </form>
                    <input class="button" form="exhibitor-breakfast-form" id="submitbtn" type="submit" value="Sponsor the Exhibitor Breakfast $1,500" />

                    <form method="POST" action="https://bbisqa.uif.uillinois.edu/PaymentPageTransferGiftnongiftQA.aspx" id="exhibitor-resume-book-form" target="_blank">
                        <input type="hidden" name="FUND1" value="11331546/Engineering Open House Fund"/>
                        <input type="hidden" name="GIFT_AMOUNT1" value="500.00"/>
                    </form>
                    <input class="button" form="exhibitor-resume-book-form" id="submitbtn" type="submit" value="Exhibitor Resume Book $500" />
                    
                    <form method="POST" action="https://bbisqa.uif.uillinois.edu/PaymentPageTransferGiftnongiftQA.aspx" id="additional-representative-form" target="_blank">
                        <input type="hidden" name="FUND1" value="11331546/Engineering Open House Fund"/>
                        <input type="hidden" name="GIFT_AMOUNT1" value="460.00"/>
                        <input type="hidden" name="FUND2" value="N1556985/Engineering Open House NRG Fund"/>
                        <input type="hidden" name="NONGIFT_AMOUNT2" value="40.00"/>
                    </form>
                    <input class="button" form="additional-representative-form" id="submitbtn" type="submit" value="Additional Representative $500" />
                </div>
                
                <div className="corp-packet">
                    <p>
                        <a href={corporatePacket} target="_blank">View our corporate packet</a> for more information on sponsoring EOH 100!
                    </p>
                </div>
            </div>
        );
    }
}

export default Sponsor;