import React, { useEffect, useState } from "react";
import JoblyApi from "./api";
import { Link } from "react-router-dom";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  ListGroup,
  ListGroupItem
} from "reactstrap";
import CompanyCard from "./CompanyCard";
import SearchBar from "./SearchBar";

function Companies() {
  const [companies, setCompanies] = useState(null);

  useEffect(async function getCompaniesList() {
    search();
  }, []);

  async function search(name) {
    let res = await JoblyApi.getCompanies(name);
    setCompanies(res);
  }

  if (!companies) {
    return <h1>Loading</h1>;
  }

  return (
    <div className="Companies">
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            Companies
          </CardTitle>
          <SearchBar searchFunc={search} />

          <ListGroup>
            {companies.map((c) => (
              <Link to={`/companies/${c.handle}`} key={c.handle}>
                <ListGroupItem key={c.handle}>
                  <CompanyCard company={c} />
                </ListGroupItem>
              </Link>
            ))}
          </ListGroup>
        </CardBody>
      </Card>
    </div>
  );
}

export default Companies;
