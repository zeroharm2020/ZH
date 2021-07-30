import './about-section1.css';
import * as ReactBootStrap from "react-bootstrap";

function AboutSection1() {
  return (
    <div className="section">
      <ReactBootStrap.Row>

        <ReactBootStrap.Col xs={6} md={8} >
          <img className="about-section1-image" src="genomics DNA.png" />
        </ReactBootStrap.Col>
        
        <ReactBootStrap.Col xs={6} md={4}>
          <div className="content-container section3-content-container">
            <span className="title-text green align-right">GENOMICS</span>
            <span className="default-text grey align-right">Precision medicine has always been the goal. <br /> It is now possible with the ability to sequence the human<br /> genome. Science has now made it possible to sequence<br /> around 20,000 genes that make up the blueprint of the<br />human body. A major step forward that has both informed<br /> and transformed how we can create personalised medicine.</span>
          </div>
        </ReactBootStrap.Col>
      
      </ReactBootStrap.Row>

    </div>
  );
}

export default AboutSection1;