import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './../css/services.css';
import { faBuilding, faCalculator, faCheckDouble, faClipboardList, faFlagCheckered, faHammer, faHelmetSafety, faHouse, faLeaf } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';





function Services() {
    const navigate = useNavigate();
    useEffect(() => {
        const lines = document.querySelectorAll('.expand-line');

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.width = '100%';
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.5 }
        );

        lines.forEach(line => observer.observe(line));

        return () => {
            lines.forEach(line => observer.unobserve(line));
        };
    }, []);

    return (
        <div className='main-services'>
            <section className='hero-services'>
                <div className='hero-services-text'>
                    <h2 className='hero-services-title'>Expert Construction Services Tailored for You</h2>
                    <p className='hero-services-subtitle'>Explore our wide range of construction solutions, crafted to bring your vision to life with precision and professionalism.</p>
                </div>
            </section>
            <section className='core-services'>
                <h2 className='core-title'>Our Core Services</h2>
                <p className='core-subtitle'>Discover the range of construction services we offer.</p>
                <div className='services-grid'>
                    <div className='service-card'>
                        <FontAwesomeIcon icon={faHouse} className='service-icon' style={{ color: '#00fbf6' }} />
                        <h3 className='service-title'>Residential Construction</h3>
                        <p className='service-subtitle'>We build quality homes tailored to your lifestyle and vision.</p>
                    </div>
                    <div className='service-card'>
                        <FontAwesomeIcon icon={faBuilding} className='service-icon' style={{ color: '#f4ce14' }} />
                        <h3 className='service-title'>Commercial Projects</h3>
                        <p className='service-subtitle'>From office spaces to large facilities, we deliver on time and budget.</p>
                    </div>
                    <div className='service-card'>
                        <FontAwesomeIcon icon={faLeaf} className='service-icon' style={{ color: '#4caf50' }} />
                        <h3 className='service-title'>Sustainable Building</h3>
                        <p className='service-subtitle'>Eco-friendly construction using energy-efficient and green solutions.</p>
                    </div>
                    <div className='service-card'>
                        <FontAwesomeIcon icon={faHammer} className='service-icon' style={{ color: '#ff6f00' }} />
                        <h3 className='service-title'>Renovation & Remodeling</h3>
                        <p className='service-subtitle'>Modernize and refresh your spaces with expert renovation services.</p>
                    </div>
                </div>
            </section>
            <section className='process-section'>
                <h2 className='process-title'>Our Process</h2>
                <p className='process-subtitle'>From the first consultation to project completion – here's how we ensure quality, clarity, and satisfaction every step of the way.</p>
                <div className='process-steps'>
                    <div className='process-step'>
                        <div className='process-image'>
                            <img src={`${process.env.PUBLIC_URL}/images/planning-min.jpg`} alt='Consultation & Planning' loading="lazy" />
                        </div>
                        <div className='process-text'>
                            <div className="step-header">
                                <FontAwesomeIcon icon={faClipboardList} className='process-icon' style={{ color: '#00fbf6' }} />
                                <h3 className='step-title'>Consultation & Planning</h3>
                            </div>
                            <p className='step-desc'>We discuss your vision and craft a personalized construction plan that suits your needs.</p>
                            <div className="expand-line-wrapper">
                                <div className="expand-line" ></div>
                            </div>
                        </div>

                    </div>
                    <div className='process-step'>
                        <div className='process-text'>
                            <div className="step-header">
                                <FontAwesomeIcon icon={faCalculator} className='process-icon' style={{ color: '#ffd369' }} />
                                <h3 className='step-title'>Cost Estimation</h3>
                            </div>
                            <p className='step-desc'>Transparent pricing with detailed estimates to keep you fully informed.</p>
                            <div className="expand-line-wrapper">
                                <div className="expand-line" ></div>
                            </div>
                        </div>
                        <div className='process-image'>
                            <img src={`${process.env.PUBLIC_URL}/images/costEstimation-min.jpg`} alt='Cost Estimation' loading="lazy" />
                        </div>
                    </div>

                    <div className='process-step'>
                        <div className='process-image'>
                            <img src={`${process.env.PUBLIC_URL}/images/supervision-min.jpg`} alt='Construction & Supervision' loading="lazy" />
                        </div>
                        <div className='process-text'>
                            <div className="step-header">
                                <FontAwesomeIcon icon={faHelmetSafety} className='process-icon' style={{ color: '#ff5e57' }} />
                                <h3 className='step-title'>Construction & Supervision</h3>
                            </div>
                            <p className='step-desc'>Our skilled team brings the project to life while ensuring safety and quality.</p>
                            <div className="expand-line-wrapper">
                                <div className="expand-line" ></div>
                            </div>
                        </div>
                    </div>
                    <div className='process-step'>
                        <div className='process-text'>
                            <div className="step-header">
                                <FontAwesomeIcon icon={faFlagCheckered} className='process-icon' style={{ color: '#8aff80' }} />
                                <h3 className='step-title'>Project Delivery</h3>
                            </div>
                            <p className='step-desc'>We deliver the finished project on time – exceeding expectations.</p>
                            <div className="expand-line-wrapper">
                                <div className="expand-line" ></div>
                            </div>
                        </div>
                        <div className='process-image'>
                            <img src={`${process.env.PUBLIC_URL}/images/delivery-min.JPG`} alt='Project Delivery' loading="lazy" />
                        </div>
                    </div>
                </div>
            </section>
            <section className='projects-preview-section'>
                <div className='projects-preview-background'></div>
                <div className='projects-preview-text'>
                    <h2 className='projects-preview-title'>We bring bold ideas to life — explore our past projects and see what we can build together.</h2>
                    <button className='projects-preview-button' onClick={() => navigate('/projects')}>View Our Projects</button>
                </div>
            </section>
            <div
                className="aos-line"
                data-aos="fade-right"
            ></div>
            <section className="why-choose-us">
                <h2 className="choose-title">Why Choose Us</h2>
                <p className="choose-subtitle">
                    We're committed to quality, reliability, and excellence at every stage of your project.
                </p>

                <div className="choose-grid">
                    <div className="choose-card">
                        <FontAwesomeIcon icon={faCheckDouble} className="choose-icon" />
                        <h3 className="choose-card-title">10+ Years of Experience</h3>
                    </div>
                    <div className="choose-card">
                        <FontAwesomeIcon icon={faCheckDouble} className="choose-icon" />
                        <h3 className="choose-card-title">Certified Professionals</h3>
                    </div>
                    <div className="choose-card">
                        <FontAwesomeIcon icon={faCheckDouble} className="choose-icon" />
                        <h3 className="choose-card-title">Premium Materials</h3>
                    </div>
                    <div className="choose-card">
                        <FontAwesomeIcon icon={faCheckDouble} className="choose-icon" />
                        <h3 className="choose-card-title">On-Time & On-Budget</h3>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Services;