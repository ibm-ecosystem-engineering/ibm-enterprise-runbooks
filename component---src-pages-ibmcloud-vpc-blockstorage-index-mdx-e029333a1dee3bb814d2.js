(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{cKEK:function(A,e,a){"use strict";a.r(e),a.d(e,"_frontmatter",(function(){return r})),a.d(e,"default",(function(){return p}));var t,s=a("k1TG"),n=a("8o2o"),i=(a("q1tI"),a("7ljp")),o=a("013z"),r=(a("T0C+"),a("qKvR"),{}),c=(t="PageDescription",function(A){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),Object(i.b)("div",A)}),l={_frontmatter:r},b=o.a;function p(A){var e=A.components,a=Object(n.a)(A,["components"]);return Object(i.b)(b,Object(s.a)({},l,a,{components:e,mdxType:"MDXLayout"}),Object(i.b)(c,{mdxType:"PageDescription"}),Object(i.b)("h2",null,"Introduction"),Object(i.b)("p",null,"There might be situations where customer scenario would require sharing of tiered block storage volumes of varied IOPS to be shared across computes in different availability zones. This article leverages SSHFS to overcome this limitation using a very basic service of SSH which is availabile across operating systems flavours. This recipe is specific to IBM Cloud VPC network construct."),Object(i.b)("p",null,"Note: There currently is not NFS offering in VPC, but one can setup NFS servers and clients and manage them. In this article we are using sshfs instead of NFS to share the volume from one VSI to other VSIs in different regions."),Object(i.b)("h2",null,"Architecture"),Object(i.b)("p",null,"This recipe is based on Implementing below architecture where in block storage for VPC is mounted on virtual server based out of Dallas 1 zone. This volume is then mounted on virtual servers in zones – Dallas2 and Dallas3. So whatever data is written to Dallas1 volume is replicated to Dallas2 and Dallas3. I will take virtual server hosted in Dallas1 data center as primary server or master, where as servers hosted on Dallas2 and Dallas3 as secondary servers or Slaves."),Object(i.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"670px"}},"\n      ",Object(i.b)("span",Object(s.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"100.69444444444444%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAAMBAAAAAAAAAAAAAAAAAAECAwX/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAAB7lsok2VVAAr/xAAXEAEBAQEAAAAAAAAAAAAAAAAAEQIg/9oACAEBAAEFAqqtdf/EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQMBAT8BH//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQIBAT8BH//EABQQAQAAAAAAAAAAAAAAAAAAADD/2gAIAQEABj8CH//EABsQAAICAwEAAAAAAAAAAAAAAAABESFRcYHB/9oACAEBAAE/IVZzTNkMeBEQcKwhs//aAAwDAQACAAMAAAAQDDj9/8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAwEBPxAf/8QAFhEBAQEAAAAAAAAAAAAAAAAAASAh/9oACAECAQE/EF2P/8QAHBABAAIDAAMAAAAAAAAAAAAAAQARITFBkbHB/9oACAEBAAE/EAEQnF9SsEHk2CzfCfYNWm+rHSK3nMaSkPMwBrxRV5P/2Q==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",Object(s.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"keymanagement with openshift-1",title:"keymanagement with openshift-1",src:"/ibm-enterprise-runbooks/static/731808bd871505d4be376ad2bb8ecdf6/4d1ff/Screenshot_1.jpg",srcSet:["/ibm-enterprise-runbooks/static/731808bd871505d4be376ad2bb8ecdf6/69549/Screenshot_1.jpg 288w","/ibm-enterprise-runbooks/static/731808bd871505d4be376ad2bb8ecdf6/473e3/Screenshot_1.jpg 576w","/ibm-enterprise-runbooks/static/731808bd871505d4be376ad2bb8ecdf6/4d1ff/Screenshot_1.jpg 670w"],sizes:"(max-width: 670px) 100vw, 670px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(i.b)("h2",null,"Pre-requisites"),Object(i.b)("p",null,"To Implement this scenario one would need to establish passwordless authentication between secondary servers and primary server or master as shown in below diagram. IBM Cloud VPC comes with private key authentication mechanism by default and one can’t establish passwordless authentication that. Hence one would need to change SSH configuration from private key authentication to password based authentication. Install fuse-sshfs library on secondary servers by running below command :"),Object(i.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"825px"}},"\n      ",Object(i.b)("span",Object(s.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"57.98611111111111%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAMABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAwAEBf/EABYBAQEBAAAAAAAAAAAAAAAAAAIAAf/aAAwDAQACEAMQAAAB7hmyK2O2/8QAGRABAAMBAQAAAAAAAAAAAAAAAgABAxIR/9oACAEBAAEFAnXpI5UGVUtD0awNz//EABURAQEAAAAAAAAAAAAAAAAAAAAR/9oACAEDAQE/AVf/xAAVEQEBAAAAAAAAAAAAAAAAAAAAEv/aAAgBAgEBPwFL/8QAGxAAAgIDAQAAAAAAAAAAAAAAAREAEAISITH/2gAIAQEABj8CUexNNnle5T//xAAcEAEAAgEFAAAAAAAAAAAAAAABABFBECExkaH/2gAIAQEAAT8hsrpeSPiLjQh2EOpUpvaAX7T/2gAMAwEAAgADAAAAEJcP/8QAFxEBAQEBAAAAAAAAAAAAAAAAEQAhUf/aAAgBAwEBPxBdny//xAAYEQEBAAMAAAAAAAAAAAAAAAABABEhUf/aAAgBAgEBPxDCagdv/8QAHBABAQACAgMAAAAAAAAAAAAAAREAITFBEGHB/9oACAEBAAE/EFKePaZdaUVx4DzvARvresCioKmUCl6J8z//2Q==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",Object(s.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"keymanagement with openshift-1",title:"keymanagement with openshift-1",src:"/ibm-enterprise-runbooks/static/5fcaa20c4b919c65905a902b76f10835/91983/Screenshot_2.jpg",srcSet:["/ibm-enterprise-runbooks/static/5fcaa20c4b919c65905a902b76f10835/69549/Screenshot_2.jpg 288w","/ibm-enterprise-runbooks/static/5fcaa20c4b919c65905a902b76f10835/473e3/Screenshot_2.jpg 576w","/ibm-enterprise-runbooks/static/5fcaa20c4b919c65905a902b76f10835/91983/Screenshot_2.jpg 825w"],sizes:"(max-width: 825px) 100vw, 825px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(i.b)("p",null,"Reboot the machine once after installing fuse-sshfs as many times it throws below error during mounting:"),Object(i.b)("img",{src:"images/Screenshot_3.jpg",alt:"keymanagement with openshift-1"}))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-ibmcloud-vpc-blockstorage-index-mdx-e029333a1dee3bb814d2.js.map