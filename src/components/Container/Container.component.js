import styled from '@emotion/styled';

const Container = styled('div')`
  margin-top: ${props => props.mt};
  margin-bottom: ${props => props.mb};
`;

Container.defaultProps = {
  mt: 0,
  mb: 0,
};

export default Container;
