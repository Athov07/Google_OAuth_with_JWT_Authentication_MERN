const GoogleButton = () => {
  const handleGoogleLogin = () => {
    // Redirect to backend Google OAuth
    window.location.href = "http://localhost:5000/auth/google";
  };

  return (
    <button
      onClick={handleGoogleLogin}
      className="flex items-center gap-2 px-4 w-full bg-gray-600 text-white py-2 rounded-lg hover:bg-gray-400"
    >
      <img width="38" height="38" src="https://img.icons8.com/color/48/google-logo.png" alt="google-logo"/>  Continue with Google
    </button>
  );
};

export default GoogleButton;