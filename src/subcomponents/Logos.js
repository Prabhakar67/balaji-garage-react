


function Logos() {
    return (
        <div className="brandBox">

          <h3>Two-Wheeler Brands Covered</h3>
            <div className="brands">
                <img src={require("../img/motercycle logos/bajaj.png")} alt="bajaj" className='logo_img' />
                <img src={require("../img/motercycle logos/tvs.png")} alt="tvs" className="logo_img" />

                <img src={require("../img/motercycle logos/honda.png")} alt="honda" className="logo_img" />
                <img src={require("../img/motercycle logos/hero.png")} alt="hero" className="logo_img" />

                <img src={require("../img/motercycle logos/suzuki.png")} alt="suzuki" className="logo_img" />
                <img src={require("../img/motercycle logos/yamha.png")} alt="yamha" className="logo_img" />

            </div>
        </div>
    );
}

export default Logos;