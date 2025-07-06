// src/pages/Settings.jsx
import { useContext, useState } from 'react';
import { UserContext } from '../context/UserContext';

function Settings() {
  const { user, updateUser } = useContext(UserContext);
  const [formData, setFormData] = useState({ name: user.name, email: user.email });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUser(formData);
    alert("Profile updated!");
  };

  return (
    <div style={{ padding: "1rem" }}>
      <h2>Settings</h2>
      <form onSubmit={handleSubmit}>
        <label>Name: </label><br />
        <input type="text" name="name" value={formData.name} onChange={handleChange} /><br /><br />
        <label>Email: </label><br />
        <input type="email" name="email" value={formData.email} onChange={handleChange} /><br /><br />
        <button type="submit">Update Profile</button>
      </form>
    </div>
  );
}
export default Settings;
