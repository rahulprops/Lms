const RequireAdmin = ({ children }) => {
    const isAdmin = true; // Replace with your actual admin authentication logic
  
    if (!isAdmin) {
      return <Navigate to="/login" />;
    }
  
    return children;
  };
  export default RequireAdmin;