
import { useInView } from 'react-intersection-observer';
import './../css/stats.css';
import CountUp from 'react-countup';



function StatsComponent() {

    const { ref, inView } = useInView({ triggerOnce: true });

    return (
        <section className="stats-section" ref={ref}>
            <div className="stats-header">
                <h2 className="stats-title">Our Impact in Numbers</h2>
                <p className="stats-subtitle">A quick look at our achievements and dedication over the years</p>
            </div>
            <div className='stat-boxes'>
                <div className="stat-box">
                    <h2 className='stat-count'>{inView && <CountUp end={100} duration={3} />}+</h2>
                    <p className='stat-subtitle'>Completed Projects</p>
                </div>
                <div className="stat-box">
                    <h2 className='stat-count'>{inView && <CountUp end={15} duration={3} />}+ Years</h2>
                    <p className='stat-subtitle'>Experience in Construction</p>
                </div>
                <div className="stat-box">
                    <h2 className='stat-count'>{inView && <CountUp end={99.9} duration={3} decimals={1} />}%</h2>
                    <p className='stat-subtitle'>Client Satisfaction</p>
                </div>
            </div>
        </section>
    )
}


export default StatsComponent;