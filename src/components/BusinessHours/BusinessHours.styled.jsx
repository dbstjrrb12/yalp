import styled from 'styled-components';
import { getHexaColor } from 'styles/color';
import { getFontWeight } from 'utils';

export const TimeInfoList = styled.ul`
  padding: 0;
`;
export const TimeInfoItem = styled.li`
  font-weight: 600;
  list-style: none;
  line-height: 24px;

  & > span {
    display: inline-block;
    padding-right: 16px;
    margin-top: 8px;

    &:first-child {
      margin-top: 0;
      min-width: 48px;
      font-weight: ${getFontWeight};
    }

    &[data-open='Open'] {
      color: ${getHexaColor('green', 500)};
    }

    &[data-open='Closed'] {
      color: ${getHexaColor('primary', 500)};
    }
  }
`;
