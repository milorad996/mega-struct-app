import { useNavigate } from 'react-router-dom';
import './../css/projectCollaboration.css';




function ProjectCollaboration() {
    const navigate = useNavigate();
    return (
        <section className="project-collaboration">
            <div className='collaboration-left-image'>
                <img src={`${process.env.PUBLIC_URL}/images/leftCollaboration-min.png`} alt='Mega Struct' loading="lazy" />
            </div>
            <div className="collaboration-button-container">
                <h2 className='collaboration-title'>Ready to Build with Us?</h2>
                <button className="collaboration-button" onClick={() => navigate('/contact')}>Start Your Project</button>
            </div>
            <div className='collaboration-right-image'>
                <img src={`${process.env.PUBLIC_URL}/images/rightCollaboration-min.PNG`} alt='Mega Struct' loading="lazy" />
            </div>
        </section>
    )
}



export default ProjectCollaboration;