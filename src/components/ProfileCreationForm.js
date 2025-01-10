// ProfileCreationForm.js (React Native code)
import React, { useState } from 'react';
import { View, TextInput, Button, Text, Image, TouchableOpacity } from 'react-native';

const ProfileCreationForm = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [location, setLocation] = useState('');
    const [interests, setInterests] = useState('');
    const [profilePic, setProfilePic] = useState(null);
    const [message, setMessage] = useState('');

    const handleSubmit = () => {
        if (!name || !age || !gender) {
            setMessage("Name, Age, and Gender are required.");
            return;
        }
        // Simulating a successful profile creation
        setMessage("Profile created successfully!");
    };

    const handleImageUpload = () => {
        // Here you'd integrate an image picker, but we'll simulate an image upload
        setProfilePic("path/to/uploaded/image.jpg");
    };

    return (
        <View>
            <TextInput placeholder="Name" value={name} onChangeText={setName} />
            <TextInput placeholder="Age" value={age} onChangeText={setAge} keyboardType="numeric" />
            <TextInput placeholder="Gender" value={gender} onChangeText={setGender} />
            <TextInput placeholder="Location" value={location} onChangeText={setLocation} />
            <TextInput placeholder="Interests" value={interests} onChangeText={setInterests} />
            <TouchableOpacity onPress={handleImageUpload}>
                <Text>Upload Profile Picture</Text>
            </TouchableOpacity>
            {profilePic && <Image source={{ uri: profilePic }} style={{ width: 100, height: 100 }} />}
            <Button title="Submit" onPress={handleSubmit} />
            {message && <Text>{message}</Text>}
        </View>
    );
};

export default ProfileCreationForm;
