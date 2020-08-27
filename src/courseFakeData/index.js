import course from "./ourCourse";

const courseFakeData = [...ourCourse];

const shuffle = (a) => {
	for (let i = a.length; i; i--) {
		let j = Math.floor(Math.random() * i);
		[a[i - 1], a[j]] = [a[j], a[i - 1]];
	}
};

shuffle(courseFakeData);

export default courseFakeData;