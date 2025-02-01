import { useState } from "react";

const LoginForm = () => {
  const [loginData, setLoginData] = useState({
    username: "",
    password: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Login Data:", loginData);
  };

  return (
    <form onSubmit={handleLogin} className="flex flex-col w-full  gap-6">
      {/* Left Column */}
      <div className="w-full  flex flex-col gap-6">
        <div>
          <label htmlFor="username" className="block text-lg font-medium text-custom-purple-dark mb-2">
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={loginData.username}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-custom-purple-dark focus:border-custom-purple-dark"
            placeholder="Enter your username"
          />
        </div>
        
        <div>
          <label htmlFor="password" className="block text-lg font-medium text-custom-purple-dark mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={loginData.password}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-custom-purple-dark focus:border-custom-purple-dark"
            placeholder="Enter your password"
          />
        </div>
      </div>
      
        <div>
          <button
            type="submit"
            className="w-full p-3 bg-custom-purple-dark text-white font-medium rounded-md shadow-sm hover:bg-custom-purple focus:outline-none focus:ring-2 focus:ring-custom-purple-dark focus:ring-offset-2"
          >
            Login
          </button>
        </div>
    </form>
  );
};

export default LoginForm;
