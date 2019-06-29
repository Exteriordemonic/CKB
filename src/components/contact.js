import React, { Component } from "react"

export default class Content extends Component {
  render() {
    return (
        <section className="contact">
            <h2 className="headline">Kontakt</h2>
            <br />
            <p className="title">
                <div class="contact__icon">
                    <img src={this.props.phone} alt="zadzwoń"/>
                    <a href="tel:+48508378847">+48 508 378 847</a> 
                </div>
                <div class="contact__icon">
                    <img src={this.props.mail} alt="zadzwoń"/>
                    <a href="mailto:mragowskiect@gmail.com">mragowskiect@gmail.com</a>  
                </div> 
                <div class="contact__icon">
                    <img src={this.props.mail} alt="zadzwoń"/>
                    <a href="mailto:msrmragowo@wp.pl">msrmragowo@wp.pl</a>  
                </div> 
            </p>
            <a href="https://www.facebook.com/MCTreningowe/">
                <img src={this.props.facebook} alt="facebook"/>
            </a>
        </section>
    )
  }
}