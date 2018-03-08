import React from 'react';

import NewsSlider from '../../../widgets/NewsSlider/slider';
import NewsList from '../../../widgets/NewsList/newsList';

const NewsMain = () => (
    <div>
        <NewsSlider
            type="featured"
            settings={{dots:true}}
            start={10}
            amount={5}
        />
        <NewsList
            type="cardMain"
            loadMore={true}
            start={4}
            amount={4}
        />
    </div>
)

export default NewsMain;
