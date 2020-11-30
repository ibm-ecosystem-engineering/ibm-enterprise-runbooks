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
    Modal,
    Button,
    TextInput,
} from "carbon-components-react";

import { settings } from 'carbon-components';

import _ from 'lodash';

const { prefix } = settings;

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
    onSecondarySubmit: onSecondarySubmit,
    videoURL: ""
});

function  onClick(event) { console.log("click",event) }
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

        console.log("title clicked");

        console.log(JSON.stringify(article));
        console.log(JSON.stringify(state));

        open(true);
    }

    // Outer loop to create parent
    data.forEach(function(article,index){

        const subtitle = article.subtitle ? article.subtitle : "";

        //Create the parent and add the children
        articles.push(

            <Column colMd={4} colLg={4} noGutterMdLeft >
                <ArticleCard
                    className={tileColor}
                    title={article.title}
                    author={article.author}
                    subTitle = {subtitle}
                    color={article.color}
                    actionIcon="arrowRight"
                    onClick={(e) => tileClick(article,state)}
                >
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
                    infra {
                        author
                        color
                        href
                        language
                        subtitle
                        title
                    }
                    foundation {
                        author
                        color
                        href
                        language
                        subtitle
                        title
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
                        onRequestClose={() => setOpen(false)}>
                        {
                            <>
                                <iframe width="100%" height="315" src="https://www.youtube.com/embed/EVB3LdYQTMM"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen></iframe>
                            </>
                        }
                    </Modal>
                )}
            </ModalStateManager>


        </>
    )
}
