import Banner from './banner'
import { useState } from 'react'
import { Link } from 'react-router-dom'
const About = () => {
    let title = "About Us"
    const [list, setList] = useState([
        {
            value: "60+",
            about: "Years of Experience"
        },
        {
            value: 200,
            about: "Foods"
        },
        {
            value: 300,
            about: "Lifestyle"
        },
        {
            value: "400k",
            about: "Happy Customers"
        }
    ])
    return (
        <div className="about">
            <Banner data={title} />
            <div className="aboutFoodie my-5 d-flex justify-content-center">
                <div className="aboutImage">
                    <img className="rounded-2 m-5" src="https://images.unsplash.com/photo-1585937421612-70a008356fbe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW5kaWFuJTIwZm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                </div>

                <div className="aboutInfo w-50 p-5">
                    <h2 className=" fs-1 text-warning">About Babai Hotel</h2>
                    <hr width="150px" />

                    <div className=" text-center m-3">
                        <Link to="/home"><img src="/images/Babai hotel LOGO.png"
                            width="150px"
                            className='logo'
                            style={{ borderRadius: "50%" }} /></Link>
                        <div style={{ textAlign: "justify" }}>
                            <p className='text-justify text-secondary' >Welcome to Babai Hotel, where we're all about good food, good friends, and good times! We're a unique hotel with a sense of humor, inspired by the classic Telugu film Babai Hotel. Our goal is to provide a warm and welcoming atmosphere where you can relax, unwind, and enjoy the company of others.</p>
                            <h3 className='text-warning'>Our Story</h3>
                            <hr width="150px" />
                            <p className='text-justify text-secondary'>Babai Hotel has a long and storied history. It all started back in the 1960s, when our founder, Mr. Babai, decided to open a small hotel in his hometown. He wanted to create a place where people could come together, share a meal, and enjoy each other's company.

                                Over the years, Babai Hotel grew and evolved, becoming a beloved institution in the community. Our quirky decor, personalized service, and local cuisine made us stand out from the crowd, and we quickly became known for our sense of humor and playful spirit.

                                Today, Babai Hotel is run by Mr. Babai's grandson, who is dedicated to carrying on the family legacy. We continue to welcome guests from all over the world, and we're always looking for ways to make your stay more enjoyable.</p>
                            <h3 className='text-warning'>Our Unique Selling Points</h3>
                            <hr width="150px" />
                            <p className='text-justify text-secondary'>At Babai Hotel, we pride ourselves on our unique selling points. Here are just a few things that make us stand out from the crowd:</p>
                            <ul>
                                <li className='text-secondary'>Quirky decor: Our hotel is filled with unique and interesting decor, from vintage posters to unusual knick-knacks. You'll never be bored when you're staying with us!</li>
                                <li className='text-secondary'>Personalized service: We believe that every guest is unique, which is why we go above and beyond to personalize your experience. From special requests to local recommendations, we're here to help.</li>
                                <li className='text-secondary'>Local cuisine: We're passionate about showcasing the best of Telugu cuisine. Our chefs use fresh, local ingredients to create delicious and authentic dishes that will tantalize your taste buds.</li>
                            </ul>
                            <h3 className='text-warning'>Meet the team</h3>
                            <hr width="150px" />
                            <p className='text-secondary'>Babai Hotel wouldn't be what it is today without our amazing team. From our friendly front desk staff to our talented chefs, every member of the Babai Hotel team is committed to making your stay unforgettable.</p>

                            <h3 className='text-warning'>Contact Us</h3>
                            <hr width="150px" />
                            <p className='text-secondary'>If you have any questions or want to make a reservation, please don't hesitate to get in touch. You can reach us by phone, email, or through our online booking system.

                                We look forward to welcoming you to Babai Hotel, where good times are always on the menu!</p>
                        </div>
                    </div>

                    <h3 className='text-warning '>Stats</h3>
                    <hr width="70px" />
                    <div className="lists d-flex flex-wrap justify-content-evenly m-5">
                        {list.map(item => (
                            <div className="list bg-light p-5 border text-center rounded" key={item.value} style={{ width: "50%" }}>
                                <h1 className="fw-bolder">{item.value}</h1>
                                <p className="text-secondary">{item.about}</p>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </div>
    );
}

export default About;