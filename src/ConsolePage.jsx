import React, { useState, useEffect } from "react";
import { Route, useRouteMatch } from "react-router-dom";
import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";

import BasePage from "../components/BasePage";
import BaseOverviewPage from "../components/BaseOverviewPage";
import Header from "../components/Header";
import Section from "../components/Section";
import Tile from "../components/Tile";
import LoadingPlaceholder from "../components/LoadingPlaceholder";

// import ErrorPage from "../pages/ErrorPage";
import WebsiteOverviewPage from "./website/WebsiteOverviewPage";
import WebsiteCreationPage from "./website/WebsiteCreationPage";

import EmailOverviewPage from "./email/EmailOverviewPage";
import EmailDashboardPage from "./email/EmailDashboardPage";

import solutions from "../data/content.js";

import "../assets/styles/console.css";
import getEmail from "../data/utils";
import WebsiteDashboardPage from "./website/WebsiteDashboardPage";

const Dashboard = () => (
  <Section className="console-dashboard-section">
    <div className="console-dashboard">
      {solutions.map((solution) => (
        <Tile key={solution.name} solution={solution} />
      ))}
    </div>
  </Section>
);

const SignOut = () => (
  <Section className="sign-out-section" colorClass="sign-out-section-color">
    <AmplifySignOut />
  </Section>
);

const ConsolePage = () => {
  const [email, setEmail] = useState(null);
  const match = useRouteMatch();

  useEffect(() => {
    async function updateEmail() {
      return await getEmail();
    }
    updateEmail()
      .then((response) => {
        setEmail(response);
      })
      .catch((error) => console.error(error));
  }, [email]);

  return (
    <BasePage className="console" title="Console">
      {email ? (
        <div>
          <Route exact path={match.path}>
            <Header title="Console" />
            <Dashboard />
            <SignOut />
          </Route>
          {solutions.map((solution, index) => {
            const { path } = solution;
            const page =
              path === "website" ? (
                <WebsiteOverviewPage email={email} />
              ) : path === "email" ? (
                <EmailOverviewPage email={email} />
              ) : (
                <BaseOverviewPage content={solution} />
              );
            return (
              <Route exact path={`${match.path}/${path}`} key={index}>
                {page}
              </Route>
            );
          })}
          <Route exact path={`${match.path}/website/create`}>
            <WebsiteCreationPage email={email} />
          </Route>
          <Route exact path={`${match.path}/website/dashboard`}>
            <WebsiteDashboardPage email={email} />
          </Route>
          <Route exact path={`${match.path}/email/dashboard`}>
            <EmailDashboardPage  />
          </Route>
        </div>
      ) : (
        <LoadingPlaceholder />
      )}
    </BasePage>
  );
};

export default withAuthenticator(ConsolePage);
