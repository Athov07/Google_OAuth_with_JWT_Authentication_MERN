import GoogleButton from "../components/GoogleButton";

const AuthPage = () => {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="bg-white p-16 rounded-xl shadow-2xl w-96 text-center">
        <h2 className="text-2xl font-bold mb-4">Login / Register</h2>
        <GoogleButton />
      </div>
    </div>
  );
};

export default AuthPage;