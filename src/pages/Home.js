import { useNavigate } from 'react-router-dom';
import ProjectCollaboration from '../components/ProjectCollaborationComponent';
import StatsComponent from '../components/StatsComponent';
import './../css/home.css';


function Home() {
    const navigate = useNavigate();
    return (
        <div className='home-container'>
            <section className='hero-section'>
                <div className='hero-text'>
                    <h2 className='hero-title'>BUILDING THE FUTURE</h2>
                    <p className='hero-subtitle'>Explore our portfolio of modern constructions and learn how we make your vision a reality.</p>
                    <button className='hero-button' onClick={() => navigate('/projects')}>SEE OUR WORK</button>
                </div>
                <div className='hero-image'>
                    <img src={`${process.env.PUBLIC_URL}/images/building-min.png`} alt='Mega Struct' loading="lazy" />
                </div>
            </section>
            <section className="what-we-offer">
                <div className='offer-text'>
                    <p className='offer-subtitle'>OUR SERVICES</p>
                    <h2 className='offer-title'>What We Offer</h2>
                </div>
                <div className='offer-items'>
                    <div className="offer-item">
                        <i className="fas fa-hard-hat fa-fw"></i>
                        <h3 className='offer-item-title'>General Construction</h3>
                        <p className='offer-item-subtitle'>We build a variety of structures, from residential to large commercial buildings.</p>
                    </div>
                    <div className="offer-item">
                        <i className="fas fa-project-diagram fa-fw"></i>
                        <h3 className='offer-item-title'>Construction Management</h3>
                        <p className='offer-item-subtitle'>We provide expert project management to ensure your construction project runs smoothly.</p>
                    </div>
                    <div className="offer-item">
                        <i className="fas fa-pencil-ruler fa-fw"></i>
                        <h3 className='offer-item-title'>Design-Build</h3>
                        <p className='offer-item-subtitle'>We offer integrated design and construction services to simplify the process.</p>
                    </div>
                </div>
            </section>
            <section className='about-difference'>
                <div className='about-difference-image'>
                    <img src={`${process.env.PUBLIC_URL}/images/whyMegaStruct-min.jpg`} alt='Mega Struct' loading="lazy" />
                </div>
                <div className='about-difference-text'>
                    <h2 className='about-difference-title'>What Makes Mega Struct Different?</h2>
                    <p className='about-difference-subtitle'>At Mega Struct, construction is more than just building — it's about
                        shaping the future with precision, innovation, and integrity. From towering buildings to
                        robust bridges and complex infrastructure, we take pride in delivering results that stand
                        the test of time. Every project we undertake is a reflection of our deep industry knowledge,
                        engineering excellence, and a commitment to unmatched quality.</p>
                    <p className='about-difference-subtitle'>
                        What sets us apart is our integrated approach. With a skilled in-house team of engineers,
                        architects, and project managers, we control every stage of the construction process —
                        from design to execution — ensuring consistency, efficiency, and excellence. We combine
                        state-of-the-art technology with tried-and-true construction methods to deliver projects
                        that exceed expectations, every time.
                    </p >
                    <p className='about-difference-subtitle'>
                        At the core of Mega Struct is a passion for building strong relationships just as much as
                        strong structures. Our transparent communication, dedication to safety, and tailored
                        client service create partnerships built on trust. When you choose Mega Struct,
                        you’re choosing a team that’s as invested in your vision as you are.</p>
                    <button className='about-difference-button' onClick={() => navigate('/about')}>ABOUT US</button>
                </div>
            </section>
            <section className="what-sets-us-apart">
                <div className="core-values-container">
                    <h2 className="core-values-title">What Sets Us Apart?</h2>
                    <div className="core-values">
                        <div className="core-value-1 core-value">
                            <div className="core-value-overlay">
                                <h3 className="core-value-title">Innovation</h3>
                                <p className="core-value-description">We apply cutting-edge technologies and innovative construction techniques to ensure the highest quality and efficiency in every project.</p>
                            </div>
                        </div>
                        <div className="core-value-2 core-value">
                            <div className="core-value-overlay">
                                <h3 className="core-value-title">Collaboration</h3>
                                <p className="core-value-description">Our team works closely with clients to understand their vision and deliver results that exceed expectations. We value strong, transparent partnerships.</p>
                            </div>
                        </div>
                        <div className="core-value-3 core-value">
                            <div className="core-value-overlay">
                                <h3 className="core-value-title">Safety</h3>
                                <p className="core-value-description">Safety is our top priority. We maintain strict safety standards to protect our team and ensure every project is completed without incident.</p>
                            </div>
                        </div>
                        <div className="core-value-4 core-value">
                            <div className="core-value-overlay">
                                <h3 className="core-value-title">Excellence</h3>
                                <p className="core-value-description">We are committed to delivering projects with the highest level of craftsmanship, attention to detail, and dedication to excellence in every phase.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <StatsComponent />
            <ProjectCollaboration />
            <section className="overlapping-section">
            </section>

        </div>

    )
}


export default Home;