//second commit test!
import React, { useState, useEffect } from 'react';
import {
	Button,
	Image,
	View,
	StyleSheet,
	ActivityIndicator,
	Text,
	FlatList
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';
import * as OldFS from 'expo-file-system/legacy';
// import Ionicons from '@expo/vector-icons/Ionicons'; I should find a way to fix this

const imgDir = FileSystem.Directory + 'images/';

const ensureDirExists = async () => {
	const dirInfo = await OldFS.getInfoAsync(imgDir);
	if (!dirInfo.exists) {
		await OldFS.makeDirectoryAsync(imgDir, { intermediates: true });
	}
};

export default function App() {
	const [uploading, setUploading] = useState(false);
	const [images, setImages] = useState<any[]>([]);

	// Load images on startup
	useEffect(() => {
		loadImages();
	}, []);

	// Load images from file system
	const loadImages = async () => {
		await ensureDirExists();
		const files = await OldFS.readDirectoryAsync(imgDir);
		if (files.length > 0) {
			setImages(files.map((f) => imgDir + f));
		}
	};

	// Select image from library or camera
	const selectImage = async (useLibrary: boolean) => {
		let result;
		const options: ImagePicker.ImagePickerOptions = {
			mediaTypes: ['images'],
			allowsEditing: true,
			aspect: [4, 3],
			quality: 0.75
		};

		if (useLibrary) {
			result = await ImagePicker.launchImageLibraryAsync(options);
		} else {
			await ImagePicker.requestCameraPermissionsAsync();
			result = await ImagePicker.launchCameraAsync(options);
		}

		// Save image if not cancelled
		if (!result.canceled) {
			saveImage(result.assets[0].uri);
		}
	};
// Save image to file system
const saveImage = async (uri: string) => {
	await ensureDirExists();
	const filename = new Date().getTime() + '.jpeg';
	const dest = imgDir + filename;
	await OldFS.copyAsync({ from: uri, to: dest });
	setImages([...images, dest]);
};

// Delete image from file system
const deleteImage = async (uri: string) => {
	await OldFS.deleteAsync(uri);
	setImages(images.filter((i) => i !== uri));
};

// Render image list item
const renderItem = ({ item }: { item: any }) => {
	const filename = item.split('/').pop();
	return (
		<View style={{ flexDirection: 'row', margin: 1, alignItems: 'center', gap: 5 }}>
			<Image style={{ width: 80, height: 80 }} source={{ uri: item }} />
			<Text style={{ flex: 1 }}>{filename}</Text>
			<Button title="Delete" onPress={() => deleteImage(item)} />
		</View>
	);
};

return (
	<View style={{ flex: 1, gap: 20 }}>
		<View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginVertical: 20 }}>
			<Button title="Photo Library" onPress={() => selectImage(true)} />
			<Button title="Capture Image" onPress={() => selectImage(false)} />
		</View>

		<Text style={{ textAlign: 'center', fontSize: 20, fontWeight: '500' }}>My Images</Text>
		<FlatList data={images} renderItem={renderItem} />

		{uploading && (
			<View
				style={[
					StyleSheet.absoluteFill,
					{
						backgroundColor: 'rgba(0,0,0,0.4)',
						alignItems: 'center',
						justifyContent: 'center'
					}
				]}
			>
				<ActivityIndicator color="#fff" animating size="large" />
			</View>
		)}
	</View>
);

}