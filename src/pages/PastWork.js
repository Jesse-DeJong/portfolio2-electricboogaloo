import Blurb from "../components/Blurb/Blurb";
import saLogo from '../assets/saLogoCrop.png';
import nabLogo from '../assets/nabLogo.png';
import monuLogo from '../assets/monashUniversityLogo.png';

const PastWork = () => {

    const styles = {
        div: {
            height: document.documentElement.clientHeight - 82.5,
            width: document.documentElement.clientWidth,
        }
    }

    return (
        <div style={styles.div}>
            <Blurb
                company="Services Australia"
                jobTitle="Compliance Officer"
                startDate="February 2020"
                endDate="Current"
                body="Opting to undertake work with Services Australia during the pandemic I have performed more than a dozen roles across the Centrelink, Medicare and MyGov space’s assisting in national rollouts such as Jobseeker and more recently Vaccine Certificates and the myriad problem solving required case by case. During the quieter periods of covid where business as usual resumed I worked to calculate overpayments applying various social security law provisions and related interpretations and customer notification and explanation. This work bolstered my critical thinking and problem solving skills and led to me becoming a subject matter expert amongst my team, as well as spurring my creation of various tools to streamline the daily operation of this work."
                img={saLogo}
                />
            <Blurb 
                company="NAB"
                jobTitle="Corporate Servicing"
                startDate="April 2018"
                endDate="September 2019"
                body="At NAB I worked alongside a substantial team operating as the first point of contact for corporate banking and business clients. This role involved having an intricate knowledge of a substantial number of internal programs and policies, including how and where to find answers to bespoke problems usually while iterating with the client. Diagnosing client issues and traversing documentation to achieve an in the moment resolution to a problem, as well as in the more unique cases finding novel workarounds to enable difficult requests to be met."
                img={nabLogo}
                />

            <Blurb
                company="Monash University"
                jobTitle="Bachelor of Business"
                startDate="March 2014"
                endDate="June 2017"
                img={monuLogo}
                />
            <Blurb 
                company="Monash University"
                jobTitle="Web Development (Bootcamp)"
                startDate="May 2021"
                endDate="November 2021"
                img={monuLogo}
                />
        </div>
    );
};

export default PastWork;