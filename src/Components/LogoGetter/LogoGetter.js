import React, { Component } from 'react';
import axios from 'axios';

class LogoGetter extends Component {
    state = { 
        sourceLogo: []
     }

    componentDidMount(){
        const logoDomain = this.props.domain

        axios.get("https://logo.clearbit.com/" + logoDomain, { 
            responseType: 'arraybuffer'}).then(res => {
                let logoSource = new Buffer.from(res.data, 'binary').toString('base64')
                logoSource = 'data:image/jpeg;base64,' + logoSource

                this.setState({
                    sourceLogo: logoSource
                })
            })
    }

    updateLogo = () =>{
        const logoDomain = this.props.domain
        
        axios.get("https://logo.clearbit.com/" + logoDomain, { 
            responseType: 'arraybuffer'}).then(res => {
                let logoSource = new Buffer.from(res.data, 'binary').toString('base64')
                logoSource = 'data:image/jpeg;base64,' + logoSource

                this.setState({
                    sourceLogo: logoSource
                })
            })
    }

    componentDidUpdate(prevProps){
        if(this.props.article !== prevProps.article){
            this.updateLogo()
        }
    }
    
    render() { 
        return (
            <img className="logo" onClick={() => 
                this.props.onIconClicked(this.props.domain)}
                src={this.state.sourceLogo}/>
        );
    }
}
 
export default LogoGetter;