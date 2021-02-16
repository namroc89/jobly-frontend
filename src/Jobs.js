import React, { useEffect, useState } from "react";
import JoblyApi from "./api";
import { Link } from "react-router-dom";
import JobCard from "./JobCard";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  ListGroup,
  ListGroupItem
} from "reactstrap";
import SearchBar from "./SearchBar";

function Jobs() {
  const [jobs, setJobs] = useState(null);

  useEffect(function getJobsList() {
    search();
  }, []);

  async function search(title) {
    let res = await JoblyApi.getJobs(title);
    setJobs(res);
  }

  if (!jobs) {
    return <h1>Loading</h1>;
  }

  return (
    <div className="Jobs">
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">Jobs</CardTitle>
          <SearchBar searchFunc={search} />
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

export default Jobs;
