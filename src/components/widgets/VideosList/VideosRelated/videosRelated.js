import React from 'react';
import styles from '../videosList.css';

import VideoListTemplate from '../videosListTemplate';

const videosRelated = (props) => (
    <div className={styles.relatedWrapper}>
        <VideoListTemplate
            data={props.data}
            teams={props.teams}
        />
    </div>
)

export default videosRelated;