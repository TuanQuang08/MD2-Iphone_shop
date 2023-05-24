import React from 'react';

export class Header extends React.Component{

    render(){

        const title = [
            {
                title: "My Account"
            },
            {
                title: "Wishlist"
            },
            {
                title: "My Cart"
            },
            {
                title: "Checkout"
            },
            {
                title: "Login"
            },
        ];
        const headerContent = [
            {
                content: "HOME"
            },
            {
                content: "SHOP PAGE"
            },
            {
                content: "SINGLEPRODUCT"
            },
            {
                content: "CART"
            },
            {
                content: "CHECKOUT"
            },
            {
                content: "CATERORY"
            },
            {
                content: "ORTHER"
            },
            {
                content: "CONTACT"
            },
            
        ];

        return(
            <header className='mt-4'>
                <div  className='container header-top'>
                <ul>
                    {title.map((title, index)=> <li key={index}>{title.title}</li>)}
                </ul>
                <ul>
                    <li>
                        <select name="" id="">
                            <option value="">Currency: USD</option>
                            <option value="">Currency: VND</option>
                        </select>
                    </li>
                    <li>
                        <select name="" id="">
                            <option value="">language: English</option>
                            <option value="">language: Vietnamese</option>
                        </select>
                    </li>
                </ul>
                </div>
                <div className="header-bottom">
                    <div className="container header-bottom-item">
                        <ul>
                            {headerContent.map((headerContent,index)=> <li key={index}>{headerContent.content}</li>)}
                        </ul>
                    </div>
                </div>
            </header>
        );
    }
}