const LoadingPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="flex flex-col items-center">
        <div className="loader mb-4"></div>
        <p className="text-white text-lg">Please wait...</p>
      </div>
    </div>
  );
};

export default LoadingPage;