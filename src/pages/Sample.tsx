import { useOutletContext } from 'react-router-dom';
import type { DataOutletType } from '../types/outlet-types';

const Sample = (): React.JSX.Element => {
  const { data } = useOutletContext<DataOutletType>();

  return (
    <div>
      <h1>{data.message}</h1>
    </div>
  );
};

export default Sample;
