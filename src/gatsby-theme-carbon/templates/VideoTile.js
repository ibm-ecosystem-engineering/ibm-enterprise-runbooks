/**
 * Copyright IBM Corp. 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useState } from 'react';
import { useStaticQuery,graphql} from "gatsby";
import {ArticleCard,Row,Column} from "gatsby-theme-carbon";

import ReactDOM from 'react-dom';

import {
    Modal
} from "carbon-components-react";

import _ from 'lodash';

const withStateManagerProps = () => ({
    className: 'video-modal',
    passiveModal:  true,
    danger:  false,
    alert:  false,
    shouldSubmitOnEnter: true,
    hasScrollingContent:false,
    modalHeading:  'Video',
    modalLabel:  'Label',
    modalAriaLabel:  'A label to be read by screen readers on the modal root node',
    secondaryButtonText: 'Close',
    selectorPrimaryFocus: '[data-modal-primary-focus]',
    size: 'lg',
    iconDescription:  'Close',
    onClick:onClick,
    onRequestClose: onRequestClose,
    onRequestSubmit: onRequestSubmit,
    onSecondarySubmit: onSecondarySubmit
});

function  onClick(event) {

    console.log("click",event);

}
function tileClose(setOpen) {

    let state = ReactDOM.unmountComponentAtNode(document.getElementById("videoContainer"));
    console.log(state);

    setOpen(false);

}

function  onRequestClose(event) { console.log("requestClose",event) }
function  onRequestSubmit(event) { console.log("requestSubmit",event) }
function  onSecondarySubmit(event) { console.log("submit",event) }

/**
 * Simple state manager for modals.
 */
const ModalStateManager = ({
                               renderLauncher: LauncherContent,
                               children: ModalContent,
                           }) => {
    const [open, setOpen] = useState(false);
    return (
        <>
            {!ModalContent || typeof document === 'undefined'
                ? null
                : ReactDOM.createPortal(
                    <ModalContent open={open} setOpen={setOpen} />,
                    document.body
                )}
            {LauncherContent && <LauncherContent open={open} setOpen={setOpen} />}
        </>
    );
};

// Create a Helper Method
function getVideos(data,tileColor,state) {

    if (_.isUndefined(state))
        return [];

    if (_.isNull(data))
        return [];

    let articles = []
    function tileClick(article, open) {

        console.log("tile clicked");
        console.log(JSON.stringify(article));

        if(!_.has(article,"snippet.resourceId.videoId")) {
            console.log("no video ID");
            return;
        }

        let embedURL =  "https://www.youtube.com/embed/"+article.snippet.resourceId.videoId;

        const vel = <>
            <iframe
                className="videotile"
                src={embedURL}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen>

            </iframe>
            </>

        ReactDOM.render(vel, document.getElementById("videoContainer"))

        open(true);
    }


    // Outer loop to create parent
    data.forEach(function(article,index){

        const subtitle = article.snippet.description ? article.snippet.description : "";
        const title = (index+1)+". "+article.snippet.title

        //Create the parent and add the children
        articles.push(

<Column colMd={4} colLg={4} noGutterMdLeft >
    <ArticleCard
        className={tileColor}
        title={title}
        author={article.author}
        subTitle = {subtitle}
        color="blue"
        actionIcon="arrowRight"
        onClick={(e) => tileClick(article,state)}

    >

        <img src={article.snippet.thumbnails.high.url} alt={article.snippet.title}></img>

    </ArticleCard>
</Column>
        );
    });

    return articles;

}

export default ({content,tileColor}) => {

    const { size, ...rest } = withStateManagerProps()

    const data = useStaticQuery(graphql`
        {
            allDataJson {
                nodes {
                    intros {
                        snippet {
                            title
                            description
                            resourceId {
                                videoId
                            }
                            thumbnails {
                                high {
                                    url
                                }
                            }
                        }
                    }
                    account {
                        snippet {
                            title
                            description
                            resourceId {
                                videoId
                            }
                            thumbnails {
                                high {
                                    url
                                }
                            }
                        }
                    }
                    iks {
                        snippet {
                            title
                            description
                            resourceId {
                                videoId
                            }
                            thumbnails {
                                high {
                                    url
                                }
                            }
                        }
                    }
                    iam {
                        snippet {
                            title
                            description
                            resourceId {
                                videoId
                            }
                            thumbnails {
                                high {
                                    url
                                }
                            }
                        }
                    }
                    foundation {
                        snippet {
                            title
                            description
                            resourceId {
                                videoId
                            }
                            thumbnails {
                                high {
                                    url
                                }
                            }
                        }
                    }
                    vm {
                        snippet {
                            title
                            description
                            resourceId {
                                videoId
                            }
                            thumbnails {
                                high {
                                    url
                                }
                            }
                        }
                    }
                    storage {
                        snippet {
                            title
                            description
                            resourceId {
                                videoId
                            }
                            thumbnails {
                                high {
                                    url
                                }
                            }
                        }
                    }
                    loadbalancer {
                        snippet {
                            title
                            description
                            resourceId {
                                videoId
                            }
                            thumbnails {
                                high {
                                    url
                                }
                            }
                        }
                    }
                    vpc {
                        snippet {
                            title
                            description
                            resourceId {
                                videoId
                            }
                            thumbnails {
                                high {
                                    url
                                }
                            }
                        }
                    }
                }
            }
        }

    `)
    return (
        <>
            <ModalStateManager
                renderLauncher={({ setOpen }) => (
                    <Row>
                        {getVideos(data.allDataJson.nodes[1][content],tileColor,setOpen)}
                    </Row>
                )}>
                {({ open, setOpen }) => (
                    <Modal
                        {...rest}
                        size={size || undefined}
                        open={open}
                        onRequestClose={() => tileClose(setOpen)}>
                        {
                            <>
                                <div id="videoContainer" className="modalContainer" >

                                </div>
                            </>
                        }
                    </Modal>
                )}
            </ModalStateManager>

        </>
    )
}
