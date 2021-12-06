const Blurb = ({
    company,
    jobTitle,
    startDate,
    endDate,
    body,
    img

}) => {
    return (
        <>
            <div className="card m-3" style={{maxWidth: "540px", maxHeight: "300px", overflow: "hidden"}}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={img} className="img-fluid rounded-start" alt="..."></img>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{company} - {jobTitle}</h5>
                            <p className="card-text"><small className="text-muted">{startDate} ~ {endDate}</small></p>
                            <p className="card-text">{'>'}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

// Duplicate it at the end to mirror for alternating cards
// Have pop-out of {body} for jobs and imgs of certs for uni cards

export default Blurb;