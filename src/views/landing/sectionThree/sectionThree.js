import './sectionThree.css';
import * as ReactBootStrap from "react-bootstrap";
//import  image from ".image_02.png"

function sectionTwo() {
  return (
    <div className="section">
      <ReactBootStrap.Row>

        <ReactBootStrap.Col xs={12} md={8} >
          <img className="section3-image" src="Genomics circle.jpg" />
        </ReactBootStrap.Col>
        
        <ReactBootStrap.Col xs={12} md={4}>
          <div className="content-container section3-content-container">
            <span className="title-text green align-right">GENOMICS</span>
            <span className="default-text grey align-right">Precision medicine has always been the goal. It is now possible with the ability to sequence the human genome. Science has now made it possible to sequence around 20,000 genes that make up the blueprint of thehuman body. A major step forward that has both informed and transformed how we can create personalised medicine.</span>
            <a class="default-button green float-right" href="/genomics">KNOW MORE </a>
          </div>
        </ReactBootStrap.Col>
      
      </ReactBootStrap.Row>

    </div>
  );
}

export default sectionTwo;



