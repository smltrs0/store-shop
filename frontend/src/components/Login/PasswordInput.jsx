const PasswordInput = ({ value, onChange }) => {
    return (
      <div className="mb-6">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="password"
        >
          Contraseña
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="password"
          type="password"
          name="password"
          placeholder="Ingresa tu contraseña"
          value={value}
          onChange={onChange}
        />
      </div>
    );
};
  
export default PasswordInput;