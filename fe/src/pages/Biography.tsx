import { grandma } from "../assets";


export function Biography() {
    return (
        <>
            <section className="about-section spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title">
                                <h2>Something About Us</h2>
                                <p className="f-para">There are several ways people can make money online. From selling products to advertising. In this article I am going to explain the concept of contextual advertising.</p>
                                <p>First I will explain what contextual advertising is. Contextual advertising means the advertising of products on a website according to the content the page is displaying. For example if the content of a website was information on a Ford truck then the advertisements would be for Ford trucks for sale, or Ford servicing etc. It picks up the words on the page and displays ads that are similar to those words. Then when someone either performs an action or clicks on your page you will get paid.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="about-pic">
                                <img src={grandma} alt="" style={{height: "450px"}}/>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about-text">
                                <h3>The 2019 Conference</h3>
                                <p>When I first got into the online advertising business, I was looking for the magical combination that would put my website into the top search engine rankings, catapult me to the forefront of the minds or individuals looking to buy my product, and generally make me rich beyond my wildest dreams! After succeeding in the business for this long, I’m able to look back on my old self with this kind of thinking and shake my head. </p>
                                <ul>
                                    <li><span className="icon_check"></span> Write On Your Business Card</li>
                                    <li><span className="icon_check"></span> Advertising Outdoors</li>
                                    <li><span className="icon_check"></span> Effective Advertising Pointers</li>
                                    <li><span className="icon_check"></span> Kook 2 Directory Add Url Free</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}