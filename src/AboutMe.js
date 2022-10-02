import img from './profilePic.png'

const AboutMe = () => {
    return ( 
        <section className="about-me-section" id="about-me-section">
            <div className="about-me-img">
                <img className="img-me" src={require('./profilePic.png')} alt="profile picture"/>
            </div>
                
            <div className="about-me-text">
                <h2 className="about-me-title">About me</h2>
                <p className="about-me-paragraph"> FullStack web developer leveraging my education and background in Business to build more user friendly and robust applications. I recently earned a certificate in full stack development from the University of Washington, where I gained experience in HTML, JavaScript, CSS, React.js, MySQL, MongoDB and responsive web design. With each project, my aim is to challenge myself by thinking of ways to improve my applications by reverse engineering quality work and learning the most up to date methods and technologies. I have worked alongside different sets of teams to develop various single-page MERN applications. I took lead on the backend development of our application that helps future homeowners locate homes near them that are tailored to their needs. I’m excited to leverage my skills as part of a fast-paced, quality-driven team to hone my skills and become a renowned problem solver. 
</p>
            </div>
        </section>
     );
}
 
export default AboutMe;