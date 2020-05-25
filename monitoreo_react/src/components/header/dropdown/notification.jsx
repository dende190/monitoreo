import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

class DropdownNotification extends React.Component {
	constructor(props) {
		super(props);

		this.toggle = this.toggle.bind(this);
		this.state = {
			dropdownOpen: false
		};
	}

	toggle() {
		this.setState(prevState => ({
			dropdownOpen: !prevState.dropdownOpen
		}));
	}
  
	render() {
		return (
			<Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle} className="dropdown" tag="li">
				<DropdownToggle className="f-s-14" tag="a">
					<i className="fa fa-bell"></i>
					<span className="label">3</span>
				</DropdownToggle>
				<DropdownMenu className="media-list dropdown-menu-right" tag="ul">
					<DropdownItem className="dropdown-header" tag="li" header>NOTIFICATIONS (3)</DropdownItem>
					<DropdownItem className="media">
						<div className="media-left">
							<i className="fa fa-bug media-object bg-silver-darker"></i>
						</div>
						<div className="media-body">
							<h6 className="media-heading">Error en servidor <i className="fa fa-exclamation-circle text-danger"></i></h6>
							<p>Servicio <strong>FTP</strong> de <strong>SRVWeb02</strong> en estado <strong>Critico</strong></p>
						</div>
					</DropdownItem>
					<DropdownItem className="media">
						<div className="media-left">
							<i className="fa fa-bug media-object bg-silver-darker"></i>
						</div>
						<div className="media-body">
							<h6 className="media-heading">Error en servidor <i className="fa fa-exclamation-circle text-danger"></i></h6>
							<p>Servicio <strong>HTTP</strong> de <strong>SRVWeb02</strong> en estado <strong>Critico</strong></p>
						</div>
					</DropdownItem>
					<DropdownItem className="media">
						<div className="media-left">
							<i className="fa fa-bug media-object bg-silver-darker"></i>
						</div>
						<div className="media-body">
							<h6 className="media-heading">Error en servidor <i className="fa fa-exclamation-circle text-danger"></i></h6>
							<p>Servicio <strong>HTTP</strong> de <strong>SRVWeb03</strong> en estado <strong>Critico</strong></p>
						</div>
					</DropdownItem>
					<DropdownItem className="dropdown-footer text-center">
						View more
					</DropdownItem>
				</DropdownMenu>
			</Dropdown>
		);
	}
};

export default DropdownNotification;
