import React, { Component } from 'react';
import LogoGetter from '../LogoGetter/LogoGetter';
import "./SideNav.css"

class SideNav extends Component {
    state = {
        isLoaded: false
    }

    componentDidMount(){
        this.setState({
            isLoaded : true
        })
    }

    componentWillUnmount(){
        this.setState = (state,callback)=>{
            return;
        };
    }

    render() { 
        return (
            <div className="sidenav">
                {this.props.articleDomains.map(domain => 
                    <div className="sidenav-icons" key={this.props.getKeys(domain)}>
                        <LogoGetter domain={domain}
                            onIconClicked={this.props.onIconClicked}/>
                    </div>
                )}
            </div>
        );
    }
}
 
export default SideNav;