import React from 'react'
import Moment from 'moment';
import styled from 'styled-components'

const StyledParagraph = styled.p`
    font-size: 12px
    font-weight: bold
    text-transform: uppercase
`;

export default ({date}) => {
    return (
        <StyledParagraph className="dateline">
            {new Moment(date).format('Do MMMM Y')}
        </StyledParagraph>
    );
}
