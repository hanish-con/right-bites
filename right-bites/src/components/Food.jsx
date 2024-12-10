import React from "react";

export default function Food() {
    return (
        <>
            <section className="section-area" id="sectionId">
                <div className="section-container">
                    <h1 className="maintitle">Eat Right Food</h1>
                    <p>Eat healthy food, it is good for your health</p>
                    <a href="#food-menu" className="btn btn-primary">Topic</a>
                </div>
            </section>

            <section id="food">
                <h2>Types of Food</h2>
                <div className="foodcontainer container">
                    <div className="foodtype fruit">
                        <div className="imgcontainer">
                            {/* <!--https://www.pinterest.com/--> */}
                            <img src="./img/fruit2.jpg" alt="Fruits" />
                                <div className="imgcontent">
                                    <h3>Fruit</h3>
                                </div>
                        </div>
                    </div>
                    <div className="foodtype vegetable">
                        <div className="imgcontainer">
                            {/* <!--https://www.pinterest.com/--> */}
                            <img src="./img/veg3.jpg" alt="Vegetable" />
                                <div className="imgcontent">
                                    <h3>Vegetable</h3>
                                </div>
                        </div>
                    </div>
                    <div className="foodtype meat">
                        <div className="imgcontainer">
                            <img src="./img/garin3.jpg" alt="Grain" />
                                <div className="imgcontent">
                                    <h3>Grain</h3>
                                </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="foodmenu">
                <h2 className="foodhead">Food Menu</h2>
                <div className="foodsection">
                    <div className="menucontainer container">
                        <div className="fooditem">
                            <div className="foodimg">
                                {/* <!--https://www.pinterest.com/--> */}
                                <img src="./img/image2.jpg" alt="" />
                            </div>
                            <div className="fooddesc">
                                <h2 className="foodtitle">Food Menu Item</h2>
                                <p>Lorem ipsum dolor sit amet.</p>
                                <p className="price"> Price: 100</p>
                            </div>
                        </div>
                    </div>
                    <div className="menucontainer container">
                        <div className="fooditem">
                            <div className="foodimg">
                                {/* <!--https://www.pinterest.com/--> */}
                                <img src="./img/image1.jpg" alt="" />
                            </div>
                            <div className="fooddesc">
                                <h2 className="foodtitle">Food Menu Item</h2>
                                <p>Lorem ipsum dolor sit amet.</p>
                                <p className="price"> Price:200</p>
                            </div>
                        </div>
                    </div>
                    <div className="menucontainer container">
                        <div className="fooditem">
                            <div className="foodimg">
                                {/* <!--https://www.pinterest.com/--> */}
                                <img src="./img/fooditem1.jpg" alt="" />
                            </div>
                            <div className="fooddesc">
                                <h2 className="foodtitle">Food Menu Item</h2>
                                <p>Lorem ipsum dolor sit amet.</p>
                                <p className="price"> Price:300 </p>
                            </div>
                        </div>
                    </div>
                    <div className="menucontainer container">
                        <div className="fooditem">
                            <div className="foodimg">
                                {/* <!--https://www.pinterest.com/--> */}
                                <img src="./img/fooditem9.jpg" alt="" />
                            </div>
                            <div className="fooddesc">
                                <h2 className="foodtitle">Food Menu Item</h2>
                                <p>Lorem ipsum dolor sit amet.</p>
                                <p className="price"> Price:600 </p>
                            </div>
                        </div>
                    </div>
                    <div className="menucontainer container">
                        <div className="fooditem">
                            <div className="foodimg">
                                {/* <!--https://www.pinterest.com/--> */}
                                <img src="./img/fooditem5.jpg" alt="" />
                            </div>
                            <div className="fooddesc">
                                <h2 className="foodtitle">Food Menu Item</h2>
                                <p>Lorem ipsum dolor sit amet.</p>
                                <p className="price"> Price:500</p>
                            </div>
                        </div>
                    </div>
                    <div className="menucontainer container">
                        <div className="fooditem">
                            <div className="foodimg">
                                {/* <!--https://www.pinterest.com/--> */}
                                <img src="./img/foofitem2.jpg" alt="" />
                            </div>
                            <div className="fooddesc">
                                <h2 className="foodtitle">Food Menu Item</h2>
                                <p>Lorem ipsum dolor sit amet.</p>
                                <p className="price"> Price:400</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}