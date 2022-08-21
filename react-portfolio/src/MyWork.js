const MyWork = () => {
    return ( 
        <section className="my-work">
            <header className="my-work-header">
                <h2>My Work</h2>
            </header>

            <div className="my-work-container">
                <div className="thing-1">
                    <h3>Random Movie Selector</h3>
                    <a className="link" href="https://reversedentistry.github.io/Random-Movie-Selector/" target="_blank" rel="noreferrer">
                        <img src="./assets/movie-selector-SS.png" alt="movie selector screenshot" className="project-1" /></a>
                        <figcaption className="repo"><a href="https://github.com/reversedentistry/Random-Movie-Selector" target="_blank" rel="noreferrer">
                            <i className="fa-brands fa-github-square"></i>Repository</a>
                        </figcaption>
                </div>

                <div className="thing-2">
                    <h3>Weather Dashboard</h3>
                    <a className="link" href="https://davidpascual2.github.io/Weather-Dashboard/" target="_blank" rel="noreferrer">
                        <img src="./assets/weather-dashboard-SS.png" alt="weather screenshot" className="project-2" /></a>
                        <figcaption className="repo"><a href="https://github.com/davidpascual2/Weather-Dashboard" target="_blank" rel="noreferrer">
                            <i className="fa-brands fa-github-square"></i>Repository</a>
                        </figcaption>
                </div>
                    
                <div className="thing-3">
                    <h3>Code Quiz</h3>
                    <a className="link" href="https://davidpascual2.github.io/Code-Quiz-HW4/" target="_blank" rel="noreferrer">
                        <img src="./assets/code-quiz-SS.png" alt="code quiz screenshot" className="project-3" /></a>
                        <figcaption className="repo"><a href="https://github.com/davidpascual2/Code-Quiz-HW4" target="_blank" rel="noreferrer">
                            <i className="fa-brands fa-github-square"></i>Repository</a>
                        </figcaption>
                </div>
            </div>
        </section>
     );
}
 
export default MyWork;