import { StyleSheet, SafeAreaView, ScrollView, Button, TextInput, Text } from 'react-native';
import RazorpayCheckout from 'react-native-razorpay';

import { useState } from 'react';

export default function HomeScreen() {
	const [amount, setAmount] = useState('50');

	return (
		<SafeAreaView style={{ flex: 1 }}>
			<ScrollView style={{ flex: 1 }}>
				<Text>Amount</Text>
				<TextInput value={amount} onChangeText={setAmount} style={{ marginBottom: 12 }} />
				<Button title="Pay with Curlec" onPress={() => {
					var options = {
						description: 'Muscle Gaining Package',
						image: 'https://i.imgur.com/3g7nmJC.png',
						currency: 'MYR',
						key: 'rzp_test_4Qc5BdcMhoHAJP', // Your api key
						amount: parseFloat(amount) * 100, // exclude decimal, if 5000 means 50.00
						name: 'FitnessMeal',
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
});
