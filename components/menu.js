import React from 'react';
import Head from 'next/head';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserNinja } from '@fortawesome/free-solid-svg-icons'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link';
// const MyButton = React.forwardRef(({ onClick, href }, ref) => (
//     <a href={href} onClick={onClick} ref={ref}>
//       Click Me
//     </a>
//   ))


export default class Menu extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <div>
                <Navbar color="light" light expand="md">
                <Link href='/index'>
                    <NavbarBrand>                       
                            Onghutsach.com                       
                    </NavbarBrand>
                    </Link>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                            <Link href='/index'>
                                <NavLink >                                   
                                        Trang chủ                                  
                                </NavLink>
                                </Link>
                            </NavItem>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    Sản Phẩm
                                </DropdownToggle>
                                <DropdownMenu right>
                                <Link href='/danhsach'>
                                    <DropdownItem>
                                        
                                        Ống hút cỏ
                                        
                                    </DropdownItem>
                                    </Link>
                                    <DropdownItem>
                                        Ống hút gạo
                  </DropdownItem>
                                    <DropdownItem>
                                        Ống hút tre
                  </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                            <NavItem>
                                <NavLink>Về chúng tôi</NavLink>
                            </NavItem>
                            <NavItem>
                                <FontAwesomeIcon icon={faUserNinja} />
                            </NavItem>
                            <Link href='/giohang'>
                            <NavItem >
                            <FontAwesomeIcon icon={faShoppingCart} />
                            </NavItem>
                            </Link>

                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}