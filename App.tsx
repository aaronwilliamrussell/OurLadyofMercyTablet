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

const imgDir = OldFS.documentDirectory + 'images/'

const ensureDirExists = async () => {
	console.log("Hold on, just testing something:" + imgDir);
	console.log ("Ok.. I'm here..at the directory...I sure hope there *is* a directory!");
	const dirInfo = await OldFS.getInfoAsync(imgDir);
	console.log ("here's the info on the directory:" + dirInfo);
	if (!dirInfo.exists || !dirInfo.isDirectory) {
		console.log("Hey, this directory doesn't exist. I'll try my best to make it..")
		await OldFS.makeDirectoryAsync(imgDir, { intermediates: true });
		console.log("Directory made:" + imgDir);
	}
	else {
		console.log ("This directory *does* exist! It's called" + imgDir);
	}
};

export default function App() {
	const [uploading, setUploading] = useState(false);
	const [images, setImages] = useState<any[]>([]);
	console.log("App Deployed");

	// Load images on startup
	useEffect(() => {
		loadImages();
	}, []);

	// Load images from file system
	const loadImages = async () => {
		console.log ("hey there. I'm going to try to load images...maybe....");
		await ensureDirExists();
		const files = await OldFS.readDirectoryAsync(imgDir);
		if (files.length > 0) {
			setImages(files.map((f) => imgDir + f));
			console.log("images are loaded");
		}
		else {
			console.log ("images were NOT loaded. Is ensureDirExists working???");
		}
	};

	// Select image from library or camera
	const selectImage = async (useLibrary: boolean) => {
		console.log("button pushed");
		let result;
		const options: ImagePicker.ImagePickerOptions = {
			mediaTypes: ['images'],
			allowsEditing: false,
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
			console.log("Result was not canceled...but is it displaying????");
		}
		else {
			console.log("nothing happened!");
		}
	};
// Save image to file system
const saveImage = async (uri: string) => {
	await ensureDirExists();
	const filename = new Date().getTime() + '.jpeg';
	console.log("This should be the filename:" + filename);
	const dest = imgDir + filename;
	await OldFS.copyAsync({ from: uri, to: dest });
	setImages([...images, dest]);
	console.log("Image saved!");
};

// Delete image from file system
const deleteImage = async (uri: string) => {
	await OldFS.deleteAsync(uri);
	setImages(images.filter((i) => i !== uri));
};

// Render image list item
const renderItem = ({ item }: { item: any }) => {
	const filename = item.split('/').pop();
	console.log(filename);
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