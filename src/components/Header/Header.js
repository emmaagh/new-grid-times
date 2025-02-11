import React from 'react';
import styled from 'styled-components/macro';
import { Menu, Search, User } from 'react-feather';

import { QUERIES } from '../../constants';

import MaxWidthWrapper from '../MaxWidthWrapper';
import Logo from '../Logo';
import Button from '../Button';

const Header = () => {
  return (
    <header>
      <MobileHeader>
        <SuperHeader>
          <Row>
            <ActionGroup>
              <button>
                <Search size={24} />
              </button>
              <button>
                <Menu size={24} />
              </button>
            </ActionGroup>
            <ActionGroup>
              <button>
                <User size={24} />
              </button>
            </ActionGroup>
          </Row>
        </SuperHeader>
        <MainHeader>
          <Logo />
        </MainHeader>
      </MobileHeader>
      <DesktopHeader>
        <DesktopRow>
          <ActionGroup>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </ActionGroup>
          <Logo />
          <SubscribeOptions>
            <Button>SUBSCRIBE</Button>
            <LogIn>Already a subscriber?</LogIn>
          </SubscribeOptions>
        </DesktopRow>
      </DesktopHeader>
    </header>
  );
};

const MobileHeader = styled.div`
  @media ${QUERIES.laptopAndUp} {
    display: none;
  }
`;

const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;
`;

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 24px;

  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
  svg {
    display: block;
  }

  @media ${QUERIES.laptopAndUp} {
    flex-basis: 145px;
  }
`;

const MainHeader = styled(MaxWidthWrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 48px;

  @media ${QUERIES.tabletAndUp} {
    margin-top: 48px;
    margin-bottom: 72px;
  }
`;

const DesktopHeader = styled.div`
  display: none;

  @media ${QUERIES.laptopAndUp} {
    display: block;
    margin-top: 16px;
    margin-bottom: 81px;
  }
`;

const DesktopRow = styled(MaxWidthWrapper)`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 1fr auto 1fr;
`;

const SubscribeOptions = styled.div`
  justify-self: end;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
  gap: 8px;
`;

const LogIn = styled.a`
  font-style: italic;
  font-size: 0.875rem;
  text-decoration: underline;
  color: var(--color-gray-900);
`;

export default Header;
