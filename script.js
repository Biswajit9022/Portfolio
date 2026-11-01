// Mobile menu
const nav = document.getElementById("nav");
document.getElementById("menu").onclick = () => nav.classList.toggle("open");
nav.onclick = () => nav.classList.remove("open");

// Skill bars: set widths, animate once when visible
const bars = document.getElementById("bars");
bars.querySelectorAll(".bar").forEach(b => b.querySelector("i").style.setProperty("--w", b.dataset.v + "%"));
new IntersectionObserver((e, o) => {
  if (e[0].isIntersecting) { bars.classList.add("on"); o.disconnect(); }
}, { threshold: 0.3 }).observe(bars);

// Active nav link on scroll
const links = document.querySelectorAll("nav a");
const secs = [...document.querySelectorAll("section")];
addEventListener("scroll", () => {
  let i = secs.findIndex((s, n) => scrollY + 120 < (secs[n + 1]?.offsetTop ?? Infinity));
  links.forEach((l, n) => l.classList.toggle("active", n === i));
}, { passive: true });

// Contact form (EmailJS)
document.getElementById("contactForm").addEventListener("submit", e => {
  e.preventDefault();
  const params = {
    fname: firstName.value, lname: lastName.value,
    subject: subject.value, email: email.value, message: message.value
  };
  emailjs.send("service_mqrex3n", "template_5vaptob", params)
    .then(() => { alert("Email sent successfully!"); e.target.reset(); })
    .catch(err => { console.error(err); alert("Failed to send the email. Please try again later."); });
});
