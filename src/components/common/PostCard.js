import {
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle
} from "@ionic/react";

import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import { Tags } from "@tryghost/helpers-gatsby";
import { readingTime as readingTimeHelper } from "@tryghost/helpers";

const PostCard = ({ post }) => {
    const url = `/${post.slug}/`;
    const readingTime = readingTimeHelper(post);

    return (
        <Link to={url} className="post-card">
            <IonCard>
                <IonCardHeader className="post-card-header">
                    {post.feature_image && (
                        <div
                            className="post-card-image"
                            style={{
                                backgroundImage: `url(${post.feature_image})`
                            }}
                        />
                    )}
                    {post.tags && (
                        <IonCardSubtitle className="post-card-tags">
                            {" "}
                            <Tags
                                post={post}
                                visibility="public"
                                autolink={false}
                            />
                        </IonCardSubtitle>
                    )}
                    {post.featured && <span>Featured</span>}
                    {post.title !== `(Untitled)` ? (
                        <IonCardTitle className="post-card-title">
                            {post.title}
                        </IonCardTitle>
                    ) : (
                        ""
                    )}
                </IonCardHeader>
                {post.excerpt !== null ? (
                    <IonCardContent>
                        <section className="post-card-excerpt">
                            {post.excerpt}
                        </section>
                    </IonCardContent>
                ) : (
                    ""
                )}
            </IonCard>
        </Link>
    );
};

PostCard.propTypes = {
    post: PropTypes.shape({
        title: PropTypes.string.isRequired,
        feature_image: PropTypes.string,
        featured: PropTypes.bool,
        tags: PropTypes.arrayOf(
            PropTypes.shape({
                name: PropTypes.string
            })
        ),
        excerpt: PropTypes.string.isRequired,
        primary_author: PropTypes.shape({
            name: PropTypes.string.isRequired,
            profile_image: PropTypes.string
        }).isRequired
    }).isRequired
};

export default PostCard;
