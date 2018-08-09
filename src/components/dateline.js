import React from 'react'
import Moment from 'moment';

export default ({date}) => {
    return (
        <p className="dateline">
            {new Moment(date).format('Do MMMM Y')}
        </p>
    );
}
