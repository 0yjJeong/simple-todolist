import { Helmet } from 'react-helmet-async';

const NotFoundPage = () => {
  return (
    <>
      <Helmet>
        <title>Not found</title>
        <meta name='description' content='Not found' />
      </Helmet>
      Not found
    </>
  );
};

export default NotFoundPage;
