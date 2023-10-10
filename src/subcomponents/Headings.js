
import strings from '../strings/strings.en-us.json'

function Headings() {
    return (
        <div className="sect1">
            <div className="heading">
                {strings['home.mainheading']}
            </div>
            <h3 className="subheading">{strings['home.subheading']}</h3>
        </div>
    );
}

export default Headings;