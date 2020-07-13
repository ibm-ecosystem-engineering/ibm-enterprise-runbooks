import React from 'react';
import ResourceLinks from 'gatsby-theme-carbon/src/components/LeftNav/ResourceLinks';

const links = [

  {
    title: 'IBM Cloud',
    href: 'https://www.ibm.com/cloud',
  },
  {
    title: 'GSI Labs',
    href: 'https://github.com/ibm-gsi-ecosystem',
  },
  {
    title: 'IBM PartnerWorld',
    href: 'https://www.ibm.com/partnerworld/public',
  },
  {
    title: 'IBM Cloud Patterns',
    href: 'https://ibm.github.io/cloud-enterprise-examples/',
  }
];

// shouldOpenNewTabs: true if outbound links should open in a new tab
const CustomResources = () => <ResourceLinks shouldOpenNewTabs links={links} />;

export default CustomResources;
