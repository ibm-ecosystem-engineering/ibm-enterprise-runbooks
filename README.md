# IBM Cloud Ecosystem
[![Build Status](https://travis-ci.org/ibm-garage-cloud/ibm-garage-developer-guide.svg?branch=master)](https://travis-ci.org/ibm-garage-cloud/ibm-garage-developer-guide)

## IBM Cloud Enterprise Run Books

The IBM Cloud Enterprise Run Books help IBM Cloud operations teams managing Enterprise Subscription Account. A Run Book is description [here](https://en.wikipedia.org/wiki/Runbook), this is summarised with this sentence. In a computer system or network, a runbook is a compilation of routine procedures and operations that the system administrator or operator carries out. System administrators in IT departments and NOCs use runbooks as a reference. Runbooks can be in either electronic or in physical book form. Typically, a runbook contains procedures to begin, stop, supervise, and debug the system. It may also describe procedures for handling special requests and contingencies. An effective runbook allows other operators, with prerequisite expertise, to effectively manage and troubleshoot a system.   

The rendered Run Books can be viewed here - [https://github.com/ibm-gsi-ecosystem/ibm-enterprise-runbooks](https://github.com/ibm-gsi-ecosystem/ibm-enterprise-runbooks)

To update and manage the Run Books follow these steps.

### Clone the repository

```
git clone
```

### Install dependencies

```
npm install
```

This will install all the dependencies necessary to run the environment in development mode
and to build and publish the content.

Most notably, this project depends on the following:
(documented in `package.json`):

```bash
npm install -g gatsby
npm i gatsby-remark-embed-video
```

### Write content

The content of the Developer Guide is authored through a hybrid of Markdown and React. The content
itself is primarily provided using Markdown. React components are sprinkled into the Markdown to
provide for a richer and more interactive set of components in the published guide.

To render the content within your local development environment, run the following:

```
npm run build
npm run dev
```

View your locally rendered content:

```
http://localhost:8000/
```

### Publish Content

This repository has been configured to build and publish the changes automatically via travis-ci. There are two builds currently configured:

- `master` branch is automatically published to the `gh-pages` branch in this repository which is visible here - [https://ibm-gsi-ecosystem.github.io/ibm-enterprise-runbooks/](https://ibm-gsi-ecosystem.github.io/ibm-enterprise-runbooks/)

**Note:** There is a time delay between when deploy process completes and when the
content is available on the published site.

### Gatsby and Carbon

Get started using with the Gatsby Carbon theme which includes all configuration you might need to build a
beautiful site inspired by the [Carbon Design System](https://www.carbondesignsystem.com).

## Resources

- [Getting Started](https://gatsby-theme-carbon.now.sh/getting-started)
- [Guides](https://gatsby-theme-carbon.now.sh/guides/configuration)
- [Components](https://gatsby-theme-carbon.now.sh/components/markdown)
- [Demo](https://gatsby-theme-carbon.now.sh/demo)
- [Gallery](https://gatsby-theme-carbon.now.sh/gallery)
- [Contributions](https://gatsby-theme-carbon.now.sh/contributions)
