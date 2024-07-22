import { Image, StyleSheet, Platform, SafeAreaView, ScrollView, Button } from 'react-native';
import RazorpayCheckout from 'react-native-razorpay';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
	return (
		<SafeAreaView>
			<ScrollView>
				<Button title="Pay with Curlec (RM5,000)" onPress={() => {
					var options = {
						description: 'Muscle Gaining Package',
						image: 'https://i.imgur.com/3g7nmJC.png',
						currency: 'MYR',
						key: 'rzp_test_4Qc5BdcMhoHAJP', // Your api key
						amount: '5000',
						name: 'foo',
						prefill: {
							email: 'adrian@fitnessmeal.com',
							contact: '60173628265',
							name: 'Adrian',
						},
						theme: { color: '#F37254' },
					};
					RazorpayCheckout.open(options)
						.then(data => {
							// handle success
							alert(`Success: ${data.razorpay_payment_id}`);
						})
						.catch(error => {
							// handle failure
							alert(`Error: ${error.code} | ${error.description}`);
						});
				}} />
			</ScrollView>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	titleContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 8,
	},
	stepContainer: {
		gap: 8,
		marginBottom: 8,
	},
	reactLogo: {
		height: 178,
		width: 290,
		bottom: 0,
		left: 0,
		position: 'absolute',
	},
});
