import React from 'react';
import styled from 'styled-components/macro';

import { MARKET_DATA, SPORTS_STORIES } from '../../data';

import MarketCard from '../MarketCard';
import SectionTitle from '../SectionTitle';
import MiniStory from '../MiniStory';
import { COLORS, QUERIES } from '../../constants';

const SpecialtyStoryGrid = () => {
  return (
    <Wrapper>
      <MarketsSection>
        <SectionTitle
          cornerLink={{
            href: '/markets',
            content: 'Visit Markets data »',
          }}
        >
          Markets
        </SectionTitle>
        <MarketCards>
          {MARKET_DATA.map((data) => (
            <MarketCard key={data.tickerSymbol} {...data} />
          ))}
        </MarketCards>
      </MarketsSection>
      <SportsSection>
        <SectionTitle
          cornerLink={{
            href: '/sports',
            content: 'Visit Sports page »',
          }}
        >
          Sports
        </SectionTitle>
        <SportsStories>
          {SPORTS_STORIES.map((data) => (
            <MiniStory key={data.id} {...data} />
          ))}
        </SportsStories>
      </SportsSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-areas:
    'market-stories'
    'sports-stories';
  gap: 48px;

  @media ${QUERIES.tabletAndUp} {
    gap: 64px;
  }

  @media ${QUERIES.laptopAndUp} {
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
      'market-stories sports-stories';
    gap: 0;
  }
`;

const MarketsSection = styled.section`
  grid-area: market-stories;

  @media ${QUERIES.laptopAndUp} {
    border-right: 1px solid ${COLORS.gray[300]};
    padding-right: 16px;
    margin-right: 16px;
  }
`;

const MarketCards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 16px;
`;

const SportsSection = styled.section`
  grid-area: sports-stories;

  @media ${QUERIES.tabletAndUp} {
    overflow-x: auto;
  }
`;

const SportsStories = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 16px;

  @media ${QUERIES.tabletAndUp} {
    display: flex;

    > * {
      min-width: 220px;
    }
  }
`;

export default SpecialtyStoryGrid;
