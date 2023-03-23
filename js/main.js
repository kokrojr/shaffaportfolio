// Section five data counter
// Run this function only when in view
// const counts = document.querySelectorAll('.count');
// const speed = 6;
// counts.forEach((counter)=>{
//     function upData() {
//       const target = Number(counter.getAttribute("data-target"));
//       const count = Number(counter.innerHTML);
//       const inc = target / speed;
//       if (count < target) {
//         // alert(count)
//         counter.innerHTML = Math.floor(inc + count);
//         setTimeout(upData, 75);
//       } else {
//         // alert(count)
//         counter.innerHTML = target;
//       }
//     }
//     upData()
// })


// const testimonials = document.querySelectorAll('.testimonial');
// const indicators = document.querySelectorAll('.indicator');
// let index = 0;

// function showTestimonial(n) {
//   testimonials.forEach(testimonial => testimonial.classList.remove('active'));
//   indicators.forEach(indicator => indicator.classList.remove('active'));
//   testimonials[n].classList.add('active');
//   indicators[n].classList.add('active');
// }

// function nextTestimonial() {
//   index = (index + 1) % testimonials.length;
//   showTestimonial(index);
// }

// function previousTestimonial() {
//   index = (index - 1 + testimonials.length) % testimonials.length;
//   showTestimonial(index);
// }

// indicators.forEach((indicator, i) => {
//   indicator.addEventListener('click', () => {
//     showTestimonial(i);
//     index = i;
//   });
// });

// showTestimonial(0);
// setInterval(nextTestimonial, 5000);

// 
// const testimonials = document.querySelectorAll('.testimonial');
// const indicators = document.querySelectorAll('.indicator');
// let index = 0;
// let intervalId;

// function showTestimonial(n) {
//   testimonials.forEach(testimonial => testimonial.classList.remove('active'));
//   indicators.forEach(indicator => indicator.classList.remove('active'));
//   testimonials[n].classList.add('active');
//   indicators[n].classList.add('active');
// }

// function nextTestimonial() {
//   index = (index + 1) % testimonials.length;
//   showTestimonial(index);
// }

// function previousTestimonial() {
//   index = (index - 1 + testimonials.length) % testimonials.length;
//   showTestimonial(index);
// }

// indicators.forEach((indicator, i) => {
//   indicator.addEventListener('click', () => {
//     showTestimonial(i);
//     index = i;
//   });
// });

// function startCarousel() {
//   intervalId = setInterval(nextTestimonial, 5000);
// }

// function stopCarousel() {
//   clearInterval(intervalId);
// }

// document.addEventListener('visibilitychange', () => {
//   if (document.visibilityState === 'hidden') {
//     stopCarousel();
//   } else {
//     startCarousel();
//   }
// });

// showTestimonial(0);
// startCarousel();

