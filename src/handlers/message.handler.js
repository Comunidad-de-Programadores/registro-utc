const { request, response } = require('express');

exports.HTTP_response = (
	req = request,
	res = response,
	status = 200,
	message,
	data,
	success,
) => {
	logRequestInfo(req, message, data, success);
	res.status(status).send({
		success,
		message,
		data,
	});
};

const logRequestInfo = (req = request, message = '', data = {}, success = true) => {
	const url = req.url ? req.url.slice(0, 100) : 'Sin URL';
	const cleanBody = req.body ? handleAllObjects(req.body) : 'Sin body';
	const cleanMessage = message ? handleAllObjects(message) : 'Sin Mensaje';
	const cleanData = data ? handleAllObjects(data) : 'Sin Data Info';

	console.log('--------------------------');
	console.log('Endpoint: ', url);
	console.log('Body: ', cleanBody);
	console.log('');
	console.log('-------- Response --------');
	console.log('');
	console.log('Success: ', success);
	console.log('Message Response: ', cleanMessage);
	console.log('Data Response: ', cleanData);
	console.log('');
	console.log('------- End Response -------');
};

const formatNumber = (number = 0) => Intl.NumberFormat().format(number);

const handleArray = arr => {
	if (arr.length > 10) {
		if (!Array.isArray(arr[0]) && typeof arr[0] === 'object') {
			return [handleObject(arr[0]), `${formatNumber(arr.length - 1)} more items...`];
		} else {
			return [...arr.slice(0, 9), `${formatNumber(arr.length - 10)} more items...`];
		}
	}
	return arr;
};

const handleObject = obj => {
	let count = 0;
	let cleanObject = {};
	let arrayProperties = [];
	if (Object.keys(obj).length > 0) {
		for (let key in obj) {
			if (count < 10) {
				cleanObject[key] = obj[key];
				if (Array.isArray(obj[key])) cleanObject[key] = handleArray(obj[key]);
				count++;
			} else {
				arrayProperties.push(key);
				cleanObject.moreProperties = handleArray(arrayProperties);
			}
		}
		return cleanObject;
	} else {
		return obj;
	}
};

const handleAllObjects = obj => {
	if (typeof obj === 'object' && Array.isArray(obj)) return handleArray(obj);
	if (typeof obj === 'object' && !Array.isArray(obj)) return handleObject(obj);
	return obj;
};
