import Dummy from '../components/Dummy';
import useFetchData from '../hooks/useFetchData';

const Sample = (): React.JSX.Element => {
  const { message, isError } = useFetchData();

  if (isError) {
    return (<h4>Error</h4>);
  }

  if (message === null) {
    return (<h4>loading...</h4>);
  }

  return (
    <div>
      <Dummy message={message} />
    </div>
  );
};

export default Sample;
