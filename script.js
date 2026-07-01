console.log("Enterprise Active Directory Azure Lab loaded successfully.");

document.querySelectorAll("a[href^='#']").forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      target.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});


const screenshots = [
  ["screenshots/01-azure-portal-home.png", "Azure Portal Home"],
  ["screenshots/02-resource-group-overview.png", "Resource Group Overview"],
  ["screenshots/03-vnet-review-create.png", "VNet Review Create"],
  ["screenshots/04-vnet-deployment-complete.png", "VNet Deployment Complete"],
  ["screenshots/05-network-security-groups-created.png", "Network Security Groups"],
  ["screenshots/06-windows-server-vm-deployment-complete.png", "Windows Server VM"],
  ["screenshots/07-linux-vm-deployment-complete.png", "Linux VM Deployment"],
  ["screenshots/08-vm-network-settings.png", "VM Network Settings"],
  ["screenshots/09-server-manager-dashboard.png", "Server Manager Dashboard"],
  ["screenshots/10-ad-ds-installation-progress.png", "AD DS Installation Progress"],
  ["screenshots/11-ad-ds-installation-complete.png", "AD DS Installation Complete"],
  ["screenshots/12-dc-promotion-prerequisite-issue.png", "DC Promotion Issue"],
  ["screenshots/13-server-manager-after-restart.png", "Server Manager After Restart"],
  ["screenshots/14-ad-ds-dns-roles-installed.png", "AD DS and DNS Roles"],
  ["screenshots/15-domain-controller-local-server.png", "Domain Controller Local Server"],
  ["screenshots/16-active-directory-domain-visible.png", "AD Domain Visible"],
  ["screenshots/17-active-directory-ou-structure.png", "OU Structure"],
  ["screenshots/18-security-groups-created.png", "Security Groups Created"],
  ["screenshots/19-users-created.png", "Users Created"],
  ["screenshots/20-domain-controller-logon-policy.png", "Logon Policy"],
  ["screenshots/21-domain-sign-in-screen.png", "Domain Sign-in Screen"]
];

let currentSlide = 0;
let playing = false;
let interval;

const slideImage = document.getElementById("slideImage");
const slideTitle = document.getElementById("slideTitle");
const playBtn = document.getElementById("playBtn");
const gallery = document.getElementById("gallery");

function showSlide(index) {
  currentSlide = index;
  slideImage.src = screenshots[index][0];
  slideTitle.textContent = screenshots[index][1];
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % screenshots.length;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + screenshots.length) % screenshots.length;
  showSlide(currentSlide);
}

function togglePlay() {
  if (!playing) {
    interval = setInterval(nextSlide, 2500);
    playBtn.textContent = "Pause";
    playing = true;
  } else {
    clearInterval(interval);
    playBtn.textContent = "Play";
    playing = false;
  }
}

function openModal(src, title) {
  document.getElementById("imageModal").style.display = "block";
  document.getElementById("modalImage").src = src;
  document.getElementById("modalTitle").textContent = title;
}

function closeModal() {
  document.getElementById("imageModal").style.display = "none";
}

screenshots.forEach((item, index) => {
  const card = document.createElement("div");
  card.className = "shot";
  card.innerHTML = `
    <img src="${item[0]}" alt="${item[1]}">
    <h3>${item[1]}</h3>
  `;
  card.onclick = () => {
    showSlide(index);
    openModal(item[0], item[1]);
  };
  gallery.appendChild(card);
});