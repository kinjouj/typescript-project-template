import { useEffect, useState } from 'react';

const Sample = (): React.JSX.Element => {
  const [message, setMessage] = useState<string | null>(null);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    fetch('/test.txt').then((res) => {
      if (!res.ok) {
        return;
      }

      res.text().then((data) => {
        setTimeout(() => {
          setMessage(data);
          setIsError(false);
        }, 1000);
      }).catch(() => {
        setMessage(null);
        setIsError(true);
      });
    }).catch(() => {
      setMessage(null);
      setIsError(true);
    });
  });

  if (isError) {
    return (<h4>Error</h4>);
  }

  if (message === null) {
    return (<h4>Not Found</h4>);
  }

  return (
    <div>
      <h1>{message}</h1>
    </div>
  );
};

export default Sample;
