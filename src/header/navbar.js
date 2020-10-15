import React from 'react';
import { Navbar,Nav,NavDropdown} from 'react-bootstrap';
import './navbar.css';

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.open = this.open.bind(this);
        //sets scroll listeners 
        this.listener = null;
        this.state = {
          expanded: null,
          navbarClass: "navbar-primary"
        };
      }
    
    //opens url
    open(url) {
        var win = window.location.replace(url);
    }

    //ran when page loads
    componentDidMount() {
        //adds scroll listener
        this.listener = document.addEventListener("scroll", e => {
          this.renameNavbarClassName();
        });

        if(window.innerWidth > 425){
          this.setState({ navbarClass: "navbar-primary" });
        }
        else{
          this.setState({ navbarClass: "navbar-not-expanded" });
        }
    }

    renameNavbarClassName(){
      var scrolled = document.scrollingElement.scrollTop;
      if(window.innerWidth > 600){
        if (scrolled >= 120) {
          this.setState({ navbarClass: "navbar-secondary" });
        }
        else{
          this.setState({ navbarClass: "navbar-primary" });
        }
      }
      else{
        if(this.state.expanded ){
          this.setState({ navbarClass: "navbar-expanded" });
        }
        else if(scrolled >= 120){
          this.setState({ navbarClass: "navbar-secondary" });
        }
        else{
          this.setState({ navbarClass: "navbar-not-expanded" });
        }
      }
    }
    
    //remove scroll listener
    componentDidUpdate() {
        document.removeEventListener("scroll", this.listener);
    }

    toggleExpand(){
      if(this.state.expanded == null) { 
        this.setState({ expanded: true}, () => {
          this.renameNavbarClassName();
        }); 
      }
      else { 
        this.setState({ expanded: !this.state.expanded}, () => {
          this.renameNavbarClassName();
        }); 
      }
    }
    render() {
      var navLinks = []
      if(window.innerWidth > 600){
        navLinks.push(
          <Nav.Link href="/about" id="navbar-item">What We Do</Nav.Link>
        );
        navLinks.push(
        <Nav.Link href="/opportunities" id="navbar-item">Opportunities</Nav.Link>
        );
        navLinks.push(
          <Nav.Link href="/contact" id="navbar-item">Contact</Nav.Link>
        );
      }
      else{
        navLinks.push(
          <Nav.Link href="/about" id="navbar-item"><h5>Who We Are</h5></Nav.Link>
        );
        navLinks.push(
        <NavDropdown.Item  href="/culture" id="navbar-item"><h5>Culture</h5></NavDropdown.Item>
        );
        navLinks.push(
          <NavDropdown.Item href="/vision" id="navbar-item"><h5>Vision</h5></NavDropdown.Item>
        );
        navLinks.push(
          <NavDropdown.Item href="/brunswick" id="navbar-item"><h5>Brunswick</h5></NavDropdown.Item>
        );
        navLinks.push(
          <Nav.Link href="/what-we-do" id="navbar-item"><h5>What We Do</h5></Nav.Link>
        );
        navLinks.push(
        <Nav.Link href="/opportunities" id="navbar-item"><h5>Opportunities</h5></Nav.Link>
        );
        navLinks.push(
          <Nav.Link href="/contact" id="navbar-item"><h5>Contact</h5></Nav.Link>
        );
      }
        return(
            <div className={this.state.navbarClass}>
              <Navbar.Brand><h2></h2></Navbar.Brand>
              <Navbar collapseOnSelect expand='sm' className="navbar" onToggle={()=> this.toggleExpand()}>
                  <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                  <Navbar.Collapse id="responsive-navbar-nav"> {/*navbar background*/}
                      <Nav className="mr-auto" id="nav"> {/*actual navbar*/}
                        <Nav.Link href={process.env.PUBLIC_URL + "/#home"} id="navbar-item">Lily Li</Nav.Link>
                        <Nav.Link href={process.env.PUBLIC_URL + "/#about"} id="navbar-item">About Me</Nav.Link>
                        <Nav.Link href={process.env.PUBLIC_URL + "/#experience"} id="navbar-item">Experience</Nav.Link>
                        <Nav.Link href={process.env.PUBLIC_URL + "/#research"} id="navbar-item">Research</Nav.Link>
                        <Nav.Link href={process.env.PUBLIC_URL + "/#skills"} id="navbar-item">Skills</Nav.Link>
                      </Nav>
                  </Navbar.Collapse>
              </Navbar>
            </div>
        );  
    }
}


