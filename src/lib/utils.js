// calculate age from birthdate string (ISO: YYYY-MM-DD)
export default function calculateAge(birthISO) {
	const birth = new Date(birthISO);
	const now = new Date();
	let age = now.getFullYear() - birth.getFullYear();
	const m = now.getMonth() - birth.getMonth();
	if (m < 0 || (m === 0 && now.getDate() < birth.getDate())) {
		age--;
	}
	return age;
}
