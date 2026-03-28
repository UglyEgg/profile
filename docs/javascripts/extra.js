function wireResumeRequestLinks() {
  const user = "1bc82084-6150-4dc5-8d7e-4c284d7a1978";
  const domain = "entropy.quest";
  const subject = encodeURIComponent("Resume Request");
  const body = encodeURIComponent("Name:\nCompany:\nContext:\n");
  const href = `mailto:${user}@${domain}?subject=${subject}&body=${body}`;

  document.querySelectorAll(".resume-request-link").forEach((link) => {
    link.setAttribute("href", href);
  });
}

function wireDynamicYear() {
  document.querySelectorAll(".js-current-year").forEach((node) => {
    node.textContent = String(new Date().getFullYear());
  });
}

function initializeRichSite() {
  wireResumeRequestLinks();
  wireDynamicYear();
}

if (typeof document$ !== "undefined" && document$?.subscribe) {
  document$.subscribe(() => {
    initializeRichSite();
  });
} else {
  document.addEventListener("DOMContentLoaded", initializeRichSite);
}
