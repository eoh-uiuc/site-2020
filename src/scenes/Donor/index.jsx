import React, {Component} from 'react';

import './styles.scss';

class Donor extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
          donorInput: "0.00",
        };

        this.handleDonorInput = this.handleDonorInput.bind(this);
    }

    async handleDonorInput(e) {
        var amount = parseFloat(e.target.value).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
        await this.setState({
            donorInput: amount,
        });
        // console.log(this.state.donorInput);
    }

    render() {
        return(
            <div className="donor-container">
                <h1>Alumni Donations</h1>

                <div className="donor-description">
                    <p>
                        Thank you for choosing to support EOH! Our mission at EOH is to showcase the achievements of 
                        Engineering at Illinois and inspire an engineering passion in the community. Your donation will 
                        help us achieve that by supporting student exhibits, external advertising, various special events, and more.    
                    </p>
                    <br />
                    <p>
                        When you make your donation selection, you will be transferred to the University of Illinois Foundation’s 
                        secure giving form to complete your donation and enter your personal and payment information.    
                    </p>
                </div>

                <div className="input-container">
                    <input type="number" id="donor-input" placeholder="$0.00" onInput={this.handleDonorInput}/>
                    <form method="POST" action="https://bbisqa.uif.uillinois.edu/PaymentPageTransferQA.aspx" id="donor-form">
                        <input type="hidden" name="TRACKING_CODE" value="10434"/>
                        <input type="hidden" name="FUND1" value="11331546/Engineering Open House Fund"/>
                        <input type="hidden" name="GIFT_AMOUNT1" value={this.state.donorInput} />
                    </form>
                    <input class="button" form="donor-form" id="submitbtn" type="submit" value="Donate" />
                </div>
                
            </div>
        );
    }
}

export default Donor;