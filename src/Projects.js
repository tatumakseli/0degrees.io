import React from 'react';
import Grid from '@material-ui/core/Grid';
import Fade from 'react-reveal/Fade';


class Projects extends React.Component {
  render() {

    return (
        <div>
            <Fade left>
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
                    A legally valid and optimal last will can be created without typing anything, besides names.
                    Visual and clever design ensures that the user is being asked all of the legally relevant questions in way that is easy understands.
                    The service then makes suggestions for the most usefull clauses to be considered in this particular case.
                    Personalized examples help to explain what kind real life effect's clauses will have and 
                    user can easily, and without any prior knowledge of the law, make the best decions for her unique case.
                    </p>
                    {/* Visual and clever design ensures that all of the necessary facts are gathered from the user and therefore the service can algorithmically make suggestions for the most sound solution.  */}
                    {/* Suggestion are presented in a way that everyone understands without a prior knowledge of the law. */}
                    {/* With visual and clever service design user is being asked all the legally relevant questions in way that everyone understands.   */}
                    {' '}

                    {/* In very complex estate planning situations the service can be paired with a lawyer. 
                    As the service captures information about the will creator’s legal inheritors and family situation, 
                    the types of property she has and how she would like to have her inheritance to be distributed, 
                    it reduces lawyer’s work load substantially.
                    <br/>
                    <br/>
                    Besides B2C, the service is also provided as SaaS. B2B use cases range from cutting the workload of legal service providers 
                    to aiding non-profits in encouraging people to give charitable gifts in their last wills.
                    <br/>
                    <br/> */}
                    <p style={{paddingLeft: '30px', paddingRight: '30px', fontSize: '0.75em'}}><i>For example, service recognises user's want to leave an apartment to his partner but there is also children and granchildren.
                    Service than suggests that the apartment could be left to the partner only with limited rights and the ownership would be left to descendants.
                    User is being explained what this arrangment would mean in real life and how much could be saved in taxation.
                    </i></p>
                    <p style={{paddingRight: '20px', paddingLeft: '20px'}}>
                    Registration of EU Community design is pending.
                </p>
                </div>
                     
            </Grid>
            </Fade> 
            
            <Fade right>
            <Grid container className="App-project" justify="space-evenly">
                <div className="App-project-text">
                <p style={{paddingRight: '20px', paddingLeft: '20px'}}>
                    {/* We are currently doing research and developing multiple products in the space of legal services. */}
                    We create a new market of legal services by giving individuals and SMEs access to superior quality digital legal services.
                    We solve the problem of needing a lawyer by applying design thinking and principles.
                    Users are guided through a carefully designed service which makes sure that the legally relevant facts
                    are categorised. This information is used to algoritmically make suggestion for the most sound course of action.
{/*                 
    the legally irrelevant facts are left out and 
                    We are confident that providing legal services to our focus group, individuals and SMEs, requires much more than just raw knowledge of the law. 
                    Our approach is to sort out the  by guiding the user 
                    Using this process we have legally relevant pieces of information categorised and and extract all of the legally valid facts
                    and therefore can algoritmically make suggestion for the most sound solution. */}
                    {/* By designing services that are "computationally kind",
                    we aim to show the user only the relevant legal information and course of action regarding her case. */}
                </p>
                </div>
                <div className="App-project-image">
                <p>What we do</p>
                </div>        
            </Grid>
            </Fade>
        </div>
    );
  }
}


export default Projects;