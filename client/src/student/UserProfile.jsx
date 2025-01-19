import React, { useEffect, useState } from 'react';
import { useLoadUserQuery, useUpdateUserMutation } from '../featuers/api/authApi';

const UserProfile = () => {
  const { data, isError, isLoading,refetch } = useLoadUserQuery();
  const [updateUser, { data: updateData, isLoading: updateLoading,isSuccess:updateSucess, isError: updateIsError, error: updateError }] = useUpdateUserMutation();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [previewImage, setPreviewImage] = useState('');
  const [name, setName] = useState('');
  
  const openModal = () => {
    setName(data?.name || '');
    setSelectedImage(null); // Reset selected image
    setPreviewImage(data?.profilePhoto || '');
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedImage(file);
      setPreviewImage(URL.createObjectURL(file));
    }
  };

  const handleSaveChanges = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', name);

    if (selectedImage) {
      formData.append('profilePhoto', selectedImage);
    }

    try {
      await updateUser(formData).unwrap();
      closeModal();
      alert('Profile updated successfully!');
    } catch (error) {
      console.error('Error updating profile:', error);
      alert('Failed to update profile. Please try again.');
    }
  };

  useEffect(() => {
    if (updateIsError) {
      alert(updateError?.data?.message || 'An error occurred while updating the profile.');
    }
    if(updateSucess){
      alert("profile added sucess")
      refetch()
    }
  }, [updateIsError, updateError,updateSucess]);

  if (isLoading) {
    return <div className="text-center py-16">Loading user data...</div>;
  }

  if (isError) {
    return <div className="text-center py-16 text-red-500">Failed to load user data. Please try again.</div>;
  }

  const user = data || { name: '', email: '', photourl: '' };
 console.log(user.profilePhoto)
  return (
    <div className="py-16 px-4 bg-gray-100">
      {/* User Profile Section */}
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <div className="flex items-center space-x-4 mb-8">
          <img
            src={user.photourl || 'https://via.placeholder.com/150'}
            alt="User Profile"
            className="w-24 h-24 rounded-full border"
          />
          <div>
            <h2 className="text-3xl font-semibold text-gray-800">{user.name}</h2>
            <p className="text-gray-600">{user.email}</p>
            <p className="text-gray-600">Role: Student</p>
          </div>
          <button
            onClick={openModal}
            className="ml-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Edit Profile
          </button>
        </div>
      </div>

      {/* Modal for Editing Profile */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-600 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-md max-w-lg w-full">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Edit Profile</h3>
            <form onSubmit={handleSaveChanges}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="profilePicture" className="block text-sm font-medium text-gray-700">
                  Profile Picture
                </label>
                <input
                  type="file"
                  id="profilePicture"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="w-full px-4 py-2 mt-1 border rounded-md"
                />
                {previewImage && (
                  <div className="mt-4">
                    <img
                      src={previewImage}
                      alt="Selected Profile"
                      className="w-24 h-24 rounded-full border"
                    />
                  </div>
                )}
              </div>

              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={closeModal}
                  className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                  disabled={updateLoading}
                >
                  {updateLoading ? 'Saving...' : 'Save Changes'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
