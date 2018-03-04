import React from 'react';

import TeamNfo from '../../Elements/teamNfo';
import PostData from '../../Elements/postData';

const header = (props) => {

    const teamNfo = (team) => {
        return team ? (
            <TeamNfo team={team}/>
        ):null;
    }

    const postData = ( date, author ) => (
        <PostData data={{date,author}}/>
    )
    

    return(
        <div>
            {teamNfo(props.teamData)}
            {postData(props.date, props.author)}
        </div>
    )
}

export default header;