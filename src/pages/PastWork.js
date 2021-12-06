import Blurb from "../components/Blurb/Blurb";

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
                />
            <Blurb 
                company="NAB"
                jobTitle="Corporate Servicing"
                startDate="April 2018"
                endDate="September 2019"
                />

            <Blurb
                company="Monash University"
                jobTitle="Bachelor of Business"
                startDate="March 2014"
                endDate="June 2017"
                />
            <Blurb 
                company="Monash University"
                jobTitle="Web Development (Bootcamp)"
                startDate="May 2021"
                endDate="November 2021"
                />
        </div>
    );
};

export default PastWork;