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
    className: 'some-class',
    passiveModal:  false,
    danger:  false,
    alert:  false,
    shouldSubmitOnEnter: false,
    hasScrollingContent:false,
    modalHeading:  'Modal heading',
    modalLabel:  'Label',
    modalAriaLabel:  'A label to be read by screen readers on the modal root node',
    primaryButtonText:  'Primary Button',
    secondaryButtonText: 'Secondary Button',
    selectorPrimaryFocus: '[data-modal-primary-focus]',
    size: 'lg',
    iconDescription:  'Close',
    onBlur: onBlur,
    onClick:onClick,
    onFocus: onFocus,
    onRequestClose: onRequestClose,
    onRequestSubmit: onRequestSubmit,
    onSecondarySubmit: onSecondarySubmit,
    videoURL: ""
});

function  onBlur(event) { console.log(event) }
function  onClick(event) { console.log(event) }
function  onFocus(event) { console.log(event) }
function  onRequestClose(event) { console.log(event) }
function  onRequestSubmit(event) { console.log(event) }
function  onSecondarySubmit(event) { console.log(event) }

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
function getVideos(data,tileColor,rest) {

    if (_.isUndefined(rest))
        return [];

    if (_.isNull(data))
        return [];

    let articles = []

    function tileClick(rest, article) {
        //alert(JSON.stringify(rest)+ " " +JSON.stringify(article));
        rest.open = true;
    }

    // Outer loop to create parent
    data.forEach(function(article,index){

        const subtitle = article.subtitle ? article.subtitle : "";

        let rest = {onClick: tileClick(article,rest)}

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
                    {...rest}
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
                    <Button onClick={() => setOpen(true)}>Launch modal</Button>
                )}>
                {({ open, setOpen }) => (
                    <Modal
                        {...rest}
                        size={size || undefined}
                        open={open}
                        onRequestClose={() => setOpen(false)}>
                        {
                            <>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                                    id accumsan augue. Phasellus consequat augue vitae tellus
                                    tincidunt posuere. Curabitur justo urna, consectetur vel elit
                                    iaculis, ultrices condimentum risus. Nulla facilisi. Etiam
                                    venenatis molestie tellus. Quisque consectetur non risus eu
                                    rutrum.{' '}
                                </p>
                                <iframe width="560" height="315" src={rest.videoURL}
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen></iframe>
                            </>
                        }
                    </Modal>
                )}
            </ModalStateManager>

            <Row>
                {getVideos(data.allDataJson.nodes[1][content],tileColor,rest)}
            </Row>
        </>
    )
}
