import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom'; 

const Login = () => {
    const [form, setForm] = useState({ email: '', password: '' });
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await login(form);
        } catch (err) {
            alert('Login failed');
        }
    };

    return (
        <div className="bg-gray-900 text-white min-h-screen flex items-center justify-center">
            <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
                <input type="email" placeholder="Email" value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full mb-3 p-2 rounded bg-gray-700 text-white border border-gray-600" required />
                <input type="password" placeholder="Password" value={form.password}
                    onChange={(e) => setForm({ ...form, password: e.target.value })}
                    className="w-full mb-3 p-2 rounded bg-gray-700 text-white border border-gray-600" required />
                <p className="text-sm text-gray-400 text-center ">
                    Don&apos;t have an account?{' '}
                    <span
                        className="text-blue-400 hover:underline cursor-pointer"
                        onClick={() => navigate('/signup')}
                    >
                        Sign up
                    </span>
                </p>


                <button className="w-full bg-green-600 py-2 rounded text-white hover:bg-green-700">Login</button>
            </form>
        </div>
    );
};

export default Login;
