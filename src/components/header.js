import React, { useEffect, useContext } from 'react';
import $ from 'jquery';

import { ModelContext } from './context';

function Header() {

    const context = useContext(ModelContext);

    const getData = page => {
        console.log('here', context);
        if (context.lang === 'Arabic') {
            $('.translation').addClass('arabic');
        } else {
            $('.translation').removeClass('arabic');
        }
        $.ajax({
            type: 'get',
            url: `./data/${page}.json`,
            data: 'data',
            dataType: 'json',
            success: function (res) {
                context.changeHeaderData(res.header);
                context.changeMainData(res.main);
                context.changeFooterData(res.footer);
                context.changeLang(res.language);
            },
        });

    };

    useEffect(() => {

    }, [])





    return (
        <header>
            <img class="logo" src={context.headerData.logo} alt="" />
            <a href='#' class="icon" onclick="myFunction()">
                <div></div>
                <div></div>
                <div></div>
            </a>
            <nav id="main_nav" class="main_nav">
                <ul>
                    {context.headerData.nav.map(item => (
                        <>
                            <li><a href={'#'.concat(item.replace(/\s/g, '').toLowerCase())}>{item}</a></li>
                        </>
                    ))}
                </ul>
                <div></div>
            </nav>
            <nav id="main_nav" class="menu_nav">
                <ul>
                    {context.headerData.nav.map(item => (
                        <>
                            <li><a href={'#'.concat(item.replace(/\s/g, '').toLowerCase())}>{item}</a></li>
                        </>
                    ))}
                </ul>
                <div></div>
            </nav>
        </header>
    )
}

export default Header;