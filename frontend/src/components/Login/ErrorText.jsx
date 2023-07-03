const ErrorText = ({ message }) => {
    return (
      <div className="mb-4 text-red-500">
        <p>{message}</p>
      </div>
    );
};

export default ErrorText;