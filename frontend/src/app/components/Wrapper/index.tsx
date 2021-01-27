/**
 *
 * ContentWrapper
 *
 */
import React, { memo } from 'react';
import styled from 'styled-components/macro';

interface Props {
  children: React.ReactNode[];
}

export const Wrapper = memo(({ children }: Props) => {
  return <Div>{children}</Div>;
});

const Div = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  min-width: 100vw;
  min-height: calc(100vh - 80px);
  //overflow: auto;
  background: bottom right no-repeat #121212
    url('assets/images/desktop-content-background.svg');
  @media only screen and (max-width: 1100px) {
    min-height: calc(100vh - 55px);
  }
`;
