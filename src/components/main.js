import React, { useEffect, useContext } from 'react';
import $ from 'jquery';

import { ModelContext } from './context';

function Main() {

    const context = useContext(ModelContext);

    useEffect(() => {
        var i = 0;
        carousel();

        function carousel() {
            let slide = document.getElementsByClassName('s1');
            slide[0].style.marginLeft = -i * 20 + '%';
            i++;
            if (i === 4) {
                i = 0;
            }
            setTimeout(carousel, 5000);
        }

        $('.bar').on('click', function (e) {
            i = e.target.id - 1;
            let slide = document.getElementsByClassName('s1');
            slide[0].style.marginLeft = -i * 20 + '%';
        });

    }, [])
    return (
        <>
            <section id="home" className="slideShow">
                <div className="slidershow middle">

                    <div className="slides">
                        <input type="radio" name="r" id="r1" checked />
                        <input type="radio" name="r" id="r2" />
                        <input type="radio" name="r" id="r3" />
                        <input type="radio" name="r" id="r4" />
                        <input type="radio" name="r" id="r5" />

                        <div className='slide s1'>
                            <img src="../assets/ltcu-pic-slider-01.png" alt="" />
                            <a className="button" href={context.mainData.applyNow.link}>{context.mainData.applyNow.text}</a>
                        </div>
                        <div className='slide'>
                            <img src="../assets/ltcu-pic-slider-02.png" alt="" />
                            <a className="button" href={context.mainData.applyNow.link}>{context.mainData.applyNow.text}</a>
                        </div>
                        <div className='slide'>
                            <img src="../assets/ltcu-pic-slider-03.png" alt="" />
                            <a className="button" href={context.mainData.applyNow.link}>{context.mainData.applyNow.text}</a>
                        </div>
                        <div className='slide'>
                            <img src="../assets/ltcu-pic-slider-04.png" alt="" />
                            <a className="button" href={context.mainData.applyNow.link}>{context.mainData.applyNow.text}</a>
                        </div>
                        <div className='slide'>
                            <img src="../assets/ltcu-pic-slider-05.png" alt="" />
                            <a className="button" href={context.mainData.applyNow.link}>{context.mainData.applyNow.text}</a>
                        </div>
                    </div>

                    <div className="navigation">
                        <label htmlFor="r1" className="bar" id="1"></label>
                        <label htmlFor="r2" className="bar" id="2"></label>
                        <label htmlFor="r3" className="bar" id="3"></label>
                        <label htmlFor="r4" className="bar" id="4"></label>
                        <label htmlFor="r5" className="bar" id="5"></label>
                    </div>
                </div>
            </section>
            <section id="aboutus" className="second-section">
                <img className="about-pic" src={context.mainData.about.pic} alt="" />
                <div>
                    <img src={context.mainData.about.title} width="100px" alt="" />
                    <p>{context.mainData.about.text}</p>
                    <a href={context.mainData.applyNow.link}>{context.mainData.applyNow.text}</a>
                </div>
            </section>
            <section id="programs" className="third-section">
                <div className="part-one">
                    <img src={context.mainData.programs.logo} alt="" />
                    <p>{context.mainData.programs.text}</p>
                    <button className="by-school-button">BY SCHOOL</button>
                    <button className="by-degree-button">BY DEGREE</button>
                </div>

                <div className="right-part">
                    <div className="by-school">
                        {context.mainData.programs.bySchool.map(program => (
                            <a className='pdf-card' target='_blank' href={program.link} download={program.link.replace('../assets/pdf/', '')}>
                                <div>
                                    <h4>{program.title}</h4>
                                    <hr />
                                </div>
                            </a>
                        ))}
                    </div>

                    <div className="by-degree">
                        {context.mainData.programs.byDegree.map(program => (
                            <a className='pdf-card' target='_blank' href={program.link} download={program.link.replace('../assets/pdf/', '')}>
                                <div>
                                    <h4>{program.title}</h4>
                                    <hr />
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Main;