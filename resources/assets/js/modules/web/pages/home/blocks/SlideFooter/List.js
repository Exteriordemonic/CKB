import styled from 'styled-components'

import Ul from '../../elements/Ul.js'

const List = styled(Ul)`
  display: grid;
  width: 40vw;
  grid-template-columns: repeat(3, 1fr);
`;

export default List;