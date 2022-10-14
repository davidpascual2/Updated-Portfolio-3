

const MyWork = () => {
    return ( 
        <section className="my-work" id="my-work">
            <header className="my-work-header">
                <h2>My Work</h2>
            </header>

            <div className="my-work-container">
                <div className="thing-0">
                    <h3>Home Finder</h3>
                    <a className="link" href="https://home-guru.herokuapp.com/" target="_blank" rel="noreferrer">
                        <img src={require("./proj3SS1.png")} alt="home guru screenshot" className="project-0" /></a>
                        <figcaption className="repo"><a href="https://github.com/reversedentistry/Random-Movie-Selector" target="_blank" rel="noreferrer">
                            <i className="fa-brands fa-github-square"></i>Repository</a>
                        </figcaption>
                </div>

                <div className="thing-1">
                    <h3>Random Movie Selector</h3>
                    <a className="link" href="https://reversedentistry.github.io/Random-Movie-Selector/" target="_blank" rel="noreferrer">
                        <img src={require("./movie-selector-SS.png")} alt="movie selector screenshot" className="project-1" /></a>
                        <figcaption className="repo"><a href="https://github.com/reversedentistry/Random-Movie-Selector" target="_blank" rel="noreferrer">
                            <i className="fa-brands fa-github-square"></i>Repository</a>
                        </figcaption>
                </div>

                <div className="thing-2">
                    <h3>Weather Dashboard</h3>
                    <a className="link" href="https://davidpascual2.github.io/Weather-Dashboard/" target="_blank" rel="noreferrer">
                        <img src={require("./weather-dashboard-SS.png")} alt="weather screenshot" className="project-2" /></a>
                        <figcaption className="repo"><a href="https://github.com/davidpascual2/Weather-Dashboard" target="_blank" rel="noreferrer">
                            <i className="fa-brands fa-github-square"></i>Repository</a>
                        </figcaption>
                </div>
                    
                <div className="thing-3">
                    <h3>Doggie Date Social Media</h3>
                    <a className="link" href="https://ancient-scrubland-48723.herokuapp.com/" target="_blank" rel="noreferrer">
                        <img src={require("./DoggieDateSS.png")} alt="Doggie Date screenshot" className="project-3" /></a>
                        <figcaption className="repo"><a href="https://github.com/davidpascual2/Project-2" target="_blank" rel="noreferrer">
                            <i className="fa-brands fa-github-square"></i>Repository</a>
                        </figcaption>
                </div>
            </div>
        </section>
     );
}
 
export default MyWork;