import img from './profilePic.png'

const AboutMe = () => {
    return ( 
        <section className="about-me-section">
            <div className="about-me-img">
                <img className="img-me" src={require('./profilePic.png')} alt="profile picture"/>
            </div>
                
            <div className="about-me-text">
                <h2 className="about-me-title">About me</h2>
                <p className="about-me-paragraph"> I am a graduate from the University of Washington class of 2018 with a degree in Business administration. Since then I have explored managerial and entreprenurial opportunities. I am currently a student learning software development that includes HTML, CSS, Bootstrap, JavaScript, Node.js, MongoDB, MySQL, and React</p>
            </div>
        </section>
     );
}
 
export default AboutMe;