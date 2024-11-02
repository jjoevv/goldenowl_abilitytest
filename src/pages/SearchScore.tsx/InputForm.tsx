import React from 'react';

interface InputFormProps {
    input: string;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const InputForm: React.FC<InputFormProps> = ({ input, handleChange, handleSubmit }) => (
    <form onSubmit={handleSubmit} className="flex flex-col mb-5 w-full bg-white p-5  pt-10 rounded-lg">
        <h2 className="mb-4 text-lg font-semibold">User Registration</h2>
        <label htmlFor="registrationNumber" className="mb-2 text-sm font-medium">Registration Number:</label>
        <div className='d-flex'>
            <input
                type="text"
                id="registrationNumber"
                value={input}
                onChange={handleChange}
                required
                placeholder='Enter registration number'
                className="p-2 inset-y-0  border border-gray-300 rounded-md md:w-80 md:w-60 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
                type="submit"
                className="px-5 py-2 mx-2 bg-black text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
                Submit
            </button>
        </div>
    </form>
);

export default InputForm;
