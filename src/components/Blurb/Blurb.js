const Blurb = ({
    company,
    jobTitle,
    startDate,
    endDate

}) => {
    return (
        <>
        <h2>{company} - {jobTitle}</h2>
        <p><em>{startDate} ~ {endDate}</em></p>
        </>
    );
};

export default Blurb;