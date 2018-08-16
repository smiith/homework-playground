export const apiConversion = (payload) => {
	return fetch('http://localhost:3000/api/converter', {
		method: 'POST',
		body: JSON.stringify(payload),
		headers: {
			'Content-Type': 'application/json'
		}
	}).then(res => res.json())
}
