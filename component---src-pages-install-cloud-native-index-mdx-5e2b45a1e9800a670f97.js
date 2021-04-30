(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{HE1P:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return s})),a.d(t,"default",(function(){return u}));var n,o=a("k1TG"),l=a("8o2o"),r=(a("q1tI"),a("7ljp")),i=a("013z"),s=(a("T0C+"),a("qKvR"),{}),c=(n="PageDescription",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),Object(r.b)("div",e)}),b={_frontmatter:s},p=i.a;function u(e){var t=e.components,a=Object(l.a)(e,["components"]);return Object(r.b)(p,Object(o.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)(c,{mdxType:"PageDescription"}),Object(r.b)("h3",null,Object(r.b)("strong",{parentName:"h3"},"1. Finalize the schedule & mode of delivery for the workshop")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Webex: 4 days x 2.5hours"),Object(r.b)("li",{parentName:"ul"},"Self Paced"),Object(r.b)("li",{parentName:"ul"},"In Person: 1 day x 8.5 hours")),Object(r.b)("h3",null,Object(r.b)("strong",{parentName:"h3"},"2. Identify primary mentor for the journey")),Object(r.b)("h3",null,Object(r.b)("strong",{parentName:"h3"},"3.  Collect the data required for the sessions from the participants")),Object(r.b)("p",null,Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"/ibm-enterprise-runbooks/5f7c93ea7da72473d04e461e77dbcf08/Participant_Data_Sheet.xlsx"}),"Participant Data Collection Sheet")),Object(r.b)("h3",null,Object(r.b)("strong",{parentName:"h3"},"4.  Github setup")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Create a github organization: ",Object(r.b)("strong",{parentName:"li"},"SI-Name"),"-sandbox-team-n.."),Object(r.b)("li",{parentName:"ul"},"Add all participants as members of the organization.")),Object(r.b)("h3",null,Object(r.b)("strong",{parentName:"h3"},"5. Slack Channel Setup")),Object(r.b)("p",null,"Set up a new slack channel (",Object(r.b)("strong",{parentName:"p"},"SI-Name"),"-cloudnative) and add all participants"),Object(r.b)("h3",null,Object(r.b)("strong",{parentName:"h3"},"6. IBM Cloud Setup")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Create resource group ",Object(r.b)("strong",{parentName:"p"},"sandbox-team-n..")," under the SI Account to be used for the worksop")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Create access groups ",Object(r.b)("strong",{parentName:"p"},"SANDBOX-TEAM-N..-ADMIN")," and ",Object(r.b)("strong",{parentName:"p"},"SANDBOX-TEAM-N..-USER")," and make all users part of the SANDBOX-TEAM-ONE-USER group.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Run these scripts to create access groups from iteration-zero repository"))),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),"./acp-admin.sh SANDBOX-TEAM-ONE-ADMIN sandbox-team-one\n./acp-user.sh SANDBOX-TEAM-ONE-USER sandbox-team-one us-east\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Board all users by adding them to access group SANDBOX-TEAM-N..-USER ")),Object(r.b)("h3",null,Object(r.b)("strong",{parentName:"h3"},"7. Cluster Setup")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Setup a redhat openshift cluster (sandbox-ocp43-n..) in London datacenter with 3 worker nodes (16 cores x 32 GB)")),Object(r.b)("h3",null,Object(r.b)("strong",{parentName:"h3"},"8. Cloud-Native Toolkit Setup")),Object(r.b)("p",null,"a) Install Cloud-Native toolkit onto the OCP Cluster (Follow instructions outlined in ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://cloudnativetoolkit.dev/admin/installation-existing"}),"https://cloudnativetoolkit.dev/admin/installation-existing"),")"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"https://github.com/IBM/ibm-garage-tekton-tasks/tree/master"}),"Install Tekton tasks")),Object(r.b)("li",{parentName:"ul"},"[Artifactory Post Install Setup]"," (",Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"https://cloudnativetoolkit.dev/admin/artifactory-setup"}),"https://cloudnativetoolkit.dev/admin/artifactory-setup"),")"),Object(r.b)("li",{parentName:"ul"},"[argocd Post Install Setup]"," (",Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"https://cloudnativetoolkit.dev/admin/argocd-setup"}),"https://cloudnativetoolkit.dev/admin/argocd-setup"),")"),Object(r.b)("li",{parentName:"ul"},"[Install Codeready workspaces]"," (",Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"https://cloudnativetoolkit.dev/admin/config-install#codeready-workspace-installation"}),"https://cloudnativetoolkit.dev/admin/config-install#codeready-workspace-installation"),")")),Object(r.b)("p",null,"b) Customize dashboard to include crw, github links (replace links for your cluster)"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),"igc tool-config --name sysdig --url https://us-east.monitoring.cloud.ibm.com/api/oauth/openid/IBM/0f42478cb66d4ce0b11c9168b02c5690/e0caebc1-92c0-46a5-b6d0-ef4ba28bd5ed\nigc tool-config --name logdna --url https://app.us-east.logging.cloud.ibm.com/ext/ibm-sso/38d0b85d06\nigc tool-config --name ir --url https://cloud.ibm.com/kubernetes/registry/main/start\nigc tool-config --name github --url https://github.com/ibm-workshop-team-one\nigc tool-config --name codeready --url https://codeready-codeready.workshop-ocp43-one-3b1fc50af0b2002f0241bdf5d2432efd-0000.sjc03.containers.appdomain.cloud/dashboard/\n")),Object(r.b)("p",null,"c) Customize redhat openshit to include shortcuts to all tools"),Object(r.b)("p",null,"d) Finish the sysdig dashboard setip"),Object(r.b)("h3",null,Object(r.b)("strong",{parentName:"h3"},"10. Smoke test")),Object(r.b)("p",null,"Test access control.\nAdd personal id to SANDBOX-ONE-USER access group.\nLog into IBM Cloud as the personal id and run the following test cases:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Check only the resources assigned to sandbox: 1 cluster and 2 services under sandbox-team-one resource group should be visible."),Object(r.b)("li",{parentName:"ul"},"Try creating a service. You should get an access denied error."),Object(r.b)("li",{parentName:"ul"},"Go to Billing->Usage: You should be able to view, but should not be able to change anything."),Object(r.b)("li",{parentName:"ul"},"Try creating a resource group/access group. It should get permission errors."),Object(r.b)("li",{parentName:"ul"},"Go to Classic Infrastructure. Should give access denied error."),Object(r.b)("li",{parentName:"ul"},"Reboot a worker node. Should not be a allowed operation."),Object(r.b)("li",{parentName:"ul"},"Check if sysdig instance created by Cloud-Native toolkit is collecting metrics from the resorces, and if it is not, set those up."),Object(r.b)("li",{parentName:"ul"},"Run pipelines of some starter kits and make sure they work."),Object(r.b)("li",{parentName:"ul"},"Check links from openshift and dashboard.")),Object(r.b)("h3",null,Object(r.b)("strong",{parentName:"h3"},"11. Setup completed inventory solution with continous delivery (argocd)")),Object(r.b)("h3",null,Object(r.b)("strong",{parentName:"h3"},"12. Install CP4A on the openshift cluster")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Run schematics to install CP4A on openshift."),Object(r.b)("li",{parentName:"ul"},"Add Transformation Advisor (TA) link to the dashboard and openshift shortcut.")),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),"igc tool-config --name ta --url url-for-ta\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Add shortcut to TA from openshift.")),Object(r.b)("h3",null,Object(r.b)("strong",{parentName:"h3"},"13. Database setup for Application Modernization")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Create the Db2 Service from the IBM Cloud Catalogue.For Testing and demo purpose use Lite plan. For the workshop with developers hands-on, set it up with paid plan(Flex Plan).\n",Object(r.b)("span",Object(o.a)({parentName:"li"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"733px"}}),"\n      ",Object(r.b)("span",Object(o.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"44.09722222222222%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAYAAAAywQxIAAAACXBIWXMAAAsSAAALEgHS3X78AAAB7ElEQVQoz42RzYtSURjGT3+Gk0IIOmogfoS6EdqquBHazcp19K+4MCWk6B+Idi1CCPKOKUOUxTCtZqUzmPeq1/v9/fSeo8y6Az/uex8Oz3nf52WlUgmpVAqZTAaxWAzdbhej0Qi9Xg/9fh+DwQDD4ZDq13j39g1eXLwEe/oBj55fg9W+gT37RHwEy78He/IKLJvNIpfLIZlMolKpYDweYzabYTKZQJIkzOdzLBYLXE6nmF5KkGY/8Xm6xJfvCsZXO3z9sYP024D0S8Pk6pYeqdXAu+SGrVYL/39Cwj/V0YPK6vW6MEyn02i329geVGiGAYPwPA9hGMI0LexVnb4GHMchLYJuelgrOiwnOhGS5oPx7DjxeBzNZhOarmO5XAr2+70w5dzd3WO1WkGWZXiuQwYBNvIOqsqhe64Ll2DlchmFQkEY8pFt28Zms4GiKOJ7OBzg+77452Yc3qlNhpphQ9c1QqdHuaEHViwWwUkkEmg0GgijYx581Ihqjk1jer5/0o+aZXvYqRYMy8NBP3Zs2AFtO58XWz47e4wmGWqU13avIjoZ8qMZJm6X93BsCwHXSQuCADc3fyArW9EZyaSFxy1Xq1Wcp8/R6XRgWSbW67VYimmaDxny8WVZERFYliU0Xv+luzxr17FhmC7+ARptRX3YQiHhAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(r.b)("img",Object(o.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"CreateDB2",title:"CreateDB2",src:"/ibm-enterprise-runbooks/static/a968975e20bf33b9a296e95a91b74971/de7a7/05SandBoxRunBook.png",srcSet:["/ibm-enterprise-runbooks/static/a968975e20bf33b9a296e95a91b74971/7fc1e/05SandBoxRunBook.png 288w","/ibm-enterprise-runbooks/static/a968975e20bf33b9a296e95a91b74971/a5df1/05SandBoxRunBook.png 576w","/ibm-enterprise-runbooks/static/a968975e20bf33b9a296e95a91b74971/de7a7/05SandBoxRunBook.png 733w"],sizes:"(max-width: 733px) 100vw, 733px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(r.b)("li",{parentName:"ul"},"Provide the name for the service as “PlantsDB” and create the service.  Please note the service is also provisioned in the same region as the Openshift cluster to avoid latency."),Object(r.b)("li",{parentName:"ul"},"Once you create the service, Navigate to the ",Object(r.b)("strong",{parentName:"li"},"‘Service  Credential tab’")," in the left Nav and create a new credential for the Db2 service. Capture the details as this would be needed for the application."),Object(r.b)("li",{parentName:"ul"},"Now Click ‘Manage tab’ and click ",Object(r.b)("strong",{parentName:"li"},"‘Open Console’"),"  button."),Object(r.b)("li",{parentName:"ul"},"Click on the Run option in the top left nav, which should open the SQL Editor."),Object(r.b)("li",{parentName:"ul"},"Execute the DDL Scripts to create the Database for the Plants application (Refer PlantsDB-create.sql in the box folder)."),Object(r.b)("li",{parentName:"ul"},"Execute the Insert scripts to populate data for the Plants application (Refer Populate-PlantsDB.sql in the box folder)."),Object(r.b)("li",{parentName:"ul"},"Navigate to the ",Object(r.b)("strong",{parentName:"li"},"‘connectioninfo’")," tab and select the option ‘without-sso’. Capture the Connection Details as well which is needed for the application")),Object(r.b)("h3",null,Object(r.b)("strong",{parentName:"h3"},"14. Email the Participants")),Object(r.b)("p",null,"Send an email to all participants inviting them to the sandbox journeys.\n",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"/ibm-enterprise-runbooks/88b0efb1e417967dc81882504d471c96/emailtemplate.txt"}),"Email Template")),Object(r.b)("h3",null,Object(r.b)("strong",{parentName:"h3"},"15. Skill Collection Matrix, Games")),Object(r.b)("p",null,"Setup menti templates for collecting skills of participants, fun games"),Object(r.b)("h3",null,Object(r.b)("strong",{parentName:"h3"},"16. Feedback Collection")),Object(r.b)("p",null,"Setup funreto template for collecting feedback (What went right, what can be improved, Any other feedback)"))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-install-cloud-native-index-mdx-5e2b45a1e9800a670f97.js.map