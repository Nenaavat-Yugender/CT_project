import { useState } from 'react';
import { registerUser } from '../services/api';
import { useAuth } from '../context/AuthContext';

const Signup = () => {
    const [form, setForm] = useState({ name: '', email: '', password: '' });
    const { login } = useAuth(); //  Use AuthContext

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await registerUser(form);
            window.location.href = '/login';
        } catch (err) {
            alert('Signup failed');
        }
    };

    return (
        <div className="bg-gray-900 text-white min-h-screen flex items-center justify-center">
            <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold mb-4 text-center">Sign Up</h2>
                <input type="text" placeholder="Name" value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full mb-3 p-2 rounded bg-gray-700 text-white border border-gray-600" required />
                <input type="email" placeholder="Email" value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full mb-3 p-2 rounded bg-gray-700 text-white border border-gray-600" required />
                <input type="password" placeholder="Password" value={form.password}
                    onChange={(e) => setForm({ ...form, password: e.target.value })}
                    className="w-full mb-4 p-2 rounded bg-gray-700 text-white border border-gray-600" required />
                <p className="text-sm text-gray-400 text-center ">
                    Already have an account?{' '}
                    <span
                        className="text-blue-400 hover:underline cursor-pointer"
                        onClick={() => window.location.href = '/login'}
                    >
                        Login
                    </span>
                </p>
                <button className="w-full bg-green-600 py-2 rounded text-white hover:bg-green-700">Register</button>
            </form>
        </div>
    );
};

export default Signup;
