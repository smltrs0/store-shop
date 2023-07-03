const EmailInput = ({ value, onChange }) => {
    return (
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="email"
        >
          Email
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="email"
          type="email"
          placeholder="Ingresa tu email"
          value={value}
          onChange={onChange}
        />
      </div>
    );
};
  
export default EmailInput;