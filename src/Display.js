import { Textfit } from 'react-textfit';

const Display = ({ result }) => {
  return (
      <Textfit id="display">{result || '0'}</Textfit>
  );
}

export default Display;
