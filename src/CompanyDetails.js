import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import JoblyApi from "./api";
import JobCard from "./JobCard";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  ListGroup,
  ListGroupItem
} from "reactstrap";

function CompanyDetails() {
  const [company, setCompany] = useState(null);
  const { handle } = useParams();

  useEffect(async function getCompany() {
    let res = await JoblyApi.getCompany(handle);
    setCompany(res);
  }, []);

  if (!company) {
    return <h1>Loading...</h1>;
  }

  let jobs = company.jobs;

  return (
    // <div>
    //   <h1>{company.name}</h1>
    //   <p>{company.description}</p>
    //   <ul>
    //     {jobs.map((j) => (
    //       <li key={j.id}>
    //         <JobCard job={j} />
    //       </li>
    //     ))}
    //   </ul>
    // </div>

    <div className="Company">
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            {company.name}
          </CardTitle>
          <CardText>{company.description}</CardText>

          <ListGroup>
            {jobs.map((j) => (
              <ListGroupItem key={j.id}>
                <JobCard job={j} />
              </ListGroupItem>
            ))}
          </ListGroup>
        </CardBody>
      </Card>
    </div>
  );
}

export default CompanyDetails;
