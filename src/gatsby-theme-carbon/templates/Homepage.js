import React from 'react';
import { HomepageBanner,HomepageCallout, ResourceCard } from 'gatsby-theme-carbon';
import HomepageTemplate from 'gatsby-theme-carbon/src/templates/Homepage';
import styles from './Homepage.module.scss';
import HomepageVideo from '../components/HomepageVideo/HomepageVideo';

const BannerText = () =>  <h1>Enterprise<br/>Run Books</h1>;

const FirstLeftText = () => <p>Enterprise Run Books</p>;

const FirstRightText = () => (
  <p>
    IBM Cloud Enterprise Run Books are a collection of best practices created by IBM teams to help Clients and Partners get the most from their Enterprise subscription accounts
  </p>
);

const SecondLeftText = () => (
  <p>
    Wondering how
    <br />
    to contribute ?
  </p>
);

const SecondRightText = () => (
  <p>
    We welcome all feedback, ideas and pull requests The more content we can add here the easier it is
      for Site Reliability Engineers to master the configuration of an IBM Cloud Enterprise account
    possible experience for our users. If you’re interested in contributing,
    check out our contributing guidelines to get started.
    <a
      className={styles.calloutLink}
      href="https://www.carbondesignsystem.com/how-to-contribute/overview/"
    >
      Start contributing →
    </a>
  </p>
);

const customProps = {
  Banner: (
    <>
      <HomepageBanner renderText={BannerText}/>
      <span className="homepage--dots" />

      <section className="homepage--header">
        <div className="bx--grid">
          <div className="bx--row">
            <div className="hidden bx--col-lg-4 bx--col-md-4 bx--col-sm-2 bx--offset-lg-8 bx--offset-md-4 bx--offset-sm-2 homepage--tile-header">
              <ResourceCard
                className={styles.callToAction}
                subTitle="Watch"
                title="Cloud Videos"
                href="/videos/overview"
                color="dark"
                actionIcon="arrowRight"
              />
            </div>
            <HomepageVideo />
          </div>
        </div>
      </section>
    </>
  ),
  FirstCallout: (
    <HomepageCallout
      backgroundColor="#030303"
      color="white"
      leftText={FirstLeftText}
      rightText={FirstRightText}
    />
  ),
  SecondCallout: (
    <HomepageCallout
      leftText={SecondLeftText}
      rightText={SecondRightText}
      color="white"
      backgroundColor="#061f80"
    />
  ),
};

// spreading the original props gives us props.children (mdx content)
function ShadowedHomepage(props) {
  return <HomepageTemplate {...props} {...customProps} />;
}

export default ShadowedHomepage;
