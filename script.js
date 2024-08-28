const bar = document.querySelector('#bar');
const close = document.querySelector('#close');
const link = document.querySelector('.links');
const sideNav = document.querySelector('.sideNav')

		bar.addEventListener('click',()=>{
			close.style.display='block';
			bar.style.display="none";
			sideNav.classList.add('open');
		})
		close.addEventListener('click',()=>{
			bar.style.display='block';
			close.style.display="none"
			sideNav.classList.remove('open');
		})