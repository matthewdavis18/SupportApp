import fragment from "react";


const About = (props) => {

    return (
      <>
        <div className="container mx-auto">
          <h1 className="text-4xl mb-5 mt-5 shadow-md">About</h1>
          <p className="font-medium mb-3 text-center">
            
            Welcome to the support web application.
          </p>
          <div className='text-center'>
          <em> TO DO:</em>
          <ul>
            <li>
              Intergrate Zendesk API
            </li>
            <li>
              create bulk Ticekt updater
            </li>
            <li> ccpa command genertor (move online)</li>
            <li>password protect site</li>
            <li>bulk cash back command generator</li>
            <li>front end for headless browser to resend gift cards</li>
            <li>password reset command generator</li>
            <li>handle zendesk webhooks (sheets or to Data base)</li>
            <li>Zendesk leaderboard</li>
            <li>color scheme</li>
            <li>confirmation modals</li>
          </ul>
        </div>
        </div>
      </>
    );
 }
  
export default About
    