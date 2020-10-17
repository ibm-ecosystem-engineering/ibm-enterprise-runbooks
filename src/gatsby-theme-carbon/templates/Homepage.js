import React from 'react';
import { HomepageBanner,HomepageCallout, ResourceCard } from 'gatsby-theme-carbon';
import HomepageTemplate from 'gatsby-theme-carbon/src/templates/Homepage';
import styles from './Homepage.module.scss';
import HomepageVideo from '../components/HomepageVideo/HomepageVideo';

const BannerText = () => <h1>Enterprise<br/>Run Books</h1>;

const FirstLeftText = () => <p>Run Books</p>;

const FirstRightText = () => (
  <p>
    When you are working with an IBM Cloud Enterprise Subscription account, having a collection of Run Books helps you navigate your way through a number of critical security management, catalog management and other activities to make you IBM Cloud Account ready for Developers, Data Scientist and many more.
  </p>
);

const SecondLeftText = () => (
  <p>
    Wondering how
    <br />
    to contribute?
  </p>
);

const SecondRightText = () => (
  <p>
    We welcome all feedback, designs, or ideas in order to produce the best
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
      /** 
      <section className="homepage--header">
        <div className="bx--grid">
          <div className="bx--row">
            <div className="hidden bx--col-lg-4 bx--col-md-4 bx--col-sm-2 bx--offset-lg-8 bx--offset-md-4 bx--offset-sm-2 homepage--tile-header">
              <ResourceCard
                className={styles.callToAction}
                subTitle="Read"
                title="Migration guide"
                href="/updates/migration-guide/overview"
                color="dark"
                actionIcon="arrowRight"
              />
            </div>
            <HomepageVideo />
          </div>
        </div>
      </section>
        */
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
