import React from 'react';
import Grid from '@material-ui/core/Grid';


class Projects extends React.Component {
  render() {

    return (
        <div>
            <Grid container className="App-project" justify="space-evenly">
                <div className="App-project-image">
                    <div className="linkki">
                        <a href='https://kukaperii.fi'>Kukaperii.fi</a>
                    </div>
                    <div className="sublinkki">
                        {/* Inheritance planning made for people. */}
                    </div>
                </div>
                <div className="App-project-text">
                <p style={{paddingRight: '20px', paddingLeft: '20px'}}>
                    The service first solves the common problem of not knowing who will inherit.
                    After that a legally valid will can be created without typing anything, besides names.
                    With visual and clever service design user is being asked all the legally relevant questions in way that everyone understands.  
                    Based on the answers, the service suggests clauses for the user's specific situation.
                    With the help of personalized examples that explain what kind real life effect's clauses will have, the user can easily make the best decions for her unique case.
                    Besides valid, the clauses are legally and taxationally optimal.
                    <br/>
                    <br/>
                    In very complex estate planning situations the service can be paired with a lawyer. 
                    As the service captures information about the will creator’s legal inheritors and family situation, 
                    the types of property she has and how she would like to have her inheritance to be distributed, 
                    it reduces lawyer’s work load substantially.
                    <br/>
                    <br/>
                    Besides B2C, the service is also provided as SaaS. B2B use cases range from cutting the workload of legal service providers 
                    to aiding non-profits in encouraging people to give charitable gifts in their last wills.
                    <br/>
                    <br/>
                    Registration of EU Community design is pending.
                </p>
                </div>        
            </Grid>
            <Grid container className="App-project" justify="space-evenly">
                <div className="App-project-text">
                <p style={{paddingRight: '20px', paddingLeft: '20px'}}>
                    We are currently doing research and developing multiple products in the space of legal services.
                    Our solutions apply design thinking for solving legal problems.
                    We are confident that providing legal services to our focus group, individuals and SMEs,
                    requires much more than just raw knowledge of the law. By designing services that are "computationally kind",
                    we aim to show the user only the relevant, in this case legal, information regarding her case.
                </p>
                </div>
                <div className="App-project-image">
                <p>Upcoming products</p>
                </div>        
            </Grid>
        </div>
    );
  }
}


export default Projects;