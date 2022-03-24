const axios = require('axios');

exports.addDoctor = async (req, res) => {
	try {
		const { license, name, education, years_of_experience, hospital, contact } = req.body;
		axios
			.post('http://localhost:8000/doctor/', {
				license,
				docId,
				name,
				education,
				years_of_experience,
				hospital,
				contact
			})
			.then((response) => {
				res.status(200).json({
					status: 'Success',
					message: 'New Doctor Added',
					data: response,
				});
			})
			.catch((error) => {
				res.status(404).json({ status: 'Failure', message: 'Error in Saving data' });
			});
	} catch (error) {
		return res.status(424).json({ status: 'Failed', message: 'Request Failed' });
	}
};

exports.getDoctorDetails = (req, res) => {
	try {
		const NHID = req.params.NHID;
		axios
			.get(`http://localhost:8000/doctor?NHID=${NHID}`)
			.then((response) => {
				res.status(200).json({ status: 'Success', data: response });
			})
			.catch((error) => {
				res.status(424).json({ status: 'Failed', message: 'Request Failed' });
			});
	} catch (error) {
		return res.status(424).json({ status: 'Failed', message: 'Request Failed' });
	}
};
