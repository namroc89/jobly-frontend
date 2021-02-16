import React, { useContext, useState, useEffect } from "react";
import UserContext from "./auth/UserContext";

import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  ListGroup,
  ListGroupItem,
  Button
} from "reactstrap";

function JobCard({ job }) {
  const { hasAppliedToJob, applyToJob } = useContext(UserContext);
  const [applied, setApplied] = useState();

  useEffect(
    function updateAppliedStatus() {
      setApplied(hasAppliedToJob(job.id));
    },
    [job.id, hasAppliedToJob]
  );

  async function handleApply(evt) {
    if (hasAppliedToJob(job.id)) return;
    applyToJob(job.id);
    setApplied(true);
  }

  return (
    <Card>
      <CardBody>
        <CardTitle>
          <h4>{job.title}</h4>
        </CardTitle>
        <CardText>{job.companyName}</CardText>
        <CardText>Salary: {job.salary}</CardText>
        <CardText>Equity: {job.equity}</CardText>
        <Button onClick={handleApply} disabled={applied}>
          {applied ? "Applied" : "Apply"}
        </Button>
      </CardBody>
    </Card>
  );
}

export default JobCard;
