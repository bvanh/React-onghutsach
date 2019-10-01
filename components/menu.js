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
                    <NavbarBrand href="/">Onghutsach.com</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink>Trang chủ</NavLink>
                            </NavItem>
                            <UncontrolledDropdown nav inNavbar>

                                <DropdownToggle nav caret>
                                    Sản Phẩm
                                </DropdownToggle>

                                <DropdownMenu right>
                                    <Link href='/danhsach' as='/danhsach'>
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
                            <Link href='/giohang'as='/danhsach'>
                                <NavItem>
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