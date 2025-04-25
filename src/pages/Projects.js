import { useEffect, useState } from 'react';
import './../css/projects.css';
import Aos from 'aos';
import { useNavigate } from 'react-router-dom';

function Projects() {
    const navigate = useNavigate();
    const [lightboxImage, setLightboxImage] = useState(null);

    const openLightbox = (imgSrc) => {
        setLightboxImage(imgSrc);
    };

    const closeLightbox = () => {
        setLightboxImage(null);
    };
    useEffect(() => {
        Aos.init({ duration: 1500, once: true });
        Aos.refresh();
    }, []);

    return (
        <div className='projects-main'>
            <section className='projects-hero-section'>
                <div className='projects-text'>
                    <h2 className='projects-title'>Turning Ideas into Landmarks</h2>
                    <p className='projects-subtitle'>Discover diverse projects built with local insight and global standards.</p>
                </div>
            </section>

            <section className="featured-projects">
                <h2 className="section-featured-title">Featured Projects</h2>
                <p className="section-featured-subtitle">Explore some of our signature builds from across the world.</p>

                <div className="projects-grid">
                    <div className="project-card">
                        <img
                            src={`${process.env.PUBLIC_URL}/images/skyline-min.jpeg`}
                            alt='Skyline Residences'
                            loading="lazy"
                            onClick={() => openLightbox(`${process.env.PUBLIC_URL}/images/skyline-min.jpeg`)}
                        />
                        <div className="project-info">
                            <h3>Skyline Residences</h3>
                            <p className="location">Berlin, Germany</p>
                            <p className="type">Luxury Apartments</p>
                        </div>
                    </div>

                    <div className="project-card">
                        <img
                            src={`${process.env.PUBLIC_URL}/images/ecoTower-min.jpeg`}
                            alt='EcoTower'
                            loading="lazy"
                            onClick={() => openLightbox(`${process.env.PUBLIC_URL}/images/ecoTower-min.jpeg`)}
                        />
                        <div className="project-info">
                            <h3>EcoTower</h3>
                            <p className="location">Oslo, Norway</p>
                            <p className="type">Eco-friendly Offices</p>
                        </div>
                    </div>

                    <div className="project-card">
                        <img
                            src={`${process.env.PUBLIC_URL}/images/sunset-min.jpeg`}
                            alt='Sunset Villas'
                            loading="lazy"
                            onClick={() => openLightbox(`${process.env.PUBLIC_URL}/images/sunset-min.jpeg`)}
                        />
                        <div className="project-info">
                            <h3>Sunset Villas</h3>
                            <p className="location">Marbella, Spain</p>
                            <p className="type">Luxury Coastal Homes</p>
                        </div>
                    </div>
                    <div className="project-card">
                        <img src={`${process.env.PUBLIC_URL}/images/aurora-min.jpg`} alt="Aurora Tower" loading="lazy"
                            onClick={() => openLightbox(`${process.env.PUBLIC_URL}/images/aurora-min.jpg`)}
                        />
                        <div className="project-info">
                            <h3>Aurora Tower</h3>
                            <p className="location">Toronto, Canada</p>
                            <p className="type">Mixed-Use Skyscraper</p>
                        </div>
                    </div>

                    <div className="project-card">
                        <img src={`${process.env.PUBLIC_URL}/images/oasis-min.jpeg`} alt="Oasis Homes" loading="lazy"
                            onClick={() => openLightbox(`${process.env.PUBLIC_URL}/images/oasis-min.jpeg`)}
                        />
                        <div className="project-info">
                            <h3>Oasis Homes</h3>
                            <p className="location">Dubai, UAE</p>
                            <p className="type">Sustainable Family Villas</p>
                        </div>
                    </div>

                    <div className="project-card">
                        <img src={`${process.env.PUBLIC_URL}/images/azure-min.jpg`} alt="Azure Villa" loading="lazy"
                            onClick={() => openLightbox(`${process.env.PUBLIC_URL}/images/azure-min.jpg`)}
                        />
                        <div className="project-info">
                            <h3>Azure Villa</h3>
                            <p className="location">Mykonos, Greece</p>
                            <p className="type">Seaside Luxury Retreat</p>
                        </div>
                    </div>


                </div>
            </section>

            {lightboxImage && (
                <div className="lightbox-overlay" onClick={closeLightbox}>
                    <img src={lightboxImage} alt="Enlarged project" className="lightbox-image" />
                </div>
            )}
            <section className="countries-section">
                <h2 className="countries-section-title">Global Presence. Local Impact.</h2>
                <p className="countries-section-subtitle">Building excellence across key regions where trust meets tradition.</p>

                <div className="countries-grid">
                    <div className="country-card">
                        <div className='country-image'>
                            <img src={`${process.env.PUBLIC_URL}/images/spain-min.jpg`} alt="Spain" loading="lazy" />
                        </div>
                        <h3 className='country-title'>Spain</h3>
                    </div>
                    <div className="country-card">
                        <div className='country-image'>
                            <img src={`${process.env.PUBLIC_URL}/images/uae-min.jpg`} alt="United Arab Emirates" loading="lazy" />
                        </div>
                        <h3 className='country-title'>UAE</h3>
                    </div>
                    <div className="country-card">
                        <div className='country-image'>
                            <img className='germany-image' src={`${process.env.PUBLIC_URL}/images/germany-min.jpeg`} alt="Germany" loading="lazy" />
                        </div>
                        <h3 className='country-title'>Germany</h3>
                    </div>
                    <div className="country-card">
                        <div className='country-image'>
                            <img src={`${process.env.PUBLIC_URL}/images/canada-min.jpg`} alt="Canada" loading="lazy" />
                        </div>
                        <h3 className='country-title'>Canada</h3>
                    </div>
                </div>
            </section>
            <section className="sustainability-section">
                <h2 className="sustainability-title">Sustainability and Innovation</h2>
                <p className="sustainability-subtitle">We are committed to building a greener future through sustainable practices and innovative solutions.</p>

                <div className="sustainability-projects">
                    <div className="sustainability-card">
                        <div className='sustainability-image'>
                            <img src={`${process.env.PUBLIC_URL}/images/sustainability-min.jpg`} alt="Sustainability Project" />
                        </div>
                        <div className='sustainability-text' data-aos="zoom-in">
                            <h3>Eco-Friendly Developments</h3>
                            <p>Our commitment to the environment is reflected in projects designed to minimize energy consumption and environmental impact.</p>
                        </div>
                    </div>
                    <div className="sustainability-card">
                        <div className='sustainability-text' data-aos="zoom-in">
                            <h3>Innovative Technologies</h3>
                            <p>We integrate the latest green technologies, such as solar power and energy-efficient materials, in every project.</p>
                        </div>
                        <div className='sustainability-image'>
                            <img src={`${process.env.PUBLIC_URL}/images/solar-min.jpeg`} alt="Green Technology" />
                        </div>
                    </div>
                </div>
            </section >
            <section className='projects-contact'>
                <div className='projects-contact-text'>
                    <h2 className='projects-contact-title'>Let’s Build Something Great Together</h2>
                    <p className='projects-contact-subtitle'>Get in touch to bring your vision to life</p>
                    <button className='projects-contact-button' onClick={() => navigate('/contact')}>Contact Us</button>
                </div>
            </section>


        </div >
    );
}

export default Projects;
